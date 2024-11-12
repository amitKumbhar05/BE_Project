import express from "express";
import path from "path";
import multer from "multer";
import cv from "opencv4nodejs";
import fs from "fs";

const router = express.Router();

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

// Load Haar cascades
const faceCascade = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
const carCascade = new cv.CascadeClassifier(cv.HAAR_CAR);

// Process Video Route
router.post("/process-video", upload.single("video"), async (req, res) => {
  const videoPath = req.file.path;
  const outputPath = path.join("uploads", "processed_" + req.file.filename);

  const cap = new cv.VideoCapture(videoPath);
  const fps = cap.get(cv.CAP_PROP_FPS);
  const width = cap.get(cv.CAP_PROP_FRAME_WIDTH);
  const height = cap.get(cv.CAP_PROP_FRAME_HEIGHT);

  const writer = new cv.VideoWriter(
    outputPath,
    cv.VideoWriter.fourcc("M", "P", "4", "V"),
    fps,
    new cv.Size(width, height)
  );

  let frame;
  while ((frame = cap.read())) {
    const grayFrame = frame.bgrToGray();
    const faces = faceCascade.detectMultiScale(grayFrame).objects;

    faces.forEach((rect) => {
      const roi = frame.getRegion(rect);
      const blurredRoi = roi.blur(new cv.Size(99, 99));
      blurredRoi.copyTo(frame.getRegion(rect));
      frame.drawRectangle(rect, new cv.Vec(255, 0, 0), 2);
    });

    writer.write(frame);
  }

  cap.release();
  writer.release();

  res.sendFile(path.resolve(outputPath), (err) => {
    if (err) console.error(err);
    fs.unlinkSync(videoPath); // Delete the original video
  });
});

export default router;

import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';

const VideoUpload = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [processedVideo, setProcessedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedVideo) {
      alert('Please select a video file first.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('video', selectedVideo);
      const response = await fetch('http://localhost:5000/process-video', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.blob();
        const videoUrl = URL.createObjectURL(result);
        setProcessedVideo(videoUrl);
      } else {
        console.error('Error processing video.');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />
      <div className="container mx-auto flex items-center justify-center py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Video Upload & Processing</h1>

          <div className="mb-4">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {selectedVideo && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-900">Selected Video:</h2>
              <video
                src={URL.createObjectURL(selectedVideo)}
                controls
                className="w-full h-auto border rounded-lg"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full bg-blue-900 text-white font-bold py-2 px-4 rounded-lg 
          hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Processing...' : 'Submit Video'}
          </button>

          {processedVideo && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-blue-900">Processed Video:</h2>
              <video src={processedVideo} controls className="w-full h-auto border rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;

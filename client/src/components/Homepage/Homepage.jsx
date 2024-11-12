import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Homepage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="container mx-auto flex items-center justify-between py-16">
                {/* Content Side */}
                <div className="w-1/2 px-6">
                    <h2 className="text-4xl font-bold text-green-500">
                        Vehicle Tracking and Blurring System
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Enhance the security and privacy of your convoy vehicles. Our AI-powered tool detects and blurs sensitive details in real-time video processing, keeping classified information secure.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-400">
                        <Link to='/videopro'>Get Started</Link>
                    </button>
                </div>

                {/* Image Side */}
                <div className="w-1/2 px-6 flex">
                    {/* <div className="w-3/12 absolute bg-slate-900 opacity-50 blur-3xl h-80" ></div> */}
                    <img
                        src="img.jpg" // Replace with relevant image URL
                        alt="Convoy Vehicles"
                        className="rounded-lg shadow-lg border border-gray-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default Homepage;

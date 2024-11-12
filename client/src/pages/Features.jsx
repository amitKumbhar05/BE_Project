// src/components/Features.js
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';

const features = [
    {
        title: 'Real-Time Object Detection',
        description: 'Utilizes YOLOv8 to detect vehicles accurately in real-time, ensuring effective tracking.',
    },
    {
        title: 'Privacy-Centric Blurring',
        description: 'Applies blurring to detected vehicles dynamically, protecting individual privacy in sensitive areas.',
    },
    {
        title: 'MERN Stack Integration',
        description: 'Built on a MERN stack and Flask, enabling efficient, scalable data handling and UI interaction.',
    },
    {
        title: 'Secure Data Transmission',
        description: 'Ensures that all vehicle data is processed and transmitted securely across the application.',
    },
];

const Features = () => {
    return (
        <div className='bg-gray-900 min-h-screen text-white'>
            <Navbar />
            <section className="bg-gray-900 container mx-auto flex items-center justify-between">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-10 mt-10">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;

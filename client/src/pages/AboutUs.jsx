// src/components/AboutUs.js
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const teamMembers = [
    {
        name: "Amit Kumbhar",
        role: "Frontend Developer",
        graduationYear: "2025",
        qualification: "B.E. Computer Engineering",
    },
    {
        name: "Aman Sayyad",
        role: "ML Developer",
        graduationYear: "2025",
        qualification: "B.E. Computer Engineering",
    },
    {
        name: "Arman Sayyad",
        role: "Backend Engineer",
        graduationYear: "2025",
        qualification: "B.E. Computer Engineering",
    },
];

const AboutUs = () => {
    return (
        <div className='bg-gray-900 min-h-screen text-white'>
            <Navbar />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-200">Our dedicated team of professionals is working together to make Blurshield a success.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 md:w-72 lg:w-80">
                            <div className="flex justify-center mb-4">
                                <FaUserCircle className="text-gray-300 text-7xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                            <p className="text-blue-500 text-center">{member.role}</p>
                            <div className="mt-4">
                                <p className="text-gray-600 text-sm text-center"><strong>Graduation Year:</strong> {member.graduationYear}</p>
                                <p className="text-gray-600 text-sm text-center"><strong>Qualification:</strong> {member.qualification}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

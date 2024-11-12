// src/components/ContactUs.js
import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been submitted!");
        // Send formData to the backend for processing
    };

    return (
        <div className='bg-gray-900 min-h-screen text-white'>
            <Navbar />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg flex flex-col md:flex-row">

                    {/* Left Side: Contact Information */}
                    <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-gray-600 text-center mb-4">We'd love to hear from you! Reach out to us using the contact form or through any of the following methods:</p>
                        <ul className="text-gray-600 text-center space-y-3 mb-6">
                            <li><strong>Address:</strong> 1234 Street Name, City, State, Zip Code</li>
                            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                            <li><strong>Email:</strong> contact@blurshield.com</li>
                        </ul>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-700 transition duration-150" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-pink-500 text-2xl hover:text-pink-600 transition duration-150" />
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-green-500 text-2xl hover:text-green-600 transition duration-150" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-blue-700 text-2xl hover:text-blue-800 transition duration-150" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-lg h-32"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;

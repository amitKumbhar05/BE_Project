import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from "../navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Signup success
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully signed up.',
          icon: 'success',
          confirmButtonText: 'Go to Login',
        })
        navigate('/videopro');
      } else {
        // Signup error
        Swal.fire({
          title: 'Error!',
          text: data.error,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup');
    }
  };


  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-[90vh] flex items-center justify-center bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              onClick={signup}
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <p className="mt-2 text-gray-700">Already have an account? <span className="cursor-pointer text-blue-500 font-semibold"><Link to='/login'>Login</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;




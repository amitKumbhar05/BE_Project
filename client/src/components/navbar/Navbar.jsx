import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-lg text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-green-500"><Link to='/'>Blurshield</Link></h1>
                <ul className="flex space-x-6">
                    <li className="hover:text-green-500 cursor-pointer"><Link to='/'>Home</Link></li>
                    <li className="hover:text-green-500 cursor-pointer"><Link to='/features'>Features</Link></li>
                    <li className="hover:text-green-500 cursor-pointer"><Link to='/about'>About</Link></li>
                    <li className="hover:text-green-500 cursor-pointer"><Link to='/contact'>Contact</Link></li>
                    <li className="hover:text-green-500 cursor-pointer"><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { FaGoogle } from "react-icons/fa";


const About = () => {
  return (
    <div >
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center min-h-screen"
        style={{ backgroundImage:  'url(/assets/images/auth-img.webp)' 
          
        }}
      >
        <div className="w-96 bg-white rounded-2xl shadow-2xl p-7 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/assets/images/logo.svg" alt="Wandira Logo" className="w-6 h-6" />
            <span className="text-2xl font-semibold  bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">Wandira</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Start Your Travel Journey</h1>
           <p className="text-gray-500 mb-4 text-sm">
        Sign in with Google to explore AI-generated itineraries, trending destinations, and much more
      </p>
       <button
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
        onClick={() => window.location.href = "/Home"}
      > <FaGoogle size={20} color="white" />
      Sign in with Google</button>
        </div>

      </div>

    </div>
  )
}

export default About
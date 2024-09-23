'use client'

import { useState } from 'react'
import { BookOpen, GraduationCap, UserCog } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SchoolLogin() {
  const [userType, setUserType] = useState('teacher')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate(); // Hook to programmatically navigate

  const goToSignUp = () => {
    navigate('/signup'); // Change '/signup' to your desired sign-up page route
  };
  const goToDashboard = () => {
    navigate('/dashboard');
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login form submitted:', { userType, ...formData })
    // Here you would typically handle the login logic
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/active-kids-playing-outdoor-scene_1308-69487.jpg?t=st=1726810161~exp=1726813761~hmac=86fbe2cafdd06073b579f63464a1219296eed520d43a13545b6dcd9386db1fd0&w=1060')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Children playing outdoors"
      />
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black-900 bg-opacity-70 z-10" />

      {/* Login form */}
      <div className="bg-gray-200 opacity-85 p-8 rounded-lg shadow-lg w-full max-w-md relative z-20">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="text-3xl font-bold mt-4 text-blue-800">School Login</h1>
          <p className="text-gray-600 mt-2">Welcome back to our learning community!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-lg font-semibold text-gray-700">Select User Type</label>
            <div className="flex space-x-4 justify-center">
              {['teacher', 'student', 'admin'].map((type) => (
                <label key={type} className="flex flex-col items-center space-y-2">
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={userType === type}
                    onChange={(e) => setUserType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${userType === type ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    {type === 'teacher' && <BookOpen className="h-8 w-8 text-blue-600" />}
                    {type === 'student' && <GraduationCap className="h-8 w-8 text-blue-600" />}
                    {type === 'admin' && <UserCog className="h-8 w-8 text-blue-600" />}
                    <span className="mt-2 font-medium capitalize">{type}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="your.email@school.edu"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={goToDashboard}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a  onClick={goToSignUp} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            Register
          </a>
        </div>
      </div>
    </div>
  )
}
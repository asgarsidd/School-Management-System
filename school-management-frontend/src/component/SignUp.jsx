import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { BookOpen, GraduationCap, UserCog } from 'lucide-react';

export default function SchoolSignUp() {
  const [profile, setProfile] = useState('teacher');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    reEnterPassword: '',
    class: ''
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goToLogin = () => {
    navigate('/login');
  }
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { profile, ...formData });

    // After form submission, navigate to the signup page or another page
    navigate('/signup'); // Adjust the path to match your route (e.g., '/home')
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-red-800 flex items-center justify-center p-4"
    style={{
      backgroundImage: "url('https://img.freepik.com/free-vector/active-kids-playing-outdoor-scene_1308-69487.jpg?t=st=1726810161~exp=1726813761~hmac=86fbe2cafdd06073b579f63464a1219296eed520d43a13545b6dcd9386db1fd0&w=1060')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    
    >
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-4">
          <GraduationCap className="mx-auto h-10 w-12 text-blue-600" />
          <h1 className="text-3xl font-bold mt-4 text-blue-800">School Sign Up</h1>
          <p className="text-gray-600 mt-2">Join our learning community today!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-lg font-semibold text-gray-700">Select Profile</label>
            <div className="flex space-x-4 justify-center">
              <label className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${profile === 'teacher' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <input
                  type="radio"
                  name="profile"
                  value="teacher"
                  checked={profile === 'teacher'}
                  onChange={() => setProfile('teacher')}
                  className="sr-only"
                />
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="mt-2 font-medium">Teacher</span>
              </label>

              <label className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${profile === 'student' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <input
                  type="radio"
                  name="profile"
                  value="student"
                  checked={profile === 'student'}
                  onChange={() => setProfile('student')}
                  className="sr-only"
                />
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="mt-2 font-medium">Student</span>
              </label>

              <label className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${profile === 'admin' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <input
                  type="radio"
                  name="profile"
                  value="admin"
                  checked={profile === 'admin'}
                  onChange={() => setProfile('admin')}
                  className="sr-only"
                />
                <UserCog className="h-8 w-8 text-blue-600" />
                <span className="mt-2 font-medium">Admin</span>
              </label>
            </div>
          </div>

          {profile === 'student' && (
            <div className="space-y-2">
              <label htmlFor="class" className="text-gray-700">Class</label>
              <input
                id="class"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your class"
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@school.edu"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a strong password"
            />
          </div>

      

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a onClick={goToLogin} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

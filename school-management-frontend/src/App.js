import { useState } from 'react';
import SchoolLogin from './component/Login';
import SchoolSignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
 // Make sure SchoolSignUp is a named export
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'; // Correct the import

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> {/* Fix typo */}
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<SchoolLogin />} />
        <Route path='/signup' element={<SchoolSignUp />} /> 
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

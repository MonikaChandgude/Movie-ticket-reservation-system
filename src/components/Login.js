import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
//   const history = useHistory();

  const handleRegisterClick = () => {
    // history.push('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded">Login</button>
        </form>
        <button
          onClick={handleRegisterClick}
          className="w-full px-4 py-2 mt-4 text-white bg-green-600 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;

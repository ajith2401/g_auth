import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContex';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { currentUser, isUserLoggedIn, loading: authLoading } = useAuth(); // Access auth context

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/'); // Redirect if the user is logged in
    }
  }, [isUserLoggedIn, navigate]); // Runs when isUserLoggedIn changes

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      navigate('/'); // Redirect after successful Google login
      // console.log(result.user);
    } catch (err) {
      setError('Something went wrong during Google sign-in!');
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect after successful email/password login
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return <div>Loading...</div>; // Show loading state while fetching auth status
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center text-gray-800">Log In</h2>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-5">
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${loading ? 'bg-gray-400' : 'bg-white text-slate-950 hover:bg-blue-600'}`}
          >
            {loading ? 'Please wait...' : 'Continue with Google'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

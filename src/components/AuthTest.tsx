import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase-config';

const AuthTest = () => {
  const { user, signIn, signUp, signOut } = useAuth();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('testpassword123');
  const [message, setMessage] = useState('');

  const testSignUp = async () => {
    try {
      setMessage('Testing signup...');
      const { error } = await signUp(email, password, 'Test User');
      if (error) {
        setMessage(`Signup error: ${error.message}`);
      } else {
        setMessage('Signup successful! Check your email for confirmation.');
      }
    } catch (error) {
      setMessage(`Signup failed: ${error}`);
    }
  };

  const testSignIn = async () => {
    try {
      setMessage('Testing signin...');
      const { error } = await signIn(email, password);
      if (error) {
        setMessage(`Signin error: ${error.message}`);
      } else {
        setMessage('Signin successful!');
      }
    } catch (error) {
      setMessage(`Signin failed: ${error}`);
    }
  };

  const testSignOut = async () => {
    try {
      setMessage('Testing signout...');
      await signOut();
      setMessage('Signout successful!');
    } catch (error) {
      setMessage(`Signout failed: ${error}`);
    }
  };

  const testConnection = async () => {
    try {
      setMessage('Testing Supabase connection...');
      const { data, error } = await supabase.from('stripe_customers').select('count').limit(1);
      if (error) {
        setMessage(`Database connection error: ${error.message}`);
      } else {
        setMessage('Database connection successful!');
      }
    } catch (error) {
      setMessage(`Connection test failed: ${error}`);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Supabase Auth Test</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">Current Status:</p>
        <p className="font-medium">
          {user ? `Logged in as: ${user.email}` : 'Not logged in'}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <button
            onClick={testConnection}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Test Connection
          </button>
          
          <button
            onClick={testSignUp}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Test Sign Up
          </button>
          
          <button
            onClick={testSignIn}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
          >
            Test Sign In
          </button>
          
          {user && (
            <button
              onClick={testSignOut}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Test Sign Out
            </button>
          )}
        </div>

        {message && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-sm">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthTest; 
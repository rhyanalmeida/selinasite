import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { User as UserType } from '../types/database';
import { User, Mail, Calendar, Edit3 } from 'lucide-react';

const UserProfile = () => {
  const { user: authUser } = useAuth();
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState('');

  const fetchUserProfile = useCallback(async () => {
    if (!authUser) return;
    
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching user profile:', error);
      } else if (data) {
        setUserProfile(data);
        setFullName(data.full_name || '');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser) {
      fetchUserProfile();
    }
  }, [authUser, fetchUserProfile]);

  const updateProfile = async () => {
    if (!authUser) return;

    try {
      const { error } = await supabase
        .from('users')
        .upsert({
          id: authUser.id,
          email: authUser.email!,
          full_name: fullName || null,
        });

      if (error) {
        console.error('Error updating profile:', error);
        alert('Error updating profile');
      } else {
        setEditing(false);
        await fetchUserProfile();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  if (!authUser || loading) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-400" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            {editing ? (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            ) : (
              <p className="text-gray-900">{userProfile?.full_name || 'Not set'}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900">{authUser.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Since</label>
            <p className="text-gray-900">
              {userProfile?.created_at 
                ? new Date(userProfile.created_at).toLocaleDateString()
                : new Date(authUser.created_at).toLocaleDateString()
              }
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-3">
        {editing ? (
          <>
            <button
              onClick={updateProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setFullName(userProfile?.full_name || '');
              }}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
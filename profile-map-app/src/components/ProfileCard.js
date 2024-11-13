import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ profile }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-xl text-center mt-4">{profile.name}</h2>
      <p className="text-gray-600 text-center mt-2">{profile.description}</p>
      <Link 
        to={`/profile/${profile.id}`} 
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 block mx-auto text-center">
        View Summary
      </Link>
    </div>
  );
}

export default ProfileCard;

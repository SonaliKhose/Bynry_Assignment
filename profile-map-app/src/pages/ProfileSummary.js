import React from 'react';
import { useParams } from 'react-router-dom';
import { profiles } from '../data';
import Map from '../components/Map';

function ProfileSummary() {
  const { id } = useParams();
  const profile = profiles.find(profile => profile.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Profile Summary</h1>
      
      {/* Profile Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-center">{profile.name}</h2>
        <p className="text-center text-gray-600">{profile.description}</p>
        
        {/* Map Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <Map address={profile.address} />
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;

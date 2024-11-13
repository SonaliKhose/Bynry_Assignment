import React from 'react';

import ProfileCard from '../components/ProfileCard';
import { profiles } from '../data';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-10">Profile Map Viewer</h1>
      
      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {profiles.map((profile) => (
          <ProfileCard 
            key={profile.id} 
            profile={profile} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

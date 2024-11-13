

import React from 'react';

function About() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">About Us</h1>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
        <p className="text-xl">
          We are a platform dedicated to helping you explore and connect with inspiring profiles.
          Our goal is to provide a seamless experience for discovering talented individuals across
          various fields, from technology to art. Whether you're looking for a new role model or
          want to connect with people who share your interests, we offer a diverse range of profiles
          that will inspire and empower you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">Our History</h2>
        <p className="text-xl">
          Founded in 2023, we started with a simple idea: to create a platform that bridges the gap
          between talented individuals and those who seek inspiration. Over the years, we've expanded
          our reach, building a diverse community of professionals, artists, tech enthusiasts, and
          creators from all over the world. We're proud of the network we've built and the positive
          impact it's had on people's lives.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc pl-6 text-xl">
          <li>Inspiration: We believe in the power of inspiration to fuel creativity and growth.</li>
          <li>Community: We strive to build a supportive and inclusive community where everyone feels welcome.</li>
          <li>Innovation: We're constantly innovating to bring new features that improve the user experience.</li>
          <li>Integrity: We operate with transparency, honesty, and respect for everyone in our network.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-2">Meet Our Team</h2>
        <p className="text-xl mb-4">
          Our team is made up of passionate individuals from diverse backgrounds who are committed to
          making the platform a success. Here's a glimpse of some of our key team members:
        </p>

        <div className="flex space-x-6">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Co-Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-500">Co-Founder & CTO</p>
          </div>
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <p className="font-semibold">James Brown</p>
            <p className="text-sm text-gray-500">Lead Designer</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
        <p className="text-xl">
          Have any questions or suggestions? We'd love to hear from you! Feel free to reach out
          to us at <a href="mailto:contact@profileexplorer.com" className="text-blue-500">contact@profileexplorer.com</a>.
        </p>
      </section>
    </div>
  );
}

export default About;

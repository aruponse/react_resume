import React from 'react';
import { profileData } from '../data/profileData';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Sobre Mí
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
        </h2>
        <p className="text-center text-lg leading-relaxed mt-8">
          {profileData.about}
        </p>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { Hero } from '../components/Hero';
import { SocialLinks } from '../components/SocialLinks';

export function Home() {
  return (
    <div id="home">
      <div className="max-w-7xl mx-auto px-6">
        <Hero />
        <SocialLinks />
      </div>
    </div>
  );
}

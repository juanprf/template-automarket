import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { MissionVision } from '../components/about/MissionVision';
import { TeamSection } from '../components/about/TeamSection';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <TeamSection />
    </div>
  );
}
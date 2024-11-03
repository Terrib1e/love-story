// src/data/story-data.ts
import { Coffee, Music, Plane, Camera, Star } from 'lucide-react';
import { StoryBeat } from '../types/story';

export const storyBeats: StoryBeat[] = [
  {
    title: "The First Meeting",
    date: "Spring 2023",
    icon: Coffee,
    content: "Their eyes met across the crowded café. Sarah was working on her laptop, while Mike was ordering his usual americano. A spilled coffee led to shared napkins, nervous laughter, and the exchange of phone numbers."
  },
  {
    title: "Concert Magic",
    date: "Summer 2023",
    icon: Music,
    content: "Their first date at an indie rock concert. The music was loud, but their hearts beat louder. They danced until midnight, feeling like the only two people in the world."
  },
  {
    title: "Adventure Begins",
    date: "Fall 2023",
    icon: Plane,
    content: "A spontaneous weekend trip to the coast. They packed their bags on a whim, drove for hours, and discovered they both loved the same obscure podcasts. The sunset that evening painted the sky in shades of their future."
  },
  {
    title: "Capturing Moments",
    date: "Winter 2023",
    icon: Camera,
    content: "Their shared Instagram now full of silly faces and tender moments. Every photo tells a story of two people falling deeper in love with each passing day."
  },
  {
    title: "The Proposal",
    date: "Spring 2024",
    icon: Star,
    content: "Under cherry blossoms in the park where they often walked, Mike got down on one knee. Sarah's yes echoed through the trees, carried by the spring breeze."
  }
];
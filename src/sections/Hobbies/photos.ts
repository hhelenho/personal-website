// Outdoor and running photos for the Outdoors gallery.
// To add one: drop the image into src/assets/hobbies/, import it below, and add it to the list.

import hiking from '../../assets/hobbies/hiking.jpg';
import skiing from '../../assets/hobbies/skiing.jpg';
import marathon from '../../assets/hobbies/marathon.jpg';

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export const photos: Photo[] = [
  { src: hiking, alt: 'Helen hiking in the mountains above the clouds' },
  { src: skiing, alt: 'Helen smiling with skis at a ski resort' },
  { src: marathon, alt: 'Helen with friends in Central Park' },
];

// Placeholder tiles are shown only while the gallery is empty.
export const placeholderCount = 4;

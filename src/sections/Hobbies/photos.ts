// Running and training photos for the Hobbies gallery.
// To add one: drop the image into src/assets/hobbies/, import it below, and add it to the list.
// Example:
//   import longRun from '../../assets/hobbies/long-run.jpg';
//   export const photos: Photo[] = [{ src: longRun, alt: 'Long run in Central Park', caption: 'Long run' }];

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export const photos: Photo[] = [];

// Placeholder tiles are shown until real photos are added.
export const placeholderCount = 4;

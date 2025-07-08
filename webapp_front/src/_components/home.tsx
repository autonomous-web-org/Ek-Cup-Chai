import { useMemo } from 'react';
// import { Link } from "react-router";

import Biscuit from "/src/assets/home/biscuit_nb.png";
import Rusk from "/src/assets/home/rusk_nb.png";
import Samosa from "/src/assets/home/samosa_nb.png";
import Fan from "/src/assets/home/fan_nb.png";
// import ChaiCup from "/src/assets/chai.png";



// Default number of decorations per side
const DEFAULT_LEFT_COUNT = 3;
const DEFAULT_RIGHT_COUNT = 3;

/**
 * Home component renders a hero section with decorative images
 * on the left and right sides, randomly positioned and rotated.
 *
 * Props:
 * - leftImages: array of image imports for left side
 * - rightImages: array of image imports for right side
 * - leftCount: number of images to render on left
 * - rightCount: number of images to render on right
 */
const Home = ({
  leftImages = [Rusk, Fan, Samosa],
  rightImages = [Fan, Samosa, Biscuit],
  leftCount = DEFAULT_LEFT_COUNT,
  rightCount = DEFAULT_RIGHT_COUNT,
}) => {
  // Prepare decoration data once per mount
  const decorations = useMemo(() => {
    // Fisher-Yates shuffle
    const shuffleArray = (arr: any) => {
        const array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
  
    const fillAndDecorate = (images: any[], count: number) => {
        const shuffled = shuffleArray(images);
      // Cycle through provided images to fill the count
      const filled = Array.from({ length: count }, (_, i) => shuffled[i % shuffled.length]);
      // Assign random top positions and rotations
      return filled.map(src => ({
        src,
        top: Math.random() * (window.innerHeight/100)-6,           // between 0% and 60%
        rotate: Math.random() * 60 - 30,   // between -30° and +30°
      }));
    };
    return {
      left: fillAndDecorate(leftImages, leftCount),
      right: fillAndDecorate(rightImages, rightCount),
    };
  }, [leftImages, rightImages, leftCount, rightCount]);

  const punchLines = [
    "More chai, more friends, more fun.",
    "Let's talk, Share, sip, and grow together over a warm cup of tea."
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center gap-6 py-[30vh]">
      {/* Left-side decorations */}
      {decorations.left.map((d, idx) => (
        <img
          key={`left-${idx}`}
          src={d.src}
          alt=""
          className="absolute left-0 transform"
          
          // initial={{ opacity: 0, scale: 0.6, rotate: d.rotate }}
          // animate={{ opacity: 1, scale: 0.9, rotate: d.rotate }}
          // transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: 'easeIn' }}
          style={{
            transform: `translateX(-39%) rotate(${d.rotate}deg)`,
            top: (window.innerHeight < window.innerWidth) ? `${d.top}%` : `${d.top + 50}%`, 
          }}
        />
      ))}

      {/* Right-side decorations */}
      {decorations.right.map((d, idx) => (
        <img
          key={`right-${idx}`}
          src={d.src}
          alt=""
          className="absolute right-0 transform"
          
          // initial={{ opacity: 0, scale: 0.6, rotate: d.rotate }}
          // animate={{ opacity: 1, scale: 0.9, rotate: d.rotate }}
          // transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: 'easeIn' }}
          style={{
            transform: `translateX(39%) rotate(${d.rotate}deg)`,
            top: (window.innerHeight < window.innerWidth) ? `${d.top}%` : `${d.top + 50}%`, 
          }}
        />
      ))}

      {/* Hero text */}
      <em className="text-3xl text-primary text-center z-10 home-page-text font-bold" >
        {
          punchLines[Math.floor(punchLines.length*Math.random())]
        }
      </em>
      {/* <section className='space-x-6  text-xl'>
        <button className='!bg-accent p-3 px-6 !text-secondary rounded-lg'>Customize QR</button>
        <Link to={'socialize'} className='underline underline-offset-1 !text-primary'>Socialize</Link>
      </section> */}
    </div>
  );
};

export default Home;

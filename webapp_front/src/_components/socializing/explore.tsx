import React, { useState, useEffect, JSX } from "react";
import { motion, MotionProps } from "framer-motion";

const items: {
  type: "image" | "video" | "gif";
  src: string;
  alt: string;
}[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Nature",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Sample Video",
  },
  {
    type: "gif",
    src: "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    alt: "Funny GIF",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Mountains",
  },
];

const CARD_WIDTH = 470;
const CARD_HEIGHT = 630;

function Explore(): JSX.Element {
  const [active, setActive] = useState<number>(0);
  const [sideOffset, setSideOffset] = useState<number>(0);

  // track views per item
  const [views, setViews] = useState<number[]>(items.map(() => 0));

  // calculate peek offset as 30% of viewport width
  useEffect(() => {
    const updateOffset = () => {
      setSideOffset(window.innerWidth * 0.3);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // increment view count whenever active changes
  useEffect(() => {
    setViews((prev) => {
      const next = [...prev];
      next[active] = (next[active] || 0) + 1;
      return next;
    });
  }, [active]);

  const prevIdx = (active - 1 + items.length) % items.length;
  const nextIdx = (active + 1) % items.length;

  // hide side cards on small screens (<640px)
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;
  const visibleIndices: number[] = isMobile
    ? [active]
    : [prevIdx, active, nextIdx];

  const handleCardClick = (idx: number): void => {
    if (idx === prevIdx) setActive(prevIdx);
    if (idx === nextIdx) setActive(nextIdx);
  };

  const handleReport = (idx: number): void => {
    // stub: replace with your reporting logic
    alert(`Reported: ${items[idx].alt}`);
  };

  const cardProps = (idx: number): MotionProps => {
    if (idx === active) {
      return {
        style: { cursor: "default", zIndex: 2 },
        animate: {
          scale: 1,
          opacity: 1,
          x: 0,
          boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
        },
      };
    }
    if (!isMobile && idx === prevIdx) {
      return {
        style: { cursor: "pointer", zIndex: 1 },
        animate: {
          scale: 0.8,
          opacity: 0.5,
          x: -sideOffset,
          boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
        },
      };
    }
    if (!isMobile && idx === nextIdx) {
      return {
        style: { cursor: "pointer", zIndex: 1 },
        animate: {
          scale: 0.8,
          opacity: 0.5,
          x: sideOffset,
          boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
        },
      };
    }
    return {
      animate: { scale: 0.6, opacity: 0, x: 0 },
    };
  };

  return (
    <>
      <div className="relative w-full h-[90%] flex items-center justify-center">
        {visibleIndices.map((idx) => {
          const item = items[idx];
          return (
            <motion.div
              key={idx}
              className={`absolute left-1/2 top-1/2 w-[${CARD_WIDTH}px] h-[${CARD_HEIGHT}px] -translate-x-1/2 -translate-y-1/2
               rounded-2xl bg-accent-light shadow-xl overflow-hidden flex items-center justify-center transition-all duration-300`}
              {...cardProps(idx)}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => handleCardClick(idx)}
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
              {item.type === "video" && (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
              {item.type === "gif" && (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* View count and Report button for the active item */}
      <section className="flex items-center justify-center space-x-6 text-xl">
        <span className="text-gray-700">
          {views[active]} view{views[active] === 1 ? "" : "s"}
        </span>
        <button
          onClick={() => handleReport(active)}
          className="text-red-500 hover:underline"
        >
          Report
        </button>
      </section>
    </>
  );
}

export default Explore;

import { useState, useEffect, JSX } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import BottomBar from "./bottom_bar";

const items: {
  type: "image" | "video" | "gif";
  src: string;
  alt: string;
  views: number;
}[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Nature",
    views: 0
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Sample Video",
    views: 0
  },
  {
    type: "gif",
    src: "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    alt: "Funny GIF",
    views: 0
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Mountains",
    views: 0
  },
];

function Explore(): JSX.Element {
  const [active, setActive] = useState<number>(0);
  const [sideOffset, setSideOffset] = useState<number>(0);

  // track view counts
  const [views, setViews] = useState<number[]>(items.map((z) => z.views));

  // calculate 30% viewport width for peek offset
  useEffect(() => {
    const updateOffset = () => setSideOffset(window.innerWidth * 0.3);
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // increment view count when active changes
  useEffect(() => {
    setViews((prev) => {
      const next = [...prev];
      next[active] = (next[active] || 0) + 1;
      return next;
    });
  }, [active]);
  
  const handleReport = (idx: number): void => {
    alert(`Reported: ${items[idx].alt}`);
  };


  const prevIdx = (active - 1 + items.length) % items.length;
  const nextIdx = (active + 1) % items.length;

  // on small screens only show the active card
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const visibleIndices: number[] = isMobile
    ? [active]
    : [prevIdx, active, nextIdx];

  const handleCardClick = (idx: number): void => {
    if (idx === prevIdx) setActive(prevIdx);
    if (idx === nextIdx) setActive(nextIdx);
  };

  const cardProps = (idx: number): MotionProps => {
    // Active card animates in from center
    if (idx === active) {
      return {
        initial: { scale: 0.8, opacity: 0, x: 0 },
        animate: {
          scale: 1,
          opacity: 1,
          x: 0,
          boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
        },
        exit: { scale: 0.8, opacity: 0 },
        style: { cursor: "default", zIndex: 2 },
      };
    }

    // Prev peek slides in from left
    if (!isMobile && idx === prevIdx) {
      return {
        initial: { scale: 0.8, opacity: 0, x: -sideOffset },
        animate: {
          scale: 0.8,
          opacity: 0.5,
          x: -sideOffset,
          boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
        },
        exit: { opacity: 0, x: -sideOffset },
        style: { cursor: "pointer", zIndex: 1 },
      };
    }

    // Next peek slides in from right
    if (!isMobile && idx === nextIdx) {
      return {
        initial: { scale: 0.8, opacity: 0, x: sideOffset },
        animate: {
          scale: 0.8,
          opacity: 0.5,
          x: sideOffset,
          boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
        },
        exit: { opacity: 0, x: sideOffset },
        style: { cursor: "pointer", zIndex: 1 },
      };
    }

    // All others stay hidden
    return {
      initial: { scale: 0.6, opacity: 0, x: 0 },
      animate: { scale: 0.6, opacity: 0, x: 0 },
      exit: { opacity: 0 },
    };
  };

  return (
    <>
      <div className="relative w-full h-[90%] flex items-center justify-center">
        <AnimatePresence initial={false}>
          {visibleIndices.map((idx) => {
            const item = items[idx];
            return (
              <motion.div
                key={idx}
                {...cardProps(idx)}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => handleCardClick(idx)}
                className="absolute left-1/2 top-1/2 w-[30%] h-[90%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-accent-light shadow-xl overflow-hidden flex items-center justify-center"
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
        </AnimatePresence>
      </div>
      <BottomBar
        views={views[active]}
        onReport={() => handleReport(active)}
        onUpload={() => alert("Upload clicked")}
        onShare={() => alert("Share clicked")}
      />
    </>
  );
}

export default Explore;

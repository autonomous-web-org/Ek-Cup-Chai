// BottomBar.tsx
import { useState, JSX } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Share2, Flag } from "lucide-react";

interface BottomBarProps {
  views: number;
  onReport: () => void;
  onUpload: () => void;
  onShare: () => void;
}

const BottomBar = ({
  views,
  onReport,
  onUpload,
  onShare,
}: BottomBarProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  // height of the little handle, must match the h-2 Tailwind utility (0.5rem = 8px)
  const handleHeight = "8px";

  return (
    <motion.div
      // start with bottom at -10vh so only the handle (8px) shows
      initial={{ bottom: `-10vh` }}
      animate={{ bottom: open ? "0px" : "-10vh" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ height: `calc(10vh + ${handleHeight})` }}
      className="fixed left-0 w-full bg-transparent shadow-xl z-10"
    >
      {/* the handle sits inside at the top of the panel */}
      <div
        onClick={() => setOpen((o) => !o)}
        className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-12 h-3 rounded-t-lg bg-gray-400 cursor-pointer"
        title={open ? "Hide" : "Show"}
      />

      {/* panel content, pushed down by the handle height */}
      <div className="h-full flex items-center justify-around px-6 pt-2 text-primary">
        {/* Views */}
        {/* <section className="flex flex-col items-center justify-center">
          <span className="text-lg font-medium">{views}</span>
          <span className="text-lg ">people sipped a cup of tea on this moment</span>
        </section> */}

        {/* Report */}
        {/* <button
          onClick={onReport}
          className="flex flex-col items-center hover:text-red-600"
        >
          <Flag size={24} />
          <span className="text-lg">Report</span>
        </button> */}

        {/* Upload */}
        <button
          onClick={onUpload}
          className="flex flex-col items-center hover:text-blue-600"
        >
          <UploadCloud size={24} />
          <span className="text-lg">Share your chai moments</span>
        </button>

        {/* Share */}
        <button
          onClick={onShare}
          className="flex flex-col items-center hover:text-green-600"
        >
          <Share2 size={24} />
          <span className="text-lg">Share it with your friends</span>
        </button>
      </div>
    </motion.div>
  );
};

export default BottomBar;

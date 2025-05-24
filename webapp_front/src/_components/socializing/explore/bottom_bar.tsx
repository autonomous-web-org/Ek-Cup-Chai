// BottomBar.tsx
import { useState, JSX } from "react";
import { motion } from "framer-motion";

import { UploadCloud, Share2 } from "lucide-react";// Flag

import ModalOveraly from "../../modal_overlay";

interface BottomBarProps {
  // views: number;
  // onReport: () => void;
  refetch: () => void;
  onShare: () => void;
}


const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const BottomBar = ({
  // views,
  // onReport,
  refetch,
  onShare,
}: BottomBarProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [showDropZone, setShowDropZone] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);


   const handleFiles = async (file: File) => {
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      setError("Only images, GIFs or videos allowed.");
      return;
    }
    setUploading(true);
    setError(null);

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);
    form.append("tags", "chai_moments");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        { method: "POST", body: form }
      );
      const body = await res.json();
      if (body.error) throw new Error(body.error.message);
      // alert("Uploaded to: " + body.secure_url);
      refetch();
      setShowDropZone(false);
    } catch (e: any) {
      console.error(e);
      setError(e.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

   const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFiles(file);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFiles(file);
  };

  // handleHeight = 8px to match the little grabber
  const handleHeight = "12px";


  return (
    <>
      <motion.div
        // start with bottom at -10vh so only the handle (8px) shows
        initial={{ bottom: `-10vh` }}
        animate={{ bottom: open ? "0px" : "-10vh" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ height: `calc(10vh + ${handleHeight})` }}
        className="fixed left-0 w-full bg-secondary/60 backdrop-blur-lg shadow-xl z-10"
      >
        {/* the handle sits inside at the top of the panel */}
        <div
          onClick={() => setOpen((o) => !o)}
          className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-12 h-3 rounded-t-lg bg-primary cursor-pointer"
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
            onClick={() => setShowDropZone(true)}
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

      {/* Fullscreen Drop Zone Overlay */}
      {showDropZone && (
        <ModalOveraly
          closeModal={() => setShowDropZone(false)}
        >
          <div className="bg-secondary rounded-lg p-8 text-center w-80 text-primary"
            onDrop={onDrop} onDragOver={onDragOver}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-4">
              {uploading
                ? "Uploading..."
                : "Drag & drop an image/gif/video here, or"}
            </p>
            {!uploading && (
              <>
                <label className="inline-block px-4 py-2 bg-accent text-white rounded cursor-pointer hover:bg-primary transition-all">
                  Browse files
                  <input
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={onFileChange}
                  />
                </label>
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </>
            )}
            {uploading && <p className="text-sm text-gray-500">Please wait…</p>}
          </div>
        </ModalOveraly>
      )}
    </>
  );
};

export default BottomBar;

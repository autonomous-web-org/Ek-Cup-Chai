// Explore.tsx
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import BottomBar from "./bottom_bar";

interface Item {
  type: "image" | "video" | "gif";
  src: string;
  alt: string;
  views: number;
}

// Demo fallback items
const DEMO_ITEMS: Item[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Nature",
    views: 0,
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Sample Video",
    views: 0,
  },
  {
    type: "gif",
    src: "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    alt: "Funny GIF",
    views: 0,
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Mountains",
    views: 0,
  },
];

function Explore() {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const folder = import.meta.env.VITE_CLOUDINARY_UPLOAD_FOLDER;
  const [items, setItems] = useState<Item[]>(DEMO_ITEMS);

  async function fetchCloudItems() {
    if (!cloudName || !folder) {
      console.warn("Missing Cloudinary config, using demo items");
      return;
    }
    try {
      const res = await fetch(
        `https://res.cloudinary.com/${cloudName}/any/list/${folder}.json`
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();

      const cloudItems: Item[] = data.resources.map((r: any) => {
        let type: Item["type"] = "image";
        if (r.resource_type === "video") type = "video";
        else if (r.format === "gif") type = "gif";
        return {
          type,
          src: `https://res.cloudinary.com/${cloudName}/${r.resource_type}/upload/v${r.version}/${r.public_id}.${r.format}`,
          alt: r.public_id,
          views: 0,
        };
      });

      if (cloudItems.length > 0) setItems(cloudItems);
    } catch (e) {
      console.error("Failed to load Cloudinary items:", e);
    }
  }

  useEffect(() => {
    fetchCloudItems();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center px-2 ">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          mousewheel={true}
          direction="vertical"          
          keyboard={{ enabled: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
          }}
          className="w-full h-[85vh] z-10 overflow-hidden"
        >
          {items.map((item, idx) => (
            <SwiperSlide
              key={item.src + idx}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-[500px] h-[80vh] rounded-2xl overflow-hidden shadow-lg bg-accent-light">
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                  />
                )}
                {item.type === "video" && (
                  <video
                    src={item.src}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-contain"
                  />
                )}
                {item.type === "gif" && (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <BottomBar
        refetch={fetchCloudItems}
        onShare={() => alert("Share clicked")}
      />
    </>
  );
}

export default Explore;

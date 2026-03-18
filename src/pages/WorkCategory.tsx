import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X, Maximize2, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const aiImagesRaw = import.meta.glob('/src/assets/AI Image/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, { default: string }>;
const aiVideosRaw = import.meta.glob('/src/assets/AI Videos/*.mp4', { eager: true }) as Record<string, { default: string }>;

const aiImages = Object.values(aiImagesRaw).map(img => img.default);
const aiVideos = Object.values(aiVideosRaw).map(vid => vid.default);

const WorkCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (categoryId !== "ai-images" && categoryId !== "ai-videos") {
    return <NotFound />;
  }

  const isImages = categoryId === "ai-images";
  const items = isImages ? aiImages : aiVideos;
  const title = isImages ? "AI Images" : "AI Videos";
  const description = isImages ? "AI-generated images and portraits." : "AI-generated cinematic storytelling videos.";

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
        </motion.div>

        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {description}
            </p>
          </div>
        </ScrollReveal>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((itemSrc, index) => (
            <ScrollReveal key={index}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => isImages ? setSelectedImage(itemSrc) : setSelectedVideo(itemSrc)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted/20">
                  {isImages ? (
                    <motion.img
                      src={itemSrc}
                      alt={`AI Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={itemSrc}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        muted
                        playsInline
                        loop
                        onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                        onMouseLeave={(e) => {
                          const v = e.target as HTMLVideoElement;
                          v.pause();
                          v.currentTime = 0;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-300">
                        <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View Icon */}
                <motion.div className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-primary" />
                </motion.div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-4 rounded-full bg-background/50 hover:bg-background/80 text-foreground transition-all duration-300 z-50 backdrop-blur-md border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-4 rounded-full bg-background/50 hover:bg-background/80 text-foreground transition-all duration-300 z-50 backdrop-blur-md border border-white/10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                controlsList="nodownload"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkCategory;

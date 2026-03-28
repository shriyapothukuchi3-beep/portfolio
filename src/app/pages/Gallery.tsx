import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const artPieces = [
  '/images/137C639D-073C-4ADA-B4BD-0EA40067818A_1_102_o.jpeg',
  '/images/31716875-19CE-4A63-8AF8-566911951BEF_1_102_o.jpeg',
  '/images/33EF8F7A-0B0B-4910-99D2-E20110B4C676_1_102_o.jpeg',
  '/images/625ABFFE-D2B0-470B-ADA9-2D6D9C7C57E3_1_102_o.jpeg',
  '/images/8E5118F7-9B6A-4460-B0BD-456CFCA2C193_1_102_o.jpeg',
  '/images/974676F1-7D04-447E-BB41-7EBEBF5C78A6_1_102_o.jpeg',
  '/images/D85DDACE-B2B5-46F0-A8FF-D83D3E83BF4D_1_102_o.jpeg',
  '/images/FDEB8EA8-3DE0-47CC-B155-A235F7020EDF_1_102_o.jpeg',
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0F0F13] pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F5F5] mb-4">
            Gallery
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}
          >
            <Masonry gutter="1.5rem">
              {artPieces.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery artwork ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F0F13]/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-[#F5F5F5] hover:text-[#6C3FC8] transition-colors"
              >
                <X size={24} />
              </button>

              <img
                src={selectedImage}
                alt="Selected gallery artwork"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
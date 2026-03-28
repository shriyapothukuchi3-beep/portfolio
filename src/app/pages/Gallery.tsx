import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface ArtPiece {
  id: string;
  url: string;
  name: string;
  medium: string;
  year: string;
  category: string;
}

const sampleArtPieces: ArtPiece[] = [
  {
    id: '1',
    url: '/images/137C639D-073C-4ADA-B4BD-0EA40067818A_1_102_o.jpeg',
    name: 'Artwork 1',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '2',
    url: '/images/31716875-19CE-4A63-8AF8-566911951BEF_1_102_o.jpeg',
    name: 'Artwork 2',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '3',
    url: '/images/33EF8F7A-0B0B-4910-99D2-E20110B4C676_1_102_o.jpeg',
    name: 'Artwork 3',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '4',
    url: '/images/625ABFFE-D2B0-470B-ADA9-2D6D9C7C57E3_1_102_o.jpeg',
    name: 'Artwork 4',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '5',
    url: '/images/8E5118F7-9B6A-4460-B0BD-456CFCA2C193_1_102_o.jpeg',
    name: 'Artwork 5',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '6',
    url: '/images/974676F1-7D04-447E-BB41-7EBEBF5C78A6_1_102_o.jpeg',
    name: 'Artwork 6',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '7',
    url: '/images/D85DDACE-B2B5-46F0-A8FF-D83D3E83BF4D_1_102_o.jpeg',
    name: 'Artwork 7',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
  {
    id: '8',
    url: '/images/FDEB8EA8-3DE0-47CC-B155-A235F7020EDF_1_102_o.jpeg',
    name: 'Artwork 8',
    medium: 'Digital Art',
    year: '2024',
    category: 'illustration',
  },
];

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Illustration', value: 'illustration' },
  { label: '3D & Animation', value: '3d' },
  { label: 'Motion', value: 'motion' },
  { label: 'Brand Design', value: 'brand' },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<ArtPiece | null>(null);

  const filteredArtPieces =
    activeFilter === 'all'
      ? sampleArtPieces
      : sampleArtPieces.filter((art) => art.category === activeFilter);

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
          <p className="text-base text-[#999] max-w-2xl">
            Personal explorations in illustration, 3D art, and motion design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filterCategories.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-sm font-normal border transition-colors ${
                activeFilter === filter.value
                  ? 'border-[#6C3FC8] text-[#6C3FC8]'
                  : 'border-[#2a2a35] text-[#999] hover:border-[#444] hover:text-[#F5F5F5]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {filteredArtPieces.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}
            >
              <Masonry gutter="1.5rem">
                {filteredArtPieces.map((artPiece, index) => (
                  <motion.div
                    key={artPiece.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(artPiece)}
                  >
                    <img
                      src={artPiece.url}
                      alt={artPiece.name}
                      className="w-full h-auto object-cover"
                    />

                    <div className="absolute inset-0 bg-[#0F0F13]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-[#F5F5F5] text-base font-medium mb-1">
                        {artPiece.name}
                      </h3>
                      <p className="text-[#999] text-xs mb-3">
                        {artPiece.medium} · {artPiece.year}
                      </p>
                      <span className="text-[#6C3FC8] text-xs font-medium">
                        View →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#666] text-sm">No pieces found in this category.</p>
          </div>
        )}
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
                src={selectedImage.url}
                alt={selectedImage.name}
                className="w-full h-full object-contain"
              />

              <div className="mt-6 text-center">
                <h3 className="text-[#F5F5F5] text-xl font-medium mb-2">
                  {selectedImage.name}
                </h3>
                <p className="text-[#999] text-sm">
                  {selectedImage.medium} · {selectedImage.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
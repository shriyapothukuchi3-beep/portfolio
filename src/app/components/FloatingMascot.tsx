import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface FloatingMascotProps {
  variant?: 'waving' | 'thinking' | 'creating';
}

export function FloatingMascot({ variant = 'waving' }: FloatingMascotProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isPurring, setIsPurring] = useState(false);
  const [pawprints, setPawprints] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Random purring
  useEffect(() => {
    const purringInterval = setInterval(() => {
      setIsPurring(true);
      setTimeout(() => setIsPurring(false), 2500);
    }, Math.random() * 12000 + 10000);

    return () => clearInterval(purringInterval);
  }, []);

  // Eye following mouse logic
  const eyeOffsetX = (mousePosition.x / window.innerWidth - 0.5) * 5;
  const eyeOffsetY = (mousePosition.y / window.innerHeight - 0.5) * 5;

  const handleClick = () => {
    setIsClicked(true);
    setPawprints([...pawprints, Date.now()]);
    setTimeout(() => setIsClicked(false), 700);
    setTimeout(() => {
      setPawprints((prev) => prev.slice(1));
    }, 2500);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 cursor-pointer select-none"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <motion.div
          animate={{
            y: isClicked ? [0, -25, 0] : [0, -8, 0],
          }}
          transition={{
            y: { duration: isClicked ? 0.6 : 2.5, repeat: isClicked ? 0 : Infinity, ease: "easeInOut" },
          }}
          className="relative scale-75 sm:scale-90 md:scale-100"
        >
          {/* Cat Container */}
          <svg width="140" height="160" viewBox="0 0 140 160" fill="none">
            {/* Shadow */}
            <motion.ellipse
              cx="70"
              cy="150"
              rx="35"
              ry="8"
              fill="#1a1a1a"
              initial={{ opacity: 0.2 }}
              animate={{ 
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.25 : 0.2,
              }}
            />
            
            {/* Tail - simple and curved */}
            <motion.path
              d="M 100 110 Q 120 100 125 75 Q 128 55 122 40"
              stroke="#1a1a1a"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: isClicked 
                  ? [
                      "M 100 110 Q 120 100 125 75 Q 128 55 122 40",
                      "M 100 110 Q 115 90 110 65 Q 105 45 100 30",
                      "M 100 110 Q 120 100 125 75 Q 128 55 122 40",
                    ]
                  : isHovered 
                    ? "M 100 110 Q 118 105 123 80 Q 126 60 120 45"
                    : isPurring
                      ? [
                          "M 100 110 Q 120 100 125 75 Q 128 55 122 40",
                          "M 100 110 Q 115 95 118 70 Q 120 50 115 35",
                          "M 100 110 Q 120 100 125 75 Q 128 55 122 40",
                        ]
                      : "M 100 110 Q 120 100 125 75 Q 128 55 122 40",
              }}
              transition={{ 
                duration: isClicked ? 0.5 : (isPurring ? 2.5 : 0.4),
                repeat: isClicked ? 1 : 0,
              }}
            />
            
            {/* Body - oval */}
            <motion.ellipse
              cx="70"
              cy="110"
              rx="32"
              ry="38"
              fill="#1a1a1a"
              animate={{ 
                scale: isPurring ? [1, 1.02, 1] : 1,
              }}
              transition={{ duration: 0.5, repeat: isPurring ? Infinity : 0 }}
            />
            
            {/* White belly patch */}
            <ellipse
              cx="70"
              cy="120"
              rx="18"
              ry="24"
              fill="#f5f5dc"
              opacity="0.3"
            />
            
            {/* Head - simple circle */}
            <motion.circle
              cx="70"
              cy="60"
              r="32"
              fill="#1a1a1a"
              animate={{ 
                scale: isClicked ? [1, 1.06, 1] : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Ears - pointed triangles */}
            <motion.g
              animate={{ 
                rotate: isHovered ? -6 : (isClicked ? [-10, 10, 0] : 0),
              }}
              transition={{ duration: 0.3 }}
              style={{ originX: '50px', originY: '38px' }}
            >
              <path
                d="M 50 38 L 38 18 L 58 32 Z"
                fill="#1a1a1a"
              />
              <path
                d="M 50 36 L 43 24 L 55 32 Z"
                fill="#d4a5a5"
                opacity="0.7"
              />
            </motion.g>
            
            <motion.g
              animate={{ 
                rotate: isHovered ? 6 : (isClicked ? [10, -10, 0] : 0),
              }}
              transition={{ duration: 0.3 }}
              style={{ originX: '90px', originY: '38px' }}
            >
              <path
                d="M 90 38 L 102 18 L 82 32 Z"
                fill="#1a1a1a"
              />
              <path
                d="M 90 36 L 97 24 L 85 32 Z"
                fill="#d4a5a5"
                opacity="0.7"
              />
            </motion.g>
            
            {/* Eyes - simple and expressive */}
            <AnimatePresence>
              {!isBlinking ? (
                <motion.g
                  initial={{ scaleY: 1 }}
                  exit={{ scaleY: 0.1 }}
                  transition={{ duration: 0.1 }}
                  style={{ originY: '56px' }}
                >
                  {/* Eye whites */}
                  <ellipse cx="58" cy="56" rx="7" ry="9" fill="#f5f5dc" />
                  <ellipse cx="82" cy="56" rx="7" ry="9" fill="#f5f5dc" />
                  
                  {/* Pupils that follow mouse */}
                  <motion.g
                    animate={{
                      x: eyeOffsetX,
                      y: eyeOffsetY,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    <circle cx="58" cy="56" r="4" fill="#1a1a1a" />
                    <circle cx="82" cy="56" r="4" fill="#1a1a1a" />
                    {/* Eye shine */}
                    <circle cx="60" cy="54" r="1.5" fill="#f5f5dc" opacity="0.9" />
                    <circle cx="84" cy="54" r="1.5" fill="#f5f5dc" opacity="0.9" />
                  </motion.g>
                </motion.g>
              ) : (
                <motion.g>
                  {/* Blinking */}
                  <path d="M 51 56 Q 58 59 65 56" stroke="#f5f5dc" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M 75 56 Q 82 59 89 56" stroke="#f5f5dc" strokeWidth="2" strokeLinecap="round" fill="none" />
                </motion.g>
              )}
            </AnimatePresence>
            
            {/* Rosy cheeks with color */}
            <motion.circle
              cx="42"
              cy="66"
              r="6"
              fill="#d4a5a5"
              opacity="0.5"
              animate={{ 
                scale: isHovered ? 1.3 : 1,
                opacity: isHovered ? 0.65 : 0.5,
              }}
            />
            <motion.circle
              cx="98"
              cy="66"
              r="6"
              fill="#d4a5a5"
              opacity="0.5"
              animate={{ 
                scale: isHovered ? 1.3 : 1,
                opacity: isHovered ? 0.65 : 0.5,
              }}
            />
            
            {/* Nose - small triangle */}
            <path
              d="M 70 68 L 67 72 L 73 72 Z"
              fill="#d4a5a5"
              opacity="0.8"
            />
            
            {/* Mouth - cute cat smile */}
            <motion.g
              animate={{
                scale: isHovered ? 1.15 : 1,
              }}
              style={{ originX: '70px', originY: '74px' }}
            >
              <path
                d="M 70 72 L 70 74"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <motion.path
                d="M 70 74 Q 65 77 62 76"
                stroke="#f5f5dc"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
                animate={{
                  d: isHovered || isPurring ? "M 70 74 Q 65 78 62 77" : "M 70 74 Q 65 77 62 76",
                }}
              />
              <motion.path
                d="M 70 74 Q 75 77 78 76"
                stroke="#f5f5dc"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
                animate={{
                  d: isHovered || isPurring ? "M 70 74 Q 75 78 78 77" : "M 70 74 Q 75 77 78 76",
                }}
              />
            </motion.g>
            
            {/* Whiskers */}
            <g opacity="0.5">
              <motion.line
                x1="42"
                y1="64"
                x2="18"
                y2="60"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ x2: isHovered ? 14 : 18 }}
              />
              <motion.line
                x1="42"
                y1="68"
                x2="16"
                y2="68"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ x2: isHovered ? 12 : 16 }}
              />
              <motion.line
                x1="44"
                y1="72"
                x2="18"
                y2="75"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ x2: isHovered ? 14 : 18 }}
              />
              
              <motion.line
                x1="98"
                y1="64"
                x2="122"
                y2="60"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ x2: isHovered ? 126 : 122 }}
              />
              <motion.line
                x1="98"
                y1="68"
                x2="124"
                y2="68"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ x2: isHovered ? 128 : 124 }}
              />
              <motion.line
                x1="96"
                y1="72"
                x2="122"
                y2="75"
                stroke="#f5f5dc"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ x2: isHovered ? 126 : 122 }}
              />
            </g>
            
            {/* Color collar with bell */}
            <ellipse
              cx="70"
              cy="88"
              rx="16"
              ry="4"
              fill="#a8c5d1"
              opacity="0.8"
            />
            <ellipse
              cx="70"
              cy="88"
              rx="14"
              ry="3"
              fill="#8bb4c9"
            />
            <motion.circle
              cx="70"
              cy="92"
              r="3.5"
              fill="#e8d4a0"
              animate={{
                scale: isClicked ? [1, 1.3, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <circle
              cx="70"
              cy="92"
              r="2"
              fill="#f5f5dc"
              opacity="0.4"
            />
            
            {/* Front paws */}
            <motion.g
              animate={{
                y: isClicked ? [0, -6, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <ellipse cx="58" cy="142" rx="9" ry="11" fill="#1a1a1a" />
              <ellipse cx="82" cy="142" rx="9" ry="11" fill="#1a1a1a" />
              
              {/* Paw pads */}
              <ellipse cx="58" cy="142" rx="4" ry="5" fill="#d4a5a5" opacity="0.6" />
              <ellipse cx="82" cy="142" rx="4" ry="5" fill="#d4a5a5" opacity="0.6" />
            </motion.g>
            
            {/* Variant accessory - yarn ball */}
            {variant === 'creating' && (
              <motion.g
                animate={{
                  x: [0, 3, -3, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ originX: '28px', originY: '135px' }}
              >
                <circle cx="28" cy="135" r="11" fill="#a8c5d1" opacity="0.85" />
                <path d="M 22 131 Q 28 129 34 131" stroke="#1a1a1a" strokeWidth="1.2" fill="none" opacity="0.25" />
                <path d="M 21 135 Q 28 133 35 135" stroke="#1a1a1a" strokeWidth="1.2" fill="none" opacity="0.25" />
                <path d="M 22 139 Q 28 141 34 139" stroke="#1a1a1a" strokeWidth="1.2" fill="none" opacity="0.25" />
              </motion.g>
            )}
          </svg>

          {/* Purring hearts */}
          {isPurring && !isClicked && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`purr-${i}`}
                  className="absolute text-sm"
                  style={{
                    left: '48%',
                    top: '20%',
                    color: '#d4a5a5',
                  }}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    y: -40,
                    x: (i - 1) * 12,
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.35,
                    ease: "easeOut",
                  }}
                >
                  ♡
                </motion.div>
              ))}
            </>
          )}

          {/* Sparkles on hover */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute"
                  style={{
                    left: '70px',
                    top: '50px',
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 6) * 48,
                    y: Math.sin((i * Math.PI * 2) / 6) * 48,
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <svg width="6" height="6" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="2" fill="#a8c5d1" />
                  </svg>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Pawprints on click */}
      <AnimatePresence>
        {pawprints.map((id, index) => (
          <motion.div
            key={id}
            className="fixed z-50 pointer-events-none"
            style={{
              bottom: '120px',
              right: '85px',
            }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0.8],
              y: [-12, -45, -80],
              x: [0, 18 * (index % 2 === 0 ? 1 : -1), 35 * (index % 2 === 0 ? 1 : -1)],
              rotate: index % 2 === 0 ? -20 : 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="#d4a5a5" opacity="0.6">
              <ellipse cx="11" cy="15" rx="4" ry="5" />
              <circle cx="7" cy="9" r="2.5" />
              <circle cx="11" cy="7" r="2.5" />
              <circle cx="15" cy="9" r="2.5" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
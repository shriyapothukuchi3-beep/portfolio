import { motion } from 'motion/react';

export function ArtisticBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#111318]">
      {/* Abstract character silhouette */}
      <svg className="absolute bottom-0 right-0 w-[800px] h-[800px] opacity-5" viewBox="0 0 800 800" fill="none">
        <path d="M400 150C450 150 490 190 490 240C490 290 450 330 400 330C350 330 310 290 310 240C310 190 350 150 400 150Z" fill="#C8A2F5"/>
        <ellipse cx="400" cy="450" rx="120" ry="280" fill="#7DF9C2"/>
        <path d="M280 400C280 350 260 300 240 300C220 300 200 350 200 400C200 550 220 650 240 650C260 650 280 550 280 400Z" fill="#C8A2F5"/>
        <path d="M520 400C520 350 540 300 560 300C580 300 600 350 600 400C600 550 580 650 560 650C540 650 520 550 520 400Z" fill="#7DF9C2"/>
        <path d="M350 650C350 680 370 700 400 700C430 700 450 680 450 650L450 500L350 500L350 650Z" fill="#C8A2F5"/>
      </svg>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#C8A2F5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7DF9C2]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A2F5]/5 rounded-full blur-3xl" />
    </div>
  );
}
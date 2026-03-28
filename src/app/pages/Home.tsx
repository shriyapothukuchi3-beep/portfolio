import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F13]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-8 pt-16">
        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-8"
          >
            {/* Small label */}
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#6C3FC8] font-medium">
              DESIGNER · ILLUSTRATOR · ANIMATOR
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.15] text-[#F5F5F5]">
              I design experiences.
              <br />
              I animate stories.
              <br />
              <span className="text-[#6C3FC8]">I build brands.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#999] max-w-2xl font-normal leading-relaxed">
              UI/UX designer, graphic illustrator, and 3D animator based in Dallas, TX.
              Crafting thoughtful digital experiences with a focus on motion and visual storytelling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#6C3FC8] text-[#F5F5F5] text-sm font-medium hover:bg-[#7d4fd9] transition-colors"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a35] text-[#F5F5F5] text-sm font-medium hover:border-[#6C3FC8] hover:text-[#6C3FC8] transition-colors"
              >
                About Me
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-8 text-sm">
              <div className="text-[#999]">
                <span className="text-[#F5F5F5] font-medium">4+</span> projects
              </div>
              <div className="w-px h-4 bg-[#2a2a35]" />
              <div className="text-[#999]">
                <span className="text-[#F5F5F5] font-medium">3</span> disciplines
              </div>
              <div className="w-px h-4 bg-[#2a2a35]" />
              <div className="text-[#999]">
                <span className="text-[#F5F5F5] font-medium">2</span> internships
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Design Panel */}
            <div className="bg-[#0F0F13] border border-[#2a2a35] p-8 lg:p-12 space-y-6">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C4A9F0] font-medium">
                UI/UX · BRAND DESIGN
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium text-[#F5F5F5]">
                Design that thinks.
              </h2>
              <p className="text-sm text-[#999] leading-relaxed">
                Figma · Research · Systems · Identity
              </p>
              <Link
                to="/projects?filter=ux-ui"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6C3FC8] text-[#F5F5F5] text-sm font-medium hover:bg-[#7d4fd9] transition-colors"
              >
                View Design Work
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Art Panel */}
            <div className="bg-[#1A1A2A] border border-[#2a2a35] p-8 lg:p-12 space-y-6">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#0D6E6E] font-medium">
                ILLUSTRATION · 3D · MOTION
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium text-[#F5F5F5]">
                Art that feels.
              </h2>
              <p className="text-sm text-[#999] leading-relaxed">
                Maya · Procreate · Unity · After Effects
              </p>
              <Link
                to="/projects?filter=animation"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D6E6E] text-[#F5F5F5] text-sm font-medium hover:bg-[#0f7e7e] transition-colors"
              >
                View Art Work
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-24 px-6 lg:px-8 bg-[#0F0F13]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A2A] border border-[#2a2a35] p-8 lg:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-[#6C3FC8] to-[#0D6E6E] flex items-center justify-center text-[#F5F5F5] text-xl font-medium">
                SP
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-[#F5F5F5] mb-1">
                    Shriya Pothukuchi
                  </h3>
                  <p className="text-sm text-[#999]">Dallas, TX</p>
                </div>

                <p className="text-sm text-[#999] leading-relaxed max-w-2xl">
                  I'm a multi-disciplinary designer passionate about creating memorable digital experiences. 
                  With expertise in UI/UX design, graphic illustration, and 3D animation, I bring ideas to life 
                  through thoughtful design and engaging motion.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs border border-[#2a2a35] text-[#999]">UI/UX Design</span>
                  <span className="px-3 py-1 text-xs border border-[#2a2a35] text-[#999]">Brand Identity</span>
                  <span className="px-3 py-1 text-xs border border-[#2a2a35] text-[#999]">3D Animation</span>
                  <span className="px-3 py-1 text-xs border border-[#2a2a35] text-[#999]">Illustration</span>
                  <span className="px-3 py-1 text-xs border border-[#2a2a35] text-[#999]">Motion Design</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
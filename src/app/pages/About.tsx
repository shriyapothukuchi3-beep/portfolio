import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const skills = [
  {
    category: 'Design Tools',
    items: ['Figma', 'Adobe Photoshop', 'Adobe After Effects', 'Procreate', 'Canva'],
  },
  {
    category: 'Animation & 3D',
    items: ['Maya', 'Unity', '3D Modelling & Rigging', 'Rendering', 'Motion Graphics'],
  },
  {
    category: 'Development',
    items: ['HTML', 'CSS', 'Shopify', 'Responsive Layouts'],
  },
  {
    category: 'Other',
    items: [
      'User Research',
      'Wireframing & Prototyping',
      'Brand Identity Systems',
      'Visual Storytelling',
      'Color Theory & Typography',
    ],
  },
];

  return (
    <div className="min-h-screen bg-[#0F0F13] pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F5F5] mb-4">
            About
          </h1>
          <p className="text-base text-[#999] max-w-2xl">
            Passionate designer and animator creating meaningful, culturally inspired experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="aspect-square overflow-hidden bg-[#1A1A2A] mb-6">
  <ImageWithFallback
    src="/images/aboutus.jpeg"
    alt="About"
    className="w-full h-full object-cover"
  />
</div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="mailto:shriyapothukuchi3@gmail.com"
                className="p-3 border border-[#2a2a35] text-[#999] hover:border-[#6C3FC8] hover:text-[#6C3FC8] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shriya-pothukuchi-751041253/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#2a2a35] text-[#999] hover:border-[#6C3FC8] hover:text-[#6C3FC8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/shriyapothukuchi3-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#2a2a35] text-[#999] hover:border-[#6C3FC8] hover:text-[#6C3FC8] transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6 text-[#999]"
          >
            <p className="text-base leading-relaxed">
              I'm Shriya Pothukuchi, I'm Shriya — a UI/UX and graphic designer with a passion for design that feels both intentional and alive. My work spans brand identity, interaction design, digital illustration, and 3D animation, and I bring the same care to every medium: making things that look beautiful and actually work for people.
            </p>

            <p className="text-base leading-relaxed">
             My journey started with a fascination for visual storytelling — from manga-style illustrations to animating characters in Maya to designing full app experiences in Figma. I believe the best design doesn't just solve a problem, it connects with the person on the other side of the screen.
Whether I'm building a sustainable fashion app, crafting a brand identity inspired by Indian aesthetics, or rendering a 3D scene from scratch, I lead with research, culture, and a deep attention to detail.
            </p>

            <p className="text-base leading-relaxed">
              I'm passionate about exploring new tools and techniques, staying current with 
              design trends, and continuously improving my craft across multiple disciplines.
            </p>

            <div className="pt-6">
              <p className="text-sm text-[#666] mb-4">Currently exploring</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs border border-[#2a2a35] text-[#999]">Design Systems</span>
                <span className="px-3 py-1.5 text-xs border border-[#2a2a35] text-[#999]">3D Animation</span>
                <span className="px-3 py-1.5 text-xs border border-[#2a2a35] text-[#999]">Motion Graphics</span>
                <span className="px-3 py-1.5 text-xs border border-[#2a2a35] text-[#999]">AI in Design</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-[#F5F5F5] mb-8">Skills & Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-[#1A1A2A] border border-[#2a2a35] p-6"
              >
                <h3 className="text-sm font-medium text-[#C4A9F0] mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2 text-[#999]">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[#1A1A2A] border border-[#2a2a35] p-12 text-center"
        >
          <h2 className="text-2xl font-medium text-[#F5F5F5] mb-4">Let's Work Together</h2>
          <p className="text-base text-[#999] mb-8 max-w-xl mx-auto">
            I'm currently open to internship and full-time opportunities. 
            Feel free to reach out if you'd like to collaborate.
          </p>
          <a
            href="mailto:shriyapothukuchi3@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6C3FC8] text-[#F5F5F5] text-sm font-medium hover:bg-[#7d4fd9] transition-colors"
          >
            <Mail size={16} />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
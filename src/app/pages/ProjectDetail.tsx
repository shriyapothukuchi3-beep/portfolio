import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0F0F13] pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-medium text-[#F5F5F5] mb-6">Project Not Found</h1>
          <Link to="/projects" className="text-[#6C3FC8] hover:text-[#C4A9F0] text-sm">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  const accentColor = project.category === 'ux-ui' ? '#6C3FC8' : '#0D6E6E';

  return (
    <div className="min-h-screen bg-[#0F0F13] pt-24 pb-20">
      {/* Back Button */}
      <div className="px-6 lg:px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[#999] hover:text-[#F5F5F5] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </div>

      {/* Hero Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 lg:px-8 mb-12"
      >
        <div className="max-w-6xl mx-auto">
          {project.videoUrl ? (
            <div className="aspect-[16/9] overflow-hidden bg-[#1A1A2A]">
              <iframe
                src={`https://player.vimeo.com/video/${project.videoUrl.split('/').pop()}?badge=0&autopause=0&player_id=0&app_id=58479`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title={project.title}
              />
            </div>
          ) : (
            <div className="aspect-[16/9] overflow-hidden bg-[#1A1A2A]">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title Section */}
            <div className="mb-12">
              <div 
                className="w-8 h-[2px] mb-6"
                style={{ backgroundColor: accentColor }}
              />
              <h1 className="text-4xl md:text-5xl font-medium text-[#F5F5F5] mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-[#999]">{project.description}</p>
            </div>

            {/* Meta Info */}
            <div className="grid sm:grid-cols-2 gap-6 py-12 border-y border-[#2a2a35] mb-12">
              <div className="flex items-start gap-3">
                <Calendar className="text-[#666] mt-1" size={18} />
                <div>
                  <div className="text-xs text-[#666] mb-1">Year</div>
                  <div className="text-sm text-[#F5F5F5]">{project.year}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag className="text-[#666] mt-1" size={18} />
                <div>
                  <div className="text-xs text-[#666] mb-1">Category</div>
                  <div className="text-sm text-[#F5F5F5]">
                    {project.category === 'ux-ui' ? 'UX/UI Design' : 'Animation'}
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs border border-[#2a2a35] text-[#999]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-12 mb-16">
              <div>
                <h2 className="text-xl font-medium text-[#F5F5F5] mb-4">Overview</h2>
                <p className="text-base text-[#999] leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-[#F5F5F5] mb-4">Challenge</h2>
                <p className="text-base text-[#999] leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-[#F5F5F5] mb-4">Solution</h2>
                <p className="text-base text-[#999] leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="pt-12 border-t border-[#2a2a35]">
                <h2 className="text-xl font-medium text-[#F5F5F5] mb-8">More Projects</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedProjects.map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      to={`/projects/${relatedProject.id}`}
                      className="group"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#1A1A2A] mb-4">
                        <ImageWithFallback
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-base font-medium text-[#F5F5F5] mb-2 group-hover:text-[#C4A9F0] transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-[#666]">
                        {relatedProject.tags.slice(0, 3).join(' · ')}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
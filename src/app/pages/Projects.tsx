import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'UX/UI Design', value: 'ux-ui' },
  { label: 'Animation', value: 'animation' },
];

export function Projects() {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  const [activeFilter, setActiveFilter] = useState(filterParam || 'all');

  useEffect(() => {
    if (filterParam) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0F0F13] pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F5F5] mb-4">
            Selected Work
          </h1>
          <p className="text-base text-[#999] max-w-2xl">
            A collection of UI/UX design projects and animation work exploring
            thoughtful interactions and visual storytelling.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
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

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#666] text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
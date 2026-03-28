import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function getAccentColor(category: Project['category']) {
  switch (category) {
    case 'ux-ui':
      return '#6C3FC8';
    case 'design':
      return '#C4A9F0';
    case 'animation':
      return '#0D6E6E';
    default:
      return '#6C3FC8';
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const accentColor = getAccentColor(project.category);

  return (
    <Link to={`/projects/${project.id}`} className="group block">
      <div className="bg-[#1A1A2A] border border-[#2a2a35] overflow-hidden hover:border-[#444] transition-colors">
        <div className="aspect-[4/3] overflow-hidden bg-[#0F0F13]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 space-y-4">
          <div
            className="w-8 h-[2px]"
            style={{ backgroundColor: accentColor }}
          />

          <div>
            <h3 className="text-lg font-medium text-[#F5F5F5] mb-2 group-hover:text-[#C4A9F0] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#999] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] border border-[#2a2a35] text-[#999]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
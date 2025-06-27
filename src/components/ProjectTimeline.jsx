import ProjectCard from './ProjectCard';

export default function ProjectTimeline({ projects }) {
  return (
    <div className="space-y-4">
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}


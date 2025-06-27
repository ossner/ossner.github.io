export default function ProjectCard({ project }) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"    >
            <h3 className="text-lg font-medium mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.year}</p>
            <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.map(tag => (
                    <span
                        key={tag}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
}


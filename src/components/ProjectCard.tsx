import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-zinc-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm font-medium">
        {project.githubUrl && (
          
          <a href={project.githubUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-white underline underline-offset-4 hover:text-cyan-400"
          >
            View Code
          </a>
        )}
        {project.liveUrl && (
          
          <a href={project.liveUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-white underline underline-offset-4 hover:text-cyan-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
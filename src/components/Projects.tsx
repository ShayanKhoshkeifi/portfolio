import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col items-center bg-black px-6 py-20 text-white">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          A mix of hardware, machine learning, and full-stack work — reflecting the range of problems I like to work on.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
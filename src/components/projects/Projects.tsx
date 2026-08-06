import Image from "next/image";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-7">
      <div className="mb-16">
        <p className="text-blue-400">Portfolio</p>

        <h2 className="mt-3 text-3xl font-bold">
          My Projects
        </h2>
      </div>

      <div className="
group
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
overflow-hidden
p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-500/40
hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-x1
            "
          >
            {/* Header */}
            <div>
              <span className="text-sm text-blue-400">
                {project.category}
              </span>

              <h3 className="mt-3 text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 max-w-3xl text-gray-400">
                {project.description}
              </p>
            </div>

            {/* Screenshot */}
            {project.image && (
              <div className="relative mt-8 h-[350px] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Problem & Solution */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-xl font-semibold">
                  Problem
                </h4>

                <p className="mt-3 text-gray-400">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Solution
                </h4>

                <p className="mt-3 text-gray-400">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div className="mt-10">
              <h4 className="mb-4 text-xl font-semibold">
                Architecture
              </h4>

              <div className="flex flex-wrap gap-3">
                {project.architecture.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      bg-blue-500/10
                      px-4
                      py-2
                      text-sm
                      text-blue-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-gray-300">
                <strong>Result:</strong>{" "}
                {project.results}
              </p>
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
        >
          Live Demo
        </a>

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-gray-700
                  px-6
                  py-3
                  transition
                  hover:bg-white/10
                "
              >
                GitHub
              </a>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
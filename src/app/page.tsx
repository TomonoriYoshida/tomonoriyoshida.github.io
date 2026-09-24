import { projects, type Project } from "@/data/projects";

const githubProfileUrl = "https://github.com/TomonoriYoshida";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-3 leading-7 text-muted">{project.summary}</p>

      <h4 className="mt-6 text-sm font-semibold">設計・実装のポイント</h4>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {link.label} ↗
          </a>
        ))}
        {project.demoStatus && (
          <span className="text-sm text-muted">{project.demoStatus}</span>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <header>
        <p className="font-mono text-sm text-accent">Portfolio</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Tomonori Yoshida
        </h1>
        <p className="mt-4 leading-7 text-muted">
          制作したプロジェクトと、そのソースコードを掲載しています。
        </p>
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          GitHub ↗
        </a>
      </header>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Projects
        </h2>
        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-border pt-6 text-xs text-muted">
        © Tomonori Yoshida
      </footer>
    </main>
  );
}

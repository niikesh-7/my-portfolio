import { projects, getProjectBySlug } from "../../../lib/projectsData";
import { getPublicFiles } from "../../../lib/getPublicFiles";
import ScrollReveal from "../../../components/ScrollReveal";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title + " — Nikesh Giri",
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();
  const files = await getPublicFiles(project.slug);

  return (
    <main className="max-w-4xl mx-auto px-6 md:px-10 pt-24 pb-24">
      <ScrollReveal>
        <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-4">
          {project.number} — {project.category}
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-4">
          {project.shortDescription}
        </p>
        <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-16">
          {project.software}
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.overview}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-3">Objective</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.objective}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Methodology</h2>
          <div className="flex flex-wrap items-center gap-3">
            {project.methodology.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="font-mono text-sm text-gray-700 border border-gray-200 rounded-full px-4 py-2">
                  {step}
                </span>
                {i < project.methodology.length - 1 && (
                  <span className="text-gray-300">→</span>
                )}
              </span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Tools & Standards</h2>
          <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-2">
            Software
          </p>
          <p className="text-gray-700 mb-4">{project.software}</p>
          {project.standards.length > 0 && (
            <>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-2">
                Standards
              </p>
              <p className="text-gray-700">{project.standards.join(", ")}</p>
            </>
          )}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-3">My Work</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.myWork}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-3">Results</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.results}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-video bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center"
              >
                <span className="font-mono text-xs text-gray-300 tracking-wide">
                  IMAGE PLACEHOLDER
                </span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Project Files</h2>

          {files.length === 0 ? (
            <p className="text-sm text-gray-500">
              No public files available yet.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {files.map((f) => (
                <div
                  key={f.id}
                  className="border border-gray-200 rounded-xl p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium text-sm">{f.file_name}</p>

                    <p className="text-xs text-gray-500">
                      {f.file_type} · {(f.file_size / 1024 / 1024).toFixed(2)}{" "}
                      MB
                    </p>

                    {f.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {f.description}
                      </p>
                    )}
                  </div>

                  <a
                    href={"/api/files/" + f.id + "/download"}
                    className="text-xs border border-gray-300 rounded-full px-4 py-2 hover:border-black transition"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-3">What I Learned</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.learned}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-10 border-t border-gray-100">
          <h2 className="text-xl font-semibold mb-3">Future Improvements</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.improvements}
          </p>
        </section>
      </ScrollReveal>
    </main>
  );
}

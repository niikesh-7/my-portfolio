import Link from "next/link";
import { projects } from "../../lib/projectsData";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Projects — Nikesh Giri",
  description:
    "Selected engineering projects exploring structural analysis, seismic design, GIS, and digital approaches to civil engineering.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-10 pt-24 pb-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
      <p className="text-gray-600 leading-relaxed max-w-xl mb-16">
        Selected engineering projects exploring structural analysis, seismic
        design, GIS, and digital approaches to civil engineering.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 120}>
            <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition h-full flex flex-col">
              <div className="aspect-video bg-gray-50 border-b border-gray-100 flex items-center justify-center">
                <span className="font-mono text-xs text-gray-300 tracking-wide">
                  IMAGE PLACEHOLDER
                </span>
              </div>
              <div className="px-6 pt-5 pb-4 flex-1 flex flex-col">
                <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-2">
                  {p.number} — {p.category}
                </p>
                <h2 className="font-semibold text-lg mb-2">{p.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {p.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-4">
                  {p.software}
                </p>
                <Link
                  href={"/projects/" + p.slug}
                  className="mt-auto text-black font-medium underline underline-offset-4 hover:text-gray-600"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}

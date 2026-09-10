import ScrollReveal from "../components/ScrollReveal";

const projects = [
  {
    title: "Structural Analysis & Design",
    software: "ETABS",
    type: "Structural Analysis & Design",
    standards: "NBC 105, IS 456, IS 875, IS 13920",
    focus: "Seismic analysis, reinforced concrete design",
  },
  {
    title: "Koshi River Basin Flood Risk Analysis",
    software: "QGIS",
    type: "GIS / Flood Risk Analysis",
    standards: "—",
    focus: "Spatial analysis, DEM and rainfall data",
  },
];

const focusAreas = [
  {
    title: "Structural Engineering",
    desc: "Analysis, design, and seismic evaluation of structures.",
  },
  {
    title: "GIS & Flood Risk",
    desc: "Spatial analysis and hydrological risk mapping.",
  },
  {
    title: "Engineering Software",
    desc: "ETABS, QGIS, AutoCAD, and analysis tools.",
  },
  {
    title: "Digital Civil Engineering",
    desc: "Computational approaches to engineering problems.",
  },
];

function SectionLabel(props) {
  return (
    <p className="font-mono text-xs text-gray-400 tracking-widest mb-4">
      {props.children}
    </p>
  );
}

export default function Home() {
  return (
    <main>
      <section className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-28">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-6 fade-in">
            Civil Engineering · Structural Analysis & Design · GIS · Digital
            Engineering
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05] fade-in-delay-1">
            Nikesh Giri
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 max-w-2xl fade-in-delay-1">
            Civil Engineering Graduate — Aspiring Structural Engineer
          </p>
          <p className="text-gray-600 leading-relaxed max-w-xl mb-10 fade-in-delay-2">
            I am a Civil Engineering graduate from Pulchowk Campus with a strong
            interest in structural analysis and design. I enjoy working on
            engineering problems that combine structural theory, computational
            tools, and real-world data, from seismic structural modeling to
            GIS-based flood risk mapping.
          </p>
          <div className="flex flex-wrap gap-4 fade-in-delay-2">
            <a
              href="/projects"
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              View Projects
            </a>
            <a
              href="/resume"
              className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:border-black transition"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:border-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 border-b border-gray-100">
          <SectionLabel>About</SectionLabel>
          <h2 className="text-2xl font-semibold mb-4">A brief introduction</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
            I completed my Bachelor&apos;s degree in Civil Engineering at
            Pulchowk Campus, Tribhuvan University. My core interest lies in
            structural engineering, alongside a growing focus on construction
            management, GIS, and computational approaches to civil engineering
            problems. I like building projects that let me apply engineering
            standards and analysis tools to realistic scenarios.
          </p>
          <a
            href="/about"
            className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
          >
            View About →
          </a>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 border-b border-gray-100">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="text-2xl font-semibold mb-10">
            Engineering case studies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition">
                  <div className="aspect-video bg-gray-50 border-b border-gray-100 flex items-center justify-center">
                    <span className="font-mono text-xs text-gray-300 tracking-wide">
                      IMAGE PLACEHOLDER
                    </span>
                  </div>
                  <div className="px-6 pt-5 pb-4 border-b border-gray-100">
                    <p className="font-mono text-xs text-gray-400 uppercase tracking-wide mb-2">
                      {p.software}
                    </p>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                  </div>
                  <div className="px-6 py-5 text-sm">
                    <div className="grid grid-cols-3 gap-y-2">
                      <span className="text-gray-400 font-mono text-xs col-span-1">
                        TYPE
                      </span>
                      <span className="text-gray-700 col-span-2">{p.type}</span>

                      <span className="text-gray-400 font-mono text-xs col-span-1">
                        STANDARDS
                      </span>
                      <span className="text-gray-700 col-span-2">
                        {p.standards}
                      </span>

                      <span className="text-gray-400 font-mono text-xs col-span-1">
                        FOCUS
                      </span>
                      <span className="text-gray-700 col-span-2">
                        {p.focus}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <a
            href="/projects"
            className="inline-block mt-8 text-black font-medium underline underline-offset-4 hover:text-gray-600"
          >
            View All Projects →
          </a>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 border-b border-gray-100">
          <SectionLabel>Technical Focus</SectionLabel>
          <h2 className="text-2xl font-semibold mb-10">Areas of focus</h2>
          <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
            {focusAreas.map((f, i) => (
              <div
                key={f.title}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5"
              >
                <span className="font-mono text-xs text-gray-400 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium w-56 shrink-0">{f.title}</span>
                <span className="text-sm text-gray-600">{f.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 md:px-10 py-28 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Interested in working together or discussing an engineering project?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume"
              className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:border-black transition"
            >
              View Resume
            </a>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}

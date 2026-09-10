const projects = [
  {
    title: "Structural Analysis & Design",
    tool: "ETABS",
    description:
      "Structural modeling, seismic analysis, reinforced concrete design, and evaluation against relevant engineering standards (NBC 105, IS 456, IS 875, IS 13920).",
  },
  {
    title: "Koshi River Basin Flood Risk Analysis",
    tool: "QGIS",
    description:
      "GIS-based spatial analysis using DEM and rainfall data to study and map flood risk across the Koshi River Basin.",
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

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-gray-100">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1d4ed8 1px, transparent 1px), linear-gradient(to bottom, #1d4ed8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-0 pt-28 pb-24">
          <p className="text-sm font-medium text-blue-700 mb-4 tracking-wide uppercase">
            Civil Engineering • Structural Analysis & Design • GIS • Digital
            Engineering
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Nikesh Giri
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
            Civil Engineering Graduate — Aspiring Structural Engineer
          </p>
          <p className="text-gray-600 leading-relaxed max-w-xl mb-10">
            I am a Civil Engineering graduate from Pulchowk Campus with a strong
            interest in structural analysis and design. I enjoy working on
            engineering problems that combine structural theory, computational
            tools, and real-world data, from seismic structural modeling to
            GIS-based flood risk mapping.
          </p>
          <div className="flex flex-wrap gap-4">
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

      <section className="max-w-5xl mx-auto px-6 md:px-0 py-20 border-b border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
          I completed my Bachelor&apos;s degree in Civil Engineering at Pulchowk
          Campus, Tribhuvan University. My core interest lies in structural
          engineering, alongside a growing focus on construction management,
          GIS, and computational approaches to civil engineering problems. I
          like building projects that let me apply engineering standards and
          analysis tools to realistic scenarios.
        </p>
        <a href="/about" className="text-blue-700 font-medium hover:underline">
          View About →
        </a>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-0 py-20 border-b border-gray-100">
        <h2 className="text-2xl font-semibold mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition"
            >
              <p className="text-xs font-medium text-blue-700 uppercase tracking-wide mb-2">
                {p.tool}
              </p>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
        <a
          href="/projects"
          className="inline-block mt-8 text-blue-700 font-medium hover:underline"
        >
          View All Projects →
        </a>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-0 py-20 border-b border-gray-100">
        <h2 className="text-2xl font-semibold mb-10">Technical Focus</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {focusAreas.map((f) => (
            <div
              key={f.title}
              className="p-5 rounded-xl border border-gray-100"
            >
              <h3 className="font-medium mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-0 py-24 text-center">
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
    </main>
  );
}

export const projects = [
  {
    slug: "etabs-structural-analysis",
    number: "01",
    category: "Structural Engineering",
    title: "Structural Analysis & Design",
    software: "ETABS",
    shortDescription:
      "A structural analysis and design project focused on modeling, seismic analysis, and reinforced concrete structural design using ETABS.",
    tags: [
      "Structural Modeling",
      "Seismic Analysis",
      "Reinforced Concrete Design",
      "Load Analysis",
      "Structural Detailing",
    ],
    standards: ["NBC 105", "IS 456", "IS 875", "IS 13920"],
    overview: "[Add project overview here]",
    objective: "[Add project objective here]",
    methodology: [
      "Problem",
      "Data / Model",
      "Analysis",
      "Results",
      "Interpretation",
    ],
    myWork: "[Add exact task here]",
    results:
      "Results and findings will be added as the project documentation is finalized.",
    learned: "[Add what I learned here]",
    improvements: "[Add future improvements here]",
  },
  {
    slug: "koshi-flood-risk",
    number: "02",
    category: "GIS / Flood Risk",
    title: "Koshi River Basin Flood Risk Analysis",
    software: "QGIS",
    shortDescription:
      "A GIS-based project exploring flood-risk analysis in the Koshi River Basin using spatial datasets and geospatial analysis.",
    tags: [
      "GIS",
      "Spatial Analysis",
      "Watershed Analysis",
      "DEM Processing",
      "Rainfall Data Analysis",
      "Flood-Risk Mapping",
    ],
    standards: [],
    overview: "[Add project overview here]",
    objective: "[Add project objective here]",
    methodology: [
      "Problem",
      "Data / Model",
      "Analysis",
      "Results",
      "Interpretation",
    ],
    myWork: "[Add exact task here]",
    results:
      "Results and findings will be added as the project documentation is finalized.",
    learned: "[Add what I learned here]",
    improvements: "[Add future improvements here]",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

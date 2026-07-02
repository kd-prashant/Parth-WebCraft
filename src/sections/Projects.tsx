import projectMlLogin from "@/assets/images/project-ml-login.png";
import projectCropHealth from "@/assets/images/project-crop-health.png";
import projectAstrology from "@/assets/images/project-astrology.png";
import projectIntelliMigrate from "@/assets/images/project-intellimigrate.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StickyLanyard from "@/components/StickyLanyard";

const portfolioProjects = [
  {
    company: "Security & ML",
    year: "2025",
    title: "ML-Powered Suspicious Login Detection",
    results: [
      { title: "Built ML system for anomalous login pattern detection" },
      { title: "Enhanced authentication security with intelligent alerts" },
      { title: "Published research paper on ML-based user auth" },
    ],
    link: "",
    image: projectMlLogin,
  },
  {
    company: "AgriTech",
    year: "2025",
    title: "Crop Health & Disease Diagnostic App",
    results: [
      { title: "Diagnoses crop diseases using AI image analysis" },
      { title: "Monitors plant health with real-time insights" },
      { title: "Provides treatment recommendations for farmers" },
    ],
    link: "https://niramay-ai.vercel.app/",
    image: projectCropHealth,
  },
  {
    company: "Astrology",
    year: "2024",
    title: "Cosmic Insight — Astrology App",
    results: [
      { title: "Personalized horoscope readings & cosmic insights" },
      { title: "Interactive zodiac chart visualization" },
      { title: "Daily, weekly & monthly prediction engine" },
    ],
    link: "",
    image: projectAstrology,
  },
  {
    company: "Data Engineering",
    year: "2026",
    title: "Intelli-Migrate: AI NoSQL to SQL",
    results: [
      { title: "AI-driven NoSQL to RDBMS schema migration" },
      { title: "Transforms manual ETL into intelligent pipelines" },
      { title: "Automated data mapping & normalization" },
    ],
    link: "https://new-intelli-migrate.pages.dev/",
    image: projectIntelliMigrate,
  },
];

const Projects = () => {
  return (
    <section className="pb-16 lg:py-24 relative" id="projects">
      <StickyLanyard />
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-100 transition"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  ) : (
                    <>
                      <button
                        className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 opacity-60 cursor-not-allowed"
                        disabled
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                      <p className="text-xs text-white/30 mt-2 mb-4 lg:mb-0">
                        Coming soon
                      </p>
                    </>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

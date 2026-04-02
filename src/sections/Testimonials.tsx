import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";

const achievements = [
  {
    name: "Research Publication",
    position: "ML-based User Authentication",
    text: "Published a research paper on Machine Learning-based User Authentication Anomaly Detection, focusing on analytical modelling and security-driven insights.",
    emoji: "📄",
  },
  {
    name: "Deloitte Australia",
    position: "Data Analytics Job Simulation — Forage",
    text: "Completed Deloitte Australia's Data Analytics Job Simulation, performing practical data modelling and spreadsheet-based analysis aligned with real-world consulting scenarios.",
    emoji: "📊",
  },
  {
    name: "Microsoft & LinkedIn Learning",
    position: "Career Essentials in Software Development",
    text: "Earned Microsoft & LinkedIn Learning's Career Essentials in Software Development certification, mastering software development fundamentals and professional engineering practices.",
    emoji: "🏅",
  },
  {
    name: "GATE 2026 Qualified",
    position: "CS/IT — Graduate Aptitude Test in Engineering",
    text: "Qualified GATE 2026 in Computer Science & IT, one of India's most competitive national-level examinations for engineering graduates.",
    emoji: "🎓",
  },
  {
    name: "B.Tech in AI & ML",
    position: "Uttarakhand Technical University (2022-2026)",
    text: "Pursuing B.Tech in Artificial Intelligence and Machine Learning with strong technical skills in full-stack development, data structures, and intelligent systems.",
    emoji: "🎯",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements & Certifications"
          title="Milestones That Define Me"
          description="A track record of continuous learning, competitive excellence, and impactful research."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 text-2xl">
                        {achievement.emoji}
                      </div>
                      <div>
                        <div className="font-semibold">{achievement.name}</div>
                        <div className="text-sm text-white/40">
                          {achievement.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {achievement.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

"use client";
import { Fragment } from "react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python.svg";
import JavaIcon from "@/assets/icons/java.svg";
import CppIcon from "@/assets/icons/cpp.svg";
import DSAIcon from "@/assets/icons/dsa.svg";
import NodeIcon from "@/assets/icons/node.svg";
import MongoIcon from "@/assets/icons/mongo.svg";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "Python", iconType: PythonIcon },
  { title: "Java", iconType: JavaIcon },
  { title: "C++", iconType: CppIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Node.js", iconType: NodeIcon },
  { title: "MongoDB", iconType: MongoIcon },
  { title: "Git", iconType: GithubIcon },
  { title: "DSA", iconType: DSAIcon },
];

const englishBooks = [
  "Atomic Habits",
  "The Alchemist",
  "Sapiens",
  "Deep Work",
  "Zero to One",
];

const hindiBooks = [
  "Godan",
  "Madhushala",
  "Raag Darbari",
  "Tamas",
  "Gunahon Ka Devta",
];

const hobbies = [
  { title: "Cinema", emoji: "🎬", left: "5%", top: "5%" },
  { title: "Hindi Literature", emoji: "📖", left: "50%", top: "5%" },
  { title: "Music", emoji: "🎵", left: "10%", top: "35%" },
  { title: "Cricket", emoji: "🏏", left: "35%", top: "40%" },
  { title: "Coding", emoji: "💻", left: "70%", top: "45%" },
  { title: "Exploring AI", emoji: "🤖", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
];

const About = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Books that shape my thinking and perspectives."
              />
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex gap-4 flex-none pr-4 animate-move-left" style={{ animationDuration: "70s" }}>
                    {[...new Array(10)].fill(0).map((_, groupIdx) => (
                      <Fragment key={`en-group-${groupIdx}`}>
                        {englishBooks.map((book, i) => (
                          <div
                            key={`en-${book}-${i}-${groupIdx}`}
                            className="bg-gradient-to-r from-emerald-300/10 to-sky-400/10 border border-white/10 rounded-lg px-4 py-2 whitespace-nowrap text-sm font-medium"
                          >
                            📕 {book}
                          </div>
                        ))}
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex gap-4 flex-none pr-4 animate-move-right" style={{ animationDuration: "70s" }}>
                    {[...new Array(10)].fill(0).map((_, groupIdx) => (
                      <Fragment key={`hi-group-${groupIdx}`}>
                        {hindiBooks.map((book, i) => (
                          <div
                            key={`hi-${book}-${i}-${groupIdx}`}
                            className="bg-gradient-to-r from-emerald-300/10 to-sky-400/10 border border-white/10 rounded-lg px-4 py-2 whitespace-nowrap text-sm font-medium"
                          >
                            📗 {book}
                          </div>
                        ))}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left"
                speed="150s"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right"
                speed="75s"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 group cursor-pointer">
              <div
                className="block h-full w-full"
                onClick={() => window.open('https://www.google.com/maps/dir/G.+B.+Pant+University+of+Agriculture+and+Technology,+Pantnagar,+Tanda+Range,+Uttarakhand+263145/G.+B.+Pant+University+of+Agriculture+and+Technology,+Pantnagar,+Tanda+Range,+Uttarakhand+263145/@29.0640637,80.0882688,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x39091c4086dd02cb:0x39248f0543ed8f5a!2m2!1d79.4879531!2d29.0228625!1m5!1m1!1s0x39091c4086dd02cb:0x39248f0543ed8f5a!2m2!1d79.4879531!2d29.0228625?entry=ttu', '_blank')}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13946.882!2d79.4854531!3d29.0228625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091c4086dd02cb%3A0x39248f0543ed8f5a!2sG.%20B.%20Pant%20University%20of%20Agriculture%20and%20Technology!5e0!3m2!1sen!2sin!4v1711966800000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1.5rem", pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition duration-500"
                ></iframe>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full pointer-events-none">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <div className="size-20 flex items-center justify-center text-3xl">
                    📍
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

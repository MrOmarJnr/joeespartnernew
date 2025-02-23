"use client";
import Image from "next/image";
import Reveal from "../animations/reveal";
import { useState } from "react";

export default function ProjectsForHomeSection() {
  const [showOngoingProjects, setShowOngoingProjects] = useState(false);

  const projects = [
    {
      image: "/projects/ghana-freight-forwarding.jpg",
      title: "Freight Forwarding at Accra Airport, Tema, and Takoradi Harbours:",
      description:
        "We successfully handled large-scale freight forwarding operations, for Cocobod and Ministry of Agriculture.",
    },
    {
      image: "/projects/water_supply.png",
      title: "$165 million Water Project:",
      description:
        "Our team managed the development of the Akim Oda, Akwatia and Winneba Water Supply Project, bringing clean and accessible water to these communities and their surrounding areas.",
    },
    {
      image: "/projects/afiaziwahtower.jpg",
      title: "Afieziwah Towers:",
      description:
        "We played a key role in the development of Afieziwah Towers, a prestigious commercial project located off the Spintex road in Addogonno Nungua.",
    },
  ];

  const ongoingProjects = [
    {
      title: "Atebubu-Amantin Water Supply Project ($135 million)",
      description: 
        "Stage 75% - Turkish Contractors EPC+F\nJoees & Partners at Gorkem head office in Accra, Ghana.",
      image: "/projects/atebubu-water.jpg",
    },
    {
      title: "Kwanyako Water Supply Rehabilitation Project",
      description: 
        "JV - Turkish & Hungarian consortium\n$235 million funding by Hungarian Exim & Turkish Exim, Stage 65%\nSigning of Kwanyako water rehabilitation and expansion at Hungarian embassy $235m\nAfter the signatures between Joees & Partners Limited, the local facilitators.",
      image: "/projects/Kpong.jpg",
    },
  ];

  const allProjects = showOngoingProjects ? ongoingProjects : projects;

  return (
    <div className="mt-20 bg-[#0f0f0f] px-4 py-16 md:px-8 md:py-24 lg:px-32 lg:py-32">
      <Reveal>
        <h2 className="mb-8 text-center font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:mb-12">
          Our Portfolio
        </h2>
      </Reveal>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-3">
          <div
            className={`w-16 h-8 p-1 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
              showOngoingProjects ? "bg-white/75" : "bg-[#8f8270]"
            }`}
            onClick={() => setShowOngoingProjects(!showOngoingProjects)}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                showOngoingProjects ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span className="text-white text-sm sm:text-base md:text-lg font-medium">
            {showOngoingProjects ? "Ongoing" : "Completed"}
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {allProjects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row p-4 sm:p-6 gap-4 sm:gap-6 rounded-lg 
              hover:bg-white/10 hover:text-white hover:-translate-y-2 transition-all duration-300 
              bg-[#7e7d7d]/20 text-white/90"
          >
            {/* Image Section */}
            <div className="w-full sm:w-80 flex-shrink-0">
              <Reveal>
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
                <h3 className="mt-4 text-sm sm:text-base font-semibold">
                  {item.title.split(":")[0]}
                </h3>
              </Reveal>
            </div>

            {/* Description Section */}
            <div className="w-full">
              <Reveal>
                <div className="text-sm sm:text-base space-y-3 whitespace-pre-line">
                  {item.description.split('\n').map((line, i) => (
                    <p key={i} className="leading-relaxed">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
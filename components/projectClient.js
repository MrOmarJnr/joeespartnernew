// app/projects/ProjectsClient.js

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from '@/app/projects/project.module.css';

import projectsData from "@/common/projectsData";

// Client Component for the Projects page content
const ProjectsClient = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [showOngoing, setShowOngoing] = useState(false);

    const handleProjectClick = (id) => {
        setSelectedId(id);
    };

    const closeModal = () => {
        setSelectedId(null);
    };

    const projects = showOngoing ? projectsData.ongoing : projectsData.completed;

    return (
        <main className="min-h-screen bg-[#222222] text-gray-800 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Projects</h1>

                <button
                    onClick={() => setShowOngoing(!showOngoing)}
                    className="px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 mb-4 border rounded-lg border-white"
                >
                    {showOngoing ? "Show Completed Projects" : "Show Ongoing Projects"}
                </button>

                <div className={`${styles.gridContainer} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px]`}>
                                {projects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layoutId={project.id}
                                        onClick={() => handleProjectClick(project.id)}
                                        className={`${styles.projectCard} relative cursor-pointer rounded-xl overflow-hidden bg-blue-182146 shadow-md ${project.colSpan} ${project.rowSpan}`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                            {project.images ? (
                                                <Image
                                                    src={project.images}
                                                    alt={project.name}
                                                    width={400}
                                                    height={500}
                                                    className={styles.projectImage}
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                                    priority={true}
                                                />
                                            ) : (
                                                <p className="text-gray-500 text-sm sm:text-base p-4 text-center">
                                                    No Image Available
                                                </p>
                                            )}
                                        </div>

                                        <div className={styles.textOverlay + " bg-gradient-to-t from-black/70 to-transparent"}>
                                            <h3 className={`${styles.title} text-lg sm:text-xl md:text-xl font-bold text-white`}>
                                                {project.name}
                                            </h3>
                                            <p className={`${styles.subtitle} text-xs sm:text-sm md:text-sm text-white`}>
                                                {project.category}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={selectedId}
                            className= {`fixed inset-0 z-50 flex items-center justify-center  bg-black/80 backdrop-blur-md`}
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-3xl w-full mx-4 bg-blue-182146/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden p-6"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {projects.find((project) => project.id === selectedId) && (
                                    <>
                                        <h2 className="text-2xl font-bold mb-4">
                                            {projects.find((project) => project.id === selectedId).name}
                                        </h2>
                                        <div className="flex gap-4 overflow-x-auto">
                                            {projects.find((project) => project.id === selectedId).images ? (
                                                <div className="w-64 h-48 bg-gray-300 flex items-center justify-center rounded-md">
                                                    <Image
                                                        src={projects.find((project) => project.id === selectedId).images}
                                                        alt={projects.find((project) => project.id === selectedId).name}
                                                        width={500}
                                                        height={450}
                                                        className="object-cover w-full h-full rounded-md"
                                                    />
                                                </div>
                                            ) : (
                                                <p className="text-gray-500">No Image Available</p>
                                            )}
                                        </div>
                                        <p className="mt-4">{projects.find((project) => project.id === selectedId).description}</p>
                                    </>
                                )}

                                <button
                                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                                    onClick={closeModal}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default ProjectsClient;
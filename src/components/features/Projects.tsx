"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassCard } from "@/components/ui/GlassCard";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GitBranch, ArrowUpRight, X, CheckCircle2, Layers, ShieldCheck, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    label: string;
    desc: string;
    tech: string[];
    challenge: string;
    solution: string;
    outcome: string;
}

export function Projects() {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: "sldj",
            title: t.projects.sldj.title,
            label: t.projects.enterprise.label,
            desc: t.projects.sldj.desc,
            tech: ["React", "TypeScript", "Electron", "Tailwind CSS", "Supabase", "PostgreSQL"],
            challenge: "The client needed a secure, high-performance desktop management system to replace manual paper-based student tracking which was inefficient and insecure.",
            solution: "Engineered a cross-platform Electron application integrated with Supabase for real-time data synchronization, featuring a custom-built role-based access control system.",
            outcome: "Successfully streamlined the registration process, reducing administrative overhead by 60% and providing a centralized, secure database for all operations."
        },
        {
            id: "jnote",
            title: t.projects.jnote.title,
            label: t.projects.fullstack.label,
            desc: t.projects.jnote.desc,
            tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "SRS Algorithm"],
            challenge: "Japanese language learners often struggle with Kanji memorization and stroke order, needing a more structured way to track progress.",
            solution: "Developed a specialized note-taking app using a Spaced Repetition System (SRS) algorithm to optimize learning intervals and an SVG-based stroke order visualizer.",
            outcome: "Created a comprehensive tool that helps students master Kanji 2x faster by focusing on their weak points through algorithmic feedback."
        },
        {
            id: "nayagara",
            title: (t.projects as any).nayagara.title,
            label: t.projects.fullstack.label,
            desc: (t.projects as any).nayagara.desc,
            tech: ["React", "Node.js", "Express", "MySQL", "Cloudinary", "Google AI"],
            challenge: "Building a scalable multi-vendor platform required a complex architecture to handle distinct workflows for sellers and customers while maintaining security.",
            solution: "Implemented a robust Express/MySQL backend with JWT authentication, integrated Google AI for automated product categorization, and built a custom referral system to drive user growth.",
            outcome: "Successfully launched a feature-rich e-commerce engine that supports complex variant management and provides sellers with an intuitive, automated inventory dashboard."
        }
    ];

    const images = [
        "/images/sldj_image1.png",
        "/images/sldj_image2.png",
        "/images/sldj_image3.png"
    ];

    const [activeImage, setActiveImage] = React.useState(0);

    return (
        <section id="projects" className="px-6 lg:px-20 py-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Briefcase className="text-tokyo-blue" />
                        {t.sections.projects}
                    </h2>
                    <div className="h-1 w-20 bg-tokyo-blue rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {/* Featured Project: SL Dream Japan */}
                    {projects.filter(p => p.id === "sldj").map(project => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <GlassCard className="p-0 overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
                                <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-tokyo-blue text-sm font-bold tracking-wider mb-2">
                                            <GitBranch size={16} /> {project.label}
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                        <p className="text-slate-300 leading-relaxed mb-6">
                                            {project.desc}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-bold text-white mb-2">Key Tech:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map(tech => (
                                                    <span key={tech} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => setSelectedProject(project)}
                                        className="inline-flex items-center gap-2 text-white font-bold hover:text-tokyo-blue transition-colors mt-auto w-fit"
                                    >
                                        {t.sections.viewCaseStudy} <ArrowUpRight size={18} />
                                    </button>
                                </div>

                                <div className="lg:w-1/2 relative bg-slate-950 flex flex-col">
                                    <div className="relative flex-1 overflow-hidden group">
                                        <motion.div
                                            key={activeImage}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full"
                                        >
                                            <img 
                                                src={images[activeImage]} 
                                                alt="Project UI" 
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                            />
                                        </motion.div>
                                        
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveImage(idx)}
                                                className={cn(
                                                    "w-12 h-1 rounded-full transition-all duration-300",
                                                    activeImage === idx ? "bg-tokyo-blue w-16" : "bg-slate-700 hover:bg-slate-500"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}

                    {/* Secondary Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.filter(p => p.id !== "sldj").map(project => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="h-full flex flex-col justify-between group">
                                    <div>
                                        <div className="text-xs font-bold text-tokyo-blue uppercase tracking-widest mb-3">
                                            {project.label}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-tokyo-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="text-[10px] px-2 py-0.5 bg-slate-800/50 rounded text-slate-400 border border-slate-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedProject(project)}
                                        className="text-white text-sm font-bold flex items-center gap-2 hover:text-tokyo-blue transition-all"
                                    >
                                        View Details <ArrowUpRight size={16} />
                                    </button>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Project Branding & Tech */}
                            <div className="lg:w-1/3 bg-slate-950 p-8 lg:p-12 flex flex-col border-r border-white/5">
                                <div className="text-tokyo-blue text-xs font-black uppercase tracking-[0.2em] mb-4">
                                    Case Study
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                                    {selectedProject.title}
                                </h2>
                                
                                <div className="space-y-6 mt-auto">
                                    <div>
                                        <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Layers size={14} /> Technology Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-slate-900 rounded-lg text-slate-300 text-xs border border-white/5">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-tokyo-blue/5 border border-tokyo-blue/10">
                                        <div className="flex items-center gap-2 text-tokyo-blue text-xs font-bold uppercase mb-1">
                                            <ShieldCheck size={14} /> Project Status
                                        </div>
                                        <div className="text-white text-sm font-medium">Production Ready</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: The Story */}
                            <div className="lg:w-2/3 p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-gradient-to-br from-slate-900 to-slate-950">
                                <div className="space-y-12">
                                    <section>
                                        <div className="flex items-center gap-3 text-white font-bold text-xl mb-4">
                                            <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                                            The Challenge
                                        </div>
                                        <p className="text-slate-400 leading-relaxed text-lg italic">
                                            &quot;{selectedProject.challenge}&quot;
                                        </p>
                                    </section>

                                    <section>
                                        <div className="flex items-center gap-3 text-white font-bold text-xl mb-4">
                                            <div className="w-1.5 h-6 bg-tokyo-blue rounded-full" />
                                            The Solution
                                        </div>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {selectedProject.solution}
                                        </p>
                                    </section>

                                    <section>
                                        <div className="flex items-center gap-3 text-white font-bold text-xl mb-4">
                                            <div className="w-1.5 h-6 bg-green-500 rounded-full" />
                                            Key Outcomes
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <p className="text-white leading-relaxed flex items-start gap-3">
                                                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                                                {selectedProject.outcome}
                                            </p>
                                        </div>
                                    </section>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                                    <Link 
                                        href={selectedProject.id === "sldj" ? "https://github.com/bhanu2191" : (selectedProject.id === "nayagara" ? "https://github.com/gihanpunarji/nayagara" : "#")} 
                                        target="_blank"
                                        className="px-6 py-3 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-tokyo-blue hover:text-white transition-all flex items-center gap-2"
                                    >
                                        View Codebase <ExternalLink size={14} />
                                    </Link>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                                    >
                                        Close Case Study
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

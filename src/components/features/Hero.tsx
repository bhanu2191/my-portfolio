"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowRight, Terminal, Play, Cpu, Globe, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20 relative overflow-hidden">
            {/* Cinematic Background - Floating Keyframes & Tech Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[5%] right-[5%] w-[800px] h-[800px] border border-white/5 rounded-full" 
                />
                
                {/* Floating Tech Cloud */}
                {[
                    { icon: "Pr", label: "Premiere", top: "15%", left: "70%", delay: 0, color: "#9999ff" },
                    { icon: "Ae", label: "After Effects", top: "45%", left: "85%", delay: 2, color: "#cf96fd" },
                    { icon: <Cpu size={28} />, label: "Java", top: "75%", left: "65%", delay: 4, color: "#f89820" },
                    { icon: <Globe size={28} />, label: "AWS", top: "25%", left: "80%", delay: 1, color: "#ff9900" },
                    { icon: <Github size={28} />, label: "GitHub", top: "60%", left: "75%", delay: 3, color: "#ffffff" },
                    { icon: "Dr", label: "DaVinci", top: "85%", left: "80%", delay: 5, color: "#ff4b2b" },
                ].map((tech, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0.4, 0.8, 0.4],
                            y: [0, -40, 0],
                            x: [0, 25, 0],
                            scale: 1
                        }}
                        transition={{ 
                            duration: 12 + i * 2, 
                            repeat: Infinity, 
                            delay: tech.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute hidden lg:flex flex-col items-center gap-3 group"
                        style={{ top: tech.top, left: tech.left }}
                    >
                        <div 
                            className="w-14 h-14 rounded-2xl bg-slate-900/80 border-2 backdrop-blur-md flex items-center justify-center transition-all duration-500 shadow-2xl relative overflow-hidden"
                            style={{ borderColor: `${tech.color}33`, color: tech.color }}
                        >
                            {/* Inner Brand Glow */}
                            <div 
                                className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity" 
                                style={{ backgroundColor: tech.color }} 
                            />
                            
                            <div className="relative z-10 group-hover:scale-110 transition-transform">
                                {typeof tech.icon === 'string' ? (
                                    <span className="text-lg font-black tracking-tighter">{tech.icon}</span>
                                ) : (
                                    tech.icon
                                )}
                            </div>
                        </div>
                        <span 
                            className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all"
                            style={{ color: tech.color }}
                        >
                            {tech.label}
                        </span>
                    </motion.div>
                ))}

                <motion.div 
                    animate={{ x: [0, 100, 0], opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tokyo-blue to-transparent" 
                />
            </div>

            {/* Viewfinder Corners */}
            <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-white/20" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-5xl relative z-10"
            >
                {/* Mode Indicator */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        REC
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                        00:00:24:12
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-tokyo-blue text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <Terminal size={14} className="animate-pulse" />
                        <span>{t.hero.role}</span>
                    </div>

                    <h1 className="text-6xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase overflow-hidden">
                        <motion.span
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
                            className="block text-gradient py-2"
                        >
                            Video Editor
                        </motion.span>
                        <motion.span
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                            className="block opacity-80"
                        >
                            & Developer
                        </motion.span>
                    </h1>
                </motion.div>

                <p className="text-lg lg:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12 font-medium">
                    {t.hero.description}
                </p>

                <div className="flex flex-wrap gap-8">
                    <motion.a
                        whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
                        whileTap={{ scale: 0.95 }}
                        href="#video-editing"
                        className="px-12 py-6 rounded-none border-2 border-tokyo-blue bg-tokyo-blue/10 text-white font-black uppercase tracking-widest hover:bg-tokyo-blue transition-all shadow-[0_0_30px_rgba(0,180,216,0.2)] flex items-center gap-4 group"
                    >
                        <Play size={20} fill="currentColor" />
                        {t.hero.cta}
                    </motion.a>
                    <motion.a
                        whileHover={{ x: 5 }}
                        href="#contact"
                        className="px-12 py-6 rounded-none border-2 border-white/10 text-white font-black uppercase tracking-widest transition-all hover:border-white flex items-center gap-4"
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>

            {/* Bottom Timeline Decor */}
            <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none border-t border-white/5 bg-gradient-to-t from-white/5 to-transparent">
                <div className="h-full w-full flex items-end gap-1 px-4 opacity-20">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className={`w-0.5 bg-white ${i % 10 === 0 ? 'h-8' : i % 5 === 0 ? 'h-5' : 'h-2'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}

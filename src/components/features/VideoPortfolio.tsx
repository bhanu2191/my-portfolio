"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Play, Layers, Video } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function VideoPortfolio() {
    const { t } = useLanguage();

    return (
        <section id="video-editing" className="px-6 lg:px-20 py-20 relative bg-slate-950/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Video className="text-tokyo-blue" />
                        {t.sections.videoPortfolio}
                    </h2>
                    <div className="h-1 w-20 bg-tokyo-blue rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Noctaku Empire Highlight (Vertical Reel) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <GlassCard className="p-0 overflow-hidden aspect-[9/16] relative border-white/5 shadow-2xl">
                            <iframe 
                                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1231212462434055%2F&show_text=false&width=267&t=0" 
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 'none', overflow: 'hidden' }} 
                                scrolling="no" 
                                frameBorder="0" 
                                allowFullScreen={true} 
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            />
                        </GlassCard>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{t.video.noctaku.title}</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                {t.video.noctaku.desc}
                            </p>
                        </div>
                    </motion.div>

                    {/* Balanced Showreel Placeholder (Vertical Match) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <GlassCard className="p-0 overflow-hidden aspect-[9/16] relative flex items-center justify-center bg-slate-900 border-dashed border-2 border-white/5 group transition-all hover:border-tokyo-blue/30 shadow-2xl">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-tokyo-blue/10 transition-colors">
                                    <Play size={24} className="text-slate-600 group-hover:text-tokyo-blue translate-x-0.5" />
                                </div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-3 italic leading-tight">New 2026<br/>Showreel</h3>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-relaxed max-w-[140px] mx-auto">
                                    Curating recent high-impact cinematic edits
                                </p>
                                <div className="mt-6 flex justify-center gap-1">
                                    <div className="w-1 h-1 rounded-full bg-tokyo-blue animate-pulse" />
                                    <div className="w-1 h-1 rounded-full bg-tokyo-blue/40 animate-pulse delay-75" />
                                    <div className="w-1 h-1 rounded-full bg-tokyo-blue/20 animate-pulse delay-150" />
                                </div>
                            </div>
                        </GlassCard>
                        <div>
                            <h3 className="text-xl font-bold text-slate-700 mb-2 italic tracking-tighter">Production Stage</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Curating a selection of my best post-production work and visual storytelling.
                            </p>
                        </div>
                    </motion.div>

                    {/* Udemy Mastery Card (Balanced) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <GlassCard className="p-8 h-full flex flex-col justify-center bg-tokyo-blue/5 border-tokyo-blue/20 group shadow-2xl">
                            <div className="w-12 h-12 rounded-xl bg-tokyo-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="text-tokyo-blue" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 italic">Continuous Mastery</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                {t.video.learning}
                            </p>
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="text-[10px] text-tokyo-blue font-black uppercase tracking-widest mb-2">Certification</div>
                                <div className="text-white font-bold text-sm tracking-tight uppercase">Premiere Pro Master Class CC</div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tokyo-blue/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tokyo-blue/10 border border-tokyo-blue/20 text-tokyo-blue text-sm font-medium mb-6">
                    <Terminal size={14} />
                    <span>System Architect / Full-Stack</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-tokyo-blue to-indigo-400">Resilient</span> Systems <br />
                    for the Future.
                </h1>

                <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
                    {t.hero.description}
                </p>

                {/* Japan Readiness Status */}
                <div className="mb-12 p-6 rounded-xl bg-slate-900/50 border border-slate-800 max-w-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            {t.hero.status}
                        </span>
                        <span className="text-xs text-tokyo-blue font-bold">JLPT N5 (Thinking/Planned)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        {/* Simulating progress - let's say 40% for N5 study */}
                        <motion.div
                            className="h-full bg-tokyo-blue"
                            initial={{ width: 0 }}
                            animate={{ width: "40%" }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                        Currently mastering Hiragana/Katakana & Basic Grammar.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
                    >
                        {t.hero.cta}
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-slate-700 hover:border-white text-white font-medium transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

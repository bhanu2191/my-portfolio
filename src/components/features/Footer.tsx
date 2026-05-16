"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, Linkedin, Mail, ExternalLink, Cpu } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
    const { t } = useLanguage();
    
    const contactData = {
        name: "Akila Abeysinghe",
        role: "Video Editor & Software Engineer",
        location: "Sri Lanka / Tokyo (Planned)",
        email: "bhanuprabhashwara244@gmail.com",
        status: "Open for Opportunities",
        stack: ["React", "Electron", "Go", "Premiere Pro"]
    };

    return (
        <footer id="contact" className="px-6 lg:px-20 py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Let&apos;s Connect</h2>
                    <p className="text-slate-500 font-mono text-sm">/var/log/contact_request.sh</p>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mx-auto bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono"
                >
                    {/* Terminal Header */}
                    <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                            bash — 80x24
                        </div>
                        <div className="w-10" />
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 lg:p-10 text-sm lg:text-base leading-relaxed">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-green-400">➜</span>
                                <span className="text-tokyo-blue">~</span>
                                <span className="text-white">fetch-contact-info --json</span>
                            </div>

                            <motion.pre 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-slate-300 overflow-x-auto whitespace-pre-wrap bg-slate-900/50 p-6 rounded-lg border border-slate-800/50"
                            >
                                <code className="text-blue-300">
{`{
  "profile": {
    "name": "Akila Abeysinghe",
    "focus": ["Visual Arts", "System Architecture"],
    "tools": ["Premiere Pro", "React", "Electron", "Go"]
  },
  "socials": {
    "github": "bhanu2191",
    "linkedin": "akila-abeysinghe"
  },
  "contact": {
    "email": "bhanuprabhashwara244@gmail.com",
    "status": "Ready for Deploy",
    "availability": "Remote / On-site (Japan)"
  }
}`}
                                </code>
                            </motion.pre>

                            <div className="flex flex-wrap gap-6 mt-6">
                                <a href="mailto:bhanuprabhashwara244@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                                    <Mail size={18} className="group-hover:text-tokyo-blue" />
                                    <span>Email</span>
                                </a>
                                <a href="https://github.com/bhanu2191" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                                    <Github size={18} className="group-hover:text-tokyo-blue" />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                                    <Linkedin size={18} className="group-hover:text-tokyo-blue" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            <div className="flex gap-3 mt-8 animate-pulse">
                                <span className="text-green-400">➜</span>
                                <span className="text-tokyo-blue">~</span>
                                <span className="text-white">|</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Credits */}
                <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-tokyo-blue/10 border border-tokyo-blue/20 flex items-center justify-center">
                            <Cpu size={16} className="text-tokyo-blue" />
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            Built with Next.js & Framer Motion
                        </span>
                    </div>
                    <div className="text-[10px] text-slate-600 font-mono">
                        © 2026 AKILA_ABEYSINGHE_CORE_V1.0
                    </div>
                </div>
            </div>
        </footer>
    );
}

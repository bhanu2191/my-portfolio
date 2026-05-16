"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText, User, Video, Code, Cpu, Globe } from "lucide-react";

export function Sidebar() {
    const { t, language, setLanguage } = useLanguage();

    const navItems = [
        { label: t.nav.about, href: "#about", icon: <User size={18} /> },
        { label: t.nav.video, href: "#video-editing", icon: <Video size={18} /> },
        { label: t.nav.projects, href: "#projects", icon: <Code size={18} /> },
        { label: t.nav.stack, href: "#stack", icon: <Cpu size={18} /> },
    ];

    return (
        <aside className="lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:h-screen lg:w-80 w-full p-4 lg:p-6 flex flex-col pointer-events-auto bg-slate-950/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none border-b lg:border-none border-slate-800">
            <div className="h-full flex flex-col gap-6">
                {/* Profile Section */}
                <GlassCard className="flex flex-col items-center text-center gap-4 relative overflow-hidden group p-6 border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-tokyo-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative w-24 h-24 lg:w-28 lg:h-28">
                        <div className="absolute inset-0 bg-tokyo-blue/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden">
                            <Image
                                src="/images/profile.webp"
                                alt="Akila Abeysinghe"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Live Status */}
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-xl font-black text-white tracking-tight uppercase leading-tight">Akila Abeysinghe</h1>
                        <p className="text-[10px] text-tokyo-blue font-bold mt-1 uppercase tracking-widest">{t.hero.role}</p>
                    </div>

                    <div className="flex gap-4 relative z-10 pt-2">
                        <Link href="https://github.com/bhanu2191" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </GlassCard>

                {/* Main Navigation */}
                <nav className="flex-1 space-y-2">
                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] mb-4 px-4">Navigation</div>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                        >
                            <span className="text-slate-500 group-hover:text-tokyo-blue transition-colors">
                                {item.icon}
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Footer Controls */}
                <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Globe size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Language</span>
                        </div>
                        <div className="flex gap-1">
                            {['en', 'jp'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang as any)}
                                    className={cn(
                                        "px-2 py-0.5 rounded text-[10px] font-black uppercase transition-all",
                                        language === lang ? "bg-tokyo-blue text-white" : "text-slate-600 hover:text-slate-400"
                                    )}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>

                    <a 
                        href="/images/resume.pdf" 
                        download 
                        className="w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-[0_10px_30px_rgba(255,255,255,0.05)] flex items-center justify-center gap-2 hover:bg-tokyo-blue hover:text-white transition-all group"
                    >
                        <FileText size={16} />
                        Download CV
                    </a>
                </div>
            </div>
        </aside>
    );
}

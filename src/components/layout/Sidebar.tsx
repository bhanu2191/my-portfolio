"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText, User, Video, Code, Cpu, Globe, Mail, Download } from "lucide-react";

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
            <div className="h-full flex flex-col gap-4 lg:gap-6">
                {/* Profile Section - Adaptive Layout */}
                <GlassCard className="flex flex-row lg:flex-col items-center text-left lg:text-center gap-4 lg:gap-4 relative overflow-hidden group p-4 lg:p-6 border-white/5 shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-tokyo-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative w-16 h-16 lg:w-28 lg:h-28 shrink-0">
                        <div className="absolute inset-0 bg-tokyo-blue/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden">
                            <Image
                                src="/images/profile.webp"
                                alt="Akila Abeysinghe"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 lg:bottom-1 lg:right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 border-2 border-slate-950 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>

                    <div className="relative z-10 flex-1 lg:flex-none">
                        <h1 className="text-base lg:text-xl font-black text-white tracking-tight uppercase leading-tight">Akila Abeysinghe</h1>
                        <p className="text-[9px] lg:text-[10px] text-tokyo-blue font-bold mt-0.5 lg:mt-1 uppercase tracking-widest">{t.hero.role}</p>
                        
                        {/* Socials - Shown on Mobile Profile Header */}
                        <div className="flex lg:hidden gap-3 mt-2">
                            <Link href="mailto:bhanuprabhashwara244@gmail.com" className="text-slate-500 hover:text-white transition-colors">
                                <Mail size={16} />
                            </Link>
                            <Link href="https://github.com/bhanu2191" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                                <Github size={16} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                                <Linkedin size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Socials - Desktop Version */}
                    <div className="hidden lg:flex gap-4 relative z-10 pt-2">
                        <Link href="mailto:bhanuprabhashwara244@gmail.com" className="text-slate-500 hover:text-white transition-colors">
                            <Mail size={20} />
                        </Link>
                        <Link href="https://github.com/bhanu2191" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </GlassCard>

                {/* Main Navigation - Horizontal Scroll on Mobile */}
                <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
                    <div className="hidden lg:block text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] mb-2 px-4">Navigation</div>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 lg:gap-4 px-4 py-2 lg:py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-white/5 whitespace-nowrap lg:whitespace-normal shrink-0"
                        >
                            <span className="text-slate-500 group-hover:text-tokyo-blue transition-colors">
                                {item.icon}
                            </span>
                            <span className="text-[10px] lg:text-sm font-bold uppercase tracking-widest">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Footer Controls - Stacked on Mobile */}
                <div className="mt-auto flex flex-row lg:flex-col gap-3 lg:gap-4 items-center lg:items-stretch">
                    <div className="flex-1 lg:flex-none flex items-center justify-between px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="hidden sm:flex items-center gap-2 text-slate-500">
                            <Globe size={12} className="lg:w-3.5 lg:h-3.5" />
                        </div>
                        <div className="flex gap-1">
                            {['en', 'jp'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang as any)}
                                    className={cn(
                                        "px-2 py-0.5 rounded text-[9px] lg:text-[10px] font-black uppercase transition-all",
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
                        className="flex-1 lg:flex-none py-2.5 lg:py-4 rounded-xl bg-tokyo-blue text-white font-black uppercase tracking-widest text-[9px] lg:text-[11px] shadow-[0_10px_30px_rgba(0,180,216,0.2)] flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all group whitespace-nowrap"
                    >
                        <Download size={14} className="lg:w-4 lg:h-4 group-hover:translate-y-0.5 transition-transform" />
                        Resume
                    </a>
                </div>
            </div>
        </aside>
    );
}

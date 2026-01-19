"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
    const { t, language, setLanguage } = useLanguage();

    const navItems = [
        { label: t.nav.about, href: "#about" },
        { label: t.nav.stack, href: "#stack" },
        { label: t.nav.projects, href: "#projects" },
    ];

    return (
        <aside className="lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:h-screen lg:w-80 w-full p-4 lg:p-6 flex flex-col pointer-events-auto bg-slate-950/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none border-b lg:border-none border-slate-800">
            {/* Mobile/Desktop Layout Handling */}
            <div className="h-full flex flex-col gap-6">
                {/* Profile Card */}
                <GlassCard className="flex flex-row lg:flex-col items-center text-center gap-4 relative overflow-hidden group p-4 lg:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-tokyo-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-slate-800 border-2 border-tokyo-blue p-1 shrink-0 overflow-hidden">
                        <Image
                            src="/images/profile.webp"
                            alt="Akila Abeysinghe"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="relative z-10 text-left lg:text-center">
                        <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight">Akila Abeysinghe</h1>
                        <p className="text-sm text-slate-400 mt-1">{t.hero.role}</p>
                    </div>

                    <div className="flex gap-3 relative z-10 ml-auto lg:ml-0">
                        <Link href="https://github.com" target="_blank" className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                            <Github size={18} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </Link>
                    </div>
                </GlassCard>

                {/* Navigation - Hidden on Mobile for now, or could use a details/summary dropdown */}
                <nav className="flex-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-tokyo-blue hover:bg-slate-900/50 transition-all font-medium"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-tokyo-blue transition-colors" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Language Toggler & Resume */}
                <div className="hidden lg:flex flex-col gap-4 mt-auto">
                    <GlassCard className="p-4 flex items-center justify-between" hoverEffect={false}>
                        <span className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Globe size={16} /> Language
                        </span>
                        <button
                            onClick={() => setLanguage(language === "en" ? "jp" : "en")}
                            className="relative px-3 py-1 rounded-full bg-slate-800 flex items-center gap-2 hover:bg-slate-700 transition"
                        >
                            <span className={cn("text-xs font-bold transition-colors", language === "en" ? "text-tokyo-blue" : "text-slate-500")}>EN</span>
                            <span className="w-[1px] h-3 bg-slate-600" />
                            <span className={cn("text-xs font-bold transition-colors", language === "jp" ? "text-tokyo-blue" : "text-slate-500")}>JP</span>
                        </button>
                    </GlassCard>

                    <button className="w-full py-3 px-4 rounded-xl bg-tokyo-blue hover:bg-tokyo-blue-hover text-white font-bold shadow-lg shadow-tokyo-blue/20 flex items-center justify-center gap-2 transition-all active:scale-95">
                        <FileText size={18} />
                        Download Resume
                    </button>
                </div>
            </div>
        </aside>
    );
}

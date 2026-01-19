"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Code2, Cloud, Server, Database, Cpu, Globe } from "lucide-react";

export function TechStack() {
    const { t } = useLanguage();

    const skills = [
        {
            category: "Core & Frontend",
            icon: <Code2 className="text-tokyo-blue" size={24} />,
            items: ["Java", "Go (Golang)", "TypeScript", "Next.js 15", "React", "React Native"],
        },
        {
            category: "Cloud & DevOps",
            icon: <Cloud className="text-indigo-400" size={24} />,
            items: ["AWS (Lambda, EC2, S3)", "Terraform", "Docker", "Kubernetes", "CI/CD (GitHub Actions)"],
        },
        {
            category: "Systems & Backend",
            icon: <Server className="text-emerald-400" size={24} />,
            items: ["Distributed Systems", "Microservices", "gRPC / Protobuf", "PostgreSQL", "Redis", "Kafka"],
        },
    ];

    return (
        <section id="stack" className="px-6 lg:px-20 py-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-3">
                        <Cpu className="text-tokyo-blue" />
                        {t.sections.stack}
                    </h2>
                    <div className="h-1 w-20 bg-tokyo-blue rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <GlassCard className="h-full flex flex-col gap-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100">{skill.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700 text-sm text-slate-300 hover:border-tokyo-blue/30 hover:text-white transition-colors cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

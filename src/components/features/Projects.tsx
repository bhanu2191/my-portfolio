"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GlassCard } from "@/components/ui/GlassCard";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";
import { motion } from "framer-motion";
import { Briefcase, GitBranch, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
    const { t } = useLanguage();

    const microservicesChart = `
    graph LR
      Client[Client App] --> API[API Gateway]
      API --> Auth[Auth Service]
      API --> Order[Order Service]
      API --> Pay[Payment Service]
      Order --> Kafka[Kafka Broker]
      Kafka --> Notif[Notification Service]
      Pay --> Stripe((Stripe))
      
      style Client fill:#0077B6,stroke:#fff,stroke-width:2px,color:#fff
      style API fill:#023e8a,stroke:#fff,stroke-width:2px,color:#fff
      style Auth fill:#1e293b,stroke:#0077B6
      style Order fill:#1e293b,stroke:#0077B6
      style Pay fill:#1e293b,stroke:#0077B6
      style Kafka fill:#eab308,color:#000
  `;

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
                    {/* Project 1: Distributed Microservices */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassCard className="p-0 overflow-hidden flex flex-col lg:flex-row">
                            <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-tokyo-blue text-sm font-bold tracking-wider mb-2">
                                        <GitBranch size={16} /> {t.projects.distributed.label}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{t.projects.ecommerce.title}</h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {t.projects.ecommerce.desc}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-white mb-2">Key Tech:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Go", "gRPC", "Kafka", "PostgreSQL", "Docker", "Kubernetes"].map(tech => (
                                                <span key={tech} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-tokyo-blue transition-colors">
                                    {t.sections.viewCaseStudy} <ArrowUpRight size={18} />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 bg-slate-900/50 border-l border-slate-800 p-6 flex items-center justify-center">
                                <div className="w-full">
                                    <h4 className="text-xs text-slate-500 mb-2 uppercase tracking-widest text-center">{t.sections.systemArch}</h4>
                                    <MermaidDiagram chart={microservicesChart} className="bg-transparent" />
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

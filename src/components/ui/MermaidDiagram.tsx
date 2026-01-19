"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "var(--font-inter)",
});

interface MermaidDiagramProps {
    chart: string;
    className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");

    useEffect(() => {
        if (ref.current) {
            const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
            mermaid.render(id, chart).then(({ svg }) => {
                setSvg(svg);
            }).catch((error) => {
                console.error("Mermaid failed to render:", error);
            });
        }
    }, [chart]);

    return (
        <div
            className={cn("w-full overflow-x-auto p-4 bg-slate-900/50 rounded-lg", className)}
            ref={ref}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

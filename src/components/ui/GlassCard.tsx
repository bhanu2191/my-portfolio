import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-md p-6 shadow-xl",
                hoverEffect && "transition-all duration-300 hover:border-tokyo-blue/50 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-tokyo-blue/10",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

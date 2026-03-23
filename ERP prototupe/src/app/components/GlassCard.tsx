import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-white/30 via-white/20 to-white/10 
        backdrop-blur-2xl 
        rounded-3xl 
        shadow-2xl shadow-[#472e94]/15
        border border-white/30
        relative overflow-hidden
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-blue-400/10 before:via-transparent before:to-purple-400/10
        before:rounded-3xl
        after:absolute after:inset-0
        after:bg-gradient-to-tr after:from-transparent after:via-white/10 after:to-transparent
        after:translate-x-[-100%] hover:after:translate-x-[100%]
        after:transition-transform after:duration-1000
        after:rounded-3xl
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

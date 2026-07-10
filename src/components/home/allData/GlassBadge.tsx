export interface GlassBadgeProps {
  text: string;
}

const GlassBadge = ({ text }: GlassBadgeProps) => {
  return (
    <div
      className="
        inline-flex items-center
        px-3 py-1.5
        rounded-full
        text-[10px] md:text-[11px]
        font-medium
        uppercase tracking-[0.15em]
        text-white/85

        bg-white/[0.06]
        backdrop-blur-xl
        border border-white/10

        shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        relative overflow-hidden
      "
    >
      {/* top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8966E0] to-transparent" />

      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      <span className="relative z-10">{text}</span>
    </div>
  );
};

export default GlassBadge;
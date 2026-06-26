export function AuroraBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
        <div className="absolute -left-1/4 top-[-30%] h-[70rem] w-[70rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(56_189_248/0.36),transparent_62%)] blur-3xl [animation:aurora-drift_18s_ease-in-out_infinite]" />
        <div className="absolute right-[-20%] top-[-10%] h-[58rem] w-[58rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(59_130_246/0.3),transparent_64%)] blur-3xl [animation:aurora-drift_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[-38%] left-[18%] h-[64rem] w-[64rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(45_212_191/0.18),transparent_65%)] blur-3xl [animation:pulse-glow_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(3_7_18/0.28),rgb(3_7_18/0.92)_68%,#030712)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      </div>
      <div className="noise-mask" />
    </>
  );
}

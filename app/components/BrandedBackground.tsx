type BrandedBackgroundProps = {
  variant?: "default" | "extended" | "subtle";
};

export function BrandedBackground({
  variant = "default",
}: BrandedBackgroundProps) {
  const heightClass =
    variant === "extended"
      ? "h-[360px]"
      : variant === "subtle"
        ? "h-[220px]"
        : "h-[300px]";

  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 z-0 w-full overflow-hidden bg-[#21313F] ${heightClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,159,232,0.45),transparent_34%),linear-gradient(180deg,#21313F_0%,#33495B_52%,rgba(255,255,255,0)_100%)]" />

      <div className="absolute -right-24 top-8 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -right-14 top-20 h-44 w-44 rounded-full border border-white/10" />
      <div className="absolute left-8 top-24 h-28 w-28 rounded-full bg-[#D5E9FA]/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}

export default BrandedBackground;
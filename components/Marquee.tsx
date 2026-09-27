type MarqueeProps = {
  items: string[];
  variant?: "dark" | "light";
};

export default function Marquee({ items, variant = "dark" }: MarqueeProps) {
  // Se duplica la lista para que el scroll infinito no muestre un salto.
  const looped = [...items, ...items, ...items];

  return (
    <div
      className={
        variant === "dark"
          ? "overflow-hidden bg-gradient-to-r from-[#008ba0] to-[#11141d] py-3.5"
          : "overflow-hidden bg-bg-light py-3.5"
      }
    >
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-10">
          {looped.map((text, i) => (
            <span
              key={i}
              className={
                "whitespace-nowrap text-sm font-semibold tracking-wide uppercase " +
                (variant === "dark" ? "text-white" : "text-heading")
              }
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

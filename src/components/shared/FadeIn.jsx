import { useFadeIn } from "../../hooks/useFadeIn";

export default function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.62s ease ${delay}s, transform 0.62s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

import { Link } from "react-router";


interface ArrowButtonProps {
  to: string;
  direction?: "left" | "right";
}

const ArrowButton = ({ to, direction = "right" }: ArrowButtonProps) => {
  const arrow = direction === "right" ? "➡️" : "⬅️";

  return (
    <Link
      to={to}
      className={`fixed bottom-6 ${direction === "right" ? "right-6" : "left-6"} 
      text-3xl hover:scale-110 transition-transform`}
      aria-label={`Gå till ${direction === "right" ? "morgondagen" : "startsidan"}`}
    >
      {arrow}
    </Link>
  );
};

export default ArrowButton;
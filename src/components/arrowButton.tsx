import { Link } from "react-router";


interface ArrowButtonProps {
  to: string;
  direction?: "left" | "right";
  className?: string;
}

const ArrowButton = ({ to, direction = "right", className }: ArrowButtonProps) => {
    const arrow = direction === "right" ? "➡️" : "⬅️";
  
    return (
      <Link
        to={to}
        className={className}
        aria-label={`Gå till ${direction === "right" ? "morgondagen" : "startsidan"}`}
      >
        {arrow}
      </Link>
    );
  };

export default ArrowButton;
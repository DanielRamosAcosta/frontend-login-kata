import { VisibilityOffIcon } from "./icons/VisibilityOffIcon";
import { VisibilityIcon } from "./icons/VisibilityIcon";
import "./VisibilityButton.css";

export const VisibilityButton = ({ isVisible, setIsVisible }) => {
  return (
    <button
      className="visibility-button"
      type="button"
      onClick={() => setIsVisible(!isVisible)}
      aria-label={isVisible ? "Hide password" : "Show password"}
    >
      {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </button>
  );
};

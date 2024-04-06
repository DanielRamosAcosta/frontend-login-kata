import { VisibilityOffIcon } from "./icons/VisibilityOffIcon";
import { VisibilityIcon } from "./icons/VisibilityIcon";
import "./VisibilityButton.css";

type VisibilityButtonProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export const VisibilityButton = ({
  isVisible,
  setIsVisible,
}: VisibilityButtonProps) => {
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

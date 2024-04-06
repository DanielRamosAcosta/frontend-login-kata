import "./Button.css";

export const Button = ({ title, disabled = false }) => (
  <button className="button-container" disabled={disabled}>
    {title}
  </button>
);

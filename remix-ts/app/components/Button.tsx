import "./Button.css";

type ButtonProps = {
  title: string;
  disabled?: boolean;
};

export const Button = ({ title, disabled = false }: ButtonProps) => (
  <button className="button-container" disabled={disabled}>
    {title}
  </button>
);

import "./PasswordField.css";

type PasswordFieldProps = {
  id: string;
  labelText: string;
  value: string;
  onChange: (passwordValue: string) => void;
};

export const PasswordField = ({
  id,
  labelText,
  value,
  onChange,
}: PasswordFieldProps) => {
  return (
    <div className="password-field-container">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type="password"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};

import "./EmailField.css";

type EmailFieldProps = {
  id: string;
  labelText: string;
  value: string;
  onChange: (emailValue: string) => void;
};

export const EmailField = ({
  id,
  labelText,
  value,
  onChange,
}: EmailFieldProps) => {
  return (
    <div className="email-field-container">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type="email"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};

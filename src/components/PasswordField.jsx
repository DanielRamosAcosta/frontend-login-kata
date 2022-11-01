import "./PasswordField.css";

export const PasswordField = ({ id, labelText, value, onChange }) => {
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

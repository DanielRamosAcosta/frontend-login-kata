import "./EmailField.css";

export const EmailField = ({ id, labelText, value, onChange }) => {
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

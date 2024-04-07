import "./PasswordField.css";
import { VisibilityButton } from "./VisibilityButton";
import { useState } from "react";

export const PasswordField = ({ id, labelText, value, onChange }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <div className="password-field-container">
      <label htmlFor={id}>{labelText}</label>
      <div>
        <input
          id={id}
          type={passwordIsVisible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></input>
        <VisibilityButton
          isVisible={passwordIsVisible}
          setIsVisible={setPasswordIsVisible}
        />
      </div>
    </div>
  );
};

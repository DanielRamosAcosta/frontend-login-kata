import "./PasswordField.css";
import { VisibilityButton } from "./VisibilityButton";
import { useState } from "react";

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

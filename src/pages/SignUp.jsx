import { useEffect, useState } from "react";
import "./SignUp.css";
import { EmailField } from "../components/EmailField.jsx";
import { PasswordField } from "../components/PasswordField.jsx";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { translateError } from "../utils/translateError.js";
import { useDependencies } from "../hooks/UseDependencies.jsx";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { authService, routerService } = useDependencies();

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  return (
    <main className="signup-container">
      <form
        className="signup-form"
        onSubmit={(event) => {
          event.preventDefault();

          authService
            .signUp(email, password)
            .then(() => {
              routerService.navigateToSignUpSuccess();
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        <Title>Sign up with email</Title>
        <p>Enter your email address to create an account.</p>

        <EmailField
          id="email"
          labelText="Your email"
          value={email}
          onChange={setEmail}
        />
        <PasswordField
          id="password"
          labelText="Your password"
          value={password}
          onChange={setPassword}
        />
        {errorMessage && <p>{translateError(errorMessage)}</p>}
        <Button title="Signup" />
      </form>
    </main>
  );
};

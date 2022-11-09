import { useEffect, useState } from "react";
import "./SignUp.css";
import { EmailField } from "../components/EmailField.jsx";
import { PasswordField } from "../components/PasswordField.jsx";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { translateError } from "../utils/translateError.js";

/**
 * SignUp component
 * @param {AuthService} authService
 * @returns {JSX.Element}
 * @constructor
 */
export const SignUp = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

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
            .signup(email, password)
            .then(() => {
              setSignUpSuccess(true);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        <Title>Sign up with email</Title>
        <p>Enter your email address to create an account.</p>

        {signUpSuccess && <p>You have successfully been registered</p>}
        {!signUpSuccess && (
          <>
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
          </>
        )}
      </form>
    </main>
  );
};

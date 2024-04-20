import { useEffect, useState } from "react";
import "./Login.css";
import { EmailField } from "../components/EmailField.js";
import { PasswordField } from "../components/PasswordField.js";
import { Title } from "../components/Title.js";
import { Button } from "../components/Button.js";
import { useDependencies } from "../injection/DependenciesContext.ts";
import { LoginUseCase } from "../stuff/LoginUseCase.ts";
import { Token } from "../stuff/Token.ts";
import { useTranslation } from "../hooks/useTranslation.ts";

export const Login = () => {
  const container = useDependencies();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorCode(null);
  }, [email, password]);

  return (
    <main className="login-container">
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoading(true);
          setErrorCode(null);

          container
            .getAsync<LoginUseCase>(Token.LOGIN_USE_CASE)
            .then((login) => login.execute(email, password))
            .catch((error) => {
              setErrorCode(error.message);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        <Title>{t("login.title")}</Title>
        <p>{t("login.subtitle")}</p>

        <EmailField
          id="email"
          labelText={t("login.email")}
          value={email}
          onChange={setEmail}
        />
        <PasswordField
          id="password"
          labelText={t("login.password")}
          value={password}
          onChange={setPassword}
        />
        {errorCode && <p>{t(`errors.${errorCode}`)}</p>}
        <Button title={t("login.login")} disabled={isLoading} />
      </form>
    </main>
  );
};

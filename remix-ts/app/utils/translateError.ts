export function translateError(code: string) {
  switch (code) {
    case "missing_password_field":
      return "Password field is required";
    case "missing_email_field":
      return "Email field is required";
    case "password_too_short":
      return "The password is too short";
    case "email_already_exists":
      return "Email already exists";
    case "wrong_email_or_password":
      return "Wrong email or password";
    default:
      console.warn(`Unknown translation "${code}"`);
      return "Unknown error";
  }
}

export interface AuthService {
  login(email: string, password: string): Promise<{ jwt: string }>;
}

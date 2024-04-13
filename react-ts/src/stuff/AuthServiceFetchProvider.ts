export const authServiceProvider = () => async () => {
  const { AuthServiceFetch } = await import("./AuthServiceFetch.ts");

  return AuthServiceFetch.create();
};

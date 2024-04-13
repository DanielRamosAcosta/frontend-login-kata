export const tokenRepositoryLocalStorageProvider = () => async () => {
  const { TokenRepositoryLocalStorage } = await import(
    "./TokenRepositoryLocalStorage"
  );

  return TokenRepositoryLocalStorage.create();
};

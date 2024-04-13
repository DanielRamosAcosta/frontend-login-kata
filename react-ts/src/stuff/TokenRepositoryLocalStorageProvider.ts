export const tokenRepositoryLocalStorageProvider2 = async () => {
  const { TokenRepositoryLocalStorage } = await import(
    "./TokenRepositoryLocalStorage"
  );

  return TokenRepositoryLocalStorage.create();
};

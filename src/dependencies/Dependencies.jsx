import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { createDependenciesReal } from "../factories/CreateDependenciesReal.js";

export const Dependencies = createContext(null);

export function DependenciesProvider({ children }) {
  const navigate = useNavigate();
  const dependencies = useMemo(
    () => createDependenciesReal({ navigate }),
    [navigate]
  );

  return (
    <Dependencies.Provider value={dependencies}>
      {children}
    </Dependencies.Provider>
  );
}

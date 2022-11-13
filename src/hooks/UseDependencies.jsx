import { useContext } from "react";
import { Dependencies } from "../dependencies/Dependencies.jsx";

export function useDependencies() {
  const dependencies = useContext(Dependencies);

  if (!dependencies) {
    throw new Error("useDependencies must be used inside Dependencies context");
  }

  return dependencies;
}

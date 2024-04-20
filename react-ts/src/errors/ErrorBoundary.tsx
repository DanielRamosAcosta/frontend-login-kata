import React, { Component, useContext } from "react";
import { DependenciesContext } from "../injection/DependenciesContext.ts";
import { Container } from "inversify";

function debounce(fn: (error: Error) => void, delay: number) {
  let timeout: any;

  return function (error: Error) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(error);
    }, delay);
  };
}

export class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  container: Container;
}> {
  state = { error: null as Error | null };

  showError = debounce((error) => {
    alert(error);
    console.log(error);
    console.log("PROPS2", this.props);
  }, 100);

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  render() {
    console.log("CONTEXT", this.context);
    console.log("PROPS", this.props);

    if (this.state.error) {
      this.showError(this.state.error);
    }

    return this.props.children;
  }
}

export const wrapWithBoundary = (Component: () => JSX.Element) => () => {
  const container = useContext(DependenciesContext);

  return (
    <ErrorBoundary container={container}>
      <Component />
    </ErrorBoundary>
  );
};

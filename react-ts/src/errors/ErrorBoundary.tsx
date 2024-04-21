import { Component, useContext, ReactNode } from "react";
import { DependenciesContext } from "../injection/DependenciesContext.ts";
import { Container } from "inversify";
import { Token } from "../stuff/Token.ts";
import { ErrorHandler } from "../stuff/ErrorHandler.ts";

function debounce(fn: (error: Error) => void, delay: number) {
  let timeout: any;

  return function (error: Error) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(error);
    }, delay);
  };
}

export class ErrorBoundary extends Component<{
  children: ReactNode;
  container: Container;
}> {
  state = { error: null as Error | null };

  showError = debounce((error) => {
    const errorHandler = this.props.container.get<ErrorHandler>(
      Token.ERROR_HANDLER,
    );
    errorHandler.handle(error);
  }, 100);

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  render() {
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

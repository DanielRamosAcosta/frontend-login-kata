import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n.ts";
import "./reset.css";
import "./main.css";
import {
  createRoutesFromChildren,
  matchRoutes,
  RouterProvider,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { router } from "./navigation/routes.ts";
import { DependenciesProvider } from "./injection/DependenciesProvider.tsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  enabled: true,
  dsn: "https://7fb5bd26a8795154b1565b01bf5d6fd3@o4507120577740800.ingest.de.sentry.io/4507120579903568",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DependenciesProvider>
      <RouterProvider router={router} />
    </DependenciesProvider>
  </React.StrictMode>,
);

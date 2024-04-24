import React from "react";
import ReactDOM from "react-dom/client";
import { datadogRum } from "@datadog/browser-rum";
import "./reset.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./navigation/AppRoutes";

datadogRum.init({
  applicationId: "fc7d6517-e3b6-4dfa-823d-e8ffa5121a0b",
  clientToken: "pub2095afba33463bcc0f71d0f11a5d291a",
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: "datadoghq.eu",
  service: "loginkata",
  env: "staging-1",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);

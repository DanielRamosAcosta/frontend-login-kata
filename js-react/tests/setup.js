import { expect } from "vitest";
import fetch from "node-fetch";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
global.fetch = fetch;

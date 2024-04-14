import { createCookie, createMemorySessionStorage } from "@remix-run/node"; // or cloudflare/deno

const cookie = createCookie("__session", {
  secrets: ["r3m1xr0ck5"],
  sameSite: true,
});

export const { getSession, commitSession, destroySession } =
  createMemorySessionStorage({ cookie });

import { NextResponse } from "next/server";

export function middleware(req, ev) {
  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.ck.page *.convertkit.com;
    child-src *.youtube.com *.google.com *.ck.page *.covertkit.com *.convertki https://bulletproof-code.us.auth0.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
  `;

  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    ContentSecurityPolicy.replace(/\n/g, "")
  );
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "on");

  return response;
}

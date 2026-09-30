"use client";

import { useEffect } from "react";

type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGa4Event(name: "phone_call" | "form_submit", parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (window.gtag) window.gtag("event", name, parameters);
  else window.dataLayer.push(["event", name, parameters]);
}

export function Ga4Tracking() {
  useEffect(() => {
    function trackTelephoneClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackGa4Event("phone_call", {
        link_text: link.textContent?.replace(/\s+/g, " ").trim() || "Phone link",
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    }

    document.addEventListener("click", trackTelephoneClick);
    return () => document.removeEventListener("click", trackTelephoneClick);
  }, []);

  return null;
}

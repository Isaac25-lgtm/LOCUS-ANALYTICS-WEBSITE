const provider = import.meta.env.VITE_ANALYTICS_PROVIDER as string | undefined;
const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
const ga4Id = import.meta.env.VITE_GA4_ID as string | undefined;

let initialized = false;

export function initAnalytics() {
  if (initialized) return;
  initialized = true;

  if (provider === 'plausible' && plausibleDomain) {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = plausibleDomain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }

  if (provider === 'ga4' && ga4Id) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga4Id}');
    `;
    document.head.appendChild(inline);
  }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  if (provider === 'none' || !provider) return;

  if (provider === 'plausible') {
    const w = window as unknown as { plausible?: (name: string, opts?: { props: Record<string, string> }) => void };
    w.plausible?.(name, props ? { props } : undefined);
  }

  if (provider === 'ga4') {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.('event', name, props);
  }
}

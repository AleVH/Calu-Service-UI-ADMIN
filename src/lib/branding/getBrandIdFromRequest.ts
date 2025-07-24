import { IncomingMessage } from 'http';

export function getBrandIdFromRequest(req?: IncomingMessage): string {
    // ✅ Server-side logic
    if (req) {
        const host = req.headers.host || '';
        const subdomain = host.split('.')[0];

        const url = req.url || '';
        const match = url.match(/brand=([\w-]+)/);
        const query_brand = match?.[1];

        return query_brand || subdomain || 'default';
    }

    // ✅ Client-side logic
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const brand = params.get('brand');
        if (brand) return brand;

        const hostParts = window.location.hostname.split('.');
        if (hostParts.length > 2) return hostParts[0]; // e.g., acme.localhost
    }

    return 'default'; // ✅ Safe fallback
}
export function getBrandIdFromRequest(): string {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const brand = params.get('brand');
        if (brand) return brand;
        const hostParts = window.location.hostname.split('.');
        if (hostParts.length > 2) return hostParts[0]; // subdomain
    }
    return 'default'; // fallback
}

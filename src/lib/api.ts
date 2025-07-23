// lib/api.ts

/**
 * Makes a POST request to a relative API URL with JSON body.
 * Throws if response is not ok (non-2xx).
 */
export async function apiPost<T = any>(
    url: string,
    body: Record<string, unknown>
): Promise<T> {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API Error ${res.status}: ${errorText}`);
    }

    return res.json();
}

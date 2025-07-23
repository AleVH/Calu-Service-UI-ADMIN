export async function loadBrandingConfig(brandId: string) {
    try {
        const configModule = await import(`../../white-label/${brandId}/config`);
        return configModule.brandConfig;
    } catch (err: unknown) {
        console.warn(`No config found for brand "${brandId}", using fallback.`);

        if (err instanceof Error) {
            console.error(err.message);
        }

        const fallback = await import('../../white-label/default/config');
        return fallback.brandConfig;
    }
}

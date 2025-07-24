// white-label/acme/config.ts
export const brandConfig = {
    id: 'acme',
    name: 'Acme',
    colors: {
        primary: '#0d2894',
        secondary: '#edd9d9',
        accent: '#674191',
    },
    lang: 'en',
    logo: 'logo.svg',       // optional
    favicon: 'favicon.ico', // optional
    input: {
        borderRadius: '0.25rem', // optional: like Tailwind's rounded-md
        variant: 'outline',       // optional: for future input styling
    },
};

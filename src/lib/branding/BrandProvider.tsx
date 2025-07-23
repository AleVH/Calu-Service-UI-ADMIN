import React, { createContext, useState, useEffect } from 'react';
import { getBrandIdFromRequest } from './getBrandIdFromRequest';
import { loadBrandingConfig } from './loadBrandingConfig';
import { brandConfig as defaultConfig } from '../../white-label/default/config';

export const BrandContext = createContext(defaultConfig); // <-- not null

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
    const [brandConfig, setBrandConfig] = useState(defaultConfig); // <-- default right away

    useEffect(() => {
        const init = async () => {
            try {
                const brandId = getBrandIdFromRequest();
                const config = await loadBrandingConfig(brandId);
                setBrandConfig(config);
            } catch (err) {
                console.warn('Failed to load branding config, using default.');
            }
        };
        init();
    }, []);

    return (
        <BrandContext.Provider value={brandConfig}>
            {children}
        </BrandContext.Provider>
    );
};

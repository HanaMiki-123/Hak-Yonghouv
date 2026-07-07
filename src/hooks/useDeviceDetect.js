import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Detect mobile/tablet by user agent
            const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet|touch/i;
            const isTouchDevice = mobileRegex.test(userAgent.toLowerCase());

            // Also check screen width (tablets can be up to ~1024px)
            const isSmallScreen = window.innerWidth < 1024;

            // Check for touch capability
            const hasTouchScreen = (
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
            );

            setIsMobile(isTouchDevice || (isSmallScreen && hasTouchScreen));
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return { isMobile };
};

export default useDeviceDetect;

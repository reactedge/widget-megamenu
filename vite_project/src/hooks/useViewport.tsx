import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 1000;

export function useViewport() {
    const getIsMobile = () =>
        typeof window !== "undefined" &&
        window.innerWidth <= MOBILE_BREAKPOINT;

    const [isMobile, setIsMobile] = useState(getIsMobile);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        };

        // Run once after mount to sync
        onResize();

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return { isMobile };
}

"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

function SmoothScrolling({ children }: { children: any }) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafIdRef = useRef<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.1,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        }

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        };
    }, []);

    // Scroll to top when pathname changes
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, {
                immediate: true,
                force: true,
            });
        }
        // Fallback to native scroll if Lenis is not available
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
}

export default SmoothScrolling;

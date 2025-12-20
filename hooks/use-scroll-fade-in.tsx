import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollFadeIn = (containerRef: React.RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!containerRef.current) return; // safe guard for null

        const elements = containerRef.current.querySelectorAll(".scroll-entry");

        gsap.fromTo(elements, {
            y: 30,
            opacity: 0,
            filter: 'blur(5px)'
        }, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.3,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
            },
        });
    }, [containerRef]);
};

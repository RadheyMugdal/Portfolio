"use client";
import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

function SmoothScrolling({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Scroll to top when pathname changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    // Setup Intersection Observer for scroll animations
    useEffect(() => {
        // Animation classes to observe
        const animationClasses = [
            ".scroll-entry",
            ".scroll-entry-left",
            ".scroll-entry-right",
            ".scroll-entry-scale",
            ".scroll-entry-blur",
            ".scroll-entry-stagger"
        ];

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px 0px -80px 0px",
            threshold: 0.1
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    // Optional: stop observing after animation
                    // observerRef.current?.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const observeElements = () => {
            animationClasses.forEach((className) => {
                const elements = document.querySelectorAll(className);
                elements.forEach((element) => {
                    observerRef.current?.observe(element);
                });
            });
        };

        // Initial observation
        observeElements();

        // Re-observe after a short delay to catch dynamically loaded content
        const timeoutId = setTimeout(observeElements, 100);

        // Set up mutation observer for dynamic content
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => {
            clearTimeout(timeoutId);
            observerRef.current?.disconnect();
            mutationObserver.disconnect();
        };
    }, [pathname]); // Re-run on route changes

    return <>{children}</>;
}

export default SmoothScrolling;

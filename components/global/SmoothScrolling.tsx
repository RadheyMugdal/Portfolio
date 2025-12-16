"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: any }) {
    return (
        <ReactLenis root >
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
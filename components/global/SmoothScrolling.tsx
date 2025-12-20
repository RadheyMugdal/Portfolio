"use client";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "@/plugins";

function SmoothScrolling({ children }: { children: any }) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        ScrollSmoother.create({
            wrapper: document.getElementById("scroll-wrapper")!,
            content: document.getElementById("scroll-content")!,
            smooth: 1,
            smoothTouch: 0.1
        })
    })
    return (
        <div id='scroll-wrapper'>
            <div id='scroll-content'>
                {children}
            </div>
        </div>
    );
}

export default SmoothScrolling;
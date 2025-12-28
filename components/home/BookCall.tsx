"use client"
import { useRef } from 'react';
import { Button } from '../ui/button'
import { CalendarDays } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in';

const BookCall = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "quick-chat" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#171717" }, "dark": { "cal-brand": "#E5E5E5" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=' max-w-2xl mx-8 md:mx-auto rounded-2xl overflow-hidden  border' ref={containerRef}>
            <div className="min-h-[200px] w-full p-12  bg-background  relative text-foreground ">

                <div
                    className="absolute inset-0 z-0 pointer-events-none text-foreground/10"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 19px, currentColor 19px, currentColor 20px, transparent 20px, transparent 39px, currentColor 39px, currentColor 40px),
                            repeating-linear-gradient(90deg, transparent, transparent 19px, currentColor 19px, currentColor 20px, transparent 20px, transparent 39px, currentColor 39px, currentColor 40px),
                            radial-gradient(circle at 20px 20px, currentColor 2px, transparent 2px),
                            radial-gradient(circle at 40px 40px, currentColor 2px, transparent 2px)
                        `,
                        backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                    }}
                />

                <div className=' relative z-10 space-y-8 flex flex-col items-center scroll-entry'>
                    <h4 className=' italic font-semibold text-sm md:text-base text-center '> "You scrolled all the way down… might as well say hi."</h4>
                    <Button className='flex gap-2' data-cal-namespace="quick-chat"
                        data-cal-link="radhey-mugdal-jddeix/quick-chat"

                        data-cal-config='{"layout":"month_view","theme":"auto"}'>
                        <CalendarDays />
                        Book a quick call
                    </Button>
                </div>
            </div>



        </div >
    )
}

export default BookCall
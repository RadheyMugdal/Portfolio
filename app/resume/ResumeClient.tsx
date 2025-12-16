'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import {
    ChevronLeft,
    ChevronRight,
    Download,
    ExternalLink,
    Loader2,
    ZoomIn,
    ZoomOut,
} from 'lucide-react'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function ResumeClient() {
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState(1)
    const [scale, setScale] = useState(1.1)

    return (
        <div className="max-w-4xl mx-auto  space-y-2 py-2">

            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3  p-3 bg-muted/50">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
                        disabled={pageNumber <= 1}
                        className="btn"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <span className="text-sm opacity-70">
                        Page {pageNumber} / {numPages}
                    </span>

                    <button
                        onClick={() => setPageNumber(p => Math.min(p + 1, numPages!))}
                        disabled={pageNumber >= (numPages ?? 1)}
                        className="btn"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <ButtonGroup>

                        <Button variant={"outline"} size={"icon-sm"} onClick={() => setScale(s => Math.max(s - 0.1, 0.6))} className="btn">
                            <ZoomOut size={18} />
                        </Button>

                        <Button variant={"outline"} size={"icon-sm"} onClick={() => setScale(s => Math.min(s + 0.1, 2))} className="btn">
                            <ZoomIn size={18} />
                        </Button>
                    </ButtonGroup>
                    <a
                        href="/ResumeRadheyMugdal.pdf"
                        download
                        className="btn"
                    >
                        <Button size={"sm"}>
                            <Download size={16} />
                            Download
                        </Button>
                    </a>
                    <a
                        href="/ResumeRadheyMugdal.pdf"

                        target="_blank"
                        className="btn"
                    >
                        <Button variant={"secondary"} size={"icon-sm"}>

                            <ExternalLink size={18} />
                        </Button>
                    </a>

                </div>
            </div>

            {/* PDF */}
            <div className="flex justify-center overflow-auto  min-h-[80vh] p-4">
                <Document
                    file="/ResumeRadheyMugdal.pdf"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={(
                        <div className=' w-full  h-[80vh] flex items-center flex-col gap-1 justify-center'>
                            <Loader2 className=' animate-spin ' />
                            <span className=' text-foreground/75'>
                                Loading resume..
                            </span>
                        </div>
                    )}
                >
                    <Page pageNumber={pageNumber} scale={scale} />
                </Document>
            </div>
        </div>
    )
}

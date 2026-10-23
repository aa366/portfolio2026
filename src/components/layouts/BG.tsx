"use client"
import validateTheme from '@/lib/validateTheme'
import { useThemeStore } from '@/store/mytheme';
import React, { Ref, useEffect, useRef, useState } from 'react'

export default function BG() {

    const VideoRef = useRef<HTMLVideoElement>(null)
    const [current, setCurrent] = useState("system")
    const { themeColor, brightness, systemTheme } = useThemeStore()
    const isLight = (brightness == "light" || (brightness === "system" && systemTheme === "light"));


    useEffect(() => {
        const handleStorage = () => {
            setCurrent(validateTheme())

        }
        handleStorage()
        if (VideoRef.current) {
            VideoRef.current.playbackRate = 1
        }



    }, [])

    return (
        <div>
            <div className={`fixed inset-0 -z-49 w-full h-full object-cover ${isLight ? "bg-black/5" : "bg-black/10"}  '`} />
            <div className='fixed inset-0 -z-49 w-full h-full object-cover backdrop-blur-lg ' />
            <video
                autoPlay
                muted
                ref={VideoRef}
                loop
                playsInline
                preload="none"
                poster="/bg-video-poster.jpg"
                className={`fixed inset-0 -z-50 w-full h-full object-cover  ${isLight && "invert"} `}
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

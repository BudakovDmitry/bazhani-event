'use client'

import {useEffect} from 'react';
import {animate, motion, useMotionValue, useTransform} from "framer-motion"
import Image from "next/image";
import MainPhoto from "@/public/main_photo.png";

const MainSection = () => {
    const count1 = useMotionValue(0)
    const rounded1 = useTransform(count1, latest => Math.round(latest))
    const count2 = useMotionValue(0)
    const rounded2 = useTransform(count2, latest => Math.round(latest))


    useEffect(() => {
        const controls1 = animate(count1, 2, {duration: 1})
        const controls2 = animate(count2, 3, {duration: 2, delay: 1})

        return () => {
            controls1.stop
            controls2.stop
        }
    }, [])
    return (
        <section className="main_section">
            <div className="main_section__container container">
                <div className="main_section__date">
                    <div className="main_section__date_container">
                    <div className="main_section__date_day">0
                        <motion.span>{rounded1}</motion.span>
                        |
                    </div>
                    <div className="main_section__date_month">0
                        <motion.span>{rounded2}</motion.span>
                    </div>
                    </div>
                    <p className="main_section__date_subtitle">Дніпро</p>
                    <p className="main_section__date_subtitle_second">13:00 - 17:00</p>
                </div>
                <Image src={MainPhoto} alt="Main photo" className='main_section__photo' priority={true} unoptimized/>
                <div className="main_section__title_container">
                    <h1 className="main_section__title">Bazhani</h1>
                    <p className='main_section__subtitle'>Event</p>
                </div>
            </div>
        </section>
    )
}

export default MainSection;
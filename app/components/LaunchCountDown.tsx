'use client'

import React, {useEffect, useMemo, useState} from "react";
import Countdown from "./CountDown/CountDown";

const LaunchCountdown = ({days, hours, minutes, seconds}: any) => {
    const [time, setTime] = useState(days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds);

    const remainTime = useMemo(() => {
        const days = Math.floor(time / 24 / 3600);
        const hours = Math.floor((time - days * 24 * 3600) / 3600);
        const minutes = Math.floor((time - days * 24 * 3600 - hours * 3600) / 60);
        const seconds = (time - days * 24 * 3600 - hours * 3600) % 60;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }, [time]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((time: any) => time !== 0 ? time - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Countdown prev={0} count={remainTime.days} label={'Днів'}/>
            <Countdown prev={0} count={remainTime.hours} label={'Годин'}/>
            <Countdown prev={0} count={remainTime.minutes} label={'Хвилин'}/>
        </>
    );
};

export default LaunchCountdown;
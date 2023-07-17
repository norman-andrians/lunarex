import React, { useState, useEffect } from "react";

export default function TimeClock() {
    const [time, setTime] = useState("12:00");
    const [date, setDate] = useState("");

    const getTime = () => {
        const date = new Date();
    
        let h = date.getHours();
        let m = date.getMinutes();
    
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
    
        return `${h}:${m}`;
    }
    
    const getDate = () => {
        const date = new Date();
    
        return date.toDateString();
    }

    useEffect(() => {
        const runningClock = setInterval(() => {
            setTime(getTime());
            setDate(getDate());
        }, 100);

        return () => {
            clearInterval(runningClock);
        }
    })

    return (
        <header className="
            text-white
            text-center
            z-10
        ">
            <h1 className="font-open-sans font-bold text-5xl">{time}</h1>
            <p className="font-roboto mt-2">{date}</p>
        </header>
    );
}
import React from "react";

export default function TimeClock() {
    return (
        <header className="
            text-white
            text-center
            z-10
        ">
            <h1 className="font-open-sans font-bold text-5xl" id="time-clock">12:00</h1>
            <p className="font-roboto" id="time-date"></p>
        </header>
    );
}
import React from "react";

export default function TimeClock() {
    return (
        <header className="text-white text-center">
            <h1 className="font-open-sans font-bold text-3xl" id="time-clock">12:00</h1>
            <p className="font-roboto" id="time-date"></p>
        </header>
    );
}
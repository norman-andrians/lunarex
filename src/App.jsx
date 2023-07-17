import React from "react";
import Background from "./assets/components/background";
import MainWidget from "./assets/components/widget";
import "./assets/css/output.css";
import "./assets/sass/main.scss";

export default function App() {
    return (
        <main
            className="
                relative
                w-screen
                h-screen
                overflow-hidden
                after:content-['']
                after:absolute
                after:top-0
                after:left-0
                after:w-full
                after:h-full
                after:backdrop-blur-xl
        ">
            <Background />
            <MainWidget />
        </main>
    )
}
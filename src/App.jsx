import React from "react";
import Background from "./assets/components/background";
import PanelBackground from "./assets/components/panel";
import "./assets/css/output.css";
import "./assets/sass/main.scss";

export default function App() {
    return (
        <main id="main">
            <Background />
            <PanelBackground />
        </main>
    )
}
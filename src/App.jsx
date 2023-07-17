import React from "react";
import Background from "./assets/components/background";
import MainWidget from "./assets/components/widget";
import "./assets/css/output.css";
import "./assets/sass/main.scss";

import WImage from "./assets/wallpaper-images/128387.png";

export default function App() {
    const wallpaperimg = WImage;

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
                after:bg-black
                after:bg-opacity-40
        ">
            <Background
                scale={1.4}
                image={wallpaperimg}
                />
            <MainWidget
                image={wallpaperimg}
            />
        </main>
    )
}
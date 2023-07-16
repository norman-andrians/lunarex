import React from "react";
import Background from "./assets/components/background";
import "./assets/css/output.css";
import "./assets/sass/main.scss";
import ImageIcon from "./assets/icons/image.svg";
import GameIcon from "./assets/icons/gamepad.svg";
import CodeIcon from "./assets/icons/code.svg";
import GearIcon from "./assets/icons/gear.svg";

export default function App() {
    return (
        <main id="main">
            <Background />
            <div>
                <header className="text-white text-center">
                    <h1 className="font-open-sans font-bold text-3xl" id="time-clock">12:00</h1>
                    <p className="font-roboto" id="time-date"></p>
                </header>
                <div className="head-wallpaper bg-img centered">
                    <div className="side-options font-open-sans text-white">
                        <button className="side-item" data-target="wg-wallpapers">
                            <div className="side-col">
                                <img src={ ImageIcon } alt="wallpaperimage" />
                                <div>Wallpapers</div>
                            </div>
                        </button>
                        <button className="side-item" data-target="wg-games">
                            <div className="side-col">
                                <img src={ GameIcon } alt="games" />
                                <div>Games</div>
                            </div>
                        </button>
                        <button className="side-item" data-target="wg-dev">
                            <div className="side-col">
                                <img src={ CodeIcon } alt="dev tools" />
                                <div>Dev tools</div>
                            </div>
                        </button>
                        <button className="side-item" data-target="win-settings">
                            <div className="side-col">
                                <img src={ GearIcon } alt="settings" />
                                <div>Settings</div>
                            </div>
                        </button>
                    </div>
                </div>
                <header className="text-bottom text-white text-center">
                    <h1 className="font-montserrat font-normal text-5xl">LUNAREX</h1>
                    <p className="font-open-sans">web-based wallpaper engine</p>
                </header>
            </div>
        </main>
    )
}
import React from "react"
import SideItem from "./button/sideitem";
import { ReactComponent as ImageIcon } from "../icons/image.svg";
import { ReactComponent as GameIcon } from "../icons/gamepad.svg";
import { ReactComponent as CodeIcon } from "../icons/code.svg";
import { ReactComponent as GearIcon } from "../icons/gear.svg";

function BackgroundPanel() {
    return (
        <div className="
            head-wallpaper
            bg-img
            z-10
            mx-auto
            relative
        ">
            <div className="
                font-open-sans
                text-white
                side-options
            ">
                <SideItem
                    name="Wallpaper"
                    icon={ <ImageIcon /> }
                    target=""
                />
                <SideItem
                    name="Games"
                    icon={ <GameIcon /> }
                    target=""
                />
                <SideItem
                    name="Dev Tools"
                    icon={ <CodeIcon /> }
                    target=""
                />
                <SideItem
                    name="Settings"
                    icon={ <GearIcon /> }
                    target=""
                />
            </div>
        </div>
    )
}

export default BackgroundPanel;
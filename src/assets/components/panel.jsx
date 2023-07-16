import React from "react";
import TimeClock from "./timeclock";
import FootHeader from "./foot";
import SideItem from "./button/sideitem";
import ImageIcon from "../icons/image.svg";
import GameIcon from "../icons/gamepad.svg";
import CodeIcon from "../icons/code.svg";
import GearIcon from "../icons/gear.svg";

function PanelBackground() {
    return (
        <div className="flex flex-col">
            <TimeClock />
            <div className="head-wallpaper bg-img centered">
                <div className="side-options font-open-sans text-white">
                    <SideItem
                        name="Wallpaper"
                        icon={ ImageIcon }
                        target=""
                    />
                    <SideItem
                        name="Games"
                        icon={ GameIcon }
                        target=""
                    />
                    <SideItem
                        name="Dev Tools"
                        icon={ CodeIcon }
                        target=""
                    />
                    <SideItem
                        name="Settings"
                        icon={ GearIcon }
                        target=""
                    />
                </div>
            </div>
            <FootHeader />
        </div>
    )
}

export default PanelBackground;
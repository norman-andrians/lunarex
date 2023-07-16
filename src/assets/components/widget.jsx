import React from "react";
import TimeClock from "./timeclock";
import FootHeader from "./foot";
import BackgroundPanel from "./panel";

function MainWidget() {
    return (
        <div className="flex flex-col">
            <TimeClock />
            <BackgroundPanel />
            <FootHeader />
        </div>
    )
}

export default MainWidget;
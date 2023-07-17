import React from "react";
import TimeClock from "./timeclock";
import FootHeader from "./foot";
import BackgroundPanel from "./panel";

function MainWidget(props) {
    return (
        <div className="
            absolute
            inset-0
            m-auto
            flex
            flex-col
            justify-center
            gap-10
        ">
            <TimeClock />
            <BackgroundPanel image={props.image} />
            <FootHeader />
        </div>
    )
}

export default MainWidget;
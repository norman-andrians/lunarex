import React from "react";

export default function SideItem(props) {
    const name = props.name;
    const icon = props.icon;
    const target = props.target;

    return (
        <button className="
            side-item
            border
            dark:bg-slate-800
            dark:text-white
            dark:border-slate-600
        ">
            <div className="side-col">
                <img
                    className="me-4"
                    src={ icon }
                    alt={ name.toLowerCase() }
                />
                <div>{ name }</div>
            </div>
        </button>
    );
}
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
            dark:text-slate-400
            dark:border-slate-600
        ">
            <div className="side-col">
                <div className="me-4">{ props.icon }</div>
                <div>{ name }</div>
            </div>
        </button>
    );
}
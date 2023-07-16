import React from "react";

export default function SideItem(props) {
    const name = props.name;
    const icon = props.icon;
    const target = props.target;

    return (
        <button className="side-item">
            <div className="side-col">
                <img src={ icon } alt={ name.toLowerCase() } />
                <div>{ name }</div>
            </div>
        </button>
    );
}
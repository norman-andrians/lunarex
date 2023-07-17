import React, { useState, useEffect } from "react";

function Background(props) {
    const scale = props.scale ? props.scale : 1;
    const [position, setPos] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMouseMove = (e) => {
            const decrease = 20;
    
            const x = ((window.innerWidth / 2) - e.pageX) / decrease;
            const y = ((window.innerHeight / 2) - e.pageY) / decrease;

            setPos({x: x, y: y});
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    })

    return (
        <div className="
            bg-img
            w-full
            h-full
            "
            style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                backgroundImage: `url(${props.image})`
            }}
        ></div>
    );
}

export default Background;
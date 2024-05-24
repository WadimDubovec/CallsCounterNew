import React, { useEffect, useState } from "react";
import "./FallingCat.css";

// Импорт всех .svg файлов из папки assets/svgs
const importAll = (r) => r.keys().map(r);
const svgs = importAll(require.context('../../img/SVG', false, /\.svg$/));

function FallingCat({ id }) {
    const [top, setTop] = useState(-100);
    const [left, setLeft] = useState(Math.random() * window.innerWidth);
    const [randomSvg] = useState(getRandomSvg());
    const [shouldBeRemoved, setShouldBeRemoved] = useState(false);
    const [fallingInterval, setFallingInterval] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTop(prevTop => prevTop + 1);
        }, 10);

        const removeTimer = setTimeout(() => {
            setShouldBeRemoved(true);
            console.log("Пропал");
        }, 13000);

        setFallingInterval(interval);

        return () => {
            clearInterval(interval);
            clearTimeout(removeTimer);
        };
    }, []);

    function getRandomSvg() {
        const randomIndex = Math.floor(Math.random() * svgs.length);
        return svgs[randomIndex];
    }

    if (shouldBeRemoved) {
        return null;
    }

    return (
        <div className="FallingCat" style={{ top, left }}>
            <img src={randomSvg} alt="Falling Cat" />
        </div>
    );
}

export default FallingCat;

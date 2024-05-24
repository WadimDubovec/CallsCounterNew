import React, { useEffect, useState } from "react";
import "./FallingCat.css";

// Импорт всех .svg файлов из папки src/img/SVG
const importAll = (r) => r.keys().map(r);
const svgs = importAll(require.context('../../img/SVG', false, /\.svg$/));

function FallingCat({ id }) {
    const [top, setTop] = useState(-100);
    const [left] = useState(Math.random() * window.innerWidth); // `setLeft` удален, так как не используется
    const [randomSvg] = useState(getRandomSvg());
    const [shouldBeRemoved, setShouldBeRemoved] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTop(prevTop => prevTop + 1);
        }, 10);

        const removeTimer = setTimeout(() => {
            setShouldBeRemoved(true);
        }, 13000);

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

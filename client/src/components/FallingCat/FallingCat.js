import React, { useEffect, useState } from "react";
import "./FallingCat.css";
import {logDOM} from "@testing-library/react";

function FallingCat({ id }) {
    const [top, setTop] = useState(-100);
    const [left, setLeft] = useState(Math.random() * window.innerWidth);
    const [emoji] = useState(getRandomEmoji());
    const [shouldBeRemoved, setShouldBeRemoved] = useState(false); // Состояние для отслеживания необходимости удаления смайлика
    const [fallingInterval, setFallingInterval] = useState(null); // Объявляем переменную fallingInterval


    useEffect(() => {
        const interval = setInterval(() => {
            setTop(prevTop => prevTop + 1); // Уменьшаем шаг движения котика вниз
        }, 10); // Уменьшаем интервал для более плавного движения

        // Устанавливаем таймер для удаления смайлика через 13 секунд
        const removeTimer = setTimeout(() => {
            setShouldBeRemoved(true);
            console.log("Пропал")
        }, 10000);

        setFallingInterval(interval); // Сохраняем интервал в переменной

        return () => {
            clearInterval(interval);
            clearTimeout(removeTimer); // Очищаем таймер при размонтировании компонента
        };
    }, []);
    // useEffect(() => {
    //     // Если shouldBeRemoved становится true, удаляем смайлик
    //     if (shouldBeRemoved) {
    //         clearInterval(fallingInterval);
    //     }
    // }, [shouldBeRemoved, fallingInterval]);

    function getRandomEmoji() {
        let emojis = ["🐱", "😺", "😸", "😼", "😽", "🙀", "😿", "😾","🐈", "🐈‍⬛", "😍","🥰","😘", "💋","😻","🩷","❤️","🧡","💛","💜","💙","🤍","🤎","🩶","🩵","💚","🖤", "❤️‍","❣️","💗","💓","💝","💘","💞","💕","💖"];
        const randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
    }

    if (shouldBeRemoved) {
        return null; // Возвращаем null, чтобы смайлик не отображался
    }

    return (
        <div className="FallingCat" style={{ top, left }}>
            {emoji}
        </div>
    );
}

export default FallingCat;

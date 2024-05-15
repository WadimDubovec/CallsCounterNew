import React from 'react';
import MyButton from "../Button/MyButton";

function Content({numberOfCalls, numberOfEscalations, setNumberOfCalls, setNumberOfEscalation, setRandomCountEmojis}) {
    return (
        <div className = "content" >
            <h2 className = "countCalls" >Количество звонков</h2 >
            <h1 >{numberOfCalls}</h1 >
            <div className = "column" >
                    <MyButton
                        onClick = {() => setNumberOfCalls(prevCount => prevCount - 1)}
                        className = "btn-minus"
                        disabled = {numberOfCalls === 0}
                    >
                        -Минус
                    </MyButton >
                    <MyButton
                        onClick = {() => {
                            setNumberOfCalls(prevCount => prevCount + 1)
                            setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 5) + 5);
                        }}
                        className = "btn-plus"
                    >
                        Плюс +
                    </MyButton >
                </div >
            <div className = "column" >
                <MyButton
                    onClick = {() => {setNumberOfEscalation(prevCount => prevCount - 1)}}
                    className = "btn-escalation"
                    disabled={numberOfEscalations === 0}
                >
                    -Эскалация
                </MyButton >
                <MyButton onClick = {
                    () => {
                        setNumberOfEscalation(prevCount => prevCount + 1)
                    }}
                          className = "btn-escalation" >
                    Эскалация+
                </MyButton >
            </div >
            <div className = "column" >
                <MyButton
                    onClick = {
                        () => {
                            setNumberOfEscalation(0)
                            setNumberOfCalls(0)
                            setRandomCountEmojis(0)
                        }}
                    className = "btn-zero" >
                    Сбросить
                </MyButton >
            </div >
        </div >
    );
}

export default Content;

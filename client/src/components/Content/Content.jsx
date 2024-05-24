import React from 'react';
import MyButton from "../Button/MyButton";

function Content({numberOfCalls,
                     numberOfEscalations,
                     setNumberOfCalls,
                     setNumberOfEscalation,
                     setRandomCountEmojis,
                     setDaySalary})
{
    return (
        <div className="content">
            <h2 className="countCalls">Количество звонков</h2>
            <h1>{numberOfCalls}</h1>

            <div className="column">
                <MyButton onClick={() => {
                            setNumberOfCalls(prevCount => Math.max(prevCount - 1, 0))
                            setDaySalary(prevCount => Math.max(prevCount - 0.58, 0))
                    }}
                    className="btn-minus"
                    disabled={numberOfCalls === 0}
                >
                    -Минус
                </MyButton>
                <MyButton
                    onClick={() => {
                        setNumberOfCalls(prevCount => prevCount + 1);
                        setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 3) + 2);
                        setDaySalary(prevCount => Math.max(prevCount + 0.58, 0))
                    }}
                    className="btn-plus"
                >
                    Плюс +
                </MyButton>
            </div>
            <div className="column">
                <MyButton
                    onClick={() => {
                        setNumberOfEscalation(prevCount => prevCount - 1)
                        setDaySalary(prevCount => prevCount - 0.20)
                    }}
                    className="btn-escalation"
                    disabled={numberOfEscalations === 0}
                >
                    -Эскалация
                </MyButton>
                <MyButton
                    onClick={() => {
                        setNumberOfCalls(prevCount => prevCount + 1);
                        setNumberOfEscalation(prevCount => prevCount + 1);
                        setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 3) + 2);
                        setDaySalary(prevCount => prevCount + 0.20)
                    }}
                    className="btn-escalation"
                >
                    Эскалация+
                </MyButton>
            </div>
            <div className="column">
                <MyButton
                    onClick={() => {
                        setNumberOfEscalation(0);
                        setNumberOfCalls(0);
                        setRandomCountEmojis(0);
                        setDaySalary(0)
                    }}
                    className="btn-zero"
                >
                    Сбросить
                </MyButton>
            </div>
        </div>
    );
}

export default Content;

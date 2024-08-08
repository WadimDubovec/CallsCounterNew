import React from 'react';
import MyButton from "../Button/MyButton";

function Content({
                     numberOfCalls,
                     numberOfEscalations,
                     numberOfCallsGas,
                     numberOfCallsGasEscalations,
                     setNumberOfCalls,
                     setNumberOfEscalation,
                     setNumberOfCallsGas,
                     setNumberOfCallsGasEscalations,
                     setRandomCountEmojis,
                     setDaySalary})
{
    return (
        <div className = "content" >
            <h2 className = "countCalls" >Количество звонков</h2 >
            <h1 >{numberOfCalls}</h1 >


            {/*minus and plus*/}
            <div className = "column" >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => Math.max(prevCount - 1, 0))
                        setDaySalary(prevCount => Math.max(prevCount - 0.58, 0))
                        if (numberOfCallsGasEscalations === 1 && numberOfCalls === 1)  {
                            setNumberOfCallsGasEscalations(prevCount => Math.max(prevCount-1, 0))
                        }
                    }}

                    className = "btn-minus"
                    disabled = {numberOfCalls === 0}
                >
                    -Минус
                </MyButton >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => prevCount + 1);
                        setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 3) + 2);
                        setDaySalary(prevCount => Math.max(prevCount + 0.58, 0))
                    }}
                    className = "btn-plus"
                >
                    Плюс +
                </MyButton >
            </div >

            {/*escalation*/}
            <div className = "column" >
                <MyButton
                    onClick = {() => {
                        setNumberOfEscalation(prevCount => prevCount - 1)
                        setDaySalary(prevCount => prevCount - 0.20)
                    }}
                    className = "btn-escalation"
                    disabled = {numberOfEscalations === 0}
                >
                    -Эскалация
                </MyButton >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => prevCount + 1);
                        setNumberOfEscalation(prevCount => prevCount + 1);
                        setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 3) + 2);
                        setDaySalary(prevCount => prevCount + 0.20)
                    }}
                    className = "btn-escalation"
                >
                    Эскалация+
                </MyButton >
            </div >

            
            <div className = "column" >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => prevCount - 1);
                        setNumberOfCallsGas(prevCount => prevCount - 1)
                        setDaySalary(prevCount => Math.max(prevCount - 0.85, 0))

                    }}
                    className = "btn-gas"
                    disabled = {numberOfCallsGas === 0}
                >
                    Заправки-
                </MyButton >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => prevCount + 1);
                        setNumberOfCallsGas(prevCount => prevCount + 1);
                        setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 3) + 2);
                        setDaySalary(prevCount => Math.max(prevCount + 0.85, 0))
                    }}
                    className = "btn-gas"
                >
                    Заправки+
                </MyButton >

            </div >

            {/*gas escalations*/}
            <div className = "column" >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => Math.max(prevCount-1, 0));
                        setNumberOfCallsGasEscalations(prevCount => Math.max(prevCount - 1, 0));
                        setDaySalary(prevCount => Math.max(prevCount - 0.26, 0));
                    }}
                    className = "btn-gas-escalation"
                    disabled = {numberOfCallsGasEscalations === 0}
                >
                    Эскалация gas-
                </MyButton >
                <MyButton
                    onClick = {() => {
                        setNumberOfCalls(prevCount => Math.max(prevCount + 1, 0));
                        // setNumberOfCallsGas(prevCount => Math.max(prevCount + 1, 0));
                        setNumberOfCallsGasEscalations(prevCount => Math.max(prevCount + 1, 0));
                        setRandomCountEmojis(prevCount => prevCount + Math.floor(Math.random() * 3) + 2);
                        setDaySalary(prevCount => Math.max(prevCount + 0.26, 0));
                    }}
                    className = "btn-gas-escalation"
                >
                    Эскалация gas+
                </MyButton >
            </div >


            {/*zero*/}
            <div className = "column" >
                <MyButton
                    onClick = {() => {
                        setNumberOfEscalation(0);
                        setNumberOfCalls(0);
                        setNumberOfCallsGas(0);
                        setNumberOfCallsGasEscalations(0)
                        setRandomCountEmojis(0);
                        setDaySalary(0)
                    }}
                    className = "btn-zero"
                >
                    Сбросить
                </MyButton >
            </div >
        </div >
    );
}

export default Content;

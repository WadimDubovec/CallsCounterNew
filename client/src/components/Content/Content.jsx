import React from 'react';
import MyButton from "../Button/MyButton";

function Content({
                     numberOfCalls,
                     numberOfTaxiDriversCalls,
                     numberOfEscalations,
                     numberOfCallsGas,
                     numberOfCallsGasEscalations,
                     setNumberOfCalls,
                     setNumberOfTaxiDriversCalls,
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
                        setNumberOfTaxiDriversCalls(prevCount => Math.max(prevCount - 1, 0))
                        setNumberOfCalls(prevCount => Math.max(prevCount - 1, 0))
                        setDaySalary(prevCount => Math.max(prevCount - 0.58, 0))

                        if (numberOfTaxiDriversCalls === 0 && numberOfEscalations !== 0) {
                            setNumberOfEscalation(prevCount => Math.max(prevCount - 1, 0))
                        } else if (numberOfTaxiDriversCalls === 0 && numberOfCallsGasEscalations !== 0) {
                            setNumberOfCallsGasEscalations(prevCount => Math.max(prevCount - 1, 0))
                        }
                    }}

                    className = "btn-minus"
                    disabled = {numberOfTaxiDriversCalls === 0 && numberOfEscalations === 0 && numberOfCallsGasEscalations === 0}
                >
                    -Минус
                </MyButton >
                <MyButton
                    onClick = {() => {
                        setNumberOfTaxiDriversCalls(prevCount => Math.max(prevCount + 1, 0))
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
                        setNumberOfCalls(prevCount => Math.max(prevCount-1, 0))
                        setNumberOfEscalation(prevCount => Math.max(prevCount-1, 0))
                        setDaySalary(prevCount => prevCount - 0.20)
                        if(numberOfEscalations === 1 && numberOfCalls === 1) {
                            setNumberOfCalls(prevCount => Math.max(prevCount-1, 0))
                        }
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
                        setNumberOfTaxiDriversCalls(0)
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

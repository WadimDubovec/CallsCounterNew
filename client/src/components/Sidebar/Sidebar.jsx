import React from 'react';
import "./Sidebar.css"

function Sidebar({ numberOfEscalations, numberOfEscalationsGas, percentageEscalations, daySalary }) {


    return (
        <div className = "sidebar" >
            <div >
                <h3 >Количество эскалаций</h3 >
                <p >{numberOfEscalations}</p >
            </div >

            <div >
                <h3 >Количество эскалаций gas</h3 >
                <p >{numberOfEscalationsGas}</p >
            </div >

            <div >
                <h3 >Процент всех эскалаций от общего количества звонков</h3 >
                <p >{percentageEscalations.toFixed(2)}%</p >
            </div >

            <div >
                <h3 >ЗП:</h3 >
                <p >{daySalary.toFixed(2)}</p >
            </div >
        </div >
    );
}

export default Sidebar;

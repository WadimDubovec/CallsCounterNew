import React from 'react';
import "./Sidebar.css"

function Sidebar({ numberOfEscalations, percentageEscalations }) {
    return (
        <div className="sidebar">
            <h3>Количество эскалаций</h3>
            <p>{numberOfEscalations}</p>
            <h3>Процент эскалаций от общего количества звонков</h3>
            <p>{percentageEscalations.toFixed(2)}%</p>
        </div>
    );
}

export default Sidebar;

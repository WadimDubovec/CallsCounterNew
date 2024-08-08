import './App.css';
import { useState, useEffect } from "react";
import FallingCat from "./components/FallingCat/FallingCat";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
    const [numberOfCalls, setNumberOfCalls] = useState(() => {
        try {
            const savedCalls = localStorage.getItem('numberOfCalls');
            console.log('Loaded numberOfCalls from localStorage:', savedCalls);
            return savedCalls !== null ? JSON.parse(savedCalls) : 0;
        } catch (error) {
            console.error('Error loading numberOfCalls from localStorage:', error);
            return 0;
        }
    });
    
    const [numberOfEscalations, setNumberOfEscalation] = useState(() => {
        try {
            const savedEscalations = localStorage.getItem('numberOfEscalations');
            console.log('Loaded numberOfEscalations from localStorage:', savedEscalations);
            return savedEscalations !== null ? JSON.parse(savedEscalations) : 0;
        } catch (error) {
            console.error('Error loading numberOfEscalations from localStorage:', error);
            return 0;
        }
    });
    
    const [numberOfCallsGas, setNumberOfCallsGas] = useState(() => {
        try {
            const savedCallsGas = localStorage.getItem('numberOfCallsGas');
            console.log('Loaded numberOfCallsGas from localStorage:', savedCallsGas);
            return savedCallsGas !== null ? JSON.parse(savedCallsGas) : 0;
        } catch (error) {
            console.error('Error loading numberOfCallsGas from localStorage:', error);
            return 0;
        }
    })

    const [numberOfCallsGasEscalations, setNumberOfCallsGasEscalations] = useState(() => {
        try {
            const savedGasEscalations = localStorage.getItem('numberOfCallsGasEscalations');
            console.log('Loaded numberOfCallsGasEscalations from localStorage:', savedGasEscalations);
            return savedGasEscalations !== null ? JSON.parse(savedGasEscalations) : 0;
        } catch (error) {
            console.error('Error loading numberOfCallsGasEscalations from localStorage:', error);
            return 0;
        }
    })
    const [randomCountEmojis, setRandomCountEmojis] = useState(0);
    const [daySalary, setDaySalary] = useState(() => {
        try {
            const savedDaySalary = localStorage.getItem('daySalary');
            console.log('Loaded daySalary from localStorage:', savedDaySalary);
            return savedDaySalary !== null ? JSON.parse(savedDaySalary) : 0;
        } catch (error) {
            console.error('Error loading daySalary from localStorage:', error);
            return 0;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('numberOfCalls', JSON.stringify(numberOfCalls));
            localStorage.setItem('numberOfEscalations', JSON.stringify(numberOfEscalations));
            localStorage.setItem('numberOfCallsGas', JSON.stringify(numberOfCallsGas))
            localStorage.setItem('numberOfCallsGasEscalations', JSON.stringify(numberOfCallsGasEscalations))
            localStorage.setItem('daySalary', JSON.stringify(daySalary));
            console.log('Saved numberOfCalls, numberOfEscalations and daySalary to localStorage:', {
                numberOfCalls,
                numberOfEscalations,
                numberOfCallsGas,
                numberOfCallsGasEscalations,
                daySalary
            });
        } catch (error) {
            console.error('Error saving numberOfCalls, numberOfEscalations, numberOfCallsGas, numberOfCallsGasEscalations or daySalary to localStorage:', error);
        }
    }, [numberOfCalls, numberOfEscalations, numberOfCallsGas, numberOfCallsGasEscalations, daySalary]);
    const percentageEscalations = numberOfCalls !== 0 ? (numberOfEscalations / numberOfCalls) * 100 : 0;

    return (
        <div className="App">
            <Content
                numberOfCalls={numberOfCalls}
                setNumberOfCalls={setNumberOfCalls}

                numberOfEscalations={numberOfEscalations}
                setNumberOfEscalation={setNumberOfEscalation}

                numberOfCallsGas={numberOfCallsGas}
                setNumberOfCallsGas={setNumberOfCallsGas}

                numberOfCallsGasEscalations={numberOfCallsGasEscalations}
                setNumberOfCallsGasEscalations={setNumberOfCallsGasEscalations}
                
                setRandomCountEmojis={setRandomCountEmojis}
                setDaySalary = {setDaySalary}
            />
            <Sidebar
                numberOfEscalations={numberOfEscalations}
                numberOfEscalationsGas={numberOfCallsGasEscalations}
                percentageEscalations={percentageEscalations}
                numberOfCalls={numberOfCalls}
                daySalary={daySalary}
            />

            {[...Array(randomCountEmojis)].map((_, index) => (
                <FallingCat key={index} id={index} />
            ))}
        </div>
    );
}

export default App;

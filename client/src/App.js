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
            localStorage.setItem('daySalary', JSON.stringify(daySalary));
            console.log('Saved numberOfCalls, numberOfEscalations and daySalary to localStorage:', {
                numberOfCalls,
                numberOfEscalations,
                daySalary
            });
        } catch (error) {
            console.error('Error saving numberOfCalls and numberOfEscalations to localStorage:', error);
        }
    }, [numberOfCalls, numberOfEscalations, daySalary]);

    const percentageEscalations = numberOfCalls !== 0 ? (numberOfEscalations / numberOfCalls) * 100 : 0;

    return (
        <div className="App">
            <Content
                numberOfCalls={numberOfCalls}
                numberOfEscalations={numberOfEscalations}
                setNumberOfCalls={setNumberOfCalls}
                setNumberOfEscalation={setNumberOfEscalation}
                setRandomCountEmojis={setRandomCountEmojis}
                setDaySalary = {setDaySalary}
            />
            <Sidebar
                numberOfEscalations={numberOfEscalations}
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

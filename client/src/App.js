import './App.css';
import {useState} from "react";
import FallingCat from "./components/FallingCat/FallingCat";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
    const [numberOfCalls, setNumberOfCalls] = useState(0);
    const [numberOfEscalations, setNumberOfEscalation] = useState(0);
    const percentageEscalations = numberOfCalls !== 0 ? (numberOfEscalations / numberOfCalls) * 100 : 0;

    return (
        <div className="App">
            <Content
                numberOfCalls = {numberOfCalls}
                setNumberOfCalls={setNumberOfCalls}
                setNumberOfEscalation={setNumberOfEscalation}
            />
            <Sidebar numberOfEscalations={numberOfEscalations} percentageEscalations={percentageEscalations} />

            {[...Array(numberOfCalls)].map((_, index) => (
                <FallingCat key={index} id={index} />
            ))}
        </div>
    );
}

export default App;

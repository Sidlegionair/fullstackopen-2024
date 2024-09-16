import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // Event handlers for updating state
    const handleGoodClick = () => {
        setGood(good + 1);
    };

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    };

    const handleBadClick = () => {
        setBad(bad + 1);
    };

    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0;
    const positivePercentage = total ? (good / total) * 100 : 0;


    return (
        <div>
            <h1>give feedback</h1>

            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>

            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {total}</p>
            <p>average {average}</p>
            <p>positive {positivePercentage} %</p>
        </div>
    )
}

export default App

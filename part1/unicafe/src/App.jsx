import {useState} from 'react'

const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({text, value}) => {
    return (
        <p>
            {text} {value}
        </p>
    );
};

// Statistics Component
const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0;
    const positivePercentage = total ? (good / total) * 100 : 0;

    if (total === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <div>
            <h2>statistics</h2>
            {total ? (
                <div>
                    <StatisticLine text="good" value={good}/>
                    <StatisticLine text="neutral" value={neutral}/>
                    <StatisticLine text="bad" value={bad}/>
                    <StatisticLine text="all" value={total}/>
                    <StatisticLine text="average" value={average.toFixed(2)}/>
                    <StatisticLine text="positive" value={positivePercentage.toFixed(2) + ' %'}/>
                </div>
            ) : (
                <p>No feedback given.</p>
            )}
        </div>
    )
};


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


    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>

            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App

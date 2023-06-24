import './UserInput.css';
import React, { useState } from 'react';

const UserInput = (props) => {

    const [inputInfo, setInputInfo] = useState({
        'current-savings': 0,
        'yearly-contribution': 0,
        'expected-return': 0,
        'duration': 0
    });

    const inputChangeHandler = (input, value) => {
        console.log(input, value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //update InputInfo
        // setInputInfo({
        //     'current-savings': 0,
        //     'yearly-contribution': 0,
        //     'expected-return': 0,
        //     'duration': event.target.duration.value
        // });
        console.log(inputInfo);
        props.calculateHandler(inputInfo);
        event.target.reset();
    }

    const resetHandler = (event) => {
        console.log(`resetting form ${event.target.value} ${event.target.id}`);
    }

    return (

        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings'">Current Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                        type="number"
                        id="current-savings'" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}
                        type="number"
                        id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) => inputChangeHandler("expected-return", event.target.value)}
                        type="number"
                        id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler("duration", event.target.value)}
                        type="number"
                        id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default UserInput;
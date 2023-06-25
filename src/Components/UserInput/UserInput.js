import './UserInput.css';
import React, { useState } from 'react';

const intialUserInfo = {
    'current-savings': 10000,
    'yearly-contribution': 1000,
    'expected-return': 7,
    'duration': 10
}

const UserInput = (props) => {

    const [inputInfo, setInputInfo] = useState(intialUserInfo);

    const inputChangeHandler = (input, value) => {
        setInputInfo((prevState) => {
            return {
                ...prevState,
                [input]: value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //update InputInfo not needed due to using of inputChange Handler
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
        setInputInfo(intialUserInfo);
        // console.log(`resetting form ${event.target.value} ${event.target.id}`);
    }

    return (

        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings'">Current Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                        value={inputInfo['current-savings']}
                        type="number"
                        id="current-savings'" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("c", event.target.value)}
                        value={inputInfo['yearly-contribution']}
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
                        value={inputInfo['expected-return']}
                        type="number"
                        id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler("duration", event.target.value)}
                        value={inputInfo['duration']}
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
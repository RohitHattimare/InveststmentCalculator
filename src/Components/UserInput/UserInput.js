import './UserInput.css';

const UserInput = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();

        //Object to Input
        const inputData = {
            curSav: event.target.curSav.value,
            yearlyContr: event.target.yearlyContr.value,
            expectedReturn: event.target.expectedReturn.value,
            duration: event.target.duration.value,
        }
        console.log(inputData);
        props.calculateHandler(inputData);
        event.target.reset();
    }

    const resetHandler = (event) => {
        console.log(`resetting form ${event.target.value} ${event.target.id}`);
    }

    return (

        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="curSav">Current Savings ($)</label>
                    <input type="number" name="curSav" id="curSav" />
                </p>
                <p>
                    <label htmlFor="yearlyContr">Yearly Savings ($)</label>
                    <input type="number" name='yearlyContr' id="yearlyContr" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" name="expectedReturn" id="expectedReturn" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" name="duration" id="duration" />
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
import ResultTable from './Components/ResultTable/ResultTable';
import UserInput from './Components/UserInput/UserInput';
import logo from './assets/investment-calculator-logo.png';
import React, { useState } from 'react';

function App() {

  const [userInputData, setUserInputData] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInputData(userInput)
  };

  const yearlyData = []; // per-year results

  if (userInputData) {
    let currentSavings = +userInputData['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInputData['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInputData['expected-return'] / 100;
    const duration = +userInputData['duration'];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log("yearlyData", yearlyData);
  }

  // {/* Todo: Show below table conditionally (only once result data is available) */ }
  // {/* Show fallback text if no data is available */ }
  return (

    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput calculateHandler={calculateHandler} />
      {!userInputData && <h5>No data available</h5>}
      {userInputData && console.log('UserData', userInputData['current-savings'])}
      {userInputData && <ResultTable data={yearlyData} initSave={userInputData['current-savings']} />}
    </div>
  );
}

export default App;

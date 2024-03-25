import Header from './components/Header';
import ResultsTable from './components/ResultsTable';
import UserInput from './components/UserInput';
import { useState } from 'react';

const INITIAL_INPUT = {
	initialInvestment: 10_000,
	annualInvestment: 1_200,
	expectedReturn: 6,
	duration: 10,
};

const inputIsValid = (userInputValues) => {
	if(!userInputValues.duration) return false
	if(userInputValues.duration <= 0 || userInputValues.duration > 100) return false;
	return true;
};

function App() {
	const [ userInputValues, setUserInputValues ] = useState(INITIAL_INPUT);

	function handleUserInput(identifier, value) {
		setUserInputValues((previousValues) => {
			return {
				...previousValues,
				[identifier]: value,
			};
		});
	}

	const isValidInput = inputIsValid(userInputValues);

	return (
	<>
		<Header />
		<UserInput
			inputValues={userInputValues}
			handleUserInput={handleUserInput} 
		/>
		{isValidInput && <ResultsTable input={userInputValues} />}
		{!isValidInput && <p className='center'>Please enter a duration greater than zero.</p>}
	</>
	)
}

export default App

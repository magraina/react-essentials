import Header from './components/Header';
import ResultsTable from './components/ResultsTable';
import UserInput from './components/UserInput';
import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment';

const INITIAL_INPUT_GROUP1 = [
	{
		name: 'Initial Investment',
		value: 10_000,
	},
	{
		name: 'Anual Investment',
		value: 1_200,
	},
];

const INITIAL_INPUT_GROUP2 = [
	{
		name: 'Expected Return',
		value: 6,
	},
	{
		name: 'Duration',
		value: 10,
	},
];

function App() {
	const [ inputValues1, setInputValues1 ] = useState(INITIAL_INPUT_GROUP1);
	const [ inputValues2, setInputValues2 ] = useState(INITIAL_INPUT_GROUP2);

	function handleUserInput(_event, setInputValues) {
		const value = _event.target.value;
		const targetName = _event.target.name;

		setInputValues((currentValues) => {
			const updatedValues = [...currentValues]

			return updatedValues.map((inputValue) => {
				const newValue = {...inputValue};
				if(newValue.name === targetName) {
					newValue.value = Number(value);
				}
				return newValue;
			});
		});
	}

	const results = calculateInvestmentResults({
		annualInvestment: inputValues1[1].value,
		duration: inputValues2[1].value,
		expectedReturn: inputValues2[0].value,
		initialInvestment: inputValues1[0].value,
	});

	return (
	<>
		<Header />
		<div id='user-input'>
			<UserInput
				inputFields={inputValues1}
				handleUserInput={(_event) => handleUserInput(_event, setInputValues1)} 
			/>
			<UserInput
				inputFields={inputValues2}
				handleUserInput={(_event) => handleUserInput(_event, setInputValues2)} 
			/>
		</div>
		<ResultsTable results={results} />
	</>
	)
}

export default App

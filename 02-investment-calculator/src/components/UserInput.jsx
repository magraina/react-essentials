import InputField from './InputField';

function UserInput({ inputValues, handleUserInput }) {
	return (
	<section id='user-input'>
		<div className='input-group'>
			<InputField 
				identifier='initialInvestment'
				name='Initial Investment'
				value={inputValues.initialInvestment}
				handleChange={handleUserInput} 
			/>
			<InputField 
				identifier='annualInvestment'
				name='Anual Investment'
				value={inputValues.annualInvestment}
				handleChange={handleUserInput} 
			/>
		</div>
		<div className='input-group'>
			<InputField 
				identifier='expectedReturn'
				name='Expected Return'
				value={inputValues.expectedReturn}
				handleChange={handleUserInput} 
			/>
			<InputField 
				identifier='duration'
				name='Duration'
				value={inputValues.duration}
				handleChange={handleUserInput} 
			/>
		</div>
	</section>
	);
};

export default UserInput;

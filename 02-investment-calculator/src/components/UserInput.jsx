import InputField from './InputField';




function UserInput({ inputFields, handleUserInput }) {

	return (
	<div className='input-group'>
		{inputFields.map((inputField) => (
			<InputField 
				key={inputField.name}
				name={inputField.name}
				value={inputField.value}
				handleChange={handleUserInput} 
			/>
		))}
	</div>
	);
};

export default UserInput;



function InputField({ identifier, name, value, handleChange }) {
	return (
	<div>
		<label>{ name }</label>
		<input 
			type="number"
			value={value}
			onChange={(_event) => handleChange(identifier, _event.target.valueAsNumber)}
			required
		/>
	</div>
	);
};

export default InputField;

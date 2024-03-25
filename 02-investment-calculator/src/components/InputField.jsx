function InputField({ name, value, handleChange }) {
	return (
	<div>
		<label htmlFor={name}>
			{ name }
		</label>
		<input 
			name={name}
			type="number"
			value={value}
			onChange={handleChange}
		/>
	</div>
	);
};

export default InputField;

import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [ playerName, setPlayerName ] = useState(initialName);
	const [ isEditing, setIsEditing ] = useState(false);

	function handleEditClick() {
		setIsEditing((editing) => !editing);
		if(isEditing) onChangeName(symbol, playerName);
	};

	function handleChangePlayName(_event) {
		setPlayerName(_event.target.value);
	};

	function handleEnterPress(_event) {
		if(_event.key === 'Enter') handleEditClick();
	}


	return (
		<li className={isActive ? 'active' : null}>
			<span className="player">
				{isEditing
				? <input type='text'
					value={playerName}
					onChange={handleChangePlayName}
					onKeyDown={handleEnterPress}
					required/>
				: <span className='player-name'
					onClick={handleEditClick}
				>{playerName}</span>}
				
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit' }</button>
		</li>
	);
};

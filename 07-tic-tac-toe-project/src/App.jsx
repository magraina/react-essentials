import { useState } from 'react';

import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './components/GameOver';

const PLAYERS = {
	'X': 'Player 1',
	'O': 'Player 2',
};

const INITIAL_GAMEBOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';
	if(gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O';

	return currentPlayer;
};

function deriveWinner(gameBoard, players) {
	let winner = null;

	for(const combinations of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
		const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
		const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

		if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
			winner = firstSquareSymbol;
			return players[winner];
		}
	}
	return winner;
};

function deriveGameBoard(gameTurns) {
	const gameBoard = [...INITIAL_GAMEBOARD.map((innerArray) => [...innerArray])];

	for(const gameTurn of gameTurns) {
		const { square, player } = gameTurn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}
	return gameBoard;
};

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, setGameTurns] = useState([]);

	const currentPlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns)
	const winner = deriveWinner(gameBoard, players);
	const hasDraw = gameTurns.length === 9 && ! winner;

	function handleSelectSquare(rowIndex, columnIndex) {

		setGameTurns((currentTurns) => {
			const updatedTurns = [{
				square: {
					row: rowIndex,
					col: columnIndex,
				}, 
				player: deriveActivePlayer(currentTurns),
			}, ...currentTurns]

			return updatedTurns;
		});
	};

	function handleRestartGame() {
		setGameTurns([]);
	}

	function handlePlayerNameChanged(symbol, name) {
		setPlayers((currentPlayers) => {
			return {
				...currentPlayers,
				[symbol]: name,
			};
		});
	};
	console.log(winner, players);
	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName={PLAYERS.X}
						symbol='X'
						isActive={currentPlayer === 'X'}
						onChangeName={handlePlayerNameChanged}
					/>
					<Player 
						initialName={PLAYERS.O}
						symbol='O'
						isActive={currentPlayer === 'O'}
						onChangeName={handlePlayerNameChanged}
					/>
				</ol>
				{(winner || hasDraw) && <GameOver winner={winner} onRestartSelect={handleRestartGame} />}
				<GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
			</div>

			<Log gameTurns={gameTurns} />
		</main>
	);
}

export default App


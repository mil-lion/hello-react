import React, {useState} from "react";
import "./game.css";
import calculateWinner from "./winner";
import Board from "./Board";
import GameStatus from "./GameStatus";
import GameHistory from "./GameHistory";

// Функциональный компонент Игра (Game)
function GameFunc(props) {
    // Initial State with Hook
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    // handlers
    function handleClick(i) {
        // console.log("Click on Square:", i);
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const newSquares = current.squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return ;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';

        setHistory(newHistory.concat({squares: newSquares}));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    }
    function jumpTo(step) {
        // console.log("Jump To Step:", step);
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }
    // render
    const currentSquares = history[stepNumber].squares;
    return (
        <div className="game">
            <Board
                squares={currentSquares}
                onClick={handleClick}
            />
            <div className="game-info">
                <GameStatus
                    squares={currentSquares}
                    xIsNext={xIsNext}
                />
                <GameHistory
                    history={history}
                    jumpTo={jumpTo}
                />
            </div>
        </div>
    );
}

export default GameFunc;
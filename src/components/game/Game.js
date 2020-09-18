import React, {Component} from "react";
import "./game.css";
import calculateWinner from "./winner";
import Board from "./Board";
import GameStatus from "./GameStatus";
import GameHistory from "./GameHistory";

// Классовый компонент Игра (Game)
class Game extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
        // Bind methods to this object
        this.handleClick = this.handleClick.bind(this);
        this.jumpTo = this.jumpTo.bind(this);
    }
    handleClick(i) {
        // console.log("Click on Square:", i);
        const {history, xIsNext, stepNumber} = this.state;
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const newSquares = current.squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return ;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        this.setState({
            history: newHistory.concat({squares: newSquares}),
            stepNumber: newHistory.length,
            xIsNext: !xIsNext
        });
    }
    jumpTo(step) {
        // console.log("Jump To Step:", step);
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }
    render() {
        const {history, xIsNext, stepNumber} = this.state;
        const currentSquares = history[stepNumber].squares;
        return (
            <div className="game">
                <Board
                    squares={currentSquares}
                    onClick={this.handleClick}
                />
                <div className="game-info">
                    <GameStatus
                        squares={currentSquares}
                        xIsNext={xIsNext}
                    />
                    <GameHistory
                        history={history}
                        jumpTo={this.jumpTo}
                    />
                </div>
            </div>
        );
    }
}

export default Game;

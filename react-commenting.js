// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: This line is calling for the child componenet of Board to be rendered by the parent*/}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: This is adding properties and their default values to the Board component. An array of 9 null values for the gamebaord, the value of the current player and winner is set to null. 
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: This is destructuring the properties names within the curly brackets to prevent the need write the long form, this.state."property_name".
    const { gameBoard, currentPlayer, winner, clickCount } = this.state
    // 4) Here: If there is no winner yet and the value of the selected array index is still set to null, this will update the specified index of gameBoard to the icon of the current player, it will update the value of current player to the next player and will increment clickCount by 1.
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
        clickCount: clickCount+1
      })
    }
    if(winner === null){
      // 5) Here: If the current value of winner is set to null, this runs the winning function to check if there are any winners.
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: This is updating the set state of winner to the value currentPlayer.
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: This is a map function used to create an instance of the Square component for each of the items in the gameBoard array.
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: This is setting the gameplay function as an item that can be referenced by the Square component*/}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: This is printing out the icon for the person who is set as the current player.*/}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: This will print out the icon for the winner of the game*/}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: This is to show the output of the mappedGameBoard function, which is an instance of Square component for each item in the array*/}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: This is receiving the index value Square component that has been clicked, and using that index as the arguement to run the gamePlay function, which changes the value of the index in the array.
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: This is being used to show the current value of a specific index in the array, either an empty box for null values or a player icon if the box has been selected*/}
        { this.props.value }
      </div>
    )
  }
}

export default App

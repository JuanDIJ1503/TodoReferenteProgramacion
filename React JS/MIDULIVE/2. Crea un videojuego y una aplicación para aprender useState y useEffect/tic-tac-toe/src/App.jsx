import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';

import { Square } from './components/Square.jsx';
import { TURNS} from './constans.js';
import { checkWinner , checkEndGame} from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { saveGameToStorage, resetGameToStorage } from './logic/storage/index.js';




function App() {
  //Cramos un estado que inicia con un array de 9 elementos vacio
  const [BOARD,setBOARD] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) 
  })

  //Creamos un estado que inicia con X
  const [turn,setTurn] = useState(()=>{
    const turnFormStorage = window.localStorage.getItem("turn")
    return turnFormStorage ?? TURNS.X
  });

  //Creamos un estado el cual se actualizara cuando haya un ganador
  const [winner,setWinner] = useState(null)

  

  

  const updateBoard = (index)=>{
    //TODO: Los ... crean una copia del array BOARD
    if(BOARD[index] || winner) return

    const newBoard = [...BOARD]
    newBoard[index] = turn
    setBOARD(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardar Partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    //Revisamos si hay un ganador
    const newWinner = checkWinner(newBoard);    
    if(newWinner){
      //Los estados en React son asincronos
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  const resetGame = () =>{
    setBOARD(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameToStorage();
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear Juego</button>
      <section className='game'>
        {
          BOARD.map((square,index)=>{
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <section className='turn'>
        <Square isSelect={turn===TURNS.X}>{TURNS.X}</Square>
        <Square isSelect={turn===TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App

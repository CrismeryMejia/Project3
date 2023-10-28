



const App = () => {
  const [board, setBoard] = React.useState(["","","","","","","","",""])
  const [turn , setTurn] = React.useState("X")
  const [gg, setGg] = React.useState()
  const winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
  const squares = Array.from(document.querySelectorAll('#board div'));
  const messages = document.querySelector('h2');


  let win;

  let gameOver = false
  


  const handleTurn = (event) => {
    let idx = event.target.id;
    if (!gameOver && board[idx] === "") {
      let newBoard = [...board];
      newBoard[idx] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');
      const winner = getWinner(newBoard);
      if (winner) {
        gameOver = true;
        setGg(`${winner} WINS THE GAME`);
        console.log(`Player ${winner} wins!`);
      } else if (!newBoard.includes("")) {
        gameOver = true;
        setGg("DRAW")
        console.log("It's a draw!");
      }
    }
  };

  const getWinner = (currentBoard) => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };


  const resetButton = () => {
    setBoard(["","","","","","","","",""])
    setGg(null)
  }


    return (
    <div>
      <h1>
        Tic-React-Toe
      </h1>
      {
        gg ? <h2>{gg}</h2>:
        <h2>It's {turn}'s turn!</h2> 
      }
      <div className="flex-container flex-column">
        <div className="flex-container flex-wrap square" id="board" onClick={handleTurn}>
          {
            board.map((value, idx) => {
              return(
                <div  className = 'square'key={idx} id={idx}>
                  {value}
                </div>
              )
            })
          }
        </div>
        <button id="reset-button" onClick={resetButton}>reset</button>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

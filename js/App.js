



const App = () => {
  const [board, setBoard] = React.useState(["","","","","","","","",""])
  // let board = (["","","","","","","","",""])

  const winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
  const squares = Array.from(document.querySelectorAll('#board div'));
  const messages = document.querySelector('h2');

  let turn = "X";

  let win;

  let gameOver = false


  const handleTurn = (event) => {
    console.log(event.target, event.target.id);
    let idx = event.target.id;
    if (!gameOver) {
      let newBoard = [...board];
      newBoard[idx] = turn;
      setBoard(newBoard);
      turn = turn === 'X' ? 'O' : 'X';
      // win = getWinner();
      // render();
    }
  };

    return (
    <div>
      <h1>
        Tic-React-Toe
      </h1>
      <h2>It's X's turn!</h2>
      <div className="flex-container flex-column">
        <div className="flex-container flex-wrap square" id="board" onClick={handleTurn}>
          {
            board.map((value, idx) => {
              return(
                <div  className = 'square'key={idx}>
                  {value}
                </div>
              )
            })
          }
        </div>
        <button id="reset-button">reset</button>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

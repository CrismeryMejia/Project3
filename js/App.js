


function App(){
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

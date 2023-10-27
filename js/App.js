


function App(){
    return (
        <div>
            <h1>Tic-React-Toe</h1>

            <main class="background">
      <section class="title">
        <h1>Crismery's Tic Tac Toe</h1>
      </section>
      <section class="display">
        Player <span class="display-player playerX">X</span>'s turn
      </section>
      <section class="container">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
        </section>
        
        <section class="display announcer hide"></section>
        <section class="controls">
          <button id="reset">Reset</button>
        </section>
      </main>


        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));

import { GameSquare } from "./GameSquare";

export function EndGameDialog({winner, resetGame}){
    if(winner === null) return null;

    const winnerText = false ? "Empate" : "Gano";

    const handleOnClick = () => {
        resetGame();
    }
    return (
       <>
            <section className="winner">
                <div className="text">
                    <h2>{winnerText}</h2>
    
                    <header className="win">
                        {winner && <GameSquare>{winner}</GameSquare>}
                    </header>
    
                    <footer>
                        <button onClick={handleOnClick}>Empezar de nuevo</button>
                    </footer>
                </div>
            </section>
       </>   
    );
}
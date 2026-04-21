import { GameSquare } from "./GameSquare";

export function EndGameDialog({winner, resetGame}){
    const handleOnClick = () => {
        resetGame();
    }
    return (
       <>
        {
            winner !== null && 
                (
                    <section className="winner">
                        <div className="text">
                            <h2>
                                {
                                    winner === false ? "Empate" : "Gano"
                                }
                            </h2>
            
                            <header className="win">
                                {winner && <GameSquare>{winner}</GameSquare>}
                            </header>
            
                            <footer>
                                <button onClick={handleOnClick}>Empezar de nuevo</button>
                            </footer>
                        </div>
                    </section>
                )
            }
       </>   
    );
}
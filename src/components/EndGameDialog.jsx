import { GameSquare } from "./GameSquare";

export function EndGameDialog({winner}){
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
                                <button>Empezar de nuevo</button>
                            </footer>
                        </div>
                    </section>
                )
            }
       </>   
    );
}
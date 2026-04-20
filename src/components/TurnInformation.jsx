import { GameSquare } from "./GameSquare";
import { TURNS } from "./Utils";

export function TurnInformation({currentTurn}){
    return(
        <>
            <section className="turn">
                <GameSquare isSelected={currentTurn === TURNS.X}>{TURNS.X}</GameSquare>
                <GameSquare isSelected={currentTurn === TURNS.O}>{TURNS.O}</GameSquare>
            </section>
        </>
    );
}
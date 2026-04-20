import { GameSquare } from "./GameSquare";
import { TURNS } from "./Utils";

export function TurnInformation(){
    return(
        <>
            <section className="turn">
                <GameSquare>{TURNS.X}</GameSquare>
                <GameSquare>{TURNS.O}</GameSquare>
            </section>
        </>
    );
}
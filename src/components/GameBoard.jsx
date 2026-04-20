import { GameSquare } from './GameSquare';

export function GameBoard({gameBoard}){
    return(
        <section className='game'>
            {
                gameBoard.map((_, index) => {
                return (
                    <GameSquare key={index} index={index}>
                    {index}
                    </GameSquare>
                );
                })
            }
        </section>
    );
}
import { GameSquare } from './GameSquare';

export function GameBoard({gameBoard, updateBoard}){

    return(
        <section className='game'>
            {
                gameBoard.map((item, index) => {
                return (
                    <GameSquare key={index} index={index} updateBoard={updateBoard}>
                        {item}
                    </GameSquare>
                );
                })
            }
        </section>
    );
}
import React from "react";

export function GameSquare({children, isSelected, updateBoard, index}){
    const componentStyles = isSelected ? "square is-selected" : "square";

    const handleClick = (event) => {
        updateBoard(index);
    }
    return (
        <>
            <div onClick={handleClick} className={componentStyles}>
                {children}
            </div>
        </>
    );
}
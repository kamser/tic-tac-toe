import React from "react";

export function GameSquare({children, isSelected, updateBoard, index}){
    const componentStyles = isSelected ? "square is-selected" : "square"
    return (
        <>
            <span className={componentStyles}>
                {children}
            </span>
        </>
    );
}
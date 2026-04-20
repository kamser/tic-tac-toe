import React from "react";

export function GameSquare({children, updateBoard, index}){
    return (
        <>
            <span className="square">
                {children}
            </span>
        </>
    );
}
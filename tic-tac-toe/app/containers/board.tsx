"use client";

import Square from "../components/square"
import { useState } from "react";

export default function Board() {
    
    {/*Daten Modell*/}
    const [currentPlayer, setCurrentPlayer] = useState("X");


    const handlePlayerChange = () => {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    {/*Spiel logik*/}

    {/*Benutzer oberfläche*/}

    {/*check what player made move and mark ither X or O*/}
    return(
        <>
            <h1 className="text-yellow-300 m-3 fornt-bold">
                Current player: <span className="text-yellow-100">
                {currentPlayer === "X" ? "Player 1 (x)":"Player 2 (O)"}</span>
            </h1>
            {/* grid 3x3*/}
            <div className="flex justify-center items-center flex-col gap-1">
                {[0, 3, 6].map((start) => (
                    <div key={start} className="grid grid-cols-3 gap-1 w-fit">
                        {[0, 1, 2].map((offset) => {
                            const id = start + offset;
                            return (
                                <Square
                                    key={id}
                                    buttonId={id}
                                    onClick={() => console.log("Square ID:", id)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
};
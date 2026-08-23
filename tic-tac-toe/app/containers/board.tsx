"use client";

import Square from "../components/square"
import { useState } from "react";

export default function Board() {
    
    return(
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
    );
};
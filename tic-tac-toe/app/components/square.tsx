"use client";

export default function Square({onClick, buttonId}) {
    return(
        <button className="rounded-md bg-yellow-400 w-16 h-16 text-white"
        onClick={() => console.log(buttonId)}
        >
        </button>
    );
};
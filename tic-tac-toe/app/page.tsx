import Image from "next/image";
import Button from "./components/button";
import Board from "./containers/board"
import Square from "./components/square"

export default function Home() {
  return (
    <div>
      <header>
        <title>Tic Tac Toe von silas</title>
      </header>
      <main className="text-center">
        <div>
          <h1>Current player: <span>{current</span>
          </h1>
          <Board />
          <Button />
        </div>
      </main>
    </div>
  );
}

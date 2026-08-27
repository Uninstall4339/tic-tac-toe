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
          <Button display="Start"/> <Button />
          <p className="text-yellow-300 m-3">This is a tic tac toe against a computer</p>
          <Board />
          <Button display="Reset"/>
        </div>
      </main>
    </div>
  );
}

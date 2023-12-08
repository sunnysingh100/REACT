import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

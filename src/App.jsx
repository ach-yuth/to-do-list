import { useState } from "react";
import "./App.css";

export default function App() {
  const [Input, SetInput] = useState("");
  const [List, SetList] = useState([]);

  return (
    <div>
      <h2>TO Do List</h2>
      <input
        type="text"
        value={Input}
        onInput={(event) => {
          SetInput(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          SetList((prev) => [...prev, Input]);
          SetInput("");
        }}
      >
        Add TO List
      </button>
      {List.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
}

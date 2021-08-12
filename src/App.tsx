import { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddTodoList from "./components/AddTodoList";

export interface TState {
  todos: { name: string; age: number; url: string; note?: string }[];
}

function App() {
  const [data, setData] = useState<TState["todos"]>([
    {
      name: "Ali Akbar",
      age: 20,
      url: "https://picsum.photos/100/100",
      note: "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
    },
  ]);


  return (
    <div className="App">
      <h1>Todo App Typescript</h1>
      <List todos={data} />
      <AddTodoList handleSet={setData} todos={data} />
    </div>
  );
}

export default App;

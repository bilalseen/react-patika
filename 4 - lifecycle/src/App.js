import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [number]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}

export default App;

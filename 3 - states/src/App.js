import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);
  const [friends, setFriends] = useState(["John", "Jane", "Doe"]);
  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{age}</h1>
      <li>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </li>
      <button onClick={() => setName("Jane Doe")}>Change Name</button>
      <button onClick={() => setAge(35)}>Change Age</button>
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add Ayse to Friends
      </button>
      <br />
      <br />
      <Counter />
    </div>
  );
}

export default App;

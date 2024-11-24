import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  const friends = [
    {
      id: 1,
      name: "Ahmet",
      surname: "Yılmaz",
      age: 23,
    },
    {
      id: 2,
      name: "Hasan",
      surname: "Korkmaz",
      age: 25,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Kaya",
      age: 40,
    },
  ];
  return (
    <div className="App">
      <Header />
      <User
        name={"Hakan"}
        surname={"Tanrıkulu"}
        isLoggedIn={true}
        age={22}
        friends={friends}
        address={{
          title: "İstanbul",
          zip: 34000,
        }}
      />
    </div>
  );
}

export default App;

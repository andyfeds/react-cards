import "./App.css";
import Card from "./components/Card";

// const name="Andrea";

function App() {
  return (
    <div className="App">
      {/* my name is {name} */}
      {/* The sum of 4 + 5 = {4+5} */}
      <Card class="Card" title={'card 1'}/>
      <Card class="Card" title={'card 2'}/>
    </div>
  );
}

export default App;

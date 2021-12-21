import './App.css';
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Наши тарифы</h1>
      <section className="Cards-container">
        <Card price="300" speed="10" />
        <Card price="450" speed="50" />
        <Card price="550" speed="100" />
        <Card price="1000" speed="200" />
      </section>
    </div>
  );
}

export default App;

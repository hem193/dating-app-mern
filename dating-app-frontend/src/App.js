import "./App.css";
import Header from "./components/Header.js";
import DatingCards from "./components/DatingCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;

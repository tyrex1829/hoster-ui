import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

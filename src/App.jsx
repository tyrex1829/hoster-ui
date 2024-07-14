import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

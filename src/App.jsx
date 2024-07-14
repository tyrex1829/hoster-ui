import { useState } from "react";
import "./App.css";

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

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <Header />
      <main className="container">
        <Button switch={switch1} setSwitch={setSwitch1} />
      </main>
      <Footer />
    </>
  );
}

export default App;

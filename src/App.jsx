import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TwoButton from "./components/TwoButton";
import SingleButton from "./components/SingleButton";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  let decollage = false;
  const decol = () => {
    if (switch1 && switch2 && switch3) {
      console.log(true);
      return (decollage = true);
    }
  };

  return (
    <>
      <Header title="Ready To Go" />
      <main className="container">
        <div className="left-container">
          <TwoButton switch={switch1} setSwitch={setSwitch1} />
          <TwoButton switch={switch2} setSwitch={setSwitch2} />
          <TwoButton switch={switch3} setSwitch={setSwitch3} />
        </div>

        <div className="right-container">
          <SingleButton switch1={switch1} switch2={switch2} switch3={switch3} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

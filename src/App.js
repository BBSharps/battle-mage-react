import "./App.css";
import MobileWindow from "./elements/mobile-window";
import Instructions from "./elements/instructions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<MobileWindow />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

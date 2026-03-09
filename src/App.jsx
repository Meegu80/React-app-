import { Reset } from "styled-reset";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";
import Coin from "./routes/Coin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Reset />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

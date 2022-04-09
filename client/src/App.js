import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Step1 from "./Pages/Step1/step1";
import Step2 from "./Pages/Step2/step2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1/>}/>
          <Route path="/step2" element={<Step2/>}/>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Step1 from "./Pages/Step1/step1";
import Step2_adult from "./Pages/Step2/step2";
import Step2_child from "./Pages/Step3/step3";
import Medicinepage from "./Pages/MedicalPage/medicinepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1/>}/>
          <Route path="/step2_adult" element={<Step2_adult/>}/>
          <Route path="/step2_child" element={<Step2_child/>}/>
          <Route path="/medicine" element={<Medicinepage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

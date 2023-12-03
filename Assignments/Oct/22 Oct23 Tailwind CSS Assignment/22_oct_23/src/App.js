import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Questions from "./Components/Questions";
import Q1 from "./Components/Q1";
import Q2 from "./Components/Q2";
import Q3 from "./Components/Q3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home/Q1"}></Navigate>}></Route>
        <Route path="/home" element={<Questions></Questions>}>
          <Route path="Q1" element={<Q1></Q1>}></Route>
          <Route path="Q2" element={<Q2></Q2>}></Route>
          <Route path="Q3" element={<Q3></Q3>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

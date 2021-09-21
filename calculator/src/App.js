import logo from "./logo.svg";
import "./App.css";
import Model from "./components/Model";
import { useState } from "react";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import Modal from "./components/Modal";
import ReactDOM from "react-dom";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const clickHandler = () => {
    console.log(isModalOpen);
    setModalOpen(!isModalOpen);
  };
  const close = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="button_wrapper_styles">
        <Calculator></Calculator>
      </div>
    </>
  );
}

export default App;

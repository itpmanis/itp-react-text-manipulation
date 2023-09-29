import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TextForm from "../../components/TextForm/TextForm";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";
const Home = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabeled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabeled", "Success");
    }
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar title="TextMagic" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="flex-grow-1">
        <TextForm showAlert={showAlert} mode={mode} />
      </div>
      <Footer className="fixed-bottom" mode={mode} />
    </div>
  );
};

export default Home;

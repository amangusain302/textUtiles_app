import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import react, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262932";
      document.body.style.color = "white";
      showAlert("Enable Dark Mode", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Disable Dark Mode", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtiles" mode={mode} toggleBtn={toggleBtn}></Navbar>
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route  path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyse"
                showAlert={showAlert}
                mode={mode}
              ></TextForm>
            }
          />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

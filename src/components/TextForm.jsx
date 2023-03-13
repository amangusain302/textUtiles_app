import React, { useState } from "react";
import { RxLetterCaseUppercase, RxLetterCaseLowercase, RxLetterCaseCapitalize, RxSpeakerLoud } from "react-icons/rx";
// import { FaAddressCard } from "react-icons/fa";
import { MdClear } from "react-icons/md";
// import { AiOutlineUsergroupAdd, AiFillAlert } from "react-icons/ai";

export default function TextForm(props) {
  const handleOnClickUppercase = () => {
    setText(text.toUpperCase());
    if(text.length !== 0)
    props.showAlert("your text converted in UpperCase", "success")
  };
  const handleOnClickLowercase = () => {
    setText(text.toLowerCase());
    if(text.length !== 0)
    props.showAlert("your text converted in LowerCase", "success")
  };
  const handleClickTitlecase = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((element, index) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      })
      .join(" ");

    console.log(newText);
    setText(newText);
    if(text.length !== 0)
    props.showAlert("your text converted in titleCase", "success")
  };
  const handleOnClear = () => {
    setText("");
    if(text.length !== 0)
    props.showAlert("cleared successfully!! ", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  // It is targetted by the button 'speak':
  // style={(props.mode === "dark")?{color : "white", backgroundColor : "black"}:{color: "dark", backgroundColor : "white"}}

  const [text, setText] = useState("");
  return (
    <>
      <div className="form-group " >
        <h2>{props.heading}</h2>
        <textarea
          className="form-control my-3"
          value={text} 
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={(props.mode === "dark")?{color : "white", backgroundColor : "#262932"}:{color: "black", backgroundColor : "white"}}
        ></textarea>
        <button
          className="btn btn-primary my-1  mx-1"
          onClick={handleOnClickUppercase}
        >
         <RxLetterCaseUppercase />
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleOnClickLowercase}
        >
          <RxLetterCaseLowercase />
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleClickTitlecase}
        >
          <RxLetterCaseCapitalize />
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleOnClear}>
          <MdClear />
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-1 my-2"
        >
          <RxSpeakerLoud />
        </button>
      </div>
      <div className="container my-3">
        <h3>
          Your Text Summary
        </h3>
        <p>
          <b>
              {text.split(/\s+/).filter(word => word !== "").length }
              { console.log(text.split(" "))}
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          Reading Time Estimation :{" "}
          <b> {text.split(/\s+/).filter(word => word !== "").length * 0.008  } minutes</b>
        </p>
        <h3>Preview</h3>
        <p>{(text.length)?text : "Enter somthing in above text box to preview here"}</p>
      </div>
    </>
  );
}

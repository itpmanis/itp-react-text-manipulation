import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUnchange = (event) => {
    setText(event.target.value);
  };

  const handleUpper = () => {
    let updated = text.toUpperCase();
    setText(updated);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLower = () => {
    let updated = text.toLowerCase();
    setText(updated);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleReverse = () => {
    const reversedText = text.split(" ").reverse().join(" ");
    setText(reversedText);
    props.showAlert("Converted to reverse!", "success");
  };

  const handleSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    props.showAlert("You are listning now", "success");
  };

  const removeExtraSpaces = (text) => {
    text = text.replace(/\s+/g, " ");
    text = text.trim();
    setText(text);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCopy = () => {
    const copied = document.getElementById("floatingTextarea2").value;
    navigator.clipboard.writeText(copied);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleClear = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Text Cleared!", "success");
  };

  let words = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;
  const characters = text.replace(/\s/g, "").length;

  return (
    <>
      <div className="container mt-5">
        <div className="form-floating">
          <h4>Try TextUtils</h4>

          <textarea
            className={`form-control shadow p-3 mb-5 rounded ${
              props.mode === "light" ? "bg-white" : "bg-dark text-white"
            }`}
            id="floatingTextarea2"
            value={text}
            placeholder="Start typing, or copy and paste your document"
            onChange={handleUnchange}
            style={{ height: "300px", maxWidth: "100%" }}
          ></textarea>

          <div className="d-flex justify-content-between flex-wrap mt-3">
            <button
              type="button"
              onClick={handleUpper}
              className="btn btn-primary mb-2"
              disabled={text.length === 0}
            >
              Generate Uppercase
            </button>
            <button
              type="button"
              onClick={handleLower}
              className="btn btn-primary mb-2"
              disabled={text.length === 0}
            >
              Generate Lowercase
            </button>
            <button
              type="button"
              onClick={handleReverse}
              className="btn btn-primary mb-2"
              disabled={text.length === 0}
            >
              Generate Reverse
            </button>
            <button
              type="button"
              onClick={handleSpeech}
              className="btn btn-primary mb-2"
              disabled={text.length === 0}
            >
              Text to speech
            </button>
            <button
              type="button"
              onClick={() => removeExtraSpaces(text)}
              className="btn btn-primary mb-2"
              disabled={text.length === 0}
            >
              Remove extra spaces
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-primary mb-2"
              disabled={text.length === 0}
            >
              Copy
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={text.length === 0}
              className="btn btn-danger mb-2"
            >
              Clear
            </button>
          </div>
          <div className="mt-4 d-flex align-items-center justify-content-between">
            <h5>Your text summary</h5>
            <div className="d-flex align-items-center">
              <p className="mx-2">
                <b>Total words:</b> {words} |
              </p>
              <p className="mx-2">
                <b>Total characters:</b> {characters} |
              </p>
              <p className="mx-2">
                <b>Minutes to read:</b> {0.008 * words}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;

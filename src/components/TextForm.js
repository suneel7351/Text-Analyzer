import React, { useState } from "react";

function TextForm() {
  const [text, settext] = useState("");
  const upperCase = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };
  const capitalize = () => {
    const replaceText = (text) => {
      return text.toUpperCase();
    };
    let newText = text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, replaceText);
    settext(newText);
  };
  const clearText = () => {
    settext(" ");
  };
  const copyText = () => {
    let text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const extraSpaces = () => {
    settext(text.replace(/ \s\s+/g, " "));
  };
  const onChange = (e) => {
    settext(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="container ">
              <div className="card">
                <div className="card-header">
                  <h3>
                    <span>
                      {
                        text
                          .replace(/\s\s+/g, " ")
                          .trim()
                          .split(" ")
                          .filter((element) => {
                            return element.length !== 0;
                          }).length
                      }
                    </span>
                    &nbsp;Words and <span>{text.length}</span>&nbsp;characters
                  </h3>
                </div>
              </div>
            </div>
            <div className="container inputArea mt-3 mb-3">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="textArea"
                  value={text}
                  onChange={onChange}
                  placeholder="Leave a comment here"
                ></textarea>
              </div>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={upperCase}
              >
                Convert to uppercase
              </button>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={lowerCase}
              >
                Convert to lowercase
              </button>
              <button
                className="btn btn-primary btn-sm m-2 "
                onClick={capitalize}
              >
                Capitalize
              </button>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={clearText}
              >
                Clear
              </button>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={extraSpaces}
              >
                Remove Extra spaces
              </button>
              <button className="btn btn-primary btn-sm m-2" onClick={copyText}>
                Copy to clipboard
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <div class="card">
                <h4 className="p-3">Advance Details</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Words{" "}
                    <span className="badge ">
                      {
                        text
                          .replace(/\s\s+/g, " ")
                          .trim()
                          .split(" ")
                          .filter((element) => {
                            return element.length !== 0;
                          }).length
                      }
                    </span>
                  </li>
                  <li className="list-group-item">
                    Characters <span className="badge ">{text.length}</span>
                  </li>
                  <li className="list-group-item">
                    Sentences{" "}
                    <span className="badge ">
                      {
                        text
                          .replace(/[.?!]\s*(?=[A-Z])/g, "$|")
                          .split("|")
                          .filter((e) => {
                            return e.length !== 0;
                          }).length
                      }
                    </span>
                  </li>
                  <li className="list-group-item">
                    Paragraphs <span className="badge "></span>
                  </li>
                  <li className="list-group-item">
                    Reading Time
                    <span className="badge  ms-2">
                      {Math.round(0.24 * text.split(" ").length)} sec
                    </span>
                    <span className="badge ms-2" id="readingTime">
                      ?
                    </span>
                  </li>
                  <li className="list-group-item">
                    Speaking Time{" "}
                    <span className="badge">
                      {Math.round(0.34 * text.split(" ").length)} sec
                    </span>
                    <span className="badge ms-2" id="speakingTime">
                      ?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;

import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('enter text');

  const handleOnClick1 = () => {
    let newText = text.toUpperCase();
    console.log("Upper case is clicked" + newText);
    setText(newText);
    props.showalert("UpperCase is enable Now","success")
  }

  const handleOnClick2 = () => {
    let newText = text.toLowerCase();
    console.log("Lower case is clicked" + newText);
    setText(newText);
    props.showalert("LowerCase is enable Now","success")
  }

  const handleOnClear = () => {
    let newText = ("");
    console.log("Lower case is clicked" + newText);
    setText(newText);
    props.showalert(" All message is clear Now","success")
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }

  return (
    <>
      <div className="container"style ={{color:props.mode==='light'?'black':'white'}}>
        <h1 className= "my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='light'?'white':'grey' ,color:props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-8" onClick={handleOnClick1}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-2 my-8" onClick={handleOnClick2}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-2 my-8" onClick={handleOnClear}>Clear Text</button>
      </div>

      <div className="container my-3"style ={{color:props.mode==='light'?'black':'white'}}>
        <h1>Text Summary-</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
        <h2> Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

import { func } from 'prop-types';
import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");
    function handleTextChange(event){
        setText(event.target.value);
    }

    function handleUpClick(){
        let newText = text.toUpperCase();
        setText(newText);
        props.alertFun("Changed to Upercase", "success")
    }

    function handleLowCLick(){
        let newText = text.toLowerCase();
        setText(newText);
        props.alertFun("Changed to Lowercase", "success")
    }

    function handleClearClick(){
        setText("");
        props.alertFun("Cleared to Text", "success")
    }

    function handleCapClick(){
        let textArray = text.split(" ");
        let newTextArray = textArray.map((x) => {return x.charAt(0).toUpperCase()+x.slice(1)});
        let newText = newTextArray.join(" ");
        setText(newText);
        props.alertFun("Changed to Capitalized", "success")
    }

    function handleInClick(){
        let textArray = text.toUpperCase().split(" ");
        let newTextArray = textArray.map((x) => {return x.charAt(0).toLowerCase()+x.slice(1)});
        let newText = newTextArray.join(" ");
        setText(newText);
        props.alertFun("Changed to Inverse Capilatized", "success")
    }

    function handleCopy(){
        document.getElementById("Text").select()
        navigator.clipboard.writeText(text);
        props.alertFun("Text Copied", "success")
    }

    function removeExtraSpaces(){
        setText(text.split(/[ ]+/).join(" "));
        props.alertFun("Removed Extra Spaces", "success")
    }

  return (
    <>
        <h1>Enter the Text to Analysis Here</h1>
        <div className="mb-3 my-3">
            <textarea style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} className="form-control" onChange={handleTextChange} id="Text" rows="8" value={text} placeholder='Enter you text here'></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UPPERCASE</button>
        <button onClick={handleLowCLick} className="btn btn-success mx-2">Convert to LOWERCASE</button>
        <button onClick={handleClearClick} className="btn btn-danger mx-2">Clear Text</button>
        <button className="btn btn-secondary mx-2" onClick={handleCapClick}>Convert to Capitalize</button>
        <button onClick={handleInClick} className="btn btn-secondary mx-2">Convert to Inverse</button>
        <button onClick={handleCopy} className="btn btn-warning mx-2">Copy Text</button>
        <button onClick={removeExtraSpaces} className="btn btn-info mx-2">Remove Extra Spaces</button>
        <div className="container my-5">
            <h3 className='my-3'>Youe Text Summary</h3>
            <p>{text === ""? 0 : text.split(" ").length} words and {text.length} characters.</p>
            <p>{(text === "")?0:text.split(" ").length * 0.008} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Enter Something to Preview it here'}</p>
        </div>
    </>
  )
}

export default TextForm

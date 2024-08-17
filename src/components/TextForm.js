import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("Button Was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "sucess")
    }
    const handleLoClick = () => {
        console.log("Button Was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "sucess")
    }
    const handleClear = () => {
        // console.log("Button Was Clicked" + text)
        let newText = " ";
        setText(newText)
        props.showAlert("All text Cleared", "sucess")

    }

    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to the ClipBoard", "sucess")
        
    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All Extra Spaces have been Removed!", "sucess")

    }
    const handleOnChange = (event) => {
        console.log("Button on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'White':'black'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>    
        <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'White', color: props.mode==='dark'?'White':'black' }} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Change into UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Change into LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpace} >Remove Extra Space </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'White':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>Will be read in {0.008 * text.split("").length} Mins.</p>

    </div>
    </>
  )
}


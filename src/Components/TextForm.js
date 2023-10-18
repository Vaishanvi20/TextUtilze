import React, {useState} from "react";

export default function TextForm(props){
    const handleUpperCase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase","success");
    }
    const handleLowerCase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase","success");
    }
    const handleReverse = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reverse The Text","success");
    }
   
    const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    document.execCommand("copy"); // Copy the selected text
    props.showAlert("Copied to clipboard", "success");
    };

    const handleExtraSpace =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removing the extra space","success");
    }
       
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text, setText]= useState('Enter Text Here'); //text is a text
    //test="new test"; --- its is wrong way to change the useState
    //setText("new text");  // it is right way to chage text
    return(
       <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'#13466e'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
           
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary btn-block" onClick={handleExtraSpace}>RemoveExtraSpace</button>    
        </div>
        {/* <div className="container my-5 " style={{color:props.mode === 'dark'?'white':'dark'}}> */}
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summery</h3>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>

       </>
        
    )
}
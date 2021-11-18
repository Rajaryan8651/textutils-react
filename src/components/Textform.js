import React, {useState} from 'react'

export default function Textform(props) {
    const handleupClick =()=>{
        //   console.log("uppercase was Clicked");
          let newtext=text.toUpperCase();
          setText(newtext);
          props.showAlert("converted to upper case!","success");
        }
        const handledownClick =()=>{
            //   console.log("uppercase was Clicked");
            let newtext=text.toLowerCase();
            setText(newtext)
            props.showAlert("converted to Lower case!","success");
        }
        const handleclearClick =()=>{
            //   console.log("uppercase was Clicked");
            let newtext='';
            setText(newtext)
            props.showAlert("text cleared!","success");
        }
        const handleOnchange =(event)=>{
            //   console.log("uppercase was Clicked");
            setText(event.target.value)
        }
        const handleCopy = () =>{
            var text =document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("copied to clipboard!","success");
        }
        const handleExtraSpaces= () =>{
            let  newText =text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra space cleared!","success");
        
    }
     const [text,setText] = useState('');
    return (
        <>
        <div className ="container" style={{color:props.mode===`dark`?`white`:`black`}}>
                    <div className="mb-3" >
                        <h1 >{props.heading}</h1>
                        <textarea className="form-control" value={text} onChange ={handleOnchange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
                    </div>
                
                    <button  className="btn btn-outline-success mx-2"  onClick={handleupClick} >Convert to uppercase</button>
                    <button  className="btn btn-outline-success mx-2"  onClick={handledownClick} >Convert to lowercase</button>
                    <button  className="btn btn-outline-success mx-2"  onClick={handleclearClick} >Clear text</button>
                    <button  className="btn btn-outline-success mx-2"  onClick={handleCopy} >Copy text</button>
                    <button  className="btn btn-outline-success mx-2"  onClick={handleExtraSpaces} >Clear spaces</button>
        </div> 
                <div className="container my-3 "style={{color:props.mode===`dark`?`white`:`black`}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} character</p>
                    <p>{0.008 * text.split(" ").length} minute read</p>
                    <p>Preview</p>
                    <p>{text.length>0?text:"enter your text to preview here"}</p>
                </div>
        </>
    )
}

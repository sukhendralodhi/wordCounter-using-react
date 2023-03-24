import React, { useState } from 'react';

const Myform = (props) => {

  const handleUpcliked = () => {
    // console.log("Button Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLocliked = () => {
    // console.log("Button Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const onchnageHandler = (event) => {
    // console.log('Onchange run');
    setText(event.currentTarget.value);
  }

  const [text, setText] = useState("Enter your text here...");
  return (
    <>
      <div>
        <div className='my-2 px-2'>
          <h1 className='text-2xl py-2 font-bold'>{props.heading}</h1>
          <textarea name="" value={text} onChange={onchnageHandler} id="" cols="30" rows="10" className='border-2 border-blue-400 w-full px-2 rounded'></textarea>
        </div>
        <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1 my-1' onClick={handleUpcliked}>ConvertToUppercase</button>
        <button className='bg-blue-400 text-white px-4 py-1 rounded mx-1 my-1' onClick={handleLocliked}>ConvertToLowercase</button>
      </div>
      <div>
        <h1 className='text-xl font-bold'>Your text sammary</h1>
        <p className='text-base'>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <p>Preview: {text}</p>
      </div>
    </>
  );
}

export default Myform;
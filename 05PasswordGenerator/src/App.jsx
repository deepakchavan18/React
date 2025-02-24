/* eslint-disable no-unused-vars */

import { useState, useCallback , useEffect , useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  // useRef Hook -> To Copy the Password to the Clipboard
  const passwordRef = useRef(null)


  //Password Generator 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    
    if (charAllowed) str += "!@#$%^&*()_+-={}:<>?/";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = pass + str.charAt(char); //The character at that index in str is extracted using str.charAt(char) and appended to pass
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  
  //To Copy the Password to the Clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])


  //useEffect
  useEffect(() => {
    passwordGenerator();
  } , [length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
      <div className="w-full p-9 max-w-lg mx-auto shadow-2xl rounded-lg px-5 my-40 text-orange-500 bg-gray-800 ">
      <h2 className="text-4xl text-white text-center pb-7 my-3 font-semibold animate-reveal">
          Password Generator
      </h2>

        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard} 
          className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 font-semibold hover:bg-blue-700 hover:font-bold active:scale-95 transition-all duration-200 ease-in-out"
          >Copy</button>
        </div> 
        
        {/* Range  */}
        <div className="flex text-sm gap-x-5 pt-3 ">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className="ml-2.5 cursor-pointer"
            onChange={(e) =>{
                setLength(e.target.value)
            }}
            />
            <label className="text-base font-semibold pl-3">Length : {length}</label>
          </div>
          
          {/* Number Allowed Checkbox */}
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=> {
                setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput" className="text-base font-semibold">Numbers</label>
          </div>

          {/* Character Allowed Checkbox */}
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=> {
                setCharAllowed((prev)=> !charAllowed)
            }}
            />
            <label htmlFor="characterInput" className="text-base font-semibold">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

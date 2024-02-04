import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [lengthState, setLengthState] = useState(8);
  const [numberState, setNumberState] = useState(false);
  console.log(numberState)
  const [characterState, setCharacterState] = useState(false);
  console.log(characterState,)
  const [passwordState, setPasswordState] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let specialChar = "@!#$%*&}[]{/?><";

   if(numberState) string += number;
   if(characterState) string += specialChar
    for (let i = 0; i < lengthState; i++) {
      let randomNumber = Math.floor(Math.random() * string.length + 1);

      password += string.charAt(randomNumber);
    }

    setPasswordState(password);
  }, [lengthState, numberState, characterState, passwordState]);

  useEffect(() => {
    passwordGenerator();
  }, [lengthState, numberState, characterState]);
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <input type="text" value={passwordState} readOnly />
      <label style={{color:"white"}}>{lengthState}</label>
      <input
        type="range"
        value={lengthState}
        min={6}
        max={60}
        onChange={(e) => setLengthState(e.target.value)}
      />
      <input type="checkbox" onClick={() => setNumberState((prev)=>!prev)} />
      <input type="checkbox" onClick={() => setCharacterState((prev=>!prev))} />
    </>
  );
}

export default App;

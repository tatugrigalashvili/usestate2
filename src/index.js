import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import beach from "./image/beach.jpg";

function App() {
  const [cvladi, setCvladi] = useState(false);

  const click = () => {
    if (cvladi === false) {
      setCvladi(true);  
    } else {
      setCvladi(false); 
    }
  };

  let buttonText;

  if (cvladi) {
    buttonText = "Hide Image";
  } else {
    buttonText = "Show Image";
  }

  return (
    <React.Fragment>
      <button onClick={click}> {buttonText} </button>

      {cvladi && ( 
        <img src={beach} width={300} height={300} />
      )}
    </React.Fragment>
  );
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

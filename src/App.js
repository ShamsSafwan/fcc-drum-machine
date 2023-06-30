/* eslint-disable no-unused-vars */
import './App.css';
import { useState,useEffect } from "react";
function App() {
  const [text,setText]= useState("wait for it....")
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const data=[
    {
      "id": 1,
      "key": "Q",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      "text": "Heater 1"
    },
    {
      "id": 2,
      "key": "W",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      "text": "Heater 2"
    },
    {
      "id": 3,
      "key": "E",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      "text": "Heater 3"
    },
    {
      "id": 4,
      "key": "A",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      "text": "Heater 4"
    },
    {
      "id": 5,
      "key": "S",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      "text": "Clap"
    },
    {
      "id":6,
      "key": "D",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      "text": "Open-HH"
    },
    {
      "id": 7,
      "key": "Z",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      "text": "Kick-n'-Hat"
    },
    {
      "id": 8,
      "key": "X",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      "text": "Kick"
    },
    {
      "id": 9,
      "key": "C",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      "text": "Closed-HH"
    }
  ]
  const handleButtonClick =(event)=> {
    const audioElement = event.target.querySelector("audio");
    
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      const buttonId = parseInt(event.target.id);
    const item = data.find((item) => item.id === buttonId);
    if (item) {
      const buttonText = item.text;
      setText(buttonText);
    }
    }
  };

  
  
  function handleKeyDown(event) {
    const key = event.key.toUpperCase();
    const sound = document.getElementById(key);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
        const item = data.find((item) => item.key === key);
        if (item) {
          setText(item.text);
        }
    }
  }

 

  return (
    <div id ="drum-machine" className="App">
     <h1 id ="intro">Online drum keyboard</h1>
     <div id="display">
      <h3>{text}</h3>
     {data.map(item => {
          return (
            <button className="drum-pad" id={item.id} key={item.id} onClick={handleButtonClick} >
              <audio className = "clip" id={item.key} src={item.source}></audio>
              <h1>{item.key}</h1>
            </button>
          );
        })
      }
     </div>
    </div>
  );
}

export default App;

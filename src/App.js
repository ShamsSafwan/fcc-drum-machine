/* eslint-disable no-unused-vars */
import './App.css';

function App() {
  const data=[
    {
      "id": 1,
      "key": "Q",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      "id": 2,
      "key": "W",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      "id": 3,
      "key": "E",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      "id": 4,
      "key": "A",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      "id": 5,
      "key": "S",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      "id":6,
      "key": "D",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      "id": 7,
      "key": "Z",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      "id": 8,
      "key": "X",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      "id": 9,
      "key": "C",
      "source": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ]
  const handleButtonClick =(event)=> {
    const audioElement = event.target.querySelector("audio");
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  };
  return (
    <div id ="drum-machine" className="App">
     <h1 id ="intro">Online drum keyboard</h1>
     <div id="display">
     {data.map(item => {
          return (
            <button className="drum-pad" id={item.id} key={item.id} onClick={handleButtonClick}>
              <audio className = "clip" id={item.key} src={item.source}></audio>
              <h1>{item.key}</h1>
            </button>
          );
        })}
     </div>
    </div>
  );
}

export default App;

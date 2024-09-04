import React, { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/popup.css";
import ScreenRecorder from "./screeRecoder";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://icanhazdadjoke.com/slack")
      .then((data) => data.json())
      .then((jokeData) => {
        const jokeText = jokeData.attachments[0].text;
        setData(jokeText);
      });
  }, []);
  // const startRecording = () => {
  //   chrome.runtime.sendMessage({ type: 'startRecording' });
  // };

  // const stopRecording = () => {
  //   chrome.runtime.sendMessage({ type: 'stopRecording' });
  // };
  return (
    <>
      <p>{data}</p>
      {/* <button onClick={startRecording}>Start Recording</button> */}
      {/* <button onClick={stopRecording}>Stop Recording</button> */}
          </>
  );
}

export default App;

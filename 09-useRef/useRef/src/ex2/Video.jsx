/*
    1. Create a new Vite React project

    2. Create an Video.jsx with an Video component
       that is exported

    3. Inside Video, return a <video> element with
       the src set to a video file you have locally
       (Check the vite documentation for how to import
        static asset urls)

    4. Make it so then when you move your mouse over the
       video it plays, and when your mouse leaves the
       video it pauses

    5. Replace the <App /> in main.jsx with your Video
       component and test that it works in your Browser

    HINT* Check out the <video> element on MDN
*/

import { useRef } from "react";
import monkeyVideo from './monkey.mp4';


function Video() {
    const videoRef=useRef(null)

    // function handleVideo(){
    //     videoref.current&&videoref.current.play()
    // }
    function handleMouseEnter() {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    
      function handleMouseLeave() {
        if (videoRef.current) {
          // Pause and optionally reset to the beginning
          videoRef.current.pause();
        //   videoRef.current.currentTime = 0; 
       
        }
    }

  return (
    <>
      <h1>Monkey Video</h1>
      <video ref={videoRef} src={monkeyVideo} tabIndex="0" controls width="600" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </>
  );
}

export default Video;

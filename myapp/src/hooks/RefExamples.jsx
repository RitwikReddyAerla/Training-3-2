import React, { useRef , useEffect, useState } from 'react'
import VIDEO from './water.mp4'

const Refexamples = () => {
    const eleref = useRef();
    // console.log(eleref);
    // useEffect(()=>{
    //     eleref.current.style.color="red";
    // },[]);
    const[play, setPlay] = useState(true);
    let videoRef = useRef();
    console.log(videoRef);
    let playORPause = () => {
        console.log("clicked");
        if(play == true){
            videoRef.current.play();
            setPlay(false);
            console.log(play);
        }else{
            videoRef.current.pause();
            setPlay(true);
            console.log(play);
        }
    }
    return (
        <div>
            {/* <h1 ref={eleref}>Refexamples</h1> */}
            {/* <video src='VIDEO' ref={videoRef} onClick={playORPause}></video> */}
            <video src={VIDEO} ref={videoRef} onClick={playORPause} ></video>
        </div>
    )
}

export default Refexamples
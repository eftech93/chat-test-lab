import { useEffect, useState } from "react";

export default function useMediaCapture(startVideoRecording){
    const [mediaStream, setMediaStream] = useState(null);

    const contraints ={
        //audio: true,
        video: { width: 1200, height: 720 } //we should allows this to be injected
    };

    useEffect(()=>{
        if(startVideoRecording === false){
            return;
        }
        navigator.mediaDevices.getUserMedia(contraints)
            .then()

    }, [startVideoRecording]);
    return [mediaStream]
}
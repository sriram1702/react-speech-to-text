import { useEffect } from "react";
import SpeechRecognition ,{useSpeechRecognition}from "react-speech-recognition";

import { punctuate } from "punctuator";


function SpeechtoText() {
    const {transcript,resetTranscript}=useSpeechRecognition()
useEffect(()=>{
    SpeechRecognition.startListening({continuous:true})
    console.log('listening starts')
},[])
return(
    <div>
<form>
   
<div>{punctuate(transcript)}</div>
<button onClick={resetTranscript}>clear text</button>
<button onClick={()=>{
        SpeechRecognition.stopListening()
        console.log('listening stops ')

}}>stop listen
</button>
</form>
    </div>
)
}
export default SpeechtoText
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";
import React, { useState } from "react";

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

export default function CharacterCounter({minWords, maxWords, targetReadingTime}: CharacterCounterProps) {
    const [userText, setUserText] = useState("")
    const handleTextChange = (newText: string) => {
        setUserText(newText)
    }
    const characterCount = userText.length
    const wordCount = userText.trim() === '' ? 0 : userText.trim().split(' ').length
    const readingTime = Math.ceil(wordCount / 200)
    
    const stats = {
        characterCount,
        wordCount,
        readingTime
    }
    
    return (
    <>

      <div>
      <h1></h1>
      <TextInput 
      onTextChange= {handleTextChange}
      placeholder="What's happening...."
      initialValue=''>
      </TextInput>
      <p>You typed: {userText}</p>
      </div>
      <StatsDisplay
      stats={stats}
      showReadingTime={true}
      /> 
    


    <div>
        {minWords &&  <p>You must type at least {minWords}</p>}
        {maxWords && <p> {maxWords} word maximun</p>}
        {targetReadingTime && <p>Target: {targetReadingTime} minutes</p>}

    </div>
    </>
    )
}
import { useState } from 'react'
import TextInput from './components/TextInput/TextInput'
import './App.css'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'

function App() {
  const [userText, setUserText] = useState("")
  const handleTextChange = (newText:string) => {
    setUserText(newText)
  }
  const characterCount = userText.length
  const wordCount = userText.trim() === '' ? 0: userText.trim().split(' ').length
  const readingTime = Math.ceil(wordCount / 200)
  const stats = {characterCount, wordCount, readingTime}  
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
    </>
  )
}

export default App

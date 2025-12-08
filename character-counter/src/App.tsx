import { useState } from 'react'
import TextInput from './components/TextInput/TextInput'
import './App.css'

function App() {
  const [userText, setuserText] = useState("")
  const handleTextChange = (newText:string) => {
    setuserText(newText)
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
    </>
  )
}

export default App

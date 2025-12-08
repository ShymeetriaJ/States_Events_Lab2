import { useState } from 'react'
import TextInput from './components/TextInput/TextInput'
import './App.css'

function App() {
  const [userText, setuserText] = useState(0)
  const handleTextChange = (newText:string) => {
    setuserText(newText)
  }
  return (
    <>
      <div></div>
      <h1></h1>
      <TextInput text={text}
      onTextChange= {handleTextChange}>
      </TextInput>
       
    </>
  )
}

export default App

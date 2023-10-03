import { useState } from 'react';
import Square from './Components/Square';
import Input from './Components/Input';

const App = () => {
  const [colorValue, setColorValue] = useState("")
  const [isDarkText, setIsDarkText] = useState(false)

  return (
    <>
      <Square 
        colorValue={colorValue} 
        isDarkText={isDarkText}
      />
      <Input 
        colorValue={colorValue} 
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </>
  )
}

export default App
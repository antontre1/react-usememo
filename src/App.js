import { useMemo, useState } from "react"

function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    // ensure the value is returned
    return slowFunction(number)
  }, [number] )
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }


  return (
    <div className="App">
      <h1>My Full Page</h1>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )

}

function slowFunction(num) {
  console.log('calling Slow Function')
  for (let i = 0; i < 1000000000*0.2; i++) {}
  return num + 2
}

export default App

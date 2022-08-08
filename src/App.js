import { useEffect, useMemo, useState } from "react"

function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    // ensure the value is returned
    return slowFunction(number)
  }, [number] )

  // so now, when we add useMemo for the themeStyle with 'dark' as a dependency value
  // thanks to this themeStyles is updated only when dark change
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  // useEffect is called each time, because the 'dependency' added here [themeStyles] is considering the value as updated because it's actually
  // a new value that has been given. It's not the same object, even with the same values, the references are not the same in memory
  // so it's considered new ! and useEffect is triggered
  useEffect(() => {
    console.log('Theme has Changed')
  }, [themeStyles])


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
  for (let i = 0; i < 1000000000; i++) {}
  return num + 2
}

export default App

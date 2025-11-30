import { useEffect, useState, } from "react"
import Background from "./Background"
import Terminal from "./Terminal/Terminal"
import Pagecontainer from "./Pages/Pagecontainer"
import BootScreen from "./BootScreen"

const loadtimeSeconds = 3

function App() {
  const [focus, setFocus] = useState<boolean>(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, loadtimeSeconds * 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <>
      {loading ? <BootScreen></BootScreen> :
        <>
          <Background></Background>
          <Terminal setFocus={setFocus} focus={focus}></Terminal>
          <Pagecontainer setFocus={setFocus}></Pagecontainer>
        </>
      }
    </>
  )
}
export default App

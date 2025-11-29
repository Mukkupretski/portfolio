import { useRef, useState } from "react"
import Background from "./Background"
import Terminal from "./Terminal/Terminal"
import Pagecontainer from "./Pages/Pagecontainer"
import Kemisti from "./Pages/Kemisti"

function App() {
  const ref = useRef<HTMLDialogElement | null>(null)
  const [focus, setFocus] = useState<boolean>(true)
  return (
    <>
      <Background></Background>
      <Terminal setFocus={setFocus} focus={focus}></Terminal>
      <button onClick={() => {
        ref.current?.showModal()
        setFocus(false)
      }}>Showmodal</button>
      <Pagecontainer setFocus={setFocus} ref={ref} page={<Kemisti></Kemisti>}></Pagecontainer>
    </>
  )
}

export default App

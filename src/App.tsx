import { useEffect, useRef, useState, } from "react"
import Background from "./Background"
import Terminal from "./Terminal/Terminal"
import Pagecontainer from "./Pages/Pagecontainer"
import { useDialog } from "./DialogContext"

function App() {
  const { value } = useDialog()
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [focus, setFocus] = useState<boolean>(true)
  useEffect(() => {
    if (!value) return;
    dialogRef.current?.showModal()
  }, [value])
  return (
    <>
      <Background></Background>
      <Terminal setFocus={setFocus} focus={focus}></Terminal>
      <Pagecontainer setFocus={setFocus} ref={dialogRef} page={value}></Pagecontainer>
    </>
  )
}
export default App

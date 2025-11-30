import { useDialog } from "../DialogContext";
import "./Pages.css"
import { useEffect, useRef } from "react";

export default function Pagecontainer(props: { setFocus: (val: boolean) => void }) {
  const ref = useRef<HTMLDialogElement | null>(null)
  const { value, setValue } = useDialog()
  useEffect(() => {
    if (!value) return;
    ref.current?.showModal()
  }, [value])
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key != "q") return;
      ref.current?.close()
    }
    const focusListener = () => {
      props.setFocus(true)
      setValue(null)
    }
    ref.current?.addEventListener("close", focusListener)
    document.addEventListener("keydown", listener)
    return () => {
      document.removeEventListener("keydown", listener)
      ref.current?.removeEventListener("close", focusListener)
    }
  }, [])
  return <dialog ref={ref} style={{
    position: "fixed",
    width: "80vw",
    height: "80vh",
    padding: "0",
    border: "1px solid var(--thin-border)",
    background: "none",
    color: "white"
  }}>{value}<div style={{
    position: "fixed",
    bottom: "15px",
    left: "15px",
    color: "white"

  }}>Paina <b>q</b> sulkeaksesi</div></dialog>
}

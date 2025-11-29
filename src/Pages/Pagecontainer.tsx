import { useEffect, type ReactNode } from "react";

export default function Pagecontainer(props: { page: ReactNode, ref: React.RefObject<HTMLDialogElement | null>, setFocus: (val: boolean) => void }) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key != "q") return;
      props.ref.current?.close()
    }
    const focusListener = () => {
      props.setFocus(true)
    }
    props.ref.current?.addEventListener("close", focusListener)
    document.addEventListener("keydown", listener)
    return () => {
      document.removeEventListener("keydown", listener)
      props.ref.current?.removeEventListener("close", focusListener)
    }
  }, [])
  return <dialog ref={props.ref} style={{
    position: "fixed",
    width: "80vw",
    height: "80vh",
    padding: "0",
    border: "1px solid var(--thin-border)",
    background: "none"
  }}>{props.page}<div style={{
    position: "absolute",
    bottom: "15px",
    left: "15px",
    color: "white"

  }}>Paina <b>q</b> sulkeaksesi</div></dialog>
}

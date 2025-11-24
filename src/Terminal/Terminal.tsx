import { useEffect, useState, type Dispatch, type ReactNode } from "react"
import "./Terminal.css"
import { GetRes } from "./Commands";

export default function Terminal() {
  const [content, setContent] = useState<ReactNode[]>([]);
  const [canType, setCanType] = useState<boolean>(false)
  useEffect(() => {
    setContent([<InitTerminal setCanType={setCanType}></InitTerminal>])
  }, [])
  return <div id="terminal">{content}{canType ? <Cmdline addToContent={(v: ReactNode) => {
    setContent(cnt => [...cnt, v])
  }}></Cmdline> : <></>}</div>
}

function CommandEnter(cmd: string, setCmd: (v: string) => void, addToContent: (node: ReactNode) => void) {
  const res = GetRes(cmd)
  addToContent(res)
  setCmd("")
}

function Cmdline({ addToContent }: { addToContent: (node: ReactNode) => void }) {
  const [cmd, setCmd] = useState<string>("");
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key != "Enter") return;
      CommandEnter(cmd, setCmd, addToContent)
    }
    document.addEventListener("keydown", listener)
    return () => {
      document.removeEventListener("keydown", listener)
    }
  }, [cmd, setCmd, addToContent])
  return <div><p style={{ margin: "0px", color: "var(--pink)" }}>/root</p><div style={{ fontWeight: "600", fontSize: "16px", color: "var(--light)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}><div style={{ position: "relative", top: "1px", marginRight: "8px" }}>{">"}</div><input value={cmd} onChange={(e) => {
    setCmd(e.target.value)
  }} id="cmdline" type="text"></input></div></div>
}

const initSequence = ["Ladataan järjestelmää", "Ladataan ohjelmia", "Käännetään matriiseja", "Silitetään pingviinejä", "Käytetään Arch Linuxia"]

// TODO: WASTE THEIR TIME AND MAKE THEM WAIT BY COMMENTING THE EARLY RETURN STATEMENT
function sleep(s: number) {
  return;
  return new Promise(resolve => setTimeout(resolve, 1000 * s));
}

function InitTerminal({ setCanType }: { setCanType: (val: boolean) => void }) {
  const [content, setContent] = useState<ReactNode[]>([]);
  useEffect(() => {
    (async () => {
      setContent([<div style={{ fontWeight: 700, marginBottom: "30px" }}>MikkoOS 6.4</div>, <div></div>])
      await sleep(2)
      for (let j = 0; j < initSequence.length; j++) {
        const v = initSequence[j]
        setContent(cnt => [...cnt, <div>{v}</div>])
        let str: string = v;
        for (let i = 1; i <= 3; i++) {
          str += '.'
          await sleep(0.2)
          setContent(cnt => cnt.map((_, i) => {
            if (i < cnt.length - 1) return _;
            return <div>{str}</div>
          }))
          await sleep(0.3)
        }
        await sleep(0.5)
        let final: string = "Valmis"
        if (v == "Käytetään Arch Linuxia") final = "BTW"
        setContent(cnt => [...cnt, <div style={{ color: "var(--green)" }}>{final}</div>])
        await sleep(1)
      }
      setContent(cnt => [...cnt, <div style={{
        marginTop: "40px",
        marginBottom: "40px",
        gridColumn: "span 2"
      }}>Tervetuloa! Kirjoita “help” nähdäksesi saatavilla olevat komennot.</div>])
      await sleep(0.5)
      setCanType(true)
    })()
  }, [])
  return <div style={{
    display: "grid",
    gridTemplateColumns: "400px auto"
  }}>
    {content}
  </div>
}

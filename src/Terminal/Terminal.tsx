import { useEffect, useRef, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import "./Terminal.css"
import { autocomplete, GetRes } from "./Commands";

export default function Terminal() {
  const terminal = useRef<HTMLDivElement | null>(null)
  const [content, setContent] = useState<ReactNode[]>([]);
  const [canType, setCanType] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(true)
  useEffect(() => {
    setContent([<InitTerminal setCanType={setCanType}></InitTerminal>])
  }, [])
  return <div ref={terminal} id="terminal">{content}{canType ? <Cmdline terminal={terminal.current} focus={focus} setFocus={setFocus} addToContent={(v: ReactNode) => {
    setContent(cnt => [...cnt, v])
  }}></Cmdline> : <></>}</div>
}

function CommandEnter(cmd: string, setCmd: (v: string) => void, addToContent: (node: ReactNode) => void, terminal: HTMLDivElement | null) {
  const res = GetRes(cmd)
  addToContent(<p style={{ fontWeight: "600", fontSize: "16px", color: "var(--light)", margin: "0px" }}>{cmd}</p>)
  addToContent(res)
  addToContent(<br></br>)
  addToContent(<br></br>)
  setCmd("")
  setTimeout(() => {
    terminal?.scrollTo({ top: terminal?.scrollHeight })
  }, 0)
}

function Cmdline({ terminal, addToContent, focus, setFocus }: { terminal: HTMLDivElement | null, setFocus: Dispatch<SetStateAction<boolean>>, focus: boolean, addToContent: (node: ReactNode) => void }) {
  const [cmd, setCmd] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key != "Enter") return;
      const autocompleteSuggest = autocomplete(cmd)
      const cmdls = cmd.split(" ")
      if (autocompleteSuggest && autocompleteSuggest[0] != cmdls[cmdls.length - 1]) return;
      CommandEnter(cmd, setCmd, addToContent, terminal)
    }
    document.addEventListener("keydown", listener)
    return () => {
      document.removeEventListener("keydown", listener)
    }
  }, [cmd, setCmd, addToContent])
  useEffect(() => {
    if (focus) inputRef.current?.focus()
    else inputRef.current?.blur()
  }, [focus])
  return <div style={{ position: "relative" }}><p style={{ margin: "0px", color: "var(--pink)" }}>/root</p><div style={{ fontWeight: "600", fontSize: "16px", color: "var(--light)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}><div style={{ position: "relative", top: "1px", marginRight: "8px" }}>{">"}</div><input value={cmd} onChange={(e) => {
    setCmd(e.target.value)
  }} onFocus={(e) => {
    if (!focus) {
      setTimeout(() => {
        e.target.blur()
      }, 0)
    }
  }} onBlur={(e) => {
    if (focus) {
      setTimeout(() => {
        e.target.focus()
      }, 0)
    }
  }
  } id="cmdline" type="text" ref={inputRef}></input></div><Autocompletion v={cmd} setCmd={setCmd}></Autocompletion></div>
}

function Autocompletion({ v, setCmd }: { v: string, setCmd: Dispatch<SetStateAction<string>> }) {
  const options = autocomplete(v)
  const cmdlist = v.split(" ")
  const cmdIsOpt = (options && (cmdlist[cmdlist.length - 1] == options[0]))
  const [idx, setIdx] = useState<number>(0)
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const n = options?.length ?? 1;
      if (e.key == "ArrowDown") {
        setIdx(i => (i + 1) % n)
      } else if (e.key == "ArrowUp") {
        setIdx(i => (i + n - 1) % n)
      } else if (e.key == "Enter") {
        setCmd((cmd: string) => {
          const cmdls = cmd.split(" ")
          return cmdls.map((token, i) => {
            if (i != cmdls.length - 1 || !options) return token;
            return options[idx]
          }).join(" ")
        })
      }
    }
    document.addEventListener("keydown", listener)
    return () => {

      document.removeEventListener("keydown", listener)
    }
  }, [idx, options])
  useEffect(() => {
    if (idx < (options?.length ?? 1)) return;
    setIdx(0)
  }, [options, setIdx])
  return <>
    <div style={{ marginBottom: "5px", height: "1px", width: "100%", marginInline: "10px", backgroundColor: "var(--thin-border)", marginTop: "5px", }}></div>
    <div style={{
      height: "200px",
    }}>{options ? <> {(cmdIsOpt) ? <></> : <div>{
      options.map((opt, i) => {
        return <div style={{
          height: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
        }}><div style={{ height: "100%", width: "6px", backgroundColor: i == idx ? "var(--red)" : "var(--gray)" }}></div>
          <div style={{ paddingLeft: "3px", height: "100%", background: i == idx ? "var(--gray)" : "none" }}>{opt}</div>
        </div>
      })
    }
    </div>} </>
      : <p style={{ color: "var(--red)" }}> Ei vastaavuuksia</p >
      }
    </div>
  </>
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

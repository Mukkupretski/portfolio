import { useDialog } from "../DialogContext";
import { projects } from "../Terminal/Commands";


export default function Valinta() {
  const { setValue } = useDialog()
  return <div style={{
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 6, 32, 0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "30px",
    overflowY: "scroll",
    gap: "80px"
  }}>
    <h3>Koodausprojektini</h3>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "60vw", gap: "100px" }}>{projects.map(p => {
      return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        padding: "10px"
      }} className="hover-blue" onClick={() => {
        setValue(p.page)
      }}>
        <img style={{ width: "100%", objectFit: "cover", aspectRatio: "16/9" }} src={p.thumbnail}></img>
        <h4>{p.name}</h4>
        <div>{p.desc}</div>
      </div>
    })}</div>
  </div>
}

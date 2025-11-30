
export default function BootScreen() {


  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: "0",
    padding: "0",
    flexDirection: "column",
    gap: "40px"
  }}>
    <img src="Logo.png"></img>
    <div className="rotate" style={{
      borderTop: "5px solid white",
      borderLeft: "3px solid white",
      width: "50px",
      height: "50px",
      borderRadius: "50%"
    }}></div >
  </div>
}

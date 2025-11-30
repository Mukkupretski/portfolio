const app = "https://hiippari-app.web.app"
const github = "https://github.com/Mukkupretski/hiippari-app"
const paragraph1 = "aaaaaa444444444444444444444444444444444444 4444444444444cheekycheekycheekycheekycheekycheekychee kycheekycheekycheekycheekycheekycheekyche ekycheekycheekycheekycheekycheekycheeky"
const paragraph2 = "aaaaaa444444444444444444444444444444444444 4444444444444cheekycheekycheekycheekycheekycheekychee kycheekycheekycheekycheekycheekycheekyche ekycheekycheekycheekycheekycheekycheeky"

export default function Hiippari() {
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
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60vw"
    }}>
      <h1 style={{
        fontSize: "48px"
      }}>Hiippari-reittihaku</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <a href={app} target="_blank" rel="noopener noreferrer" style={{
          textDecoration: "none",
          justifySelf: "flex-end",
          borderBottom: "2px solid white",
          width: "300px",
          height: "40px",
          gap: "30px"
        }} className="flex-row hover-blue">
          <div style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}>Appi verkossa</div>
          <img src="link.png"></img>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" style={{
          textDecoration: "none",
          justifySelf: "flex-end",
          borderBottom: "2px solid white",
          width: "300px",
          height: "40px",
          gap: "30px"
        }} className="flex-row hover-blue">
          <div style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}>Lähdekoodi</div>
          <img src="link.png"></img>
        </a>
      </div>
    </div>
    <div className="flex-row" style={{ gap: "40px", }}>
      <div>
        <b>Kun Mikko ei päässyt Töölöön</b>
        <div style={{ maxWidth: "30vw", }}>{paragraph1}</div>
      </div>
      <img src="hiippari1.png" style={{ width: "30%", height: "auto" }}></img>
    </div>
    <div className="flex-row" style={{ gap: "40px", marginBottom: "150px" }}>
      <img src="hiippari2.png" style={{ width: "30%", height: "auto" }}></img>
      <div>
        <b>Eteneminen ja haasteet</b>
        <div style={{ maxWidth: "30vw", }}>{paragraph2}</div>
      </div>
    </div>
  </div>
}

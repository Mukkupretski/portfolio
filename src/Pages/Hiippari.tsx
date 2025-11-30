const app = "https://hiippari-app.web.app"
const github = "https://github.com/Mukkupretski/hiippari-app"
const paragraph1 = "Hiipivä Haamu eli 'Hiippari' on päivän mittainen Helsingin partiolaisille suunnattu salapoliisi- ja kaupunkituntemuskilpailu. Kilpailun rastit ovat ympäri kaupunkia ja nopea eteneminen on tärkeää. Vuonna 2024 yksi rastiradan keskeisistä rasteista Töölössä jäi vierailematta, koska aika loppui kesken. Valitin tästä usein ja pitkään, ja niinpä minua kehotettiin ensi kerralla suunnittelemaan reitti. Tästä keksin itselleni hyvän koodausprojektin."
const paragraph2 = "Hiipivä Haamu järjestetään aina marraskuun ensimmäisenä sunnuntaina. Aioin aloittaa projektin työstön jo elokuussa, mutta koska vielä ei ollut kiire, se ei juuri edennyt eikä lokakuun alussa ollut vielä juuri mitään kasassa. Tässä vaiheessa aloin keskittyä projektiin, mutta silti tuli kiire. Lopulta kisapäivänä tärkeitä ominaisuuksia kuten oman sijainnin valitseminen puuttui eikä sovelluksesta ollut hyötyä. Opin silti paljon ja olen tyytyväinen, mitä sain jo aikaan. Projekti on hyvin lähellä valmista ja mitä luultavimmin ensi kerralla käytössä."

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

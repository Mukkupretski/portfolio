const drivelink = "https://drive.google.com/drive/folders/1kDK6CQtRUltX4RvqrzM-sTBxWqAA0Ezy?usp=sharing"
const paragraph1 = "Orgaaninen kemia on lukiolaisen näkökulmasta sekavaa eikä noudata juurikaan säännönmukaisuuksia. Kemian opettajamme pelotteli meitä usein yliopiston orgaanisen kemian sisällöllä, joka on vielä haastavampaa. Kun kerran orgaaninen kemia on näin sekavaa, täytyy ainakin joidenkin orgaanisten kemistien olla lähes hullun tiedemiehen kaltaisia! Näin syntyi idea pelistä, jossa Orgaaninen Kemisti heittelee laboratorioonsa eksyviä heksaanihapolla."
const paragraph2 = "Peli oli heittämällä laajin koulumme peliohjelmointikurssilla tehty projekti ja kunnianhimoinen puolentoista kuukauden mittaiselle kurssille, kun muidenkin koulutöiden kanssa oli kiireitä. Saimme sen kuitenkin porukalla ajoissa valmiiksi. Opiskelin Unity-ohjelmointia varsin nopeatempoisesti ja jouduin moneen otteeseen uudelleenkirjoittamaan alussa kirjoittamaani koodia. Lopulta kehitys alkoi sujua joutuisammin ja lisäsin suuria ominaisuuksia vain muutamassa päivässä."

export default function Kemisti() {
  return <div style={{
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(43,255,0,0.69)",
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
      <img style={{
        justifySelf: "flex-start"
      }} src="Otsikko.png"></img>
      <a href={drivelink} target="_blank" rel="noopener noreferrer" style={{
        textDecoration: "none",
        justifySelf: "flex-end",
        borderBottom: "2px solid rgb(43,255,0)",
        width: "300px",
        height: "40px",
        gap: "30px"
      }} className="flex-row hover-green">
        <div style={{
          display: "flex",
          alignItems: "center",
          color: "rgb(43,255,0)",
          fontSize: "24px",
        }}>Katso esittely</div>
        <img src="Video.png"></img>
      </a>
    </div>
    <div className="flex-row" style={{ gap: "40px", }}>
      <div>
        <b>Opettajan tarinoista videopeliksi</b>
        <div style={{ maxWidth: "30vw", }}>{paragraph1}</div>
      </div>
      <img src="kemisti2.png" style={{ width: "30%", height: "auto" }}></img>
    </div>
    <div className="flex-row" style={{ gap: "40px", marginBottom: "150px" }}>
      <img src="kemisti1.png" style={{ width: "30%", height: "auto" }}></img>
      <div>
        <b>Pelin kehittäminen</b>
        <div style={{ maxWidth: "30vw", }}>{paragraph2}</div>
      </div>
    </div>
  </div>
}

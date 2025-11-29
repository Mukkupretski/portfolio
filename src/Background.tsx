import { useEffect, useState } from "react"

const imglist = ["bkg.jpg"]
const secondsBetweenChange = 10

export default function Background() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => (i + 1) % imglist.length)
    }, secondsBetweenChange * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <img id="background" src={imglist[idx]}></img>
}

import { useEffect, useState } from "react"

const imglist = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "6.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",]
const secondsBetweenChange = 10

export default function Background() {
  const [fadingOut, setFadingOut] = useState(false)
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadingOut(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % imglist.length)
        setFadingOut(false)
      }, 500)
    }, secondsBetweenChange * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <img id="background"
    className={fadingOut ? "bg-fade-out" : "bg-fade-in"}
    src={imglist[idx]}></img>
}

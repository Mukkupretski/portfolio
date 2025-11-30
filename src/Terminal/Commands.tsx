import { useContext, useEffect, type ReactNode } from "react";
import Hiippari from "../Pages/Hiippari";
import Kemisti from "../Pages/Kemisti";
import { useDialog } from "../DialogContext";
import Valinta from "../Pages/Valinta";

const IncorrectSyntax = () => {
  return <div style={{ color: "red" }}>Virheellinen syntaksi</div>
}
export type Command = {
  name: string;
  desc: string;
  param?: string[];
  res: ReactNode | ((param: string) => ReactNode);
  secret?: boolean;
}

export type Project = {
  name: string;
  page: ReactNode;
  thumbnail: string;
  desc: string;
}

export let projects: Project[] = [
  {
    name: "orgaaninenkemisti",
    page: <Kemisti></Kemisti>,
    thumbnail: "kemisti2.png",
    desc: "kun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktion"
  },
  {
    name: "hiippari-reittihaku",
    page: <Hiippari></Hiippari>,
    thumbnail: "hiippari1.png",
    desc: "kun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktionkun integroit sä funktion"
  }
]
const TrmLnk = (props: { to: string, text: string }) => {
  return <a target="_blank" rel="noopener noreferrer" className="trmlnk" href={props.to}>{props.text}</a>
}

const contestResults = [
  { pos: "7.", text: "Baltian tie -joukkuematematiikkakilpailu (kombinatoriikka, 15 p.)", link: "https://bw2025.lu.lv/competition/results/" },
  { pos: "Finaalipaikka", text: "Kipinä-tiedekilpailu", link: "https://www.tek.fi/fi/tietoa-tekista/palkinnot-ja-kilpailut/kipina-2025/kipina-palkitut-2025" },
  { pos: "23.", text: "Pohjoismainen matematiikkakilpailu 2025", link: "http://www.georgmohr.dk/nmcperm/res/2025.html" },
  { pos: "3.", text: "Lukion matematiikkakilpailun finaali 2025", link: "https://maol.fi/app/uploads/2025/01/Lukion-matematiikka-finaali-tulokset-2025.pdf" },
  { pos: "1.", text: "Lukion matematiikkakilpailun välisarja 2024", link: "https://maol.fi/app/uploads/2024/12/Matematiikka-valisarja-tulokset-2024.pdf" },
  { pos: "1.", text: "Lukion kemiakilpailun perussarja 2024", link: "https://maol.fi/app/uploads/2024/12/Kemia-perussarja-tulokset-2024.pdf" },
  { pos: "6.", text: "Lukion matematiikkakilpailun finaali 2024", link: "https://maol.fi/app/uploads/2024/01/Lukion-matematiikka-finaali-tulokset-2024.pdf" },
  { pos: "2.", text: "Lukion matematiikkakilpailun perussarja 2023", link: "https://maol.fi/app/uploads/2023/12/Matematiikka-perussarja-tulokset-2023.pdf" },
]


const ProjectRes = ({ projectName }: { projectName: string }) => {
  const res = projects.find(p => p.name === projectName);
  const { setValue } = useDialog();

  useEffect(() => {
    if (res) setValue(res.page);
  }, [res, setValue]);

  if (!res) return <IncorrectSyntax />;
  return <div>{projectName} avattu</div>;
};

const LsGRes = () => {
  const { setValue } = useDialog()
  useEffect(() => {
    setValue(<Valinta></Valinta>)
  }, [])
  return <div>Avataan visuaalinen valikko</div>
}

let cmds: Command[] = [
  {
    name: "help",
    desc: "Näyttää listan saatavilla olevista komennoista",
    res: <>
    </>,
  },
  {
    name: "whoami",
    desc: "Kertoo, millä käyttäjätunnuksella nykyinen käyttäjä on kirjautunut sisään ja käyttäjän perustiedot",
    res: <>
      <div>mikko_ylinen</div>
      <div>uid=0(root) gid=0(root) groups=0(root),2(bin),5(tty),6(disk)</div>
      <div>Ikä: 18 vuotta</div>
      <div>Koulu: Helsingin matematiikkalukio</div>
      <div>Kiinnostuksen kohteet: Matematiikka, koodaus</div>
      <div>Muut harrastukset: Partio</div>
    </>
  },
  {
    name: "ls",
    desc: "Listaa nykyisen käyttäjän ohjelmointiprojektit. Komennolla 'ls -g' näet graafisen valikon",
    param: ["-g"],
    res: (param: string) => {
      if (param == "-g") {
        return <LsGRes></LsGRes>
      }
      return <>
        {projects.map(p => <div>{p.name}/</div>)}
      </>
    }
  },
  {
    name: "links",
    desc: "Listaa nykyiseen käyttäjään liittyviä verkkolinkkejä",
    res: <>
      <TrmLnk text="Mukkupretski - GitHub" to="https://github.com/Mukkupretski"></TrmLnk>
      <br></br>
      <TrmLnk text="MukkuPretski - TryHackMe" to="https://tryhackme.com/p/MukkuPretski"></TrmLnk>
      <br></br>
      <TrmLnk text="MukkuPretski - Leetcode" to="https://leetcode.com/u/mukkupretski/"></TrmLnk>
    </>
  },
  {
    name: "contests",
    desc: "Näyttää tuloksia tiedekilpailuista, joihin nykyinen käyttäjä on osallistunut",
    res: <>
      <div style={{ "display": "grid", gridTemplateColumns: "200px 1fr", rowGap: "10px" }}>
        {contestResults.map(r => {
          return <><b>{r.pos}</b><TrmLnk text={r.text} to={r.link}></TrmLnk></>
        })}
      </div>
    </>
  },
  {
    name: "cd",
    desc: "Avaa nykyisen käyttäjän projektin. Käyttö: cd <projekti>. Näet vaihtoehdot komennolla ls",
    param: projects.map(p => p.name),
    res: (project: string) => {
      return <ProjectRes projectName={project}></ProjectRes>
    }
  },
  {
    name: "sudo",
    desc: "",
    secret: true,
    res: <>
      <div>sudo -l</div>
      <div>The user "Mikko" may run the following commands as sudo:</div>
      <p></p>
      <div>h4ck</div>
    </>
  },
  {
    name: "h4ck",
    desc: "",
    secret: true,
    res: <>
      <div>Access granted</div>
      <p></p>
      <div>:)</div>
    </>
  }
]


const HelpBody = () => {
  return <div style={{ "display": "grid", gridTemplateColumns: "100px 1fr", rowGap: "10px" }}>{cmds.map(cmd => {
    if (cmd.secret) return <></>
    return <><b>{cmd.name}</b><div>{cmd.desc}</div></>
  })}</div>
}

// make help work
cmds = cmds.map(cmd => {
  if (cmd.name != "help") return cmd
  return { ...cmd, res: <HelpBody></HelpBody> }
})

export function autocomplete(command: string): string[] | undefined {
  const spl = command.split(" ");
  // complete command
  let res;
  if (spl.length == 1) {
    res = cmds.filter(cmd => !cmd.secret && cmd.name.startsWith(command)).map(c => c.name)
  }
  // complete params
  else {
    const currCmd = cmds.find(cmd => cmd.name == spl[0]);
    if (!currCmd || !currCmd.param) return undefined;
    res = currCmd.param.filter(p => p.startsWith(spl[1]))
  }
  return (res.length == 0 ? undefined : res)
}

export function GetRes(command: string): ReactNode {
  const commandArgs = command.split(" ")
  const cmd = cmds.find(c => c.name == commandArgs[0])
  if (!cmd) return <IncorrectSyntax></IncorrectSyntax>
  if (cmd.param) {
    const par = commandArgs.length == 1 ? "" : commandArgs[1]
    return (cmd.res as (param: string) => ReactNode)(par)
  } else return (cmd.res as ReactNode)
}

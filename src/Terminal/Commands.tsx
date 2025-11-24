import type { ReactNode } from "react";

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
}

const projects: Project[] = [
  {
    name: "orgaaninenkemisti",
    page: <></>
  },
  {
    name: "hiippari-reittihaku",
    page: <></>
  }
]

const cmds: Command[] = [
  {
    name: "help",
    desc: "Näyttää listan saatavilla olevista komennoista",
    res: <>
      test
    </>,
  },
  {
    name: "whoami",
    desc: "Kertoo, millä käyttäjätunnuksella nykyinen käyttäjä on kirjautunut sisään ja käyttäjän perustiedot",
    res: <>

    </>
  },
  {
    name: "ls",
    desc: "Listaa nykyisen käyttäjän ohjelmointiprojektit. Komennolla 'ls -g' näet graafisen valikon",
    param: ["-g"],
    res: (param: string) => {

      return <>

      </>
    }
  },
  {
    name: "links",
    desc: "Listaa nykyiseen käyttäjään liittyviä verkkolinkkejä",
    res: <>

    </>
  },
  {
    name: "contests",
    desc: "Näyttää tuloksia tiedekilpailuista, joihin nykyinen käyttäjä on osallistunut",
    res: <>

    </>
  },
  {
    name: "cd",
    desc: "Avaa nykyisen käyttäjän projektin. Käyttö: cd <projekti>. Näet vaihtoehdot komennolla ls",
    param: projects.map(p => p.name),
    res: (project: string) => {
      return <></>
    }
  },
  {
    name: "education",
    desc: "Näyttää nykyisen käyttäjän tähänastisen koulutuksen",
    res: <>

    </>
  },
  {
    name: "sudo",
    desc: "",
    secret: true,
    res: <>
      <p>sudo -l</p>
      <p>The user "Mikko" may run the following commands as sudo:</p>
      <p></p>
      <p>h4ck</p>
    </>
  },
  {
    name: "h4ck",
    desc: "",
    secret: true,
    res: <>
      <p>Access granted</p>
      <p></p>
      <p>:)</p>
    </>
  }
]

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

const IncorrectSyntax = () => {
  return <div>Virheellinen syntaksi</div>
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

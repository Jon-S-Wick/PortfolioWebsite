import { Container } from "react-bootstrap";
import { Box, Card, Grid, Typography } from "@mui/material";
import type { ElementType } from "react";
import { FaDna, FaFlask, FaMicrosoft, FaTerminal } from "react-icons/fa";
import { GiDna1, GiDna2 } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import { SiImagej } from "react-icons/si";

import WB from "../docs/icons/WB.svg";
import PCR from "../docs/icons/electrophoresis-gel.svg";
import riparian from "../docs/icons/Riparian_plots.svg";

import bunIcon from "devicon/icons/bun/bun-original.svg";
import cIcon from "devicon/icons/c/c-original.svg";
import cppIcon from "devicon/icons/cplusplus/cplusplus-original.svg";
import javaIcon from "devicon/icons/java/java-original.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-original.svg";
import jupyterIcon from "devicon/icons/jupyter/jupyter-original.svg";
import linuxIcon from "devicon/icons/linux/linux-original.svg";
import mysqlIcon from "devicon/icons/mysql/mysql-original.svg";
import neovimIcon from "devicon/icons/neovim/neovim-original.svg";
import nixIcon from "devicon/icons/nixos/nixos-original.svg";
import pythonIcon from "devicon/icons/python/python-original.svg";
import rIcon from "devicon/icons/r/r-original.svg";
import reactIcon from "devicon/icons/react/react-original.svg";
import sshIcon from "devicon/icons/ssh/ssh-original.svg";

interface SkillItem {
  name: string;
  icon: string;
}

const BiologySkills: SkillItem[] = [
  { name: "Genomic Data Analysis", icon: riparian },
  { name: "Cell maintenance", icon: FaFlask },
  { name: "Cell culture", icon: MdBiotech },
  { name: "Western Blot", icon: WB },
  { name: "PCR", icon: PCR },
  { name: "Reverse Transcriptase PCR", icon: GiDna1 },
];

const Software: SkillItem[] = [
  { name: "Command Line Interface", icon: FaTerminal },
  { name: "Benchling", icon: FaDna },
  { name: "Microsoft Office/Libre Office", icon: FaMicrosoft },
  { name: "Jupyter Notebook", icon: jupyterIcon },
  { name: "Linux", icon: linuxIcon },
  { name: "NixOS", icon: nixIcon },
  { name: "ImageJ", icon: SiImagej },
  { name: "React", icon: reactIcon },
  { name: "bun", icon: bunIcon },
  { name: "Secure Shell (SSH)", icon: sshIcon },
  { name: "NeoVim", icon: neovimIcon },
  { name: "Snapgene", icon: GiDna2 },
];

const Programming: SkillItem[] = [
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "Nix", icon: nixIcon },
  { name: "R", icon: rIcon },
  { name: "C++", icon: cppIcon },
  { name: "C", icon: cIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "SQL", icon: mysqlIcon },
];

function SkillIcon({ icon, name }: SkillItem) {
  if (typeof icon === "string") {
    return (
      <Box
        component="img"
        src={icon}
        alt={name}
        sx={{ height: 120, width: 120, mb: 1 }}
      />
    );
  }
  const IconComponent = icon as ElementType;
  return (
    <Box
      sx={{
        height: 120,
        width: 120,
        mb: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconComponent size={80} />
    </Box>
  );
}

function SkillSection({ title, items }: { title: string; items: SkillItem[] }) {
  return (
    <Box
      sx={{
        padding: 5,
        display: "flex",
        bgcolor: "#2e3532",
        width: "80vw",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        mb: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
              }}
            >
              <SkillIcon icon={item.icon} name={item.name} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {item.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Skills() {
  return (
    <Container id="skills">
      <br />
      <SkillSection title="Biology Skills" items={BiologySkills} />
      <SkillSection title="Software" items={Software} />
      <SkillSection title="Programming Languages" items={Programming} />
    </Container>
  );
}

import { Container } from "react-bootstrap";
import { Box, Card, Grid, Tooltip, Typography } from "@mui/material";
import type { ElementType } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaDna, FaFlask, FaMicrosoft, FaTerminal } from "react-icons/fa";
import { GiDna1, GiTestTubes as GiTestTubeRack, GiWell } from "react-icons/gi";
import { SiImagej } from "react-icons/si";

import WB from "../docs/icons/WB.svg";
import PCR from "../docs/icons/electrophoresis-gel.svg";
import riparian from "../docs/icons/Riparian_plots.svg";
import snapgeneLogo from "../docs/icons/snapgene-logo.svg";

import bashIcon from "devicon/icons/bash/bash-original.svg";
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
  link?: string;
}

const BiologySkills: SkillItem[] = [
  { name: "Genomic Data Analysis", icon: riparian, link: "https://en.wikipedia.org/wiki/Genomics" },
  { name: "Cell maintenance", icon: GiTestTubeRack, link: "https://en.wikipedia.org/wiki/Cell_culture" },
  { name: "Cell culture", icon: GiWell, link: "https://en.wikipedia.org/wiki/Cell_culture" },
  { name: "Western Blot", icon: WB, link: "https://en.wikipedia.org/wiki/Western_blot" },
  { name: "PCR", icon: PCR, link: "https://en.wikipedia.org/wiki/Polymerase_chain_reaction" },
  { name: "Reverse Transcriptase PCR", icon: GiDna1, link: "https://en.wikipedia.org/wiki/Reverse_transcription_polymerase_chain_reaction" },
];

const Software: SkillItem[] = [
  { name: "Command Line Interface", icon: FaTerminal, link: "https://en.wikipedia.org/wiki/Command-line_interface" },
  { name: "Benchling", icon: FaDna, link: "https://www.benchling.com/" },
  { name: "Microsoft Office/Libre Office", icon: FaMicrosoft, link: "https://en.wikipedia.org/wiki/Microsoft_Office" },
  { name: "Jupyter Notebook", icon: jupyterIcon, link: "https://jupyter.org/" },
  { name: "Linux", icon: linuxIcon, link: "https://en.wikipedia.org/wiki/Linux" },
  { name: "NixOS", icon: nixIcon, link: "https://nixos.org/" },
  { name: "ImageJ", icon: SiImagej, link: "https://imagej.net/" },
  { name: "React", icon: reactIcon, link: "https://react.dev/" },
  { name: "bun", icon: bunIcon, link: "https://bun.sh/" },
  { name: "Secure Shell (SSH)", icon: sshIcon, link: "https://en.wikipedia.org/wiki/Secure_Shell" },
  { name: "NeoVim", icon: neovimIcon, link: "https://neovim.io/" },
  { name: "Snapgene", icon: snapgeneLogo, link: "https://www.snapgene.com/" },
];

const Programming: SkillItem[] = [
  { name: "Python", icon: pythonIcon, link: "https://www.python.org/" },
  { name: "Java", icon: javaIcon, link: "https://www.java.com/" },
  { name: "R", icon: rIcon, link: "https://www.r-project.org/" },
  { name: "Bash/Zsh", icon: bashIcon, link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
  { name: "C++", icon: cppIcon, link: "https://en.wikipedia.org/wiki/C%2B%2B" },
  { name: "C", icon: cIcon, link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "Nix", icon: nixIcon, link: "https://nixos.org/guides/how-nix-works" },
  { name: "JavaScript", icon: javascriptIcon, link: "https://en.wikipedia.org/wiki/JavaScript" },
  { name: "SQL", icon: mysqlIcon, link: "https://en.wikipedia.org/wiki/SQL" },
];

function SkillIcon({ icon, name, link }: SkillItem) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const iconSize = isXs ? 54 : isSm ? 68 : 80;
  const content = typeof icon === "string" ? (
    <Box
      component="img"
      src={icon}
      alt={name}
      sx={{
        height: { xs: 80, sm: 100, md: 120 },
        width: { xs: 80, sm: 100, md: 120 },
        maxWidth: "100%",
        mb: 1,
      }}
    />
  ) : (
    (() => {
      const IconComponent = icon as ElementType;
      return (
        <Box
          sx={{
            height: { xs: 80, sm: 100, md: 120 },
            width: { xs: 80, sm: 100, md: 120 },
            mb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconComponent size={iconSize} />
        </Box>
      );
    })()
  );
  if (link) {
    return (
      <Tooltip title={link}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </Tooltip>
    );
  }
  return content;
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
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "100%" }}
      >
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
              <SkillIcon {...item} />
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
    <Container id="skills" style={{ scrollMarginTop: 70 }}>
      <br />
      <SkillSection title="Biology Skills" items={BiologySkills} />
      <SkillSection title="Software" items={Software} />
      <SkillSection title="Programming Languages" items={Programming} />
    </Container>
  );
}

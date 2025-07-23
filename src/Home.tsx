
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./dna-svgrepo-com.svg";
import HomeText from "./HomeText.tsx"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import profilephoto from 'public/images/pro-FoEfCRZd.jpeg'
import Introduction from './Introduction.tsx'
import Skills from "./Skills.tsx"

export default function Home(){
    return (
      <Container sx={{width:'100vw'}}>

                  <Introduction/>


          <Box  sx={{ padding:5,display: 'flex', bgcolor:"#2e3532" , width:'80vw'}}>
              <HomeText/>

          </Box>
               <Skills/>
      </Container>





    )
}

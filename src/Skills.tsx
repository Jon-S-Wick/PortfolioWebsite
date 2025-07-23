import { Container, Row, Col } from "react-bootstrap";

import WB from './WB.svg'
import PCR from './electrophoresis-gel.svg'

import riparian from './Riparian_plots.svg'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';


const BiologySkills = [
   { skill: ' Western Blot', icon: WB},
   { skill: ' PCR ', icon: PCR},
   { skill: ' Genomic Analysis ', icon: riparian},
   // { skill: ' Cell culture', icon: temp}.
   // { skill: ' Cell Counting'}

];

const Tools = [
   { tool: ' Git ', icon: 'temp' },
   { tool: ' Linux ', icon: 'temp' },
   { tool: ' CLI ', icon: 'temp' },
   { tool: ' Neovim ', icon: 'temp' },
   { tool: ' VS Code ', icon: 'temp' },
   { tool: ' Conda ', icon: 'temp' },
   { tool: ' Benchling ', icon: 'temp' },
   { tool: ' Microsoft/libre Office ', icon: 'temp' },
   { tool: ' FIJI ', icon: 'temp' },
];

const Programming = [
   { Language: 'C++', icon: 'temp'},
   { Language: 'Java', icon: 'temp'},
   { Language: 'Python', icon: 'temp'},
   { Language: 'Nix', icon: 'temp'},
   { Language: 'R', icon: 'temp'},
]

export default function Skills(){
   return (
      <Container>

          <Box  sx={{ 
            padding:5,
            display: 'flex',
            bgcolor:"#2e3532" ,
            width:'80vw',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column'
            }}>
         <Typography variant="h4" gutterBottom>
            Biology Skills
         </Typography>
      <Grid container spacing={3} justifyContent="center" >
        {BiologySkills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{ height: 120, width: 120, mb: 1 }}
              />
              <Typography variant="h6" sx={{ mt: 1}}>{skill.skill}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
      </Container>
   );
      
   //        <Box  sx={{ padding:5,display: 'flex', bgcolor:"#2e3532" , width:'80vw'}}>
   // <Container>
   //        <Typography
   //          variant="h1"
   //          component="div"
   //          textAlign={"center"}
   //          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
   //        >
   //             Biology skill set
   //
   //                    </Typography>
   //
   //        <Typography
   //          variant="h3"
   //          component="div"
   //          textAlign={"center"}
   //          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
   //        >
   //    <Grid container spacing={5} width="100vw" sx={{alignItems:"center"}}>
   //       
   //      <Grid size={4}>
   //          <Box
   //
   //          component="img"
   //          src={WB}
   //          alt="Polyacrilamide gel"
   //          sx={{
   //            width: '10vw',
   //            height: 'auto',
   //            borderRadius: 10, // optional styling
   //          }}
   //            />
   //
   //
   //      </Grid>
   //
   //      <Grid size={4}>
   //          <Box
   //
   //          component="img"
   //          src={PCR}
   //          alt="PCR gel"
   //          sx={{
   //            width: '10vw',
   //            height: 'auto',
   //            borderRadius: 10, // optional styling
   //          }}
   //            />
   //
   //      </Grid>
   //
   //
   //      <Grid size={4}>
   //          <Box
   //
   //          component="img"
   //          src={riparian}
   //          alt="riparian plot"
   //          sx={{
   //            width: '10vw',
   //            height: 'auto',
   //            borderRadius: 10, // optional styling
   //          }}
   //            />
   //
   //      </Grid>
   //    </Grid>
   //    </Typography>
   //    </Container>
   //    </Box>
   
}

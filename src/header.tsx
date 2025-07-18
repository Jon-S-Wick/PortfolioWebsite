import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';



const drawerWidth = 240;
const navItems = ['Home', 'CV', 'Contact'];
const leftPages = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about-me' },
  { name: 'CV', path: '/cv'},
  { name: 'CV PDF', path: '/cv-pdf'}

];

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {leftPages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Button sx={{ color: '#0000000' }}
                  key={page.name}
                  color="inherit"
                  component={Link}
                  to={page.path}
                >
                  {page.name}
                </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >

          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Jon Wick


          </Typography>
        </Toolbar>
        <Box>

            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign:'center', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >

              {leftPages.map((page) => (

                <Button sx={{ color: '#fff' }}
                  key={page.name}
                  color="inherit"
                  component={Link}
                  to={page.path}
                >
                  {page.name}
                </Button>
              ))}

            </Typography>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

import React, { Profiler } from 'react'
import'../assets/css/HomeNav.css'
import Profilepage from './profile';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import side from '../assets/others/sidebar.svg';

function HomeNav() {
  const navigate=useNavigate('');
  const [state, setState] = React.useState({
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {name:"My DashBoard" ,link:"/userdash"},
          {name:"Apply Loan", link:"/loan"},
          {name:"Loan Status",link:"/track"}
        ].map((text, index) => (
          <ListItem key={text.name} disablePadding onClick={() => navigate(text.link)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
    return ( 
    <div>

<nav class="navbar navbar-expand-lg navbar-light back">
<div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img src={side}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  <a class="navbar-brand" href="/home">AgroFundX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
   

      <li class="ll nav-item dropdown">
        <a class=" nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Username
        </a>
        <div class="dropdown-menu bb" aria-labelledby="navbarDropdown">
          <a class="dropdown-item"  ><Profilepage/></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/login">Log out</a>
        </div>
      </li>
     
    </ul>
    
  </div>
</nav>
    </div>
     );
}

export default HomeNav;
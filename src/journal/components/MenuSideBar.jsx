import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';

export const MenuSideBar = (props) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">

        <NavLink style={{textDecoration: 'none'}} to='/dashboard'>
        
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {props.icon}
              </ListItemIcon>
              <ListItemText underline="none" sx={{textDecoration: 'none', color: 'black'}} primary={props.title} />
            </ListItemButton>
          </ListItem>
          
        </List>
        </NavLink>
      </nav>
      <Divider />
     
    </Box>
  )
}

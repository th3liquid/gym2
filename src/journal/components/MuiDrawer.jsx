import React, { useState } from 'react';
import  { AppBar, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DashboardIcon from '@mui/icons-material/Dashboard';





const MuiDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <ListIcon />
          </IconButton>
          <h2 style={{ flexGrow: 1, marginLeft: '1rem' }}>
            Bienvenido
          </h2>
          <IconButton color="inherit" aria-label="salir">
            <ExitToAppIcon />
            <span style={{fontSize: "18px", marginLeft: '0.5rem' }}>Salir</span>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        variant="temporary"
      >
        <div style={{ width: '250px' }}>

          <Grid container sx={{display: "flex", justifyContent: "center"}}>
            <Grid>
            <LogoDevIcon sx={{fontSize: "130px"}} />

            </Grid>

          </Grid>

          <Divider />

          

          <List>
            <ListItem button component={NavLink} to="/" exact>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "black" }}  />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Dashboard" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/checkin" exact>
              <ListItemIcon>
                <AccessTimeIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Check In" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/socios" exact>
              <ListItemIcon>
                <GroupIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Socios" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/pagos" exact>
              <ListItemIcon>
                <AttachMoneyIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Pagos" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/asistencias" exact>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Asistencias" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/membresias" exact>
              <ListItemIcon>
                <CardMembershipIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Membresias" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/sucursales" exact>
              <ListItemIcon>
                <StorefrontIcon sx={{ color: "black" }}/>
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Sucursales" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/productos" exact>
              <ListItemIcon>
                <InventoryIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Productos" />
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to="/ventas" exact>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText sx={{my: "10px"}} primary="Ventas" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  )
}

export default MuiDrawer;






import {
  Box,
  Card,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";
import { MenuSideBar } from "./MenuSideBar";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { NavLink } from "react-router-dom";


export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  // const { notes } = useSelector( state => state.journal );

  const menu = [
    {
      id: 9,
      title: "Dashboard",
      icon: <DashboardIcon color="primary" />,
      path: "/",
    },
    {
      id: 1,
      title: "Check In",
      icon: <AccessTimeIcon color="primary" />,
      path: "/checkin",
    },

    {
      id: 2,
      title: "Socios",
      icon: <GroupIcon color="primary" />,
      path: "/socios",
    },
    {
      id: 3,
      title: "Pagos",
      icon: <AttachMoneyIcon color="primary" />,
    },
    {
      id: 4,
      title: "Asistencias",
      icon: <CheckCircleIcon color="primary" />,
    },
    {
      id: 5,
      title: "Membresias",
      icon: <CardMembershipIcon color="primary" />,
    },
    {
      id: 6,
      title: "Sucursales",
      icon: <StorefrontIcon color="primary" />,
    },
    {
      id: 7,
      title: "Productos",
      icon: <InventoryIcon color="primary" />,
    },
    {
      id: 8,
      title: "Ventas",
      icon: <ProductionQuantityLimitsIcon color="primary" />,
    },
  ];

  return (

   

    
    <Box
      component="nav"
      sx={{  width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{ 
            display: { xs: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        >
       
        <Toolbar >
          <Grid container>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
            >
              <LogoDevIcon sx={{ fontSize: "100px", pt: 1 }} />
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
            >
              <Typography sx={{ pb: 2 }} variant="h6">
                LOGO
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />

        {/* MENU */}

        

        <List >
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/dashboard">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Dashboard"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>

        <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/checkin">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccessTimeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Check in"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>
        <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/socios">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <GroupIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Socios"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>
        <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/pagos">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <AttachMoneyIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Pagos"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>
        <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/asistencias">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Asistencias"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>
        <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/membresias">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <CardMembershipIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Membresias"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>
        <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/sucursales">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <StorefrontIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Sucursales"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List>
        {/* <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/productos">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <InventoryIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Productos"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List> */}
        {/* <List>
          <nav aria-label="main mailbox folders">
            <NavLink style={{ textDecoration: "none" }} to="/ventas">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <ProductionQuantityLimitsIcon color="primary" />                    </ListItemIcon>
                    <ListItemText
                      underline="none"
                      sx={{ textDecoration: "none", color: "black" }}
                      primary="Ventas"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </NavLink>
          </nav>
          <Divider />
        </List> */}



      </Drawer>
    </Box>
    
  );
};

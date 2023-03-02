import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './';
import { MenuSideBar } from './MenuSideBar';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector( state => state.auth );
    // const { notes } = useSelector( state => state.journal );

    const menu = [
        {
            id: 9,
            title: 'Dashboard',
            icon: <DashboardIcon color='primary' />,
            path: "/"
        },
        {
            id: 1,
            title: 'Check In',
            icon: <AccessTimeIcon color='primary' />,
            path: "/checkin"
        },
        
        {
            id: 2,
            title: 'Socios',
            icon: <GroupIcon color='primary' />,
            path: "/socios"
        },
        {
            id: 3,
            title: 'Pagos',
            icon: <AttachMoneyIcon color='primary' />,
        },
        {
            id: 4,
            title: 'Asistencias',
            icon: <CheckCircleIcon color='primary' />,
        },
        {
            id: 5,
            title: 'Membresias',
            icon: <CardMembershipIcon color='primary' />,
        },
        {
            id: 6,
            title: 'Sucursales',
            icon: <StorefrontIcon color='primary' />,
        },
        {
            id: 7,
            title: 'Productos',
            icon: <InventoryIcon color='primary' />,
        },
        {
            id: 8,
            title: 'Ventas',
            icon: <ProductionQuantityLimitsIcon color='primary' />,
        },

    ]

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Grid container>
                        <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={12}>
                            <LogoDevIcon sx={{fontSize: '100px', pt: 1}} />
                        
                        </Grid>
                        <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={12}>
                            
                        <Typography sx={{pb: 2,}} variant='h6' >
                        LOGO
                    </Typography>
                        </Grid>
                    </Grid>
                   
                </Toolbar>
                <Divider />

                <List>
                    {
                        menu.map( menuItem => (
                            <MenuSideBar key={menuItem.id}  title={menuItem.title} icon={menuItem.icon} />
                            // <SideBarItem key={ note.id } { ...note } />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}

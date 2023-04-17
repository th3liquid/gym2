import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Grid, IconButton, Switch, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';
import { MaterialUISwitch } from './MaterialUISwitch';



export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const { displayName } = useSelector( state => state.auth );

    const onLogout = () => {
        dispatch( startLogout() );
    }


  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>Bienvenido {displayName} </Typography>

                
                <IconButton 
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                    <Typography sx={{ml: "10px"}} variant='h6'>Salir</Typography>
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}

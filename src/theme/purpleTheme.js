import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#051e34'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#EAEAEF', // Cambiar al color de fondo deseado
                },
            },
        },
    },
    
})






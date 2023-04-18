import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import backgroundImage from "../../public/images/fondo1.jpg";
import { useState } from "react";
import { FormControl } from '@mui/material';
import users from '../../db/users.json'
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import BasicModal from "../components/BasicModal";
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from "react";
import sucursal from '../../db/susursal.json'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export const CheckinPage = () => {
  

  const [codigoSocio, setCodigoSocio] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNoEncontradoVisible, setModalNoEncontradoVisible] = useState(false);
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
  const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFechaActual(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
 

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  const handleEnviarClick = () => {
 // Realizar la validación del código de socio con el archivo users.json
 const user = users.find((user) => user.id === parseInt(codigoSocio));
 console.log(codigoSocio);
 if (user) {
   // Si el usuario existe, mostrar el modal
   setModalVisible(true);
   setUsuarioEncontrado(user);
   closeModalAfterDelay(); // Cerrar el modal después de 2 segundos
 } else {
   setModalNoEncontradoVisible(true);
   closeModalAfterDelay(); // Cerrar el modal después de 2 segundos
 }
};

  const handleCloseModal = () => {
    // Cerrar el modal
    setModalVisible(false);
    setModalNoEncontradoVisible(false);
    setUsuarioEncontrado(null);
  };

  const handleKeyDown = (event) => {
    // Verificar si se presionó la tecla Enter (código 13)
    if (event.keyCode === 13) {
      handleEnviarClick(); // Llamar a la función de enviar al presionar Enter
    }
  };

  const closeModalAfterDelay = () => {
    setTimeout(() => {
      handleCloseModal();
    }, 5000); // 2000 ms = 2 segundos
  };




  return (
   <>

    
      {/* <Typography>Check In</Typography> */}

      <Grid
        container
        
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          height: '100vh',
          alignItems: "center",
          
        }}
      >
        <Grid item>
          <Card sx={{ padding: 3, width: "500px" }}>
            <Grid sx={{ display: "flex", justifyContent: "center" }} container>
              <Grid item>
                <DashboardIcon sx={{ fontSize: "160px" }} />
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center" }} item>
              <Typography sx={{ mt: 2 }} variant="h3">
              {fechaActual.toLocaleTimeString()} 
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: "-20px", display: "flex", justifyContent: "center" }} item>
              <Typography sx={{ mt: 2 }} variant="h5">
               {fechaActual.toLocaleDateString()} 
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: "-20px", display: "flex", justifyContent: "center" }} item>
              <Typography sx={{ my: 3 }} variant="h5">
               Sucursal: {sucursal[0].name}
              </Typography>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              item
            >
              <FormControl fullWidth variant="outlined">

              <TextField
                type="number"
                id="outlined-basic"
                fullWidth
                label="Ingresa tu codigo de socio"
                variant="outlined"
                value={codigoSocio}
                onChange={(e) => setCodigoSocio(e.target.value)}
                onKeyDown={handleKeyDown} 
                />
                <Button variant="contained" onClick={handleEnviarClick} >Enviar</Button>

                {/* Modal */}
      <Dialog open={modalVisible} onClose={handleCloseModal}>
        <Grid container sx={{marginTop: 2}}>
          <Grid item sx={{display: "flex", justifyContent: "center"}} xs={12}>
          <Avatar src={usuarioEncontrado && usuarioEncontrado.image} sx={{width: "150px", height: "150px"}}>H</Avatar>
          </Grid>
          <Grid item sx={{marginTop: 2, display: "flex", justifyContent: "center"}} xs={12}>
          {usuarioEncontrado && (
            <>
              {/* Mostrar el nombre del usuario */}
             
              
              <Typography variant="h4">Bienvenido <b>{usuarioEncontrado.name}</b></Typography>
              
              {/* Agregar más detalles del usuario aquí */}
            </>
          )}
          </Grid>
          <Grid item sx={{display: "flex", justifyContent: "center"}} xs={12}>
          {usuarioEncontrado && (
            <>
              {/* Mostrar el nombre del usuario */}
              <Grid item sx={{display: "flex", justifyContent: "center"}}>
              <Typography variant="h6">
                Codigo de Socio: <b>{codigoSocio}</b>
              </Typography>

              </Grid>
              
             
            </>
          )}
          </Grid>
          <Grid item sx={{display: "flex", justifyContent: "center"}} xs={12}>
          {usuarioEncontrado && (
            <>
              {/* Mostrar el nombre del usuario */}
              <Grid item sx={{display: "flex", justifyContent: "center"}}>
              <Typography variant="h6">
                Tu Membresia vence en: <b>FECHA DE MEMBRESIA</b>
              </Typography>

              </Grid>
              
             
            </>
          )}
          </Grid>

        </Grid>
     
        
        <DialogActions>

          <Button onClick={handleCloseModal} color="primary">
            <CancelIcon sx={{color: "red"}} />
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de Usuario No Encontrado */}
      <Dialog open={modalNoEncontradoVisible} onClose={handleCloseModal}>
        <Grid sx={{padding: "20px"}}>

        
        <Grid container sx={{display: "flex", justifyContent: "center"}}>
          <Grid item sx={{marginTop: 2}}>
          <CancelIcon sx={{fontSize: "100px", color: "red"}} />
            

          </Grid>
        
        </Grid>
        <Grid container sx={{display: "flex", justifyContent: "center"}}>
          <Grid item sx={{marginTop: 2}}>
          <Typography variant="h5">
            Usuario no encontrado
          </Typography>
            

          </Grid>
        
        </Grid>
        <Grid container sx={{display: "flex", justifyContent: "center"}}>
          <Grid item sx={{marginTop: 2}}>
          <Typography variant="h5">
            No se encontro un cliente con el codigo: {codigoSocio}
          </Typography>
            

          </Grid>
        
        </Grid>
        </Grid>
        
        <DialogTitle></DialogTitle>
        <DialogContent>
          
          {/* Agregar más detalles o personalizar el contenido del modal aquí */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

                
            </FormControl>
            
            
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              item
              >
             
            </Grid>
          </Card>
        </Grid>
      </Grid>
      </>
  );
};

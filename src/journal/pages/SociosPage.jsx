import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";
import { DataGrid } from "@mui/x-data-grid";
import TablasReact from "../components/TablasReact";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TablasNuevas } from "../components/TablasNuevas";
import { useState } from "react";
import users from '../../db/users.json'

export const SociosPage = () => {
  const dispatch = useDispatch();
  // const { isSaving, active } = useSelector( state => state.journal );

  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    email: '',
    gender: '',
    status: '',
    membresia: '',
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    // Asigna un nuevo id consecutivo al nuevo usuario
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    
    // Crea el nuevo usuario con el id consecutivo
    const newUserWithId = { ...newUser, id: newUserId };
    
    // Actualiza el arreglo de usuarios con el nuevo usuario
    const updatedUsers = users.concat(newUserWithId);
    
    // Actualiza el estado local con el nuevo usuario
    setNewUser({
      id: '',
      name: '',
      email: '',
      gender: '',
      status: '',
      membresia: '',
    });
    
    // Cierra el modal
    handleCloseModal();
  };

  return (
    <JournalLayout>
      <Card sx={{padding: 2, margin: 1,  }}>
        <Grid container>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item sx={{display: "flex", justifyContent: "end"}} xs={12} md={6}>
          <Button onClick={handleOpenModal} startIcon={<DriveFileRenameOutlineIcon />} variant="contained">Nuevo Cliente</Button>

          </Grid>

        </Grid>
        
     
        
      </Card>

{/* Modal */}

      <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogTitle>Agregar Usuario</DialogTitle>
      <DialogContent>
        <TextField
          label="ID"
          name="id"
          value={newUser.id}
          onChange={handleInputChange}
        />
        <TextField
          label="Nombre"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Sexo"
          name="gender"
          value={newUser.gender}
          onChange={handleInputChange}
        />
        <TextField
          label="Status"
          name="status"
          value={newUser.status}
          onChange={handleInputChange}
        />
        <TextField
          label="Membresia"
          name="membresia"
          value={newUser.membresia}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
      <Button onClick={handleCloseModal} color="primary">
Cancelar
</Button>
<Button onClick={() => handleAddUser(newUser)} color="primary">
  Agregar
</Button>

</DialogActions>
</Dialog>

 
      
      <Card sx={{ margin: 1, padding: 2 }}>
        <TablasNuevas /> 
      </Card>
    </JournalLayout>
  );
};

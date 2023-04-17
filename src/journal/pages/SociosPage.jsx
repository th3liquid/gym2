import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";
import { DataGrid } from "@mui/x-data-grid";
import TablasReact from "../components/TablasReact";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TablasNuevas } from "../components/TablasNuevas";

export const SociosPage = () => {
  const dispatch = useDispatch();
  // const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      <Card sx={{padding: 2, margin: 1,  }}>
        <Grid container>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item sx={{display: "flex", justifyContent: "end"}} xs={12} md={6}>
          <Button startIcon={<DriveFileRenameOutlineIcon />} variant="contained">Nuevo Cliente</Button>

          </Grid>

        </Grid>
        
     
        
      </Card>

 
      
      <Card sx={{ margin: 1, padding: 2 }}>
        <TablasNuevas />
      </Card>
    </JournalLayout>
  );
};

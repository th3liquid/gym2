import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import backgroundImage from "../../public/images/fondo1.jpg";

export const CheckinPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
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
                RELOJ
              </Typography>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              item
            >
              <TextField
                type="number"
                id="outlined-basic"
                fullWidth
                label="Ingresa tu codigo de socio"
                variant="outlined"
              />
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              item
            >
             <Button variant="contained">Enviar</Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </JournalLayout>
  );
};

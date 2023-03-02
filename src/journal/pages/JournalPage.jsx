import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';
import { GraficasJS } from '../components/GraficasJS';

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>

      <Typography variant='h4'>Dashboard Page</Typography>

      <Grid container sx={{mt: 5}}>
        <Grid item xs={12}  >
          <Grid item md={6} >
          <GraficasJS />
            
          </Grid>
          <Grid item md={6} >
          <GraficasJS />

          </Grid>
        </Grid>

      </Grid>

      
      
     

    </JournalLayout>
  )
}

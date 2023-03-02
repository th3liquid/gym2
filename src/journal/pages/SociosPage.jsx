import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';
import { DataGrid } from '@mui/x-data-grid';
import TablasReact from '../components/TablasReact';





export const SociosPage = () => {

 
  const dispatch = useDispatch();
  // const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>


      <Card>
      <TablasReact />

      </Card>
      
     

    </JournalLayout>
  )
}

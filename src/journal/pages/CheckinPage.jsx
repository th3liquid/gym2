import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';

export const CheckinPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>

      <Typography>Check In</Typography>
      
     

    </JournalLayout>
  )
}

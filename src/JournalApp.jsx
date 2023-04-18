import MuiDrawer from './journal/components/MuiDrawer';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const JournalApp = () => {
  return (
    <AppTheme>
      <MuiDrawer />
        <AppRouter />
    </AppTheme>
  )
}

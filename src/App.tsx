import {
  DARK_THEME,
  LIGHT_THEME
} from './Configurations/Themes/index';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import UIRenderer from './Components/UIWINDOW/index';
import { useState } from 'react';
import { MENU_LIST } from './Components/Frame/constants';
import { MENUS_LIST_TYPE } from './Components/Frame/types';
import Authentication from './Containers/Authentication/UserLogin';

const App = () => {
  console.log('App Called');
  const [mode, toggleMode] = useState<boolean>(true);
  const [menuItems] = useState<MENUS_LIST_TYPE>(MENU_LIST);

  const auth = false;

  return (
    <div>
      <ThemeProvider theme={mode ? LIGHT_THEME : DARK_THEME}>
        <CssBaseline />
        {auth ? (
          <UIRenderer
            handleMode={toggleMode}
            mode={mode}
            menuItems={menuItems}
          />
        ) : (
          <Authentication />
        )}
      </ThemeProvider>
    </div>
  );
};

export default App;

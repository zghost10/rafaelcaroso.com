import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"
import { AppThemeProvider, MenuProvider, LangProvider } from "./shared/contexts";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {

  return (
    <AppThemeProvider>
      <LangProvider>
        <MenuProvider>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </MenuProvider>
      </LangProvider>
    </AppThemeProvider>
  )
}

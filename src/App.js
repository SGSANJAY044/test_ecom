import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import { ThemeProvider } from '@sparrowengg/twigs-react';
import AllRoutes from './AllRoutes';
import I18n from 'config/i18n/I18n';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AllRoutes/>
        <I18n />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import { ThemeProvider } from '@sparrowengg/twigs-react';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AllRoutes/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

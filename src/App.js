import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import { ThemeProvider } from '@sparrowengg/twigs-react';
import AllRoutes from './AllRoutes';
import I18n from './utils/I18n/I18n.jsx';
import theme from './utils/Twigs/twigs.config'
import { useSelector } from 'react-redux';
function App() {
  const themeName = useSelector(state => state.theme.currentTheme)
  console.log(theme[themeName]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[themeName]}>
        <AllRoutes/>
        <I18n />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

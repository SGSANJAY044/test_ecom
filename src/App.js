import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from '@sparrowengg/twigs-react';
import "react-loading-skeleton/dist/skeleton.css";
import AllRoutes from './AllRoutes';
import I18n from './utils/I18n/I18n.jsx';
import theme from './utils/Twigs/twigs.config'
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import './App.scss';
import ServerDown from "components/ServerDown";
function App() {
  const themeName = useSelector(state => state.theme.currentTheme)
  console.log(theme[themeName]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[themeName]}>
        <SkeletonTheme>
        <Suspense>
            <ServerDown>
              <AllRoutes />
            </ServerDown>
        </Suspense>
        </SkeletonTheme> 
        <I18n />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

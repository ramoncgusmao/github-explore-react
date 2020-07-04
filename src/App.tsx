import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalSytle from './styles/global';

const App: React.FC = () => (
  <>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  <GlobalSytle />
  </>
);


export default App;

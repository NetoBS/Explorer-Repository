import React from 'react';
import MyRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
    <BrowserRouter>
        <MyRoutes />
    </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;

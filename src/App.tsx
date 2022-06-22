import React from 'react';
import MyRoutes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <MyRoutes />;
        <GlobalStyle />
    </>
);

export default App;

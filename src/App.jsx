import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <> 
      <GlobalStyles /> 
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx' 
import HomePage from './pages/HomePage.jsx'
// import ProjectDetail from './pages/ProjectDetail.jsx'

const basename = import.meta.env.PROD ? '/syahreza_adnan_portfolio/' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="project/:projectId" element={<ProjectDetail />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
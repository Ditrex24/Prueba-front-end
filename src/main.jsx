import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './componentes/header.jsx';
import FirstCard from './componentes/FirstCard/firstCard.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <FirstCard/>
    
    <App />
  </React.StrictMode>
);

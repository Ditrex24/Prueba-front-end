import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './componentes/Header/header.jsx';
import FirstCard from './componentes/FirstCard/firstCard.jsx';
import SecondCard from './componentes/SecondCard/secondCard.jsx';
import ThreeCard from './componentes/threeCard/threeCard.jsx'
import FourCard from './componentes/FourCard/FourCard.jsx';
import FiveCard from './componentes/FiveCard/fiveCard.jsx';
import SixCard from './componentes/SixCard/sixCard.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <FirstCard/>
    <SecondCard/>
    <ThreeCard/>
    <FourCard/>
    <FiveCard/>
    <SixCard/>
    
    
    <App />
  </React.StrictMode>
);

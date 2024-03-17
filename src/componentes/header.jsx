
import '../componentes/Header/header.css'; 
import iconImg from '../assets/icongrab.png'; 
import live from '../assets/live.png'
import join from '../assets/375.png'





const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="isLive">LIVE
        <img src={live} alt="live" className="live-icon" />
        </div>
        <span className="header-text">Lorem ipsum dolor sit amet</span>
        <div className="isJoin">JOIN NOW! 
        <img src={join} alt="live" className="join-icon" /> 
        </div>
      </div>
      <nav className="headerNav">
        <button className="navButton">LOREM IPSUM </button>
        <button className="navButton">LOREM IPSUM </button>
        <button className="navButton">LOREM IPSUM </button>
        <button className="navButton">LOREM IPSUM </button>
        <button className="navButton">LOREM IPSUM </button>
        <button className="navButton">LOREM IPSUM </button>
      </nav>
      <div className="Navbackground"></div>
      <img src={iconImg} alt="Icono" className="iconHeadernNav" />
     
      <div className="contentNavBody">
        <div className="bodyNav">
          <div className="bodyNavTitle">LOREM IPSUM</div>
          <div className="bodyNavTitle2">LOREM IPSUM DOLOR</div>
          <div className="bodyNavTitle">LOREM IPSUM</div>
          <button className="bodyNavButton">WHAT IS NEXT</button>
        </div>
      </div>
      <div className="footerNav">
        <div className="footerContenTextNav">Lorem ipsum dolor sit amet, consetetur</div>

        <div className="footerContenTimeNav">
          
          <div className="blockTime">
            <span>170</span>
            <p className="blockTitle">day</p>
            </div>

          <div className="divider"></div>

          <div className="blockTime">
            <span>13</span>
            <p className="blockTitle">hours</p>
          </div>

          <div className="divider"></div>
          <div className="blockTime">
            <span>39</span>
            <p className="blockTitle">minutes</p>
          </div>
          <div className="divider"></div>
          <div className="blockTime">
            <span>29</span>
            <p className="blockTitle">seconds</p>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
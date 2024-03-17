import './fourCard.css'
import pic1 from '../../assets/Pic1.png'
import play from '../../assets/375.png'



const FourCard = () => {
    return (
      <div className="fourCard">
        <h1>LATEST VIDEOS</h1>
        <div className="fourCardContent">
        <div className="fourCardFile">
          <div className="picContainer">
            <img src={pic1} alt="Imagen 1" className="picImage" />
            <button className="playButton">
              <img src={play} alt="Play" />
            </button>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          </div>
        </div>
        <div className="fourCardFile">
          <div className="picContainer">
            <img src={pic1} alt="Imagen 1" className="picImage" />
            <button className="playButton">
              <img src={play} alt="Play" />
            </button>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          </div>
        </div>
        <div className="fourCardFile">
          <div className="picContainer">
            <img src={pic1} alt="Imagen 1" className="picImage" />
            <button className="playButton">
              <img src={play} alt="Play" />
            </button>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          </div>
        </div>
        <div className="fourCardFile">
          <div className="picContainer">
            <img src={pic1} alt="Imagen 1" className="picImage" />
            <button className="playButton">
              <img src={play} alt="Play" />
            </button>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          </div>
        </div>
        <div className="fourCardFile">
          <div className="picContainer">
            <img src={pic1} alt="Imagen 1" className="picImage" />
            <button className="playButton">
              <img src={play} alt="Play" />
            </button>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          </div>
        </div>
        <div className="fourCardFile">
          <div className="picContainer">
            <img src={pic1} alt="Imagen 1" className="picImage" />
            <button className="playButton">
              <img src={play} alt="Play" />
            </button>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          </div>
        </div>
        
        </div>
        <button className="btnStandar">view all</button>
        </div>
      
    );
  }
  
  export default FourCard;
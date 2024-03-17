import './threeCard.css'
import Pic5 from '../../assets/Pic5.png'


const ThreeCard = () => {
    return (
      <div className="threeCard">
        <div className="threeCardContent">
          <h1 className="textCardThree">Lorem ipsum dolor sit amet,consetetur</h1>
          <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
          <button className="btnThreeCard2">LOREM IPSUM DOLOR SIT AMET</button>
        </div>
        <img src={Pic5} alt="Imagen de la tercera lámina" className="threeCardImage" />
      </div>
    );
  }
  
  export default ThreeCard;
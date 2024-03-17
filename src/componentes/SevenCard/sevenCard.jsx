
import './sevenCard.css'
import pic7 from '../../assets/Pic7.png'
import pic8 from '../../assets/Pic8.png'
import pic9 from '../../assets/Pic9.png'
import pic10 from '../../assets/Pic10.png'


const SecondCard = () => {
    return (
        <div className="sevenCard">
            <h1>Lorem ipsum dolor sit amet </h1>
        <div className="secondCardContent">
          <div className="card">
            <img src={pic7} alt="Card Image" className="cardImage" />
          </div>
          <div className="card">
            <img src={pic8} alt="Card Image" className="cardImage" />
          </div>
          <div className="card">
            <img src={pic9} alt="Card Image" className="cardImage" />
          </div>
          <div className="card">
            <img src={pic10} alt="Card Image" className="cardImage" />
          </div>
        </div>
        
      </div>
    );
  }
  
  export default SecondCard;
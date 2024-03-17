import './secondCard.css'
import pic2 from '../../assets/Pic2.png'
import pic3 from '../../assets/Pic3.png'
import pic4 from '../../assets/Pic4.png'


const SecondCard = () => {
    return (
        <div className="secondCard">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
        <div className="secondCardContent">
          <div className="card">
            <img src={pic2} alt="Card Image" className="cardImage" />
            <button className="btnCard">LOREM IPSUM</button>
          </div>
          <div className="card">
            <img src={pic3} alt="Card Image" className="cardImage" />
            <button className="btnCard">LOREM IPSUM</button>
          </div>
          <div className="card">
            <img src={pic4} alt="Card Image" className="cardImage" />
            <button className="btnCard">LOREM IPSUM</button>
          </div>
        </div>
        <button className="btnSecondCard">LEARN MORE</button>
      </div>
    );
  }
  
  export default SecondCard;
import './fiveCard.css'
import join from '../../assets/Join.png';

const FiveCard = () => {
    return (
        <div className="fiveCard" style={{ backgroundImage: `url(${join})` }}>
        <div className="textContainer">
          <h1>JOIN US.</h1>
          <span>Loren ipsum dolor sit amet, consetetyr sadipscing eltr.</span>
        </div>
        <div className="formFiveCard">
          <div className="inputColumn">
            <input className="inputFormBasic" type="text" placeholder="Nombre" />
            <input className="inputFormBasic" type="text" placeholder="Apellido" />
          </div>
          <div className="inputColumn">
            <input className="inputFormBasic" type="tel" placeholder="Teléfono" />
            <input className="inputFormBasic" type="email" placeholder="Correo electrónico" />
          </div>
          <input className="inputFormBasic" type="text" placeholder="Departamento" />
          <textarea className="inputFormBasic" placeholder="Mensaje"></textarea>
          <button className="btnImIn">I`M IN</button>
          <span className='textspan'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
</span>
        </div>
      </div>
    );
  }
  

export default FiveCard;








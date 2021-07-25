import './Footer.css';
import logom from './logomarca.png';
import calidad from './quality.png';
import haccp from './HACCP.jpeg';
import iso from './logoISO.png';




function Footer () {
    return (
          <footer className="footer2">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-2">
                  <img src={logom} className="logom"/>
              </div>
              <div className="sec2 col-sm-6 col-md-6 col-lg-3">
                <p> &copy;Alqueria S.A Todos los derechos reservados</p>
                <p>Certifica</p>
                <div className="certifica">
                  <img src={calidad}/>
                  <img src={haccp}/>
                  <img src={iso} className="iso"/>
                </div>
              </div>
              <div className="sec3 col-sm-12 col-md-12 col-lg-7">
                <p>Contàctanos &nbsp; &nbsp;Mapa de sitios &nbsp; &nbsp;Protecciòn de datos personales &nbsp; &nbsp;Aviso de privacidad &nbsp; &nbsp;Tèrminos y condiciones</p>
                <div className="iconos col-sm-12 col-md-12 col-lg-6">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>

          
            </div>
			    </footer>
  
    );
  }
  
  export default Footer;
  
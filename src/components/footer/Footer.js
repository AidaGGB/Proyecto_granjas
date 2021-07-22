import './Footer.css';
import logom from './logomarca.png';
import calidad from './quality.png';
import haccp from './HACCP.jpeg';
import iso from './logoISO.png';




function Footer () {
    return (
          <footer>
            <div className="row footer">
              <div className="col-sm-12 col-md-12 col-lg-2">
                  <img src={logom} className="logom"/>
              </div>
              <div className="sec2 col-sm-12 col-md-12 col-lg-3">
                <p> &copy;Alqueria S.A Todos los derechos reservados</p>
                <p>Certifica</p>
                <div className="certifica">
                  <img src={calidad}/>
                  <img src={haccp}/>
                  <img src={iso} className="iso"/>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <p>Alqueria S.A Todos los derechos reservados</p>
              </div>
              <h6>&copy;Sitio desarrollado por G13 | Todos los derechos reservados.</h6>
            </div>
			    </footer>
  
    );
  }
  
  export default Footer;
  
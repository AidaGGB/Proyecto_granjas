import './Registro.css';


function Registro () {
    return (
      <div>
        <div className="container-fluid overflow-hidden registro">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12" >
            <div className="card3">
              <a href="#"><i className="fas fa-times-circle"></i></a>
            <div className="card-body ">
                <div className="titleform">
                  <h3 className="card-title">REGISTRARSE</h3>
                </div>
                <form className="row g-3">
                  <div className="col-12">
                    <input type="text" className="form-control forminput" id="granja" placeholder="Nombre de la granja:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput" id="nombre" placeholder="Nombre del propietario:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput" id="apellidos" placeholder="Apellidos del propietario:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput" id="ciudad" placeholder="Ciudad:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput" id="direccion" placeholder="Dirección:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput" id="tel" placeholder="Teléfono:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput" id="celu" placeholder="Número de celular:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput" id="correo" placeholder="Correo electrónico:"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput" id="ruta" placeholder="Ruta de recolección:"/>
                  </div>
                                
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Acepto términos y condiciones
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Autorizo tratamiento de datos personales
                      </label>
                    </div>
                  </div>
                  <div className="botonreg">
                    <button type="submit" className="btn-reg">Enviar</button>
                    <button type="submit" className="btn-reg2">Cerrar</button>
                  </div>
                  
                </form>
                
                
              </div>
            </div>
            </div>
          </div>    
        </div>
    </div> 
       
    );
  }
  
  export default Registro;
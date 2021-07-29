import './Granjas.css';
import perfil from './granjaperfil.jpeg';
import Mgranjas from './Mgranjas';




function Granjas () {
    return (
      
        <div className="container-fluid overflow-hidden">
          <div className="row granjas">
                  <div className=" col-sm-12 col-md-12 col-lg-7" >
                    <h1>COMUNIDAD GRANJAS</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3" >
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="¿Que granja estas buscando?"   aria-label="Amount (to the nearest dollar)"/>
                      <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-2" >
                    <button type="button" className="btn-granja"><i className="fas fa-folder-plus"></i>  Registro </button>
                  </div>
          </div>

          
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i>   Editar</a>
                        <a href="#" className="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i>   Editar</a>
                        <a href="#" className="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i>   Editar</a>
                        <a href="#" className="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i>   Editar</a>
                        <a href="#" className="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i>   Editar</a>
                        <a href="#" className="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i>   Editar</a>
                        <a href="#" className="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 granjasimg">
              
            </div>
          </div> 
            <h3 className="siguiente">Siguiente  <i className="fas fa-arrow-right"></i></h3>
          <Mgranjas/>
        </div>
          
      
    );
  }
  
  export default Granjas;
  
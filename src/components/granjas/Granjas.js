import './Granjas.css';
import granjasimg from './granjasimg.png';
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
                    <div class="input-group mb-3">
                      <input type="text" className="form-control" placeholder="¿Que granja estas buscando?"   aria-label="Amount (to the nearest dollar)"/>
                      <span className="input-group-text"><i class="fas fa-search"></i></span>
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
                      <p class="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p class="card-text"><span>Ciudad:</span> Cota</p>
                      <p class="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p class="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i>   Editar</a>
                        <a href="#" class="btn btn-eliminar"><i class="fas fa-trash-alt"></i>   Eliminar</a>
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
                      <p class="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p class="card-text"><span>Ciudad:</span> Cota</p>
                      <p class="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p class="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i>   Editar</a>
                        <a href="#" class="btn btn-eliminar"><i class="fas fa-trash-alt"></i>   Eliminar</a>
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
                      <p class="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p class="card-text"><span>Ciudad:</span> Cota</p>
                      <p class="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p class="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i>   Editar</a>
                        <a href="#" class="btn btn-eliminar"><i class="fas fa-trash-alt"></i>   Eliminar</a>
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
                      <p class="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p class="card-text"><span>Ciudad:</span> Cota</p>
                      <p class="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p class="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i>   Editar</a>
                        <a href="#" class="btn btn-eliminar"><i class="fas fa-trash-alt"></i>   Eliminar</a>
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
                      <p class="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p class="card-text"><span>Ciudad:</span> Cota</p>
                      <p class="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p class="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i>   Editar</a>
                        <a href="#" class="btn btn-eliminar"><i class="fas fa-trash-alt"></i>   Eliminar</a>
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
                      <p class="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p class="card-text"><span>Ciudad:</span> Cota</p>
                      <p class="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p class="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" class="btn btn-primary"><i class="fas fa-pen"></i>   Editar</a>
                        <a href="#" class="btn btn-eliminar" data-bs-toggle="modal" data-bs-target="#eliminar"><i class="fas fa-trash-alt"></i>   Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <img src={granjasimg}/>
            </div>
          </div> 
            <h3 className="siguiente">Siguiente  <i class="fas fa-arrow-right"></i></h3>
          <Mgranjas/>
        </div>
          
      
    );
  }
  
  export default Granjas;
  
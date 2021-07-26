import './Granjas.css';
import granjasimg from './granjasimg.png';




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
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>   
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <img src={granjasimg}/>
            </div>
          </div> 

        </div>
          
      
    );
  }
  
  export default Granjas;
  
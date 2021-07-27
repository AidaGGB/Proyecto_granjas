import './Granjas.css';




function Mgranjas () {
    return (
    
        <div class="modal" tabindex={-1} id="eliminar">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h4>¿Esta seguro que desea borrar este registro?</h4>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn-m" data-bs-dismiss="modal">! Si, Eliminar !</button>
              <button type="button" className="btn-m2" data-bs-dismiss="modal">! No Cancelar !</button>
            </div>
            </div>
          </div>
        </div>
          
    );
  }
  
  export default Mgranjas;
  
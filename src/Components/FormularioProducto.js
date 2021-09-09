// import React from 'react'
// import '../styles/FormularioProducto.css'
// import fire from '../firebaseConfig'



// const FormularioProducto = () => {
    
    

//     return (
//         <div class="Box-container">
//             ;<>
//                 <div className="jumbotron jumbotron-fluid">
//                     <div className="container">
//                         <h1 className="display-8">Productos</h1>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <button
//                                 id="btnNuevo"
//                                 className="btn btn-primary"
//                                 data-toggle="tooltip"
//                                 title="Nuevo Producto"
//                             >
//                                 <svg
//                                     className="bi bi-plus-circle-fill"
//                                     width="1em"
//                                     height="1em"
//                                     viewBox="0 0 16 16"
//                                     fill="currentColor"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
//                                     />
//                                 </svg>
//                             </button>
//                             {/*Modal*/}
//                             <div
//                                 id="modalAltaEdicion"
//                                 className="modal fade"
//                                 tabIndex={-1}
//                                 role="dialog"
//                                 aria-labelledby="exampleModalLabel"
//                                 aria-hidden="true"
//                             >
//                                 <div className="modal-dialog" role="document">
//                                     <div className="modal-content">
//                                         <div className="modal-header bg-primary text-light">
//                                             <h5 className="modal-title" id="exampleModalLabel">
//                                                 Alta / Edición
//                                             </h5>
//                                             <button
//                                                 type="button"
//                                                 className="close"
//                                                 data-dismiss="modal"
//                                                 aria-label="Close"
//                                             >
//                                                 <span aria-hidden="true">×</span>
//                                             </button>
//                                         </div>
//                                         <form>
//                                             <div className="modal-body">
//                                                 <input id="id" type="hidden" />{" "}
//                                                 {/* ID que vamos a recibir de firebase */}
//                                                 <div className="form-group">
//                                                     <label>Código</label>
//                                                     <input
//                                                         id="codigo"
//                                                         type="text"
//                                                         className="form-control"
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <label>Imagen</label>
//                                                     <input
//                                                         id="imagen"
//                                                         type="image"
//                                                         className="form-control"
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <label>Descripción</label>
//                                                     <input
//                                                         id="descripcion"
//                                                         type="text"
//                                                         className="form-control"
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <label>Cantidad</label>
//                                                     <input
//                                                         id="cantidad"
//                                                         type="number"
//                                                         className="form-control"
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="input-group mb-3">
//                                                     <label>Precio</label>
//                                                     <span className="input-group-text">$</span>
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         aria-label="Amount (to the nearest dollar)"
//                                                     />
//                                                     <span className="input-group-text">.00</span>
//                                                 </div>

//                                             </div>
//                                             <div className="modal-footer">
//                                                 <button
//                                                     type="button"
//                                                     className="btn btn-secondary"
//                                                     data-dismiss="modal"
//                                                     tabIndex={2}
//                                                 >
//                                                     Cancelar
//                                                 </button>
//                                                 <button
//                                                     type="submit"
//                                                     id="btnGuardar"
//                                                     className="btn btn-success"
//                                                     translate={1}
//                                                 >
//                                                     Guardar
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                             <table id="tablaProductos" className="table table-bordered">
//                                 <thead>
//                                     <tr className="bg-dark text-light">
//                                         <th scope="col">CÓDIGO</th>
//                                         <th scope="col">IMAGEN</th>
//                                         <th scope="col">DESCRIPCIÓN</th>
//                                         <th scope="col">CANTIDAD</th>
//                                         <th scope="col">PRECIO</th>
//                                         <th scope="col">ACCIONES</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody id="bodyProductos"></tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </>

//         </div>
//     );
// };

// export default FormularioProducto

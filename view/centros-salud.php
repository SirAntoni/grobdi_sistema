<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Lista de centros de salud</h2>
            </header>
            <div class="card-body">
            <div class="row">
                    <div class="col-md-12 text-end">
                        <button onclick="openModal({opcion:'agregar',modulo:'centros de salud'})"
                            class='modal-form btn btn-sm btn-primary mb-3'>Nuevo centro de salud</button>
                    </div>
                </div>
                <div class='table-responsive'>
                    <table id='tableCentrosSalud' class="table table-bordered table-responsive-md table-hover mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th class='d-none'>Distrito</th>
                                <th class='d-none'>Observacion</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody id='table-centros-salud'>
                            <tr>
                                <td colspan='7' class='text-center'>Cargando...</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <nav class='mt-4' id='paginacion'>
                        <ul class="pagination justify-content-end">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </section>
    </div>
</div>

<div id="modalForm" class="modal-block modal-block-primary mfp-hide zoom-anim-dialog">
    <section class="card">
        <form id='formCentrosSalud' class='form'>
            <header class="card-header">
                <h2 class="modalTitle card-title"></h2>
            </header>

            <div class="card-body">

                <input type="hidden" class='opcion' name='opcion'>
                <input type="hidden" class='codigo' name='codigo'>
                <div class="form-group mb-2">
                    <label for="nombre">Nombre</label>
                    <input type="text" name='nombre' class="form-control" id="nombre" placeholder="Nombre">
                </div>
                <div class="form-group mb-2">
                    <label for="distrito">Distrito</label>
                    <select class='form-control' name="distrito" id="distrito">
                        <option value="">Selecciona una opcion.</option>
                    </select>
                </div>
                <div class="form-group mb-2">
                    <label for="observacion">Observacion</label>
                    <input type="text" name='observacion' class="form-control" id="observacion" placeholder="Observacion">
                </div>

            </div>
            <footer class="card-footer">
                <div class="row">
                    <div class="col-md-12 text-end">
                        <button type='submit' class="btnSubmit btn btn-primary modal-confirm"></button>
                        <button class="btn btn-default modal-dismiss">Cancelar</button>
                    </div>
                </div>
            </footer>
        </form>
    </section>
</div>

<div id="modalFormDelete" class="modal-block modal-header-color modal-block-danger mfp-hide zoom-anim-dialog">
    <section class="card">
        <header class="card-header">
            <h2 class="modalTitle card-title">Danger!</h2>
        </header>
        <div class="card-body">
            <div class="modal-wrapper">
                <div class="modal-icon">
                    <i class="fas fa-times-circle"></i>
                </div>
                <div class="modal-text">
                    <h4 class="font-weight-bold text-dark">Eliminar Registro</h4>
                    <p>¿Esta seguro que desea eliminar el registro?</p>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <div class="row">
                <div class="col-md-12 text-end">
                    <form id="formCentrosSaludDelete" class='form'>
                        <input type="hidden" class='opcion' name='opcion'>
                        <input type="hidden" class='codigo' name='codigo'>
                        <button type='submit' class="btnSubmit btn btn-danger">Eliminar</button>
                        <button class="btn btn-default modal-dismiss">Cancelar</button>
                    </form>
                </div>
            </div>
        </footer>
    </section>
</div>
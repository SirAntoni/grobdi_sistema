<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Lista de proveedores</h2>
            </header>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12 text-end">
                        <button onclick="openModal({opcion:'agregar',modulo:'proveedor'})"
                            class='modal-form btn btn-sm btn-primary mb-3'>Nuevo proveedor</button>
                    </div>
                </div>
                <div class='table-responsive'>
                    <table id='tableProveedores' class="table table-bordered table-responsive-md table-hover mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>RUC</th>
                                <th>Razon social</th>
                                <th>Telefono</th>
                                <th>Contacto</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody id='table-proveedores'>
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

<div id="modalForm" class="modal-block modal-block-primary mfp-hide zoom-anim-dialog modal-block-lg">
    <section class="card">
        <form id='formProveedores' class='form'>
            <header class="card-header">
                <h2 class="modalTitle card-title"></h2>
            </header>

            <div class="card-body">

                <input type="hidden" class='opcion' name='opcion'>
                <input type="hidden" class='id' name='id'>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="ruc">Ruc</label>
                            <input type="text" name='ruc' class="form-control" id="ruc" placeholder="Ruc">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="razon_social">Razón social</label>
                            <input type="text" name='razon_social' class="form-control" id="razon_social"
                                placeholder="Razón social">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="direccion">Dirección</label>
                            <input type="text" name='direccion' class="form-control" id="direccion"
                                placeholder="Dirección">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="correo">Correo</label>
                            <input type="text" name='correo' class="form-control" id="correo"
                                placeholder="Correo">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="correo_cpe">Correo CPE</label>
                            <input type="text" name='correo_cpe' class="form-control" id="correo_cpe"
                                placeholder="Correo CPE">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="telefono1">Telefono 1</label>
                            <input type="text" name='telefono1' class="form-control" id="telefono1"
                                placeholder="Telefono 1">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="telefono2">Telefono 2</label>
                            <input type="text" name='telefono2' class="form-control" id="telefono2"
                                placeholder="Telefono 2">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="persona_contacto">Persona de contacto</label>
                            <input type="text" name='persona_contacto' class="form-control" id="persona_contacto"
                                placeholder="Persona de contacto">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="observacion">Observacion</label>
                            <input type="text" name='observacion' class="form-control" id="observacion"
                                placeholder="Observacion">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <label for="estado">Estado</label>
                            <input type="text" name='estado' class="form-control" id="estado"
                                placeholder="Estado">
                        </div>
                    </div>
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
                    <form id="formProveedoresDelete" class='form'>
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
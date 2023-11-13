<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Lista de documentos</h2>
            </header>
            <div class="card-body">
                <div class="row d-flex align-items-center mb-3">
                    <div class="col-md-4 my-3">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <input type="text" data-plugin-datepicker class="form-control"
                                    placeholder='Fecha inicio'>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 my-3">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <input type="text" data-plugin-datepicker class="form-control" placeholder='Fecha fin'>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 text-end ">
                        <div class="form-group d-grid gap-2">
                        <button type="button" class="btn btn-primary btn-block mt-2"><i
                                            class="fas fa-search"></i>
                                        Filtrar</button>
                        </div>
                    </div>
                    <div class="col-md-2 text-end ">
                        <div class="form-group d-grid gap-2">
                        <a  href="system?view=registrar-venta" class="btn btn-primary btn-block mt-2"><i
                                            class="fas fa-plus"></i>
                                        Nuevo</a>
                        </div>
                    </div>
                </div>
                <div class='table-responsive'>
                    <table class="table table-responsive-md table-bordered table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Cliente</th>
                                <th>Documento</th>
                                <th>Numero</th>
                                <th>Total</th>
                                <th>Respuesta</th>
                                <th style='width:100px'>Acción</th>
                            </tr>
                        </thead>
                        <tbody id='table-clientes'>
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
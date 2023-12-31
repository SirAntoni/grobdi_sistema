<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Lista de clientes</h2>
            </header>
            <div class="card-body">
            <div class="row">
                    <div class="col-md-12 text-end">
                        <button onclick="openModal({opcion:'agregar',modulo:'categorias'})"
                            class='modal-form btn btn-sm btn-primary mb-3'>Nuevo cliente</button>
                    </div>
                </div>
                <div class='table-responsive'>
                    <table class="table table-bordered table-responsive-md table-hover mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Documento</th>
                                <th>Nombre</th>
                                <th>Doctor</th>
                                <th>Estado</th>
                                <th>Acción</th>
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
<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">
                <div class="card-actions">
                    <a href="#" class="card-action card-action-toggle" data-card-toggle></a>
                    <a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
                </div>

                <h2 class="card-title">Detalle Cliente</h2>
            </header>
            <div class="card-body">
                <form id="formEditarClientes">
                    <div class="row">
                        <div class="col-md-6 mt-3">

                            <div class="form-group">
                                <label for="codigo_cliente">Codigo cliente:</label>
                                <input type="text" id="codigo_cliente" class="form-control" placeholder="codigo cliente">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="documento">Documento:</label>
                                <input type="text" id="numero_documento" class="form-control" placeholder="Ingrese su numero de documento">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" id="nombre_cliente" class="form-control" placeholder="Ingrese su nombre">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="direccion1">Direccion 1:</label>
                                <input type="text" id="direccion1" class="form-control" placeholder="Ingrese una direccion">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="direccion2">Direccion 2:</label>
                                <input type="text" id="direccion2" class="form-control" placeholder="Ingrese una direccion">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="correo1">Correo 1:</label>
                                <input type="text" id="correo1" class="form-control" placeholder="Ingrese un correo electronico">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="correo2">Correo 2:</label>
                                <input type="text" id="correo2"  class="form-control" placeholder="Ingrese un correo electronico">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="telefono1">Telefono 1:</label>
                                <input type="text" id="telefono1"  class="form-control" placeholder="Ingrese un telefono">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="telefono2">Telefono 2:</label>
                                <input type="text" id="telefono2"  class="form-control" placeholder="Ingrese un telefono">
                            </div>
                        </div>
                        <div class="col-md-6 mt-3">
                            <div class="form-group">
                                <label for="estado">Estado:</label>
                                <select class="form-control" name="estado_cliente" id="estado_cliente">
                                    <option value="Activo">Activo</option>
                                    <option value="Anulado">Anulado</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 mt-3">
                            <div class="form-group d-flex justify-content-end">
                                <button class="btn btn-success" type='submit'><i class="fas fa-save me-1"></i>Guardar cambios</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    </div>
</div>
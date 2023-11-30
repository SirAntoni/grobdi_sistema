<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">

                <h2 class="card-title">Datos del pedido</h2>

            </header>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="documento">Documento</label>
                            <select id="documento" name="documento" class='form-control' id="documento">
                                <option value="">Seleccione un documento</option>
                                <option value="pedido">Pedido</option>
                                <option value="proforma">Proforma</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="forma_pago">Forma de pago</label>
                            <select name="forma_pago" class='form-control' id="forma_pago">
                                <option value="">Seleccione forma de pago</option>
                                <option value="pedido">Credito</option>
                                <option value="proforma">Credito 15 dias</option>
                                <option value="proforma">Credito 30 dias</option>
                                <option value="proforma">Transferencia</option>
                                <option value="proforma">Deposito</option>
                                <option value="proforma">Tarjeta de credito</option>
                                <option value="proforma">Efectivo</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="nombre_cliente">Nombre</label>
                            <input type="text" name='nombre_cliente' id='nombre_cliente' class='form-control'
                                placeholder='Pepito Garcia'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">

                        <label for="doctor">Doctor</label>
                        <div class="input-group">
                            <input type="text" class="form-control" name='doctor' id='doctor'
                                placeholder='Dr. Chapatin'>
                            <button class="btn btn-success"
                                onclick="openModal({opcion:'listarDoctores',modulo:'pedidos'})" type="button"><i
                                    class="fas fa-user-md fa-lg"></i></button>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="tipo_documento">Tipo de documento</label>
                            <select name="tipo_documento" class='form-control' id="tipo_documento">
                                <option value="dni">DNI</option>
                                <option value="ruc">RUC</option>
                                <option value="ce">CE</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="numero_documento">Número de documento</label>
                            <input type="text" name='numero_documento' id='numero_documento' class='form-control'
                                placeholder='717856473'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="telefono_doctor">Telefono doctor</label>
                            <input type="text" name='telefono_doctor' id='telefono_doctor' class='form-control'
                                placeholder='999999999'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="paciente">Paciente</label>
                            <input type="text" name='paciente' id='paciente' class='form-control'
                                placeholder='Juanito alimaña'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="telefono_asistente">Telefono asistente</label>
                            <input type="text" name='telefono_asistente' id='telefono_asistente' class='form-control'
                                placeholder='999999999'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="telefono_cliente">Telefono cliente</label>
                            <input type="text" name='telefono_cliente' id='telefono_cliente' class='form-control'
                                placeholder='999999999'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for='fecha_entrega'>Fecha de entrega</label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <input type="text" data-plugin-datepicker class="form-control">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">


                    <div class="col-md-12 mt-3">
                        <button disabled='disabled' type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-save"></i>
                            Grabar nuevo cliente</button>
                        <button onclick="openModal({opcion:'listarClientes',modulo:'pedidos'})" type="button"
                            class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-search"></i>
                            Buscar cliente</button>
                        <button onclick="openModal({opcion:'datosEnvio',modulo:'pedidos'})" type="button"
                            class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-home"></i>
                            Datos de envio</button>
                        <button onclick="openModal({opcion:'agregarItem',modulo:'pedidos'})" type="button"
                            class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-plus"></i>
                            Agregar item al detalle</button>
                        <button onclick="openModal({opcion:'agregarDelivery',modulo:'pedidos'})" type="button"
                            class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-paper-plane"></i>
                            Agregar delivery</button>
                        <button onclick="openModal({opcion:'agregarBolsa',modulo:'pedidos'})" type="button"
                            class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-shopping-cart"></i>
                            Agregar bolsa</button>
                    </div>
                </div>

                <div class="row my-4">


                    <div class="col-md-12">
                        <h3>Detalle pedido</h3>
                        <div class='table-responsive'>
                            <table id='tableItemsPedido'
                                class="table table-bordered table-responsive-md table-hover mb-0">
                                <thead class='dark'>
                                    <tr class='text-center'>
                                        <th width='70px'>SKU</th>
                                        <th>Producto</th>
                                        <th width='150px'>Cantidad</th>
                                        <th width='150px'>P. Unitario</th>
                                        <th width='150px'>Subtotal</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody id="table-items-pedido">
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <h3>Total del Pedido S/ 176.900</h3>

                </div>

                <div class="row">
                    <div class="col-md-8 mt-3">
                        <div class="form-group">
                            <input type="text" name='observacion' id='observacion' class='form-control'
                                placeholder='Ingrese una observació'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <select name="tipo_pedido" id="tipo_pedido" class='form-control'>
                                <option value="">Seleccione un tipo</option>\
                                <option value="">Tipo delivery</option>
                                <option value="">Tipo tienda</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <button id='registrar' type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i
                                    class="fas fa-save"></i>
                                Grabar pedido</button>
                            <button disabled="disabled" type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-edit"></i>
                                Editar pedido</button>
                            <button disabled="disabled" type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-print"></i>
                                Imprimir pedido</button>
                            <button type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-cog"></i>
                                Importar pedido</button>
                        </div>
                    </div>











                </div>
            </div>
        </section>
    </div>
</div>




<!-- Modals -->

<div id="modalListarDoctores" class="modal-block modal-block-primary modal-block-lg mfp-hide zoom-anim-dialog">
    <section class="card">

        <header class="card-header">
            <div class="card-actions">
                <a href="#" class="card-action card-action-dismiss modal-dismiss"></a>
            </div>

            <h2 class="modalTitle card-title"></h2>
        </header>

        <div class="card-body">
            <div class="row d-flex justify-content-end mb-3">
                <div class="col-md-3 ">
                    <div class="form-group">
                        <input id='buscarDoctor' type="text" class='form-control' placeholder='Buscar doctor'>
                    </div>
                </div>
            </div>
            <div class='table-responsive'>
                <table id="tableDoctores" class="table table-responsive-md table-hover mb-0 table-bordered">
                    <thead>
                        <tr>
                            <th class='d-none'>Codigo</th>
                            <th>Nombre</th>
                            <th>CMP</th>
                            <th>Zona</th>
                            <th>Telefono</th>
                            <th>Telefono Asistente</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody id='table-doctores'>
                        <tr>
                            <td colspan='7' class='text-center'>Cargando...</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <nav class='mt-4' id='paginacion'>


        </div>
    </section>
</div>

<div id="modalListarClientes" class="modal-block modal-block-primary modal-block-lg mfp-hide zoom-anim-dialog">
    <section class="card">

        <header class="card-header">
            <div class="card-actions">
                <a href="#" class="card-action card-action-dismiss modal-dismiss"></a>
            </div>

            <h2 class="modalTitle card-title"></h2>
        </header>

        <div class="card-body">
            <div class="row d-flex justify-content-end mb-3">
                <div class="col-md-3 ">
                    <div class="form-group">
                        <input id='buscarCliente' type="text" class='form-control' placeholder='Buscar cliente'>
                    </div>
                </div>
            </div>
            <div class='table-responsive'>
                <table id="tableClientes" class="table table-responsive-md table-hover mb-0 table-bordered">
                    <thead>
                        <tr>
                            <th class='d-none'>Codigo</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Documento</th>
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
            <nav class='mt-4' id='paginacionClientes'>


        </div>
    </section>
</div>

<div id="modalDatosEnvio" class="modal-block modal-block-primary mfp-hide zoom-anim-dialog">
    <section class="card">

        <header class="card-header">
            <div class="card-actions">
                <a href="#" class="card-action card-action-dismiss modal-dismiss"></a>
            </div>

            <h2 class="modalTitle card-title"></h2>
        </header>

        <form id='formDatosEnvio'>
            <div class="card-body">
                <div class="form-group">
                    <label for="dsitrito">Distrito</label>
                    <input type="text" name='distrito' id='distrito' placeholder='Ingresa un dsitrito'
                        class='form-control'>
                </div>
                <div class="form-group">
                    <label for="direccion">Dirección</label>
                    <input type="text" name='direccion' id='direccion' placeholder='Ingresa una direccion'
                        class='form-control'>
                </div>
                <div class="form-group">
                    <label for="referencia">Referencia</label>
                    <input type="text" name='referencia' id='referencia' placeholder='Ingresa una referencia'
                        class='form-control'>
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

<div id="modalDelivery" class="modal-block modal-block-primary mfp-hide zoom-anim-dialog">
    <section class="card">

        <header class="card-header">
            <div class="card-actions">
                <a href="#" class="card-action card-action-dismiss modal-dismiss"></a>
            </div>

            <h2 class="modalTitle card-title"></h2>
        </header>

        <div class="card-body">
            <div class='table-responsive'>
                <table class="table table-responsive-md table-hover mb-0 table-bordered">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Producto</th>
                            <th width='150px'>P.V</th>
                            <th width='150px'>Cantidad</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1000331</td>
                            <td>DELIVERY LIMA</td>
                            <td class="text-center"><input type="number" class='form-control' value="8.00"></td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1000332</td>
                            <td>DDELIVERY PROVINCIA</td>
                            <td class="text-center"><input type="number" class='form-control' value="0"></td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </section>
</div>

<div id="modalBolsa" class="modal-block modal-block-primary mfp-hide zoom-anim-dialog">
    <section class="card">

        <header class="card-header">
            <div class="card-actions">
                <a href="#" class="card-action card-action-dismiss modal-dismiss"></a>
            </div>

            <h2 class="modalTitle card-title"></h2>
        </header>

        <div class="card-body">
            <div class='table-responsive'>
                <table class="table table-responsive-md table-hover mb-0 table-bordered">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Producto</th>
                            <th width='150px'>Cantidad</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1000746</td>
                            <td>BOLSA 10X15X2 LOGO GRANDE</td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1000717</td>
                            <td>BOLSA 8X12 - LOGO - CHICA</td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1001083</td>
                            <td>BOLSA PARA BASURA TACHO GRANDE</td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1001087</td>
                            <td>BOLSA PARA BASURA TACHO MEDIANO</td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>1000846</td>
                            <td>BOLSA ZIPLOC</td>
                            <td class="text-center"><input type="number" class='form-control' value="1.00"></td>
                            <td width='30px' class="text-center">
                                <a href="system?view=detalle-doctor&codigo_doctor=${unidad[" codigo_doctor"]}"><i
                                        class="fas fa-check-circle"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </section>
</div>

<div id="modalItems" class="modal-block modal-block-primary modal-block-lg mfp-hide zoom-anim-dialog">
    <section class="card">

        <header class="card-header">
            <div class="card-actions">
                <a href="#" class="card-action card-action-dismiss modal-dismiss"></a>
            </div>

            <h2 class="modalTitle card-title"></h2>
        </header>

        <div class="card-body">
            <div class="row d-flex justify-content-end mb-3">
                <div class="col-md-3 ">
                    <div class="form-group">
                        <input id='buscarItem' type="text" class='form-control' placeholder='Buscar item'>
                    </div>
                </div>
            </div>
            <div class='table-responsive'>
                <table id="tableItems" class="table table-responsive-md table-hover mb-0 table-bordered">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Producto</th>
                            <th>Saldo</th>
                            <th>P.V</th>
                            <th>Cantidad</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody id='table-items'>
                        <tr>
                            <td colspan='7' class='text-center'>Cargando...</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <nav class='mt-4' id='paginacionItems'>


        </div>
    </section>
</div>
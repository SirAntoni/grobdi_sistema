<div class="row">
    <div class="col-lg-12">
        <section class="card">
            <header class="card-header">
                <h2 class="card-title">Nuevo documento</h2>
            </header>
            <div class="card-body">
                <div class="row">
                <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="numero_documento">RUC/DNI</label>
                            <input type="text" name='numero_documento' id='numero_documento' class='form-control'
                                placeholder='00000000'>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for="documento">Documento</label>
                            <select name="documento" class='form-control' id="documento">
                                <option value="">Seleccione un documento</option>
                                <option value="1">Boleta</option>
                                <option value="2">Factura</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div class="form-group">
                            <label for='fecha_entrega'>Fecha</label>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <input type="text" data-plugin-datepicker class="form-control" placeholder='2000-01-01'>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">

                        <label for="cliente">Cliente</label>
                        <div class="input-group">
                            <input type="text" class="form-control" name='cliente' id='cliente'
                                placeholder='Pepito Garcia'>
                            <button class="btn btn-success" type="button"><i class="fas fa-user-plus fa-lg"></i></button>
                        </div>
                    </div>
                    <div class="col-md-8 mt-3">
                        <div class="form-group">
                            <label for="direccion">Dirección</label>
                            <input type="text" name='direccion' id='direccion' class='form-control'
                                placeholder='717856473'>
                        </div>
                    </div>
                    
                </div>


                <div class="row">


                    <div class="col-md-12 mt-3">
                        <button type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-plus"></i>
                            Agregar item al detalle</button>
                    </div>
                </div>

                <div class="row my-4">


                    <div class="col-md-12">
                        <h3>Detalle del documento</h3>
                        <div class='table-responsive'>
                            <table id='tableDistritos'
                                class="table table-bordered table-responsive-md table-hover mb-0">
                                <thead class='dark'>
                                    <tr>
                                        <th width='70px'>SKU</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>P. Unitario</th>
                                        <th>Total</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1002063</td>
                                        <td>GOMITAS DE ZINC 40MG VIT C 100MG VIT D31000 UI</td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td>0.000</td>
                                        <td class='text-center'><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>1000746</td>
                                        <td>GOMITAS DE ZINC 30 MG + MELATONINA 3MG- VITAMINA D3 1000 UI</td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td>0.000</td>
                                        <td class='text-center'><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>1000331</td>
                                        <td>DELIVERY LIMA</td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td>0.000</td>
                                        <td class='text-center'><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>1000746</td>
                                        <td>BOLSA 10X15X2 LOGO GRANDE</td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td><input type="number" width='10' value='0'></td>
                                        <td>0.000</td>
                                        <td class='text-center'><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <h3>Total documento S/ 176.900</h3>

                </div>

                <div class="row">
                    <div class="col-md-12 mt-3">
                        <div class="form-group">
                            <input type="text" name='observacion' id='observacion' class='form-control'
                                placeholder='Ingrese una observació'>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 mt-3">
                        <button type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-save"></i>
                            Grabar documento</button>
                        <button type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-print"></i>
                            Imprimir ticket</button>
                        <button type="button" class="mb-1 mt-1 me-1 btn btn-primary"><i class="fas fa-cog"></i>
                            Importar pedido</button>
                    </div>
                </div>











            </div>
    </div>
    </section>
</div>
</div>
$(function() {
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    if (params.get('view') === "detalle-cliente") {
        obtener_cliente(params.get('codigo-cliente'))
        guardar_cliente()
    }
    if (params.get('view') === "detalle_doctor") {
        obtener_doctor(params.get('codigo_doctor'))
    }
    if (params.get('view') === "clientes") listar_clientes(1);
    if (params.get('view') === "doctores") listar_doctores(1);
    if (params.get('view') === "documentos-electronicos") listar_documentos(1);
    if (params.get('view') === "insumos") listar_insumos(1);

    if (params.get('view') === "envases") listar_envases(1);
    if (params.get('view') === "bases") listar_bases(1);
    if (params.get('view') === "etiquetas") listar_etiquetas(1);

    if (params.get('view') === "recetas") listar_recetas(1);
    if (params.get('view') === "detalle-receta") obtener_insumos_receta(params.get('codigo-receta'));
    if (params.get('view') === "ventas") listar_documentos(1);
    if (params.get('view') === "unidad-medida") {
        cargar_unidades();
        store_unidad()
        delete_unidad()
    }

    if (params.get('view') === "presentacion") {
        cargar_presentaciones();
        store_presentacion();
        delete_presentacion();
    }

    if (params.get('view') === "laboratorios") {
        cargar_laboratorios();
        store_laboratorio();
        delete_laboratorio();
    }

    if (params.get('view') === "categorias") {
        cargar_categorias();
        store_categorias();
        delete_categoria();
    }

    if (params.get('view') === "visitadores") {
        cargar_visitadores();
        store_visitador();
        delete_visitador();
    }

    if (params.get('view') === "zonas") {
        cargar_zonas();
        cargar_visitadores_form();
        store_zona();
        delete_zona();
    }

    if (params.get('view') === "distritos") {
        cargar_distritos();
        cargar_zonas_form();
        store_distrito();
        delete_distrito();
    }

    if (params.get('view') === "centros-salud") {
        listar_centros_salud();
        cargar_distritos_form();
        store_centro_salud();
        delete_centro_salud();
    }

    if (params.get('view') === "registrar-pedido") {
        listar_doctores_pedidos(1, 5);
        buscarDoctor();
        listar_clientes_pedidos(1, 5);
        buscarCliente();
        listar_recetas_pedidos(1, 5);
        buscarItem();
        registrar_pedidos();
        guardarDatosEnvio();
    }

});

const guardarDatosEnvio = function() {
    $("#formDatosEnvio").submit(function(e) {
        e.preventDefault()
        const data = $(this).serializeArray()

        if (data[0].value === '' || data[1].value === '' || data[2].value === '') {
            Swal.fire(
                'Campos vacios',
                'Ingrese todos los campos',
                'error'
            )
        } else {
            const dataJSON = {}
            data.map(item => {
                dataJSON[item.name] = item.value
            })

            const dataEnvio = JSON.stringify(dataJSON)

            localStorage.setItem('datosEnvio', dataEnvio);
            $.magnificPopup.close();

        }


    })
}

const registrar_pedidos = function() {
    $("#registrar").click(function(e) {
        e.preventDefault();
        Swal.fire(
            'Error 502',
            'No se encuetra codigo de pedido.',
            'error'
        )
    })
}

const buscarDoctor = function() {

    $("#buscarDoctor").on('keydown', function(e) {
        const term = $(this).val();
        console.log(term)
        listar_doctores_pedidos(1, 5, term);
    })
}

const buscarCliente = function() {

    $("#buscarCliente").on('keydown', function(e) {
        const term = $(this).val();

        listar_clientes_pedidos(1, 5, term);
    })
}

const buscarItem = function() {

    $("#buscarItem").on('keydown', function(e) {
        const term = $(this).val();
        listar_recetas_pedidos(1, 5, term);
    })
}

const store_unidad = function() {
    $('#formUnidades').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/unidad-medida',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_unidades();
                    $.magnificPopup.close();
                    $('#formUnidades').trigger('reset');

                }


            }
        })
    })
}

const store_centro_salud = function() {
    $('#formCentrosSalud').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/centros-salud',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    listar_centros_salud();
                    $.magnificPopup.close();
                    $('#formCentrosSalud').trigger('reset');

                }


            }
        })
    })
}

const store_distrito = function() {
    $('#formDistritos').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/distritos',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_distritos();
                    $.magnificPopup.close();
                    $('#formDistritos').trigger('reset');

                }


            }
        })
    })
}

const store_zona = function() {
    $('#formZonas').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/zonas',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_zonas();
                    $.magnificPopup.close();
                    $('#formZonas').trigger('reset');

                }


            }
        })
    })
}

const store_visitador = function() {
    $('#formVisitadores').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/visitadores',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_visitadores();
                    $.magnificPopup.close();
                    $('#formVisitadores').trigger('reset');

                }


            }
        })
    })
}

const store_presentacion = function() {
    $('#formPresentaciones').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/presentacion',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_presentaciones();
                    $.magnificPopup.close();
                    $('#formPresentaciones').trigger('reset');

                }
            }
        })
    })
}

const store_categorias = function() {
    $('#formCategorias').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/categorias',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_categorias();
                    $.magnificPopup.close();
                    $('#formCategorias').trigger('reset');

                }
            }
        })
    })
}

const store_laboratorio = function() {
    $('#formLaboratorios').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/laboratorios',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data);
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_laboratorios();
                    $.magnificPopup.close();
                    $('#formLaboratorios').trigger('reset');

                }
            }
        })
    })
}

const delete_unidad = function() {
    $('#formUnidadesDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/unidad-medida',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_unidades();
                    $.magnificPopup.close();
                }
            }
        })
    })
}

const delete_centro_salud = function() {
    $('#formCentrosSaludDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/centros-salud',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    listar_centros_salud();
                    $.magnificPopup.close();
                }
            }
        })
    })
}


const delete_laboratorio = function() {
    $('#formLaboratoriosDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/laboratorios',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_laboratorios();
                    $.magnificPopup.close();
                }
            }
        })
    })
}

const delete_presentacion = function() {
    $('#formPresentacionesDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/presentacion',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_presentaciones();
                    $.magnificPopup.close();
                }
            }
        })
    })
}

const delete_categoria = function() {
    $('#formCategoriasDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/categorias',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_categorias();
                    $.magnificPopup.close();
                }
            }
        })
    })
}

const delete_distrito = function() {
    $('#formDistritosDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/distritos',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_distritos();
                    $.magnificPopup.close();
                }
            }
        })
    })
}

const delete_visitador = function() {
    $('#formVisitadoresDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/visitadores',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_visitadores();
                    $.magnificPopup.close();
                }
            }
        })
    })
}

const delete_zona = function() {
    $('#formZonasDelete').submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            url: 'controller/zonas',
            method: 'POST',
            data: data,
            success: function(data) {
                const response = JSON.parse(data)
                if (response.status === 'error') {
                    Swal.fire(
                        response.status,
                        response.message,
                        'error'
                    )
                } else {
                    Swal.fire(
                        response.status,
                        response.message,
                        'success'
                    )
                    cargar_zonas();
                    $.magnificPopup.close();
                }
            }
        })
    })
}


const eliminar_cliente = function(codigo = '') {
    Swal.fire(
        'Error',
        'Usted no tiene permisos para esta accion',
        'error'
    )
}

const guardar_cliente = function() {
    $("#formEditarClientes").submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize();
        console.log(data);
    })
}

const cargar_unidades = function() {
    $.ajax({
        url: 'controller/unidad-medida',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((unidad) => {
                    const estado = (unidad.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${unidad.codigo}</td><td>${unidad.nombre}</td><td>${unidad.fecha_creacion}</td> <td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'unidad',id:${unidad.codigo}, posicion: ${position}, tabla: 'tableUnidades'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'unidad',id:${unidad.codigo}, posicion: ${position}, tabla: 'tableUnidades'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='5'>No se encontraron resultados</td></tr>`;
            }

            $("#table-unidad-medida").html(html);



        }
    })
}

const cargar_zonas = function() {
    $.ajax({
        url: 'controller/zonas',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((unidad) => {
                    const estado = (unidad.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${unidad.codigo}</td><td>${unidad.nombre}</td><td class='d-none'>${unidad.visitador}</td><td class='d-none'>${unidad.observacion}</td><td>${unidad.fecha_creacion}</td> <td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'zona',id:${unidad.codigo}, posicion: ${position}, tabla: 'tableZonas'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'zona',id:${unidad.codigo}, posicion: ${position}, tabla: 'tableZonas'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='5'>No se encontraron resultados</td></tr>`;
            }

            $("#table-zonas").html(html);



        }
    })
}

const cargar_distritos = function() {
    $.ajax({
        url: 'controller/distritos',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((distrito) => {
                    const estado = (distrito.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${distrito.codigo}</td><td>${distrito.nombre}</td><td class='d-none'>${distrito.zona}</td><td class='d-none'>${distrito.ubigeo}</td><td class='d-none'>${distrito.visitador}</td><td class='d-none'>${distrito.observacion}</td><td>${distrito.fecha_creacion}</td> <td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'distrito',id:${distrito.codigo}, posicion: ${position}, tabla: 'tableDistritos'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'distrito',id:${distrito.codigo}, posicion: ${position}, tabla: 'tableDistritos'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='5'>No se encontraron resultados</td></tr>`;
            }

            $("#table-distritos").html(html);



        }
    })
}

const cargar_categorias = function() {
    $.ajax({
        url: 'controller/categorias',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((categoria) => {
                    const estado = (categoria.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${categoria.codigo}</td><td>${categoria.nombre}</td><td>${categoria.fecha_creacion}</td> <td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'categoria',id:${categoria.codigo}, posicion: ${position}, tabla: 'tableCategorias'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'categoria',id:${categoria.codigo}, posicion: ${position}, tabla: 'tableCategorias'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='5'>No se encontraron resultados</td></tr>`;
            }

            $("#table-categorias").html(html);



        }
    })
}

const cargar_presentaciones = function() {
    $.ajax({
        url: 'controller/presentacion',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((presentacion) => {
                    const estado = (presentacion.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${presentacion.codigo}</td><td>${presentacion.nombre}</td><td>${presentacion.fecha_creacion}</td> <td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'presentacion',id:${presentacion.codigo}, posicion: ${position}, tabla: 'tablePresentaciones'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'presentacion',id:${presentacion.codigo}, posicion: ${position}, tabla: 'tablePresentaciones'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='5'>No se encontraron resultados</td></tr>`;
            }
            $("#table-presentaciones").html(html);



        }
    })
}

const cargar_laboratorios = function() {
    $.ajax({
        url: 'controller/laboratorios',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((laboratorio) => {
                    const estado = (laboratorio.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${laboratorio.codigo}</td><td>${laboratorio.ruc}</td><td>${laboratorio.nombre}</td><td>${laboratorio.contacto}</td> <td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'laboratorio',id:${laboratorio.codigo}, posicion: ${position}, tabla: 'tableLaboratorios'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'laboratorio',id:${laboratorio.codigo}, posicion: ${position}, tabla: 'tableLaboratorios'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='6'>No se encontraron resultados</td></tr>`;
            }

            $("#table-laboratorios").html(html);



        }
    })
}

const cargar_visitadores = function() {
    $.ajax({
        url: 'controller/visitadores',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            if (data.length > 0) {
                data.map((visitador) => {
                    const estado = (visitador.estado === '1') ? 'Activo' : 'Inactivo';
                    html = html + `<tr> <td class='text-center'>${visitador.codigo}</td><td>${visitador.nombres}</td><td class='d-none'>${visitador.telefono}</td><td class='d-none'>${visitador.correo}</td><td class='d-none'>${visitador.cuota}</td><td class='d-none'>${visitador.observacion}</td><td>${visitador.fecha_creacion}</td><td>${estado}</td> <td width='30px' class="text-center">
                <a href='#' onclick="openModal({opcion:'editar',modulo:'visitador',id:${visitador.codigo}, posicion: ${position}, tabla: 'tableVisitadores'})"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'visitador',id:${visitador.codigo}, posicion: ${position}, tabla: 'tableVisitadores'})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
                    position++
                })
            } else {
                html = html + `<tr><td class='text-center' colspan='6'>No se encontraron resultados</td></tr>`;
            }

            $("#table-visitadores").html(html);



        }
    })
}

const cargar_visitadores_form = function() {
    $.ajax({
        url: 'controller/visitadores',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            if (data.length > 0) {
                data.map((visitador) => {
                    html = html + `<option value='${visitador.codigo}'>${visitador.nombres}</option>`;
                });
            } else {
                html = html + `<option value=''>Sin resultados<option>`;
            }

            $("#visitador").html(html);



        }
    })
}

const cargar_zonas_form = function() {
    $.ajax({
        url: 'controller/zonas',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            if (data.length > 0) {
                data.map((zona) => {
                    html = html + `<option value='${zona.codigo}'>${zona.nombre}</option>`;
                });
            } else {
                html = html + `<option value=''>Sin resultados<option>`;
            }

            $("#zona").html(html);


        }
    })
}

const cargar_distritos_form = function() {
    $.ajax({
        url: 'controller/distritos',
        success: function(response) {
            const data = JSON.parse(response);
            let html = ``;
            if (data.length > 0) {
                data.map((distrito) => {
                    html = html + `<option value='${distrito.codigo}'>${distrito.nombre}</option>`;
                });
            } else {
                html = html + `<option value=''>Sin resultados<option>`;
            }

            $("#distrito").html(html);


        }
    })
}

const obtener_insumos_receta = function(codigo_receta = '') {
    if (!codigo_receta) window.location = "system?view=recetas"

    const body = {
        option: 'obtener_insumos_receta',
        codigo_receta
    }

    $.ajax({
        url: 'controller/recetas.php',
        method: 'POST',
        data: body,
        success: function(response) {

            const data = JSON.parse(response)
            let html = ``;
            console.log(data);
            data.forEach((unidad) => {
                html = html +
                    `<tr> <td>${unidad["codigo_sku_insumo"]}</td><td>${unidad["articulo"]}</td><td>${unidad["cantidad"]}</td> <td>${unidad["unidad_medida"]}</td> <td width='30px' class="">
                            <a href="system?view=detalle-receta&codigo-receta=${unidad["codigo_interno_principal"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_interno_principal"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });

            $("#table-insumos-receta").html(html);
        }
    })

}

const obtener_cliente = function(codigo_cliente = '') {
    if (!codigo_cliente) window.location = "system?view=clientes"

    const body = {
        option: 'obtener_cliente',
        codigo_cliente
    }

    $.ajax({
        url: 'controller/clientes.php',
        method: 'POST',
        data: body,
        success: function(response) {
            const data = JSON.parse(response)
            $("#codigo_cliente").val(data.codigo_cliente)
            $("#numero_documento").val(data.numero_documento)
            $("#nombre_cliente").val(data.nombre_cliente)
            $("#direccion1").val(data.direccion1)
            $("#direccion2").val(data.direccion2)
            $("#correo1").val(data.correo1)
            $("#correo2").val(data.correo2)
            $("#telefono1").val(data.telefono1)
            $("#telefono2").val(data.telefono2)
            $("#estado_cliente").val(data.estado_cliente)
        }
    })

}

const obtener_doctor = function(codigo_doctor = '') {

    if (!codigo_doctor) window.location = "system?view=doctores"

    const body = {
        option: 'obtener_doctor',
        codigo_doctor
    }

    $.ajax({
        url: 'controller/doctores.php',
        method: 'POST',
        data: body,
        success: function(response) {
            const data = JSON.parse(response)
            console.log(data)
            $("#codigo_doctor").val(data.codigo_doctor)
            $("#nombre_doctor").val(data.nombre_doctor)
            $("#apellido_doctor").val(data.apellido_doctor)
            $("#codigo_cmp").val(data.codigo_cmp)
            $("#telefono").val(data.telefono1)
        }
    })



}

const listar_doctores = function(pagina = 1) {
    $.ajax({
        url: `controller/doctores.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {

                const tipo = unidad["tipo"] || ''
                const zona = unidad["zona"] || ''
                const registro = unidad["registro"] || ''
                const ultima_visita = unidad["ultima_visita"] || ''
                const nuevo = unidad["nuevo"] || ''

                html =
                    html +
                    `<tr> <td>${unidad["codigo_doctor"]}</td><td>${unidad["nombre_doctor"]}</td><td>${zona}</td> <td>${unidad["distrito"]}</td><td>${tipo}</td><td>${registro}</td><td>${ultima_visita}</td><td>${nuevo}</td><td width='30px' class="">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_doctor"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_doctores(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_doctores(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_doctores(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_doctores(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_doctores(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_doctores(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-clientes").html(html);
        }
    });
};

const listar_doctores_pedidos = function(pagina = 1, cantPaginas = 0, term = '') {
    term = $("#buscarDoctor").val();
    $.ajax({
        url: `controller/doctores.php?pagina=${pagina}&cantPaginas=${cantPaginas}&term=${term}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            data.forEach((doctor) => {

                const zona = doctor["zona"] || ''
                const telefono = doctor["telefono1"] || ''
                const telefono_asistente = doctor["telefono_asistente"] || ''

                html =
                    html +
                    `<tr> <td class='d-none'>${doctor["codigo_doctor"]}</td><td>${doctor["nombre_doctor"]}</td><td>${zona}</td><td>${zona}</td><td>${telefono}</td><td>${telefono_asistente}</td><td width='30px' class="text-center">
                            <a href="#" onclick="openModal({opcion:'obtenerDoctor',modulo:'pedidos',id:${doctor['codigo_doctor']}, posicion: ${position}, tabla: 'tableDoctores'})"><i class="fas fa-check-circle"></i></a>
                        </td></tr>`;

                position++
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_doctores_pedidos(${pagina - 1},5,'${term}')" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_doctores_pedidos(${numeroPaginas},5,'${term}')" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_doctores_pedidos(1,5,'${term}')" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_doctores_pedidos(1,5,'${term}')" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_doctores_pedidos(${numeroPaginas},5,'${term}')" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_doctores_pedidos(${count},5,'${term}')" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_doctores_pedidos(${pagina + 1},5,'${term}')" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-doctores").html(html);
        }
    });
};

const listar_clientes_pedidos = function(pagina = 1, cantPaginas = 0, term = '') {
    term = $("#buscarCliente").val() || '';
    $.ajax({
        url: `controller/clientes.php?pagina=${pagina}&cantPaginas=${cantPaginas}&term=${term}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)

            console.log(data)
            data.forEach((cliente) => {
                const documento = cliente["numero_documento"] || ''
                html =
                    html +
                    `<tr> <td class='d-none' >${cliente["codigo_cliente"]}</td><td>${cliente["nombre_cliente"]}</td><td>${cliente["telefono1"]}</td><td>${documento}</td><td width='30px' class="text-center">
                            <a href="#" onclick="openModal({opcion:'obtenerCliente',modulo:'pedidos',id:${cliente['codigo_cliente']}, posicion: ${position}, tabla: 'tableClientes'})"><i class="fas fa-check-circle"></i></a>
                        </td></tr>`;
                position++
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_clientes_pedidos(${pagina - 1},5,'${term}')" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${numeroPaginas},5,'${term}')" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(1,5,'${term}')" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(1,5,'${term}')" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${numeroPaginas},5,'${term}')" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_clientes_pedidos(${pagina + 1},5,'${term}')" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacionClientes").html(html_paginacion);
            $("#table-clientes").html(html);
        }
    });
};

const listar_recetas_pedidos = function(pagina = 1, cantPaginas = 0, term = '') {
    term = $("#buscarItem").val() || '';
    $.ajax({
        url: `controller/recetas.php?pagina=${pagina}&cantPaginas=${cantPaginas}&term=${term}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;
            data.forEach((unidad) => {
                html =
                    html +
                    `<tr> <td>${unidad["codigo_sku_principal"]}</td><td>${unidad["articulo"]}</td><td>${unidad["cantidad"]}</td><td>${unidad["precio1"]}</td><td>${unidad["precio1"]}</td><td width='30px' class="text-center">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_cliente"]}"><i class="fas fa-check-circle"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_clientes_pedidos(${pagina - 1},5,'${term}')" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${numeroPaginas},5,'${term}')" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(1,5,'${term}')" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(1,5,'${term}')" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${numeroPaginas},5,'${term}')" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes_pedidos(${count},5,'${term}')" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_clientes_pedidos(${pagina + 1},5,'${term}')" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacionItems").html(html_paginacion);
            $("#table-items").html(html);
        }
    });
};



const listar_insumos = function(pagina = 1) {
    $.ajax({
        url: `controller/insumos.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {


                html =
                    html +
                    `<tr> <td>${unidad["codigo_sku_insumo"]}</td><td>${unidad["codigo_interno_insumo"]}</td><td>${unidad["articulo"]}</td> <td>${unidad["estado_insumo"]}</td> <td width='30px' class="">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_doctor"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_insumos(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_insumos(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_insumos(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_insumos(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_insumos(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_insumos(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_insumos(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_insumos(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_insumos(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_insumos(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-insumos").html(html);
        }
    });
};

const listar_envases = function(pagina = 1) {
    $.ajax({
        url: `controller/envases.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {
                html = html +
                    `<tr> <td>${unidad["codigo_sku_insumo"]}</td><td>${unidad["codigo_interno_insumo"]}</td><td>${unidad["articulo"]}</td> <td>${unidad["estado_insumo"]}</td> <td width='30px' class="">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_doctor"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_envases(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_envases(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_envases(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_envases(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_envases(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_envases(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_envases(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_envases(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_envases(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_envases(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-envases").html(html);
        }
    });
};

const listar_bases = function(pagina = 1) {
    $.ajax({
        url: `controller/bases.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {
                html = html +
                    `<tr> <td>${unidad["codigo_sku_insumo"]}</td><td>${unidad["codigo_interno_insumo"]}</td><td>${unidad["articulo"]}</td> <td>${unidad["estado_insumo"]}</td> <td width='30px' class="">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_doctor"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_bases(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_bases(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_bases(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_bases(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_bases(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_bases(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_bases(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_bases(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_bases(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_bases(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-bases").html(html);
        }
    });
};

const listar_etiquetas = function(pagina = 1) {
    $.ajax({
        url: `controller/etiquetas.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {
                html = html +
                    `<tr> <td>${unidad["codigo_sku_insumo"]}</td><td>${unidad["codigo_interno_insumo"]}</td><td>${unidad["articulo"]}</td> <td>${unidad["estado_insumo"]}</td> <td width='30px' class="">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_doctor"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_etiquetas(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_etiquetas(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_etiquetas(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_etiquetas(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_etiquetas(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_etiquetas(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_etiquetas(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_etiquetas(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_etiquetas(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_etiquetas(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-bases").html(html);
        }
    });
};

const listar_recetas = function(pagina = 1) {
    $.ajax({
        url: `controller/recetas.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {
                html = html +
                    `<tr> <td>${unidad["codigo_sku_insumo"]}</td><td>${unidad["codigo_interno_principal"]}</td><td>${unidad["articulo"]}</td> <td>${unidad["estado_insumo"]}</td> <td width='30px' class="">
                            <a href="system?view=detalle-receta&codigo-receta=${unidad["codigo_interno_principal"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_interno_principal"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_recetas(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_recetas(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_recetas(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_recetas(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_recetas(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_recetas(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_recetas(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_recetas(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_recetas(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_recetas(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-bases").html(html);
        }
    });
};

const listar_clientes = function(pagina = 1) {
    $.ajax({
        url: `controller/clientes.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            data.forEach((unidad) => {

                const numero_documento = unidad["numero_documento"] || ''

                html =
                    html +
                    `<tr> <td>${unidad["codigo_cliente"]}</td><td>${numero_documento}</td><td>${unidad["nombre_cliente"]}</td> <td>${unidad["codigo_doctor"]}</td><td>${unidad["estado_cliente"]}</td><td width='30px' class="">
                            <a href="system?view=detalle-cliente&codigo-cliente=${unidad["codigo_cliente"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_cliente(${unidad["codigo_cliente"]})"><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" style='cursor:pointer' onclick="listar_clientes(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer' onclick="listar_clientes(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" style='cursor:pointer' onclick="listar_clientes(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer'  onclick="listar_clientes(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer' >...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer'  onclick="listar_clientes(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer' onclick="listar_clientes(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer' >...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer' onclick="listar_clientes(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" >...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" style='cursor:pointer'  onclick="listar_clientes(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer' onclick="listar_clientes(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" style='cursor:pointer'  onclick="listar_clientes(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-clientes").html(html);
        }
    });
};

const listar_centros_salud = function(pagina = 1) {
    $.ajax({
        url: `controller/centros-salud.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;
            let position = parseInt(1)
            data.forEach((centro) => {


                const estado = (centro['estado']) ? 'Activo' : 'Inactivo';

                html =
                    html +
                    `<tr> <td>${centro["codigo"]}</td><td>${centro["nombre"]}</td><td class='d-none'>${centro["distrito"]}</td> <td class='d-none'>${centro["observacion"]}</td><td>${estado}</td><td width='30px' class="">
                            <a href="#" onclick="openModal({opcion:'editar',modulo:'centros de salud',id:${centro["distrito"]}, posicion: ${position}, tabla: 'tableCentrosSalud'})"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="openModal({opcion:'eliminar',modulo:'centros de salud',id:${centro["codigo"]}, posicion: ${position}, tabla: 'tableCentrosSalud'})""><i class="far fa-trash-alt"></i></a>
                        </td></tr>`;

                position++;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" style='cursor:pointer' onclick="listar_centros_salud(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer' onclick="listar_centros_salud(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" style='cursor:pointer' onclick="listar_centros_salud(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer'  onclick="listar_centros_salud(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer' >...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer'  onclick="listar_centros_salud(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer' onclick="listar_centros_salud(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" style='cursor:pointer' >...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer' onclick="listar_centros_salud(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" >...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" style='cursor:pointer'  onclick="listar_centros_salud(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" style='cursor:pointer' onclick="listar_centros_salud(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" style='cursor:pointer'  onclick="listar_centros_salud(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-centros-salud").html(html);
        }
    });
};

const listar_documentos = function(pagina = 1) {
    $.ajax({
        url: `controller/documentos-electronicos.php?pagina=${pagina}`,
        method: "GET",
        success: function(response) {
            const { data, numeroPaginas } = JSON.parse(response);
            let html = ``;

            console.log(data)

            data.forEach((unidad) => {

                const tipo = unidad["tipo"] || ''
                const zona = unidad["zona"] || ''
                const registro = unidad["registro"] || ''
                const ultima_visita = unidad["ultima_visita"] || ''
                const nuevo = unidad["nuevo"] || ''
                const fecha = new Date(unidad["fecha_documento"])

                html =
                    html +
                    `<tr><td>${fecha.toLocaleDateString('en-ES')}</td><td>${unidad["nombre_cliente"]}</td><td>${unidad["tipo_documento"]}</td><td>${unidad["serie"]}-${unidad["correlativo"]}</td><td>S/. ${unidad["total"]}</td><td class='text-center'>-</td><td width='30px' class="">
                            <a href="system?view=detalle-doctor&codigo_doctor=${unidad["codigo_doctor"]}"><i class="fas fa-paper-plane"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="fas fa-sync-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="fas fa-arrow-circle-down"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-arrow-alt-circle-down"></i></a>
                        </td></tr>`;
            });



            let previous = '';
            let next = '';

            if (pagina === 1) previous = 'disabled'
            if (pagina === numeroPaginas) next = 'disabled'

            let html_paginacion = `<ul class="pagination justify-content-end"><li class="page-item">
            <a class="page-link ${previous}" href="#" onclick="listar_documentos(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_documentos(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_documentos(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_documentos(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_documentos(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_documentos(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_documentos(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_documentos(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_documentos(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_documentos(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-clientes").html(html);
        }
    });
};
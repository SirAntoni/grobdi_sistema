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

    cargar_unidades();

});

const eliminar_cliente = function(codigo = '') {
    alert('en construccion');
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
            data.map((unidad) => {
                const estado = (unidad.estado === '1') ? 'si' : 'no';
                html = html + `<tr> <td>${unidad.codigo}</td><td>${unidad.nombre}</td><td>${unidad.fecha_creacion}</td> <td>${estado}</td> <td width='30px' class="">
                <a href="system?view=detalle-doctor&codigo_doctor=${unidad.fecha_creacion}"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="delete-row" onclick="eliminar_doctor(${unidad["codigo_doctor"]})"><i class="far fa-trash-alt"></i></a>
            </td></tr>`;
            })

            $("#table-unidad-medida").html(html);

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
            <a class="page-link ${previous}" href="#" onclick="listar_clientes(${pagina - 1})" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>`;

            if (numeroPaginas > 4) {

                if (pagina < 5) {
                    for (let count = 1; count <= 5; count++) {
                        html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes(${count})" >${count}</a></li>`;
                    }
                    html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                    html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_clientes(${numeroPaginas})" >${numeroPaginas}</a></li>`
                } else {

                    let end_limit = parseInt(numeroPaginas) - 5
                    if (pagina > end_limit) {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_clientes(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        for (let count = end_limit; count <= numeroPaginas; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes(${count})" >${count}</a></li>`;
                        }
                    } else {
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#" onclick="listar_clientes(1)" >1</a></li>`;
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;

                        for (let count = pagina - 1; count <= parseInt(pagina) + 1; count++) {
                            html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes(${count})" >${count}</a></li>`;
                        }
                        html_paginacion += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
                        html_paginacion += ` <li class="page-item"><a class="page-link" href="#" onclick="listar_clientes(${numeroPaginas})" >${numeroPaginas}</a></li>`
                    }

                }



            } else {

                for (let count = 1; count <= numeroPaginas; count++) {

                    html_paginacion += `<li class="page-item ${(count === pagina) ? 'active':''}"><a class="page-link" href="#" onclick="listar_clientes(${count})" >${count}</a></li>`;

                }

            }




            html_paginacion += `<li class="page-item">
            <a class="page-link ${next}" href="#" onclick="listar_clientes(${pagina + 1})" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li></ul>`;

            $("#paginacion").html(html_paginacion);
            $("#table-clientes").html(html);
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
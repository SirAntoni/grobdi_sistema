$(function() {
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    if (params.get('view') === "detalle_cliente") {
        obtener_cliente(params.get('codigo_cliente'))
        guardar_cliente()
    }
    if (params.get('view') === "clientes") listar_clientes(1);
    if (params.get('view') === "doctores") listar_doctores(1);

});



const eliminar_cliente = function(codigo = '') {
    alert('funcion en construccion.')
}

const guardar_cliente = function() {
    $("#formEditarClientes").submit(function(e) {
        e.preventDefault();
        const data = $(this).serialize();
        console.log(data);
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
                            <a href="system?view=detalle_cliente&codigo_cliente=${unidad["codigo_cliente"]}"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" class="delete-row" onclick="eliminar_cliente(${unidad["codigo_cliente"]})"><i class="far fa-trash-alt"></i></a>
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
                            <a href="system?view=detalle_cliente&codigo_cliente=${unidad["codigo_cliente"]}"><i class="fas fa-pencil-alt"></i></a>
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
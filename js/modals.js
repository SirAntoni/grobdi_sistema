function openModal(data) {
    const { opcion, modulo, id = '', posicion = '', tabla = '' } = data
    let datos
    let titulo
    let btnText
    let items = {
        src: '#modalForm',
        type: 'inline'
    }

    if (opcion === 'listarDoctores') {
        items = {
            src: '#modalListarDoctores',
            type: 'inline'
        }
    } else if (opcion === 'listarClientes') {
        items = {
            src: '#modalListarClientes',
            type: 'inline'
        }
    } else if (opcion === 'datosEnvio') {
        items = {
            src: '#modalDatosEnvio',
            type: 'inline'
        }
    } else if (opcion === 'agregarDelivery') {
        items = {
            src: '#modalDelivery',
            type: 'inline'
        }
    } else if (opcion === 'agregarBolsa') {
        items = {
            src: '#modalBolsa',
            type: 'inline'
        }
    } else if (opcion === 'agregarItem') {
        items = {
            src: '#modalItems',
            type: 'inline'
        }
    }

    if (modulo)

        switch (opcion) {
        case 'agregar':
            titulo = `Registrar ${modulo}`;
            btnText = `Registrar`;
            break;
        case 'listarDoctores':
            titulo = "Listar Doctores";
            break;
        case 'listarClientes':
            titulo = "Listar Clientes";
            break;
        case 'datosEnvio':
            titulo = "Datos para el envio";
            btnText = `Guardar`;
            break;
        case 'agregarDelivery':
            titulo = "Agregar Delivery";
            break;
        case 'agregarBolsa':
            titulo = "Agregar Bolsa";
            break;
        case 'agregarItem':
            titulo = "Agregar Item";
            break;
        case 'obtenerDoctor':
            datos = obtenerDataTable(tabla, posicion)
            console.log(datos);
            $("#doctor").val(datos[1])
            $("#telefono_doctor").val(datos[4])
            $("#telefono_asistente").val(datos[5])
            $.magnificPopup.close();
            return;
            break;
        case 'obtenerCliente':
            datos = obtenerDataTable(tabla, posicion)
            console.log(datos);
            $("#nombre_cliente").val(datos[1])
            $("#telefono_cliente").val(datos[2])
            $("#numero_documento").val(datos[3])
            $.magnificPopup.close();
            return;
            break;
        case 'obtenerItem':
            let item = obtenerDataTable(tabla, posicion)

            let itemParsed = {
                sku: item[0],
                producto: item[1],
                precioVenta: item[3],
                cantidad: item[4],
                subtotal: parseFloat(item[3]) * parseFloat(item[4])
            }

            let arrayItems = localStorage.getItem('datosItems');

            if (arrayItems !== null) {
                arrayItems = JSON.parse(arrayItems)

                let elementoExistente = arrayItems.find(item => item.sku === itemParsed.sku && item.producto === itemParsed.producto)

                if (elementoExistente) {
                    let indice = arrayItems.findIndex(item => item.sku === itemParsed.sku && item.producto === itemParsed.producto);

                    arrayItems.splice(indice, 1, itemParsed);

                } else {
                    arrayItems.push(itemParsed)
                }


                arrayItems = JSON.stringify(arrayItems)
                localStorage.setItem('datosItems', arrayItems)

            } else {
                let arrayItems = []
                arrayItems.push(itemParsed)
                arrayItems = JSON.stringify(arrayItems)
                localStorage.setItem('datosItems', arrayItems)
            }

            cargar_items_pedido();
            $.magnificPopup.close();
            return;
            break;
        case 'editar':
            titulo = `Editar ${modulo}`;
            btnText = `Guardar`;
            datos = obtenerDataTable(tabla, posicion)

            if (modulo === 'laboratorio') {
                $(".codigo").val(datos[0])
                $("#ruc").val(datos[1])
                $("#nombre").val(datos[2])
                $("#contacto").val(datos[3])
            } else if (modulo === 'unidad' || modulo === 'presentacion' || modulo === 'categoria') {
                $(".codigo").val(datos[0])
                $("#nombre").val(datos[1])
            } else if (modulo === 'visitador') {
                $(".codigo").val(datos[0])
                $("#nombre").val(datos[1])
                $("#telefono").val(datos[2])
                $("#correo").val(datos[3])
                $("#cuota").val(datos[4])
                $("#observacion").val(datos[5])
            } else if (modulo === 'zona') {
                $(".codigo").val(datos[0])
                $("#nombre").val(datos[1])
                $("#visitador").val(datos[2])
                $("#observacion").val(datos[3])
            } else if (modulo === 'distrito') {
                $(".codigo").val(datos[0])
                $("#nombre").val(datos[1])
                $("#zona").val(datos[2])
                $("#ubigeo").val(datos[3])
            } else if (modulo === 'centros de salud') {
                $(".codigo").val(datos[0])
                $("#nombre").val(datos[1])
                $("#observacion").val(datos[3])
            } else if (modulo === 'proveedor') {
                console.log(datos)
                $(".id").val(datos[0])
                $("#ruc").val(datos[1])
                $("#razon_social").val(datos[2])
                $("#direccion").val(datos[3])
                $("#correo").val(datos[4])
                $("#correo_cpe").val(datos[5])
                $("#telefono1").val(datos[6])
                $("#telefono2").val(datos[7])
                $("#persona_contacto").val(datos[8])
                $("#observacion").val(datos[9])
                $("#estado").val(datos[10])
            }
            break;
        case 'eliminar':
            titulo = `Eliminar ${modulo}`;
            btnText = `Eliminar`;
            items = {
                src: '#modalFormDelete',
                type: 'inline'
            }
            datos = obtenerDataTable(tabla, posicion)
            $(".codigo").val(datos[0])
            $("#nombre").val(datos[1])
            break;
        default:
            console.log('ERROR')
            break;
    }

    $.magnificPopup.open({
        items,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        modal: true,
        callbacks: {
            beforeOpen: function() {
                $(".modalTitle").html(titulo);
                $(".btnSubmit").html(btnText);
                $('.opcion').val(opcion);
            }
        }
    });
}


function obtenerDataTable(tabla, posicion) {

    const table = document.getElementById(tabla)

    const cells = table.rows[posicion].cells

    const len = cells.length

    let data = [];

    for (let i = 0; i < len - 1; i++) {

        if (cells[i].textContent !== '') {
            data.push(cells[i].textContent)
        } else {
            data.push(cells[i].children[0].value)
        }


    }

    return data

}

/*
Modal Dismiss
*/
$(document).on('click', '.modal-dismiss', function(e) {
    e.preventDefault();
    $('form').trigger('reset');
    $.magnificPopup.close();
});
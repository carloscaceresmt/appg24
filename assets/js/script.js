const endpoint = "http://localhost:8080/api/Client"
$(document).ready(function() {
    getCliente()

})

/**
 * funcion para mostrar los registros del cliente
 */
function getCliente() {
    let tam = 0
    $.ajax({
        url: endpoint + "/all",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            tam = data.length
            let registro = ""
            if (tam == 0) {
                $("#contenedor").hide()
                $("#mensaje").show()
            } else {
                $("#contenedor").show()
                $("#mensaje").hide()
                $("#numregistro").html("Numero de Registros: " + tam)
                $.each(data, function(index, client) {
                    registro += "<tr>" +
                        "<td>" + client.idClient + "</td>" +
                        "<td>" + client.email + "</td>" +
                        "<td>" + client.password + "</td>" +
                        "<td>" + client.name + "</td>" +
                        "<td>" + client.age + "</td>" +
                        "<td><button class='btn btn-warning'>Editar</button>" +
                        "    <button class='btn btn-danger'>Eliminar</button></td>" +
                        "</tr>"
                })
                $("#tbody").html(registro)
            }
        }
    });

}
const endpoint = "http://localhost:8080/api/Client"
$(document).ready(function() {
    $("#guardar").click(function() {
        guardarCliente()
    })
})

/**
 * funcion para guardar cliente se conecta con la api Client
 */
function guardarCliente() {

    let cliente = {
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val(),
        age: $("#age").val(),
    }

    if (cliente.email.length == 0 || cliente.password.length == 0 || cliente.password.length == 0 ||
        cliente.age.length == 0) {
        alert("Campo(s) Vacio")
    }
    if (cliente.password.length <= 4) {
        alert("Password tiene que tener mas de 4 caracteres")
    }
    if (cliente.email.length > 0 && cliente.password.length > 0 && cliente.password.length > 4 &&
        cliente.age.length > 0) {
        let dataJson = JSON.stringify(cliente)
        console.log(dataJson)
        $.ajax({
            url: endpoint + "/save",
            type: "POST",
            data: dataJson,
            contentType: "application/json",
            complete: function(data) {
                if (data.status == "201") {
                    alert("Guardo Registro Cliente con Exito!!")
                    limpiar()
                } else {
                    alert("Problemas al Insertar consulta con el Administrador!! ")
                }
            }
        })
    }
}
/**
 * limpíar input entrada de datos
 */
function limpiar() {
    $("#email").val("")
    $("#password").val("")
    $("#name").val("")
    $("#age").val("")
    $("#email").focus()
}
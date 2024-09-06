import { peticionFetch } from "./funciones.js";

const urlBase = "https://www.superheroapi.com/api.php/";
const accessToken = "b1880703a98354eb0da41a18dbd6f645";

$(() => {
    $("#form-busqueda-nombre").submit(async function(event) {
        event.preventDefault();
        const busqueda = $("#txt-busqueda-nombre").val();
        if(busqueda == "") {
            return alert("Por favor ingrese un criterio de búsqueda")
        }

        const url = `${urlBase}${accessToken}/search/${busqueda}`

        try {
            const response = await peticionFetch(url);
            console.log(response);
        } catch (error) {
            alert("Ha sucedido un error, intente nuevamente")
        }
        
    })
})
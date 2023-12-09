
// const formulario = document.getElementById('inputData');
// const resultado = document.getElementById('resultado');


// document.addEventListener('DOMContentLoaded', function () {
//     formulario.addEventListener('submit', function (event) {
//         event.preventDefault(); // Evita la recarga de la página
//         const input1 = document.getElementById('input1').value;
//         resultado.innerHTML = `Nombre: ${input1}<br>Email:22`;


//     });
// });

const list_categorias = document.querySelectorAll(".categoria")
const list_contenido = document.getElementById("contenido_lista")
const contenedorPrincipalLista = document.getElementById("contenidoSecundarioList")
console.log(list_categorias)
console.log(list_contenido)
list_contenido.innerHTML = "este ba ha ser el contendio principal de loslicnk "


list_categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
        console.log(categoria.getAttribute("id"))
        const id_categoria = categoria.getAttribute("id")
        url = "http://127.0.0.1:3000/db/".concat(id_categoria)
        console.log(url)
        fetch(url)
            .then(response => {
                if (!response) {
                    throw new Error(' la solicitud fallo ')
                }
                return response.json();

            })
            .then(data => {
                console.log(data)

                list_contenido.innerHTML = ''
                contenedorPrincipalLista.innerHTML=''
                const cont = data.contenido;
                for (let i = 0; i < cont.length; i++) {
                    const hijo = document.createElement('div')
                    hijo.innerHTML = cont[i]
                    list_contenido.appendChild(hijo)
                }

                const imput = document.createElement('input')
                const summit = document.createElement('button')
                imput.setAttribute("id", "input_text")
                summit.setAttribute("id", "buton_send_text")
                const send_data = `send_data("${id_categoria}")`

                summit.setAttribute("onclick", send_data)
                summit.innerHTML = "boton"
                // list_contenido.appendChild(imput)
                contenedorPrincipalLista.appendChild(list_contenido)
                contenedorPrincipalLista.appendChild(imput)
                contenedorPrincipalLista.appendChild(summit)
                // list_contenido.appendChild(summit)


            })
            .catch(erro => {
                console.error('error', erro);
            })
    })
})
function addHIjo(divPadre, cont) {
    const newHijo = document.createElement("div")
    newHijo.innerHTML = cont
    divPadre.appendChild(newHijo)

}

function send_data(id) {
    const texto = document.getElementById("input_text")

    addHIjo(list_contenido, texto.value)

    var datosParaEnviar = {
        dataTxt: texto.value
    };
    url = `http://127.0.0.1:3000/db/${id}`
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosParaEnviar) // Convierte los datos a una cadena JSON
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('La solicitud no se pudo completar correctamente.');
            }
            return response.json(); // Analizar la respuesta JSON
        })
        .then(function (data) {
            console.log(data); // Hacer algo con los datos JSON recibidos del servidor
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}


// Realizar una solicitud POST utilizando fetch
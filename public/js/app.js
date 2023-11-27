
const formulario = document.getElementById('inputData');
const resultado = document.getElementById('resultado');

document.addEventListener('DOMContentLoaded', function () {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita la recarga de la página
        const input1 = document.getElementById('input1').value;
        resultado.innerHTML = `Nombre: ${input1}<br>Email:22`;

        var datosParaEnviar = {
            parametro1: input1,
        };
        
        // Realizar una solicitud POST utilizando fetch
        fetch('http://127.0.0.1:3000/pass', {
            method: 'POST',
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
    });
});

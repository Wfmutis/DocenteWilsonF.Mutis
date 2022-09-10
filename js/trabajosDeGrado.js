function obtenerTrabajosDeGrado() {
    
    const archivo = "trabajosDeGrado.json";

    fetch(archivo)
        .then ( resultado => resultado.json())
        .then ( datos => {
            const { trabajosDeGrado } = datos;
            
            trabajosDeGrado.forEach(trabajoDeGrado => {
                const copiandoTG = document.querySelector(".contenedorT");

                const archivoTG = document.createElement('DIV');
                archivoTG.classList.add("trabajosGrado")
                archivoTG.innerHTML = `
                    <h2>Título</h2>
                    <p>${trabajoDeGrado.titulo}</p>
                    <h2>Autores</h2>
                    <p> ${trabajoDeGrado.autor1} <br/> ${trabajoDeGrado.autor2}</p>
                    <h2>Asesor</h2>
                    <p>${trabajoDeGrado.asesor}</p>
                    <h2>Resumen</h2>
                    <p>${trabajoDeGrado.resumen}</p>
                    <p>
                    <a href="${trabajoDeGrado.libro}" target="_blank" class="leerTrabajo">Leer trabajo de grado</a>
                    </p>
               `
                copiandoTG.appendChild(archivoTG);
            });
        })
}

obtenerTrabajosDeGrado();
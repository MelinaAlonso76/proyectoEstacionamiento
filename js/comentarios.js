let comentarios = []

const peticionFetch = async () => {
    const response = await fetch('datos.json')
    const data = await response.json()
    return data
}

const cargarContenido = async () => {
    try {
        comentarios = await peticionFetch()
        for (let i = 0; i < comentarios.length; i++) {
            let div = document.createElement('div')
            div.className = "carousel__item"
            let carousel = document.querySelector('.carousel')

            div.innerHTML += `
            <img src="${comentarios[i].imagen}" alt="" class="carousel__item-head">
                            <div class='carousel__item-body'>
                                <p class='title'>${comentarios[i].name}</p>
                                <p>${comentarios[i].comment}</p>
                            </div>
                            `

            carousel.appendChild(div)
        }
    } catch (error) {
        alert('Ocurrio un error: '+error.message)
    }
}
cargarContenido()
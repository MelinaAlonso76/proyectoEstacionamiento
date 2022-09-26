let btn = document.querySelector('#send')
let propietario = document.querySelector('#name')
let patente = document.querySelector('#licence')

let localStorage = window.localStorage


cargarVehiculos()

btn.addEventListener('click', () => {
    const vehiculo = {
        propietario: validarNombre(propietario.value.toUpperCase()),
        patente: validarPatente(patente.value.toUpperCase()),
        entrada: new Date()
    }
    if (datosCompletos()) {
        if (vehiculo.propietario === '') {
            Swal.fire('INGRESA UN NOMBRE CORRECTO',
                'EJEMPLO: ANA - LUIS')
        } else if (vehiculo.patente === '') {
            Swal.fire('INGRESA UNA PATENTE CORRECTA',
                'EJEMPLO: ABC123 - AB123CD')
        } else {
            if (obtenerGarage().find((el) => el.patente === vehiculo.patente)) {
                Swal.fire('No pueden haber dos patentes iguales')
            } else {
                guardarEnLocalStorage(vehiculo)
                ingresarVehiculo(vehiculo)
            }
        }
    } else {
        Swal.fire('Los campos deben estar completos')
    }
})

let btnDelete = document.querySelector('#garage')
btnDelete.addEventListener('click', e => {
    Swal.fire({
        title: `¿Desea retirar el vehiculo?`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            if (e.target.className === 'delete') {
                checkOut(e.target.parentElement.parentElement.cells)
            }
            Swal.fire(
                checkOut(e.target.parentElement.parentElement.cells)
            )
        }
    })
})
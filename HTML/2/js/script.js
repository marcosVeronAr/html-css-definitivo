let frutas = []

function agregarFruta(){
    let inputFruta = document.getElementById('inputFruta')
    let valueFruta = inputFruta.value 

    return frutas.push({name: `${valueFruta}`})
}

function mostrarFrutas() {
    let ulFrutas = document.getElementById('frutas')

    let listaFrutas = frutas.map(frutitas => {
        return ulFrutas.innerHTML = `<li>${frutitas.name}</li>`
    })

    return ulFrutas.innerHTML = listaFrutas

}
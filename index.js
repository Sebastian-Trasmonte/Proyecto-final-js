import Presupuestos from "./clase"

const articulos = [];
var presupuestos = [];
var ultimoIdPresupuesto = 1;

async function cargarProductosJson() {
    await fetch("./articulos.json")
        .then((prodJson) => prodJson.json())
        .then((data) => {
            data.articulos.forEach(element => {
                articulos.push(element)
            });
        })
    cargarCombos()
}

cargarProductosJson()

function cargarCombos() {
    var selectArticulos = document.getElementById("arts")
    articulos.forEach(e => {
        var option = document.createElement("option")
        option.setAttribute("value", e.id)
        var optionText = document.createTextNode(e.cod_corto)
        option.appendChild(optionText)
        selectArticulos.appendChild(option)
    })
    CambioDeColor()
}

function CambioDeColor() {

    var idArt = document.getElementById("arts").value
    var colores = articulos.find((e) => e.id == idArt).colores

    var selectColores = document.getElementById("color")
    selectColores.innerHTML = ""
    colores.forEach(e => {
        var option = document.createElement("option")
        option.setAttribute("value", e)
        var optionText = document.createTextNode(e)
        option.appendChild(optionText)
        selectColores.appendChild(option)
    })
    MostrarPrecio()
}

function MostrarPrecio() {
    var idArt = document.getElementById("arts").value
    var precio = articulos.find((e) => e.id == idArt).precio
    document.getElementById("precio").innerHTML = "Precio unitario: $" + precio
}

document.getElementById("formulario").addEventListener("onsubmit", function () {
    if (presupuestos.length > 0) {

    }
    else {
        var presupuesto = new Presupuestos(ultimoIdPresupuesto,document.)
    }
}
)
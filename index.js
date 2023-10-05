class Presupuestos {
    constructor(IdPresupuesto, RazonSocial, Cuit, Direccion, Cp, Localidad, Provincia, Tel, Email, Articulos) {
        this.IdPresupuesto = IdPresupuesto
        this.RazonSocial = RazonSocial
        this.Cuit = Cuit
        this.Direccion = Direccion
        this.Cp = Cp
        this.Localidad = Localidad
        this.Provincia = Provincia
        this.Tel = Tel
        this.Email = Email
        this.Articulos = Articulos
    }
}

class Articulo {
    constructor(id, cod_corto, color, precio, cantidad) {
        this.id = id
        this.cod_corto = cod_corto
        this.color = color
        this.presio = precio
        this.cantidad = cantidad
    }
}

const articulos = [];
var presupuestos = [];
var ultimoIdPresupuesto = 0;
var selectArts = [];

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

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault()
    const inputs = document.getElementById("formulario").elements;
    var idArt = inputs["arts"].value
    var precio = articulos.find((e) => e.id == idArt).precio
    var articulo = new Articulo(
        idArt,
        inputs["arts"][inputs["arts"].selectedIndex].textContent,
        inputs["color"][inputs["color"].selectedIndex].textContent,
        precio,
        inputs["cantidad"].value
    )
    if (selectArts.length > 0) {
        selectArts.push(articulo)
    }
    else {
        selectArts.push(articulo)
        var presupuesto = new Presupuestos(
            ultimoIdPresupuesto++,
            inputs["razonsocial"].value,
            inputs["cuit"].value,
            inputs["direccion"].value,
            inputs["cp"].value,
            inputs["localidad"].value,
            inputs["provincia"].value,
            inputs["telefono"].value,
            inputs["mail"].value,
            selectArts)
            
        console.log(presupuesto)
    }

}
)

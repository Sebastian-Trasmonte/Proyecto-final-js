export class Presupuestos {
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

export class Articulo {
    constructor(id, cod_corto, color, precio, cantidad) {
        this.id = id
        this.cod_corto = cod_corto
        this.color = color
        this.presio = precio
        this.cantidad = cantidad
    }
}
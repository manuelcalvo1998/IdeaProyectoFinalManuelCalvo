const guardoDatosJSON = ()=> {
    //debugger
    const datosForm = {Alimento:"", Cantidad: 0, Precio: 0}
    datosForm.Alimento = Alimento.value
    datosForm.Cantidad = Cantidad.value
    datosForm.Precio = Precio.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
    console.info("Se ha almacenado correctamente")
}

btnGuardar.addventListener("click", guardoDatosJSON)


const recuperoDatosJSON = ()=> {
    //debugger
    if (localStorage.getItem("datosDelForm") !=null) {
    datosDelForm = JSON.parse(localStorage.getItem("datosDelForm"))
    Alimento.value = datosDelForm.Alimento
    Cantidad.value = datosDelForm.Cantidad
    Precio.value = datosDelForm.Precio
    }
}

recuperoDatosJSON()
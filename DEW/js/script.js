document.addEventListener("DOMContentLoaded",function(){
    const DOM = {
        //Inputs
        inputUsuario:  document.getElementById("usuario"),
        inputNombre: document.getElementById("nombre"),
        inputApellidos: document.getElementById("apellidos"),
        inputPostal: document.getElementById("postal"),
        inputTel: document.getElementById("tel"),
        titulo: document.getElementById("titulo"),
        form: document.getElementById("form"),
        boton: document.getElementById("checkpass"),
        contraseña: document.getElementById("password"),
        descripcion: document.getElementById("desc"),
        inputDni: document.getElementById("nif"),
        selectdni: document.getElementById("selecdni"),
        fecha: document.getElementById("fecha"),
        aficiones: document.getElementById("aficiones"),
        cuenta: document.getElementById("empresa"),
        //EMPEZAMOS CON LOS SPANS DE ERRORES
        errorUsuario: document.getElementById("errorUsuario"),
        errorContra: document.getElementById("errorContra"),
        errorNombre: document.getElementById("errorNombre"),
        errorApe: document.getElementById("errorApe"),
        errorTele: document.getElementById("errorTele"),
        errorCod: document.getElementById("errorCod"),
        errorDni: document.getElementById("errorDni"),
        errorCuenta: document.getElementById("errorCuenta"),
        errorNaci: document.getElementById("errorNaci"),
        errorAfis: document.getElementById("errorAfis"),
        errorTitulo: document.getElementById("errorTitulo"),
        errorDesc: document.getElementById("errorDesc"),
        divestados: document.getElementById("estado")
    }
    DOM.form.addEventListener("submit", (a) => {
        //EL PUSH DE LAS AFICIONES
        const elecciones = []
        const afis = document.querySelectorAll('input[name ="Aficiones"]:checked')
        afis.forEach(item => 
            {
                elecciones.push(item.value)
            })
        let escondido = document.createElement("input")
        escondido.type = "hidden"
        escondido.name = "Aficiones"
        escondido.value = elecciones.join(",")
        DOM.aficiones.append(escondido)
        //COMENZAMOS CAMPOS OBLIGATORIOS CON LOS SPANS
        let campo = "Campo obligatorio"
        if(DOM.inputUsuario.value == "")
            {
                DOM.errorUsuario.textContent = campo
                if (!DOM.inputUsuario.validationMessage == ""){
                    a.preventDefault()
                }
            }else{
                DOM.errorUsuario.textContent = ""
            }
        if(DOM.contraseña.value == "")
            {
                DOM.errorContra.textContent = campo
            }
            else{
                DOM.errorContra.textContent = ""
            }
        if(DOM.inputNombre.value == "")
            {
                DOM.errorNombre.textContent = campo
            }else{
                DOM.errorNombre.textContent = ""
            }
        if(DOM.inputApellidos.value == "")
            {
                DOM.errorApe.textContent = campo
            }else{
                DOM.errorApe.textContent = ""
            }
        if(DOM.inputTel.value == "")
            {
                DOM.errorTele.textContent = campo
            }
            else{
                DOM.errorTele.textContent = ""
            }
        if(DOM.inputPostal.value == "")
            {
                DOM.errorCod.textContent = campo
            }
            else{
                DOM.errorCod.textContent = ""
            }
        if(DOM.titulo.value == "")
            {
                DOM.errorTitulo.textContent = campo
            }
            else{
                DOM.errorTitulo.textContent = ""
            }
        if(DOM.descripcion.value == "")
            {
                DOM.errorDesc.textContent = campo
            }
            else{
                DOM.errorDesc.textContent = ""
            }
        if(DOM.inputDni.value == "")
            {
                DOM.errorDni.textContent = campo
            }
            else{
                DOM.errorDni.textContent = ""
            }
        if(DOM.fecha.value == "")
            {
                DOM.errorNaci.textContent = campo
            }
            else{
                DOM.errorNaci.textContent = ""
            }
        //COMENZAMOS VALIDACIONES TODAS DEBEN ESTAR DEBAJO DEL WHILE PARA QUE SE VAYAN ACTUALIZANDO
        while(DOM.divestados.firstChild){
            DOM.divestados.removeChild(DOM.divestados.firstChild)
        }
        let escondite = document.querySelectorAll("input[required]")
        escondite.forEach(item => 
            {
                if(item.validationMessage != "")
                    {
                        a.preventDefault()
                        let panaderia = document.createElement("span")
                        panaderia.textContent =  `${item.name} = ${item.validationMessage}`
                        DOM.divestados.append(panaderia)
                    }
            })
        if(DOM.fecha.validationMessage != "")
            {
                a.preventDefault()
                let panaderia = document.createElement("span")
                panaderia.textContent =  `${DOM.fecha.name} = ${DOM.fecha.validationMessage}`
                DOM.divestados.append(panaderia)
            }
        if(DOM.descripcion.validationMessage != "")
            {
                a.preventDefault()
                let panaderia = document.createElement("span")
                panaderia.textContent =  `${DOM.descripcion.name} = ${DOM.descripcion.validationMessage}`
                DOM.divestados.append(panaderia)
            }
        if (elecciones.length < 2)
            {
                DOM.errorAfis.textContent = "Debes marcar 2 como minimo"
                let panaderia = document.createElement("span")
                panaderia.textContent =  `${escondido.name} = Selecciona al menos dos aficiones`
                DOM.divestados.append(panaderia)
                a.preventDefault()
            }
        if(elecciones.length >= 2)
            {
                DOM.errorAfis.textContent = ""
            }
        let fm = document.querySelectorAll('input[type = radio]:checked')
        if(fm.length < 1)
            {
                DOM.errorCuenta.textContent = "Campo obligatorio (necesitas marcar al menos 1)"
                let panaderia = document.createElement("span")
                panaderia.textContent =  `${DOM.cuenta.name} = Selecciona al menos un tipo de cuenta`
                DOM.divestados.append(panaderia)
                a.preventDefault()
            }
            else{
                DOM.errorCuenta.textContent = ""
            }
    })
    let truquito = 0
    DOM.fecha.addEventListener("click", () => {
            {
                if (truquito == 0)
                    {
                        for (let i = 1920 ; i <= 2010 ; i++)
                            {
                                let option = document.createElement("option")
                                option.append(i)
                                option.value = i
                                DOM.fecha.append(option)
                                truquito = 1
                            }
                    }
                
            }
        
    })
    DOM.boton.addEventListener("click",function(){
        if (DOM.contraseña.type == "password") {
            DOM.contraseña.type = "text";
        } else {
            DOM.contraseña.type = "password";
        }
    })
    DOM.titulo.addEventListener("input", function(){
        var p = document.getElementById("tit")
        p.innerText = ` ${DOM.titulo.value.length} / 15`
    })
    DOM.descripcion.addEventListener("input", function(){
        var p = document.getElementById("des")
        p.innerText = ` ${DOM.descripcion.value.length} / 120`
    })
    DOM.selectdni.addEventListener("click", function()
    {
        if(DOM.selectdni.value == "DNI")
            {
                DOM.inputDni.removeAttribute("disabled")
                DOM.inputDni.placeholder = "12345678A"
            }
            else{
                if (DOM.selectdni.value == "NIE"){
                    DOM.inputDni.removeAttribute("disabled")
                    DOM.inputDni.placeholder = "X1234567X"
                }
            }
    })
    console.log(DOM.inputDni.value)
})

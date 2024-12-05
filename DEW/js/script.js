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
        botondni: document.getElementById("nif"),
        selectdni: document.getElementById("selecdni"),
        fecha: document.getElementById("fecha"),
        aficiones: document.getElementById("aficiones"),
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
                    // alert(`Completa el campo ${DOM.inputUsuario.placeholder}`)
                }
            }
        if(DOM.contraseña.value == "")
            {
                DOM.errorContra.textContent = campo
            }
        if(DOM.inputNombre.value == "")
            {
                DOM.errorNombre.textContent = campo
            }
        if(DOM.inputApellidos.value == "")
            {
                DOM.errorApe.textContent = campo
            }
        if(DOM.inputTel.value == "")
            {
                DOM.errorTele.textContent = campo
            }
        if(DOM.inputPostal.value == "")
            {
                DOM.errorCod.textContent = campo
            }
        //COMENZAMOS VALIDACIONES
        let escondite = document.querySelectorAll("input[required]")
        escondite.forEach(item => 
            {
                DOM.divestados.removeChild()
                if(item.validationMessage != "")
                    {
                        a.preventDefault()
                        let panaderia = document.createElement("span")
                        panaderia.textContent =  `${item.name} = ${item.validationMessage}`
                        DOM.divestados.append(panaderia)
                    }
            })
    })



    DOM.fecha.addEventListener("click", () => {
        for (let i = 1920 ; i <= 2010 ; i++)
            {
                let option = document.createElement("option")
                option.append(i)
                option.value = i
                DOM.fecha.append(option)
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
                DOM.botondni.removeAttribute("disabled")
                DOM.botondni.placeholder = "12345678A"
            }
            else{
                if (DOM.selectdni.value == "NIE"){
                    DOM.botondni.removeAttribute("disabled")
                    DOM.botondni.placeholder = "X1234567X"
                }
            }
    })
    
})

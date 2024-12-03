document.addEventListener("DOMContentLoaded",function(){
    const DOM = {
        inputName:  document.getElementById("nombre"),
        titulo: document.getElementById("titulo"),
        form: document.getElementById("form"),
        boton: document.getElementById("checkpass"),
        contraseña: document.getElementById("password"),
        descripcion: document.getElementById("desc"),
        botondni: document.getElementById("nif"),
        selectdni: document.getElementById("selecdni"),
        fecha: document.getElementById("fecha")
    }
    DOM.fecha.addEventListener("click", () => {
        for (let i = 1920 ; i < 2010 ; i++)
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
    DOM.titulo.addEventListener("change", function(){
        var p = document.getElementById("tit")
        p.innerText = ` ${DOM.titulo.value.length} / 15`
    })
    DOM.descripcion.addEventListener("change", function(){
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
    DOM.form.addEventListener("submit", (a) => {
        if (!DOM.inputName.validationMessage == ""){
            a.preventDefault()
            alert(`Completa el campo ${DOM.inputName.placeholder}`)
        }
    })

})
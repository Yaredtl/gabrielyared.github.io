document.addEventListener("DOMContentLoaded",function(){
    var boton = document.getElementById("checkpass").addEventListener("click",function(){
        var contraseña = document.getElementById("password")
        if (contraseña.type == "password") {
            contraseña.type = "text";
        } else {
            contraseña.type = "password";
        }
    })
    var titulo = document.getElementById("titulo")
    let descripcion = document.getElementById("desc")
    titulo.addEventListener("change", function(){
        var p = document.getElementById("tit")
        p.innerText = ` ${titulo.value.length} / 15`
    })
    descripcion.addEventListener("change", function(){
        var p = document.getElementById("des")
        p.innerText = ` ${descripcion.value.length} / 120`
    })
    var botondni = document.getElementById("nif")
    var selectdni = document.getElementById("selecdni")
    selectdni.addEventListener("click", function()
    {
        if(selectdni.value == "dni")
            {
                botondni.removeAttribute("disabled")
                botondni.placeholder = "12345678A"
            }
            else{
                if (selectdni.value == "nie"){

                    botondni.removeAttribute("disabled")
                    botondni.placeholder = "X1234567X"
                }
            }
    })
})
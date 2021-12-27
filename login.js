const input_name = document.getElementById("user_name");
const enter_form = document.getElementById("form");



enter_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = enter_form['user_name'].value

    
    if (localStorage.getItem(nombre) == null) {
        let usuario = {
            name: nombre,
            puntos: 0
        }
        localStorage.setItem("usuario_logeado", usuario.name);
        localStorage.setItem(usuario.name, usuario.puntos);
        window.location.href = "/index.html";
    }else{
        localStorage.setItem("usuario_logeado", nombre);
        window.location.href = "/index.html";
    }
    console.log()
    

    //let crear_usuario = new usuario(input_name.textContent);
    //crear_usuario.guardar_usuario();
    //console.log("hola")

})



/*class usuario {
    constructor(name) {
        this.nombre = name

    }

    guardar_usuario() {
        console.log(localStorage.getItem(this.nombre));
        console.log(localStorage.getItem("usuario_logeado"));
       
        
        console.log(localStorage.getItem(this.nombre));
        console.log(localStorage.getItem("usuario_logeado"));

    }



}*/



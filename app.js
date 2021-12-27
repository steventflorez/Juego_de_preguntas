const txt_pregunta = document.getElementById("txt_pregunta");
const r_a = document.getElementById("r_a");
const btn_a = document.getElementById("btn_a");
const btn_b = document.getElementById("btn_b");
const btn_c = document.getElementById("btn_c");
const btn_d = document.getElementById("btn_d");
const btn_ultima = document.getElementById("btn_ultima");
const barra_progreso = document.getElementById("barra_progreso");
const content = document.getElementById("content");
const user_name = document.getElementById("user");
const retiro = document.getElementById("btn-retiro");
const salir = document.getElementById("salir");






localStorage.setItem("acomulado_final", 0);


user_name.textContent = localStorage.getItem("usuario_logeado");

content.textContent = `Acomulado Historico: ${localStorage.getItem(user_name.textContent)}`;


salir.addEventListener("click",()=>{
    window.location.href = "/index.html";
})
btn_ultima.style.display = "none"

localStorage.setItem("dificultad", 1);
localStorage.setItem("inicio", 0);

let progreso = 0;
let eleccion;
let Acomulado = 0;
retiro.addEventListener("click",()=>{
    alert(`Te retiraste con: ${Acomulado}`)
    
    localStorage.setItem(user_name.textContent, Acomulado + parseInt(localStorage.getItem(user_name.textContent)));

    reinicio_juego();
})
retiro.textContent = `Retirarme con: ${Acomulado}`;

btn_ultima.addEventListener("click", () => {

    compro_respuestas.respuesta_correcta(eleccion);
})

btn_a.addEventListener("click", () => {
    btn_ultima.style.display = "block"
    let color = new color_respuestas;
    color.color_eleccion(btn_a)
    eleccion = "a";

})
btn_b.addEventListener("click", () => {
    btn_ultima.style.display = "block"
    let color = new color_respuestas;
    color.color_eleccion(btn_b)
    eleccion = "b";

})
btn_c.addEventListener("click", () => {
    btn_ultima.style.display = "block"
    let color = new color_respuestas;
    color.color_eleccion(btn_c)
    eleccion = "c";

})
btn_d.addEventListener("click", () => {
    btn_ultima.style.display = "block"
    let color = new color_respuestas;
    color.color_eleccion(btn_d)
    eleccion = "d";

})


pregunta_randoom();


function pregunta_randoom() {

    if (localStorage.getItem("inicio") != localStorage.getItem("dificultad")) {
        localStorage.setItem("inicio", localStorage.getItem("dificultad"));

        localStorage.setItem("set_pregunta", Math.floor(Math.random() * (5 - 0)) + 0);



    }
}

/* CON ESTA CLASE MANEJAMOS EL COLOR DE LOS BOTONES DE PREGUNTAS*/

class color_respuestas {
    color_eleccion(button) {
        btn_a.style.backgroundColor = "grey";
        btn_b.style.backgroundColor = "grey";
        btn_c.style.backgroundColor = "grey";
        btn_d.style.backgroundColor = "grey";
        button.style.backgroundColor = "#FFC300";

    }

    Reinicio() {
        btn_a.style.backgroundColor = "grey";
        btn_b.style.backgroundColor = "grey";
        btn_c.style.backgroundColor = "grey";
        btn_d.style.backgroundColor = "grey";
    }
}

/* CON ESTA CLASE CREAMOS LAS PREGUNTAS*/
class preguntas {
    constructor(pregunta, a, b, c, d, correcta) {
        this.pregunta = pregunta;
        this.respuesta_a = a;
        this.respuesta_b = b;
        this.respuesta_c = c;
        this.respuesta_d = d;
        this.respuesta_correcta = correcta;

    }

}











new preguntas("¿Cuál es el río más largo del mundo?", "El Amazonas", "El Nilo", "Rio Grande", "El Misisipi", "a");

new preguntas("¿Cuántos lados tiene un heptágono?", "Diez lados", "Siete lados.", "Ocho lados", "No existe ese termino", "b");

new preguntas("¿Cuál es el planeta más grande del Sistema Solar?", "Diez lados", "Siete lados.", "Ocho lados", "No existe ese termino", "b");
const pregunta_1_1 = new preguntas("¿Cuantos dias tiene un año?", "100", "563", "365", "265", "c");

const pregunta_1_2 = new preguntas("¿En que pais esta la muralla china?", "Japon", "Cuba", "China", "Roma", "c");

const pregunta_1_3 = new preguntas("¿Cual de los siguientes animales no puede volar?", "Aguila", "Condor", "Paloma", "Gallina", "d");

const pregunta_1_4 = new preguntas("¿como se dice CARRO en ingles?", "Rum", "Cat", "Car", "Bus", "c");

const pregunta_1_5 = new preguntas("¿Cuales son los colores de la bandera de Colombia?", "Azul, Verda y Rojo", "Amarillo, Azul y Rojo", "Rojo, Morado y Dorado", "Amarillo Azul y rosado", "b");

const preguntas_nivel_1 = [pregunta_1_1, pregunta_1_2, pregunta_1_3, pregunta_1_4, pregunta_1_5];


const pregunta_2_1 = new preguntas("¿Cuál es el animal más grande de la Tierra?", "La ballena azul", "El elefante", "La jirafa", "El cocodrilo", "a");

const pregunta_2_2 = new preguntas("¿Cuál es el planeta más alejado del Sol?", "Jupiter", "Neptuno", "Pluton", "Marte", "b");

const pregunta_2_3 = new preguntas("¿Cuántos días tiene un año bisiesto?", "365", "366", "364", "360", "b");

const pregunta_2_4 = new preguntas("¿Cuántos anillos hay en la bandera olímpica?", "7", "3", "4", "5", "d");

const pregunta_2_5 = new preguntas("¿Quién es el fundador de Facebook?", "Jeff Bezos", "Bill Gates", "Steve Jobs", "Mark Zuckerberg", "d");

const preguntas_nivel_2 = [pregunta_2_1, pregunta_2_2, pregunta_2_3, pregunta_2_4, pregunta_2_5];

const pregunta_3_1 = new preguntas("¿Cuál es el libro sagrado del Islam?", "La Biblia", "El libro Mormon", "El Corán", "El Kojiki", "c");

const pregunta_3_2 = new preguntas("¿Con qué moneda pagas si vas a Japón?", "El yen", "El Won", "El Renminbi", "La Libra Exterlina", "a");

const pregunta_3_3 = new preguntas("¿Cuántas películas de Harry Potter se han hecho?", "5", "8", "1", "7", "b");

const pregunta_3_4 = new preguntas("¿Qué animal contagió a los humanos en la pandemia de peste negra?", "Ratas", "Mosquitos", "Pulgas", "Perros", "c");

const pregunta_3_5 = new preguntas("¿Cuál ha sido el futbolista más caro de la historia?", "Messi", "Ronaldinho", "Cristiano Ronaldo", "Neymar", "d");

const preguntas_nivel_3 = [pregunta_3_1, pregunta_3_2, pregunta_3_3, pregunta_3_4, pregunta_3_5];

const pregunta_4_1 = new preguntas("¿En qué continente está Siria?", "Europa", "Norte America", "En Asia", "Sur America", "c");

const pregunta_4_2 = new preguntas("¿Cuál es el órgano más grande del cuerpo humano?", "El Pulmon", " La Piel", "El intestino grueso", "El intestino delgado", "b");

const pregunta_4_3 = new preguntas("¿Quién fue el último faraón de Egipto?", "Tutankamon", " Ramsés III", "Kefren", "Merenptah", "b");

const pregunta_4_4 = new preguntas("¿Cuántos huesos tiene el cuerpo humano?", "307", " 55", "127", "206", "d");

const pregunta_4_5 = new preguntas("¿Cuál es la luna más grande de Saturno?", "Titán", " Pandora", "Narvi", "Egeon", "a");

const preguntas_nivel_4 = [pregunta_4_1, pregunta_4_2, pregunta_4_3, pregunta_4_4, pregunta_4_5];

const pregunta_5_1 = new preguntas("¿Cuál fue la primera civilización humana?", "Los Fenicios", " La Romana", "La china", "La sumeria", "d");

const pregunta_5_2 = new preguntas("¿Dónde está Transilvania?", "Rumanía", " Italia", "Artantida", "Groenlandia", "a");

const pregunta_5_3 = new preguntas("¿Cuántos corazones tiene un gusano de tierra?", "1", "5", "3", "No tienen", "b");

const pregunta_5_4 = new preguntas("¿Cuándo llegó el hombre a la Luna?", "11 de junio 2000 ", "15 de octubre 1895", "16 de julio de 1969", "16 de junio de 1969", "c");

const pregunta_5_5 = new preguntas("¿Cuántas patas tiene una araña?", "8 ", "4", "100", "6", "a");

const preguntas_nivel_5 = [pregunta_5_1, pregunta_5_2, pregunta_5_3, pregunta_5_4, pregunta_5_5];

var pregunta;

/* CON ESTA CLASE SELECCIONAMOS UNA PREGUNTA DEPENDE LA DIFICULTAD Y DE FORMA ALEAOTRIA*/

class seleccionar_pregunta {
    getpregunta(dificultad) {

        if (dificultad == 1) {

            preguntas_nivel_1.forEach(function (element, index) {

                if (index == localStorage.getItem("set_pregunta")) {

                    pregunta = element
                }

            })
        } else if (dificultad == 2) {
            preguntas_nivel_2.forEach(function (element, index) {
                if (index == localStorage.getItem("set_pregunta")) {

                    pregunta = element
                }

            })
        } else if (dificultad == 3) {
            preguntas_nivel_3.forEach(function (element, index) {
                if (index == localStorage.getItem("set_pregunta")) {

                    pregunta = element
                }

            })
        } else if (dificultad == 4) {
            preguntas_nivel_4.forEach(function (element, index) {
                if (index == localStorage.getItem("set_pregunta")) {

                    pregunta = element
                }

            })
        } else if (dificultad == 5) {
            preguntas_nivel_5.forEach(function (element, index) {
                if (index == localStorage.getItem("set_pregunta")) {

                    pregunta = element
                }

            })
        }


    }

}
/* CON ESTA CLASE MANEJAMOS EL DOM Y MOSTRAMOS AL USUARIO LA PREGUNTA*/
class Poner_pregunta {
    dom(incognita) {
        console.log(incognita)
        txt_pregunta.textContent = incognita.pregunta;
        btn_a.textContent = incognita.respuesta_a;
        btn_b.textContent = incognita.respuesta_b;
        btn_c.textContent = incognita.respuesta_c;
        btn_d.textContent = incognita.respuesta_d;


    }
}
/* CON ESTA CLASE COMPROBAMOS SI LA RESPUESTA ES CORRECTA O NO*/
class Comproba_respuesta extends seleccionar_pregunta {
    respuesta_correcta(respuestas) {
        console.log()
        if (respuestas == pregunta.respuesta_correcta) {
            console.log("es correcta")
            let n = parseInt(localStorage.getItem("dificultad")) + 1;


            localStorage.setItem("dificultad", n);
            Acomulado += 100;
            btn_ultima.style.display = "none"
            let color = new color_respuestas;
            color.Reinicio();
           


            if (localStorage.getItem("dificultad") < 6) {
                progreso += 25
                retiro.textContent = `Retirarme con: ${Acomulado}`;
                pregunta_randoom();

                barra_progreso.style.width = `${progreso}%`;

                let elegir_pregunta = new seleccionar_pregunta();

                elegir_pregunta.getpregunta(localStorage.getItem("dificultad"));

                let escribir_dom = new Poner_pregunta();
                escribir_dom.dom(pregunta);

            } else {
                alert(`Felicidades tu acomulado es de ${Acomulado}`);
                localStorage.setItem("acomulado_final", (parseInt(localStorage.getItem("acomulado_final")) + parseInt(Acomulado)))
                content.textContent = localStorage.getItem("acomulado_final");
                reinicio_juego();
            }



        } else {
            console.log("es incorrecta")
            alert("Respuesta incorrecta, perdiste los premios");
            localStorage.setItem("acomulado_final", 0);
            reinicio_juego();

        }
    }
}
let compro_respuestas = new Comproba_respuesta();








let elegir_pregunta = new seleccionar_pregunta();
elegir_pregunta.getpregunta(localStorage.getItem("dificultad"));






let escribir_dom = new Poner_pregunta();
escribir_dom.dom(pregunta);


/* CON ESTA FUNCION REINICIAMOS TODO EL JUEGO */
function reinicio_juego() {

    progreso = 0;

    Acomulado = 0;
    retiro.textContent = `Retirarme con: ${Acomulado}`;
    localStorage.setItem("dificultad", 1);
    barra_progreso.style.width = `0%`;
    pregunta_randoom();
    let color = new color_respuestas;
    color.Reinicio();
    btn_ultima.style.display = "none"

    localStorage.setItem(user_name.textContent, parseInt(localStorage.getItem("acomulado_final")) + parseInt(localStorage.getItem(user_name.textContent)));

    content.textContent = `Acomulado Historico: ${localStorage.getItem(user_name.textContent)}`;

    let elegir_pregunta = new seleccionar_pregunta();

    localStorage.setItem("acomulado_final", 0);

    elegir_pregunta.getpregunta(localStorage.getItem("dificultad"));


    let escribir_dom = new Poner_pregunta();

    escribir_dom.dom(pregunta);

}
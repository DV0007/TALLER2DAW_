var nombres = {
    "Peliculas": [
        {
            "imagen": "img/img1.jpg",
            "titulo": "Volver al Futuro",
            "duracion": "1.29",
            "clasificacion": "M",
            "tipoButacas": "Primera clase",
            "horarios": "7-9"
        },
        {
            "imagen": "img/img2.jpg",
            "titulo": "Rocky",
            "duracion": "3.25",
            "clasificacion": "A",
            "tipoButacas": "Acolchonadas",
            "horarios": "8-10"
        },
        {
            "imagen": "img/img3.jpg",
            "titulo": "Terminator",
            "duracion": "2.0",
            "clasificacion": "A",
            "tipoButacas": "Primera clase",
            "horarios": "4-5"
        }
    ]
};


var div = document.getElementById("info");
div.innerHTML = volcarDatos(nombres.Peliculas);
function volcarDatos(datos) {
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for (var i = 0; i < total; i++) {
        data += "<div class=\"row\">\n"
        data += "<li class=\"box\">\n";
        data += "<div class=\"col-4\">\n"
        data += "<img class=\"mb-5\" src=\"" + datos[i].imagen + "\"/>\n";
        data += "</div>\n";
        data += "<div class=\"col-10 mb-5\">\n"
        data += "<h4>\nTitulo: " + datos[i].titulo + " | Clasificación: " + datos[i].clasificacion + " | Duración: " + datos[i].duracion +
            "\n</h4>\n";
        data += "<p>\nTipo de Butacas: " + datos[i].tipoButacas + "\n<br />\n";
        data += "Horarios: " + datos[i].horarios + "\n</p>\n";
        data += "</div>\n";
        data += "</div>\n";
        data += "</li>\n";
        data += "</div>\n";
    }
    data += "</ul>\n";
    return data;
}
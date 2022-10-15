window.onload = init;
function init() {
    var view = document.getElementById('view');
    var area = document.getElementById('area');
    view.onclick = edit;
    document.onkeydown = function (e) {
        e = e || event;
        // Escape
        if (e.keyCode == 27) {
            cancel();
            return false;
        }
        if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
            edit();
            return false;
        }
        if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
            save();
            return false;
        }
    }
    function edit() {
        //Ocultar el elemento div
        view.style.display = 'none';
        //Dibujar el campo textarea y ponerle estilos
        area.value = view.innerHTML;
        area.style.display = 'block';
        area.style.height = '80px';
        area.style.padding = '6px';
        area.style.width = '444px';
        area.focus();
    }
    function save() {
        area.style.display = 'none';
        view.innerHTML = area.value;
        view.style.display = 'block';
        view.style.letterSpacing = '1.2px';
    }
    function cancel() {
        area.style.display = 'none';
        view.style.display = 'block';
    }
}

var combo1 = 7.25;
var combo2 = 5.75;
var combo3 = 3.50;
var ensalada = 1.50;
var papaFrita = 1.25;
var piezaGrande = 1.75;
var piezaMediana = 1.50;
var piezaPequeña = 1.25;
var bebidaGrande = 1.50;
var bebidaMediana = 1.25;
var bebidaPequeña = 1.00;
var cafe = 0.50;
var postre = 1.25;
var cuentaTotal1 = 7.25;
var cuentaTotal2 = 0;
var cuentaTotal = cuentaTotal1 + cuentaTotal2;
function check1() {
    var cb = document.getElementById("flexRadioDefault1");
    cuentaTotal1 = 0;
    if (cb.checked == true) {
        cuentaTotal1 = cuentaTotal1 + combo1;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}


function check2() {
    cuentaTotal1 = 0;
    var cb = document.getElementById("flexRadioDefault2");
    if (cb.checked == true) {
        cuentaTotal1 = cuentaTotal1 + combo2;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function check3() {
    cuentaTotal1 = 0;
    var cb = document.getElementById("flexRadioDefault3");
    if (cb.checked == true) {
        cuentaTotal1 = cuentaTotal1 + combo3;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list1() {
    var cb = document.getElementById("flexCheckDefault");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + ensalada;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - ensalada;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list2() {
    var cb = document.getElementById("flexCheckDefault2");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + papaFrita;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - papaFrita;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list3() {
    var cb = document.getElementById("flexCheckDefault3");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + piezaGrande;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - piezaGrande;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list4() {
    var cb = document.getElementById("flexCheckDefault4");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + piezaMediana;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - piezaMediana;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list5() {
    var cb = document.getElementById("flexCheckDefault5");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + piezaPequeña;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - piezaPequeña;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list6() {
    var cb = document.getElementById("flexCheckDefault6");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + bebidaGrande;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - bebidaGrande;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list7() {
    var cb = document.getElementById("flexCheckDefault7");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + bebidaMediana;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - bebidaMediana;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list8() {
    var cb = document.getElementById("flexCheckDefault8");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + bebidaPequeña;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - bebidaPequeña;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list9() {
    var cb = document.getElementById("flexCheckDefault9");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + cafe;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - cafe;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}

function list10() {
    var cb = document.getElementById("flexCheckDefault10");
    if (cb.checked == true) {
        cuentaTotal2 = cuentaTotal2 + postre;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    } else {
        cuentaTotal2 = cuentaTotal2 - postre;
        cuentaTotal = cuentaTotal1 + cuentaTotal2;
        totalCuenta.innerHTML = "<p>-La cuenta total es de: $" + cuentaTotal + "</p>";
    }
}


var boton = document.getElementById('save');
var lista = document.getElementById('lista');
var checks = document.querySelectorAll('.form-check-input');

boton.addEventListener('click', function () {
    lista.innerHTML = '';
    checks.forEach((e) => {
        if (e.checked == true) {
            var elemento = document.createElement('li');
            elemento.className = 'list-group-item';
            elemento.innerHTML = e.value;
            lista.appendChild(elemento);
        }
    });
    alert("Gracias por su compra, su orden ha sido tomada, presione aceptar para ver detalles de su orden")
});


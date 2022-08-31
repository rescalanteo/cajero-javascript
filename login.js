let cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" },
    { nombre: "Raul", saldo: 87, password: "xxx" },
    { nombre: "Laura", saldo: 599, password: "yyy" },
];

function redirect(URL) {
    window.location.href = URL;
}

function saveAccount(cuenta) {
    window.localStorage.getItem("cuenta", JSON.stringify(cuenta));
}

function getCurrentAccount() {
    return JSON.parse(window.localStorage.getItem("cuenta"));
}

function validateSignIn(nombre, password) {
    let hasCorrectPassword = false;
    let accountExists = false;

    // 1. iterar cuentas para encontrar una coincidencia por nombre
    for(let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre) {
            accountExists = true;
            // 2. validar contraseña correcta
            if (cuentas[i].password === password) {
                hasCorrectPassword = true;
                saveAccount(cuentas[i]);
            }
        }
    }

    return accountExists && hasCorrectPassword;
}

function signIn(e) {
    e.preventDefault();

    if (validateSignIn(e.target.login.value, e.target.password.value)){ 
        alert("Inicio sesion con exito!")
        redirect("./cajero.html");
    } 
    else{ 
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}

document.getElementById("login")
    .addEventListener("submit", signIn);

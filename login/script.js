var user = document.getElementById('user');
var pass = document.getElementById('pass');

function verificarDados(){
    if (usuario === 'sim' && senha === 'sim'){
        alert("Login bem sucedido!");
    } else {
        alert("Não foi dessa vez!");
    }
}

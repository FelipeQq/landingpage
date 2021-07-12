function loadDoc(url, callback, error)
{
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         callback(this.responseText);
//     } else if (error) {
//         error(this.status);
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
}

//Equivale ao $.ready do jQuery
ready(function() {
    var botao1 = document.getElementById("botao1");
    var botao2 = document.getElementById("botao2");

    botao1.onclick = function() {
        loadDoc("ajax_info1.txt", function(resposta) {
            document.getElementById("demo").innerHTML = resposta;
        });
    };

    botao2.onclick = function() {
        loadDoc("ajax_info2.txt", function(resposta) {
            document.getElementById("demo").innerHTML = resposta;
        });
    };
});
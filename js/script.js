$(document).ready(function(){
  // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
  // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
  // Il numero ottenuto appare al centro del quadrato.

  // EVENTO CLICK SUL QUADRATO
  $(".box").click(function(this){

    // CHIAMATA AL SERVER PER LA GENERAZIONE DI UN NUMERO COMPRESO TRA 1 E 9
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          // RECUPERO DEL NUMERO DAL SERVER
          var numServer = data.response;
          confronto(numServer);
          $(".number").html(numServer);
        },
        "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
      }
    );

    //FUNZIONE DI CONTROLLO SE IL NUMERO ESTRATTO  E' <= 5 O > DI 5
    // IN UNO DEI DUE CASI IL QUADRATO CAMBIA COLORE E STAMPA IL NUMERO AL SUO INTERNO
    function confronto(numServer){
      if (numServer <= 5) {
        $(".box").addClass(".red");
      }else {
        $(".box").addClass(".green");
      }
    }

  });







});

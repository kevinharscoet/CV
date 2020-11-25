$(document).ready(function(){
    $("#header").hide();
    $("#menu").hide();
    $("#main").hide();
    $("#footer").hide();

    new TypeIt("#intro", {
        strings: ["<em>Bonjour, je m'appelle Kévin.</em>","<em>Je suis à la recherche d'une alternance en programmation.</em>", "<em>Voici mon CV :</em>"], 
        speed: 50,
        waitUntilVisible: true
      }).go();

      $("#skip").click(function() {
        $('#intro').hide();
        $("#skip").hide();
        $("#header").show();
        $("#menu").show();
        $("#main").show();
        $("#footer").show();
      })

      setTimeout(function() {
        $('#intro').hide();
        $("#skip").hide();
        $("#header").show();
        $("#menu").show();
        $("#main").show();
        $("#footer").show();
   }, 9000);
})
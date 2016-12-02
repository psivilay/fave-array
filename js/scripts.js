$(document).ready(function() {
  $("form#fave-things").submit(function(event){
    event.preventDefault();

    var faveHero = $("input:radio[name=hero]:checked").val();
    var faveColor = $("#color").val();
    var faveSeason = $("#season").val();
    var faveFood = $("#food").val();

    var userArray = [faveHero, faveColor, faveSeason, faveFood]

    var newArray = [];

    newArray.push(userArray[1]);
    newArray.push(userArray[0]);
    newArray.push(userArray[2]);
    newArray.push(userArray[3]);



    $("#output").text(newArray);

  });
});

$(document).ready(function() {
  $("form#fave-things").submit(function(event){
    event.preventDefault();


//    var faveHero = $("#hero").val();
//    var faveColor = $("#color").val();
//    var faveSeason = $("#season").val();
//    var faveFood = $("#food").val();

    var userFaves = ["hero", "color", "season", "food"];
    var newArray = [];

    newArray.push(userFaves[1]);
    newArray.push(userFaves[0]);
    newArray.push(userFaves[2]);
    newArray.push(userFaves[3]);

    newArray.forEach(function(userFave) {
      var userInput = $("#" + userFave).val();
//Everything works up until below:
      $("." + userFave).text(userInput);

    });

    $("ul").show();

//    var userArray = [faveHero, faveColor, faveSeason, faveFood]

//    var newArray = [];

//    newArray.push(userArray[1]);
//    newArray.push(userArray[0]);
//    newArray.push(userArray[2]);
//    newArray.push(userArray[3]);

// var newArray should now be [faveColor, faveHero, faveSeason, faveFood]

//    $("ul#output").append(newArray);



  });
});

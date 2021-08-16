$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
let things =["person1", "number1","phrase"];
things.forEach(function(things) {
let userInput = $("#" + things).val();
$("." + things).text(userInput);
});
$("#message").show();
});

});

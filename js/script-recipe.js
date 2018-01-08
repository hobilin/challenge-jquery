$(document).ready(function() {
  console.log("tamo redi");

  $(".js-back").css("display", "block");
  $(".js-menu").css("display", "none");

  $(".js-show-recipe").click(function() {
    $("#divMakeRecipe").removeClass("make");
    $(this).addClass("active");
    $(".js-show-make").removeClass("active");
  });

  $(".js-show-make").click(function() {
    $("#divMakeRecipe").addClass("make");
    $(this).addClass("active");
    $(".js-show-recipe").removeClass("active");
  });

});

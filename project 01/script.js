const teamApp = {};
teamApp.init = function () {
  teamApp.formSubmit();
  
}



$(document).ready(function () {

  $(".boxes .box").hover(function () {
    $(".boxes .box").removeClass("active");
    $(this).addClass("active");
  });
});


toDoApp.formSubmit = function () {

  $("form").on("submit", function (e) {
    e.preventDefault();
    // console.log("Got it!");
    // need a variable to store whatever you type
    const userInput = $("#item").val();
    // console.log(userInput);
    $("#item").val("");

    if (userInput !== "") {
      const newListItem = `
          <li>
          <span class="check todo"></span>
          ${userInput}
          </li>`;
      $("ul").append(newListItem);
    }
  })
}

$(document).ready(function () {

    //declare a counter variable
    // this will hold the walue of our count
    let counter = 0;

    //declare a goal variable
    let goal;

    //create a function that will track when the user click on the substract button
    $("#subtract").on("click", function () {
        counter = counter - 1;
        $(".counter").text(counter);//update the counter variable (decrease the value by 1)
        checkGoal();
    });

    //call the comapareGoal function

    //create a function that will track when the user click on the add button
    $("#add").on("click", function () {
        counter = counter + 1;//update the counter variable (increase the value by 1)
        $(".counter").text(counter);
        checkGoal();
    });
    //call the comapareGoal function

    //on form submit, store input value in goal variable
    $("form").on("submit", function (e) {
        e.preventDefault(); // prevent reloading page
        goal = parseInt($("#goal").val());
        $("#goal").addClass("set");
        $('input[type="submit"]').addClass("submitted");
    })
    //update our css

    //create a conditional which is compares whether the counter is equal to the goal variable
    //if so, aler ures that they reached their goal
    const checkGoal = function () {
        if (goal === counter) {
            alert(`You have reached the goal of ${goal}`);
            $("#goal").removeClass("set"); //remove styling classes from form and reset goal varible value
            $('input[type="submit"]').removeClass("submitted");
        }
    }

});
$(document).ready(function () {
    // Displaying 4 clicked items as buttons
    // Shows a target score at the start of the game
    // Assigns a value to each button 
    // Adds the value of the item to a score coutner
    // User loses because they went over target score 
    // User wins because target score = player score
    // Game resets leaving the value for target score and items
    // Player score resets to zero
    // Total wins/losses are NOT reset 
    // Define the variables
    let target_score = Math.floor((Math.random()*120)+1)
    let target_score = $("#target-score").text(target_score)
    let player_score = 0 
    let player_score = $("#player-score").text(player_score)
    let total_wins = $("#wins").text(total_wins)
    let total_losses = $("#losses").text(total_losses)


    // Click functions for each button 
    $(".player-button").on("click", function () {
        // Assign a value of button to a new variable
        let button_pts = [0,0,0,0]; 
        random_button_pts = button_pts[Math.floor((Math.random()*12)+1)];
        let button_pts = parseInt($(this).attr("value", random_button_pts[i]));
        console.log(button_pts)
        // 
        player_score += button_pts;
        $("#player-score").text(player_score)
        if (player_score === target_score) {
            alert("Winner!");
            scoreboard();
            reset();

        } if (player_score > target_score) {
            alert("Loser!");
            total_losses++;
            reset();
        }
    });
    function scoreboard() {
        target_score;
        total_wins;
        total_losses;
    }
   
    function reset() {
        target_score;
        player_score = 0;
        total_wins;
    }
});
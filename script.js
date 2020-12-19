$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["Ask again later", "Without a doubt", "My sources say no", "Outlook not so good", "Signs point to yes", "Very doubtful"];
$("#answer").hide();

magic8Ball.askQuestion = function (question) {
	$("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = this.listOfAnswers[randomIndex];
		$("#answer").text(randomAnswer);

	console.log(question);
	console.log(randomAnswer);
};

var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout (
		function() {
	var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion(question);
	}, 500);
	$("#8ball").effect( "shake" );
};

$("#questionButton").click( onClick );

});

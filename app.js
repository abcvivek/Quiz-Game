
	var gamePlaying = true;

init();

function init() {

	document.querySelector('#answerText')
	.style.background = 'linear-gradient(to right, #1D2671, #C33764)';
 
    document.querySelector('.answer2')
	.style.background = 'linear-gradient(to right, #1D2671, #C33764)';

    document.querySelector('#answerText1')
	.style.background = 'linear-gradient(to right, #1D2671, #C33764)';

	document.querySelector('.answer4')
	.style.background = 'linear-gradient(to right, #1D2671, #C33764)';

    document.querySelector('#nextButton').classList.add('disabled');

    document.querySelector('#nextButton').disabled = true;	

}

function questions(question,answers,correctAnswer) {

	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}

questions.prototype.displayQuestion = function() {


	document.querySelector('#questionText').innerHTML =
	     this.question;

     document.querySelector('#answerText').innerHTML = 
     	'<strong>' + this.answers[0] + '</strong>';

     document.querySelector('.answer2').innerHTML = 
     	'<strong>' + this.answers[1] + '</strong>';

     document.querySelector('#answerText1').innerHTML = 
     	'<strong>' + this.answers[2] + '</strong>';

     document.querySelector('.answer4').innerHTML = 
     	'<strong>' + this.answers[3] + '</strong>';
   
}

questions.prototype.checkAnswer = function() {

  correct = this.correctAnswer;

 document.querySelector('#answerText').addEventListener('click',compare);
 document.querySelector('.answer2').addEventListener('click',compare);
 document.querySelector('#answerText1').addEventListener('click',compare); 
 document.querySelector('.answer4').addEventListener('click',compare);

 
 function compare() {


 	document.querySelector('#nextButton').classList.remove('disabled');

 	document.querySelector('#nextButton').disabled = false;	


  var w = document.querySelector('#answerText').value;
  var x = document.querySelector('.answer2').value;
  var y = document.querySelector('#answerText1').value;
  var z = document.querySelector('.answer4').value;

  
  if(w == correct)
       document.querySelector('#answerText').style.background = 'rgb(0,255,0)';
   else 
   	   document.querySelector('#answerText').style.background = 'rgb(255,0,0)';

   	if(x == correct)
       document.querySelector('.answer2').style.background = 'rgb(0,255,0)';
   else 
   	   document.querySelector('.answer2').style.background = 'rgb(255,0,0)';

   	if(y == correct)
       document.querySelector('#answerText1').style.background = 'rgb(0,255,0)';
   else 
   	   document.querySelector('#answerText1').style.background = 'rgb(255,0,0)';

   	if(z == correct)
       document.querySelector('.answer4').style.background = 'rgb(0,255,0)';
   else 
   	   document.querySelector('.answer4').style.background = 'rgb(255,0,0)';
}
    	
}

var a = document.getElementById("myAudio");

  function playAudio() { 
    a.play();
 }

 var s = document.getElementById("nextSong");

  function playAudio1() { 
    s.play();
 }


var randomQuestions = [];

var q1 = new questions('In which year did Maradona score a goal with his hand?',
                          [1986, 1990, 2016 ,2000],1);
randomQuestions.push(q1);

var q2 = new questions('What is the national sport in Japan?',
                          ['Cricket','Sumo Wrestling','Hockey','Football'],2);
randomQuestions.push(q2);

var q3 = new questions('How many minutes is a rugby match?',
                          ['1 Day','80 Min','10 Min','30 Min'],2);
randomQuestions.push(q3);

var q4 = new questions('In which country were the first Olympic Games held?',
                          ['India','Japan','China','Greece'],4);
randomQuestions.push(q4);

var q5 = new questions('How many players are on each side of the net in beach volleyball?',
                          ['1 player','2 players','6 players','3 Players'],2);
randomQuestions.push(q5);

var q6 = new questions('How long is an Olympic swimming pool?',
                          ['50 mtr','10 Mtr','100 Mtr','75 Mtr'],1);
randomQuestions.push(q6);

var q7 = new questions('Which planet is nearest the sun?',
                          ['Earth','Saturn','Jupiter','Mercury'],4);
randomQuestions.push(q7);

var q7 = new questions('Who discoved one of the first antibiotics: penicillin ?',
                          ['Newton','Thomas Edison','Alexander Fleming','Benjumin Franklin'],3);
randomQuestions.push(q7);

var q8 = new questions('What is the substance known by the chemical formula NH3?',
                          ['Ammonia','Nitrogen','Hydrogen Peroxide ',' Water'],1);
randomQuestions.push(q8);

var q9 = new questions('What is the lightest existing metal?',
                          ['Aluminium','Iron','Copper ',' Zinc'],1);
randomQuestions.push(q9);

var q10 = new questions('Which device do we use to look at the stars?',
                          ['Camera','Telescope','Microscope','Pin Hole Camera'],2);
randomQuestions.push(q10);


nextQuestion();


document.querySelector('#nextButton').addEventListener('click',nextQuestion);


function nextQuestion() {

init();

var n = Math.floor(Math.random() * randomQuestions.length);

randomQuestions[n].displayQuestion();

randomQuestions[n].checkAnswer();

}












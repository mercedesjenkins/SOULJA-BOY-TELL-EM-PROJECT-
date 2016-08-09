var quotes = [
	"Self proclaimed he a critically acclaimed. For the fortune and fame, he'll run through the rain. For a million in change, takin over the game.",
	"But I need someone different. You know it, oh oh, you know it",
	"Baby, I know that you like me. You my future wifey. Soulja boy tell'em yea. You can be my bonnie. I can be yo' clyde.",
	"That manual Ferrari Italia, some fly shit. Its sitting at the house like I bought in '96.",
	"Tryin to get paid tha right way. But somehow the right way don't pay. I'm comin home late every night. Gotta struggle an fight.",
	"Got a hand full of stacks better grab an umbrella. I make it rain, I make it rain.",
	"Say, A doggy is nuttin' if he don't have a bone. All a doggy hold ya' bone, all doggy hold it.",
	"China contains about 60% of snow leopard habitat.",
	"The ocelot is a sleek animal with a gorgeous dappled coat.",
	"Party like a rock star, hit 'em with the hot bars. Fast like a NASCAR, lime like my dad's car. I deserve a Grammy.",
	"I ain't did nothin' to 'em, but count this money. And put my team on, now my whole clique stuntin' ",
	"Hopped up out the bed, turn my swag on. Took a look in the mirror said what's up? Yeah, I'm getting money, oh.",
]
//when user submits the form choose1 
	//find out what value was selected #advice (use .val method - save to variable) (love, money, pets, inspiration)
	//show element w/ that id 
$('.choose1').on('submit', function(e) {
	e.preventDefault();
	var userInput = $(this).find('select').val();
	
	$("#" + userInput).fadeIn(300);
});
//when the user submits choose2 form
	//prevent default (e) 
	//get the quoteIndex (see line #13) 
	//values are 0-12
	//convert string quoteIndex to a # (parseInt method)
	//get the value that's at the index in the array + store in var finalAnswer  (string of text)
	//change html of #quote to finalAnswer
$('.choose2 select').on('change', function(e) {
	$('#poop').show();

	// e.preventDefault();
	// var userInput = $(this).find('select').val();
	
	// $("#" + userInput).fadeIn(300);
});

$('.choose2').on('submit', function(e) {
	e.preventDefault();
	var userInput = $('.choose2').find('select:visible').val(); // "6"
	var quoteIndex = parseInt(userInput); // parseInt("6") => 6
	var textToDisplay = quotes[quoteIndex];
$('#quote').html(textToDisplay);
});


$('.my-slider').unslider({
	autoplay: true, 

});



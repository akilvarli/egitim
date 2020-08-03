

//Autocomplete

$(function(){

	kelimeler=[

	"Javascript",
	"Jquery",
	"Bootstrap 4",
	"Php",
	"Java"
	]

	$('#listele').autocomplete({

		source:kelimeler,
		minLength:2
	})

})




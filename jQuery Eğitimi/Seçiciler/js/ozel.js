

//Tag Seçiciler

/*
$(document).ready(function(){

	$('p').css('color','blue');

});

$(document).ready(function(){

	$('div').css('color','red');

}); */



//Id ve Class Seçiciler
/*
$(document).ready(function(){

	//Id Seçici
	$('#php').css("color","orange");

	//Class
	$('.bootstrap').css("color","pink");

	//Id ve Classs Beraber aynı anda seçme

	$('.bootstrap,#php').css({"font-size":"30px"});
});*/


//Alternatif Diğer Seçiciler
/*
$(document).ready(function(){

	//1.Yol
	//$('input').css({"width":"600px"})
	//$("input[type='password']").css({"width":"900px"})

	//2.Yol
	$('input:text').css({"width":"600px"})
	$('input:password').css({"width":"900px"})
}) */


//Sıralamalı Seçiciler

//İlk indis elemanı seçildi
//$('li:first').css({"background-color":"green"});

//Son İndis Elemanı Seçildi
//$('li:last').css({"background-color":"green"});

//Tek indis Elemanı Seçildi
//$('li:odd').css({"background-color":"green"});

//Çift İndis Elemanı Seçildi
//$('li:even').css({"background-color":"green"});

//Zebra Stili Tablo Yapımı
/*
$(document).ready(function(){

	$('tr:odd').css({"background-color":"grey"});
})*/



//Çocuk Seçiciler
/*
$(document).ready(function(){

	//$('.udemy p:first-child').css({"background-color":"red"});

	$('.udemy p:last-child').css({"background-color":"red"});
})*/



//Elemanları Bulup Seçme
/*
$(document).ready(function(){

	$('.udemy').find("b").css({"background-color":"red"});

	$('.udemy').find("span").css({"background-color":"orange"});

	$('.emrah').find("p").css({"background-color":"blue"});	
})*/



//Previous ve Next Seçiciler
/*
$(document).ready(function(){

	//$('.iki').prev().css({"background-color":"red"})

	$('.iki').next().css({"background-color":"red"})
})*/




//Index Numarasına Göre Seçme
/*
$(document).ready(function(){

	$('.udemy li:eq(0)').css({"background-color":"orange"})
})*/



//First, Last, Filter ve Not
/*
$(document).ready(function(){

	//$('div').first().css({"background-color":"yellow"});

	//$('div').last().css({"background-color":"yellow"});

	//$('div').not(".orta").css({"background-color":"yellow"});

	$('div').filter(".orta").css({"background-color":"yellow"});
}) */



//Each Kullanımı
/*
$(document).ready(function(){


	$('ul li').each(function(index){

		alert(index+'.eleman :'+$(this).text());
	})
}) */



//Slice Kulllanımı
/*
//$('li').slice(0).css({"background-color":"red"})

$('li').slice(1,3).css({"background-color":"red"})
*/


//Is Kullanımı
/*
$(function(){

	if ($('div').is('#udemy')) {

		$('b').text("Doğru Var")

	} else {

		$('b').text("Hayır Yok")
	}
})*/

	

			//DOM MANİPULASYON

//addClass Kullanımı


$().ready(function(){

	$('p').addClass("renk");
})
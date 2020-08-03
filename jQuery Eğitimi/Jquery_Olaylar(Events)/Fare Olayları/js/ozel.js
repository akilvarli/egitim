

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
/*
$().ready(function(){

	$('p').addClass("renk");
}) */


//hasClass Kullanımı
/*
$().ready(function(){

	var sor=$("p").hasClass('renk');

	if (sor==true) {

		document.write("var");

	} else {

		document.write("yok");
	}
}) */



//Metod Zincileme
/*
$(function(){

	$('div').height(400).fadeOut(2000).fadeIn(2000);
})*/


//removeClass Kullanımı
/*
$().ready(function(){

	$('div').removeClass("renk");
})*/



//toggleClass Kullanımı
/*
$().ready(function(){

	$('button').click(function(){

		$('p').toggleClass('renk');
	})
})*/



//Class Bulma
/*
$().ready(function(){

	var bul=$('div').hasClass('emrah');

	if (bul) {

		alert("Class Var");

	} else {

		alert("Class Yok");
	}
})*/



//Append & Prepend Kullanımı
/*
$(document).ready(function(){


	//Düz Yazı Olarak Ekleme

	//$('.php').append("append ile arkasına geldi")
	//$('.php').prepen("prepend ile önüne geldi")

	//Html Kodlar İle Ekleme

	$('.php').append("<p>append ile arkasına geldi</p>")
	$('.udemy').append("<b>prepend ile önüne geldi</b>")

	$('.liste').prepend('<option>JQuery</option>')
})*/



//AppendTo & PrependTo Kullanımı
/*
$(document).ready(function(){

	//$('a').appendTo($('p'));
	//$('a').prependTo($('p'));

	$('#ekle').click(function(){

		//$('a').appendTo($('p'));
		$('a').prependTo ($('p'));
	})

})*/



//After ve Before Kullanımı
/*
$(document).ready(function(){

	//Seçili Nesnelerin Hepsinin Arkasına Eklendi
	//$('li').after('<li>JQuery</li>');

	//İlk Nesnenin Arkasına Ekleme
	//$('li:first').after('<li>JQuery</li>');

	//Son Nesnenin Arkasına Ekleme
	//$('li:last').after('<li>JQuery</li>');

	//Seçili Nesnelerin Hepsinin Önüne Eklendi
	//$('li').before('<li>JQuery</li>');

	//İlk Nesnenin Önüne Ekleme
	//$('li:first').before('<li>JQuery</li>');

	//Son Nesnenin Önüne Ekleme
	//$('li:last').before('<li>JQuery</li>');

	$('button').click(function(){

		$('li:last').before("<li>JQuery Buton ile eklendi</li>")
	})
})*/



//After ve Before Proje
/*
$(document).ready(function(){

	$('#ekle').click(function(){

		$('input:last').before("<input type='file' name='yukle[]'<br><br>");
	})
})*/



//Clone Kullanımı
/*
$(document).ready(function(){

	//$('div').clone().insertAfter('p');

	//$('div').clone().insertBefore('p');

	$('button').click(function(){

		$('input').clone().insertAfter('input');
	})
})*/



//Text Kullanımı
/*
$().ready(function(){

	$('a').text("Udemy Kurslarına Git");

	$('b').text("Ben kalın yazı olarak eklendim");

	$('p').text("Ben paragraf olarak eklendim");
})*/



//Replace Kullanımı
/*
$(document).ready(function(){

	$('button').click(function(){

		//$('p').replaceWith('<p>Bootstrap Kursu</p>')

		$('<p>Bootstrap Kursu</p>').replaceAll('p');
	})
})*/



//Empty Kullanımı
/*
$(document).ready(function(){

	$('button').click(function(){

		//$('p').empty();

		//$('p').text("Temizlendi");

		$('textarea').empty();
	})
})*/



//Remove Kullanımı
/*
$(document).ready(function(){

	$('button').click(function(){

		//$('p').remove();

		//$('input').eq(0).remove();

		$('li').eq(0).remove();
	})
})*/



//Elemanların Verilerine Ulaşma
/*
$().ready(function(){

	$('a').text("Emrah Yükseli'in Udemy Kurslarına Git");

	$('a').attr("href","www.emrahyuksel.com.tr");

	$('a').attr('style',"color:orange");
})
*/



//Stillere Erişme
/*
$().ready(function(){

	//console.log($('.udemy').css('width'));

	//$('.udemy').css({"width":"300px"})

	$('.udemy').css({"width":"+=50px"})
})*/



//Html Kullanımı
/*
$().ready(function(){

	//Nesnenin İçeriğini Alır
	//alert($("p").html());

	//Nesnenin içeriğini değiştirir
	//$('p').html("paragrafın içeriğini ben değiştirdim");

	//Nesnenin içeriğini başka bir nesneye aktarmak
	//$('b').html($('p').html())

	//Çoklu Alma
	//alert($('div').html());

	var icerik=$('b').html();

	if (icerik=='emrah') {

		document.write('b kalın etiketinin içeriğinde emrah yazıyor');
	}
})*/



//Val Kullanımı
/*
$().ready(function(){

	//alert($('input').val());

	$('button').click(function(){

		var liste=$('select').val();

		if (liste=='Php') {

			alert('Php Seçildi');

		} else {

			alert('Php Seçin')
		}
	})
})*/


	
		//ÇEKİRDEK YAPIS

//Length Kullanımı
/*
$(function(){

	//$('b').text("Eleman Sayısı :"+$('li').length);

	$('button').click(function(){

		alert("Eleman Sayısı :"+$('li').length);
	})
})*/



//Get Kullanımı
/*
$(function(){

	//alert($('li').get())

	var say=$('li').get();

	$('b').text("Ulaşılan Eleman İçeriği :"+$(say).eq(0).text());
})*/



//Index
/*
$(function(){

	$('b').text("Ulaşılan Elemanın Index Numarası: "+$(".Javascript").index());
})*/




		//EVENTS - OLAYLAR

//Ready Kullanımı

//1.Yol

/*$(document).ready(function(){

	alert("Sayfa Yüklendi");
})*/


//2.Yol

/*$().ready(function(){

	alert("Sayfa Yüklendi");
}) */


//3.Yol
/*
$(function(){

	alert("Sayfa Yüklendi");
})*/



//On Olay Yakalayıcı
/*
$().ready(function(){

	/*$('button').click(function(){

		$(this).after("<button>Tıkla Buton Üret</button>")
	})
*/

/*
$('body').on('click','button',function(){

	$(this).after("<button>Tıkla Buton Üret</button>")
}) 

})*/



//One Kullanımı
/*
$().ready(function(){

	//File input butona tıklandıkça oluşacak. Ama one fonksiyonu ile siz bunu bir kez ile sınırlayacaksınız.

	$('body').one('click','button',function(){

		$(this).after("<button>Tıkla Buton Üret</button>")
	})
})*/



//One Kullanımı - Proje Ödevi
/*
$(function(){

//File input butona tıklandıkça oluşacak. Ama one fonksiyonu ile siz bunu bir kez ile sınırlayacaksınız.

$('body').on('click','button',function(){

	$('button').before('<input type="file" name=""><br><br>');
})

})*/



//Of Olay Sonlandırıcı
/*
$().ready(function(){

$('body').on('click','#ekle',function(){

	$(this).after("<button id='ekle'>Tıkla Buton Üret</button>")
})

$('body').on('click','#kaldir',function(){

	$('body').off();
})

})*/



//Trigher Proje Ödevi
/*
$(function(){

	$('#btn1').click(function(){

		alert("Button 1 Click Olayı Tetiklendi");

	})

	$('#btn2').click(function(){

		$('#btn1').trigger('click');
	})
})*/



			//KLAVYE OLAYLARI

//Keydown Kullanımı
/*
$(function(){

	/*$('html').keydown(function(){

		alert("bir tuşa basıldı");
	})

	$('input').keydown(function(){

		alert('bir tuşa basıldı');
	})
}) */


//Keypress 
/*
$(function(){

	$('#ad').keypress(function(event) {

		//$('b').append("Tuşu bırak");

		$('div').fadeIn(2000);

		$('div').animate({

			marginLeft:"+=10px"
		})
	})
})
*/


//Keyup 
/*
$(function(){

	$('#ad').keypress(function(event) {

		$('b').append("Tuşu bırak");

		/*$('div').fadeIn(2000);

		$('div').animate({

			marginLeft:"+=10px"
		})*/
	/*})

	$('#ad').keyup(function(){

		//alert('Tuş Bırakıldı');

		$('b').append("TUŞ BIRAKILDI");
	})
})*/



//Nesneyi sayfada yön tuşları ile hareket ettirme
/*
$(function(){

	$('body').keydown(function(event) {

		var a=event.which;

		$('div').text("Basılan Tuş : "+a);

		if (a==38) {

			$('div').animate({

				marginTop:"-=10px"
			})

		} else if (a==37) {

			$('div').animate({

				marginLeft:"-=10px"
			})

		} else if (a==39) {

			$('div').animate({

				marginLeft:"+=10px"
			})

		} else if (a==40) {

			$('div').animate({

				marginTop:"+=10px"
			})

		}
	})
})*/



			//MOUSE OLAYLARI

//Click Kullanımı
/*
$(function(){

	$('button').click(function(){

		$('b').text('Fare ile Tıklandı');
	})
})*/



//dblclick Kullanımı
/*
$(function(){

	$('button').dblclick(function(){

		$('b').text('Fare ile Çift Tıklandı');
	})
})*/



//Hover
/*
$(function(){

	$('button').hover(i,d)

		function i(){

			$('b').text("Süper butonun üzerindesin");
		}

		function d(){

			$('b').text("Beni bırakma...")
		}
	
}) */



//Mousedown
//Mouse tıklamalarını butonlara göre tespit etme
/*
$(function(){

	$('button').mousedown(function(event){

		$('b').text(event.which);

		//switch case

	})
}) */


//Mousedown Proje
/*

$(function(){

	$('button').mousedown(function(event){

		$('b').text(event.which);

		//switch case

		switch(event.which) {

			case 1:
			alert('Sol Tuşa Basıldı');
			break;

			case 2:
			alert('Orta Tuşa Basıldı');
			break;

			case 3:
			alert('Sağ Tuşa Basıldı');
			break;

		}

	})
})*/



//Mouseup
/*
$(function(){

	$('p').mouseup(function(){

		$('b').text("Fare Tuşu Bırakıldı");

	})

	$('p').mousedown(function(){

		$('b').text("Fare Tuşuna Basılıdı");
	})
}) */


//Mousedown
/*
$(function(){

	$('p').mouseup(function(){

		$('b').text("Fare Tuşu Bırakıldı");

	})

	$('p').mousedown(function(){

		$('b').text("Fare Tuşuna Basılıdı");
	})

	$('p').mouseout(function(){

		$('b').text("Fare geldi ama peyniri yemeden gitti");
	})
})*/


//Mouseenter
/*
$(function(){

	$('p').mouseup(function(){

		$('b').text("Fare Tuşu Bırakıldı");

	})

	$('p').mousedown(function(){

		$('b').text("Fare Tuşuna Basılıdı");
	})

	$('p').mouseout(function(){

		$('b').text("Fare geldi ama peyniri yemeden gitti");
	})

	$('p').mouseenter(function(){

		$('b').text("Fare geldi ;)");
	})
})*/


//Mousemove
/*
$(function(){

	$('p').mousemove(function(e){

		$('b').text(e.pageX+' '+e.pageY);
	})
})*/


//Mousetan kaçan buton

$(function(){

	$('button').hover(i);

	function i() {

		$('button').animate({

			marginLeft:"+=100px"
		})

		$('button').animate({

			marginTop:"+=100px"
		})
	}

	$('button').click(function(){

		alert("Yakaladım")
	})

	
})
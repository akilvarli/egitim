//Blur

/*
$(function(){

	$('#islem').blur(function(){

		$('b').text("Umarım doğru bilgi girmişssindir.")
	})
})*/


//Blur Proje Ödevi
/*
$(function(){

	$('#islem').blur(function(){

		var e=$('#islem').val();

		if (e=='udemy') {

			$('b').text("adamsın doğru yazdın");

		} else {

			$('b').text("geri dön ve düzelt")
		}
	})
}) */



//Change
/*
$(function(){

	$('#islem').change(function(){

		var e=$('#islem').val();

		$('b').text(e.length);
	})
})*/



//Focus
/*
$(function(){

	$('#ad').focus(function(){

		$('b').text("Adını doğru gir dostum")
	});

	$('#soyad').focus(function(){

		$('b').text("Soyadını doğru gir dostum");
	})
})*/



//Select
/*
$(function(){


	//nesnenin içeriği seçildiğinde kullanılır

	$('#ad').select(function(){

		$('b').text("İçerik Seçildi");
	})
})
*/


//select ile metin seçildiği gibi kopyalama
/*
$(function(){

	$('#ad').select(function(){

		$('b').text("İçerik Seçildi");

		if (document.execCommand("copy")) {

			alert("Kopyalama Başarılı")
		}
	})
})*/



//Submit
/*
$(function(){

	$('#forms').submit(function(event) {

		if ($('#ad').val()!='4') {

			alert("Sadece 4 girebilirsin");
			event.preventDefault();
		}
	})
})*/


//Subimt Proje Ödevi

$(function(){

	$('#forms').submit(function(event) {

		if ($('#kadi').val().length<6) {

			$('b').text("Kullanıcı Adınız 6 Karakterden Az Olamaz");
			event.preventDefault();
		
		}

		if ($('#password').val().length<8) {

			$('b').after("Şifremiz 8 karakterden az olamaz");
			event.preventDefault();
		}
	})
})
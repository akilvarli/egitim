
$(function(){

	$('#mesaj-alani').keyup(function(){

		var limit=160;

		var say=$(this).val().length;

		$('b').text('Girilen Karakter sayısı: '+say)

		if (say>limit) {

			$('b').text('Limite Ulaştınız')
		}
	})

	$('#gonder').click(function(){


		var limit=160;

		var say=$('#mesaj-alani').val().length;

		if (say>limit) {

			alert(limit+' Karakter Sınırlaması var')
		
		} else {

			alert("Mesajınız Başarıyla İletilmiştir..")
		}

	})
})
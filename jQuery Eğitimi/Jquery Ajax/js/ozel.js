//Ajax Post & Get

//POST
/*
$('#gonder').click(function(){

	$.ajax ({

		type:"post",
		url:"islem.php",
		data:$('#jquery_ajax').serialize(),

		success:function(cevap) {

			$('b').text(cevap);
		}
	})
})*/


//GET
/*
$('#gonder').click(function(){

	$.ajax ({

		type:"get",
		url:"islem.php?kullanici_id=100",
		data:$('#jquery_ajax').serialize(),

		success:function(cevap) {

			$('b').text(cevap);
		}
	})
})*/


//load 
/*
$(function(){

	setInterval(function(){

		$('b').load('veriler.html')

	},5000);



	$('#verigetir').click(function(){

		//Tüm sayfadaki verileri çeker
		//$('b').load('veriler.html');

		//Belirtilen nesnenin içeriğini çeker
		//$('b').load('veriler.html #veri2')
	})

})*/



//Proje Ödevi


$('#gonder').click(function(){

	$.ajax ({

		type:"get",
		url:"islem.php?kullanici_id=100",
		data:$('#jquery_ajax').serialize(),

		success:function(cevap) {

			$('b').text(cevap);

			if (cevap) {

				$('#ad').val("");
				$('#soyad').val("");
			}
		}
	})
})
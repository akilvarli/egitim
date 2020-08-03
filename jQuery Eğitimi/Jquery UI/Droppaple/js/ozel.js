

//Droppable

$(function(){


	$('#kare').droppable({

		accept:'#oynat1',

		drop:function(){

			alert("Nesne Başarıyla Yüklendi")
		}
	})

	$('#oynat').draggable({revert:'invalid'})
	$('#oynat1').draggable({revert:'invalid'})
})
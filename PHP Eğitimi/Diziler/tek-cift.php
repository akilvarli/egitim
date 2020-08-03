<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

<?php
	
if (isset($_POST['notislemi'])) {
	
	echo "Sayı : ".$sayi=$_POST['not']; echo " ";


	if ($sayi%2) {
		
		echo "Bu sayı tektir.";
	
	} else {

		echo "Bu sayı çifttir.";
	}


}





  ?>







<hr>

<form action="" method="POST">
	<input type="text" placeholder="Sayı Giriniz" name="not">
	<button type="submit" name="notislemi">Gönder</button>
</form>


</body>
</html>
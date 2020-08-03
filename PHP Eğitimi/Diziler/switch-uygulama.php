<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

<?php 

if (isset($_POST['notunuz'])) {
	
	echo "Notunuz : ".$not=$_POST['not'] ; echo " ";


	switch ($not) {
		case '5':
			echo "Pekiyi";
			break;

			case '4':
			echo "İyi";
			break;

			case '3':
			echo "Orta";
			break;

			case '2':
			echo "Geçer";
			break;

			case '1':
			echo "Zayıf";
			break;
		
		default:
			echo "Geçerisiz tanım";
			break;
	}

}


 ?>

<form action="" method="POST">
	<input type="number" max="5" placeholder="Notu giriniz.." name="not">
	<input type="submit" name="notunuz">
</form>





</body>
</html>
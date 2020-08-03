<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>






	<?php 

	echo "<br>";
	echo "<hr>";
	
	$tek=0;
	$cift=0;


	
	for ($i=0; $i <=100 ; $i++) { 

		echo "$i. Sayı : ".$i; 

		if ($i%2==0) {

			echo " Bu sayı çift";

			$cift++;

		} else {

			echo " Bu sayı tek";
			$tek++;

		}

		echo "<br>";
		echo "<hr>";


	}
	
	echo "Tek sayı $tek adet var";
	echo "<br>";
	echo "Çift sayı $cift adet var";
	echo "<br>";







	?>



	




</body>
</html>
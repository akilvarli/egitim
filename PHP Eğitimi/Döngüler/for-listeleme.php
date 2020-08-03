<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>




<?php 

//For Döngüsü ile dizi yazdırma


$dizi=array("elma","armut","üzüm","kavun","karpuz","ananas","kivi");

//echo $dizi;

echo "<pre>";
print_r($dizi);
echo "</pre>";

echo $dizi[0]; echo " ";
echo $dizi[1]; echo " ";
echo $dizi[2]; echo " ";
echo $dizi[3]; echo " ";
echo $dizi[4]; echo " ";

echo "<hr>";
	
$say=count($dizi);

/*
for ($i=0; $i <=5 ; $i++) { 
	
	echo $dizi[$i]; echo " ";
}*/

for ($i=0; $i <=$say ; $i++) { 
	
	echo $dizi[$i]; echo " ";
}

 ?>


	




</body>
</html>
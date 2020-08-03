<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

<?php 
/*


==    => eşit ise
===   => aynısı ise
<     => küçük ise
>     => büyük ise
>=    => büyük eşit ise
<=    => küçük eşit ise


elseif  => sürekli tekrar eden sorgu
else    => son kapanış koşulu

*/

$say==800;

if ($say==5) {
	
	echo "5";

} elseif ($say==6) {
	
	echo "6";

} elseif ($say==7) {
	
	echo "7";

} elseif ($say==8) {
	
	echo "8";

} else {

	echo "Başka birşey";
}
echo "<br>";
echo "<hr>";


echo $say=='800' ? 'doğru' : 'yanlış';
echo "<br>";
$deger="Armut";


 ?>


 <select>
 	<option <?php echo $deger=='Armut' ? 'selected' : ' ' ?>>Armut</option>
 	<option <?php echo $deger=='Elma' ? 'selected' : ' ' ?>>Elma</option>

 </select>






 <br><br><br><br><br><br><br><br>











</body>
</html>
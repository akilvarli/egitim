<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>



<?php 

date_default_timezone_set('Europe/Istanbul');

		//Diziler

$dizi=array("Akil","Varlı",10,20,30,40);

//echo $dizi;

print_r($dizi);
echo "<br>";

echo $dizi[0];echo "<br>";
echo $dizi[1];echo "<br>";
echo $dizi[2];echo "<br>";
echo $dizi[3];echo "<br>";
echo $dizi[4];echo "<br>";
echo $dizi[5];echo "<br>";

echo "<pre>";
print_r($dizi);
echo "</pre>";
echo "<br>";


//Dizilerde sık kullanılan hazır fonksiyonlar

//sort => küçükten büyüğe doğru sıralar

$dizi=array(10,9,8,7,6,12,5,4,3,2,1,0);
sort($dizi);
echo "<pre>";
print_r($dizi);
echo "</pre>";
echo "<br>";

//rsort => büyükten küçüğe doğru sıralar

$dizi=array(10,9,8,7,6,12,5,4,3,2,1,0);
rsort($dizi);
echo "<pre>";
print_r($dizi);
echo "</pre>";
echo "<br>";

//rsort => büyükten küçüğe doğru alfabetik sıralama

$dizi=array("a","b","c","d");
rsort($dizi);
echo "<pre>";
print_r($dizi);
echo "</pre>";
echo "<br>";


//in_array => dizi içerisinde aradığımız değerin olup olmadığını denetler.Varsa 1 değerini döndürür.

$dizi=array("a","b","c","d");
$sonuc=in_array("a",$dizi);
echo $sonuc;


if ($sonuc) {

	echo "var";

} else {

	echo "yok";
}
echo "<br>";
echo "<br>";

//implode => Dizi değerlerini tek bir değişken halimize getirmemize yarar

$dizi=array("a","b","c","d");

$sonuc=implode("+",$dizi);

echo $sonuc;

echo "<br>";


//explode => değişkeni parçalayarak dizi haline getirir

$zaman="12-06-2020 15:41";
$sonuc=explode(" ",$zaman);

echo "<pre>";
print_r($sonuc);
echo "</pre>";
echo "<br>";

echo "Tarih : ".$sonuc[0]." Saat :".$sonuc[1];
echo "<hr>";


echo $zaman=date("d-m-y h:i:s");
$sonuc=explode(" ",$zaman);

echo "<pre>";
print_r($sonuc);
echo "</pre>";
echo "<br>";

echo "Tarih : ".$sonuc[0]." Saat :".$sonuc[1];
echo "<hr>";

?>











</body>
</html>
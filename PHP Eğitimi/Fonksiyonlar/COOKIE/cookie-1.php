<?php 


//COOKIE Nedir ve Nasıl Oluşturulur?
/*
$adsoyad="Akil Varlı";

setcookie("adsoyad",$adsoyad);

echo $_COOKIE['adsoyad'];

*/




//COOKIE zaman ekleme
/*
$adsoyad="Akil Varlı";

setcookie("adsoyad",$adsoyad,time()+3600);

echo $_COOKIE['adsoyad'];
*/





/*COOKIE Zaman Nasıl Arttırılır

strtotime("+30 seconds") 30 saniye ekler.
strtotime("+1 hour") 1 saat ekler.
strtotime("+1 day") 1 gün ekler.
strtotime("+1 week") 1 hafta ekler.

*/

$adsoyad="Akil Varlı";

setcookie("adsoyad",$adsoyad,strtotime("+1 week"));

echo $_COOKIE['adsoyad'];


 ?>
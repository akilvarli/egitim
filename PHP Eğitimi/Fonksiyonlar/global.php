<?php 

//Fonksiyonlarda global değişken kullanımı

$b=10;

function ekle($a) {

	global $b;
	return $a+$b;

}

echo ekle(20);

 ?>
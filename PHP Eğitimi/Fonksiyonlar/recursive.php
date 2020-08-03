<?php 

//Kendini çağıran recursive fonksiyonlar


$sabit=1;


function faktoriyel($a) {


	global $sabit;

	if ($a>1) {
		
		$sabit=$sabit*$a;
		$a--;
		faktoriyel($a);

	}

	return $sabit;


}

	echo faktoriyel(10);

 ?>
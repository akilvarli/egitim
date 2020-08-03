<?php 

try {

	$db=new PDO("mysql:host=localhost;dbname=eticaret;charset=utf8",'root','earlvarli34');
	//echo "veritabanı bağlantısı başarılı";
}

catch (PDOExpception $e) {

	echo $e->getMessage();
}


 ?>
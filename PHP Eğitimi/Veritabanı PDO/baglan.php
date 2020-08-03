<?php 


try {

	$db=new PDO("mysql:host=localhost;dbname=udemy;charset=utf8;",'root','earlvarli34');

	//echo "Giriş Denemesi Başarılı";

} catch (PDOException $e) {

	echo $e->getMessage();
}

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

<?php 

$kadi="akil";
$pass="123456";
/*
$kullanici_ad=$_POST['kullanici_ad'];
$kullanici_password=$_POST['kullanici_password'];

if ($kadi==$kullanici_ad OR $pass==$kullanici_password) {

	echo "Giriş Başarılı";
	
} else {

	echo "Giriş Denemesi Başarısız";
}
*/

if ($kadi==$_POST['kullanici_ad'] AND $pass=$_POST['kullanici_password']) {


	echo "Giriş Başarılı";

} else {

	echo "Giriş Denemesi Başarısız";
}


 ?>


<br>
<hr>



<form action="" method="POST">
	
	<input type="text" placeholder="Kulanıcı Adınızı Girin" name="kullanici_ad">
	<input type="password" placeholder="Şifrenizi Girin" name="kullanici_password">
	<button type="submit">Gönder</button>
 
</form>


</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

<?php 
/*
	echo $_POST['ad'];
	echo "<br>";
	echo $_POST['soyad'];
*/

 $kullanici_id=151;

 ?>




<form action="islem.php" method="GET">
	
	<input type="text" placeholder="Adınızı Giriniz..." name="ad">
	<input type="text" placeholder="Soyadınızı Giriniz..." name="soyad">
	<input type="submit" value="Formu Gönder" name="">
</form>


<a href="islem.php?kullanici_id=<?php echo $kullanici_id ?>"><button>Formu Sil</button></a>









</body>
</html>
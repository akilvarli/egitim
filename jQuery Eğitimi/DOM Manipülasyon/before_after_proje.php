<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Before & After Proje</title>
</head>
<body>

<?php 

	echo "<pre>";

	echo print_r($_POST['yukle']);
	echo "</pre>";
 ?>
<h2>Dosya Yükleme Alanı</h2>

<form action="" method="POST">
	
	<input type="file" name="yukle[]">

</form>

<br><br>

<button id="ekle">Ekle</button>





	<!-- Jquery Projeye Dahil Etme 1.Yol -->
	<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
	<script type="text/javascript" src="js/ozel.js"></script>
</body>
</html>
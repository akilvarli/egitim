<?php require_once 'baglan.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<title>CRUD İŞLEMLERİ</title>
</head>
<body>


	<h1>Veritabanı PDO Kayıt Düzenleme İşlemleri</h1>
	<hr>
	<?php 
	if ($_GET['durum']=="ok") {
		
		echo "İşlem başarılı";

	} elseif ($_GET['durum']=="no") {

		echo "İşlem başarısız";


	}

	?>


	<?php 

	$bilgilerimsor=$db->prepare("SELECT * from bilgilerim where bilgilerim_id=:id");
	$bilgilerimsor->execute(array(
		'id' => $_GET['bilgilerim_id']
	));

	$bilgilerimcek=$bilgilerimsor->fetch(PDO::FETCH_ASSOC);

	 ?>









	<form action="islem.php" method="POST">
		
		<input type="text" required="" name="bilgilerim_ad" value="<?php echo $bilgilerimcek['bilgilerim_ad'] ?>">
		<input type="text" required="" name="bilgilerim_soyad" value="<?php echo $bilgilerimcek['bilgilerim_soyad'] ?>">
		<input type="email" required="" name="bilgilerim_mail" value="<?php echo $bilgilerimcek['bilgilerim_mail'] ?>">
		<input type="text" required="" name="bilgilerim_yas" value="<?php echo $bilgilerimcek['bilgilerim_yas'] ?>">
		<input type="hidden" name="bilgilerim_id" value="<?php echo $bilgilerimcek['bilgilerim_id'] ?>" >
		<button type="submit" name="updateislemi">Formu Düzenle</button>

	</form>





</body>
</html>
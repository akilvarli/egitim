<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>

<?php echo 'Udemy Php İleri Seviye Kursuna Hoşgeldiniz'; ?>

<?php print 'Udemy Php İleri Seviye Kursuna Hoşgeldiniz'; ?>

<?php echo 'Ben Emrah Yüksel bu kurs boyunca tüm öğrencilerime php yi öğretmeye söz veriyor'; ?>

<hr>	

<!-- Bu bir yorum satırıdır -->


<?php 	

// Bu bir yorum satırıdır.

# Bu bir yorum satırıdır.

/*
Bu bir yorum satırıdır.
Bu bir yorum satırıdır.
Bu bir yorum satırıdır.
Bu bir yorum satırıdır.
*/

 ?>
 
<?php 
// Hatalara genel bakış;

echo "Udemy Eğitmeni Emrah Yüksel";
echo "asdasdasd";

 ?>


 <?php 
//Birleştirme operatörü .


 echo "Udemy Eğitmeni"." Emrah Yüksel"."Ahmet"."Mustafa"."Cemal";


  ?>

<?php 
//Değişkenler


echo $ad="emrah";
$soyad="yüksel";
$egitimplatformu='udemy';
$no=500;
$AdSoyad="emrah404";

//echo $AdSoyad;

$ad1="emrah";
$soy_ad;
$emrahyüksel="adsadadasd"; //=> türkçe karakter kullanmıyoruz.

/*
-Değişkenler $ işareti ile başlar
-Değişkene değer ataması yapılırken = işareti kullanılır
-Değişkene metinsel ifadeler aktarılırken " " veya ' ' kullanılabilir.
-Değişkene integer sayısal değer aktarılırken direkt olarak yazabiliriz.
-Değişkenlerde ufak büyük harf ayrımı vardır.
-Değişkenlerde rakam ile başlamıyoruz. Ama rakam ile bitirebiliyoruz. Özel karakterlerde dahildir.
-Değişkenlerde boşluk bırakmıyoruz.
- Değişkenler _ alt çizgi kullanabiliriz.
- Değişkenler türkçe karakter kullanmıyoruz.

*/


$ad="emrah yüksel";
$unvan="Udemy Eğitmeni";
echo "<br>";
echo $ad.$unvan;
echo "<br>";
$ad="Udemy";
echo "<br>";
echo $ad.$unvan."<br>"."<br>";
//echo "<br>";
//echo "<br />";
echo "Udemy Kursları";

 ?>




<?php 

// Ad, soyad, no değişkenlerini tanımlayalım. İçeriğine bilgileri girelim. Ad ve Soyad ayrı alınıp birleştirilerek yazılsın. Altına No değeri yazılsın ve arada çizgi kullanalım.

$ad="Emrah";
$soyad="Yüksel";
$no=1500;


echo "<h1>Bilgilerim</h1>";
echo "<hr>";

echo "Adınız ve Soyadınız .........: ".$ad." ".$soyad;
echo "<br>";
echo "Numaranız ...................: ".$no;
echo "<br>";echo "<br>";echo "<br>";echo "<br>";
echo "<hr>";
echo "<br>";

 ?>



<?php 
/*
Matematiksel işlemler

+ Toplama İşlemi
- Çıkarma İşlemi
/ Bölme İşlemi
* Çarpma İşlemi


*/

$numara1=50;
$numara2=13;

//echo $numara1+$numara2;
echo "Toplama İşlemi";
$topla=$numara1+$numara2;
echo "<br>";
echo "$numara1 + $numara2 = $topla";
echo "<br>";
echo "<hr>";

echo "Çıkarma İşlemi";
echo "<br>";
$cikar=$numara1-$numara2;
echo "$numara1 - $numara2 = $cikar";
echo "<br>";
echo "<hr>";

echo "Bölme İşlemi";
echo "<br>";
$bolme=$numara1/$numara2;
echo "$numara1 / $numara2 = $bolme";
echo "<br>";
echo "<hr>";

echo "Çarpma İşlemi";
echo "<br>";
$carpma=$numara1*$numara2;
echo "$numara1 * $numara2 = $carpma";
echo "<br>";
echo "<hr>";



echo "<br>";echo "<br>";echo "<br>";echo "<br>";
echo "<hr>";

/*

Atama İşlemleri

*/

$atama=400;

echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";

$atama+=500;
//$atama=$atama+500;

echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";

$atama-=500;
echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";

$atama/=500;
echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";

$atama*=500;
echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";

/*
Arttırma ve eksiltme operatörleri
*/

$atama++;
echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";

$atama--;
echo "\$atama değişkenin değeri : ". $atama;
echo "<hr>";
echo "<br>";

// Hazır fonksiyonlara bakış
//rand belirlenen aralıkta sayı üretir.

echo $sayi=rand(0,10); echo "<br>";

if ($sayi>=5) {
	
	echo "kazandın";
} else {

	echo "Kaybettin dostum";
}


/*

" Çift tırnak ve ' tek tırnak arasında ki farklar.

-Çift tırnak içerisinde değişken içerikleri okunabilir, tek tırnak içerisinde değişken içerikleri okunmaz...

*/
echo "<br>";
$ad="Emrah";
$soyad="Yüksel";

echo "Benim Adım $ad";
echo "<br>";
echo 'Benim Adım $ad';


/* Yoksayma işaretleri

*/
echo "<br>";echo "<br>";

echo "Ben $ad \"Udemy\" Kursuna Kayıt Oldum";

echo "<hr>";
//Hazır string fonksiyonlar

//strtolower => büyük metni ufak metne çevirir.

echo $yazi="BEN UDEMY ILERI SEVIYE PHP KURSUNA KAYITLIYIM.";
echo "<br>";
echo $yazi=strtolower($yazi);


//strtolower => küçük metni büyük metne çevirir.

echo "<br>";
echo  $yazi=strtoupper($yazi);
echo "<br>";
echo $yazi=strtolower($yazi); //=> ufak metne çevirdik.


//ucwords => metnin kelimelerinin ilk harflerini büyük yazar

echo "<br>";
echo  $yazi=ucwords($yazi);
echo "<br>";
echo $yazi=strtolower($yazi); //=> ufak metne çevirdik.


//ucfirst => metnin ilk harfini büyük yazar

echo "<br>";
echo  $yazi=ucfirst($yazi);
echo "<br>";

//strlen => metnin karakter sayısını verir

echo "<br>";
//echo  "\$yazi değişkeninde olan karakter sayısı :".$yazi=strlen($yazi);
echo "<br>";


//substr => metnin belirtilen karakter sayıda kısmını alır.

echo "<br>";
echo  substr($yazi,0,10);
echo "<br>";

//Devamını oku uygulaması

$yazi="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum. orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


echo "<h1>Haber Başlığı</h1>";

echo "<p>".substr($yazi,0,250)."...</p>";

echo "<a href=\"#\">Devamını Oku</a>";











echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";
 ?>











</body>
</html>
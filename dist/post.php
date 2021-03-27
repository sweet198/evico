<?php
 /* Здесь проверяется существование переменных */
 	if (isset($_POST['name'])) {$name = $_POST['name'];}
  	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 


 
/* Сюда впишите свою эл. почту */
 $address = "kostic5@mail.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Имя: $name\nТелефон: $phone";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub = 'Заявка на электроработы'; //сабж
$email = 'Заказ<evico>'; // от кого
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>


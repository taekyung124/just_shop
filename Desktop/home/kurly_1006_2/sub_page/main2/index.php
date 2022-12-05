<?
    include_once('./_config.php');
?>
<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>베스트 | 마켓컬리</title>
   <!-- 공용 -->
   <link rel="shortcut icon" href="<?=$path?>img/Icon_114.png" type="image/x-icon">
   <meta name="publisher" content="MOONJONG">
   <!-- 셀프 -->
   <link rel="stylesheet" href="./css/style.css">
   <!-- 공용 -->
   <script src="<?=$path?>js/lib/jquery.min.js"></script>

</head>
<body>
<ul id="skip">
   <li><a href="#header">메뉴바로가기</a></li>
   <li><a href="#main">메인바로가기</a></li>
   <li><a href="#footer">하단바로가기</a></li>
</ul>

<div id="wrap">

<!-- 모달 -->
<?
    include_once($path.'modal.php');  
?>
<!-- 모달 -->
   
    
<!-- 헤더 -->
<?
    include_once($path.'header.php');  
?>
<!-- 헤더 -->

   
<!-- 셀프 메인-->
   <main id="main">

      <h1>베스트</h1>
      <h1>작업중...</h1>

   </main>

<!-- 푸터 -->
<?
    include_once($path.'footer.php');  
?>
<!-- 푸터 -->



<!-- 퀵메뉴 -->
<?
    include_once($path.'quick_menu.php');  
?>
<!-- 퀵메뉴 -->



<!-- 고탑(goTop) -->
<?
    include_once($path.'go_top.php');  
?>
<!-- 고탑(goTop) -->
   

</div>

<!-- 셀프 -->
<!-- 작업준비 -->

<!-- 공용 -->
<script src="<?=$path?>js/quick_menu.js"></script>
<!-- 공용 -->
<script src="<?=$path?>js/gotop.js"></script>
</body>
</html>
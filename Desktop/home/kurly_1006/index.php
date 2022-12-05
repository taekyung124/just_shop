<?
    include_once('./_config.php');
?>
<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>마켓컬리 :: 내일의 장보기, 마켓컬리</title>
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
      <section id="section1">
         <h2 class="hide">섹션1메인슬라이드</h2>            
         <div class="slide-container">
            <div class="slide-view">
               <ul class="slide-wrap">
                  <li class="slide slide14 last"><a href="#"><img src="./img/slide_14.jpg" alt=""></a></li>
                  <li class="slide slide1"><a href="#"><img src="./img/slide_1.jpg" alt=""></a></li>
                  <li class="slide slide2"><a href="#"><img src="./img/slide_2.jpg" alt=""></a></li>
                  <li class="slide slide3"><a href="#"><img src="./img/slide_3.jpg" alt=""></a></li>
                  <li class="slide slide4"><a href="#"><img src="./img/slide_4.jpg" alt=""></a></li>
                  <li class="slide slide5"><a href="#"><img src="./img/slide_5.jpg" alt=""></a></li>
                  <li class="slide slide6"><a href="#"><img src="./img/slide_6.jpg" alt=""></a></li>
                  <li class="slide slide7"><a href="#"><img src="./img/slide_7.jpg" alt=""></a></li>
                  <li class="slide slide8"><a href="#"><img src="./img/slide_8.jpg" alt=""></a></li>
                  <li class="slide slide9"><a href="#"><img src="./img/slide_9.jpg" alt=""></a></li>
                  <li class="slide slide10"><a href="#"><img src="./img/slide_10.jpg" alt=""></a></li>
                  <li class="slide slide11"><a href="#"><img src="./img/slide_11.jpg" alt=""></a></li>
                  <li class="slide slide12"><a href="#"><img src="./img/slide_12.jpg" alt=""></a></li>
                  <li class="slide slide13"><a href="#"><img src="./img/slide_13.jpg" alt=""></a></li>
                  <li class="slide slide14"><a href="#"><img src="./img/slide_14.jpg" alt=""></a></li>
                  <li class="slide slide1 first"><a href="#"><img src="./img/slide_1.jpg" alt=""></a></li>
               </ul>
            </div>

            <!-- 카운트번호 / 전체번호 -->
            <span class="count-number-box">
               <em class="count-number"></em>
               <i>/</i>
               <em class="total-number"></em>
            </span>

            <!-- 다음, 이전 화살버튼 -->
            <a href="#" class="prev-btn" title="preview">
               <img src="./img/arrow_fill_gray.svg" alt="">
            </a>
            <a href="#" class="next-btn" title="next">
               <img src="./img/arrow_fill_gray.svg" alt="">
            </a>
            



         </div>
      </section>
      <section id="section2">
         <div class="title">
            <h2>이상품 어떼요?</h2>
         </div>
         <div class="slide-container"> <!-- 1064 -->
            <div class="slide-view"> <!-- 100% -->
               <ul class="slide-wrap">
                  <li class="slide slide1">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_1.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[스키니피그] 서울숲 그린애플샤베트 아이스크림 (파인트)</h2>
                           <h3><span>7,900 원</span></h3>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide2">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_2.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide3">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_3.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide4">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_4.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide5">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_5.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide6">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_6.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide7">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_7.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide8">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_8.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide9">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_9.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide10">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_10.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide11">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_11.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide12">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_12.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide13">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_13.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide14">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_14.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide15">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_15.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide16">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_16.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide17">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_17.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide18">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_18.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide19">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_19.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide20">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_20.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>

            <a href="#" class="prev-btn" title="preview"><img src="./img/arrow_fill_white.svg" alt=""></a>
            <a href="#" class="next-btn" title="next"><img src="./img/arrow_fill_white.svg" alt=""></a>

         </div>

      </section>
      <section id="section3">
         <div class="container">
            <a href="#">
               <img src="./img/41508127-6ff1-40e3-a5e7-3429918012cf.jpg" alt="">
            </a>
         </div>
      </section>
      <section id="section4">
         <div class="title">
            <h2>놓치면 후회할 가격<img src="./img/arrow.svg" alt=""></h2>
         </div>
         <div class="slide-container"> <!-- 1064 -->
            <div class="slide-view"> <!-- 100% -->
               <ul class="slide-wrap">
                  <li class="slide slide1">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_1.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[스키니피그] 서울숲 그린애플샤베트 아이스크림 (파인트)</h2>
                           <h3><span>7,900 원</span></h3>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide2">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_2.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide3">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_3.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide4">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_4.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide5">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_5.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide6">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_6.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide7">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_7.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide8">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_8.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide9">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_9.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide10">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_10.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide11">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_11.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide12">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_12.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide13">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_13.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide14">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_14.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide15">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_15.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide16">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_16.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide17">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_17.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide18">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_18.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide19">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_19.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
                  <li class="slide slide20">
                     <div class="gap">
                        <a href="#">
                           <img src="./img/s2_slide_20.jpg" alt="">
                           <span class="cart"><img src="./img/cart_fill_purple.svg" alt=""></span>
                        </a>
                                           
                        <div class="content">
                           <h2>[탐나는밥상] 양파 무절임</h2>
                           <h3><em>10%</em><span>2,610 원</span></h3>
                           <h4><s>2900원</s></h4>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>

            <a href="#" class="prev-btn" title="preview"><img src="./img/arrow_fill_white.svg" alt=""></a>
            <a href="#" class="next-btn" title="next"><img src="./img/arrow_fill_white.svg" alt=""></a>

         </div>

      </section>
      <section id="section5"></section>
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
<script src="./js/intro.js"></script>
<!-- 공용 -->
<script src="<?=$path?>js/quick_menu.js"></script>
<!-- 공용 -->
<script src="<?=$path?>js/gotop.js"></script>
</body>
</html>
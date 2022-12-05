(function($){

    const Header = {
       init(){
          this.mainfn();
       },
       mainfn(){
 
          const $window  = $(window);
          const $row2    = $('#header .row2');
          const $row2Top = $('#header .row2').offset().top;
          const $logo1   = $('#header .logo1');
          const $iconBtn = $('#header .icon-btn');
          const $hamBtn = $('.ham-btn');
 
          //.row2 의 위치 탑 값은  맨위에서 부터 간격(offset)을 .row2의 탑값(top)이라 한다. 142
          // const $row2Top = $('#header .row2').offset().top;
          // console.log('.row2 오프셋 탑값 : ' + $row2Top );
 
          // 섹션별 오프셋 탑값
          // console.log('#섹션1 오프셋 탑값 : ' + $('#section1').offset().top );
          // console.log('#섹션2 오프셋 탑값 : ' + $('#section2').offset().top );
          // console.log('#섹션3 오프셋 탑값 : ' + $('#section3').offset().top );
          // console.log('#섹션4 오프셋 탑값 : ' + $('#section4').offset().top );
          // 섹션2의 슬라이드 콘테이너 박스 탑값
          // console.log('#섹션2 슬라이드 컨테이너 박스 오프셋 탑값 : ' + $('#section2 .slide-container').offset().top );
 
          
 
 
 
          // 1. 윈도우 스크롤 이벤트
          // $(window).scroll();
          // 스크롤이 위 아래로 발생시만 동작 
          $window.scroll(function(){
             // 스크롤 이벤트 발생시 
             // 2. 현재 스크롤 탑값을 콘솔로 출력해보자
             // console.log( $window.scrollTop()  );
             // 3. 스크롤 탑값이 142px 이상이면 .row2 네비게이션을 고정(fixed)하라 (on 클래스추가)
             // if(  $window.scrollTop() >= 142  ){
             if(  $window.scrollTop() >= $row2Top  ){
                $row2.addClass('on');
             }
             else {
                $row2.removeClass('on');
             }
 
             // 테스트 패럴럭스 :  현재 스크롤 탒이 섹션1의 탑값에 도달하면
             // 섹션3을 부드럽게 보이게 하라
             if(  $(window).scrollTop() >= $('#section1').offset().top+200  ){
                $('#section3').addClass('on');
             }
 
 
          });
 
 
 
          //로고의 텍스트 변경하기
          $logo1.on({
             mouseenter: function(){
                // $(this).children('span').text('대한민국'); //자식 직계자식
                $(this).find('span').text('대한민국'); //자손(자식, 손자, 손녀)
             },
             mouseleave: function(){
                // $(this).children('span').text('마켓컬리');
                $(this).find('span').text('마켓컬리'); //자손(자식, 손자, 손녀)
                // $(this).find('span').html('<i>마켓컬리</i>'); //자손(자식, 손자, 손녀)
             }
          })
 
 
          // 검색 상자 오른쫀 아이콘 마우스 이벤트
          // a링크 아이콘 위에 마우스 올리면 자식요소인 아이콘 이미지 속성(attribute 어트리뷰트 attr) src  변경
          // 프로퍼티 속성 property 프롭 prop('속성이름','속성값')
          $iconBtn.eq(0).on({
             mouseenter: function(){
                // $(this).children().attr('src','./img/map_hover.svg')
                // $(this).find('img').attr('src','./img/map_hover.svg')
                $(this).find('img').prop('src','./img/map_hover.svg')
             },
             mouseleave: function(){
                // $(this).children().attr('src','./img/map.svg')
                // $(this).find('img').attr('src','./img/map.svg')
                $(this).find('img').prop('src','./img/map.svg')
             }
          })
 
          $iconBtn.eq(1).on({
             mouseenter: function(){
                // $(this).children().attr('src','./img/heart_hover.svg')
                $(this).find('img').attr('src','./img/heart_hover.svg')
             },
             mouseleave: function(){
                // $(this).children().attr('src','./img/heart.svg')
                $(this).find('img').attr('src','./img/heart.svg')
             }
          })
          
          $iconBtn.eq(2).on({
             mouseenter: function(){
                // $(this).children().attr('src','./img/cart_hover.svg')
                $(this).find('img').attr('src','./img/cart_hover.svg')
             },
             mouseleave: function(){
                // $(this).children().attr('src','./img/cart.svg')
                $(this).find('img').attr('src','./img/cart.svg')
             }
          })
 
 
          // 햄버거 버튼
          $hamBtn.on({
             mouseenter: function(){
                $(this).find('img').prop('src','./img/ham_var_hover.svg')
             },
             mouseleave: function(){
                $(this).find('img').prop('src','./img/ham_var.svg')
             }
          })
 
 
       }    
    }
 
    Header.init();
    
 })(jQuery);
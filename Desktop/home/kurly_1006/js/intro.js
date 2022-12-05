(function($){

   const Kurly = {
      init(){
         this.header();
         this.section1();
         this.section2();
         this.section4();
         this.section5();
      },
      header(){

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


      },
      section1(){
         let cnt = 0;
         let setId = 0;
         let slideLen = 0; 

         // 선택자 변수 지정
         const  $slideContainer  = $('#section1 .slide-container');
         const  $slideWrap       = $('#section1 .slide-wrap');
         const  $slide           = $('#section1 .slide');
         const  $countNumber     = $('#section1 .count-number');
         const  $totalNumber     = $('#section1 .total-number');
         const  $prevNextBtn     = $('#section1 .prev-btn, #section1 .next-btn');
         const  $prevBtn         = $('#section1 .prev-btn');
         const  $nextBtn         = $('#section1 .next-btn');

            mainSlide();  //로딩시 실행

            //1. 메인슬라이드 함수
            function mainSlide(){
               $slideWrap.stop().animate({ left: -100*cnt + '%' }, 600, function(){
                  if(cnt===14) {cnt=0;}
                  if(cnt===-1) {cnt=13;}
                  $slideWrap.stop().animate({ left: -100*cnt + '%' }, 0); //fowrords + backwrords = both
               })
               $countNumber.text( cnt===14 ? 1 : (cnt+1===0 ? 14 : cnt+1) ); // 완결(이전 & 다음)
               slideLen = $slide.length-2;
               $totalNumber.text( slideLen ); //총 슬라이드 갯수
            }

            //2. 다음카운트 함수
            function nextCount(){
               cnt++;
               mainSlide();
            }
            //2. 이전카운트 함수
            function prevCount(){
               cnt--;
               mainSlide();
            }

            //3. 자동타이머 함수
            function autoTimer(){
               setId = setInterval(nextCount, 3000); 
            }
            autoTimer();

            //css 에서 display: none 하는걸 여기서 해봤어요
            $prevNextBtn.stop().fadeOut(0); 
            $slideContainer.on({
               mouseenter: function(){
                  $prevNextBtn.stop().fadeIn(1000);
                  clearInterval(setId);                  
               },
               mouseleave: function(){
                  $prevNextBtn.stop().fadeOut(1000);
                  autoTimer();
               }
            });

            //5. 좌우화살버튼 클릭 이벤트
            $prevBtn.on({
               click: function(){
                  if( $slideWrap.is(':animated')===false ){
                     prevCount();
                  }
               }
            });
            $nextBtn.on({
               click: function(){
                  if( $slideWrap.is(':animated')===false ){
                     nextCount();
                  }               
               }
            });

         // 코딩 정리 완료

      },
      section2(){

         let cnt = 0;
         const $slideWrap  = $('#section2 .slide-wrap');
         const $nextBtn    = $('#section2 .next-btn');
         const $prevBtn    = $('#section2 .prev-btn');

         //로딩시 실행
         mainSlide();
         //1. 메인슬라이드 함수
         function mainSlide(){           
            $slideWrap.stop().animate({ left: -1064*cnt }, 600);
            if(cnt>=4) {
               $nextBtn.stop().fadeOut(300);
            }
            else {
               $nextBtn.stop().fadeIn(300);
            }

            if(cnt<=0) {
               $prevBtn.stop().fadeOut(300);
            }
            else {
               $prevBtn.stop().fadeIn(300);
            }

         }   
         
         //2. 다음카운트 함수
         function nextCount(){
            cnt++;
            if(cnt>=4) cnt=4;
            mainSlide();
         }   
         //2. 이전카운트 함수
         function prevCount(){
            cnt--;
            if(cnt<=0) cnt=0;
            mainSlide();
         }   


         //3. 버튼클릭이벤트
         // 버튼에 마우스 오버시 보라색상 이미지로 변경
         $prevBtn.on({
            click: function(e){
               e.preventDefault();
               if( $slideWrap.is(':animated')===false ){
                  prevCount();  //이전카운트 함수
               }               
            },
            mouseenter: function(){
               $(this).children().attr('src','./img/arrow_fill_purple.svg')
            },
            mouseleave: function(){
               $(this).children().attr('src','./img/arrow_fill_white.svg')
            }
         })

         $nextBtn.on({
            click: function(e){
               e.preventDefault();
               if( $slideWrap.is(':animated')===false ){
                  nextCount(); //다음카운트함수 호출
               }                  
            },
            mouseenter: function(){
               $(this).children().attr('src','./img/arrow_fill_purple.svg')
            },
            mouseleave: function(){
               $(this).children().attr('src','./img/arrow_fill_white.svg')
            }
         })

         // 코딩 정리 완료

      },
      section4(){

         // console.log( 'section4' )

         let cnt = 0;
         const $slideWrap  = $('#section4 .slide-wrap');
         const $nextBtn    = $('#section4 .next-btn');
         const $prevBtn    = $('#section4 .prev-btn');


         mainSlide();

         //1. 메인슬라이드 함수
         function mainSlide(){           
            $slideWrap.stop().animate({ left: -1064*cnt }, 600);
            if(cnt>=4) {
               $nextBtn.stop().fadeOut(300);
            }
            else {
               $nextBtn.stop().fadeIn(300);
            }

            if(cnt<=0) {
               $prevBtn.stop().fadeOut(300);
            }
            else {
               $prevBtn.stop().fadeIn(300);
            }

         }   
         
         //2. 다음카운트 함수
         function nextCount(){
            cnt++;
            if(cnt>=4) cnt=4;
            mainSlide();
         }   
         //2. 이전카운트 함수
         function prevCount(){
            cnt--;
            if(cnt<=0) cnt=0;
            mainSlide();
         }   


         //3. 버튼클릭이벤트
         // 버튼에 마우스 오버시 보라색상 이미지로 변경
         $prevBtn.on({
            click: function(e){
               e.preventDefault();
               if( $slideWrap.is(':animated')===false ){
                  prevCount();  //이전카운트 함수
               }
            },
            mouseenter: function(){
               $(this).children().attr('src','./img/arrow_fill_purple.svg')
            },
            mouseleave: function(){
               $(this).children().attr('src','./img/arrow_fill_white.svg')
            }
         })

         $nextBtn.on({
            click: function(e){
               e.preventDefault();
               if( $slideWrap.is(':animated')===false ){
                  nextCount(); //다음카운트함수 호출
               }
            },
            mouseenter: function(){
               $(this).children().attr('src','./img/arrow_fill_purple.svg')
            },
            mouseleave: function(){
               $(this).children().attr('src','./img/arrow_fill_white.svg')
            }
         })

         // 코딩 정리 완료

      },
      section5(){

      }      
   }

   Kurly.init();
   
})(jQuery);
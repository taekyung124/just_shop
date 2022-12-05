(function($){
   
   const GoTop = {
      init(){
         this.mainfn();
      },
      mainfn(){
         // const  변경 불가 변수
         let sec3Top = 0; // 값이 변경할 변수는 반드시 let 을 사용

         if( pos==='root' ){ //인트로 페이지
            sec3Top = $('#section3').offset().top;
         }
         else{ // 서브페이지
            sec3Top = $('#main').offset().top+80;
         }


         const $gotopBtn = $('.gotop-btn');
         const $window   = $(window);
         const $htmlBody =  $('html, body');

         // 스크롤 이벤트 반드시 설정하기
         // 처음엔 숨기기
         // 윈도우 스크롤 탑값이 섹션3 탑값에 도달하면 부드럽게 보이기
         // 그렇지 않은면 부드럽게 숨기기        
         $gotopBtn.stop().fadeOut(0);


         function gotopEvent(){
            if( $(window).scrollTop() >= sec3Top  ){
               $gotopBtn.stop().fadeIn(600);
            }
            else{
               $gotopBtn.stop().fadeOut(600);
            }
         }
         gotopEvent(); //로딩시 1회 실행

         // 스크롤 이벤트 
         $window.scroll(function(){
            gotopEvent(); // 스크롤 할 때 마다 실행   
         });


         // 고탑 버튼 클릭 맨위로 부드럽게 이동하기
         // 스무스 스크롤링
         $gotopBtn.on({
            click: function(e){
               e.preventDefault();
               // 맨위로 부드럽게 이동하는 애니메인션
               // $('html, body').stop().animate({ scrollTop:  $('#section2').offset().top }, 600);
               $htmlBody.stop().animate({ scrollTop: 0 }, 600);
            }
         });


      }
   }
   GoTop.init();

})(jQuery);
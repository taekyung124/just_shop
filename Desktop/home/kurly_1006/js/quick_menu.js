(function($){
   
   const QuickMenu = {
      init(){
         this.mainfn();
      },
      mainfn(){
         let conT = 0;
         //스크롤 따라다니는 퀴메뉴 만들기
         //인트로 페이지만 이렇게
                  //인트로 페이지가 아닌페이지는 
         // const sec3Top   = $('#main').offset().top+80;
         if( pos === 'root' ){  //루트 즉 인트로 페이지
            conT = $('#section2 .slide-container').offset().top;
         }
         else{
            conT = $('#main').offset().top+80;
         }

         let winH = $(window).height();
         let boxH = 550;
         let scrT = (winH-550)/2;
         let $quickBox = $('#quickBox');
         let $window = $(window);

         function quickEvent(){
            // 스크롤 탑값이 섹션2의 슬라이드 탑값에 도달하면 그 때 퀵메뉴 동작
            if( $window.scrollTop() >= conT ){
               // 스크롤을 따라 다닌다.
               $quickBox.stop().animate({ top: scrT+$(window).scrollTop() }, 300);
            }
            else{
               // 위치 고정
               $quickBox.stop().animate({ top: conT }, 300); //648.578125px
            }
         }
         quickEvent();  //로딩시 1회 실행

         // 스크롤 이벤트
         $window.scroll(function(){
            
            quickEvent(); //스크롤 할 때 마다

         });


      }
   }
   QuickMenu.init();

})(jQuery);
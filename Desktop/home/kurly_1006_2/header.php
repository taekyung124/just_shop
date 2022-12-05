    <header id="header">
      <div class="row1">
         <div class="row1-1">
            <a href="<?=$path3?>member_join/" title="회원가입" class="on">회원가입</a>
            <i>|</i>
            <a href="<?=$path3?>member_login/" title="로그인">로그인</a>
            <i>|</i>
            <a href="<?=$path3?>member_cs/" title="고객센터">고객센터</a>
         </div>
         <div class="row1-2">
             <div class="left">
            
               <!-- 홈(루트)으로  -->
               <a href="<?=$path?>" title="마켓컬리 홈" class="logo1">
                  <img src="<?=$path?>img/logo_kurly.svg" alt="">
                  <span>마켓컬리</span>
               </a> 
               <i>|</i>
               <a href="#" title="뷰티컬리" class="logo2">
                  뷰티컬리
                  <img src="<?=$path?>img/n.svg" alt="">
               </a>
              
             </div>
             <div class="center">
               <input type="text" id="search" name="search" placeholder="검색어를 입력해주세요">
               <a href="#" title="search" class="search-btn"><img src="<?=$path?>img/search.svg" alt=""></a>
             </div>
             <div class="right">
               <!-- 제이쿼리 이용 이미지 src 속성 변경 -->
               <a href="#" class="icon-btn" title="map"><img src="<?=$path?>img/map.svg" alt=""></a>
               <a href="#" class="icon-btn" title="heart"><img src="<?=$path?>img/heart.svg" alt=""></a>
               <a href="#" class="icon-btn" title="cart"><img src="<?=$path?>img/cart.svg" alt=""></a>
             </div>
         </div>
      </div>
      <div class="row2"> <!-- 100% -->
         <div class="row2-container">
            <div class="left">
               <a href="#" class="ham-btn">
                  <img src="<?=$path?>img/ham_var.svg" alt="">
                  카테고리
               </a>
            </div>    
            
            <!-- 네비게이션 - 메인메뉴 -->
            <!-- 1. 루트에서의 링크 주소 ./sub_page/ -->
            <!-- 2. 서브에서 형제요소 링크 주소 ../ -->
            <div class="center">
               <a href="<?=$path2?>main1/">신상품</a>
               <a href="<?=$path2?>main2/">베스트</a>
               <a href="<?=$path2?>main3/">알뜰쇼핑</a>
               <a href="<?=$path2?>main4/">특가/혜택</a>
            </div>         
            <div class="right">
               <a href="#" title="샛별·낮배송안내">
                  <em>샛별·낮</em>
                  <span>배송안내</span>
               </a>
            </div> 
         </div>        
      </div>
   </header>
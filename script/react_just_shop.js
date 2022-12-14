//1. 컴포넌트
function WrapComonent(){

   // 모달 상태관리
   const [show, setShow] = React.useState(false);

   // 모달 부모컴포넌트에서 
   // 상태변경 함수를 만든다 
   // 그리고 자식 컴포넌트에게 프롭스로 함수를 내려주고 
   // 자식컴포넌트에서 버튼 클릭 이벤트로 상태변경함수를 실행한다. 그러면 변경된다.
   
   // 모달열기 함수
   const modalOpen=()=>{
      setShow(true);
   }

   // 모달닫기 함수
   const modalClose=()=>{
      setShow(false);
   }


   return(
      <div id="wrap">
         <HeaderComponent/>
         <MainComponent modalOpen={modalOpen}/>
         <FooterComponent/>
         {
            show && <ModalComponent modalClose={modalClose}/>
         }
      </div>
   )
}

      function HeaderComponent(props){

         const {homePath,logoTitle,imgSrc,imgAlt, subMenu1,subMenu2,subMenu3,subMenu4} = props;

         // 상태관리 React.useState()
         const [addClass, setAddClass] = React.useState({
            addClass1: false,
            addClass2: false,
            addClass3: false,
            addClass4: false
         });

         // addClass 상태관리 객체의 속성을 비구조화
         const {addClass1,addClass2,addClass3,addClass4} = addClass;

         
         const onMouseEnter1=()=>{
            setAddClass({
               addClass1: true,
               addClass2: false,
               addClass3: false,
               addClass4: false
            })
         }
         const onMouseEnter2=()=>{
            setAddClass({
               addClass1: false,
               addClass2: true,
               addClass3: false,
               addClass4: false
            })
         }
         const onMouseEnter3=()=>{
            setAddClass({
               addClass1: false,
               addClass2: false,
               addClass3: true,
               addClass4: false
            })
         }
         const onMouseEnter4=()=>{
            setAddClass({
               addClass1: false,
               addClass2: false,
               addClass3: false,
               addClass4: true
            })
         }

         // NAV 를 떠나면 이벤트
         const onMouseLeaveAddCalss=()=>{
            setAddClass({
               addClass1: false,
               addClass2: false,
               addClass3: false,
               addClass4: false
            })
         }

       

         return(
            <header id="header">
               <div className="left">
                  {/* <h1><a href={props.homePath} title={props.logoTitle}><img src={props.imgSrc} alt={props.imgAlt} /></a></h1> */}
                  <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
               </div>
               <div className="right">
               <nav id="nav" onMouseLeave={onMouseLeaveAddCalss}>
                  <ul>
                     <li>
                     {/* 메뉴1  */}
                     <a 
                     onMouseEnter={onMouseEnter1}                     
                     className={`main-btn  ${ addClass1 && 'on' }`}
                     href="#"                       
                     title="탑"
                     >탑</a>

                     <div className={`sub sub1  ${addClass1 && 'on'}`}>
                        <ul>
                           {  // JSX 중괄호 안에 자바스크립트 코딩을 한다.
                              subMenu1.map((item, idx)=>{
                                 return(
                                    <li key={idx}><a href="#" title={item}>{item}</a></li>
                                 )
                              })
                           }                          
                        </ul>
                     </div>
                     </li>
                     <li>
                     {/* 메뉴2 */}
                     <a 
                     onMouseEnter={onMouseEnter2}
                     className={`main-btn ${addClass2 && 'on'}`} 
                     href="#" 
                     title="아우터"
                     >아우터</a>
                      <div className={`sub sub2 ${addClass2 && 'on'}`}>
                        <ul>
                           {
                              subMenu2.map((item,idx)=>{
                                 return(
                                    <li key={idx}><a href="#" title={item}>{item}</a></li>
                                 )
                              })
                           }
                        </ul>
                     </div>              
                     </li>
                     <li>
                     {/* 메뉴3 */}
                     <a 
                     onMouseEnter={onMouseEnter3}
                     className={`main-btn ${addClass3 && 'on'}`} 
                     href="#" 
                     title="팬츠"
                     >팬츠</a>
                     <div className={`sub sub3 ${addClass3 && 'on'}`}>
                        <ul>
                           {
                              subMenu3.map((item,idx)=>{
                                 return(
                                    <li key={item}><a href="#" title={item}>{item}</a></li>
                                 )
                              })
                           }
                        </ul>
                     </div>                
                     </li>
                     <li>
                     {/* 메뉴4 */}
                     <a 
                     onMouseEnter={onMouseEnter4}
                     className={`main-btn ${addClass4 && 'on'}`} 
                     href="#" 
                     title="악세서리"
                     >악세서리</a>
                     <div className={`sub sub4 ${addClass4 && 'on'}`}>
                        <ul>

                           {
                              subMenu4.map((item,idx)=>{
                                 return(
                                    <li key={idx}><a href="#" title={item}>{item}</a></li>
                                 )
                              })   
                           }
                           
                        </ul>
                     </div>  
                     </li>
                  </ul>
               </nav>
               </div>
            </header>
         )
      }

      // 헤더컴포넌트 안에서 사용 하는 모든 변수
      // 기본(Default) 프롭스 설정
      HeaderComponent.defaultProps = {
         logoTitle: 'JUST쇼핑몰',
         homePath: './index.html',
         imgSrc: './images/logo.png',
         imgAlt: 'Logo Image',
         subMenu1: ['블라우스','티','셔츠','니트'],
         subMenu2: ['자켓','코트','가디건','머플러'],
         subMenu3: ['청바지','짧은바지','긴바지','레깅스'],
         subMenu4: ['귀고리','목걸이','반지','팔찌']      
      }


      function MainComponent({modalOpen}){
         return(
            <main id="main">
               <Section1Component/>
               <Section2Component modalOpen={modalOpen}/>
            </main>
         )
      }
            function Section1Component(){
               return(
                  <section id="section1">
                     <div className="slide-container">
                     <div className="slide-view">
                        <ul className="slide-wrap">
                           <li className="slide slide3">
                           <img src="./images/img3.jpg" alt=""/>
                           <h2>장바구니 할인 이벤트</h2>
                           </li>              
                           <li className="slide slide1">
                           <img src="./images/img1.jpg" alt=""/>
                           <h2>쇼핑몰 홈페이지 새단장</h2>
                           </li>
                           <li className="slide slide2">
                           <img src="./images/img2.jpg" alt=""/>
                           <h2>이달의 쇼핑 이벤트</h2>
                           </li>
                           <li className="slide slide3">
                           <img src="./images/img3.jpg" alt=""/>
                           <h2>장바구니 할인 이벤트</h2>
                           </li>
                           <li className="slide slide1">
                           <img src="./images/img1.jpg" alt=""/>
                           <h2>쇼핑몰 홈페이지 새단장</h2>
                           </li>              
                        </ul>
                     </div>
                     </div>
                  </section>
               )
            }
            function Section2Component({notice, gallery, modalOpen}){

               // 공지사항, 갤러리 상태관리
               const [show, setShow] = React.useState(false);

               const onClickNoticeBtnEvent=(e)=>{
                  e.preventDefault();     
                  setShow(false);
               }
               const onClickGalleryBtnEvent=(e)=>{
                  e.preventDefault();
                  setShow(true);
               }

               // 공지사항 클릭 이벤트 => 모달뜨우기
               const onClickModal=(e)=>{
                  e.preventDefault();
                  //최상위 위치의 모달 열기 함수 실행
                  modalOpen();
               }

               return(
                  <section id="section2">
                     <div className="left">
                     <button onClick={onClickNoticeBtnEvent} className={`notice-btn ${show && 'on'}`}>공지사항</button>
                     <button onClick={onClickGalleryBtnEvent} className={`gallery-btn ${show && 'on'}`}>갤러리</button>
                     <div className={`notice-box ${show && 'on'}`}>
                        <div className="gap">
                           <ul>

                              {
                                 notice.map((item, idx)=>{
                                    return(
                                       <li key={idx}><a href="#" onClick={idx===0 && onClickModal}  className={idx===0  && 'modal-btn'}>{item.공지글}</a><span>{item.날짜}</span></li>
                                    )
                                 })
                              }

                           </ul>
                        </div>
                     </div>
                     <div className={`gallery-box ${show && 'on'}`}>
                        <div className="gap">
                           <ul>

                              {
                                 gallery.map((item, idx)=>{
                                    return(
                                       <li key={idx}>
                                          <div className="col-gap"><a href="#" title={item.제목}><img src={item.이미지소스} alt=""/></a></div>
                                       </li>                                       
                                    )
                                 })
                              }

                           </ul>
                        </div>
                     </div>
                     </div>
                     <div className="center">
                     <div className="title"><h2 style={{color:'rgb(95,0,128)', fontSize:'16px'}}>BANNER LINK</h2></div>
                     <div className="img-box">
                        <a href="#" title="banner"><img src="./images/banner.jpg" alt=""/></a>
                     </div>
                     </div>
                     <div className="right">
                     <div className="title"><h2 style={{color:'rgb(95,0,128)', fontSize:'16px', fontWeidth:'500'}}>DIRECT LINK</h2></div>
                     <div className="img-box">
                        <a href="#" title="direct"><img src="./images/direct.jpg" alt=""/></a>
                     </div>
                     </div>  
                  </section>
               )
            }

            // 기본 프롭스 만들기
            Section2Component.defaultProps = {
               notice : [
                  {공지글:"신규회원 대상 할인 이벤트 안내",날짜:"2020.11.23"},
                  {공지글:"S/S 시즌 신규 의류 신상품 안내",날짜:"2020.11.12"},
                  {공지글:"반품/환불 규정에 대해 알려드립니다",날짜:"2020.11.07"},
                  {공지글:"3월 재입고 품목을 알려드립니다",날짜:"2020.10.28"}
               ],
               gallery : [
                  {제목:"img1", 이미지소스: "./images/icon1.jpg"},
                  {제목:"img2", 이미지소스: "./images/icon2.jpg"},
                  {제목:"img3", 이미지소스: "./images/icon3.jpg"}
               ]   
            }

      function FooterComponent(){
         return(
            <footer id="footer">
               <div className="left">
                  <h1><a href="./index.html" title="JUST쇼핑몰"><img src="./images/footerLogo.png" alt="logo"/></a></h1>
               </div>
               <div className="center">
                  <div className="row1">
                     <span><a href="#" title="개인정보처리방침">개인정보처리방침</a></span>
                     <span><i>|</i></span>
                     <span><a href="#" title="영상정보처리기기운영방침">영상정보처리기기운영방침</a></span>
                     <span><i>|</i></span>
                     <span><a href="#" title="오시는 길">오시는 길</a></span>  
                  </div>
                  <div className="row2">
                     <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
                  </div>
               </div>
               <div className="right">
                  <span><a href="#" title="페이스북"><img src="./images/sns1.jpg" alt=""/></a></span>
                  <span><a href="#" title="트윗터"><img src="./images/sns2.jpg" alt=""/></a></span>
                  <span><a href="#" title="인스타그램"><img src="./images/sns3.jpg" alt=""/></a></span>
               </div>
            </footer>
         )
      }


      function ModalComponent({modalClose}){

         const onClickModalClose=(e)=>{
            e.preventDefault();
            modalClose();
         }

         return(
            <div id="modal">
               <div className="modal-wrap">
                  <div className="modal-container">
                     <div className="title">
                        <h2>신규회원 대상 이벤트 안내</h2>
                     </div>
                     <div className="content">
                        <ol>
                        <li>
                              즐거운 쇼핑 환경을 위해 항상 노력하는 JUST 쇼핑몰입니다.
                        </li>
                        <li>
                              고객님들께 한 단계 더 나아가 보답하는 ON쇼핑몰이 되고자신규회원 대상 10% 할인 이벤트를 실시하고 있습니다.
                        </li>
                        <li>
                              웹과 모바일에서 모두 이용 가능하며, 수준 높은 서비스를 위해 앞으로도 꾸준히 노력할 것을 약속드립니다.              
                              <br/>
                              <br/>
                              <img src="./images/icon1.jpg" alt="" />
                        </li>
                        </ol>
                     </div>
                     <div className="button-box">
                        <button onClick={onClickModalClose} className="modal-close">닫기</button>
                     </div>      
                  </div>      
               </div>
            </div>
         )         
      }

ReactDOM.render(
   <WrapComonent/>,
   document.getElementById('root')
);

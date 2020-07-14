(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{103:function(e,t,n){e.exports=n(148)},108:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n(30),o=n(9),i=n(177),m=n(15),s=n(16),u=n(21),d=n(18),g=n(17),E=n(172),y=n(193),p=n(175),h=n(176),b=(n(108),function(e){return"github"===e.target.id?window.location="https://github.com/mrtrpak":"linkedin"===e.target.id?window.location="https://www.linkedin.com/in/michael-trpak/":void 0}),f=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={isPhone:!1},e.updateFormat=e.updateFormat.bind(Object(u.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.updateFormat(),window.addEventListener("resize",this.updateFormat)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateFormat)}},{key:"updateFormat",value:function(){this.setState({isPhone:window.innerWidth<400})}},{key:"render",value:function(){var e=this.state.isPhone;return r.a.createElement("div",null,e?r.a.createElement(E.a,{container:!0,justify:"space-between",alignItems:"center",className:"navbar"},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement("h1",{className:"name"},"Michael Trpak")),r.a.createElement(E.a,{item:!0,container:!0,justify:"flex-end",xs:6},r.a.createElement(y.a,{"aria-label":"breadcrumb",id:"navLinks"},r.a.createElement(p.a,{id:"github",onClick:b}),r.a.createElement(h.a,{id:"linkedin",onClick:b})))):r.a.createElement(E.a,{container:!0,justify:"space-between",alignItems:"center",className:"navbar"},r.a.createElement(E.a,{item:!0,xs:4}),r.a.createElement(E.a,{item:!0,xs:4},r.a.createElement("h1",{className:"name"},"Michael Trpak")),r.a.createElement(E.a,{item:!0,container:!0,justify:"flex-end",xs:4},r.a.createElement(y.a,{"aria-label":"breadcrumb",id:"navLinks"},r.a.createElement(p.a,{id:"github",onClick:b}),r.a.createElement(h.a,{id:"linkedin",onClick:b})))))}}]),n}(a.Component),k=n(49),I=n(91),v=n.n(I),x=n(149),B=n(92),w=n.n(B),N=(n(112),function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={isFlipped:!1,isDesktop:!1,cardSize:6},e.updateIsDesktop=e.updateIsDesktop.bind(Object(u.a)(e)),e.handleClick=e.handleClick.bind(Object(u.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.updateIsDesktop(),window.addEventListener("resize",this.updateIsDesktop)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateIsDesktop)}},{key:"updateIsDesktop",value:function(){this.setState({isDesktop:window.innerWidth>601}),window.innerWidth<640?this.setState({cardSize:10}):this.setState({cardSize:6})}},{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e=this.state.isDesktop;return r.a.createElement(v.a,{isFlipped:this.state.isFlipped,flipSpeedFrontToBack:.5,flipSpeedBackToFront:.5,flipDirection:"vertical"},r.a.createElement("div",{className:"box"},r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{container:!0,alignItems:"center",item:!0,sm:this.state.cardSize,className:"aboutMe"},e?r.a.createElement(E.a,{item:!0,xs:4,className:"picGrid"},r.a.createElement("img",{src:w.a,alt:"X",className:"logoImg"})):r.a.createElement("div",null),r.a.createElement(E.a,{item:!0,sm:8,className:"aboutText"},r.a.createElement(E.a,null,"Full stack web developer certified through the UNCC coding bootcamp with a degree in communication studies. Developed skills in HTML5, CSS3, Javascript, ES6, MySql and React. A problem solver that works well in a group and helps with conflict resolution and creativity to achieve a goal in a given time frame. With each project I push the boundaries of my capabilities to give the best possible experience for the user.")),r.a.createElement(E.a,{item:!0,xs:12,className:"flipBtn frontBtn"},r.a.createElement(x.a,{color:"primary",style:{backgroundColor:"transparent"},onClick:this.handleClick},r.a.createElement("span",{className:"btnText"},"Click To Flip")))))),r.a.createElement("div",{className:"box"},r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{container:!0,item:!0,justify:"center",xs:6,className:"aboutMe backCard"},r.a.createElement(E.a,{item:!0,xs:10,className:"aboutText"},r.a.createElement("h3",{className:"backTitle"},"Soccer API"),r.a.createElement("p",{className:"backText"},"Click on the right circular button to view the current Bundesliga standings, which is the top soccer league in Germany that 18 teams compete in."),r.a.createElement("h3",{className:"backTitle"},"Video Game API"),r.a.createElement("p",{className:"backText"},"Click the Mario circular button to view the top 10 rated video games from the last 5 years based on the RAWG API rating system."),r.a.createElement(x.a,{color:"primary",style:{backgroundColor:"transparent"},onClick:this.handleClick},r.a.createElement("span",{className:"btnText"},"Click To Flip")))))))}}]),n}(a.Component));n(113);function j(){return r.a.createElement("blockquote",null,"There are two ways to write error-free programs; only the third one works.",r.a.createElement("span",{className:"author"},r.a.createElement("i",null,"Alan J. Perlis")))}var T=n(63),S=n.n(T),C=n(64),O=n.n(C),D=(n(114),function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={isHandheld:!1},e.updateHandheld=e.updateHandheld.bind(Object(u.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.updateHandheld(),window.addEventListener("resize",this.updateHandheld)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateHandheld)}},{key:"updateHandheld",value:function(){this.setState({isHandheld:window.innerWidth>601})}},{key:"render",value:function(){var e=this.state.isHandheld;return r.a.createElement("div",null,e?r.a.createElement(E.a,{container:!0,spacing:3,align:"column",alignItems:"center",id:"hobbiesContainer"},r.a.createElement(E.a,{item:!0,sm:4},r.a.createElement(l.b,{to:"/gamer"},r.a.createElement("img",{id:"games",src:O.a,alt:"Video Games",className:"image",align:"right"}))),r.a.createElement(E.a,{item:!0,sm:4},r.a.createElement(j,null)),r.a.createElement(E.a,{item:!0,sm:4},r.a.createElement(l.b,{to:"/soccer"},r.a.createElement("img",{id:"soccer",src:S.a,alt:"Bayern Munich",className:"image"})))):r.a.createElement(E.a,{container:!0,spacing:3,direction:"row",alignItems:"center",justify:"center",id:"hobbiesContainer"},r.a.createElement(E.a,{item:!0,xs:8,align:"center"},r.a.createElement(j,{align:"center"})),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(l.b,{to:"/gamer"},r.a.createElement("img",{id:"games",src:O.a,alt:"Video Games",className:"image",align:"right"}))),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(l.b,{to:"/soccer"},r.a.createElement("img",{id:"soccer",src:S.a,alt:"Bayern Munich",className:"image"})))))}}]),n}(a.Component)),L=n(93),G=n.n(L),M=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={strength:800,height:800},e.updateParallax=e.updateParallax.bind(Object(u.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.updateParallax(),window.addEventListener("resize",this.updateParallax)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateParallax)}},{key:"updateParallax",value:function(){window.innerWidth<601?this.setState({strength:200,height:700}):window.innerWidth>1200&&window.innerWidth<1600?this.setState({strength:1200,height:900}):window.innerWidth>1600?this.setState({strength:1200,height:1e3}):this.setState({strength:800,height:800})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.Parallax,{bgImage:G.a,strength:this.state.strength,style:{height:this.state.height}},r.a.createElement(N,null),r.a.createElement(D,null)))}}]),n}(a.Component),P=n(31),z=n(4),A=n(192),F=n(194),W=n(178),H=n(179),R=n(180),_=n(181),U=Object(z.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(A.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),q=Object(z.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(F.a);function J(){var e=r.a.useState(null),t=Object(P.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",null,r.a.createElement(x.a,{style:{padding:"5px"},"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){a(e.currentTarget)}},"Contact Me"),r.a.createElement(U,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){a(null)}},r.a.createElement(q,null,r.a.createElement(W.a,null,r.a.createElement(p.a,{fontSize:"small"})),r.a.createElement(H.a,{style:{textDecoration:"none"},color:"inherit",href:"https://github.com/mrtrpak",target:"_blank",rel:"noreferrer"},r.a.createElement(R.a,{primary:"Github"}))),r.a.createElement(q,null,r.a.createElement(W.a,null,r.a.createElement(h.a,{fontSize:"small"})),r.a.createElement(H.a,{style:{textDecoration:"none"},color:"inherit",href:"https://www.linkedin.com/in/michael-trpak/",target:"_blank",rel:"noreferrer"},r.a.createElement(R.a,{primary:"LinkedIn"}))),r.a.createElement(q,null,r.a.createElement(W.a,null,r.a.createElement(_.a,{fontSize:"small"})),r.a.createElement(H.a,{style:{textDecoration:"none"},color:"inherit",href:"https://docs.google.com/document/d/1S9v9bpBBEbvUwknThouJwZQDInZZm4TMdNDa69TNYIE/edit?usp=sharing",target:"_blank",rel:"noreferrer"},r.a.createElement(R.a,{primary:"Resume"}))),r.a.createElement(q,null,r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement("a",{href:"mailto:mrtrpak3@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"Email Me!")))))}n(117);function K(){return r.a.createElement(E.a,{className:"divider",container:!0,justify:"center",alignItems:"center"},r.a.createElement(i.a,null,r.a.createElement(J,null)))}var Q=n(182),V=n(53),Z=n.n(V),X=n(54),Y=n.n(X),$=n(94),ee=n.n($),te=n(95),ne=n.n(te),ae=n(96),re=n.n(ae),ce=n(67),le=n.n(ce);n(118);function oe(){var e=Object(a.useState)("row"),t=Object(P.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("Portfolio"),o=Object(P.a)(l,2),m=o[0],s=o[1],u=Object(a.useState)(le.a),d=Object(P.a)(u,2),g=d[0],y=d[1],p=function(e){switch(e){case"1":return document.getElementById("projectText").innerHTML="A free to use business card creator where a user can create cards from a selection of templates and print out multiple cards on a page.",document.getElementById("toolsText").innerHTML="axios, ES6, CSS3, express, heroku, MySQL, passport, nodemon, react, sequelize",s("Business Card Creator"),void y(ne.a);case"2":return document.getElementById("projectText").innerHTML="A retro style game where a user can create a character to fight a tough boss. There are four move types Normal, Special, Heal & Dodge.",document.getElementById("toolsText").innerHTML="ES6, express, handlebars, , MySQL, nes.css, nodemon, sequelize",s("Full-Stack Retro Game"),void y(re.a);case"3":return document.getElementById("projectText").innerHTML="App that tracks spending and income to get a clear view of money expenditure. It also works offline if there is no internet connection.",document.getElementById("toolsText").innerHTML="CSS3, express, JS, mongoDB, mongoose, PWA",s("Budget Tracker App"),void y(ee.a);default:return s("Portfolio"),void y(le.a)}};return Object(a.useEffect)((function(){function e(){window.innerWidth<960?c("column"):c("row")}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r.a.createElement(E.a,{container:!0,alignItems:"center",direction:n,justify:"space-evenly",spacing:3},r.a.createElement(E.a,{item:!0,xs:10,md:5,component:i.a,className:"gridItem"},r.a.createElement("img",{src:g,alt:"loading...",className:"player"})),r.a.createElement("div",{className:"padding"}),r.a.createElement(E.a,{container:!0,item:!0,xs:10,md:5,alignItems:"center",justify:"center",component:i.a,className:"gridItem"},r.a.createElement(E.a,{item:!0,xs:2,lg:1},r.a.createElement(Q.a,{onClick:function(){p("1")},"aria-label":"card-gif",color:"inherit"},r.a.createElement(Z.a,null))),r.a.createElement(E.a,{item:!0,xs:8,lg:10},r.a.createElement(H.a,{style:{textDecoration:"none"},color:"primary",href:"https://stormy-harbor-93453.herokuapp.com/"},r.a.createElement("h3",{className:"linkText"},"BUSINESS CARD CREATOR"))),r.a.createElement(E.a,{item:!0,xs:2,lg:1},r.a.createElement(Q.a,{"aria-label":"card-github",color:"inherit"},r.a.createElement("a",{href:"https://github.com/mrtrpak/Futurum-est-nostrum",className:"gitIcon"},r.a.createElement(Y.a,null)))),r.a.createElement(E.a,{item:!0,xs:2,lg:1},r.a.createElement(Q.a,{onClick:function(){p("2")},"aria-label":"game-gif",color:"inherit"},r.a.createElement(Z.a,null))),r.a.createElement(E.a,{item:!0,xs:8,lg:10},r.a.createElement(H.a,{style:{textDecoration:"none"},color:"primary",href:"https://immense-hamlet-97451.herokuapp.com/"},r.a.createElement("h3",{className:"linkText"},"FULL-STACK GAME"))),r.a.createElement(E.a,{item:!0,xs:2,lg:1},r.a.createElement(Q.a,{"aria-label":"game-github",color:"inherit"},r.a.createElement("a",{href:"https://github.com/mrtrpak/ProjectTwoTheGame",className:"gitIcon"},r.a.createElement(Y.a,null)))),r.a.createElement(E.a,{item:!0,xs:2,lg:1},r.a.createElement(Q.a,{onClick:function(){p("3")},"aria-label":"budget-gif",color:"inherit"},r.a.createElement(Z.a,null))),r.a.createElement(E.a,{item:!0,xs:8,lg:10},r.a.createElement(H.a,{style:{textDecoration:"none"},color:"primary",href:"https://still-ravine-53114.herokuapp.com/"},r.a.createElement("h3",{className:"linkText"},"BUDGET TRACKER"))),r.a.createElement(E.a,{item:!0,xs:2,lg:1},r.a.createElement(Q.a,{"aria-label":"budget-github",color:"primary"},r.a.createElement("a",{href:"https://github.com/mrtrpak/Budget-Tracker",className:"gitIcon"},r.a.createElement(Y.a,null)))),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement("p",{id:"projectText"},"- Click film icon to view Gif",r.a.createElement("br",null),"- Project name goes to link",r.a.createElement("br",null),"- Github icon goes to repo")),r.a.createElement(E.a,{container:!0,item:!0,justify:"center",xs:6},r.a.createElement("p",{className:"toolsTitle"},m," Tools Used:"),r.a.createElement("p",{id:"toolsText"},"axios, github-pages, material-ui, react, react-card-flip, react-parallax"))))}var ie=n(97),me=n.n(ie);n(120);function se(){var e=Object(a.useState)(700),t=Object(P.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(500),o=Object(P.a)(l,2),i=o[0],m=o[1];return Object(a.useEffect)((function(){function e(){window.innerWidth>960?(c(700),m(500)):(c(1e3),m(300))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r.a.createElement(k.Parallax,{bgImage:me.a,strength:i},r.a.createElement("div",{className:"playLinkGrid",style:{height:n}},r.a.createElement(oe,null)))}var ue=n(98),de=n.n(ue);function ge(){return r.a.createElement(x.a,{color:"primary",variant:"contained",endIcon:r.a.createElement(de.a,null),onClick:function(){window.scrollTo(0,0)}},"Back to")}n(121);function Ee(){return r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center",className:"footer"},r.a.createElement(ge,null))}n(122);function ye(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(M,null),r.a.createElement(i.a,null,r.a.createElement(K,null)),r.a.createElement(se,null),r.a.createElement(Ee,null))}var pe=n(68),he=n.n(pe),be=function(){return he.a.request({url:"https://api.football-data.org/v2/competitions/BL1/standings",method:"get",headers:{"X-Auth-Token":"5d08ba09e1d84003adc242dbd50ca5bb"}})},fe=function(){return he.a.request({url:"https://api.rawg.io/api/games?dates=2015-01-01,2020-12-12&ordering=-added",method:"get"})},ke=n(184),Ie=n(183),ve=n(185),xe=n(69),Be=n.n(xe),we=(n(145),function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).selectPrev=function(){var e=a.state.currentGame;++e<11?a.setState((function(){return{currentGame:e}}),(function(){a.numberChosen()})):a.setState({currentGame:1},(function(){a.numberChosen()}))},a.selectNumber=function(e){a.setState({currentGame:e},(function(){a.numberChosen()}))},a.selectNext=function(){var e=a.state.currentGame;--e>0?a.setState((function(){return{currentGame:e}}),(function(){a.numberChosen()})):a.setState({currentGame:10},(function(){a.numberChosen()}))},a.numberChosen=function(){switch(a.state.currentGame){case 10:return document.getElementById("10").style.background="skyblue",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 9:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="skyblue",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 8:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="skyblue",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 7:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="skyblue",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 6:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="skyblue",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 5:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="skyblue",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 4:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="skyblue",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 3:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="skyblue",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="none");case 2:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="skyblue",void(document.getElementById("1").style.background="none");case 1:return document.getElementById("10").style.background="none",document.getElementById("9").style.background="none",document.getElementById("8").style.background="none",document.getElementById("7").style.background="none",document.getElementById("6").style.background="none",document.getElementById("5").style.background="none",document.getElementById("4").style.background="none",document.getElementById("3").style.background="none",document.getElementById("2").style.background="none",void(document.getElementById("1").style.background="skyblue")}},a.updateDevice=function(){a.setState({isDevice:window.innerWidth<880,isHandheld:window.innerWidth<650})},a.state={currentGame:10,isDevice:!1,isHandheld:!1,isClicked:"primary",notClicked:"default"},a.updateDevice=a.updateDevice.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.updateDevice(),this.numberChosen(),window.addEventListener("resize",this.updateDevice)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDevice)}},{key:"render",value:function(){var e=this,t=[10,9,8,7,6,5,4,3,2,1],n=this.state.currentGame,a=this.props.getData,c=this.state.isDevice,l=this.state.isHandheld;return r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center"},l?r.a.createElement(E.a,{item:!0,container:!0,justify:"center",alignItems:"center",component:i.a,spacing:1},r.a.createElement(E.a,{className:"btnGroup",item:!0,xs:12},r.a.createElement(ke.a,{variant:"text","aria-label":"text primary button group"},t.map((function(t){return r.a.createElement(x.a,{id:t,onClick:function(){return e.selectNumber(t)},key:t},t)}))))):r.a.createElement(E.a,{item:!0,container:!0,justify:"center",alignItems:"center",component:i.a,spacing:1},r.a.createElement(E.a,{item:!0,container:!0,justify:"center",xs:2},r.a.createElement(E.a,{item:!0},r.a.createElement(Q.a,{onClick:function(){return e.selectPrev()},"aria-label":"last game"},r.a.createElement(Ie.a,{fontSize:"large"})))),r.a.createElement(E.a,{className:"btnGroup",item:!0,xs:8},r.a.createElement(ke.a,{variant:"text","aria-label":"text primary button group"},t.map((function(t){return r.a.createElement(x.a,{id:t,onClick:function(){return e.selectNumber(t)},key:t},t)})))),r.a.createElement(E.a,{item:!0,container:!0,justify:"center",xs:2},r.a.createElement(E.a,{item:!0},r.a.createElement(Q.a,{onClick:function(){return e.selectNext()},"aria-label":"next game"},r.a.createElement(ve.a,{fontSize:"large"}))))),c?r.a.createElement(E.a,{item:!0,container:!0,justify:"center",alignItems:"center",spacing:3,className:"gameBody"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h1",{className:"gameTitle title"},a[n].name)),r.a.createElement(E.a,{item:!0,container:!0,justify:"center",alignItems:"center",xs:8},r.a.createElement(E.a,{item:!0},r.a.createElement(Be.a,{className:"vidPlayer",url:a[n+20],controls:!0,width:"100%",height:"100%"}))),r.a.createElement(E.a,{item:!0,container:!0,alignItems:"center",justify:"center",xs:4,component:i.a},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h2",{className:"title rateTitle"},"RATING")),r.a.createElement(E.a,{item:!0,xs:8},r.a.createElement("h3",{className:"rating"},a[n].rating))),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(H.a,{href:a[n].background_image,target:"_blank",rel:"noopener",style:{textDecoration:"none"}},r.a.createElement("h4",{className:"title"},"Game Background Image")))):r.a.createElement(E.a,{item:!0,container:!0,justify:"center",alignItems:"center",spacing:3,className:"gameBody"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h1",{className:"gameTitle title"},a[n].name)),r.a.createElement(E.a,{item:!0,container:!0,justify:"center",alignItems:"center",xs:6},r.a.createElement(E.a,{item:!0},r.a.createElement(Be.a,{className:"vidPlayer",url:a[n+20],controls:!0,width:"100%",height:"100%"}))),r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement("h4",null,"Released"),r.a.createElement("p",null,a[n].released),r.a.createElement("h4",null,"Genre"),r.a.createElement("p",null,a[n+10].name),r.a.createElement(H.a,{href:a[n].background_image,target:"_blank",rel:"noopener",style:{textDecoration:"none"}},r.a.createElement("h4",null,"Game Background Image"))),r.a.createElement(E.a,{item:!0,container:!0,alignItems:"center",justify:"center",xs:3,component:i.a},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h2",{className:"title rateTitle"},"RATING")),r.a.createElement(E.a,{item:!0,xs:8},r.a.createElement("h3",{className:"rating"},a[n].rating)))))}}]),n}(a.Component)),Ne=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getTopTenRated=function(){fe().then((function(e){var t=e.data.results,n=[t[0].rating,t[1].rating,t[2].rating,t[3].rating,t[4].rating,t[5].rating,t[6].rating,t[7].rating,t[8].rating,t[9].rating,t[10].rating,t[11].rating,t[12].rating,t[13].rating,t[14].rating,t[15].rating,t[16].rating,t[17].rating,t[18].rating,t[19].rating];n.sort((function(e,t){return t-e}));for(var r=0;r<t.length;r++){var c=t[r].rating,l=t[r],o=t[r].genres[0],i=t[r].clip.clip;c===n[0]&&a.setState({1:l,11:o,21:i}),c===n[1]&&a.setState({2:l,12:o,22:i}),c===n[2]&&a.setState({3:l,13:o,23:i}),c===n[3]&&a.setState({4:l,14:o,24:i}),c===n[4]&&a.setState({5:l,15:o,25:i}),c===n[5]&&a.setState({6:l,16:o,26:i}),c===n[6]&&a.setState({7:l,17:o,27:i}),c===n[7]&&a.setState({8:l,18:o,28:i}),c===n[8]&&a.setState({9:l,19:o,29:i}),c===n[9]&&a.setState({10:l,20:o,30:i})}})).catch((function(e){return console.log(e)}))},a.state={1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{},11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{}},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getTopTenRated()}},{key:"render",value:function(){return r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},r.a.createElement(i.a,{elevation:3},r.a.createElement(we,{getData:this.state})))}}]),n}(a.Component);function je(){return r.a.createElement(E.a,{container:!0,justify:"center",spacing:3,style:{padding:"30px"}},r.a.createElement(E.a,{item:!0,align:"center",xs:3},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Back to Portfolio"))))}function Te(){return r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:11},r.a.createElement(Ne,null)),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(je,null)))}var Se=n(186),Ce=n(187),Oe=n(188),De=n(189),Le=n(190),Ge=n(191);n(146);function Me(e){return r.a.createElement(i.a,{elevation:3},r.a.createElement(De.a,null,r.a.createElement(Le.a,{"aria-label":"customized table"},r.a.createElement(Ge.a,null,r.a.createElement(Se.a,{className:"tableHead"},r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"Pos")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"Logo")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"Team")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"TP")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"MP")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"Won")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"Draw")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"Lost")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"GF")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"GA")),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"headText"},"GD")))),function(e){for(var t=[],n=e.getData,a=1;a<19;a++){var c=[];c.push(r.a.createElement(Se.a,{id:"pos"+a,key:a},r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"pointText"},a)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("img",{src:n[a+18].crestUrl,alt:"team logo",className:"teamLogo"})),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a+18].name)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"pointText"},n[a].points)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].playedGames)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].won)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].draw)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].lost)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].goalsFor)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].goalsAgainst)),r.a.createElement(Ce.a,{align:"center"},r.a.createElement("span",{className:"text"},n[a].goalDifference)))),t.push(r.a.createElement(Oe.a,{key:a},c))}return t}(e))))}var Pe=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getStandings=function(){be().then((function(e){var t=e.data.standings[0].table;a.setState({1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[7],9:t[8],10:t[9],11:t[10],12:t[11],13:t[12],14:t[13],15:t[14],16:t[15],17:t[16],18:t[17],19:t[0].team,20:t[1].team,21:t[2].team,22:t[3].team,23:t[4].team,24:t[5].team,25:t[6].team,26:t[7].team,27:t[8].team,28:t[9].team,29:t[10].team,30:t[11].team,31:t[12].team,32:t[13].team,33:t[14].team,34:t[15].team,35:t[16].team,36:t[17].team})})).catch((function(e){return console.log(e)}))},a.myRef=r.a.createRef(),a.state={1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{},11:{},12:{},13:{},14:{},15:{},16:{},17:{},18:{},19:{},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{},36:{}},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.myRef.current.scrollTo(0,0),this.getStandings()}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.myRef},r.a.createElement(Me,{getData:this.state}))}}]),n}(a.Component);n(147);function ze(){return r.a.createElement(i.a,{elevation:3},r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"space-around",spacing:3},r.a.createElement(E.a,{container:!0,item:!0,alignItems:"center",justify:"center",xs:12},r.a.createElement(E.a,{item:!0},r.a.createElement("h3",{className:"keyTitle"},"TABLE KEY"))),r.a.createElement(E.a,{container:!0,item:!0,alignItems:"center",justify:"center",spacing:1,xs:12,md:10,style:{marginLeft:"3px"}},r.a.createElement(E.a,{item:!0,xs:7,md:8},"- A Bundesliga champion or",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/List_of_German_football_champions",target:"_blank",rel:"noopener noreferrer",className:"champLink links"}," Deutscher Meister "),"is decided by points after 34 matches. 3 pts for win, 1 pt for tie, 0 for loss. Each team plays one another both home and away."),r.a.createElement(E.a,{item:!0,xs:5,md:4},"- Teams that finish in the top 4 qualify for the",r.a.createElement("a",{href:"https://www.uefa.com/uefachampionsleague/",target:"_blank",rel:"noopener noreferrer",className:"clLink links"}," UEFA Champions League"),". The most prestigious european club competition."),r.a.createElement(E.a,{item:!0,xs:7,md:8},"- Finishing in 16th place sees a",r.a.createElement("a",{href:"https://www.bundesliga.com/en/bundesliga/news/how-does-bundesliga-promotion-and-relegation-work-play-off-4061",target:"_blank",rel:"noopener noreferrer",className:"relPlLink links"}," 2-leg playoff "),"against the 3rd place finisher in 2. Bundesliga. Teams that finish",r.a.createElement("a",{href:"https://www.bundesliga.com/de/2bundesliga/tabelle",target:"_blank",rel:"noopener noreferrer",className:"relLink links"}," 17th and 18th "),"are relegated to 2. Bundesliga, being replaced by the top 2 teams in that league."),r.a.createElement(E.a,{item:!0,xs:5,md:4},"- Teams that finish in 5th and 6th place qualify for the",r.a.createElement("a",{href:"https://www.uefa.com/uefaeuropaleague/",target:"_blank",rel:"noopener noreferrer",className:"elLinks links"}," UEFA Europa League"),". It's similar to the Champions League, but a step lower.")),r.a.createElement(E.a,{container:!0,item:!0,justify:"center",spacing:1,xs:12,md:2,className:"infoSection"},r.a.createElement(E.a,{item:!0,xs:6,md:12},r.a.createElement("span",{className:"info"},"MP: "),"matches played"),r.a.createElement(E.a,{item:!0,xs:6,md:12},r.a.createElement("span",{className:"info"},"TP: "),"total points"),r.a.createElement(E.a,{item:!0,xs:6,md:12},r.a.createElement("span",{className:"info"},"GF: "),"goals for"),r.a.createElement(E.a,{item:!0,xs:6,md:12},r.a.createElement("span",{className:"info"},"GA: "),"goals against"),r.a.createElement(E.a,{item:!0,xs:6,md:12},r.a.createElement("span",{className:"info"},"GD: "),"goal differential"))))}function Ae(){return r.a.createElement(E.a,{container:!0,spacing:3,direction:"row",alignItems:"center",justify:"center"},r.a.createElement(E.a,{item:!0,xs:11},r.a.createElement(Pe,null)),r.a.createElement(E.a,{item:!0,xs:10},r.a.createElement(ze,null)),r.a.createElement(je,null))}function Fe(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement(o.a,{exact:!0,path:"/",component:ye}),r.a.createElement(o.a,{exact:!0,path:"/gamer",component:Te}),r.a.createElement(o.a,{exact:!0,path:"/soccer",component:Ae}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(r.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,n){e.exports=n.p+"static/media/bundesliga.30a2385b.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/games.91e38e61.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/switchGif.111dd20d.gif"},92:function(e,t,n){e.exports=n.p+"static/media/logo.a7b2dd54.png"},93:function(e,t,n){e.exports=n.p+"static/media/germany.bff4dfd5.jpg"},94:function(e,t,n){e.exports=n.p+"static/media/budgetTracker.941bb4d7.gif"},95:function(e,t,n){e.exports=n.p+"static/media/businessCard.333ff365.gif"},96:function(e,t,n){e.exports=n.p+"static/media/game.2c70d7e5.gif"},97:function(e,t,n){e.exports=n.p+"static/media/prague.8a320437.jpg"}},[[103,1,2]]]);
//# sourceMappingURL=main.614cf65d.chunk.js.map
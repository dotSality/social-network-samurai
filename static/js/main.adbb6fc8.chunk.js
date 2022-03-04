(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(21),a=function(){return Object(r.b)()},c=r.c},17:function(e,t,n){e.exports={textBlock:"Common_textBlock__IWGm7",textArea:"Common_textArea__1ljcg",error:"Common_error__18zfi"}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(4),a=Object(r.c)({name:"form",initialState:{error:null,editMode:!1},reducers:{setFormError:function(e,t){e.error=t.payload},setEditMode:function(e,t){e.editMode=t.payload}}}),c=a.reducer,s=a.actions,i=s.setEditMode,o=s.setFormError},22:function(e,t,n){e.exports={nav:"NavBar_nav__2Q_l4",mainNav:"NavBar_mainNav__2iHLZ",item:"NavBar_item__u5y3L",activeLink:"NavBar_activeLink__3WEpb"}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n.p+"static/media/Circle-Loading.385f97b7.svg",a=(n(0),n(47)),c=n.n(a),s=n(1),i=function(){return Object(s.jsx)("div",{className:c.a.container,children:Object(s.jsx)("img",{style:{width:"350px"},src:r,alt:"preloader"})})}},27:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s}));var r={required:"You can't post an empty post",maxLength:{value:10,message:"Max length is 300 characters"}},a={required:"Please, enter e-mail",pattern:{value:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,message:"Incorrect e-mail"}},c={required:"Please, enter password"},s={required:"Wrong captcha"}},30:function(e,t,n){e.exports={header:"Header_header__17wxo",loginBlock:"Header_loginBlock__3fOBz"}},31:function(e,t,n){e.exports={header:"Friends_header__3qTWQ"}},32:function(e,t,n){e.exports={friend:"Friend_friend__2R-La",name:"Friend_name__2C8Yt"}},33:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return _})),n.d(t,"e",(function(){return k}));var r=n(2),a=n.n(r),c=n(5),s=n(8),i=function(e){return s.a.get("profile/"+e).then((function(e){return e.data}))},o=function(e){return s.a.get("profile/status/".concat(e)).then((function(e){return e.data}))},u=function(e){return s.a.put("profile/status",{status:e})},l=function(e){var t=new FormData;return t.append("image",e),s.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},d=function(e){return s.a.put("profile",e).then((function(e){return e.data}))},p=n(19),f=n(4),b=Object(f.c)({name:"profile",initialState:{posts:[{id:1,post:"Hi",likesCount:15},{id:2,post:"Yo!",likesCount:12},{id:3,post:"Wazzup?",likesCount:23}],profile:null,status:""},reducers:{addPost:function(e,t){var n={id:(new Date).getTime(),post:t.payload,likesCount:0};e.posts.unshift(n)},setUserProfile:function(e,t){e.profile=t.payload},setStatus:function(e,t){e.status=t.payload},deletePost:function(e,t){var n=e.posts.findIndex((function(e){return t.payload===e.id}));e.posts.splice(n,1)},uploadPhotoSuccess:function(e,t){e.profile.photos=t.payload}}}),j=b.reducer,h=b.actions,m=(h.deletePost,h.addPost),O=h.uploadPhotoSuccess,x=h.setStatus,g=h.setUserProfile,v=Object(f.b)("profile/loadUserProfile",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,i(t);case 3:c=e.sent,r(g(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),w=Object(f.b)("profile/getUserStatus",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,o(t);case 3:c=e.sent,r(x(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),y=Object(f.b)("profile/updateUserStatus",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,u(t);case 3:0===e.sent.data.resultCode&&r(x(t));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(f.b)("profile/uploadPhoto",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,l(t);case 3:0===(c=e.sent).resultCode&&r(O(c.data.photos));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),k=Object(f.b)("profile/submitProfile",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,s,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,c=n.getState,e.next=3,d(t);case 3:if(0!==(s=e.sent).resultCode){e.next=14;break}return o=c().auth.id,e.next=8,i(o);case 8:u=e.sent,r(g(u)),r(Object(p.b)(!1)),r(Object(p.c)(null)),e.next=15;break;case 14:r(Object(p.c)(s.messages[0]));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},35:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return w})),n.d(t,"c",(function(){return y}));var r=n(2),a=n.n(r),c=n(5),s=n(7),i=n(8),o=function(e,t){return i.a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},u=function(e){return i.a.get("follow/".concat(e)).then((function(e){return e.data}))},l=function(e){return i.a.delete("follow/".concat(e))},d=function(e){return i.a.post("follow/".concat(e),{})},p=n(4),f=Object(p.c)({name:"users",initialState:{users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowing:[]},reducers:{followToggle:function(e,t){var n=e.users.find((function(e){return e.id===t.payload}));n&&(n.followed=!n.followed)},setUsers:function(e,t){e.users=t.payload},setCurrentPage:function(e,t){e.currentPage=t.payload},setTotalCount:function(e,t){e.totalUsersCount=t.payload},toggleFetching:function(e,t){e.isFetching=t.payload},toggleIsFollowingProgress:function(e,t){e.isFollowing=t.payload.isFetching?[].concat(Object(s.a)(e.isFollowing),[t.payload.userID]):e.isFollowing.filter((function(e){return e!==t.payload.userID}))}}}),b=f.reducer,j=f.actions,h=j.setCurrentPage,m=j.setTotalCount,O=j.setUsers,x=j.toggleFetching,g=j.followToggle,v=j.toggleIsFollowingProgress,w=Object(p.b)("users/requestUsers",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.currentPage,c=t.pageSize,s=n.dispatch,e.next=4,o(r,c);case 4:i=e.sent,s(x(!1)),s(O(i.items)),s(m(i.totalCount));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),y=Object(p.b)("users/toggleFollow",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userID,c=t.isFollowed,(s=n.dispatch)(v({isFetching:!0,userID:r})),e.next=5,u(r);case 5:if(!c){e.next=12;break}return e.next=8,l(r);case 8:0===e.sent.data.resultCode&&s(g(r)),e.next=16;break;case 12:return e.next=14,d(r);case 14:0===e.sent.data.resultCode&&s(g(r));case 16:s(v({isFetching:!1,userID:r}));case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(4),a=Object(r.c)({name:"dialogs",initialState:{dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sasha"},{id:4,name:"Victor"},{id:5,name:"Valery"}],messages:[{id:1,message:"Hi",sender:!0},{id:2,message:"Yo!",sender:!1},{id:3,message:"What's up? I saw you yesterday at the park at 9 o'clock!",sender:!0},{id:4,message:"Okay... Why do you stalkering me?!",sender:!1},{id:5,message:"I LOVE YOU BABE! I WANNA BE WITH YOU!!!",sender:!0}]},reducers:{addMessage:function(e,t){var n={id:(new Date).getTime(),message:t.payload,sender:!1};e.messages.push(n)}}}),c=a.reducer,s=a.actions.addMessage},47:function(e,t,n){e.exports={container:"Preloader_container__3rzUo"}},49:function(e,t,n){},53:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(45),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ecad3ae6-8083-4154-b722-6cea4b99f288"}})},80:function(e,t,n){"use strict";n.r(t),n.d(t,"rerenderEntireTree",(function(){return he}));var r=n(0),a=(n(49),n(25)),c=n.n(a),s=(n(53),n(1)),i=function(){return Object(s.jsx)("div",{children:"News"})},o=function(){return Object(s.jsx)("div",{children:"Music"})},u=function(){return Object(s.jsx)("div",{children:"Settings"})},l=n(3),d=n(14),p=n(34),f=n(17),b=n.n(f),j=n(27),h=function(e){var t,n,r,a=Object(p.a)({defaultValues:{email:"",password:"",rememberMe:!1,captcha:""}}),c=a.register,i=a.handleSubmit,o=a.formState.errors,u=a.reset;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:i((function(t){e.onSubmitData(t),u()})),children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",Object(d.a)({className:b.a.textArea,placeholder:"Email..."},c("email",j.b)))}),Object(s.jsx)("div",{className:b.a.textBlock,children:null===(t=o.email)||void 0===t?void 0:t.message}),Object(s.jsx)("div",{children:Object(s.jsx)("input",Object(d.a)({type:"password",placeholder:"Password...",className:b.a.textArea},c("password",j.c)))}),e.captchaUrl?Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",Object(d.a)({className:b.a.textArea},c("captcha",j.a)))}),Object(s.jsx)("span",{className:b.a.textBlock,children:e.error?e.error:o.captcha&&(null===(n=o.captcha)||void 0===n?void 0:n.message)})]}):e.error?Object(s.jsx)("div",{className:b.a.textBlock,children:e.error}):Object(s.jsx)("div",{className:b.a.textBlock,children:null===(r=o.password)||void 0===r?void 0:r.message}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",Object(d.a)({type:"checkbox"},c("rememberMe")))," Remember me"]}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{value:"Login",type:"submit"})})]})})},m=n(2),O=n.n(m),x=n(5),g=n(8),v=function(){return g.a.get("auth/me").then((function(e){return e.data}))},w=function(e){return g.a.post("auth/login",e).then((function(e){return e.data}))},y=function(){return g.a.delete("auth/login")},_=function(){return g.a.get("security/get-captcha-url")},k=n(4),N=Object(k.c)({name:"auth",initialState:{id:null,email:null,login:null,remember:!1,isAuth:!1,error:"",captchaUrl:""},reducers:{setAuthUserData:function(e,t){return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),{},{error:""})},stopSubmit:function(e,t){e.error=t.payload},setCaptcha:function(e,t){e.captchaUrl=t.payload}}}),C=N.reducer,S=N.actions,P=S.setAuthUserData,F=S.setCaptcha,U=S.stopSubmit,B=Object(k.b)("auth/loginRequest",function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r,a,c,s,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,v();case 3:0===(a=e.sent).resultCode&&(c=a.data,s=c.id,i=c.email,o=c.login,r(P({id:s,email:i,login:o,isAuth:!0})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(k.b)("auth/login",function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,w(t);case 3:if(0!==(a=e.sent).resultCode){e.next=9;break}r(B()),r(F("")),e.next=18;break;case 9:if(10!==a.resultCode){e.next=17;break}return r(U(a.messages[0])),e.next=13,_();case 13:c=e.sent,r(F(c.data.data.url)),e.next=18;break;case 17:a.messages.length>0&&r(U(a.messages[0]));case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(k.b)("auth/logout",function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,y();case 3:0===e.sent.data.resultCode&&r(P({id:null,email:null,login:null,isAuth:!1}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),I=n(12),D=function(){var e=Object(I.a)(),t=Object(I.b)((function(e){return e.auth})),n=t.isAuth,r=t.error,a=t.captchaUrl;return n?Object(s.jsx)(l.a,{to:"/profile"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login page"}),Object(s.jsx)(h,{captchaUrl:a,error:r,onSubmitData:function(t){e(A(t))}})]})},L=Object(k.c)({name:"app",initialState:{initialized:!1,status:"idle",error:null},reducers:{initSuccess:function(e){e.initialized=!0}}}),E=L.reducer,M=L.actions.initSuccess,T=Object(k.b)("app/initializeApp",function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,a=r(B()),e.next=4,Promise.all([a]);case 4:r(M());case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),W=n(26);function q(e){return function(t){return Object(s.jsx)(r.Suspense,{fallback:Object(s.jsx)(W.a,{}),children:Object(s.jsx)(e,Object(d.a)({},t))})}}var Y=n(10),H=n(30),R=n.n(H),V=function(){var e=Object(I.a)(),t=Object(I.b)((function(e){return e.auth})),n=t.isAuth,r=t.login;return Object(s.jsxs)("header",{className:R.a.header,children:[Object(s.jsx)("img",{src:"https://i.ibb.co/kDDBfBd/pngtree-abstract-wave-business-logo-png-image-736975.jpg",alt:"header img"}),Object(s.jsx)("div",{className:R.a.loginBlock,children:n?Object(s.jsxs)("div",{children:[r," - ",Object(s.jsx)("button",{onClick:function(){return e(z())},children:"Logout"})]}):Object(s.jsx)(Y.b,{to:"/login/",children:"Login"})})]})},J=n(22),Q=n.n(J),G=n(31),K=n.n(G),Z=n(32),$=n.n(Z);function X(e){return Object(s.jsxs)("div",{className:$.a.friend,children:[Object(s.jsx)("img",{src:e.avatar,alt:"avatar"}),"\n",Object(s.jsx)("span",{className:$.a.name,children:e.name})]})}function ee(e){var t=e.friends.map((function(e){return Object(s.jsx)(X,{id:e.id,avatar:e.avatar,name:e.name},e.id)}));return Object(s.jsxs)("div",{className:K.a.friendsCont,children:[Object(s.jsx)("span",{className:K.a.header,children:"Friends"}),t]})}var te=function(){var e=Object(I.b)((function(e){return e.auth})).id,t=Object(I.b)((function(e){return e.sidebar})).friends,n=function(e){var t=e.isActive;return"".concat(Q.a.item," ").concat(t?Q.a.activeLink:"")};return Object(s.jsxs)("nav",{className:Q.a.nav,children:[Object(s.jsxs)("div",{className:Q.a.mainNav,children:[Object(s.jsx)(Y.b,{to:"/profile/".concat(e),className:n,children:"Profile"}),Object(s.jsx)(Y.b,{to:"/dialogs",className:n,children:"Messages"}),Object(s.jsx)(Y.b,{to:"/news",className:n,children:"News"}),Object(s.jsx)(Y.b,{to:"/users",className:n,children:"Users"}),Object(s.jsx)(Y.b,{to:"/music",className:n,children:"Music"}),Object(s.jsx)(Y.b,{to:"/settings",className:n,children:"Settings"})]}),Object(s.jsx)("div",{children:Object(s.jsx)(ee,{friends:t})})]})},ne=q(Object(r.lazy)((function(){return n.e(4).then(n.bind(null,96))}))),re=q(Object(r.lazy)((function(){return n.e(3).then(n.bind(null,95))}))),ae=q(Object(r.lazy)((function(){return n.e(5).then(n.bind(null,97))}))),ce=function(){var e=Object(I.b)((function(e){return e.app.initialized})),t=Object(I.a)();return Object(r.useEffect)((function(){t(T())}),[]),e?Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(V,{}),Object(s.jsx)(te,{}),Object(s.jsx)("div",{className:"app-wrapper-content",children:Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/login/",element:Object(s.jsx)(D,{})}),Object(s.jsx)(l.b,{path:"/dialogs/",element:Object(s.jsx)(ne,{})}),Object(s.jsx)(l.b,{path:"/profile/:userId",element:Object(s.jsx)(re,{})}),Object(s.jsx)(l.b,{path:"/users/",element:Object(s.jsx)(ae,{})}),Object(s.jsx)(l.b,{path:"/news/",element:Object(s.jsx)(i,{})}),Object(s.jsx)(l.b,{path:"/music/",element:Object(s.jsx)(o,{})}),Object(s.jsx)(l.b,{path:"/settings/",element:Object(s.jsx)(u,{})})]})})]}):Object(s.jsx)(W.a,{})},se=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,94)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},ie=n(13),oe=n(33),ue=n(44),le=Object(k.c)({name:"sidebar",initialState:{friends:[{id:1,avatar:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",name:"Alexey"},{id:2,avatar:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",name:"Dmitry"},{id:3,avatar:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",name:"Sveta"}]},reducers:{}}).reducer,de=n(35),pe=n(19),fe=Object(ie.b)({profilePage:oe.d,dialogsPage:ue.b,sidebar:le,usersPage:de.d,auth:C,app:E,form:pe.a}),be=Object(k.a)({reducer:fe});window.store=be;var je=n(21),he=function(){c.a.render(Object(s.jsx)(Y.a,{children:Object(s.jsx)(je.a,{store:be,children:Object(s.jsx)(ce,{})})}),document.getElementById("root"))};he(),be.subscribe(he),se()}},[[80,1,2]]]);
//# sourceMappingURL=main.adbb6fc8.chunk.js.map
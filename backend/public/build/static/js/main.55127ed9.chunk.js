(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){"use strict";(function(e){a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a(21),r=a.n(n),o=a(8),l=function(e){return r.a.post("users/register",{first_name:e.first_name,last_name:e.last_name,email:e.email,password:e.password}).then((function(e){console.log("Registered!")}))},c=function(e){return r.a.post("users/login",{email:e.email,password:e.password}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log(e)}))},s=function(e){return r.a.get("users/profile/".concat(e),{}).then((function(e){return console.log(e),e})).catch((function(e){console.log(e)}))},i=function(){return r.a.get("users/logout").then((function(e){return console.log(e),e})).catch((function(e){console.log(e)}))};e.on("uncaughtException",(function(e){console.log(e)}));var u=function(e,t){return r.a.post("users/journal",{email:e}).then((function(e){console.log("res.entries: ",e.data.entries),t(Object(o.l)(e.data.entries)),e.entry||console.log("res: ",e)}))},m=function(e,t){return console.log("entry: ",e),r.a.post("users/templates",e).then((function(e){console.log("res.entry: ",e.data.entry),t(Object(o.n)(e.data.entry)),e.entry||console.log("res: ",e)}))}}).call(this,a(42))},51:function(e,t,a){e.exports=a.p+"static/media/smileyFaces.9ecf0679.png"},52:function(e,t,a){e.exports=a.p+"static/media/userimgplcholder.985f7f0f.png"},53:function(e,t,a){e.exports=a.p+"static/media/smileyFacesGraph.1c25ad53.png"},54:function(e,t,a){e.exports=a.p+"static/media/pussinboots.232b6c8b.jpg"},56:function(e,t,a){e.exports=a(93)},61:function(e,t,a){},8:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"i",(function(){return m})),a.d(t,"l",(function(){return p})),a.d(t,"k",(function(){return h})),a.d(t,"j",(function(){return d})),a.d(t,"n",(function(){return b})),a.d(t,"m",(function(){return f}));var n="SUBMIT_FORM",r="HANDLE_SUBMIT",o="REMOVE_ENTRY",l="SET_TEMPLATE",c="ADD_QUESTION",s="ADD_ANSWER",i="GET_ENTRIES",u="GET_QUESTIONS",m="USER_EMAIL";function p(e){return{type:i,entries:e}}function h(e){return{type:c,question:e}}function d(e){return{type:s,answer:e}}function b(e){return{type:n,newEntry:e}}function f(e){return{type:l,templateID:e}}},86:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),c=(a(61),a(2)),s=a(3),i=a(5),u=a(4),m=a(16),p=a(11),h=a(9),d=a(48),b=a(19),f=a(35),v=a(49),E=a.n(v),g=a(50),y=a(55),O=a(7),j=a(8),N={entries:[],count:0,templateID:"open",questions:[],answers:[],userEmail:null},S=a(24),C=a.n(S),k=a(26),w=a(21),_=a.n(w),x=a(18),A="AUTH/LOGIN",U={isAuthenticated:!1,email:"",loading:!1,error:""},D={first_name:"",last_name:"",favorite_quotes:[],error:"",loading:!1},I=Object(b.c)({entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.i:return Object(O.a)(Object(O.a)({},e),{},{userEmail:t.email});case j.c:return Object(O.a)(Object(O.a)({},e),{},{entries:t.entries});case j.d:return Object(O.a)(Object(O.a)({},e),{},{entries:t.questions});case j.b:var a=e.questions;return a.push(t.question),Object(O.a)(Object(O.a)({},e),{},{questions:a});case j.a:var n=e.answers;return n.push(t.answer),Object(O.a)(Object(O.a)({},e),{},{answers:n});case j.h:var r=e.entries;return r.push(t.newEntry),Object(O.a)(Object(O.a)({},e),{},{entries:r});case j.e:Object(y.a)(e.entries);return{entries:t.entries};case j.f:return Object(O.a)(Object(O.a)({},e),{},{entries:t.entries});case j.g:return Object(O.a)(Object(O.a)({},e),{},{templateID:t.templateID});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(O.a)(Object(O.a)({},U),{},{loading:!0});case"AUTH/LOGIN_SUCCESS":var a=t.payload,n=a.email,r=a.token;return Object(O.a)(Object(O.a)({},U),{},{isAuthenticated:r,email:n,loading:!1});case"AUTH/LOGIN_FAILURE":return Object(O.a)(Object(O.a)({},U),{},{error:t.payload,loading:!1});case"AUTH/LOGOUT":return Object(O.a)({},U);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/GETUSER":return Object(O.a)(Object(O.a)({},D),{},{loading:!0});case"USERS/GETUSER_SUCCESS":var a=t.payload.data,n=a.first_name,r=a.last_name,o=a.favorite_quotes;return Object(O.a)(Object(O.a)({},D),{},{first_name:n,last_name:r,favorite_quotes:o,loading:!1});case"USERS/GETUSER_FAILURE":return Object(O.a)(Object(O.a)({},D),{},{error:t.payload,loading:!1});default:return e}}}),T={key:"root",blacklist:["users"],storage:E.a},G=Object(f.a)(T,I);var q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onLogout=function(){e.props.onLogout(),localStorage.removeItem("usertoken"),e.props.history.push("/")},e}return Object(s.a)(a,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/register",className:"nav-link"},"Register"))),t=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/profile",className:"nav-link"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/journal",className:"nav-link"},"Journal")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/data",className:"nav-link"},"Data")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"",onClick:this.onLogout,className:"nav-link"},"Logout")));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark rounded"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar1","aria-controls":"navbar1","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbar1"},this.props.isAuthenticated?t:e))}}]),a}(n.Component),L={onLogout:function(){return function(){var e=Object(k.a)(C.a.mark((function e(t,a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x.e)();case 3:return e.prev=3,t({type:"AUTH/LOGOUT"}),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})));return function(t,a){return e.apply(this,arguments)}}()}},R=Object(p.f)(q),F=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),L)(R),B=(a(86),a(51)),M=a.n(B),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:3},e.handleOnChange=function(t){e.setState({value:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"emotionSliderDiv"},r.a.createElement("img",{src:M.a,className:"emotionSliderImg",alt:"Emotion Spectrum"}),r.a.createElement("input",{type:"range",min:1,max:5,value:this.state.value,className:"emotionSlider",onChange:this.handleOnChange}))}}]),a}(n.Component),P=a(14),Q=a(23),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onLogin=function(t){e.props.onLogin(t)},e.state={email:"",password:""},e.onChange=e.onChange.bind(Object(Q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(Q.a)(e)),e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.props.isAuthenticated&&this.props.history.push("/profile"),console.log(this.props),console.log(this.state.auth)}},{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();this.state.email,this.state.password;console.log(this.state.email),this.onLogin(this.state),console.log("login button success!")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},console.log(this.state),r.a.createElement(X,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign In")))))}}]),a}(n.Component),V={onLogin:function(e){return function(){var t=Object(k.a)(C.a.mark((function t(a,n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("got to actions!"),t.prev=1,a({type:A}),t.next=5,Object(x.d)(e);case 5:r=t.sent,console.log(r),a({type:"AUTH/LOGIN_SUCCESS",payload:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:"AUTH/LOGIN_FAILURE",payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()}},J=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading,error:e.auth.error}}),V)(W),X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h2",{className:"text-center"}," WELCOME"))))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={first_name:"",last_name:"",email:"",password:""},e.onChange=e.onChange.bind(Object(Q.a)(e)),e.onSubmit=e.onSubmit.bind(Object(Q.a)(e)),e}return Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password};Object(x.f)(a).then((function(e){t.props.history.push("/login")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"first_name"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter First Name",value:this.state.first_name,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"last_name"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),a}(n.Component),Y=(a(87),a(52)),$=a.n(Y),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={listOfGoals:["Go outside!","Take a deep breath!","Go back inside!"]},e.username=function(){return e.props.firstName.charAt(0).toUpperCase()+e.props.firstName.slice(1)+" "+(e.props.lastName.charAt(0).toUpperCase()+e.props.lastName.slice(1))},e.favQuote=function(){return"Favorite quote or affirmation"},e.goalsList=function(){for(var t=[],a=0;a<e.state.listOfGoals.length;a++)t.push(e.state.listOfGoals[a]),t.push(r.a.createElement("br",{key:a}));return console.log(t),t},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"todayDate"}),r.a.createElement("div",{className:"profileInfo"},r.a.createElement("img",{className:"avatar",alt:"User Avatar",src:$.a}),r.a.createElement("b",{className:"userName"},this.username()),r.a.createElement("i",{className:"quote"},this.favQuote()),r.a.createElement("div",{className:"goals"},r.a.createElement("b",null,"Goals"),r.a.createElement("p",null,this.goalsList()))))}}]),a}(n.Component);a(88);var Z=function(){var e=new Date,t=(e=e.toString().split(" ")).slice(0,4);return t=t.join(" "),r.a.createElement("div",{className:"date"},r.a.createElement("p",null,t))},ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onGetUser=function(){e.props.onGetUser()},e.state={first_name:"",last_name:"",email:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.onGetUser(),setTimeout((function(){e.setState({first_name:e.props.first_name,last_name:e.props.last_name})}),300)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(Z,null),r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"PROFILE")),r.a.createElement(K,{firstName:this.state.first_name,lastName:this.state.last_name})))}}]),a}(n.Component),te={onGetUser:function(){return function(){var e=Object(k.a)(C.a.mark((function e(t,a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("got to actions!"),e.prev=1,n=a().auth.email,console.log("email!",n),t({type:"USERS/GETUSER"}),e.next=7,Object(x.c)(n);case 7:r=e.sent,console.log(r),t({type:"USERS/GETUSER_SUCCESS",payload:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:"USERS/GETUSER_FAILURE",payload:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}()}},ae=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,first_name:e.users.first_name,last_name:e.users.last_name,favorite_quote:e.auth.favorite_quote,loading:e.auth.loading,error:e.auth.error}}),te)(ee),ne=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.entryData;e.removeEntry;return console.log("entryData: ",t),r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.body))}}]),a}(n.Component),re=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("running"),this.props.userEmail&&Object(x.b)(this.props.userEmail,this.props.dispatch)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"journalContainer"},r.a.createElement(Z,null),r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h2",{className:"text-center"}," Journal")),r.a.createElement("div",null,this.props.entryData&&this.props.entryData.map((function(t){return r.a.createElement(ne,{entryData:t,removeEntry:e.removeEntry})}))),r.a.createElement(m.b,{to:"/templates"},"Templates")))}}]),a}(n.Component);var oe=Object(h.b)((function(e){return{entryData:e.entries.entries,userEmail:e.entries.userEmail}}))(re),le=(a(91),a(53)),ce=a.n(le),se=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={emotions:[2,2,3,0,1,1,2,4,3,3,2,2,1,2,2,0,0,1,2,2,1,2,4,4,4,3,3,3,2,0],heightMultiplier:100},e.testGraph=function(e){},e.populateGraph=function(e){for(var t=document.createElement("div"),a=document.getElementById("emotionGraph"),n=0;n<e.length;n++)t=document.createElement("div"),0===e[n]?(t.style.backgroundColor="orange",t.style.height="100px"):1===e[n]?(t.style.backgroundColor="green",t.style.height="200px"):2===e[n]?(t.style.backgroundColor="gray",t.style.height="300px"):3===e[n]?(t.style.backgroundColor="blue",t.style.height="400px"):4===e[n]&&(t.style.backgroundColor="red",t.style.height="500px"),t.style.width="20px",t.style.margin="0px",a.appendChild(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.populateGraph(this.state.emotions)}},{key:"render",value:function(){return r.a.createElement("div",{className:"emotionGraphDiv"},r.a.createElement("img",{src:ce.a,className:"emotionGraphImg",alt:"Emotion Spectrum"}),r.a.createElement("div",{id:"emotionGraph"}))}}]),a}(n.Component),ie=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h2",{className:"text-center"},"Data"))),r.a.createElement("div",{id:"data"},r.a.createElement("p",null,"Hello!"),r.a.createElement(se,null)))}}]),a}(n.Component),ue=a(94),me=a(95),pe=a(96),he=a(97),de=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n.submitForm=function(){console.log("****"),console.log(n.props.userEmail),console.log("****");var e=n.state;e.email=n.props.userEmail;var t={entryType:"open",entry:e,email:n.props.userEmail};console.log("BODY: ",t),Object(x.a)(t,n.props.dispatch),n.setState({title:"",body:""})},n.state={title:"",body:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.body;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return console.log(e.state)}},"log"),r.a.createElement("form",null,r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"Title"),r.a.createElement(pe.a,{placeholder:"Enter title",type:"text",name:"title",id:"title",value:a,onChange:this.handleChange})),r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"Entry"),r.a.createElement(pe.a,{placeholder:"What's up?",type:"textarea",name:"body",id:"body",value:n,onChange:this.handleChange}))),r.a.createElement(he.a,{color:"danger",onClick:this.submitForm,size:"lg",block:!0},"Submit"))}}]),a}(n.Component);var be=Object(h.b)((function(e){return{userEmail:e.entries.userEmail}}))(de),fe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).upload=function(){var e=document.getElementById("file"),t=new FormData;t.append("image",e[0]),_.a.post("http://localhost:3000/upload",t,{}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"file-upload"},r.a.createElement("button",{onClick:function(){var e=document.getElementById("file");console.log(e)}},"log"),r.a.createElement("input",{type:"file",id:"file"}),r.a.createElement("button",{onClick:this.upload,className:"upload-button"},"Upload"),r.a.createElement("hr",null))}}]),a}(n.Component),ve=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"photo_container"},r.a.createElement(fe,null),r.a.createElement("br",null),r.a.createElement(be,null))}}]),a}(n.Component),Ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n.submitAnswer=function(){n.props.dispatch(Object(j.j)(n.state)),n.setState({title:"",body:""})},n.state={body:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("running")}},{key:"render",value:function(){var e=this,t=this.state.answerBody;return console.log("answerBody: ",t),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return console.log(e.state)}},"log"),r.a.createElement("form",null,r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"Answer"),r.a.createElement(pe.a,{placeholder:"Answer",type:"textarea",name:"body",id:"body",value:t,onChange:this.handleChange})),r.a.createElement(he.a,{color:"danger",onClick:this.submitQuestion,size:"lg",block:!0},"Add")))}}]),a}(n.Component);var ge=Object(h.b)((function(e){return{questions:e.entries.questions}}))(Ee),ye=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n.submitQuestion=function(){var e={entryType:"qa",entry:n.state};Object(j.k)(e,n.props.dispatch),n.setState({body:""})},n.state={title:"",body:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"Title"),r.a.createElement(pe.a,{placeholder:"Enter title",type:"text",name:"title",id:"title",value:t,onChange:this.handleChange})),r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"Give yourself a question or subject to respond to, or select one from a list of suggestions."),r.a.createElement(pe.a,{placeholder:"How are you feeling today?",type:"textarea",name:"body",id:"body",value:a,onChange:this.handleChange})),r.a.createElement(he.a,{color:"danger",onClick:this.submitQuestion,size:"lg",block:!0},"Add Question")))}}]),a}(n.Component);var Oe=Object(h.b)((function(e){return{questions:e.entries.questions}}))(ye),je=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(P.a)({},a,r))},n.submitAnswer=function(){n.props.dispatch(Object(j.j)(n.state)),n.setState({answerBody:""})},n.state={questions:n.props.questions||[],answerBody:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Q_A_container"},r.a.createElement("h1",null,"Q-A"),r.a.createElement(Oe,null),this.props.questions&&this.props.questions.map((function(t){return r.a.createElement("div",null,r.a.createElement(ge,{entryData:t,removeEntry:e.removeEntry}))})))}}]),a}(n.Component);var Ne=Object(h.b)((function(e){return{questions:e.entries.questions}}))(je),Se=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={photoStyle:"yellow",qaStyle:"yellow",openStyle:"yellow"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filters"},r.a.createElement("button",{to:"/templates",id:"open",style:{backgroundColor:this.state.openStyle},onClick:function(){console.log("running"),e.props.dispatch(Object(j.m)("open")),e.setState({photoStyle:"yellow",qaStyle:"yellow",openStyle:"red"})}},"Open"),r.a.createElement("button",{to:"/photo",style:{backgroundColor:this.state.photoStyle},id:"photo",onClick:function(){e.props.dispatch(Object(j.m)("photo")),e.setState({photoStyle:"red",qaStyle:"yellow",openStyle:"yellow"})}},"Photo"),r.a.createElement("button",{to:"/qa",id:"qa",style:{backgroundColor:this.state.qaStyle},onClick:function(){e.props.dispatch(Object(j.m)("qa")),e.setState({photoStyle:"yellow",qaStyle:"red",openStyle:"yellow"})}},"Q+A"))}}]),a}(n.Component);var Ce=Object(h.b)((function(e){}))(Se),ke=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={selectedFile:null,template:{photo:ve,qa:Ne,open:be}},n}return Object(s.a)(a,[{key:"render",value:function(){console.log("running");var e=this.state.template[this.props.templateID];if(e)return r.a.createElement("div",{className:"template"},r.a.createElement(Z,null),r.a.createElement("a",{href:"http://localhost:3000/journal"}," Back "),r.a.createElement("br",null),r.a.createElement(H,null),r.a.createElement("br",null),r.a.createElement(Ce,null),r.a.createElement(e,{userEmail:this.props.userEmail}))}}]),a}(n.Component);var we=Object(h.b)((function(e){return{templateID:e.entries.templateID,userEmail:e.entries.userEmail}}))(ke),_e=a(54),xe=a.n(_e),Ae=(a(92),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:xe.a,className:"pussInBootsImg",alt:"Picture of cute cat"}),r.a.createElement("h2",null,"I'm sorry this page doesn't exist!"),r.a.createElement(m.b,{to:"/"},"Go Home"))}}]),a}(n.Component)),Ue=function(e){var t=Object(b.e)(G,Object(b.d)(Object(b.a)(g.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return{store:t,persistor:Object(f.b)(t)}}(),De=Ue.store,Ie=Ue.persistor,Te={store:De,persistor:Ie};window.TheraputicWriting=Te;var Ge=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{store:De},r.a.createElement(d.a,{loading:null,persistor:Ie},r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:X}),r.a.createElement(p.a,{exact:!0,path:"/register",component:z}),r.a.createElement(p.a,{exact:!0,path:"/login",component:J}),r.a.createElement(p.a,{exact:!0,path:"/profile",component:ae}),r.a.createElement(p.a,{exact:!0,path:"/journal",component:oe}),r.a.createElement(p.a,{exact:!0,path:"/data",component:ie}),r.a.createElement(p.a,{exact:!0,path:"/templates",component:we}),r.a.createElement(p.a,{path:"*",component:Ae})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.55127ed9.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(25)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),m=t(9),c=t(2),s=t(27),i=t(10);var u=e=>{let{show:a,item:t,onClose:n}=e;if(!a)return null;let r=t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.smallThumbnail;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay-inner"},l.a.createElement("button",{className:"close",onClick:n},l.a.createElement("i",{class:"fas fa-times"})),l.a.createElement("div",{className:"inner-box"},l.a.createElement("img",{src:r,alt:""}),l.a.createElement("div",{className:"info"},l.a.createElement("h1",null,t.volumeInfo.title),l.a.createElement("h3",null,t.volumeInfo.authors),l.a.createElement("h4",null,t.volumeInfo.publisher,l.a.createElement("span",null,t.volumeInfo.publishedDate)),l.a.createElement("br",null),l.a.createElement("a",{href:t.volumeInfo.previewLink},l.a.createElement("button",null,"More")))),l.a.createElement("h4",{className:"description"},t.volumeInfo.description))))};var E=e=>{let{book:a}=e;const[t,n]=Object(i.useState)(!1),[r,o]=Object(i.useState)();return console.log(a),l.a.createElement(l.a.Fragment,null,a.map(e=>{let a=e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail,m=e.saleInfo.listPrice&&e.saleInfo.listPrice.amount;if(void 0!==a&&void 0!==m)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card",onClick:()=>{n(!0),o(e)}},l.a.createElement("img",{src:a,alt:""}),l.a.createElement("div",{className:"bottom"},l.a.createElement("h3",{className:"title"},e.volumeInfo.title),l.a.createElement("p",{className:"amount"},m," z\u0142"))),l.a.createElement(u,{show:t,item:r,onClose:()=>n(!1)}))}))};var d=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)([]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"row2"},l.a.createElement("h2",null,"Find Your Book"),l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"text",placeholder:"Enter Your Book Name",value:e,onChange:e=>a(e.target.value),onKeyPress:a=>{"Enter"===a.key&&s.a.get("/searchBooks?query=".concat(encodeURIComponent(e))).then(e=>r(e.data)).catch(e=>console.log(e))}}),l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-search"}))))),l.a.createElement("div",{className:"container"},l.a.createElement(E,{book:t})))};t(22);var v=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),o=Object(c.o)();return l.a.createElement("div",{className:"login-panel"},l.a.createElement("form",{onSubmit:async a=>{a.preventDefault();try{const a=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}),l=await a.json();a.ok?(console.log("Login successful:",l),o("/main")):(console.error("Login failed:",l.message),alert("Login failed: "+l.message))}catch(n){console.error("Login error:",n),alert("Login error: "+n.message)}}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",id:"username",value:e,onChange:e=>a(e.target.value),required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",value:t,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Log In")))};var g=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[o,m]=Object(n.useState)("");return l.a.createElement("div",{className:"registration-panel"},l.a.createElement("form",{onSubmit:async a=>{a.preventDefault(),console.log("Registering:",e,o,t)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"reg-username"},"Username"),l.a.createElement("input",{type:"text",id:"reg-username",value:e,onChange:e=>a(e.target.value),required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"reg-email"},"Email"),l.a.createElement("input",{type:"email",id:"reg-email",value:o,onChange:e=>m(e.target.value),required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"reg-password"},"Password"),l.a.createElement("input",{type:"password",id:"reg-password",value:t,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Register")))};t(23);var p=()=>l.a.createElement("div",{className:"auth-container"},l.a.createElement(v,null),l.a.createElement(g,null));t(24);var f=function(){return l.a.createElement(m.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",element:l.a.createElement(p,null)})," ",l.a.createElement(c.a,{path:"/main",element:l.a.createElement(d,null)})))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c8de9bc8.chunk.js.map
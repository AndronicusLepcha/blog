(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(28),r=s.n(n),i=(s(34),s(11)),l=s.n(i),o=s(13),j=s(9),b=s(14),d=s.n(b),h=s(0),m=function(e){for(var t=e.postsPerPage,s=e.totalPosts,c=e.paginate,a=[],n=1;n<=Math.ceil(s/t);n++)a.push(n);return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"pagination pagination-sm justify-content-center mt-2 mb-5",children:a.map((function(e){return Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("a",{onClick:function(){return c(e)},className:"page-link",children:e})},e)}))})})},u=s(10),x=s(15),p=s.n(x),O=function(){return Object(h.jsxs)("div",{className:"p-3 mb-4",children:[Object(h.jsx)("h3",{className:"mb-3",children:"About Sachin"}),Object(h.jsxs)("p",{className:"text-muted",children:["If you are reading this, thanks for being here - My name is Sachin Sharma and I'm a final year Diploma student by day and a curious boy by night ( who loves to read, write, travel and explore stuffs). ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"This is the place where I document everything and share it with the world."]})]})},f=function(){return Object(h.jsxs)("div",{className:"p-3 mb-4",children:[Object(h.jsx)("h4",{classNam:"mb-4",children:"Category"}),Object(h.jsxs)("nav",{class:"nav flex-column",children:[Object(h.jsx)("a",{class:"nav-link",href:"#",children:"Books"}),Object(h.jsx)("a",{class:"nav-link",href:"#",children:"Life"}),Object(h.jsx)("a",{class:"nav-link",href:"#",children:"Work"}),Object(h.jsx)("a",{class:"nav-link",href:"#",children:"Travel"})]})]})},v=function(){return Object(h.jsx)("div",{className:"pl-3",children:Object(h.jsx)("form",{method:"get",action:"http://127.0.0.1:8000/api/posts/?search=",children:Object(h.jsxs)("div",{class:"input-group mb-3",children:[Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"Search posts"}),Object(h.jsx)("input",{type:"submit",className:"btn btn-secondary",value:"search"})]})})})},g=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),r=Object(j.a)(n,2),i=(r[0],r[1]),b=Object(c.useState)(1),x=Object(j.a)(b,2),g=x[0],y=x[1],N=Object(c.useState)(8),k=Object(j.a)(N,1)[0];Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,d.a.get("https://jsonplaceholder.typicode.com/posts/");case 3:t=e.sent,a(t.data),i(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=g*k,S=w-k,M=s.slice(S,w);return Object(h.jsx)("div",{className:"container my-4",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-8 col-sm-12",children:[Object(h.jsx)("div",{className:"mb-3",children:Object(h.jsx)("h3",{className:"pl-3",children:"Latest Posts"})}),Object(h.jsx)(v,{}),function(){var e=[],t=[];M.map((function(t){return e.push(Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h3",{className:"card-title post-title",children:[" ",Object(h.jsx)(u.b,{to:"/".concat(t.slug),className:"text-decoration-none",children:t.title})," "]}),Object(h.jsx)("div",{className:"mt-4 mb-5 post-body",dangerouslySetInnerHTML:{__html:(s=t.body,s?s.slice(0,150)+"...":"")}}),Object(h.jsxs)("span",{className:"text-muted",children:["Posted on  ",p()(t.timestamp).format("MMMM D, YYYY")," "]})]}));var s}));for(var s=0;s<e.length;s+=2)t.push(Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:e[s]}),Object(h.jsx)("div",{children:e[s+1]?e[s+1]:null})]},s));return t}(),Object(h.jsx)(m,{postsPerPage:k,totalPosts:s.length,paginate:function(e){return y(e)}})]}),Object(h.jsxs)("div",{className:"col-md-4 col-sm-12",children:[Object(h.jsx)(O,{}),Object(h.jsx)(f,{})]})]})})},y=s(2),N=function(e){var t=Object(c.useState)({}),s=Object(j.a)(t,2),a=s[0],n=s[1];Object(c.useEffect)((function(){var t=e.match.params.id;(function(){var e=Object(o.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://127.0.0.1:8000/api/posts/".concat(t));case 3:s=e.sent,n(s.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);return Object(h.jsx)("div",{className:"col-md-7  m-auto",children:Object(h.jsxs)("div",{className:"my-5",children:[Object(h.jsxs)(u.b,{to:"/blog",className:"text-decoration-none",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),"\xa0 Back to Home"]}),Object(h.jsx)("h2",{className:"mt-3 post-title",children:a.title}),Object(h.jsxs)("p",{className:"mt-3 text-muted",children:["By ",Object(h.jsx)("b",{children:"Sachin Sharma"})," On ",p()(a.timestamp).format("MMMM D, YYYY")]}),Object(h.jsx)("div",{className:"mt-4 mb-5 post-body",dangerouslySetInnerHTML:{__html:a.body}})]})})},k=function(){return Object(h.jsx)("div",{className:"text-center py-4 border-top",children:Object(h.jsxs)("small",{children:[Object(h.jsx)("a",{href:"#",children:"Privacy policy"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(h.jsx)("a",{href:"mailto:krisa1826@gmail.com",children:"Contact"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})})},w=(s(64),function(){return Object(h.jsxs)("div",{className:"bg-light text-center blog-header",children:[Object(h.jsxs)("div",{className:"col-md-6 m-auto",children:[Object(h.jsx)("h1",{className:"mb-4 blog-heading",children:"The Sachin's Blog"}),Object(h.jsx)("p",{className:"text-muted m-auto blog-heading",children:"Exploring & Sharing the things I'm learning from life, work, books and travel. Join my weekly newsletter to be an insider & making sure you don't miss anything."})]}),Object(h.jsxs)("div",{className:"newsletter-form",children:[Object(h.jsx)("div",{id:"revue-embed",children:Object(h.jsxs)("form",{action:"https://www.getrevue.co/profile/sachinshrmaa/add_subscriber",method:"post",id:"revue-form",name:"revue-form",target:"_blank",children:[Object(h.jsx)("input",{className:"revue-form-field newsletter-inp py-3",placeholder:"Your email address...",type:"email",name:"member[email]",id:"member_email"}),Object(h.jsx)("input",{type:"submit",value:"Join",name:"member[subscribe]",id:"member_submit",className:"px-5 btn btn-primary m-2 py-3"})]})}),Object(h.jsxs)("ul",{class:"nav justify-content-center mt-5",children:[Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",target:"blank",href:"https://twitter.com/sachinshrmaa/",children:"Twitter"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",target:"blank",href:"https://facebook.com/sachinshrmaa/",children:"Facebook"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",target:"blank",href:"https://instagram.com/sachinshrmaa/",children:"Instagram"})})]})]})]})});var S=function(){return Object(h.jsxs)(u.a,{children:[Object(h.jsxs)(y.c,{children:[Object(h.jsxs)(y.a,{exact:!0,path:"/blog",children:[Object(h.jsx)(w,{}),Object(h.jsx)(g,{})]}),Object(h.jsx)(y.a,{exact:!0,path:"/:id",component:N})]}),Object(h.jsx)(k,{})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.320b6e8a.chunk.js.map
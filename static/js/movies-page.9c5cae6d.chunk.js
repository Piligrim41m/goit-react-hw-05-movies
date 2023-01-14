"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{342:function(n,e,t){t.d(e,{Z:function(){return A}});var r,i,o,a,c,p,s,u=t(7),d=t.n(u),l=t(87),h=t(689),x=t(17),m=t(168),f=t(934),v=t(624),g=f.Z.li(r||(r=(0,m.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    width: calc((100% - 4 * 10px) / 2);\n    margin: 10px;\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 6 * 10px) / 3);\n  }\n"]))),b=f.Z.p(i||(i=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n\n  color: ",";\n\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"])),v.NN),w=f.Z.img(o||(o=(0,m.Z)(["\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),j=f.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),y=f.Z.p(c||(c=(0,m.Z)(["\n  color: ",";\n"])),v.Dq),Z=f.Z.p(p||(p=(0,m.Z)(["\n  color: ",";\n"])),v.Dq),O=f.Z.span(s||(s=(0,m.Z)(["\n  font-weight: 700;\n"]))),k=t(184);function P(n){var e=n.id,t=n.title,r=n.poster,i=n.voteAverage,o=n.voteCount,a=(0,h.TH)();return(0,k.jsx)(g,{children:(0,k.jsxs)(l.rU,{to:"/movies/".concat(e),state:{from:a},children:[(0,k.jsx)(b,{children:t||"Movie without a title"}),(0,k.jsx)(w,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):x,alt:t}),(0,k.jsxs)(j,{children:[(0,k.jsxs)(y,{children:["Vote average: ",(0,k.jsx)(O,{children:i})]}),(0,k.jsxs)(Z,{children:["Vote count:",(0,k.jsxs)(O,{children:[" ",o]})]})]})]})})}P.prototype={id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number};var _,q=P,C=f.Z.ul(_||(_=(0,m.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"])));function D(n){var e=n.movies;return(0,k.jsx)(C,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster,i=n.voteAverage,o=n.voteCount;return(0,k.jsx)(q,{id:e,title:t,poster:r,voteAverage:i,voteCount:o},e)}))})}D.prototype={movies:d().arrayOf(d().shape({id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number})).isRequired};var A=D},971:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(439),i=t(791),o=t(689),a=t(861),c=t(687),p=t.n(c);function s(){return s=(0,a.Z)(p().mark((function n(e){var t,r,i,o,a,c=arguments;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,r="https://api.themoviedb.org/3/search/movie",i="?api_key=".concat("2353e8cd5ca68dd58881b4daec8c8710","&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"),n.next=6,fetch("".concat(r).concat(i));case 6:return o=n.sent,n.next=9,o.json();case 9:return a=n.sent,n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}var u=function(n){return s.apply(this,arguments)},d=t(142);function l(n,e,t){return(e=(0,d.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var m,f,v,g=t(70),b=t(168),w=t(934),j=t(624),y=w.Z.form(m||(m=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Z=w.Z.input(f||(f=(0,b.Z)(["\n  width: 200px;\n  height: 30px;\n\n  padding: 0 10px 0 10px;\n  margin-right: 15px;\n\n  border: 1px solid ",";\n  border-radius: 4px;\n  outline: none;\n\n  @media (min-width: 768px) {\n    width: 800px;\n  }\n"])),j.Et),O=w.Z.button(v||(v=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100px;\n  height: 30px;\n  margin-bottom: 30px;\n\n  font-size: 15px;\n  font-family: inherit;\n\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: 4px;\n\n  cursor: pointer;\n  transition: background-color ",", color ",";\n\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media (min-width: 768px) {\n    width: 150px;\n  }\n"])),j.Et,j.pU,j.Qo,j.Qo,j.Fd,j.pU),k=t(135),P=t(184);var _=function(){var n=(0,o.TH)(),e=(0,o.s0)();return(0,P.jsx)(g.Z,{children:(0,P.jsxs)(y,{onSubmit:function(t){t.preventDefault();var r=t.target.elements.query.value;e(x(x({},n),{},{search:"query=".concat(r)}))},children:[(0,P.jsx)(Z,{type:"text",name:"query"}),(0,P.jsx)(O,{type:"submit",children:(0,P.jsx)(k.U41,{})})]})})},q=t(342);var C=function(){var n,e=(0,o.TH)().search,t=null!==(n=new URLSearchParams(e).get("query"))&&void 0!==n?n:"",a=(0,i.useState)(null),c=(0,r.Z)(a,2),p=c[0],s=c[1];return(0,i.useEffect)((function(){""!==t&&u(t).then((function(n){var e=n.results,t=[];e.map((function(n){var e={id:n.id,title:n.original_title,poster:n.poster_path,voteAverage:n.vote_average,voteCount:n.vote_count};return t.push(e)})),s(t)}))}),[t]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{}),p&&(0,P.jsx)(g.Z,{isPadding:!0,children:(0,P.jsx)(q.Z,{movies:p})})]})}},17:function(n,e,t){n.exports=t.p+"static/media/poster.f55d248454cd0ab3bc5b.jpg"}}]);
//# sourceMappingURL=movies-page.9c5cae6d.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{866:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),c=t(791),a=t(871),i={list:"Reviews_list__pCzae",name:"Reviews_name__puWkV",text:"Reviews_text__fgYm-",notification:"Reviews_notification__A65Og"},o=t(714),u=t(184);function s(){var e=(0,a.UO)().movieId,n=(0,c.useState)([]),t=(0,r.Z)(n,2),s=t[0],f=t[1];return(0,c.useEffect)((function(){o.Hx(e).then((function(e){return f(e.results)}))}),[e]),(0,u.jsx)(u.Fragment,{children:s.length>0?(0,u.jsx)("ul",{className:i.list,children:s.map((function(e){return(0,u.jsxs)("li",{className:i.item,children:[(0,u.jsxs)("p",{className:i.name,children:["Author: ",(0,u.jsx)("span",{children:e.author})]}),(0,u.jsx)("p",{className:i.text,children:e.content})]},e.id)}))}):(0,u.jsx)("p",{className:i.notification,children:"We don't have any reviews for this movie."})})}},714:function(e,n,t){t.d(n,{Hx:function(){return _},Y5:function(){return h},bI:function(){return p},r1:function(){return u},uV:function(){return m},wr:function(){return l}});var r=t(861),c=t(757),a=t.n(c),i="https://api.themoviedb.org/3/",o="1a4768bd62313a9ba272b58353515c76",u="https://image.tmdb.org/t/p/w500";function s(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function l(){return s("".concat(i,"trending/movie/day?api_key=").concat(o))}function p(e){return s("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function h(e){return s("".concat(i,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function m(e){return s("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function _(e){return s("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=866.3e13c0cc.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[459],{459:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var a=e(885),r=e(791),c=e(871),i=e(692),u="Cast_list__oOD41",o="Cast_item__vxHbm",s="Cast_image__ELqru",f="Cast_icon__XpqHH",l="Cast_name__y8nr9",_=e(714),p=e(184);function m(){var n=(0,r.useState)(null),t=(0,a.Z)(n,2),e=t[0],m=t[1],h=(0,c.UO)().movieId;return(0,r.useEffect)((function(){_.uV(h).then((function(n){return m(n.cast)}))}),[h]),(0,p.jsx)(p.Fragment,{children:e&&(0,p.jsx)("ul",{className:u,children:e.map((function(n){return(0,p.jsxs)("li",{className:o,children:[n.profile_path?(0,p.jsx)("img",{src:_.r1+n.profile_path,alt:n.name,width:"100",height:"150",className:s}):(0,p.jsx)(i.EDj,{className:f}),(0,p.jsx)("p",{className:l,children:n.name})]},n.id)}))})})}},714:function(n,t,e){e.d(t,{Hx:function(){return h},Y5:function(){return p},bI:function(){return _},r1:function(){return o},uV:function(){return m},wr:function(){return l}});var a=e(861),r=e(757),c=e.n(r),i="https://api.themoviedb.org/3/",u="1a4768bd62313a9ba272b58353515c76",o="https://image.tmdb.org/t/p/w500";function s(){return f.apply(this,arguments)}function f(){return f=(0,a.Z)(c().mark((function n(){var t,e,a,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(t,e);case 4:if(!(a=n.sent).ok){n.next=11;break}return n.next=8,a.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return s("".concat(i,"trending/movie/day?api_key=").concat(u))}function _(n){return s("".concat(i,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))}function p(n){return s("".concat(i,"movie/").concat(n,"?api_key=").concat(u,"&language=en-US"))}function m(n){return s("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function h(n){return s("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=459.1771ed6b.chunk.js.map
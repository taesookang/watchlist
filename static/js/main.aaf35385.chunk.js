(this.webpackJsonpwatchlist=this.webpackJsonpwatchlist||[]).push([[0],{87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(38),r=c.n(a),s=c(17),i=c(5),l=c(3),o="data:image/png;base64,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",u=c(7),j=c(14),d=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(j.a)(Object(j.a)({},e),{},{watchlist:[t.payload].concat(Object(u.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(j.a)(Object(j.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(j.a)(Object(j.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(u.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(j.a)(Object(j.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(u.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(j.a)(Object(j.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},b=c(0),h={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},O=Object(n.createContext)(h),p=function(e){var t=Object(n.useReducer)(d,h),c=Object(l.a)(t,2),a=c[0],r=c[1];Object(n.useEffect)((function(){console.log("rendered"),localStorage.setItem("watchlist",JSON.stringify(a.watchlist)),localStorage.setItem("watched",JSON.stringify(a.watched))}),[a]);return Object(b.jsx)(O.Provider,{value:{watchlist:a.watchlist,watched:a.watched,addMovieToWatchlist:function(e){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){r({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){r({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){r({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){r({type:"REMOVE_FROM_WATCHED",payload:e})}},children:e.children})},f=function(e,t){var c=function(c){e.current&&!e.current.contains(c.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",c),function(){document.removeEventListener("click",c)}}))},v=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(O),i=r.watchlist,u=r.watched,j=Object(n.useRef)();return f(j,(function(){a(!1)})),Object(b.jsxs)("header",{ref:j,children:[Object(b.jsxs)("div",{className:"inner-content",children:[Object(b.jsx)("div",{className:"brand",children:Object(b.jsxs)(s.b,{to:"/",children:[Object(b.jsx)("img",{className:"logo",alt:"logo",src:o}),Object(b.jsx)("span",{children:"Moovle"})]})}),Object(b.jsxs)("ul",{className:"nav-links ".concat(c&&"active"),children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",onClick:function(){return a(!1)},children:Object(b.jsxs)("div",{className:"nav-link",children:[Object(b.jsx)("i",{className:"fas fa-video"}),Object(b.jsx)("span",{children:"Movies"})]})})}),Object(b.jsx)("li",{children:Object(b.jsxs)(s.b,{to:"/watchlist",onClick:function(){return a(!1)},children:[Object(b.jsxs)("div",{className:"nav-link",children:[Object(b.jsx)("i",{className:"fas fa-eye"}),Object(b.jsx)("span",{children:"Watch List"})]}),Object(b.jsx)("div",{className:"count",children:i.length})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)(s.b,{to:"/watched",onClick:function(){return a(!1)},children:[Object(b.jsxs)("div",{className:"nav-link",children:[Object(b.jsx)("i",{className:"fas fa-eye-slash"}),Object(b.jsx)("span",{children:"Watched"})]}),Object(b.jsx)("div",{className:"count",children:u.length})]})})]}),Object(b.jsx)("i",{className:"fas fa-bars",onClick:function(){a((function(e){return!e}))}})]}),Object(b.jsx)("i",{className:"fas fa-chevron-up top",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}})]})},m=c(2),x=c.n(m),A=c(4),g=c(16),w=c.n(g),y="346305739fd2191481b6caec12386ff2",N="https://api.themoviedb.org/3",k="".concat(N,"/movie/now_playing"),C="".concat(N,"/movie/top_rated"),E="".concat(N,"/movie"),S="".concat(N,"/genre/movie/list"),M="".concat(N,"/discover/movie"),T="".concat(N,"/search/movie"),W="".concat(N,"/movie/popular"),R=function(){var e=Object(A.a)(x.a.mark((function e(t){var c,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(k,{params:{api_key:y,language:"en_US",page:t}});case 3:return c=e.sent,n=c.data,a=n.results,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(A.a)(x.a.mark((function e(){var t,c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(S,{params:{api_key:y,language:"en_US",page:1}});case 3:return t=e.sent,c=t.data,n=c.genres.map((function(e){return{id:e.id,name:e.name}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(A.a)(x.a.mark((function e(t,c){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(M,{params:{api_key:y,language:"en_US",page:c,with_genres:t}});case 3:return n=e.sent,a=n.data,r=a.results,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),B=function(){var e=Object(A.a)(x.a.mark((function e(t){var c,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(C,{params:{api_key:y,language:"en_US",page:t}});case 3:return c=e.sent,n=c.data,a=n.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(A.a)(x.a.mark((function e(t){var c,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(W,{params:{api_key:y,language:"en_US",page:t}});case 3:return c=e.sent,n=c.data,a=n.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(A.a)(x.a.mark((function e(t){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(E,"/").concat(t,"/videos"),{params:{api_key:y}});case 3:return c=e.sent,n=c.data,e.abrupt("return",n.results[0]);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(A.a)(x.a.mark((function e(t){var c,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(T,{params:{api_key:y,language:"en_US",page:1,query:t}});case 3:return c=e.sent,n=c.data,console.log(t),a=n.results,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),D=c(40),P=c.n(D),Q=function(e){var t=e.movie,c=e.type,a=Object(n.useContext)(O),r=a.addMovieToWatchlist,s=a.addMovieToWatched,i=a.watchlist,l=a.watched,o=a.moveToWatchlist,u=a.removeMovieFromWatchlist,j=a.removeFromWatched,d=i.find((function(e){return e.id===t.id})),h=l.find((function(e){return e.id===t.id})),p=!!d||!!h,f=!!h;return Object(b.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===c&&Object(b.jsxs)("div",{className:"ctrl-btns",children:[Object(b.jsxs)("button",{className:"ctrl-btn",onClick:function(){return s(t)},children:[Object(b.jsx)("i",{className:"fa-fw far fa-eye"}),"Watched"]}),Object(b.jsxs)("button",{className:"ctrl-btn delete",onClick:function(){return u(t.id)},children:[Object(b.jsx)("i",{className:"fa-fw fa fa-times"}),"Delete"]})]}),"watched"===c&&Object(b.jsxs)("div",{className:"ctrl-btns",children:[Object(b.jsxs)("button",{className:"ctrl-btn",onClick:function(){return o(t)},children:[Object(b.jsx)("i",{className:"fa-fw far fa-eye-slash"}),"Watchlist"]}),Object(b.jsxs)("button",{className:"ctrl-btn delete",onClick:function(){return j(t.id)},children:[Object(b.jsx)("i",{className:"fa-fw fa fa-times"}),"Delete"]})]}),"addable"===c&&Object(b.jsxs)("div",{className:"ctrl-btns",children:[Object(b.jsxs)("button",{className:"ctrl-btn",disabled:p,onClick:function(){return r(t)},children:[Object(b.jsx)("i",{className:"fas fa-plus"}),"Watchlist"]}),Object(b.jsxs)("button",{className:"ctrl-btn",disabled:f,onClick:function(){return s(t)},children:[Object(b.jsx)("i",{className:"fa-fw far fa-eye"}),"Watched"]})]})]})},V=function(e){var t=e.popupActive,c=e.handleOnPlay,n=e.isPlaying,a=e.video,r=e.movie,s=e.type,i="https://image.tmdb.org/t/p/w780"+r.backdrop_path;return Object(b.jsxs)("div",{className:"modal ".concat(t&&"active"),children:[Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("div",{className:"modal-video-wrapper",children:a?Object(b.jsx)(P.a,{className:"modal-video",url:"https://www.youtube.com/embed/"+a.key,onPlay:c,playing:n,width:"100%",height:"100%",config:{youtube:{playerVars:{controls:1,iv_load_policy:3}}}}):i.includes("null")?Object(b.jsxs)("div",{className:"no-video",children:[Object(b.jsx)("i",{className:"fas fa-video-slash"}),Object(b.jsx)("h3",{children:" No trailer available "})]}):Object(b.jsx)("img",{className:"filler-video",src:i,alt:""})}),Object(b.jsxs)("div",{className:"modal-info",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h2",{className:"modal-title",children:r.title}),Object(b.jsxs)("div",{className:"release-rates",children:[Object(b.jsx)("span",{className:"release",children:"Release date: ".concat(r.release_date," ")}),Object(b.jsxs)("div",{className:"rates",children:[Object(b.jsx)("i",{className:"fas fa-star"}),Object(b.jsx)("span",{children:r.vote_average?"".concat(r.vote_average," / 10"):"- -"})]})]})]}),Object(b.jsx)("div",{className:"overview-wrapper",children:Object(b.jsx)("p",{className:"overview",children:r.overview})})]}),Object(b.jsx)(Q,{type:s,movie:r})]}),Object(b.jsx)("div",{className:"close",children:Object(b.jsx)("span",{children:"\xd7"})})]})},U=function(e){var t=e.movie,c=e.type,a="https://image.tmdb.org/t/p/w200"+t.poster_path,r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],u=s[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),h=d[0],O=d[1],p=Object(n.useState)(!1),v=Object(l.a)(p,2),m=v[0],g=v[1],w=Object(n.useRef)();f(w,(function(){!0===i&&(u(!i),g(!1))}));var y=function(){var e=Object(A.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".close").addEventListener("click",(function(){u(!1),g(!1)})),u(!0),e.t0=O,e.next=6,G(t.id);case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"movie-card",onClick:y,ref:w,children:[Object(b.jsx)("div",{className:"overlay"}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"poster-wrapper",children:a.includes("null")?Object(b.jsx)("div",{className:"filler-poster",children:Object(b.jsx)("img",{src:o,alt:"filler"})}):Object(b.jsx)("img",{src:a,alt:"".concat(t.title," Poster")})}),Object(b.jsxs)("div",{className:"movie-title",children:[Object(b.jsx)("h3",{children:t.title}),Object(b.jsx)("h4",{children:t.release_date?t.release_date.substring(0,4):"-"})]})]})]}),Object(b.jsx)(V,{popupActive:i,handleOnPlay:function(){g(!0)},isPlaying:m,video:h,movie:t,type:c})]})},H=function(){var e=Object(n.useContext)(O).watchlist;return Object(b.jsx)("div",{className:"movie-page",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"heading",children:"My Watchlist"}),Object(b.jsxs)("span",{className:"count-pill",children:[e.length," ",e.length>1?"movies":"movie"]})]}),e.length>0?Object(b.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(b.jsx)(U,{movie:e,type:"watchlist"},e.id)}))}):Object(b.jsx)("h2",{className:"no-movies",children:"No movies in your list."})]})})},z=function(){var e=Object(n.useContext)(O).watched;return Object(b.jsx)("div",{className:"movie-page",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"heading",children:"Watched Movies"}),Object(b.jsxs)("span",{className:"count-pill",children:[e.length," ",e.length>1?"movies":"movie"]})]}),e.length>0?Object(b.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(b.jsx)(U,{movie:e,type:"watched"},e.id)}))}):Object(b.jsx)("h2",{className:"no-movies",children:"No movies in your list."})]})})},X=c(15),J=function(e){var t=e.handleGenreClick,c=e.selectedGenre,a=e.onArrowClick,r=e.genreOpen,s=Object(n.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(A.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"genres ".concat(r&&"active"),children:[Object(b.jsxs)("div",{className:"genres-header",onClick:a,children:[Object(b.jsx)("span",{children:"Genres"}),Object(b.jsx)("i",{className:"fas fa-chevron-".concat(r?"up":"down"," genres-toggle")})]}),Object(b.jsx)("ul",{children:o.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"genre-btn ".concat(c===e.id&&"selected"),onClick:function(){return t(e.id)},children:e.name})},e.id)}))})]})},q=function(e){var t=e.listByGenre,c=e.fetchMoreMoviesByGenre,n=e.selectedGenre,a=e.pagesGenre;return Object(b.jsx)(X.a,{className:"movie-grid by-genre",dataLength:t.length,hasMore:!0,next:function(){return c(n,a+1)},loader:Object(b.jsx)("div",{className:"loader"}),children:t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(U,{movie:e,type:"addable"})},e.id)}))})},K=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),s=Object(l.a)(r,2),i=s[0],o=s[1];Object(n.useEffect)((function(){(function(){var e=Object(A.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,R(1);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(A.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:c=e.sent,o((function(e){return e+1})),a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(c))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(X.a,{className:"movie-grid",dataLength:c.length,hasMore:!0,next:function(){return j(i+1)},loader:Object(b.jsx)("div",{className:"loader"}),children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(U,{movie:e,type:"addable"})},e.id)}))})})},Y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),s=Object(l.a)(r,2),i=s[0],o=s[1];Object(n.useEffect)((function(){(function(){var e=Object(A.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,B(1);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(A.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:c=e.sent,o((function(e){return e+1})),a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(c))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(X.a,{className:"movie-grid",dataLength:c.length,hasMore:!0,next:function(){return j(i+1)},loader:Object(b.jsx)("div",{className:"loader"}),children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(U,{movie:e,type:"addable"})},e.id)}))})})},Z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),s=Object(l.a)(r,2),i=s[0],o=s[1];Object(n.useEffect)((function(){(function(){var e=Object(A.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,_(1);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(A.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:c=e.sent,o((function(e){return e+1})),a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(c))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(X.a,{className:"movie-grid",dataLength:c.length,hasMore:!0,next:function(){return j(i+1)},loader:Object(b.jsx)("div",{className:"loader"}),children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(U,{movie:e,type:"addable"})},e.id)}))})})},$=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("now-playing"),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(!1),d=Object(l.a)(j,2),h=d[0],O=d[1],p=Object(n.useState)(null),f=Object(l.a)(p,2),v=f[0],m=f[1],g=Object(n.useState)(1),w=Object(l.a)(g,2),y=w[0],N=w[1],k=Object(n.useRef)();Object(n.useEffect)((function(){k.current.focus()}),[]);var C=function(){var e=Object(A.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(t),N(1),e.t0=a,e.next=5,F(t,1);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(A.a)(x.a.mark((function e(t,c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t,c);case 2:n=e.sent,N((function(e){return e+1})),a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(n))}));case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(J,{genreOpen:h,onArrowClick:function(){O((function(e){return!e})),m(null),a([])},handleGenreClick:C,selectedGenre:v}),c.length>0?Object(b.jsx)(q,{listByGenre:c,fetchMoreMoviesByGenre:E,selectedGenre:v,pagesGenre:y}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"lists-wrapper",children:[Object(b.jsx)("button",{className:"btn-list",onClick:function(){return o("now-playing")},ref:k,children:"Now Playing"}),Object(b.jsx)("button",{className:"btn-list",onClick:function(){return o("top-rated")},children:"Top Rated"}),Object(b.jsx)("button",{className:"btn-list",onClick:function(){return o("popular")},children:"Popular"})]}),Object(b.jsx)("ul",{children:"now-playing"===i?Object(b.jsx)(K,{}):"top-rated"===i?Object(b.jsx)(Y,{}):Object(b.jsx)(Z,{})})]})]})},ee=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),i=s[0],o=s[1],u=function(){var e=Object(A.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(t.target.value),e.t0=o,e.next=5,L(t.target.value);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"movie-page",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"add-content",children:[Object(b.jsx)("div",{className:"input-wrapper",children:Object(b.jsx)("input",{type:"text",placeholder:"Search movies",value:c,onChange:u})}),""!==c&&Object(b.jsxs)("h2",{className:"results-with",children:['Results with "',c,'"']}),i.length>0?Object(b.jsx)("ul",{className:"movie-grid search",children:i.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(U,{movie:e,type:"addable"})},e.id)}))}):""!==c?Object(b.jsx)("h1",{className:"no-results",children:"No results found"}):Object(b.jsx)($,{})]})})})};c(87);var te=function(){return Object(b.jsx)(p,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/watchlist",children:Object(b.jsx)(H,{})}),Object(b.jsx)(i.a,{path:"/watched",children:Object(b.jsx)(z,{})}),Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)(ee,{})})]})]})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(88);r.a.render(Object(b.jsx)(te,{}),document.getElementById("root")),ce()}},[[89,1,2]]]);
//# sourceMappingURL=main.aaf35385.chunk.js.map
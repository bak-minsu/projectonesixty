(this.webpackJsonpprojectonesixty=this.webpackJsonpprojectonesixty||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/camera.f027b17e.png"},23:function(e,t,a){e.exports=a.p+"static/media/flower.67d6346c.png"},24:function(e,t,a){e.exports=a.p+"static/media/park.bb0ce5fb.jpg"},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),s=(a(33),a(27)),c=a(11),u=a(12),o=a(17),m=a(13),d=a(18),p=(a(34),a(22)),E=a.n(p),f=a(23),h=a.n(f),A=a(24),g=a.n(A),b=a(8),v=a.n(b),B=a(9),C=a(14),I=a(5);function Q(){return l.a.createElement("header",null,l.a.createElement("div",{id:"toparea",className:"border"},l.a.createElement("h1",null,"HST 160 What-If Project")),l.a.createElement(N,null))}function N(){return l.a.createElement("nav",null,l.a.createElement(k,{icon:l.a.createElement(B.c,null),text:"Home",route:"/"}),l.a.createElement(k,{icon:l.a.createElement(B.d,null),text:"About",route:"/about"}),l.a.createElement(k,{icon:l.a.createElement(B.b,null),text:"Sources",route:"/sources"}))}function k(e){var t=e.text,a=e.route,n=e.icon;return l.a.createElement(C.b,{to:a},l.a.createElement("div",{className:"nav-button"},n,l.a.createElement("p",null,t)))}function M(e){var t=e.children,a="content-div "+e.otherClasses;return l.a.createElement("div",{className:a},t)}function S(e){var t=e.image,a=e.alt;return l.a.createElement("div",{className:"img-div"},l.a.createElement("img",{src:t,alt:a}))}function R(e){var t=e.children;return l.a.createElement("h1",{className:"title"},t)}function y(e){var t=e.children;return l.a.createElement("p",{className:"text-content"},t)}function w(){return l.a.createElement(M,{otherClasses:"main-content border"},l.a.createElement(R,null,"What If?"),l.a.createElement(y,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada libero, eget laoreet lectus. Aliquam finibus dapibus ligula, sit amet tincidunt dui posuere non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer porttitor tempus tortor ut dictum. Maecenas placerat orci sit amet nisi luctus, porta euismod ipsum sagittis. Nullam nec malesuada diam. Suspendisse eget ante urna."),l.a.createElement(S,{image:E.a,alt:"camera"}),l.a.createElement(y,null,"Ut aliquet felis feugiat lorem posuere, id vulputate leo fermentum. Suspendisse vestibulum dolor odio, vitae sollicitudin quam mattis id. Etiam eget eleifend est. Aliquam at iaculis justo. Aenean pulvinar molestie eleifend. Aliquam egestas dignissim mollis. Suspendisse semper risus quis neque ultrices ultricies."),l.a.createElement(S,{image:h.a,alt:"flower"}),l.a.createElement(y,null,"Nunc at magna eleifend, luctus lorem vel, bibendum odio. Quisque egestas quam faucibus libero cursus rutrum. Sed a metus placerat, pulvinar nisi at, finibus urna. Duis malesuada quis felis vel tempus. Morbi massa ex, aliquet eget erat eu, tincidunt pulvinar nunc. Quisque lorem est, sollicitudin eget sagittis vitae, faucibus aliquam sapien. Pellentesque vulputate neque diam, ac cursus lorem commodo nec. Curabitur et mauris vitae felis fermentum iaculis. Sed eu urna at nibh convallis sagittis ut eget neque. Vivamus fringilla mauris blandit felis maximus, vel efficitur nisi condimentum. Aliquam vel purus augue. Fusce nulla quam, tempor ac sagittis vel, luctus at quam. Mauris sagittis ac sem vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas urna risus, sit amet rutrum est mollis vitae."))}function q(){return l.a.createElement(M,{otherClasses:"about-content border"},l.a.createElement(R,null,"About Our Team"),l.a.createElement(O,null))}var O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={selected:null},e.lastNameMap={henderson:{image:v.a,name:"Naomi Henderson",title:"Content Writer",description:"N/A"},luft:{image:v.a,name:"Timothy Luft",title:"Storyboard Designer",description:"N/A"},mccauley:{image:v.a,name:"Ryan McCauley",title:"Website Designer",description:"N/A"},park:{image:g.a,name:"Min Su Park",title:"Web Developer",description:"N/A"},yao:{image:v.a,name:"Rachel Yao",title:"Lead Cartoonist",description:"N/A"}},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"openDescription",value:function(e){null===this.state.selected?this.setState({selected:e}):this.state.selected===e?this.setState({selected:null}):this.setState({selected:e})}},{key:"description",value:function(){return l.a.createElement(F,{hidden:null===this.state.selected,lastname:this.state.selected,lastNameMap:this.lastNameMap})}},{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var i,r=["henderson","luft","mccauley","park","yao"].entries()[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var c=Object(s.a)(i.value,2),u=c[0],o=c[1],m=this.state.selected===o;e.push(l.a.createElement(x,{selected:m,lastname:o,onClick:this.openDescription.bind(this,o),lastNameMap:this.lastNameMap,key:u}))}}catch(d){a=!0,n=d}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}return l.a.createElement("div",{id:"description-div"},l.a.createElement("div",{id:"authors"},e),this.description())}}]),t}(l.a.Component);function x(e){var t=e.selected,a=e.lastname,n=e.onClick,i=e.lastNameMap,r=i[a].image,s=i[a].name,c=t?"selected":"";return l.a.createElement("button",{className:"author-button",onClick:n},l.a.createElement("div",{className:"author-picture "+c},l.a.createElement("img",{src:r,alt:a})),l.a.createElement("p",{className:"author-name"},s))}function F(e){var t=e.lastname,a=e.lastNameMap,n=null,i=null,r=null,s=null;return e.hidden?n="hidden-description":(i=a[t].name,r=a[t].title,s=a[t].description,n=""),l.a.createElement("div",{className:"about-description "+n},l.a.createElement("h2",null,i),l.a.createElement("h3",null,r),l.a.createElement("p",null,s))}function H(){return l.a.createElement("div",{id:"sources-div"},l.a.createElement(M,{otherClasses:"sources-content border"},l.a.createElement(R,null,"Source 1"),l.a.createElement(y,null)),l.a.createElement(M,{otherClasses:"sources-content border"},l.a.createElement(R,null,"Source 2"),l.a.createElement(y,null)),l.a.createElement(M,{otherClasses:"sources-content border"},l.a.createElement(R,null,"Source 3"),l.a.createElement(y,null)))}var j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("go-top");e.onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"}}},{key:"render",value:function(){return l.a.createElement("button",{id:"go-top",title:"Go to the Top"},l.a.createElement(B.a,null))}}]),t}(l.a.Component);function G(){return l.a.createElement("footer",{className:"footer"},"Copyright \xa9 2020")}var L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C.a,null,l.a.createElement(Q,null),l.a.createElement(I.c,null,l.a.createElement(I.a,{exact:!0,path:"/",component:w}),l.a.createElement(I.a,{exact:!0,path:"/about",component:q}),l.a.createElement(I.a,{exact:!0,path:"/sources",component:H})),l.a.createElement(j,null),l.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t){e.exports="data:image/png;base64,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"}},[[28,1,2]]]);
//# sourceMappingURL=main.0b18d2ba.chunk.js.map
(this.webpackJsonpcolors=this.webpackJsonpcolors||[]).push([[0],{22:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);a(23);var c=a(0),o=a.n(c),r=a(9),n=a.n(r),l=a(5),s=a(4),i=a(11),m=Object(i.b)({name:"theme",initialState:{value:"dark"},reducers:{toggle:function(e){e.value="dark"===e.value?"light":"dark"}}}),u=function(e){return e.theme.value},d=m.actions.toggle,f=m.reducer,h=Object(i.a)({reducer:{theme:f}}),E=(a(35),a(36),a(37),a(10)),v=a(8);a(41);function p(e){var t=e.className,a=Object(s.b)(),c=Object(s.c)(u);return o.a.createElement("div",{className:"colors-theme-chooser ".concat(t),onClick:function(){return a(d())}},o.a.createElement(E.a,{icon:"light"===c?v.c:v.b,size:"lg"}))}function b(e){var t=e.showBack,a=e.children;return o.a.createElement("div",{className:"colors-header"},o.a.createElement("div",{className:"colors-header__wrapper"},t&&o.a.createElement("div",{className:"colors-header__showback",onClick:function(){return window.history.back()}},o.a.createElement(E.a,{icon:v.a,size:"lg"})),o.a.createElement("div",{className:"colors-header__title"},"Colors"),o.a.createElement("div",{className:"colors-header__extra"},a),o.a.createElement(p,{className:"colors-header__themechooser"})))}var _=a(21);a(42);function N(e){return"/info/".concat(encodeURIComponent(e))}function k(e){var t=e.className,a=e.label,r=Object(c.useState)(""),n=Object(_.a)(r,2),s=n[0],i=n[1],m=Object(l.c)();return o.a.createElement("div",{className:"colors-colorinput ".concat(t)},o.a.createElement("input",{className:"colors-colorinput__input",value:s,onChange:function(e){return i(e.target.value)}}),o.a.createElement("button",{className:"colors-colorinput__button",onClick:function(){s&&m(N(s))}},a))}function w(e){var t=e.showBack,a=e.className,c=e.children,r=Object(s.c)(u);return o.a.createElement("div",{className:"colors-view colors-".concat(r,"-theme ").concat(a)},o.a.createElement(b,{showBack:t},o.a.createElement(k,{className:"colors-view-colorinput",label:"Analizar"})),o.a.createElement("div",{className:"colors-view__scrollview"},o.a.createElement("div",{className:"colors-view__content"},c)))}a(43);function g(e){var t=e.mode,a=void 0===t?"large":t,c=e.color;return o.a.createElement("div",{className:"colors-tile colors-tile--".concat(a)},o.a.createElement("div",{className:"colors-tile__color",style:{backgroundColor:c}}),o.a.createElement("div",{className:"colors-tile__caption"},c))}var C=["#e0ece4","#ff4b5c","#056674","#66bfbf","#f1f3de","#eb8f8f","#ec0101","#cd0a0a","#ffc93c","#07689f","#40a8c4","#a2d5f2","#ff7171","#ffaa71","#6e6d6d"];function x(e){var t=e.mode,a=void 0===t?"large":t,c=e.colors,r=void 0===c?C:c;return o.a.createElement("div",{className:"colors-tileset"},r.map((function(e,t){return o.a.createElement(l.a,{key:t,to:N(e)},o.a.createElement(g,{color:e,mode:a}))})))}function j(){return o.a.createElement(w,null,o.a.createElement(x,null))}a(44);var O=a(3),y=a.n(O);function B(e,t){for(var a=y()(e),c=[a.hex()],o=1;o<11;o++)c.push(t.call(a,o/10).hex());return c}function z(e){var t=e.color;return o.a.createElement(x,{mode:"compact",colors:B(t,y.a.prototype.darken)})}function I(e){var t=e.color;return o.a.createElement(x,{mode:"compact",colors:B(t,y.a.prototype.whiten)})}function S(e){var t=e.color;return o.a.createElement(x,{mode:"compact",colors:[t,y()(t).rotate(180).hex()]})}function A(e){var t=e.color;return o.a.createElement(x,{mode:"compact",colors:[t,y()(t).rotate(120).hex(),y()(t).rotate(240).hex()]})}function J(e){var t=e.color;return o.a.createElement(x,{mode:"compact",colors:[t,y()(t).rotate(30).hex(),y()(t).rotate(330).hex()]})}function R(e){var t=e.color,a=y()(decodeURIComponent(t)).hex();return o.a.createElement(w,{showBack:!0},o.a.createElement("h3",null,"Analogous Colors"),o.a.createElement(J,{color:a}),"/>",o.a.createElement("h3",null,"Triadic Colors"),o.a.createElement(A,{color:a}),o.a.createElement("h3",null,"Complementary Color"),o.a.createElement(S,{color:a}),o.a.createElement("h3",null,"Shades of ",a),o.a.createElement(z,{color:a}),o.a.createElement("h3",null,"Tints of ",a),o.a.createElement(I,{color:a}))}n.a.render(o.a.createElement(s.a,{store:h},o.a.createElement(l.b,{basepath:"/colors"},o.a.createElement(R,{path:"/info/:color"}),o.a.createElement(j,{path:"/"}))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c1d951a5.chunk.js.map
(this["webpackJsonpthe-fed"]=this["webpackJsonpthe-fed"]||[]).push([[8],{124:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(30),a=t(6),c=t(0),o=t.n(c),i=t(15),l=(t(1),t(2)),u=t(3),s=t(14);o.a.Component;o.a.Component;var f=function(e,n){return"function"===typeof e?e(n):e},m=function(e,n){return"string"===typeof e?Object(i.c)(e,null,null,n):e},h=function(e){return e},d=o.a.forwardRef;"undefined"===typeof d&&(d=h);var b=d((function(e,n){var t=e.innerRef,r=e.navigate,a=e.onClick,c=Object(u.a)(e,["innerRef","navigate","onClick"]),i=c.target,s=Object(l.a)({},c,{onClick:function(e){try{a&&a(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=h!==d&&n||t,o.a.createElement("a",s)}));var p=d((function(e,n){var t=e.component,a=void 0===t?b:t,c=e.replace,i=e.to,p=e.innerRef,v=Object(u.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var t=e.history,r=m(f(i,e.location),e.location),u=r?t.createHref(r):"",b=Object(l.a)({},v,{href:u,navigate:function(){var n=f(i,e.location);(c?t.replace:t.push)(n)}});return h!==d?b.ref=n||p:b.innerRef=p,o.a.createElement(a,b)}))})),v=function(e){return e},g=o.a.forwardRef;"undefined"===typeof g&&(g=v);g((function(e,n){var t=e["aria-current"],a=void 0===t?"page":t,c=e.activeClassName,i=void 0===c?"active":c,h=e.activeStyle,d=e.className,b=e.exact,j=e.isActive,y=e.location,O=e.strict,w=e.style,x=e.to,E=e.innerRef,F=Object(u.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var t=y||e.location,c=m(f(x,t),t),u=c.pathname,k=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=k?Object(r.f)(t.pathname,{path:k,exact:b,strict:O}):null,A=!!(j?j(N,t):N),R=A?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}(d,i):d,C=A?Object(l.a)({},w,{},h):w,D=Object(l.a)({"aria-current":A&&a||null,className:R,style:C,to:c},F);return v!==g?D.ref=n||E:D.innerRef=E,o.a.createElement(p,D)}))}))},134:function(e,n,t){"use strict";var r=t(8),a=t(41),c=t(29),o=t(142),i=t(0),l=t.n(i),u=t(143),s=t(127),f=t(40),m=t(52),h=t(139);function d(){var e=Object(o.a)(["\n    display: inline-block;\n"]);return d=function(){return e},e}function b(){var e=Object(o.a)(["\n    fill: ",";\n\n    ",":hover &,\n    ",":focus & {\n        fill: ",";\n    }\n"]);return b=function(){return e},e}function p(){var e=Object(o.a)(["\n    fill: ",";\n\n    ",":hover &,\n    ",":focus & {\n        fill: ",";\n    }\n"]);return p=function(){return e},e}function v(){var e=Object(o.a)(["\n    height: 20px;\n    width: 20px;\n    margin: 0 0.5em;\n"]);return v=function(){return e},e}function g(){var e=Object(o.a)(["\n    color: ",";\n    font-weight: normal;\n    margin: 0;\n\n    ","\n"]);return g=function(){return e},e}function j(){var e=Object(o.a)(["\n            margin-right: 0.25em;\n        "]);return j=function(){return e},e}function y(){var e=Object(o.a)(["\n    color: ",";\n    transition: transform 0.2s ease;\n    ","\n\n    ","\n"]);return y=function(){return e},e}function O(){var e=Object(o.a)(["\n    ",":hover &,\n    ",":focus & {\n        color: ",";\n        cursor: pointer;\n    }\n"]);return O=function(){return e},e}function w(){var e=Object(o.a)(["\n    ","\n    color: ",";\n    font-weight: bold;\n    text-align: center;\n    min-height: 38px;\n    padding: 0.75em 1em;\n    height: 100%;\n    width: 100%;\n\n    &:hover,&:focus {\n        background: ",";\n        color: ",";\n        text-decoration: none;\n    }\n\n    &:active {\n        opacity: 0.5;\n    }\n"]);return w=function(){return e},e}function x(){var e=Object(o.a)(["\n    ","\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n"]);return x=function(){return e},e}function E(){var e=Object(o.a)(["\n    font-size: 0.75rem;\n    color: ",";\n    background: ",";\n    border-top: 1px solid #eee;\n    ","\n    z-index: 5;\n    position: relative;\n\n    @media only screen and (max-width: 925px) {\n        flex-direction: column;\n    }\n"]);return E=function(){return e},e}function F(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return F=function(){return e},e}var k="#498200",N=Object(u.a)(F()),A=Object(u.b)(s.a)(E(),"#AAA","#FFF",N),R=u.b.div(x(),N),C=u.b.a(w(),N,"#000",(function(e){return e.color}),"#FFF"),D=Object(u.a)(O(),C,C,"#FFF"),z=Object(u.b)(f.a)(y(),(function(e){return e.color}),(function(e){return e.sibling&&Object(u.a)(j())}),D),M=function(e){var n=e.children,t=e.icon,r=e.color,a=Object(c.a)(e,["children","icon","color"]);return l.a.createElement(C,Object.assign({target:"_blank",rel:"noopener noreferrer",color:r},a),t&&l.a.createElement(z,{icon:t,color:r,sibling:n,size:"lg",fixedWidth:!0}),n)};M.defaultProps={children:void 0,icon:void 0,color:"#000"};var P=u.b.label(g(),"#AAA",D),_=u.b.svg(v()),I=u.b.path(p(),"#FFF",C,C,k),T=u.b.path(b(),k,C,C,"#FFF"),B=Object(u.b)(M)(d()),H=function(e){var n=e.url,t=e.handle,r=e.text,a=e.hashtags;return encodeURI("".concat("https://twitter.com","/intent/tweet?url=").concat(n,"&via=").concat(t,"&text=").concat(r,"&hashtags=").concat(a.map((function(e){return"#".concat(e)}))))},K=function(e){var n=e.homepage,t=e.tweet,o=e.items,i=Object(c.a)(e,["homepage","tweet","items"]),u=[{children:l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"A project by"),l.a.createElement(_,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{fill:"none"},l.a.createElement(I,{fill:"#FFF",d:"M0 0h512v512H0z"}),l.a.createElement(T,{fill:k,d:"M512 0v512H0V0h512zM256.828 81h-2.69c-1.346 0-1.915 2.922-1.915 2.922-10.405 2.181-15.049 14.172-16.735 20.185l-11.524 9.562-3.506 2.637-.345.087c-.676.181-2.304.672-4.507 1.697a11.592 11.592 0 00-3.734-.626c-6.387 0-11.561 5.179-11.561 11.572 0 .323.019.645.038.949l-.471.568c-7.68 9.408-14.578 24.772-14.578 49.573l-.222.909c-1.493 5.881-10.534 37.781-27.108 20.586l-41.64-48.207-.058-.715c-.28-3.744-1.256-21.3 4.057-31.025 3.052-.626 5.345-3.32 5.345-6.545 0-3.68-2.994-6.678-6.671-6.678s-6.672 2.997-6.672 6.678c0 1.062.247 2.067.702 2.96l-.426.713c-3.834 6.55-8.889 18.395-4.066 29.64L90.78 128.75c.38-.853.607-1.783.607-2.77 0-3.68-2.994-6.678-6.671-6.678s-6.672 2.998-6.672 6.678a6.67 6.67 0 006.274 6.66l17.057 20.11-.872.447c-3.137 1.574-14.022 6.712-20.715 5.794a6.676 6.676 0 00-6.444-4.951c-3.677 0-6.671 2.997-6.671 6.678 0 3.68 2.994 6.678 6.671 6.678a6.634 6.634 0 005.269-2.58l.908.098c5.577.58 16.692 1.265 25.114-1.085l40.351 52.113.169.48c1.76 4.869 17.284 44.581 46.038 15.798l-.236.722c-2.003 6.286-15.42 52.137 9.997 79.395l-.975-.514c-8.417-4.372-68.432-34.159-65.4 7.021l.51 1.39c3.004 8.06 18.817 48.563 34.63 52.68l.032.294c.183 2.13.274 14.407-26.055-11.372l-13.021-9.77-11.846-28.458a6.67 6.67 0 003.98-6.11c0-3.68-2.994-6.677-6.671-6.677s-6.671 2.997-6.671 6.678c0 2.03.91 3.85 2.33 5.065v8.651l-11.617-11.63c1.497-1.233 2.464-3.092 2.464-5.179 0-3.68-2.995-6.678-6.672-6.678-3.677 0-6.671 2.998-6.671 6.678a6.67 6.67 0 003.98 6.11l6.16 18.516-21.531-15.557c.095-.455.151-.93.151-1.404 0-3.68-2.994-6.678-6.671-6.678s-6.671 2.998-6.671 6.678c0 3.68 2.994 6.678 6.671 6.678.436 0 .872-.038 1.289-.133l18.953 20.186-21.796 8.424a6.585 6.585 0 00-3.166-.797c-3.676 0-6.671 2.997-6.671 6.678 0 3.68 2.995 6.678 6.671 6.678 3.677 0 6.672-2.998 6.672-6.678 0-.152 0-.323-.02-.475l.581-.254c7.056-3.068 20.706-8.023 26.826-3.52l25.378 19.123 1.105 1.225c9.554 10.507 77.947 83.86 82.193 35.39l-7.808-45.589.643.443c4.756 3.237 34.515 22.79 42.687 11.035l.262-.398s-2.161 14.323 10.31 18.231c12.471-3.908 10.31-18.231 10.31-18.231 8.454 13.678 43.592-11.08 43.592-11.08l-7.808 45.59c4.548 52.112 83.298-36.616 83.298-36.616l25.378-19.124c6.312-4.629 20.564.74 27.406 3.775l-.019.475c0 3.68 2.995 6.678 6.672 6.678 3.676 0 6.671-2.998 6.671-6.678-.019-3.662-2.995-6.66-6.671-6.66a6.637 6.637 0 00-3.163.797l-21.796-8.423 18.953-20.186a7.24 7.24 0 001.289.133c3.677 0 6.671-2.998 6.671-6.678 0-3.68-2.994-6.678-6.671-6.678s-6.671 2.997-6.671 6.678c0 .493.056.949.151 1.404l-21.53 15.557 6.16-18.517c2.33-1.043 3.98-3.377 3.98-6.109 0-3.68-2.995-6.678-6.672-6.678-3.677 0-6.672 2.998-6.672 6.678 0 2.087.967 3.946 2.464 5.18l-11.618 11.63v-8.652c1.422-1.233 2.331-3.035 2.331-5.065 0-3.68-2.994-6.678-6.671-6.678s-6.671 2.997-6.671 6.678a6.67 6.67 0 003.98 6.108l-11.846 28.458-13.02 9.77c-28.638 28.003-26.042 11.08-26.042 11.08 17.57-4.553 35.139-54.07 35.139-54.07 3.26-44.3-66.375-6.508-66.375-6.508 27.33-29.311 9.76-80.117 9.76-80.117 30.59 30.62 46.208-16.278 46.208-16.278l40.35-52.113c8.908 2.486 20.83 1.556 26.023.987a6.634 6.634 0 005.269 2.58c3.677 0 6.671-2.998 6.671-6.678 0-3.68-2.994-6.678-6.671-6.678a6.676 6.676 0 00-6.444 4.951c-7.884 1.082-21.606-6.242-21.606-6.242l17.057-20.11c3.488-.208 6.274-3.11 6.274-6.659 0-3.68-2.995-6.678-6.672-6.678-3.676 0-6.671 2.998-6.671 6.678 0 .987.227 1.935.606 2.77l-17.74 19.674c5.004-11.667-.625-23.98-4.491-30.355a6.737 6.737 0 00.701-2.96c0-3.68-2.994-6.677-6.671-6.677s-6.672 2.997-6.672 6.678c0 3.225 2.294 5.919 5.345 6.545 5.97 10.947 3.98 31.74 3.98 31.74l-41.64 48.207c-18.213 18.896-27.33-21.495-27.33-21.495 0-25.327-7.183-40.789-15.048-50.141.019-.323.038-.626.038-.949 0-6.393-5.174-11.572-11.562-11.572-1.307 0-2.558.208-3.733.626l-.539-.245c-2.628-1.172-4.294-1.539-4.294-1.539l-3.525-2.637-11.524-9.562-.222-.76c-1.868-6.21-6.53-17.332-16.513-19.425l-.045-.2c-.157-.66-.74-2.722-1.87-2.722z"}))),"IMRD"),href:n,color:k}].concat(Object(a.a)(o));return l.a.createElement(A,Object.assign({as:"footer",role:"contentinfo",fixed:"bottom"},i),u.map((function(e){return l.a.createElement(R,{key:e.href||"SocialLinks"},Array.isArray(e)?e.map((function(e){return l.a.createElement(B,Object.assign({key:e.href},e))})):l.a.createElement(M,Object(r.a)({},e,{},e.isTwitterIntent?{href:H(t)}:{})))})))},S="https://memetic.institute",W={url:"https://thefed.app",text:"Play as Jerome Powell and see if you can print faster at the @federalreserve:",handle:"memetic_insti2t",hashtags:["brrr"]},J=[{children:"More Memes",href:"".concat(S,"/projects"),icon:m.d,color:"#700fdd"},{children:"Donate",href:"".concat(S,"/gib"),icon:h.a,color:"#f90"},{children:"Share",className:"share-twitter",href:H(W),icon:m.g,color:"#1DA1F2",isTwitterIntent:!0},[{title:"Twitter",href:"".concat("https://twitter.com","/").concat(W.handle),icon:h.f,color:"#1DA1F2"},{title:"Facebook",href:"https://fb.me/institute.for.memetic.research.and.development",icon:h.c,color:"#4267B2"},{title:"Discord",href:"https://discord.gg/mUxVBb4",icon:h.b,color:"#7289DA"},{title:"Patreon",href:"https://www.patreon.com/memeticinstitute",icon:h.e,color:"#f96854"},{title:"GitHub",href:"https://github.com/memetic-institute/The-Fed",icon:h.d,color:"#000"}]];K.defaultProps={homepage:S,tweet:W,items:J},n.a=K},194:function(e,n,t){e.exports={link:"NotFound_link__22Uww"}},199:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(61),o=t.n(c),i=t(4),l=t.n(i),u=t(124),s=t(127),f=t(206),m=t(196),h=t(40),d=t(52),b=t(56),p=t(134),v=t(194),g=t.n(v);n.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"Not Found"}),a.a.createElement(b.a,null),a.a.createElement(s.a,{className:l()("py-5","text-center")},a.a.createElement(f.a,{body:!0,className:l()("main-card","p-3")},a.a.createElement(h.a,{icon:d.f,size:"5x",className:"mb-4"}),a.a.createElement("h1",null,a.a.createElement("span",{className:"text-danger"},"404:")," We Lost The Records"),a.a.createElement("p",{className:"mb-4"},"We couldn't find the page you were looking for. It probably never existed, and you should not ask any questions."),a.a.createElement(m.a,{as:u.a,to:"/",variant:"primary",type:null,className:g.a.link},a.a.createElement(h.a,{icon:d.a,fixedWidth:!0,className:"mr-2"}),"Back to Game")),a.a.createElement(f.a,{as:"footer",body:!0,className:l()("main-card","mt-4")},a.a.createElement(p.a,null))))}}}]);
//# sourceMappingURL=8.385084f8.chunk.js.map
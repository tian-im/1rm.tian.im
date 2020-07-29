(this.webpackJsonp1rm=this.webpackJsonp1rm||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=a(4),i=a(7),m=(a(16),a(17),{modal:{title:"Brzycki",body:r.a.createElement("img",{alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f"})},getOneRm:function(e,t){return e*(36/(37-t))},getPercentage:function(e){return 1/(36/(37-e))},getWeight:function(e,t){return e/(36/(37-t))}}),s={Epley:{modal:{title:"Epley",body:r.a.createElement("span",null,r.a.createElement("img",{className:"inline",alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/d6b2b0a5969fc4d1cc15870a866de150f4459198"}),"\xa0 assuming r > 1.")},getOneRm:function(e,t){return 1===t?e:e*(1+t/30)},getPercentage:function(e){return 1===e?1:1/(1+e/30)},getWeight:function(e,t){return 1===t?e:e/(1+t/30)}},Brzycki:m,Lombardi:{modal:{title:"Lombardi",body:r.a.createElement("img",{alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f"})},getOneRm:function(e,t){return e*Math.pow(t,.1)},getPercentage:function(e){return 1/Math.pow(e,.1)},getWeight:function(e,t){return e/Math.pow(t,.1)}},Mayhew:{modal:{title:"Mayhew et al.",body:r.a.createElement("img",{alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f"})},getOneRm:function(e,t){return 100*e/(52.2+41.9*Math.pow(Math.E,-.05*t))},getPercentage:function(e){return 1/(100/(52.2+41.9*Math.pow(Math.E,-.05*e)))},getWeight:function(e,t){return e/(100/(52.2+41.9*Math.pow(Math.E,-.05*t)))}},McGlothin:{modal:{title:"McGlothin",body:r.a.createElement("img",{alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f"})},getOneRm:function(e,t){return 100*e/(101.3-2.67123*t)},getPercentage:function(e){return 1/(100/(101.3-2.67123*e))},getWeight:function(e,t){return e/(100/(101.3-2.67123*t))}},OConner:{modal:{title:"O'Conner et al.",body:r.a.createElement("img",{alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f"})},getOneRm:function(e,t){return e*(1+t/40)},getPercentage:function(e){return 1/(1+e/40)},getWeight:function(e,t){return e/(1+t/40)}},Wathen:{modal:{title:"Wathen",body:r.a.createElement("img",{alt:"formula",src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/3800b95ebbfa1ff3a2d54e3ed9be024300ddc57f"})},getOneRm:function(e,t){return e*(100/(48.8+53.8*Math.pow(Math.E,-.075*t)))},getPercentage:function(e){return 1/(100/(48.8+53.8*Math.pow(Math.E,-.075*e)))},getWeight:function(e,t){return e/(100/(48.8+53.8*Math.pow(Math.E,-.075*t)))}}},u=Object.keys(s),d=["kg","lb"],g={weight:100,rep:1,unit:d[0],max:15,formula:u[0]},f={};function p(){return r.a.createElement("nav",{class:"bg-blue-500 flex flex-wrap items-center justify-between md:fixed md:left-0 md:right-0 p-6"},r.a.createElement("div",{class:"flex flex-shrink-0 items-center mr-6 text-white"},r.a.createElement("span",{class:"tracking-tight text-xl font-semibold"},"tian.im")),r.a.createElement("div",{class:"block lg:hidden"},r.a.createElement("button",{class:"border border-teal-400 flex hover:border-white hover:text-white items-center px-3 py-2 rounded text-teal-200"},r.a.createElement("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{class:"block flex-grow lg:flex lg:items-center lg:w-auto w-full"},r.a.createElement("div",{class:"lg:flex-grow text-sm"},r.a.createElement("a",{href:"https://tian.im",class:"block hover:text-white lg:inline-block lg:mt-0 mr-4 mt-4 text-teal-200"},"Home"))))}var b=a(2),h=a(3),x=a(10);function w(e){var t=e.current,a=e.onChangeData,n=e.onOpenModal;return r.a.createElement("label",{className:"block mb-4 md:flex-1 md:mr-10"},r.a.createElement("span",{className:"block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase"},"Formulas",r.a.createElement("a",{href:"#",title:"About ".concat(s[t].modal.title),className:"ml-1",onClick:function(){return n(Object(c.a)({},s[t].modal))}},r.a.createElement(b.a,{icon:h.b})),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/One-repetition_maximum",title:"Open Wikipedia - One-Repetition Maximum",className:"ml-1 text-xs",target:"_blank"},r.a.createElement(b.a,{icon:x.a}))),r.a.createElement("div",{className:"relative"},r.a.createElement("select",{className:"appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight pr-8 px-3 py-2 rounded shadow text-gray-700 w-full",value:t,onChange:function(e){return a({formula:e.target.value})}},u.map((function(e){return r.a.createElement("option",{key:e,value:e},s[e].modal.title)}))),r.a.createElement("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement(b.a,{icon:h.a}))))}function E(e){var t=e.weight,a=e.unit,n=e.rep,l=e.formula,o=e.onChangeData,c=e.onOpenModal;return r.a.createElement("section",null,r.a.createElement("div",{className:"md:flex"},r.a.createElement(w,{current:l,onChangeData:o,onOpenModal:c}),r.a.createElement("label",{className:"block mb-4 md:flex-1 md:mr-10"},r.a.createElement("span",{className:"block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase"},"Rep"),r.a.createElement("input",{className:"appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-700 w-full",value:n,onChange:function(e){return o({rep:e.target.value&&parseFloat(e.target.value)})}})),r.a.createElement("label",{className:"block mb-4 md:flex-1"},r.a.createElement("span",{className:"block font-bold mb-2 text-gray-700 text-xs tracking-wide uppercase"},"Weight"),r.a.createElement("div",{className:"flex"},r.a.createElement("input",{className:"appearance-none bg-white border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded-l shadow text-gray-700 w-full",value:t,onChange:function(e){return o({weight:e.target.value&&parseFloat(e.target.value)})}}),r.a.createElement("div",{className:"relative"},r.a.createElement("select",{className:"appearance-none bg-white border border-l-none focus:outline-none focus:shadow-outline leading-tight pr-8 px-3 py-2 rounded-r shadow text-gray-700",value:a,onChange:function(e){return o({unit:e.target.value})}},d.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("span",{className:"absolute flex inset-y-0 items-center pointer-events-none px-2 right-0 text-gray-700"},r.a.createElement(b.a,{icon:h.a})))))))}function v(e){var t=e.formula,a=e.weight,n=e.unit,l=e.max,o=e.rep,c=s[t],i=c.getOneRm(a||0,o||0);return r.a.createElement("section",{className:"mb-4 md:mb-0"},r.a.createElement("table",{className:"bg-white border-collapse mt-5 shadow table-auto table-striped w-full whitespace-no-wrap"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"border-b"},r.a.createElement("th",{className:"bg-gray-200 border-gray-200 font-bold px-6 py-2 sticky text-gray-600 text-sm top-0 tracking-wider uppercase w-1/3"},"Percentage"),r.a.createElement("th",{className:"bg-gray-200 border-gray-200 font-bold px-6 py-2 sticky text-gray-600 text-sm top-0 tracking-wider uppercase w-1/3"},"Rep"),r.a.createElement("th",{className:"bg-gray-200 border-gray-200 font-bold px-6 py-2 sticky text-gray-600 text-sm top-0 tracking-wider uppercase w-1/3"},"Weight"))),r.a.createElement("tbody",null,function(e,t){return Array.from({length:t},(function(t,a){return a+e}))}(1,l).map((function(e,t,a){return r.a.createElement("tr",{key:e,className:"border-b"},r.a.createElement("td",{className:"border-gray-200 px-6 py-2 text-center text-gray-600 text-sm"},(100*c.getPercentage(e)).toFixed(0),"%"),r.a.createElement("td",{className:"border-gray-200 px-6 py-2 text-center text-gray-600 text-sm"},e),r.a.createElement("td",{className:"border-gray-200 px-6 py-2 text-center text-gray-600 text-sm"},c.getWeight(i,e).toFixed(0),n))})))))}function y(e){var t=e.isOpen,a=e.title,n=e.body,l=e.onClose,o=r.a.createElement("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},r.a.createElement("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"}));return t?r.a.createElement("section",{className:"modal fixed flex h-full items-center justify-center left-0 top-0 w-full"},r.a.createElement("div",{className:"modal-overlay absolute bg-gray-900 h-full opacity-50 w-full"}),r.a.createElement("div",{className:"modal-container bg-white md:max-w-md mx-auto overflow-y-auto rounded shadow-lg w-11/12 z-50"},r.a.createElement("div",{onClick:l,className:"modal-close absolute cursor-pointer flex flex-col items-center mr-4 mt-4 right-0 text-sm text-white top-0 z-50"},o,r.a.createElement("span",{className:"text-sm"},"(Esc)")),r.a.createElement("div",{className:"modal-content px-6 py-4 text-left"},r.a.createElement("div",{className:"flex items-center justify-between pb-3"},r.a.createElement("p",{className:"text-2xl font-bold"},a||"model title"),r.a.createElement("div",{onClick:l,className:"modal-close cursor-pointer text-black z-50"},o)),n,r.a.createElement("div",{className:"flex justify-end pt-2"},r.a.createElement("button",{onClick:l,className:"modal-close bg-blue-500 focus:outline-none focus:shadow-outline font-bold hover:bg-blue-700 px-4 py-2 rounded text-white"},"Close"))))):null}function k(){var e=Object(n.useState)(f),t=Object(i.a)(e,2),a=t[0],l=t[1],o=function(){return l(f)},m=Object(n.useState)(g),s=Object(i.a)(m,2),u=s[0],d=s[1];return document.addEventListener("keyup",(function(e){27===e.keyCode&&a.isOpen&&o()})),r.a.createElement("div",{className:"h-full"},r.a.createElement(p,null),r.a.createElement("div",{className:"content-center flex h-full"},r.a.createElement("div",{className:"m-4 md:m-auto md:max-w-screen-md md:mt-30 w-full"},r.a.createElement("h1",{className:"text-gray-700 text-center text-2xl mb-8 font-bold"},"One-Repetition Maximum Calculator"),r.a.createElement(E,Object.assign({},u,{onChangeData:function(e){return d(Object(c.a)({},u,{},e))},onOpenModal:function(e){return l(Object(c.a)({},e,{isOpen:!0}))}})),r.a.createElement(v,u))),r.a.createElement(y,Object.assign({},a,{onClose:o})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.1f92f757.chunk.js.map
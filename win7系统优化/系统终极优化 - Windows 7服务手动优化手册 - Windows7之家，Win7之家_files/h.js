(function(){var h={},mt={},c={id:"b0258ee9fe9f4ec458e4737d0047597f",dm:["win7china.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[[20737, 2]],trust:0,vcard:0,qiao:0,lxb:0,conv:0,apps:''};var p=!0,q=null,r=!1;mt.h={};mt.h.Da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.qa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,e){var d;e.D&&(d=new Date,d.setTime(d.getTime()+e.D));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Ha?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.r={};mt.r.ba=function(a){return document.getElementById(a)};mt.r.Aa=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.r.oa=function(){function a(){if(!a.w){a.w=p;for(var b=0,e=d.length;b<e;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var e=r,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,r);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=p,"complete"===document.readyState)a.w=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=r;try{d=window.frameElement==q}catch(l){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.w?b():d.push(b)}}()).w=r;mt.event={};mt.event.d=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(b,e,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.p={};mt.p.parse=function(){return(new Function('return (" + source + ")'))()};
mt.p.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=e[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===q)return"null";if(d instanceof Array){var e=["["],n=d.length,l,f,k;for(f=0;f<n;f++)switch(k=d[f],typeof k){case "undefined":case "function":case "unknown":break;default:l&&e.push(","),e.push(mt.p.stringify(k)),l=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';l=["{"];f=mt.p.stringify;for(n in d)if(Object.prototype.hasOwnProperty.call(d,n))switch(k=
d[n],typeof k){case "undefined":case "unknown":case "function":break;default:e&&l.push(","),e=1,l.push(f(n)+":"+f(k))}l.push("}");return l.join("")}}}();mt.lang={};mt.lang.e=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ea=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Ga=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.B=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.B()&&(mt.localStorage.f.expires=d.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.B())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(d){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.B())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.K={};mt.K.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=q;e=window[d]=q;b&&b(a)};e.src=a};mt.A={};
mt.A.ga=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.A.Y=function(a,b,e,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.l=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:q};mt.url.Ca=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.da=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.N=function(a){return(a=mt.url.da(a))?a.replace(/:\d+$/,""):a};mt.url.Ba=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.o={na:"http://tongji.baidu.com/hm-web/welcome/ico",S:"hm.baidu.com/hm.gif",V:"baidu.com",ka:"hmmd",la:"hmpl",ia:"hmkw",ha:"hmci",ma:"hmsr",m:0,g:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Fa:0,xa:6E5,ya:10,za:1024,wa:1,n:2147483647,T:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={i:{},d:function(a,e){this.i[a]=this.i[a]||[];this.i[a].push(e)},s:function(a,e){this.i[a]=this.i[a]||[];for(var d=this.i[a].length,g=0;g<d;g++)this.i[a][g](e)}};return h.k=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.e(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=q,d()}:g.onload=function(){d()});g.src=a;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(g,n)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?e.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,e=mt.sessionStorage;return h.L=a})();
(function(){var a=h.o,b=mt.A,e={init:function(){if(""!==c.icon){var d;d=c.icon.split("|");var e=a.na+"?s="+c.id,n=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+d[0]+"."+d[1];switch(d[1]){case "swf":d=b.Y("HolmesIcon"+a.g,n,d[2],d[3],"s="+e);break;case "gif":d='<a href="'+e+'" target="_blank"><img border="0" src="'+n+'" width="'+d[2]+'" height="'+d[3]+'"></a>';break;default:d='<a href="'+e+'" target="_blank">'+d[0]+"</a>"}document.write(d)}}};h.k.d("pv-b",e.init);return e})();
(function(){var a=mt.r,b=h.o,e=h.load,d=h.L;h.k.d("pv-b",function(){c.rec&&a.oa(function(){for(var g=0,n=c.rp.length;g<n;g++){var l=c.rp[g][0],f=c.rp[g][1],k=a.ba("hm_t_"+l);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.n),k=4==f?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+l,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+l,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),e(k)}})})})();(function(){var a=h.o,b=h.load,e=h.L;h.k.d("pv-b",function(){if(c.trust&&c.vcard){var d=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*a.n)].join("&");b(d)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.C.ea()+","+h.C.ca();h.b.j()}}function b(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);f="undefined"==typeof a?p:a;if((!l||!k)&&f&&m)u=p,s=+new Date;else if(l&&k&&(!f||!m))u=r,t+=+new Date-s;l=f;k=m;x=setTimeout(b,100)}function e(a){var k=document,d="";if(a in k)d=a;else for(var f=["webkit","ms","moz","o"],m=0;m<f.length;m++){var s=f[m]+a.charAt(0).toUpperCase()+a.slice(1);if(s in k){d=
s;break}}return d}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?p:r,b()}var g=mt.event,n=h.k,l=p,f=p,k=p,m=p,v=+new Date,s=v,t=0,u=p,w=e("visibilityState"),y=e("hidden"),x;b();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");g.d(document,a,b);g.d(window,"pageshow",b);g.d(window,"pagehide",b);"object"==typeof document.onfocusin?(g.d(document,"focusin",d),g.d(document,"focusout",d)):(g.d(window,"focus",d),
g.d(window,"blur",d))})();h.C={ea:function(){return+new Date-v},ca:function(){return u?+new Date-s+t:t}};n.d("pv-b",function(){g.d(window,"unload",a())});return h.C})();
(function(){function a(k){for(var f in k)if({}.hasOwnProperty.call(k,f)){var b=k[f];d.e(b,"Object")||d.e(b,"Array")?a(b):k[f]=String(b)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.K,d=mt.lang,g=mt.p,n=h.o,l=h.k,f={O:q,q:[],z:0,P:r,init:function(){f.c=0;f.O={push:function(){f.I.apply(f,arguments)}};l.d("pv-b",function(){f.Z();f.$()});l.d("pv-d",f.aa);l.d("stag-b",function(){h.b.a.api=f.c||f.z?f.c+"_"+f.z:""});l.d("stag-d",function(){h.b.a.api=
0;f.c=0;f.z=0})},Z:function(){var a=window._hmt;if(a&&a.length)for(var d=0;d<a.length;d++){var b=a[d];switch(b[0]){case "_setAccount":1<b.length&&/^[0-9a-z]{32}$/.test(b[1])&&(f.c|=1,window._bdhm_account=b[1]);break;case "_setAutoPageview":if(1<b.length&&(b=b[1],r===b||p===b))f.c|=2,window._bdhm_autoPageview=b}}},$:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,e=a.length;b<e;b++)d.e(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?f.I(a[b]):f.q.push(a[b]);window._hmt=f.O}},aa:function(){if(0<f.q.length)for(var a=0,b=f.q.length;a<b;a++)f.I(f.q[a]);f.q=q},I:function(a){if(d.e(a,"Array")){var b=a[0];if(f.hasOwnProperty(b)&&d.e(f[b],"Function"))f[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){f.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.G?(h.b.a.nv=0,h.b.a.st=4):h.b.G=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=n.protocol+"//"+document.location.host+
a[1];f.P||(h.b.a.su=document.location.href);h.b.j();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.j())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],e=a[4]||3;if(0<d&&6>d&&0<e&&4>e){f.z++;for(var s=(h.b.a.cv||"*").split("!"),t=s.length;t<d-1;t++)s.push("*");s[d-1]=e+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=s.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.pa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?n.protocol+"//"+window.location.host+a[1]:a[1],f.P=p)},_trackOrder:function(b){b=b[1];d.e(b,"Object")&&(a(b),f.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=g.stringify(b),h.b.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.j()},_trackRTPageview:function(b){b=
b[1];d.e(b,"Object")&&(a(b),b=g.stringify(b),512>=encodeURIComponent(b).length&&(f.c|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.e(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var e=function(a){var b=h.b.a.rt;f.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.j();h.b.a.rt=b},l=b.length;if(900>=l)e.call(this,b);else for(var l=Math.ceil(l/900),s="block|"+Math.round(Math.random()*n.n).toString(16)+"|"+l+"|",t=[],u=0;u<l;u++)t.push(u),t.push(b.substring(900*u,900*u+900)),e.call(this,s+t.join("|")),
t=[]}},_setUserId:function(a){a=a[1];if(d.e(a,"String")||d.e(a,"Number")){var b=h.b.F(),g="hm-"+h.b.a.v;f.R=f.R||Math.round(Math.random()*n.n);e.log("//datax.baidu.com/x.gif?si="+c.id+"&dm="+encodeURIComponent(b)+"&ac="+encodeURIComponent(a)+"&v="+g+"&li="+f.R+"&rnd="+Math.round(Math.random()*n.n))}}};f.init();h.W=f;return h.W})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.G=r,this.init())}var b=mt.url,e=mt.K,d=mt.A,g=mt.lang,n=mt.cookie,l=mt.h,f=mt.localStorage,k=mt.sessionStorage,m=h.o,v=h.k;a.prototype={H:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},Q:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},t:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.Q(a,c.dm[d]))return p}else{var f=b.N(a);if(f&&this.H(f,c.dm[d]))return p}return r},F:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.H(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},M:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Q(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},fa:function(){if(!document.referrer)return m.g-m.m>c.vdur?1:4;var a=
r;this.t(document.referrer)&&this.t(document.location.href)?a=p:(a=b.N(document.referrer),a=this.H(a||"",document.location.hostname));return a?m.g-m.m>c.vdur?1:4:3},getData:function(a){try{return n.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{n.set(a,b,{domain:this.F(),path:this.M(),D:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},pa:function(a){try{n.set(a,"",{domain:this.F(),path:this.M(),D:-1}),k.remove(a),f.remove(a)}catch(b){}},ua:function(){var a,b,d,f,e;m.m=this.getData("Hm_lpvt_"+
c.id)||0;13==m.m.length&&(m.m=Math.round(m.m/1E3));b=this.fa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(e=f.length-1;0<=e;e--)13==f[e].length&&(f[e]=""+Math.round(f[e]/1E3));for(;2592E3<m.g-f[0];)f.shift();e=4>f.length?2:3;for(1===a&&f.push(m.g);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=m.g,f="",e=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.g);d=m.g==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.t(document.location.href)&&
(""===document.referrer||this.t(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=e},ta:function(){for(var a=[],b=0,d=m.T.length;b<d;b++){var f=m.T[b],e=this.a[f];"undefined"!=typeof e&&""!==e&&a.push(f+"="+encodeURIComponent(e))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},va:function(){this.ua();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=l.qa;this.a.cl=l.colorDepth+"-bit";
this.a.ln=l.language;this.a.ja=l.javaEnabled?1:0;this.a.ck=l.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=d.ga();this.a.v="1.0.81";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.l(a,m.ka)||"";this.a.cp=b.l(a,m.la)||"";this.a.cw=b.l(a,m.ia)||"";this.a.ci=b.l(a,m.ha)||"";this.a.cf=b.l(a,m.ma)||""},init:function(){try{this.va(),0===this.a.nv?this.sa():this.J(".*"),h.b=this,this.X(),
v.s("pv-b"),this.ra()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(m.protocol+"//"+m.S+"?"+b.join("&"))}},ra:function(){function a(){v.s("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.G=p,this.a.et=0,this.a.ep="",this.j(a)):a()},j:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.n);v.s("stag-b");var d=m.protocol+"//"+
m.S+"?"+b.ta();v.s("stag-d");b.U(d);e.log(d,function(d){b.J(d);g.e(a,"Function")&&a.call(b)})},X:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),f=-1<document.referrer.indexOf(m.V)?p:r,e=b.l(a,"jn"),k=/^heatlink$|^select$/.test(e);a&&(d.test(a)&&f&&k)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+e+".js?"+this.a.rnd),e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,
e))},U:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},J:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},sa:function(){var a=this,b=k.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){e.log(m.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.J(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();
(function(){if("378f3aa9b8779062c8de4dc247dd8874"===c.id){var a=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},b={click:function(){for(var b=[],d=a(document.getElementsByTagName("a")),d=[].concat.apply(d,a(document.getElementsByTagName("area"))),e=/openZoosUrl\(/,g=0,l=d.length;g<l;g++)e.test(d[g].getAttribute("onclick"))&&b.push(d[g]);return b}},e=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},d=function(a,
b){return Object.prototype.toString.call(a)==="[object "+b+"]"};window._hmt=window._hmt||[];var g,n="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),l=function(a,b){if(g===b){window._hmt.push(["_trackPageview",n+a]);for(var e=+new Date;500>=+new Date-e;);return r}if(d(b,"Array")||d(b,"NodeList"))for(var e=0,l=b.length;e<l;e++)if(g===b[e]){window._hmt.push(["_trackPageview",n+a+"/"+(e+1)]);for(e=+new Date;500>=+new Date-e;);return r}};(function(a,b,d){a.addEventListener?a.addEventListener(b,d,p):a.attachEvent&&
a.attachEvent("on"+b,d)})(document,"click",function(a){a=a||window.event;g=a.target||a.srcElement;var k={};for(e(b,function(a,b){k[a]=d(b,"Function")?b():document.getElementById(b)});g&&g!==document&&e(k,l)!==r;)g=g.parentNode})}})();})();

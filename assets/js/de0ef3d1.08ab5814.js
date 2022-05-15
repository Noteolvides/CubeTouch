"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[422],{9953:function(e,a,l){l.r(a),l.d(a,{default:function(){return F}});var t=l(5861),n=l(7757),r=l.n(n),u=l(7294),c=l(7019),o=l(2263),s=l(5518),i=l(1514),v=[{label:"EMPTY",value:0}],b=[{label:"Empty",options:v},{label:"Modifiers",options:[{label:"MOD_LCTRL",value:224},{label:"MOD_LSHIFT",value:225},{label:"MOD_LALT",value:226},{label:"MOD_LMETA",value:227},{label:"MOD_RCTRL",value:224},{label:"MOD_RSHIFT",value:225},{label:"MOD_RALT",value:226},{label:"MOD_RMETA",value:227}]},{label:"Letters",options:[{label:"a",value:4},{label:"b",value:5},{label:"c",value:6},{label:"d",value:7},{label:"e",value:8},{label:"f",value:9},{label:"g",value:10},{label:"h",value:11},{label:"i",value:12},{label:"j",value:13},{label:"k",value:14},{label:"l",value:15},{label:"m",value:16},{label:"n",value:17},{label:"o",value:18},{label:"p",value:19},{label:"q",value:20},{label:"r",value:21},{label:"s",value:22},{label:"y",value:23},{label:"u",value:24},{label:"v",value:25},{label:"w",value:26},{label:"x",value:27},{label:"y",value:28},{label:"z",value:29}]},{label:"Numbers",options:[{label:"1",value:30},{label:"2",value:31},{label:"3",value:32},{label:"4",value:33},{label:"5",value:34},{label:"6",value:35},{label:"7",value:36},{label:"8",value:37},{label:"9",value:38},{label:"0",value:39}]},{label:"Utilities",options:[{label:"ENTER",value:40},{label:"ESC",value:41},{label:"BACKSPACE",value:42},{label:"TAB",value:43},{label:"SPACE",value:44},{label:"MINUS",value:45},{label:"EQUAL",value:46},{label:"LEFTBRACE",value:47},{label:"RIGHTBRACE",value:48},{label:"BACKSLASH",value:49},{label:"HASHTILDE",value:50},{label:"SEMICOLON",value:51},{label:"APOSTROPHE",value:52},{label:"GRAVE",value:53},{label:"COMMA",value:54},{label:"DOT",value:55},{label:"SLASH",value:56},{label:"CAPSLOCK",value:57},{label:"OPEN",value:116},{label:"HELP",value:117},{label:"PROPS",value:118},{label:"FRONT",value:119},{label:"STOP",value:120},{label:"AGAIN",value:121},{label:"UNDO",value:122},{label:"CUT",value:123},{label:"COPY",value:124},{label:"PASTE",value:125},{label:"FIND",value:126},{label:"MUTE",value:127},{label:"VOLUMEUP",value:128},{label:"VOLUMEDOWN",value:129}]},{label:"Functional",options:[{label:"F1",value:58},{label:"F2",value:59},{label:"F3",value:60},{label:"F4",value:61},{label:"F5",value:62},{label:"F6",value:63},{label:"F7",value:64},{label:"F8",value:65},{label:"F9",value:66},{label:"F10",value:67},{label:"F11",value:68},{label:"F12",value:69},{label:"F13",value:104},{label:"F14",value:105},{label:"F15",value:106},{label:"F16",value:107},{label:"F17",value:108},{label:"F18",value:109},{label:"F19",value:110},{label:"F20",value:111},{label:"F21",value:112},{label:"F22",value:113},{label:"F23",value:114},{label:"F24",value:115},{label:"PRINT_SCREEN",value:70},{label:"SCROLLLOCK",value:71},{label:"PAUSE",value:72},{label:"INSERT",value:73},{label:"HOME",value:74},{label:"PAGEUP",value:75},{label:"DELETE",value:76},{label:"END",value:77},{label:"PAGEDOWN",value:78},{label:"RIGHT",value:79},{label:"LEFT",value:80},{label:"DOWN",value:81},{label:"UP",value:82},{label:"NUMLOCK",value:83},{label:"KPSLASH",value:84},{label:"KPASTERISK",value:85},{label:"KPMINUS",value:86},{label:"KPPLUS",value:87},{label:"KPENTER",value:88},{label:"KP1",value:89},{label:"KP2",value:90},{label:"KP3",value:91},{label:"KP4",value:92},{label:"KP5",value:93},{label:"KP6",value:94},{label:"KP7",value:95},{label:"KP8",value:96},{label:"KP9",value:97},{label:"KP0",value:98},{label:"KPDOT",value:99},{label:"COMPOSE",value:101},{label:"POWER",value:102},{label:"KPEQUAL",value:103}]},{label:"Media",options:[{label:"MEDIA_PLAYPAUSE",value:232},{label:"MEDIA_STOPCD",value:233},{label:"MEDIA_PREVIOUSSONG",value:234},{label:"MEDIA_NEXTSONG",value:235},{label:"MEDIA_EJECTCD",value:236},{label:"MEDIA_VOLUMEUP",value:237},{label:"MEDIA_VOLUMEDOWN",value:238},{label:"MEDIA_MUTE",value:239},{label:"MEDIA_WWW",value:240},{label:"MEDIA_BACK",value:241},{label:"MEDIA_FORWARD",value:242},{label:"MEDIA_STOP",value:243},{label:"MEDIA_FIND",value:244},{label:"MEDIA_SCROLLUP",value:245},{label:"MEDIA_SCROLLDOWN",value:246},{label:"MEDIA_EDIT",value:247},{label:"MEDIA_SLEEP",value:248},{label:"MEDIA_COFFEE",value:249},{label:"MEDIA_REFRESH",value:250},{label:"MEDIA_CALC",value:251}]}],f=l(5907),m="picker_5SSU",E="swatch_f62k",d="popover_Mwse",p=function(e,a){(0,u.useEffect)((function(){var l=!1,t=!1,n=function(n){!l&&t&&e.current&&!e.current.contains(n.target)&&a(n)},r=function(a){t=e.current,l=e.current&&e.current.contains(a.target)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),document.addEventListener("click",n),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r),document.removeEventListener("click",n)}}),[e,a])},h=function(e){var a=e.color,l=e.onChange,t=(0,u.useRef)(),n=(0,u.useState)(!1),r=n[0],c=n[1],o=(0,u.useCallback)((function(){return c(!1)}),[]);return p(t,o),u.createElement("div",{className:"margin-top--md center colum-direction col col--3"},u.createElement("h3",null,"Color"),u.createElement("div",{className:m},u.createElement("div",{className:E,style:{backgroundColor:a},onClick:function(){return c(!0)}}),r&&u.createElement("div",{className:d,ref:t},u.createElement(f.gW,{color:a,onChange:l}))))},g=(0,u.createContext)({hasTriedAutoconnect:!1,connect:function(){return Promise.resolve(!1)},disconnect:function(){return Promise.resolve(!1)},portState:"closed",subscribeRead:function(){return function(){}},sendMessage:function(e){return Promise.resolve(!1)}}),P=function(){return(0,u.useContext)(g)},A=function(e){var a=e.children,l=(0,u.useState)("closed"),n=l[0],c=l[1],o=(0,u.useState)(!1),s=o[0],i=o[1],v=(0,u.useState)(!1),b=v[0],f=v[1],m=(0,u.useRef)(null),E=(0,u.useRef)(null),d=(0,u.useRef)(Promise.resolve()),p=(0,u.useRef)(0),h=(0,u.useRef)(new Map),P=function(){var e=(0,t.Z)(r().mark((function e(a){var l,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("open"!==n){e.next=8;break}if(!(l=m.current)){e.next=8;break}return t=l.writable.getWriter(),e.next=6,t.write(a);case 6:return t.releaseLock(),e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=(0,t.Z)(r().mark((function e(a){var l,t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.readable){e.next=23;break}l=new TextDecoderStream,t=a.readable.pipeTo(l.writable),E.current=l.readable.getReader(),e.prev=4,n=r().mark((function e(){var a,l,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.current.read();case 2:if(a=e.sent,l=a.value,!a.done){e.next=7;break}return e.abrupt("return","break");case 7:t=Date.now(),Array.from(h.current).forEach((function(e){e[0];(0,e[1])({value:l,timestamp:t})}));case 9:case"end":return e.stop()}}),e)}));case 6:return e.delegateYield(n(),"t0",8);case 8:if("break"!==e.t0){e.next=11;break}return e.abrupt("break",13);case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(4),console.error(e.t1);case 18:return e.prev=18,E.current.releaseLock(),e.finish(18);case 21:return e.next=23,t.catch((function(){}));case 23:case"end":return e.stop()}}),e,null,[[4,15,18,21]])})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=(0,t.Z)(r().mark((function e(a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.open({baudRate:9600});case 3:return m.current=a,c("open"),f(!1),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),c("closed"),console.error("Could not open port"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=(0,t.Z)(r().mark((function e(){var a,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("closed"!==n){e.next=16;break}return c("opening"),a=[],e.prev=3,e.next=6,navigator.serial.requestPort({filters:a});case 6:return l=e.sent,e.next=9,O(l);case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(3),c("closed"),console.error("User did not select port");case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,t.Z)(r().mark((function e(){var a,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("open"!==n){e.next=15;break}if(!(a=m.current)){e.next=15;break}return c("closing"),null==(l=E.current)||l.cancel(),e.next=7,d.current;case 7:return E.current=null,e.next=10,a.close();case 10:return m.current=null,f(!0),i(!1),c("closed"),e.abrupt("return",!0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,t.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.current;case 2:E.current=null,d.current=Promise.resolve(),m.current=null,i(!1),c("closed");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){var e=m.current;if("open"===n&&e){var a,l={current:!1};return null==(a=E.current)||a.cancel(),d.current.then((function(){l.current||(E.current=null,d.current=A(e))})),navigator.serial.addEventListener("disconnect",C),function(){l.current=!0,navigator.serial.removeEventListener("disconnect",C)}}}),[n]),(0,u.useEffect)((function(){}),[b,s,n]),u.createElement(g.Provider,{value:{hasTriedAutoconnect:s,subscribeRead:function(e){var a=p.current;return h.current.set(a,e),p.current++,function(){h.current.delete(a)}},portState:n,connect:S,disconnect:M,sendMessage:P}},a)},O=["Top","Front","Back","Left","Right"];function S(e){var a={input:function(e){return Object.assign({},e,{width:220})},menu:function(e){return Object.assign({},e,{backgroundColor:"var(--ifm-hero-background-color)"})}};return u.createElement("div",{className:"margin-top--md center colum-direction col col--3"},u.createElement("h3",null,""+e.name),u.createElement(i.ZP,{options:b,value:e.selectorValue,onChange:function(a,l){"select-option"==l.action&&e.selectNewValue(a)},styles:a,theme:function(e){return Object.assign({},e,{borderRadius:0,colors:Object.assign({},e.colors,{primary25:"pink"})})}}))}function M(e){var a=e.toString(16);return 1==a.length?"0"+a:a}var C=function(e){return u.createElement("div",{className:"row"},u.createElement(S,{name:"First Key",selectorValue:e.face.firstValue,selectNewValue:function(a){e.face.firstValue=a,e.setFaceParent(e.face)}}),u.createElement(S,{name:"Second Key",selectorValue:e.face.secondValue,selectNewValue:function(a){e.face.secondValue=a,e.setFaceParent(e.face)}}),u.createElement(S,{name:"Third Key",selectorValue:e.face.thirdValue,selectNewValue:function(a){e.face.thirdValue=a,e.setFaceParent(e.face)}}),u.createElement(h,{color:e.face.color,onChange:function(a){e.face.color=a,e.setFaceParent(e.face)}}))},N=function(){var e=P();e.subscribeRead((function(e){return console.log(e)}));var a,l=(0,u.useState)((a={name:"",firstValue:v[0],secondValue:v[0],thirdValue:v[0],color:"#bbdccd"},[Object.assign({},a),Object.assign({},a),Object.assign({},a),Object.assign({},a),Object.assign({},a)].map((function(e,l){return(e=Object.assign({},a)).name=O[l],e})))),t=l[0],n=l[1],r=(0,u.useState)(0),c=r[0],o=r[1],s=t.map((function(e,a){return u.createElement("li",{onClick:function(e){t.forEach((function(a,l){a.name==e.target.id&&o(l)}))},key:e.name,id:e.name,className:"tabs__item "+(a==c?"tabs__item--active":"")},e.name)}));(0,u.useEffect)((function(){e.subscribeRead((function(e){"#"==e.value[0]&&"#"==e.value[e.value.length-1]&&function(){for(var a=e.value.slice(1,-1).match(/\d+/g).map(Number),l=function(e){var l,n,r;b.forEach((function(l){l.options.forEach((function(l){l.value==a[6*e]&&(t[e].firstValue=l),l.value==a[6*e+1]&&(t[e].secondValue=l),l.value==a[6*e+2]&&(t[e].thirdValue=l)}))})),t[e].color=(l=a[6*e+3],n=a[6*e+4],r=a[6*e+5],"#"+M(l)+M(n)+M(r))},r=0;r<=4;r++)l(r);n([].concat(t))}()}));var a=new Uint8Array(1);a[0]="D".charCodeAt(0),e.sendMessage(a)}),[]);return u.createElement("section",null,u.createElement("div",{className:"container"},u.createElement("ul",{className:"tabs"},s),u.createElement(C,{face:t[c],setFaceParent:function(e){t[c]=Object.assign({},e),console.log(t),n([].concat(t))}}),u.createElement("div",{className:"center row padding--lg"},u.createElement("button",{className:"button button--primary button--lg",onClick:function(){var a=new Uint8Array(8);a[0]="C".charCodeAt(0),a[1]=c;var l,n,r=t[c],u=(l=r.color,(n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l))?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null);a[2]=r.firstValue.value,a[3]=r.secondValue.value,a[4]=r.thirdValue.value,a[5]=null==u?void 0:u.r,a[6]=null==u?void 0:u.g,a[7]=null==u?void 0:u.b,e.sendMessage(a)}}," Configure"))))};function D(){return u.createElement("section",{className:"container margin-top--md"},u.createElement("div",{className:"alert alert--warning",role:"alert"},"You should first ",u.createElement("strong",null,"connect")," to the device."))}function L(){return u.createElement("section",{className:"container margin-top--md"},u.createElement("div",{className:"alert alert--danger",role:"alert"},u.createElement("p",null,u.createElement("strong",null,"Error connecting")),"Maybe you have already open serial monitor in arduino? If not try to unplug and plug the usb."))}function k(){return u.createElement("div",{className:"container margin-top--md"},u.createElement("div",{className:"alert alert--danger",role:"alert"},"You must use ",u.createElement("strong",null,"chrome")," in order to access this feature."))}var R=function(){var e=P(),a=(0,o.Z)().siteConfig,l=(0,u.useState)("open"==e.portState),n=l[0],i=l[1],v=(0,u.useState)(!1),b=v[0],f=v[1],m=function(){var a=(0,t.Z)(r().mark((function a(){return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.debug("Trying to connect"),n){a.next=6;break}return a.next=4,e.connect().then((function(a){a?i(a):(f(!0),setTimeout((function(){console.log(e.portState),f(!1)}),5e3))}));case 4:a.next=8;break;case 6:return a.next=8,e.disconnect().then((function(e){i(!e)}));case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return u.createElement(c.Z,{title:"Key Remapping",description:"Remap your favorites keys or commands"},u.createElement("header",null,u.createElement("div",{className:"hero shadow--lw"},u.createElement("div",{className:"container"},u.createElement("h1",{className:"hero__title"},"Key Remapping"),u.createElement("p",{className:"hero__subtitle"},"Remap your favorites keys or commands."),u.createElement("p",null,"First you have to connect to the you "+a.title),u.createElement("button",{className:"button "+(s.i7?"":"disabled")+" "+(n?"button--warning":"")+" button--info button--outline button--lg",onClick:m}," ",n?"Disconnect":"Connect")))),u.createElement("main",null,s.i7?n?u.createElement(N,null):u.createElement(D,null):u.createElement(k,null),b?u.createElement(L,null):u.createElement(u.Fragment,null)))};function F(){return u.createElement(A,null,u.createElement(R,null))}}}]);
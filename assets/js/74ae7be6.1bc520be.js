"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[988],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return b}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),b=r,u=m["".concat(l,".").concat(b)]||m[b]||d[b]||c;return a?n.createElement(u,i(i({ref:e},p),{},{components:a})):n.createElement(u,i({ref:e},p))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4247:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),i=["components"],o={sidebar_position:2},l="Hardware",s={unversionedId:"firstSteps/hardware",id:"firstSteps/hardware",title:"Hardware",description:"Pinout",source:"@site/docs/firstSteps/hardware.mdx",sourceDirName:"firstSteps",slug:"/firstSteps/hardware",permalink:"/docs/firstSteps/hardware",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/firstSteps/hardware.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Program your device",permalink:"/docs/firstSteps/programming"},next:{title:"Congratulations!",permalink:"/docs/firstSteps/congratulations"}},p=[{value:"Pinout",id:"pinout",children:[],level:2},{value:"BOM",id:"bom",children:[],level:2},{value:"Schematics",id:"schematics",children:[],level:2},{value:"PCB&#39;S",id:"pcbs",children:[{value:"Top",id:"top",children:[],level:3},{value:"Bottom",id:"bottom",children:[],level:3},{value:"Left",id:"left",children:[],level:3},{value:"Right",id:"right",children:[],level:3},{value:"Front",id:"front",children:[],level:3},{value:"Back",id:"back",children:[],level:3}],level:2}],d={toc:p};function m(t){var e=t.components,o=(0,r.Z)(t,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"hardware"},"Hardware"),(0,c.kt)("h2",{id:"pinout"},"Pinout"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Pinout",src:a(8262).Z})),(0,c.kt)("h2",{id:"bom"},"BOM"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("strong",{parentName:"th"},"Qty")),(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("strong",{parentName:"th"},"Value")),(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("strong",{parentName:"th"},"LCSC")),(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("strong",{parentName:"th"},"Reference(s)")))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"8"),(0,c.kt)("td",{parentName:"tr",align:"center"},"Capacitor 0,1uf"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C14663"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C1, C2, C3, C4, C5, C6, C7, C8")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"6"),(0,c.kt)("td",{parentName:"tr",align:"center"},"WS2812B"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C139127"),(0,c.kt)("td",{parentName:"tr",align:"center"},"D1, D2, D3, D4, D5, D6")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"1"),(0,c.kt)("td",{parentName:"tr",align:"center"},"USB_C"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C709357"),(0,c.kt)("td",{parentName:"tr",align:"center"},"J1")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"2"),(0,c.kt)("td",{parentName:"tr",align:"center"},"Resistor 5.1K"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C25905"),(0,c.kt)("td",{parentName:"tr",align:"center"},"R1, R2")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"1"),(0,c.kt)("td",{parentName:"tr",align:"center"},"Resistor 10K"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C25197"),(0,c.kt)("td",{parentName:"tr",align:"center"},"R3")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"1"),(0,c.kt)("td",{parentName:"tr",align:"center"},"SW Tactile Button"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C318884"),(0,c.kt)("td",{parentName:"tr",align:"center"},"SW1")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"center"},"1"),(0,c.kt)("td",{parentName:"tr",align:"center"},"CH554G"),(0,c.kt)("td",{parentName:"tr",align:"center"},"C114295"),(0,c.kt)("td",{parentName:"tr",align:"center"},"U1")))),(0,c.kt)("h2",{id:"schematics"},"Schematics"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f The shematics and pcb are made with the beta version of kicad 5.99")),(0,c.kt)("p",null,"Download the schematic made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Bottom"},"GitHub"),"."),(0,c.kt)("embed",{src:a(8920).Z,width:"100%",height:"500",type:"application/pdf"}),(0,c.kt)("h2",{id:"pcbs"},"PCB'S"),(0,c.kt)("h3",{id:"top"},"Top"),(0,c.kt)("p",null,"Download the pcb made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Top"},"GitHub"),"."),(0,c.kt)("div",{className:"container"},(0,c.kt)("div",{className:"row",style:{alignItems:"center"}},(0,c.kt)("img",{height:"400",style:{objectFit:"contain"},className:"col col--6",src:a(8193).Z,alt:"Pcb Render top"}),(0,c.kt)("img",{height:"450",style:{objectFit:"contain"},className:"col col--6",src:a(1673).Z,alt:"Pcb Render top back"}))),(0,c.kt)("h3",{id:"bottom"},"Bottom"),(0,c.kt)("p",null,"Download the pcb made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Bottom"},"GitHub"),"."),(0,c.kt)("div",{className:"container"},(0,c.kt)("div",{className:"row",style:{alignItems:"center"}},(0,c.kt)("img",{height:"400",style:{objectFit:"contain"},className:"col col--6",src:a(4295).Z,alt:"Pcb Render top"}),(0,c.kt)("img",{height:"450",style:{objectFit:"contain"},className:"col col--6",src:a(4826).Z,alt:"Pcb Render top back"}))),(0,c.kt)("h3",{id:"left"},"Left"),(0,c.kt)("p",null,"Download the pcb made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Left"},"GitHub"),"."),(0,c.kt)("div",{className:"container"},(0,c.kt)("div",{className:"row",style:{alignItems:"center"}},(0,c.kt)("img",{height:"400",style:{objectFit:"contain"},className:"col col--6",src:a(1540).Z,alt:"Pcb Render top"}),(0,c.kt)("img",{height:"450",style:{objectFit:"contain"},className:"col col--6",src:a(7754).Z,alt:"Pcb Render top back"}))),(0,c.kt)("h3",{id:"right"},"Right"),(0,c.kt)("p",null,"Download the pcb made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Right"},"GitHub"),"."),(0,c.kt)("div",{className:"container"},(0,c.kt)("div",{className:"row",style:{alignItems:"center"}},(0,c.kt)("img",{height:"400",style:{objectFit:"contain"},className:"col col--6",src:a(5772).Z,alt:"Pcb Render top"}),(0,c.kt)("img",{height:"450",style:{objectFit:"contain"},className:"col col--6",src:a(3142).Z,alt:"Pcb Render top back"}))),(0,c.kt)("h3",{id:"front"},"Front"),(0,c.kt)("p",null,"Download the pcb made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Front"},"GitHub"),"."),(0,c.kt)("div",{className:"container"},(0,c.kt)("div",{className:"row",style:{alignItems:"center"}},(0,c.kt)("img",{height:"400",style:{objectFit:"contain"},className:"col col--6",src:a(7316).Z,alt:"Pcb Render top"}),(0,c.kt)("img",{height:"450",style:{objectFit:"contain"},className:"col col--6",src:a(438).Z,alt:"Pcb Render top back"}))),(0,c.kt)("h3",{id:"back"},"Back"),(0,c.kt)("p",null,"Download the pcb made with kicad in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Noteolvides/CubeTouch/tree/main/Hardware/Back"},"GitHub"),"."),(0,c.kt)("div",{className:"container"},(0,c.kt)("div",{className:"row",style:{alignItems:"center"}},(0,c.kt)("img",{height:"400",style:{objectFit:"contain"},className:"col col--6",src:a(8454).Z,alt:"Pcb Render top"}),(0,c.kt)("img",{height:"450",style:{objectFit:"contain"},className:"col col--6",src:a(1085).Z,alt:"Pcb Render top back"}))))}m.isMDXComponent=!0},8920:function(t,e,a){e.Z=a.p+"assets/files/salida-a008824801ee06cec88a94aba487da9c.pdf"},1085:function(t,e,a){e.Z=a.p+"assets/images/Back-back-d6fba86c11e829bf1cbded8afed158d7.png"},8454:function(t,e,a){e.Z=a.p+"assets/images/Back-d0f227bc83bf7c9f5705b33c7cecb464.png"},4826:function(t,e,a){e.Z=a.p+"assets/images/Bottom-back-73f1587d159341fb6b1979c4f2ebc9e4.png"},4295:function(t,e,a){e.Z=a.p+"assets/images/Bottom-2cbc3e3575e73016652c74ea247d157a.png"},7316:function(t,e,a){e.Z=a.p+"assets/images/Fron-9930cd9dedc5af48cceb4d964b6069e9.png"},438:function(t,e,a){e.Z=a.p+"assets/images/Front-back-7dcf3967338002e647736d005c710357.png"},7754:function(t,e,a){e.Z=a.p+"assets/images/Left-back-c75cdba588abbe3794f9c61682b5010f.png"},1540:function(t,e,a){e.Z=a.p+"assets/images/Left-609a704b4b7c061ca5bbba6b01af0609.png"},3142:function(t,e,a){e.Z=a.p+"assets/images/Right-back-c723f2278328d640f8a60ed1594c58d7.png"},5772:function(t,e,a){e.Z=a.p+"assets/images/Right-5d1361bf6bf6d970122e3b3c370aadf1.png"},1673:function(t,e,a){e.Z=a.p+"assets/images/Top-back-d559144b0dc82ab7c3c5dba675be7dc9.png"},8193:function(t,e,a){e.Z=a.p+"assets/images/Top-18520fc70e97f47054345b3353cb59cc.png"},8262:function(t,e,a){e.Z=a.p+"assets/images/Pinout-333c2f6baf96af13794ca5bf96da05c1.png"}}]);
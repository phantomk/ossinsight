"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3734],{96214:function(e,n,t){var r=t(95318);n.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");n.Z=a},72428:function(e,n,t){var r=t(88169),i=t(85893);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},31812:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(63366),i=t(87462),o=t(67294),a=t(98216),l=t(27909),c=t(94780),s=t(90948),d=t(71657),u=t(83321),p=t(98456),m=t(34867);function f(e){return(0,m.Z)("MuiLoadingButton",e)}var g=(0,t(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),h=t(85893);const v=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Z=(0,s.ZP)(u.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,n)=>[n.root,n.startIconLoadingStart&&{[`& .${g.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${g.endIconLoadingEnd}`]:n.endIconLoadingEnd}]})((({ownerState:e,theme:n})=>(0,i.Z)({[`& .${g.startIconLoadingStart}, & .${g.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${g.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${g.startIconLoadingStart}, & .${g.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${g.startIconLoadingStart}, & .${g.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}}))),b=(0,s.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.loadingIndicator,n[`loadingIndicator${(0,a.Z)(t.loadingPosition)}`]]}})((({theme:e,ownerState:n})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:"small"===n.size?10:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:e.palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:"small"===n.size?10:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})));var x=o.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiLoadingButton"}),{children:s,disabled:u=!1,id:m,loading:g=!1,loadingIndicator:x,loadingPosition:I="center",variant:S="text"}=t,k=(0,r.Z)(t,v),P=(0,l.Z)(m),y=null!=x?x:(0,h.jsx)(p.Z,{"aria-labelledby":P,color:"inherit",size:16}),C=(0,i.Z)({},t,{disabled:u,loading:g,loadingIndicator:y,loadingPosition:I,variant:S}),w=(e=>{const{loading:n,loadingPosition:t,classes:r}=e,o={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,a.Z)(t)}`],endIcon:[n&&`endIconLoading${(0,a.Z)(t)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,a.Z)(t)}`]},l=(0,c.Z)(o,f,r);return(0,i.Z)({},r,l)})(C);return(0,h.jsx)(Z,(0,i.Z)({disabled:u||g,id:P,ref:n},k,{variant:S,classes:w,ownerState:C,children:"end"===C.loadingPosition?(0,h.jsxs)(o.Fragment,{children:[s,g&&(0,h.jsx)(b,{className:w.loadingIndicator,ownerState:C,children:y})]}):(0,h.jsxs)(o.Fragment,{children:[g&&(0,h.jsx)(b,{className:w.loadingIndicator,ownerState:C,children:y}),s]})}))}))},78262:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(63366),i=t(87462),o=t(67294),a=t(86010),l=t(94780),c=t(57579),s=t(98216),d=t(88628),u=t(16628),p=t(55113),m=t(71657),f=t(90948),g=t(34867);function h(e){return(0,g.Z)("MuiDialog",e)}var v=(0,t(1588).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var Z=(0,o.createContext)({}),b=t(84808),x=t(2734),I=t(85893);const S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],k=(0,f.ZP)(b.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),P=(0,f.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),y=(0,f.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.container,n[`scroll${(0,s.Z)(t.scroll)}`]]}})((({ownerState:e})=>(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),C=(0,f.ZP)(p.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`scrollPaper${(0,s.Z)(t.scroll)}`],n[`paperWidth${(0,s.Z)(String(t.maxWidth))}`],t.fullWidth&&n.paperFullWidth,t.fullScreen&&n.paperFullScreen]}})((({theme:e,ownerState:n})=>(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===n.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===n.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===n.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${v.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},"xs"!==n.maxWidth&&{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,[`&.${v.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${v.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var w=o.forwardRef((function(e,n){const t=(0,m.Z)({props:e,name:"MuiDialog"}),d=(0,x.Z)(),f={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":v,BackdropComponent:b,BackdropProps:w,children:L,className:W,disableEscapeKeyDown:E=!1,fullScreen:_=!1,fullWidth:M=!1,maxWidth:$="sm",onBackdropClick:D,onClose:B,open:R,PaperComponent:A=p.Z,PaperProps:N={},scroll:j="paper",TransitionComponent:z=u.Z,transitionDuration:F=f,TransitionProps:T}=t,O=(0,r.Z)(t,S),V=(0,i.Z)({},t,{disableEscapeKeyDown:E,fullScreen:_,fullWidth:M,maxWidth:$,scroll:j}),H=(e=>{const{classes:n,scroll:t,maxWidth:r,fullWidth:i,fullScreen:o}=e,a={root:["root"],container:["container",`scroll${(0,s.Z)(t)}`],paper:["paper",`paperScroll${(0,s.Z)(t)}`,`paperWidth${(0,s.Z)(String(r))}`,i&&"paperFullWidth",o&&"paperFullScreen"]};return(0,l.Z)(a,h,n)})(V),K=o.useRef(),U=(0,c.Z)(v),Y=o.useMemo((()=>({titleId:U})),[U]);return(0,I.jsx)(P,(0,i.Z)({className:(0,a.Z)(H.root,W),BackdropProps:(0,i.Z)({transitionDuration:F,as:b},w),closeAfterTransition:!0,BackdropComponent:k,disableEscapeKeyDown:E,onClose:B,open:R,ref:n,onClick:e=>{K.current&&(K.current=null,D&&D(e),B&&B(e,"backdropClick"))},ownerState:V},O,{children:(0,I.jsx)(z,(0,i.Z)({appear:!0,in:R,timeout:F,role:"presentation"},T,{children:(0,I.jsx)(y,{className:(0,a.Z)(H.container),onMouseDown:e=>{K.current=e.target===e.currentTarget},ownerState:V,children:(0,I.jsx)(C,(0,i.Z)({as:A,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":U},N,{className:(0,a.Z)(H.paper,N.className),ownerState:V,children:(0,I.jsx)(Z.Provider,{value:Y,children:L})}))})}))}))}))},7488:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),i=t(67294),o=t(86010),a=t(53810),l="details_h+cY";function c(e){var n=Object.assign({},e);return i.createElement(a.PO,(0,r.Z)({},n,{className:(0,o.Z)("alert alert--info",l,n.className)}))}},52701:function(e,n,t){t.d(n,{O:function(){return b}});var r=t(87462),i=t(63366),o=t(67294),a=t(86010),l=t(53810),c=t(33692),s=t(13919),d=t(95999),u=t(90541),p="menuLinkText_OKON",m="hasHref_TwRn",f=t(72389),g=["items"],h=["item"],v=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],b=(0,o.memo)((function(e){var n=e.items,t=(0,i.Z)(e,g);return o.createElement(o.Fragment,null,n.map((function(e,n){return o.createElement(x,(0,r.Z)({key:n,item:e},t))})))}));function x(e){var n=e.item,t=(0,i.Z)(e,h);return"category"===n.type?0===n.items.length?null:o.createElement(I,(0,r.Z)({item:n},t)):o.createElement(S,(0,r.Z)({item:n},t))}function I(e){var n,t=e.item,s=e.onItemClick,u=e.activePath,g=e.level,h=(0,i.Z)(e,v),Z=t.items,x=t.label,I=t.collapsible,S=t.className,k=t.href,P=function(e){var n=(0,f.Z)();return(0,o.useMemo)((function(){return e.href?e.href:!n&&e.collapsible?(0,l.Wl)(e):void 0}),[e,n])}(t),y=(0,l._F)(t,u),C=(0,l.uR)({initialState:function(){return!!I&&(!y&&t.collapsed)}}),w=C.collapsed,L=C.setCollapsed,W=C.toggleCollapsed;return function(e){var n=e.isActive,t=e.collapsed,r=e.setCollapsed,i=(0,l.D9)(n);(0,o.useEffect)((function(){n&&!i&&t&&r(!1)}),[n,i,t,r])}({isActive:y,collapsed:w,setCollapsed:L}),o.createElement("li",{className:(0,a.Z)(l.kM.docs.docSidebarItemCategory,l.kM.docs.docSidebarItemCategoryLevel(g),"menu__list-item",{"menu__list-item--collapsed":w},S)},o.createElement("div",{className:"menu__list-item-collapsible"},o.createElement(c.Z,(0,r.Z)({className:(0,a.Z)("menu__link",(n={"menu__link--sublist":I&&!k,"menu__link--active":y},n[p]=!I,n[m]=!!P,n)),onClick:I?function(e){null==s||s(t),k?L(!1):(e.preventDefault(),W())}:function(){null==s||s(t)},href:I?null!=P?P:"#":P},h),x),k&&I&&o.createElement("button",{"aria-label":(0,d.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:x}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),W()}})),o.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:w},o.createElement(b,{items:Z,tabIndex:w?-1:0,onItemClick:s,activePath:u,level:g+1})))}function S(e){var n=e.item,t=e.onItemClick,d=e.activePath,p=e.level,m=(0,i.Z)(e,Z),f=n.href,g=n.label,h=n.className,v=(0,l._F)(n,d);return o.createElement("li",{className:(0,a.Z)(l.kM.docs.docSidebarItemLink,l.kM.docs.docSidebarItemLinkLevel(p),"menu__list-item",h),key:g},o.createElement(c.Z,(0,r.Z)({className:(0,a.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:f},(0,s.Z)(f)&&{onClick:t?function(){return t(n)}:void 0},m),(0,s.Z)(f)?g:o.createElement("span",null,g,o.createElement(u.Z,null))))}},34096:function(e,n,t){var r=t(87462),i=t(67294);n.Z=function(e){return i.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),i.createElement("g",{fill:"#7a7a7a"},i.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},29359:function(e,n,t){t.r(n),t.d(n,{Axis:function(){return r.RD},ChartView:function(){return r.TA},ComponentModel:function(){return r.tF},ComponentView:function(){return r.Ir},List:function(){return r.aV},Model:function(){return r.Hn},PRIORITY:function(){return r.Hr},SeriesModel:function(){return r.wJ},color:function(){return r.$_},connect:function(){return r.$j},dataTool:function(){return r.Ok},dependencies:function(){return r.HO},disConnect:function(){return r.eU},disconnect:function(){return r.zP},dispose:function(){return r.B9},env:function(){return r.OB},extendChartView:function(){return r.Zy},extendComponentModel:function(){return r.tv},extendComponentView:function(){return r.Sp},extendSeriesModel:function(){return r.Zr},format:function(){return r.WU},getCoordinateSystemDimensions:function(){return r.wL},getInstanceByDom:function(){return r.JE},getInstanceById:function(){return r.rp},getMap:function(){return r.FU},graphic:function(){return r.Q},helper:function(){return r._y},init:function(){return r.S1},innerDrawElementOnCanvas:function(){return r.z$},matrix:function(){return r.pI},number:function(){return r.Rx},parseGeoJSON:function(){return r.Nu},parseGeoJson:function(){return r.pQ},registerAction:function(){return r.zl},registerCoordinateSystem:function(){return r.RS},registerLayout:function(){return r.qR},registerLoading:function(){return r.yn},registerLocale:function(){return r.I2},registerMap:function(){return r.je},registerPostInit:function(){return r.sq},registerPostUpdate:function(){return r.Br},registerPreprocessor:function(){return r.ds},registerProcessor:function(){return r.Pu},registerTheme:function(){return r.aW},registerTransform:function(){return r.rV},registerUpdateLifecycle:function(){return r.YK},registerVisual:function(){return r.Og},setCanvasCreator:function(){return r.jQ},setPlatformAPI:function(){return r.g2},throttle:function(){return r.P2},time:function(){return r.XV},use:function(){return r.D$},util:function(){return r.D5},vector:function(){return r.xr},version:function(){return r.i8},zrUtil:function(){return r.gf},zrender:function(){return r.x_}});var r=t(15333)},9566:function(e,n,t){t.d(n,{o:function(){return s}});var r=t(70655);function i(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function l(e,n,t){return n instanceof RegExp?e.replace(n,t):n.reduce((function(e,n){return e.replace(n,t)}),e)}function c(e,n){return void 0===n&&(n={}),function(e,n){void 0===n&&(n={});for(var t=n.splitRegexp,r=void 0===t?o:t,c=n.stripRegexp,s=void 0===c?a:c,d=n.transform,u=void 0===d?i:d,p=n.delimiter,m=void 0===p?" ":p,f=l(l(e,r,"$1\0$2"),s,"\0"),g=0,h=f.length;"\0"===f.charAt(g);)g++;for(;"\0"===f.charAt(h-1);)h--;return f.slice(g,h).split("\0").map(u).join(m)}(e,(0,r.__assign)({delimiter:"."},n))}function s(e,n){return void 0===n&&(n={}),c(e,(0,r.__assign)({delimiter:"-"},n))}}}]);
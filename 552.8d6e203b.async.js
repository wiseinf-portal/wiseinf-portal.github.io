"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[552],{22320:function(ye,X,l){l.d(X,{X:function(){return V},b:function(){return Z}});var o=l(38230),S=l(71856),u=l(23159),C=l(14224),Z=function(){var N;return typeof C=="undefined"?o.Z:((N=C)===null||C===void 0||(C={NODE_ENV:"production",PUBLIC_PATH:"/"})===null||C===void 0?void 0:C.ANTD_VERSION)||o.Z},V=function(N,I){var k=(0,u.n)(Z(),"4.23.0")>-1?{open:N,onOpenChange:I}:{visible:N,onVisibleChange:I};return(0,S.Y)(k)}},15817:function(ye,X,l){l.d(X,{S:function(){return k}});var o=l(5952),S=l(97086),u=l(1378),C=l(3122),Z=l(25678),V=l(88357),O=l(93774),N=l(93236),I=l(62086),k=function(ne){(0,C.Z)(D,ne);var K=(0,Z.Z)(D);function D(){var R;(0,o.Z)(this,D);for(var M=arguments.length,G=new Array(M),q=0;q<M;q++)G[q]=arguments[q];return R=K.call.apply(K,[this].concat(G)),(0,V.Z)((0,u.Z)(R),"state",{hasError:!1,errorInfo:""}),R}return(0,S.Z)(D,[{key:"componentDidCatch",value:function(M,G){console.log(M,G)}},{key:"render",value:function(){return this.state.hasError?(0,I.jsx)(O.ZP,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(M){return{hasError:!0,errorInfo:M.message}}}]),D}(N.Component)},54380:function(ye,X,l){l.d(X,{D:function(){return Z}});var o=l(11642),S=l(73356),u=l(93236),C=l(90153);function Z(V,O){var N=(0,C.J)(V),I=(0,u.useRef)(),k=(0,u.useCallback)(function(){I.current&&(clearTimeout(I.current),I.current=null)},[]),ne=(0,u.useCallback)((0,S.Z)((0,o.Z)().mark(function K(){var D,R,M,G=arguments;return(0,o.Z)().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:for(D=G.length,R=new Array(D),M=0;M<D;M++)R[M]=G[M];if(!(O===0||O===void 0)){Y.next=3;break}return Y.abrupt("return",N.apply(void 0,R));case 3:return k(),Y.abrupt("return",new Promise(function(Ee){I.current=setTimeout((0,S.Z)((0,o.Z)().mark(function ae(){return(0,o.Z)().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.t0=Ee,H.next=3,N.apply(void 0,R);case 3:return H.t1=H.sent,(0,H.t0)(H.t1),H.abrupt("return");case 6:case"end":return H.stop()}},ae)})),O)}));case 5:case"end":return Y.stop()}},K)})),[N,k,O]);return(0,u.useEffect)(function(){return k},[k]),{run:ne,cancel:k}}},90153:function(ye,X,l){l.d(X,{J:function(){return u}});var o=l(30360),S=l(93236),u=function(Z){var V=(0,S.useRef)(null);return V.current=Z,(0,S.useCallback)(function(){for(var O,N=arguments.length,I=new Array(N),k=0;k<N;k++)I[k]=arguments[k];return(O=V.current)===null||O===void 0?void 0:O.call.apply(O,[V].concat((0,o.Z)(I)))},[])}},78780:function(ye,X,l){l.d(X,{Z:function(){return se}});var o=l(93236),S=l(82187),u=l.n(S),C=l(35361),Z=l(959),V=l(38634),O=l(32288),N=o.createContext(null),I=o.createContext({}),k=N,ne=l(88357),K=l(27263),D=l(2675),R=l(25679),M=l(12079),G=l(54513),q=function(r){var t=r.prefixCls,e=r.className,n=r.style,i=r.children,s=r.containerRef,d=r.id,v=r.onMouseEnter,m=r.onMouseOver,c=r.onMouseLeave,g=r.onClick,y=r.onKeyDown,p=r.onKeyUp,h={onMouseEnter:v,onMouseOver:m,onMouseLeave:c,onClick:g,onKeyDown:y,onKeyUp:p},b=o.useContext(I),E=b.panel,f=(0,G.x1)(E,s);return o.createElement(o.Fragment,null,o.createElement("div",(0,K.Z)({id:d,className:u()("".concat(t,"-content"),e),style:(0,C.Z)({},n),"aria-modal":"true",role:"dialog",ref:f},h),i))},Y=q,Ee=l(78627);function ae(a){return typeof a=="string"&&String(Number(a))===a?((0,Ee.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(a)):a}function $e(a){warning(!("wrapperClassName"in a),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!a.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var H={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Ze(a,r){var t,e,n,i,s=a.prefixCls,d=a.open,v=a.placement,m=a.inline,c=a.push,g=a.forceRender,y=a.autoFocus,p=a.keyboard,h=a.classNames,b=a.rootClassName,E=a.rootStyle,f=a.zIndex,B=a.className,A=a.id,j=a.style,x=a.motion,F=a.width,P=a.height,L=a.children,T=a.contentWrapperStyle,le=a.mask,Q=a.maskClosable,ee=a.maskMotion,$=a.maskClassName,J=a.maskStyle,te=a.afterOpenChange,ie=a.onClose,xe=a.onMouseEnter,fe=a.onMouseOver,Oe=a.onMouseLeave,we=a.onClick,_=a.onKeyDown,ge=a.onKeyUp,z=a.styles,ce=o.useRef(),de=o.useRef(),ue=o.useRef();o.useImperativeHandle(r,function(){return ce.current});var Pe=function(U){var pe=U.keyCode,be=U.shiftKey;switch(pe){case R.Z.TAB:{if(pe===R.Z.TAB){if(!be&&document.activeElement===ue.current){var Ge;(Ge=de.current)===null||Ge===void 0||Ge.focus({preventScroll:!0})}else if(be&&document.activeElement===de.current){var Ye;(Ye=ue.current)===null||Ye===void 0||Ye.focus({preventScroll:!0})}}break}case R.Z.ESC:{ie&&p&&(U.stopPropagation(),ie(U));break}}};o.useEffect(function(){if(d&&y){var w;(w=ce.current)===null||w===void 0||w.focus({preventScroll:!0})}},[d]);var ot=o.useState(!1),he=(0,Z.Z)(ot,2),ke=he[0],Ce=he[1],W=o.useContext(k),je;c===!1?je={distance:0}:c===!0?je={}:je=c||{};var me=(t=(e=(n=je)===null||n===void 0?void 0:n.distance)!==null&&e!==void 0?e:W==null?void 0:W.pushDistance)!==null&&t!==void 0?t:180,st=o.useMemo(function(){return{pushDistance:me,push:function(){Ce(!0)},pull:function(){Ce(!1)}}},[me]);o.useEffect(function(){if(d){var w;W==null||(w=W.push)===null||w===void 0||w.call(W)}else{var U;W==null||(U=W.pull)===null||U===void 0||U.call(W)}},[d]),o.useEffect(function(){return function(){var w;W==null||(w=W.pull)===null||w===void 0||w.call(W)}},[]);var lt=le&&o.createElement(D.ZP,(0,K.Z)({key:"mask"},ee,{visible:d}),function(w,U){var pe=w.className,be=w.style;return o.createElement("div",{className:u()("".concat(s,"-mask"),pe,h==null?void 0:h.mask,$),style:(0,C.Z)((0,C.Z)((0,C.Z)({},be),J),z==null?void 0:z.mask),onClick:Q&&d?ie:void 0,ref:U})}),it=typeof x=="function"?x(v):x,ve={};if(ke&&me)switch(v){case"top":ve.transform="translateY(".concat(me,"px)");break;case"bottom":ve.transform="translateY(".concat(-me,"px)");break;case"left":ve.transform="translateX(".concat(me,"px)");break;default:ve.transform="translateX(".concat(-me,"px)");break}v==="left"||v==="right"?ve.width=ae(F):ve.height=ae(P);var ct={onMouseEnter:xe,onMouseOver:fe,onMouseLeave:Oe,onClick:we,onKeyDown:_,onKeyUp:ge},dt=o.createElement(D.ZP,(0,K.Z)({key:"panel"},it,{visible:d,forceRender:g,onVisibleChanged:function(U){te==null||te(U)},removeOnLeave:!1,leavedClassName:"".concat(s,"-content-wrapper-hidden")}),function(w,U){var pe=w.className,be=w.style;return o.createElement("div",(0,K.Z)({className:u()("".concat(s,"-content-wrapper"),h==null?void 0:h.wrapper,pe),style:(0,C.Z)((0,C.Z)((0,C.Z)((0,C.Z)({},ve),be),T),z==null?void 0:z.wrapper)},(0,M.Z)(a,{data:!0})),o.createElement(Y,(0,K.Z)({id:A,containerRef:U,prefixCls:s,className:u()(B,h==null?void 0:h.content),style:(0,C.Z)((0,C.Z)({},j),z==null?void 0:z.content)},ct),L))}),rt=(0,C.Z)({},E);return f&&(rt.zIndex=f),o.createElement(k.Provider,{value:st},o.createElement("div",{className:u()(s,"".concat(s,"-").concat(v),b,(i={},(0,ne.Z)(i,"".concat(s,"-open"),d),(0,ne.Z)(i,"".concat(s,"-inline"),m),i)),style:rt,tabIndex:-1,ref:ce,onKeyDown:Pe},lt,o.createElement("div",{tabIndex:0,ref:de,style:H,"aria-hidden":"true","data-sentinel":"start"}),dt,o.createElement("div",{tabIndex:0,ref:ue,style:H,"aria-hidden":"true","data-sentinel":"end"})))}var Be=o.forwardRef(Ze),oe=Be,Je=function(r){var t=r.open,e=t===void 0?!1:t,n=r.prefixCls,i=n===void 0?"rc-drawer":n,s=r.placement,d=s===void 0?"right":s,v=r.autoFocus,m=v===void 0?!0:v,c=r.keyboard,g=c===void 0?!0:c,y=r.width,p=y===void 0?378:y,h=r.mask,b=h===void 0?!0:h,E=r.maskClosable,f=E===void 0?!0:E,B=r.getContainer,A=r.forceRender,j=r.afterOpenChange,x=r.destroyOnClose,F=r.onMouseEnter,P=r.onMouseOver,L=r.onMouseLeave,T=r.onClick,le=r.onKeyDown,Q=r.onKeyUp,ee=r.panelRef,$=o.useState(!1),J=(0,Z.Z)($,2),te=J[0],ie=J[1],xe=o.useState(!1),fe=(0,Z.Z)(xe,2),Oe=fe[0],we=fe[1];(0,O.Z)(function(){we(!0)},[]);var _=Oe?e:!1,ge=o.useRef(),z=o.useRef();(0,O.Z)(function(){_&&(z.current=document.activeElement)},[_]);var ce=function(he){var ke;if(ie(he),j==null||j(he),!he&&z.current&&!((ke=ge.current)!==null&&ke!==void 0&&ke.contains(z.current))){var Ce;(Ce=z.current)===null||Ce===void 0||Ce.focus({preventScroll:!0})}},de=o.useMemo(function(){return{panel:ee}},[ee]);if(!A&&!te&&!_&&x)return null;var ue={onMouseEnter:F,onMouseOver:P,onMouseLeave:L,onClick:T,onKeyDown:le,onKeyUp:Q},Pe=(0,C.Z)((0,C.Z)({},r),{},{open:_,prefixCls:i,placement:d,autoFocus:m,keyboard:g,width:p,mask:b,maskClosable:f,inline:B===!1,afterOpenChange:ce,ref:ge},ue);return o.createElement(I.Provider,{value:de},o.createElement(V.Z,{open:_||A||te,autoDestroy:!1,getContainer:B,autoLock:b&&(_||te)},o.createElement(oe,Pe)))},Ae=Je,Qe=Ae,Le=l(63716),De=l(46070),_e=l(5775),Se=l(52168),qe=l(12782),Te=l(97449),ze=l(30143),Ke=l(52127),Ne=a=>{var r,t;const{prefixCls:e,title:n,footer:i,extra:s,closeIcon:d,closable:v,onClose:m,headerStyle:c,drawerStyle:g,bodyStyle:y,footerStyle:p,children:h,classNames:b,styles:E}=a,{drawer:f}=o.useContext(Se.E_),B=o.useCallback(P=>o.createElement("button",{type:"button",onClick:m,"aria-label":"Close",className:`${e}-close`},P),[m]),[A,j]=(0,Ke.Z)(v,d,B,void 0,!0),x=o.useMemo(()=>{var P,L;return!n&&!A?null:o.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(P=f==null?void 0:f.styles)===null||P===void 0?void 0:P.header),c),E==null?void 0:E.header),className:u()(`${e}-header`,{[`${e}-header-close-only`]:A&&!n&&!s},(L=f==null?void 0:f.classNames)===null||L===void 0?void 0:L.header,b==null?void 0:b.header)},o.createElement("div",{className:`${e}-header-title`},j,n&&o.createElement("div",{className:`${e}-title`},n)),s&&o.createElement("div",{className:`${e}-extra`},s))},[A,j,s,c,e,n]),F=o.useMemo(()=>{var P,L;if(!i)return null;const T=`${e}-footer`;return o.createElement("div",{className:u()(T,(P=f==null?void 0:f.classNames)===null||P===void 0?void 0:P.footer,b==null?void 0:b.footer),style:Object.assign(Object.assign(Object.assign({},(L=f==null?void 0:f.styles)===null||L===void 0?void 0:L.footer),p),E==null?void 0:E.footer)},i)},[i,p,e]);return o.createElement("div",{className:`${e}-wrapper-body`,style:g},x,o.createElement("div",{className:u()(`${e}-body`,b==null?void 0:b.body,(r=f==null?void 0:f.classNames)===null||r===void 0?void 0:r.body),style:Object.assign(Object.assign(Object.assign({},(t=f==null?void 0:f.styles)===null||t===void 0?void 0:t.body),y),E==null?void 0:E.body)},h),F)},re=l(71400),He=l(24306),tt=l(59282),We=a=>{const{componentCls:r,motionDurationSlow:t}=a,e={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}};return{[r]:{[`${r}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${t}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${r}-panel-motion`]:{"&-left":[e,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[e,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[e,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[e,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const at=a=>{const{componentCls:r,zIndexPopup:t,colorBgMask:e,colorBgElevated:n,motionDurationSlow:i,motionDurationMid:s,padding:d,paddingLG:v,fontSizeLG:m,lineHeightLG:c,lineWidth:g,lineType:y,colorSplit:p,marginSM:h,colorIcon:b,colorIconHover:E,colorText:f,fontWeightStrong:B,footerPaddingBlock:A,footerPaddingInline:j}=a,x=`${r}-content-wrapper`;return{[r]:{position:"fixed",inset:0,zIndex:t,pointerEvents:"none","&-pure":{position:"relative",background:n,[`&${r}-left`]:{boxShadow:a.boxShadowDrawerLeft},[`&${r}-right`]:{boxShadow:a.boxShadowDrawerRight},[`&${r}-top`]:{boxShadow:a.boxShadowDrawerUp},[`&${r}-bottom`]:{boxShadow:a.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${r}-mask`]:{position:"absolute",inset:0,zIndex:t,background:e,pointerEvents:"auto"},[x]:{position:"absolute",zIndex:t,maxWidth:"100vw",transition:`all ${i}`,"&-hidden":{display:"none"}},[`&-left > ${x}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:a.boxShadowDrawerLeft},[`&-right > ${x}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:a.boxShadowDrawerRight},[`&-top > ${x}`]:{top:0,insetInline:0,boxShadow:a.boxShadowDrawerUp},[`&-bottom > ${x}`]:{bottom:0,insetInline:0,boxShadow:a.boxShadowDrawerDown},[`${r}-content`]:{width:"100%",height:"100%",overflow:"auto",background:n,pointerEvents:"auto"},[`${r}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${r}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,re.bf)(d)} ${(0,re.bf)(v)}`,fontSize:m,lineHeight:c,borderBottom:`${(0,re.bf)(g)} ${y} ${p}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${r}-extra`]:{flex:"none"},[`${r}-close`]:{display:"inline-block",marginInlineEnd:h,color:b,fontWeight:B,fontSize:m,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${s}`,textRendering:"auto","&:focus, &:hover":{color:E,textDecoration:"none"}},[`${r}-title`]:{flex:1,margin:0,color:f,fontWeight:a.fontWeightStrong,fontSize:m,lineHeight:c},[`${r}-body`]:{flex:1,minWidth:0,minHeight:0,padding:v,overflow:"auto"},[`${r}-footer`]:{flexShrink:0,padding:`${(0,re.bf)(A)} ${(0,re.bf)(j)}`,borderTop:`${(0,re.bf)(g)} ${y} ${p}`},"&-rtl":{direction:"rtl"}}}},Ue=a=>({zIndexPopup:a.zIndexPopupBase,footerPaddingBlock:a.paddingXS,footerPaddingInline:a.padding});var Ve=(0,He.I$)("Drawer",a=>{const r=(0,tt.TS)(a,{});return[at(r),We(r)]},Ue),Me=function(a,r){var t={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&r.indexOf(e)<0&&(t[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(t[e[n]]=a[e[n]]);return t};const Ie=null,Fe={distance:180},Re=a=>{var r,t,e,n,i,s,d,v,m;const{rootClassName:c,width:g,height:y,size:p="default",mask:h=!0,push:b=Fe,open:E,afterOpenChange:f,onClose:B,prefixCls:A,getContainer:j,style:x,className:F,visible:P,afterVisibleChange:L}=a,T=Me(a,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"]),{getPopupContainer:le,getPrefixCls:Q,direction:ee,drawer:$}=o.useContext(Se.E_),J=Q("drawer",A),[te,ie,xe]=Ve(J),fe=j===void 0&&le?()=>le(document.body):j,Oe=u()({"no-mask":!h,[`${J}-rtl`]:ee==="rtl"},c,ie,xe),we=o.useMemo(()=>g!=null?g:p==="large"?736:378,[g,p]),_=o.useMemo(()=>y!=null?y:p==="large"?736:378,[y,p]),ge={motionName:(0,De.m)(J,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},z=Pe=>({motionName:(0,De.m)(J,`panel-motion-${Pe}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),ce=(0,ze.H)(),[de,ue]=(0,Le.Cn)("Drawer",T.zIndex);return te(o.createElement(Te.BR,null,o.createElement(qe.Ux,{status:!0,override:!0},o.createElement(_e.Z.Provider,{value:ue},o.createElement(Qe,Object.assign({prefixCls:J,onClose:B,maskMotion:ge,motion:z},T,{classNames:{mask:u()((t=T.classNames)===null||t===void 0?void 0:t.mask,(e=$==null?void 0:$.classNames)===null||e===void 0?void 0:e.mask),content:u()((n=T.classNames)===null||n===void 0?void 0:n.content,(i=$==null?void 0:$.classNames)===null||i===void 0?void 0:i.content)},styles:{mask:Object.assign(Object.assign({},(s=T.styles)===null||s===void 0?void 0:s.mask),(d=$==null?void 0:$.styles)===null||d===void 0?void 0:d.mask),content:Object.assign(Object.assign({},(v=T.styles)===null||v===void 0?void 0:v.content),(m=$==null?void 0:$.styles)===null||m===void 0?void 0:m.content)},open:E!=null?E:P,mask:h,push:b,width:we,height:_,style:Object.assign(Object.assign({},$==null?void 0:$.style),x),className:u()($==null?void 0:$.className,F),rootClassName:Oe,getContainer:fe,afterOpenChange:f!=null?f:L,panelRef:ce,zIndex:de}),o.createElement(Ne,Object.assign({prefixCls:J},T,{onClose:B})))))))},Xe=a=>{const{prefixCls:r,style:t,className:e,placement:n="right"}=a,i=Me(a,["prefixCls","style","className","placement"]),{getPrefixCls:s}=o.useContext(Se.E_),d=s("drawer",r),[v,m,c]=Ve(d),g=u()(d,`${d}-pure`,`${d}-${n}`,m,c,e);return v(o.createElement("div",{className:g,style:t},o.createElement(Ne,Object.assign({prefixCls:d},i))))};Re._InternalPanelDoNotUseOrYouWillBeFired=Xe;var se=Re},67044:function(ye,X,l){l.d(X,{Z:function(){return r}});var o=l(82187),S=l.n(o),u=l(93236),C=l(52168),Z=l(12082),O=t=>{const{prefixCls:e,className:n,style:i,size:s,shape:d}=t,v=S()({[`${e}-lg`]:s==="large",[`${e}-sm`]:s==="small"}),m=S()({[`${e}-circle`]:d==="circle",[`${e}-square`]:d==="square",[`${e}-round`]:d==="round"}),c=u.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return u.createElement("span",{className:S()(e,v,m,n),style:Object.assign(Object.assign({},c),i)})},N=l(71400),I=l(24306),k=l(59282);const ne=new N.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),K=t=>({height:t,lineHeight:(0,N.bf)(t)}),D=t=>Object.assign({width:t},K(t)),R=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:ne,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),M=(t,e)=>Object.assign({width:e(t).mul(5).equal(),minWidth:e(t).mul(5).equal()},K(t)),G=t=>{const{skeletonAvatarCls:e,gradientFromColor:n,controlHeight:i,controlHeightLG:s,controlHeightSM:d}=t;return{[`${e}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},D(i)),[`${e}${e}-circle`]:{borderRadius:"50%"},[`${e}${e}-lg`]:Object.assign({},D(s)),[`${e}${e}-sm`]:Object.assign({},D(d))}},q=t=>{const{controlHeight:e,borderRadiusSM:n,skeletonInputCls:i,controlHeightLG:s,controlHeightSM:d,gradientFromColor:v,calc:m}=t;return{[`${i}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:v,borderRadius:n},M(e,m)),[`${i}-lg`]:Object.assign({},M(s,m)),[`${i}-sm`]:Object.assign({},M(d,m))}},Y=t=>Object.assign({width:t},K(t)),Ee=t=>{const{skeletonImageCls:e,imageSizeBase:n,gradientFromColor:i,borderRadiusSM:s,calc:d}=t;return{[`${e}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:i,borderRadius:s},Y(d(n).mul(2).equal())),{[`${e}-path`]:{fill:"#bfbfbf"},[`${e}-svg`]:Object.assign(Object.assign({},Y(n)),{maxWidth:d(n).mul(4).equal(),maxHeight:d(n).mul(4).equal()}),[`${e}-svg${e}-svg-circle`]:{borderRadius:"50%"}}),[`${e}${e}-circle`]:{borderRadius:"50%"}}},ae=(t,e,n)=>{const{skeletonButtonCls:i}=t;return{[`${n}${i}-circle`]:{width:e,minWidth:e,borderRadius:"50%"},[`${n}${i}-round`]:{borderRadius:e}}},$e=(t,e)=>Object.assign({width:e(t).mul(2).equal(),minWidth:e(t).mul(2).equal()},K(t)),H=t=>{const{borderRadiusSM:e,skeletonButtonCls:n,controlHeight:i,controlHeightLG:s,controlHeightSM:d,gradientFromColor:v,calc:m}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:v,borderRadius:e,width:m(i).mul(2).equal(),minWidth:m(i).mul(2).equal()},$e(i,m))},ae(t,i,n)),{[`${n}-lg`]:Object.assign({},$e(s,m))}),ae(t,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},$e(d,m))}),ae(t,d,`${n}-sm`))},Ze=t=>{const{componentCls:e,skeletonAvatarCls:n,skeletonTitleCls:i,skeletonParagraphCls:s,skeletonButtonCls:d,skeletonInputCls:v,skeletonImageCls:m,controlHeight:c,controlHeightLG:g,controlHeightSM:y,gradientFromColor:p,padding:h,marginSM:b,borderRadius:E,titleHeight:f,blockRadius:B,paragraphLiHeight:A,controlHeightXS:j,paragraphMarginTop:x}=t;return{[`${e}`]:{display:"table",width:"100%",[`${e}-header`]:{display:"table-cell",paddingInlineEnd:h,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:p},D(c)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},D(g)),[`${n}-sm`]:Object.assign({},D(y))},[`${e}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${i}`]:{width:"100%",height:f,background:p,borderRadius:B,[`+ ${s}`]:{marginBlockStart:y}},[`${s}`]:{padding:0,"> li":{width:"100%",height:A,listStyle:"none",background:p,borderRadius:B,"+ li":{marginBlockStart:j}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${e}-content`]:{[`${i}, ${s} > li`]:{borderRadius:E}}},[`${e}-with-avatar ${e}-content`]:{[`${i}`]:{marginBlockStart:b,[`+ ${s}`]:{marginBlockStart:x}}},[`${e}${e}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},H(t)),G(t)),q(t)),Ee(t)),[`${e}${e}-block`]:{width:"100%",[`${d}`]:{width:"100%"},[`${v}`]:{width:"100%"}},[`${e}${e}-active`]:{[`
        ${i},
        ${s} > li,
        ${n},
        ${d},
        ${v},
        ${m}
      `]:Object.assign({},R(t))}}},Be=t=>{const{colorFillContent:e,colorFill:n}=t,i=e,s=n;return{color:i,colorGradientEnd:s,gradientFromColor:i,gradientToColor:s,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}};var oe=(0,I.I$)("Skeleton",t=>{const{componentCls:e,calc:n}=t,i=(0,k.TS)(t,{skeletonAvatarCls:`${e}-avatar`,skeletonTitleCls:`${e}-title`,skeletonParagraphCls:`${e}-paragraph`,skeletonButtonCls:`${e}-button`,skeletonInputCls:`${e}-input`,skeletonImageCls:`${e}-image`,imageSizeBase:n(t.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${t.gradientFromColor} 25%, ${t.gradientToColor} 37%, ${t.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[Ze(i)]},Be,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),Ae=t=>{const{prefixCls:e,className:n,rootClassName:i,active:s,shape:d="circle",size:v="default"}=t,{getPrefixCls:m}=u.useContext(C.E_),c=m("skeleton",e),[g,y,p]=oe(c),h=(0,Z.Z)(t,["prefixCls","className"]),b=S()(c,`${c}-element`,{[`${c}-active`]:s},n,i,y,p);return g(u.createElement("div",{className:b},u.createElement(O,Object.assign({prefixCls:`${c}-avatar`,shape:d,size:v},h))))},Le=t=>{const{prefixCls:e,className:n,rootClassName:i,active:s,block:d=!1,size:v="default"}=t,{getPrefixCls:m}=u.useContext(C.E_),c=m("skeleton",e),[g,y,p]=oe(c),h=(0,Z.Z)(t,["prefixCls"]),b=S()(c,`${c}-element`,{[`${c}-active`]:s,[`${c}-block`]:d},n,i,y,p);return g(u.createElement("div",{className:b},u.createElement(O,Object.assign({prefixCls:`${c}-button`,size:v},h))))};const De="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var Se=t=>{const{prefixCls:e,className:n,rootClassName:i,style:s,active:d}=t,{getPrefixCls:v}=u.useContext(C.E_),m=v("skeleton",e),[c,g,y]=oe(m),p=S()(m,`${m}-element`,{[`${m}-active`]:d},n,i,g,y);return c(u.createElement("div",{className:p},u.createElement("div",{className:S()(`${m}-image`,n),style:s},u.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${m}-image-svg`},u.createElement("path",{d:De,className:`${m}-image-path`})))))},Te=t=>{const{prefixCls:e,className:n,rootClassName:i,active:s,block:d,size:v="default"}=t,{getPrefixCls:m}=u.useContext(C.E_),c=m("skeleton",e),[g,y,p]=oe(c),h=(0,Z.Z)(t,["prefixCls"]),b=S()(c,`${c}-element`,{[`${c}-active`]:s,[`${c}-block`]:d},n,i,y,p);return g(u.createElement("div",{className:b},u.createElement(O,Object.assign({prefixCls:`${c}-input`,size:v},h))))},ze=l(27263),Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},et=Ke,Ne=l(2633),re=function(e,n){return u.createElement(Ne.Z,(0,ze.Z)({},e,{ref:n,icon:et}))},He=u.forwardRef(re),nt=t=>{const{prefixCls:e,className:n,rootClassName:i,style:s,active:d,children:v}=t,{getPrefixCls:m}=u.useContext(C.E_),c=m("skeleton",e),[g,y,p]=oe(c),h=S()(c,`${c}-element`,{[`${c}-active`]:d},y,n,i,p),b=v!=null?v:u.createElement(He,null);return g(u.createElement("div",{className:h},u.createElement("div",{className:S()(`${c}-image`,n),style:s},b)))},We=l(30360),Ue=t=>{const e=m=>{const{width:c,rows:g=2}=t;if(Array.isArray(c))return c[m];if(g-1===m)return c},{prefixCls:n,className:i,style:s,rows:d}=t,v=(0,We.Z)(Array(d)).map((m,c)=>u.createElement("li",{key:c,style:{width:e(c)}}));return u.createElement("ul",{className:S()(n,i),style:s},v)},Me=t=>{let{prefixCls:e,className:n,width:i,style:s}=t;return u.createElement("h3",{className:S()(e,n),style:Object.assign({width:i},s)})};function Ie(t){return t&&typeof t=="object"?t:{}}function Fe(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Re(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function Xe(t,e){const n={};return(!t||!e)&&(n.width="61%"),!t&&e?n.rows=3:n.rows=2,n}const se=t=>{const{prefixCls:e,loading:n,className:i,rootClassName:s,style:d,children:v,avatar:m=!1,title:c=!0,paragraph:g=!0,active:y,round:p}=t,{getPrefixCls:h,direction:b,skeleton:E}=u.useContext(C.E_),f=h("skeleton",e),[B,A,j]=oe(f);if(n||!("loading"in t)){const x=!!m,F=!!c,P=!!g;let L;if(x){const Q=Object.assign(Object.assign({prefixCls:`${f}-avatar`},Fe(F,P)),Ie(m));L=u.createElement("div",{className:`${f}-header`},u.createElement(O,Object.assign({},Q)))}let T;if(F||P){let Q;if(F){const $=Object.assign(Object.assign({prefixCls:`${f}-title`},Re(x,P)),Ie(c));Q=u.createElement(Me,Object.assign({},$))}let ee;if(P){const $=Object.assign(Object.assign({prefixCls:`${f}-paragraph`},Xe(x,F)),Ie(g));ee=u.createElement(Ue,Object.assign({},$))}T=u.createElement("div",{className:`${f}-content`},Q,ee)}const le=S()(f,{[`${f}-with-avatar`]:x,[`${f}-active`]:y,[`${f}-rtl`]:b==="rtl",[`${f}-round`]:p},E==null?void 0:E.className,i,s,A,j);return B(u.createElement("div",{className:le,style:Object.assign(Object.assign({},E==null?void 0:E.style),d)},L,T))}return typeof v!="undefined"?v:null};se.Button=Le,se.Avatar=Ae,se.Input=Te,se.Image=Se,se.Node=nt;var a=se,r=a}}]);

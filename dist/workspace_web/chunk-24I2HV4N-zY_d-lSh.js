import{a9 as Ce,aa as be,r as t,ab as xe,c as oe,m as k,k as f,e as Te,o as ke,z as Re,j as y,A as _e,b as O,d as L,f as $,ac as Se,C as Be,D as Ee}from"./input.js";import{ab as Ae,ac as De,ad as Oe,ae as Me,af as Ne,ag as Fe,ah as Ie,ai as H}from"./App-EbJ8EOYb.js";function so(e){const{theme:o}=Ce(),n=be();return t.useMemo(()=>xe(o.direction,{...n,...e}),[e,o.direction,n])}function je(e){return"current"in e}var re=()=>typeof window<"u";function He(){var e;const o=navigator.userAgentData;return(e=o==null?void 0:o.platform)!=null?e:navigator.platform}var ze=e=>re()&&e.test(navigator.vendor),Ve=e=>re()&&e.test(He()),Le=()=>Ve(/mac|iphone|ipad|ipod/i),$e=()=>Le()&&ze(/apple/i);function Ke(e){const{ref:o,elements:n,enabled:u}=e,c=()=>{var s,d;return(d=(s=o.current)==null?void 0:s.ownerDocument)!=null?d:document};Ae(c,"pointerdown",s=>{if(!$e()||!u)return;const d=s.target,h=(n??[o]).some(a=>{const v=je(a)?a.current:a;return(v==null?void 0:v.contains(d))||v===d});c().activeElement!==d&&h&&(s.preventDefault(),d.focus())})}var[Ue,R]=oe({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Ge,K]=oe({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `});function qe(e){const o=t.Children.only(e.children),{getTriggerProps:n}=R();return t.cloneElement(o,n(o.props,o.ref))}qe.displayName="PopoverTrigger";var x={click:"click",hover:"hover"};function Je(e={}){const{closeOnBlur:o=!0,closeOnEsc:n=!0,initialFocusRef:u,id:c,returnFocusOnClose:s=!0,autoFocus:d=!0,arrowSize:P,arrowShadowColor:h,trigger:a=x.click,openDelay:v=200,closeDelay:C=200,isLazy:M,lazyBehavior:te="unmount",computePositionOnMount:se,...ae}=e,{isOpen:l,onClose:m,onOpen:N,onToggle:U}=De(e),F=t.useRef(null),_=t.useRef(null),b=t.useRef(null),T=t.useRef(!1),G=t.useRef(!1);l&&(G.current=!0);const[q,ie]=t.useState(!1),[J,ce]=t.useState(!1),le=t.useId(),ue=c??le,[Q,S,B,E]=["popover-trigger","popover-content","popover-header","popover-body"].map(r=>`${r}-${ue}`),{referenceRef:A,getArrowProps:de,getPopperProps:W,getArrowInnerProps:pe,forceUpdate:ve}=Oe({...ae,enabled:l||!!se}),X=Me({isOpen:l,ref:b});Ke({enabled:l,ref:_}),Ne(b,{focusRef:_,visible:l,shouldFocus:s&&a===x.click}),Fe(b,{focusRef:u,visible:l,shouldFocus:d&&a===x.click});const Y=Ie({wasSelected:G.current,enabled:M,mode:te,isSelected:X.present}),fe=t.useCallback((r={},p=null)=>{const i={...r,style:{...r.style,transformOrigin:H.transformOrigin.varRef,[H.arrowSize.var]:P?`${P}px`:void 0,[H.arrowShadowColor.var]:h},ref:k(b,p),children:Y?r.children:null,id:S,tabIndex:-1,role:"dialog",onKeyDown:f(r.onKeyDown,g=>{n&&g.key==="Escape"&&m()}),onBlur:f(r.onBlur,g=>{const D=ee(g),j=z(b.current,D),we=z(_.current,D);l&&o&&(!j&&!we)&&m()}),"aria-labelledby":q?B:void 0,"aria-describedby":J?E:void 0};return a===x.hover&&(i.role="tooltip",i.onMouseEnter=f(r.onMouseEnter,()=>{T.current=!0}),i.onMouseLeave=f(r.onMouseLeave,g=>{g.nativeEvent.relatedTarget!==null&&(T.current=!1,setTimeout(()=>m(),C))})),i},[Y,S,q,B,J,E,a,n,m,l,o,C,h,P]),me=t.useCallback((r={},p=null)=>W({...r,style:{visibility:l?"visible":"hidden",...r.style}},p),[l,W]),ge=t.useCallback((r,p=null)=>({...r,ref:k(p,F,A)}),[F,A]),w=t.useRef(),I=t.useRef(),Z=t.useCallback(r=>{F.current==null&&A(r)},[A]),Pe=t.useCallback((r={},p=null)=>{const i={...r,ref:k(_,p,Z),id:Q,"aria-haspopup":"dialog","aria-expanded":l,"aria-controls":S};return a===x.click&&(i.onClick=f(r.onClick,U)),a===x.hover&&(i.onFocus=f(r.onFocus,()=>{w.current===void 0&&N()}),i.onBlur=f(r.onBlur,g=>{const D=ee(g),j=!z(b.current,D);l&&o&&j&&m()}),i.onKeyDown=f(r.onKeyDown,g=>{g.key==="Escape"&&m()}),i.onMouseEnter=f(r.onMouseEnter,()=>{T.current=!0,w.current=window.setTimeout(()=>N(),v)}),i.onMouseLeave=f(r.onMouseLeave,()=>{T.current=!1,w.current&&(clearTimeout(w.current),w.current=void 0),I.current=window.setTimeout(()=>{T.current===!1&&m()},C)})),i},[Q,l,S,a,Z,U,N,o,m,v,C]);t.useEffect(()=>()=>{w.current&&clearTimeout(w.current),I.current&&clearTimeout(I.current)},[]);const he=t.useCallback((r={},p=null)=>({...r,id:B,ref:k(p,i=>{ie(!!i)})}),[B]),ye=t.useCallback((r={},p=null)=>({...r,id:E,ref:k(p,i=>{ce(!!i)})}),[E]);return{forceUpdate:ve,isOpen:l,onAnimationComplete:X.onComplete,onClose:m,getAnchorProps:ge,getArrowProps:de,getArrowInnerProps:pe,getPopoverPositionerProps:me,getPopoverProps:fe,getTriggerProps:Pe,getHeaderProps:he,getBodyProps:ye}}function z(e,o){return e===o||(e==null?void 0:e.contains(o))}function ee(e){var o;const n=e.currentTarget.ownerDocument.activeElement;return(o=e.relatedTarget)!=null?o:n}function Qe(e){const o=Te("Popover",e),{children:n,...u}=ke(e),c=Re(),s=Je({...u,direction:c.direction});return y.jsx(Ue,{value:s,children:y.jsx(Ge,{value:o,children:_e(n,{isOpen:s.isOpen,onClose:s.onClose,forceUpdate:s.forceUpdate})})})}Qe.displayName="Popover";var V=(e,o)=>o?`${e}.${o}, ${o}`:void 0;function We(e){var o;const{bg:n,bgColor:u,backgroundColor:c,shadow:s,boxShadow:d,shadowColor:P}=e,{getArrowProps:h,getArrowInnerProps:a}=R(),v=K(),C=(o=n??u)!=null?o:c,M=s??d;return y.jsx(O.div,{...h(),className:"chakra-popover__arrow-positioner",children:y.jsx(O.div,{className:L("chakra-popover__arrow",e.className),...a(e),__css:{"--popper-arrow-shadow-color":V("colors",P),"--popper-arrow-bg":V("colors",C),"--popper-arrow-shadow":V("shadows",M),...v.arrow}})})}We.displayName="PopoverArrow";var Xe=$(function(o,n){const{onClose:u}=R(),c=K();return y.jsx(Se,{size:"sm",onClick:u,className:L("chakra-popover__close-btn",o.className),__css:c.closeButton,ref:n,...o})});Xe.displayName="PopoverCloseButton";function Ye(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var Ze={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},eo=O(Be.section),ne=$(function(o,n){const{variants:u=Ze,...c}=o,{isOpen:s}=R();return y.jsx(eo,{ref:n,variants:Ye(u),initial:!1,animate:s?"enter":"exit",...c})});ne.displayName="PopoverTransition";var oo=$(function(o,n){const{rootProps:u,motionProps:c,...s}=o,{getPopoverProps:d,getPopoverPositionerProps:P,onAnimationComplete:h}=R(),a=K(),v={position:"relative",display:"flex",flexDirection:"column",...a.content};return y.jsx(O.div,{...P(u),__css:a.popper,className:"chakra-popover__popper",children:y.jsx(ne,{...c,...d(s,n),onAnimationComplete:Ee(h,s.onAnimationComplete),className:L("chakra-popover__content",o.className),__css:v})})});oo.displayName="PopoverContent";export{Qe as P,K as a,so as b,qe as c,oo as d,We as e,Xe as f,R as u};
import{f as x,j as l,g as i,h as b,l as C,o as E,n as I,r as f,a3 as P}from"./input.js";import{aa as z}from"./App-YasK6gmY.js";var v=x(function(o,s){const{children:t,placeholder:n,className:r,...a}=o;return l.jsxs(i.select,{...a,ref:s,className:b("chakra-select",r),children:[n&&l.jsx("option",{value:"",children:n}),t]})});v.displayName="SelectField";function F(e,o){const s={},t={};for(const[n,r]of Object.entries(e))o.includes(n)?s[n]=r:t[n]=r;return[s,t]}var H=x((e,o)=>{var s;const t=C("Select",e),{rootProps:n,placeholder:r,icon:a,color:c,height:_,h:d,minH:h,minHeight:y,iconColor:p,iconSize:u,...j}=E(e),[g,N]=F(j,P),m=z(N),k={width:"100%",height:"fit-content",position:"relative",color:c},w={paddingEnd:"2rem",...t.field,_focus:{zIndex:"unset",...(s=t.field)==null?void 0:s._focus}};return l.jsxs(i.div,{className:"chakra-select__wrapper",__css:k,...g,...n,children:[l.jsx(v,{ref:o,height:d??_,minH:h??y,placeholder:r,...m,__css:w,children:e.children}),l.jsx(S,{"data-disabled":I(m.disabled),...(p||c)&&{color:p||c},__css:t.icon,...u&&{fontSize:u},children:a})]})});H.displayName="Select";var M=e=>l.jsx("svg",{viewBox:"0 0 24 24",...e,children:l.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),R=i("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),S=e=>{const{children:o=l.jsx(M,{}),...s}=e,t=f.cloneElement(o,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return l.jsx(R,{...s,className:"chakra-select__icon-wrapper",children:f.isValidElement(o)?t:null})};S.displayName="SelectIcon";export{H as S};

import{r as s,j as t,h as p,_ as c}from"./input.js";import{M as m}from"./ModelsListDrawer-XC7c1wgT.js";import{app as a}from"/scripts/app.js";import{a6 as u,k as v}from"./App-VDFuO2jE.js";import"./chunk-JARCRF6W-MhzYgnSi.js";import"./index-pz0vT7Or.js";import"/scripts/api.js";import"./chunk-3RSXBRAN-_hUGXHpc.js";const f=s.lazy(()=>c(()=>import("./InstallMissingModelsButton-_PW--VJB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])));function T(){const{setRoute:r,route:i}=s.useContext(u),n=async e=>{if(e.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const d=e.dataTransfer.getData("modelRelativePath"),l=e.dataTransfer.getData("nodeType"),o=LiteGraph.createNode(l);o.pos=[e.canvasX,e.canvasY],o.configure({widgets_values:[d]}),a.graph.add(o)};return s.useEffect(()=>(a.canvasEl.addEventListener("drop",n),()=>{a.canvasEl.removeEventListener("drop",n)}),[]),t.jsxs(v,{style:{position:"relative"},children:[t.jsx(p,{size:"sm",colorScheme:"blue","aria-label":"My models",onClick:()=>r("modelList"),px:1,children:"Models"}),t.jsx("div",{style:{position:"absolute",top:"38px",left:"0px"},children:t.jsx(f,{})}),i==="modelList"&&t.jsx(m,{onClose:()=>r("root")})]})}export{T as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["workspace_web/InstallMissingModelsButton-_PW--VJB.js","workspace_web/input.js","workspace_web/ModelsListDrawer-XC7c1wgT.js","workspace_web/App-VDFuO2jE.js","workspace_web/assets/App-JXePnJiV.css","workspace_web/chunk-JARCRF6W-MhzYgnSi.js","workspace_web/index-pz0vT7Or.js","workspace_web/chunk-3RSXBRAN-_hUGXHpc.js","workspace_web/chunk-NTCQBYKE-6PURLfzD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
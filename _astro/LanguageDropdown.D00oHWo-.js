import{j as t}from"./jsx-runtime.TBa3i5EZ.js";import{r as n}from"./index.CVf8TyFT.js";import{L as u}from"./config.d_t03UM_.js";/* empty css                       */const x=()=>{const[l,r]=n.useState("fr"),[a,o]=n.useState(!1),s=n.useRef(null),d=e=>{r(e),o(!1),e!==l&&(e==="fr"?window.location.href="/":window.location.href=`/${e}`)},f=()=>{o(!a)};return n.useEffect(()=>{const e=m=>{s.current&&!s.current.contains(m.target)&&o(!1)},i=window.location.pathname.split("/")[1];if(i===""){window.location.href="/fr";return}const c=i===""?"fr":i;return u.includes(c)?r(c):r("fr"),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),t.jsxs("div",{className:"relative inline-block",ref:s,children:[t.jsxs("button",{className:"orbitron inline-flex justify-start items-center bg-transparent px-4 py-2 text-sm font-medium text-slate-400 focus:outline-none",onClick:f,children:[l,t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:t.jsx("path",{fill:"currentColor",d:"M8 9h8l-4 7"})})]}),a&&t.jsx("div",{className:"absolute right-0 mt-2 w-20 origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu",children:u.map(e=>t.jsx("div",{className:"py-1",children:t.jsx("button",{className:"orbitron text-slate-400 inline-block px-4 py-2 text-sm hover:bg-slate-800 w-full",onClick:()=>d(e),children:e})},e))})]})};export{x as default};

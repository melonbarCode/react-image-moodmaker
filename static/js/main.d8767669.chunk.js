(this["webpackJsonpreact-image-moodmaker"]=this["webpackJsonpreact-image-moodmaker"]||[]).push([[0],{31:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,l=t(0),s=t(21),d=t.n(s),u=t(4),b=t(5),p=(t(31),t(3)),g=t(22),x=t(1),f=Object(l.createContext)({state:{},actions:{}}),h=function(n){var e=n.children,t=Object(l.useState)(null),a=Object(p.a)(t,2),i=a[0],r=a[1],c=Object(l.useState)(null),o=Object(p.a)(c,2),s=o[0],d=o[1],u=Object(l.useState)(null),b=Object(p.a)(u,2),g={state:{imageFile:i,imageUrl:s,imageBinary:b[0]},actions:{setImageFile:r,setImageUrl:d,setImageBinary:b[1]}};return Object(x.jsx)(f.Provider,{value:g,children:e})},m=function(){var n=Object(l.useContext)(f),e=n.state,t=void 0===e?{}:e,a=n.actions;return[t,void 0===a?{}:a]},j=b.a.div(a||(a=Object(u.a)(["\n  /* margin: auto 16px; */\n  margin: 10px auto;\n  width: 80%;\n\n  .file-drop {\n    /* relatively position the container bc the contents are absolute */\n    position: relative;\n    height: 150px;\n    background-color: #fff;\n    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  }\n\n  .file-drop:hover {\n    /* overlay a black mask when dragging over the frame */\n    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n\n  .file-drop > .file-drop-target {\n    /* basic styles */\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    border-radius: 2px;\n\n    /* horizontally and vertically center all content */\n    display: flex;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n\n    flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n\n    align-items: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n\n    justify-content: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n\n    align-content: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n\n    text-align: center;\n    transition: background-color 1s, color 1s;\n    border: #000000 1px dashed;\n  }\n\n  .file-drop > .file-drop-target.file-drop-dragging-over-frame {\n    /* overlay a black mask when dragging over the frame */\n    border: none;\n    background-color: rgba(0, 0, 0, 0.65);\n    box-shadow: none;\n    z-index: 50;\n    opacity: 1;\n\n    /* typography */\n    color: white;\n  }\n\n  .file-drop > .file-drop-target.file-drop-dragging-over-target {\n    /* turn stuff orange when we are dragging over the target */\n    color: #96c0ce;\n    box-shadow: 0 0 13px 3px #96c0ce 0.6;\n  }\n\n  .hidden {\n    display: none;\n  }\n"]))),y=function(){var n=Object(l.useRef)(null),e=m(),t=Object(p.a)(e,2),a=(t[0],t[1]),i=a.setImageFile,r=a.setImageUrl,c=a.setImageBinary;return Object(x.jsx)(j,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g.FileDrop,{onDrop:function(n,e){i(n[0]);var t=new FileReader;t.onloadend=function(){var e=t.result.split(",")[1],a=atob(e);r(t.result),i(n[0]),c(a)},t.readAsDataURL(n[0])},onTargetClick:function(){n.current.click()},children:"\uc774\ubbf8\uc9c0\ub97c \ub123\uc5b4\uc8fc\uc138\uc694 ( \ub4dc\ub798\uadf8\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4 + )"}),Object(x.jsx)("input",{onChange:function(n){var e=n.target.files,t=new FileReader;t.onloadend=function(){var n=t.result.split(",")[1],a=atob(n);r(t.result),i(e[0]),c(a)},t.readAsDataURL(e[0])},ref:n,type:"file",className:"hidden"})]})})},v=b.a.div(i||(i=Object(u.a)(["\n  /* margin: 20px; */\n  margin: 30px auto;\n  width: 80%;\n\n  .header-title-container {\n    text-align: center;\n    padding: 10px;\n    margin: 10px;\n  }\n\n  .header-title {\n    padding: 20px;\n    display: inline-block;\n    box-sizing: border-box;\n    border: 1px solid #c25b56;\n    border-radius: 10px 10px;\n    font-size: 15px;\n    transition: opacity 0.5s;\n  }\n\n  .header-title:hover {\n    opacity: 0.6;\n  }\n"]))),w=function(){return Object(x.jsx)(v,{children:Object(x.jsx)("div",{className:"header-title-container",children:Object(x.jsx)("span",{className:"header-title",children:"ONE CLICK IMAGE MOODMAKER"})})})},O=b.a.div(r||(r=Object(u.a)(["\n  /* margin: 20px; */\n  margin: 30px auto;\n  width: 80%;\n\n  .image-preview-container {\n    position: relative;\n    text-align: center;\n    /* left: 50%; */\n    padding: 10px;\n    margin: 10px auto;\n    width: 80%;\n    height: 20vmax;\n  }\n\n  .image-preview-example {\n    display: table;\n    position: absolute;\n    box-sizing: border-box;\n    background-color: #beb9b5;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  .image-site {\n    display: table;\n    position: absolute;\n    box-sizing: border-box;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .image-preview-example-title {\n    vertical-align: middle;\n    display: table-cell;\n  }\n"]))),k=function(){var n=m(),e=Object(p.a)(n,2),t=e[0],a=e[1],i=(t.imageFile,t.imageUrl);a.setImageFile,a.setImageUrl;return console.log("imageUrl Check",i),Object(x.jsx)(O,{children:Object(x.jsxs)("div",{className:"image-preview-container",children:[Object(x.jsx)("div",{className:"image-preview-example",children:Object(x.jsx)("span",{className:"image-preview-example-title",children:"preview"})}),i&&Object(x.jsx)("img",{className:"image-site",alt:"preview image",src:i})]})})},L=t(8),T=t.n(L),B=t(10),F=t.n(B),C=t(26),I=function(n){var e,t=m(),a=Object(p.a)(t,2),i=a[0],r=(a[1],i.imageFile),c=n.funcButtonLabel,o=n.funcType,s=Object(l.useState)(null),d=Object(p.a)(s,2),u=d[0],b=d[1];return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("button",{onClick:(e=o,Object(C.a)(F.a.mark((function n(){var t,a,i;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("daytime",e),t.append("source",r),t.append("inference_size","1024"),n.next=7,T.a.post("https://master-hi-dt-psi1104.endpoint.ainize.ai/predict",t,{headers:{Accept:"images/*","Content-Type":"multipart/form-data"},responseType:"blob"});case 7:a=n.sent,(i=new FileReader).readAsDataURL(a.data),i.onload=function(){var n=i.result;b(n)};case 11:case"end":return n.stop()}}),n)})))),children:c}),u&&Object(x.jsx)("img",{className:"img-container",src:u})]})},N=[{funcButtonLabel:"day1",funcType:"day1"},{funcButtonLabel:"day2",funcType:"day2"},{funcButtonLabel:"day3",funcType:"day3"},{funcButtonLabel:"day4",funcType:"day4"},{funcButtonLabel:"sunset1",funcType:"sunset1"},{funcButtonLabel:"sunset2",funcType:"sunset2"},{funcButtonLabel:"sunset3",funcType:"sunset3"},{funcButtonLabel:"sunset4",funcType:"sunset4"},{funcButtonLabel:"bluehour1",funcType:"bluehour1"},{funcButtonLabel:"bluehour2",funcType:"bluehour2"},{funcButtonLabel:"night1",funcType:"night1"},{funcButtonLabel:"night2",funcType:"night2"},{funcButtonLabel:"night3",funcType:"night3"},{funcButtonLabel:"night4",funcType:"night4"},{funcButtonLabel:"night5",funcType:"night5"},{funcButtonLabel:"night6",funcType:"night6"}],z=function(n){return Object(x.jsx)(U,{children:Object(x.jsx)("div",{className:"flex-container",children:N.map((function(n){return Object(x.jsx)(I,{funcType:n.funcType,funcButtonLabel:n.funcButtonLabel},n.funcType)}))})})},U=b.a.div(c||(c=Object(u.a)(["\n  .flex-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 30px;\n  }\n\n  .img-container {\n    margin: 5px auto;\n    position: relative;\n    width: 100%;\n    height: 150px;\n    object-fit: cover;\n  }\n\n  .card {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    padding: 10px;\n    border: rgba(0, 0, 0, 0.12) solid 0.5px;\n    box-sizing: border-box;\n    background-color: #ffffff;\n    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  }\n\n  .card:hover {\n    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n"])));var D=function(){return Object(x.jsx)(h,{children:Object(x.jsxs)(R,{children:[Object(x.jsx)(w,{}),Object(x.jsx)(y,{}),Object(x.jsx)(k,{}),Object(x.jsx)(z,{}),Object(x.jsx)("div",{className:"empty-container"})]})})},R=b.a.div(o||(o=Object(u.a)(["\n  position: absolute;\n  background-color: #fef6eb;\n  width: 100%;\n\n  /* height: 100%; */\n\n  .empty-container {\n    height: 1500px;\n  }\n"]))),A=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};d.a.render(Object(x.jsx)(D,{}),document.getElementById("root")),A()}},[[55,1,2]]]);
//# sourceMappingURL=main.d8767669.chunk.js.map
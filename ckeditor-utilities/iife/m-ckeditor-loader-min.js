!function(){"use strict";!function(){void 0===window.mUtilities&&(window.mUtilities={}),void 0===window.mUtilities.ckeditor&&(window.mUtilities.ckeditor={});const e=document.currentScript.dataset,i=document.querySelectorAll("textarea.editor");if(window.mUtilities.ckeditor.cke_url=window.mUtilities.ckeditor.cke_url||e.cke||"/assets/ckeditor-dist/m-ckeditor-min.js",window.mUtilities.ckeditor.upl_url=window.mUtilities.ckeditor.upl_url||e.ckeUpl||"/ckeditor/file-uploader",window.mUtilities.ckeditor.img_viewer=window.mUtilities.ckeditor.img_viewer||e.ckeImgViewer||"/viewer/",i.length){window.ckeditor_instances={};const e=["heading","|","bold","italic","link","|","alignment:left","alignment:center","alignment:right","alignment:justify","|","outdent","indent","|","bulletedList","numberedList","|","imageUpload","blockQuote","insertTable","undo","redo"],t=["heading","|","bold","italic","link","|","alignment:left","alignment:center","alignment:right","alignment:justify","|","outdent","indent","|","bulletedList","numberedList","|","blockQuote","insertTable","undo","redo"],l=["heading","|","bold","italic","link","|","alignment:left","alignment:center","alignment:right","alignment:justify","|","outdent","indent","|","bulletedList","numberedList","|","blockQuote","undo","redo"];let o=document.createElement("script");o.onload=()=>{i.forEach((function(i,o){let n={uploaderUrl:window.mUtilities.ckeditor.upl_url,uploadMaxSize:4194304,imgViewer:window.mUtilities.ckeditor.img_viewer,toolbar:e};i.dataset.ckeUplMaxSize&&(n.uploadMaxSize=i.dataset.ckeUplMaxSize),i.classList.contains("editor-lite")?n={toolbar:t,removePlugins:["mUploadAdapter","ImageUpload"]}:i.classList.contains("editor-xlite")&&(n={toolbar:l,removePlugins:["mUploadAdapter","ImageUpload","insertTable"]}),ClassicEditor.create(i,n).then(e=>{i.disabled&&(e.isReadOnly=!0),window.ckeditor_instances[i.id?i.id:o]=e,document.querySelectorAll('[data-enable="editor"]:disabled').forEach(e=>{e.disabled=!1,e.closest(".form-group").classList.remove("disabled")})}).catch(e=>{console.group("textarea "+o),console.error(e),console.log("textarea",i),console.groupEnd()})}))},o.src=window.mUtilities.ckeditor.cke_url,o.type="text/javascript",document.head.appendChild(o)}}()}();
//# sourceMappingURL=m-ckeditor-loader-min.js.map
!function(){function HelperFnsWrapper(){var e={fieldMapOut:{a:"isArchived",c:"dateCreated",d:"date",e:"duration",f:"formats",g:"durationText",h:"favorites",i:"items",k:"isNote",l:"modifiedOffline",m:"isCollapsed",n:"note",o:"modifiedOfflineText",p:"priority",r:"repeatDate",s:"dateText",t:"text",u:"versionText",v:"version",x:"isDeleted",z:"isComplete",ai:"archivedItems",ad:"allDayDate",id:"id","*":"isStarred","^":"dateCompleted"},getMapping:function(e,t){var a={};for(var r in e)if(void 0!==e[r]&&null!==e[r]){var n=t[r];n?a[n]=e[r]:a[r]=e[r]}return a},translateObjOut:function(e){return this.getMapping(e,this.fieldMapOut)}};return e}function WorkerLoaderWrapper(){function e(e,t,a){postMessage({id:e,done:!1,data:void 0,msg:t,stack:a}),close()}function t(e,t){postMessage({id:e,done:!0,data:t}),close()}onmessage=function(a){try{var r=indexedDB.open("duchess");r.onupgradeneeded=function(t){e(a.data.id,"No pre-existing DB"),r.transaction.abort()},r.onerror=function(t){t.target&&t.target.error&&t.target.error.code?20!==t.target.error.code&&e(a.data.id,"Error opening DB: "+t.target.error.code):e(a.data.id,"Error opening DB: Unknown Error")},r.onsuccess=function(r){var n=r.target.result,o=[],i=n.transaction("items","readwrite");i.oncomplete=function(){n.close();try{for(var r=new Array(o.length),i=0;i<o.length;++i)r[i]=HelperFnsWrapper_.translateObjOut(o[i]);t(a.data.id,r)}catch(c){e(a.data.id,c.message,c.stack)}close()},i.onerror=function(){e(a.data.id,"Transaction error")},i.onabort=function(){e(a.data.id,"Transaction abort")};var c=i.objectStore("items");c?c.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t["continue"]())}:e(a.data.id,"No items store present")}}catch(n){e(a.data.id,n.message,n.stack)}}}function shouldRunWorkerPreload(){var e=!1,t=navigator.userAgent,a=-1!==t.indexOf("Chrome")||-1!==t.indexOf("CriOS");return a&&-1===t.indexOf("Edge")&&(e=!0),e}function shouldRunSyncPreload(){var e=!1,t=navigator.userAgent;return-1===t.indexOf("iPad")&&-1===t.indexOf("iPhone")||(e=!0),e}function runPreload(){function e(e){a?console.log("Skipping second preload: ",e):(a=!0,t.onDataLoaded?t.onDataLoaded(e):t.dataResults=e||[])}var t=window.__preload;if(!t.mainLoaded&&window.location.hash.indexOf("demo=true")<0){var a=!1;if(shouldRunWorkerPreload()){var r=!1,n=WorkerFns.createWorkerFromFnList([HelperFnsWrapper,WorkerLoaderWrapper],function(t){r&&console.log("Multiple worker messages: ",t),r=!0,e(t.data.data)},function(t){console.log("Error in worker: ",t),e([])});n&&(n.postMessage({id:1}),t.runDataLoad=!0,t.worker=n)}else if(shouldRunSyncPreload()){t.runDataLoad=!0;try{WorkerFns.syncLoad(function(a){a.done?e(a.data):t.runDataLoad=!1})}catch(o){t.runDataLoad=!1}}}}window.Sca=function(){return{decycle:function(object,callback){function checkForCompletion(){0===queuedObjects.length&&returnCallback(derezObj)}function readBlobAsDataURL(e,t){var a=new FileReader;a.onloadend=function(a){var r=a.target.result,n="Blob";e instanceof File,updateEncodedBlob(r,t,n)},a.readAsDataURL(e)}function updateEncodedBlob(dataURL,path,blobtype){var encoded=queuedObjects.indexOf(path);path=path.replace("$","derezObj"),eval(path+'.$enc="'+dataURL+'"'),eval(path+'.$type="'+blobtype+'"'),queuedObjects.splice(encoded,1),checkForCompletion()}function derez(e,t){var a,r,n;if(!("object"!=typeof e||null===e||e instanceof Boolean||e instanceof Date||e instanceof Number||e instanceof RegExp||e instanceof Blob||e instanceof String)){for(a=0;a<objects.length;a+=1)if(objects[a]===e)return{$ref:paths[a]};if(objects.push(e),paths.push(t),"[object Array]"===Object.prototype.toString.apply(e))for(n=[],a=0;a<e.length;a+=1)n[a]=derez(e[a],t+"["+a+"]");else{n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=derez(e[r],t+"["+JSON.stringify(r)+"]"))}return n}return e instanceof Blob?(queuedObjects.push(t),readBlobAsDataURL(e,t)):e instanceof Boolean?e={$type:"Boolean",$enc:e.toString()}:e instanceof Date?e={$type:"Date",$enc:e.getTime()}:e instanceof Number?e={$type:"Number",$enc:e.toString()}:e instanceof RegExp?e={$type:"RegExp",$enc:e.toString()}:"number"==typeof e?e={$type:"number",$enc:e+""}:void 0===e&&(e={$type:"undefined"}),e}var objects=[],paths=[],queuedObjects=[],returnCallback=callback,derezObj=derez(object,"$");checkForCompletion()},retrocycle:function retrocycle($){function dataURLToBlob(e){var t,a,r,n=";base64,";if(-1===e.indexOf(n))return a=e.split(","),t=a[0].split(":")[1],r=a[1],new Blob([r],{type:t});a=e.split(n),t=a[0].split(":")[1],r=window.atob(a[1]);for(var o=r.length,i=new Uint8Array(o),c=0;o>c;++c)i[c]=r.charCodeAt(c);return new Blob([i.buffer],{type:t})}function rez(value){var i,item,name,path;if(value&&"object"==typeof value)if("[object Array]"===Object.prototype.toString.apply(value))for(i=0;i<value.length;i+=1)item=value[i],item&&"object"==typeof item&&(path=item.$ref,"string"==typeof path&&px.test(path)?value[i]=eval(path):value[i]=rez(item));else if(void 0!==value.$type)switch(value.$type){case"Blob":case"File":value=dataURLToBlob(value.$enc);break;case"Boolean":value=Boolean("true"===value.$enc);break;case"Date":value=new Date(value.$enc);break;case"Number":value=Number(value.$enc);break;case"RegExp":value=eval(value.$enc);break;case"number":value=parseFloat(value.$enc);break;case"undefined":value=void 0}else for(name in value)"object"==typeof value[name]&&(item=value[name],item&&(path=item.$ref,"string"==typeof path&&px.test(path)?value[name]=eval(path):value[name]=rez(item)));return value}var px=/^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;return rez($)},encode:function(e,t){function a(e){t(JSON.stringify(e))}this.decycle(e,a)},decode:function(e){return this.retrocycle(JSON.parse(e))}}}();var WorkerFns={createWorkerFromObj:function(e,t,a){var r;try{r=new Worker(e),r.onmessage=t,r.onerror=a}catch(n){console.log("Exception during worker create: ",n)}return r},createWorkerFromFnList:function(e,t,a){var r=[];try{for(var n=0;n<e.length;++n)r.push(e[n].toString()),r.push(e[n].name+"_ = "+e[n].name+"();");return this.createWorkerFromStrings(r,t,a)}catch(o){console.log("Exception during worker source gen: ",o)}},createWorkerFromStrings:function(e,t,a){var r=window.URL||window.webkitURL,n=r.createObjectURL(new Blob(e,{type:"text/javascript"}));return this.createWorkerFromObj(n,t,a)},syncLoad:function(e){var t=2097152;try{var a=HelperFnsWrapper(),r=window.openDatabase("duchess",1,"duchess",t);r.readTransaction(function(t){t.executeSql("SELECT * FROM items",[],function(t,r){try{for(var n=new Array(r.rows.length),o=0;o<r.rows.length;++o)n[o]=a.translateObjOut(Sca.decode(r.rows.item(o).value))}catch(i){return e({done:!1,data:void 0,msg:i.message,stack:i.stack})}return e({done:!0,data:n})},function(t,a){return e({done:!1,data:void 0,msg:a.code+": "+a.message})})})}catch(n){return e({done:!1,data:void 0,msg:n.message,stack:n.stack})}}};window.__preload||(window.__preload={mainLoaded:!1}),runPreload()}();
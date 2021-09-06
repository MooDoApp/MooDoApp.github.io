"use strict";(self.webpackChunkLegend=self.webpackChunkLegend||[]).push([[36],{47153:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var o=r(48926),a=r.n(o),s=r(34575),n=r.n(s),i=r(93913),c=r.n(i),l=r(87757),u=r.n(l),d=r(38393),p=r(42654),h=r(83851),m=r(96977),f=r(53797),v=r(66411),g=r(17257),Z=r(31181),w=r(62869),y=r(26175),k=r(61312);function _(e){return e.toString(v.default.International.getFormat(p.Z.DFormat.MonthDay))}const L=function(){function e(){var t=this;n()(this,e);["wunderlist","opml","json","gtasks","trello","todoist"].forEach((function(e){return t.register(e)}))}return c()(e,[{key:"register",value:function(e){var t={login:this[e+"Login"].bind(this),import:this[e+"Import"].bind(this),save:this[e+"Save"].bind(this)};this[e+"Preload"]&&(t.preload=this[e+"Preload"].bind(this)),this[e]=t}},{key:"wunderlistLogin",value:function(e,t,r,o){var a=this;try{d.Z.PAssert(507,r,"Wunderlist requires a success callback")}catch(l){d.Z.reportError(l)}try{d.Z.PAssert(508,o,"Wunderlist requires an error callback")}catch(l){d.Z.reportError(l)}var s="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",n=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=s;var i="Dchs"+(new Date).getTime(),c="https://www.wunderlist.com/oauth/authorize?client_id="+s+"&redirect_uri="+n+"&state="+i;window.open(c,"modal-wunderlist","height=600,width=550");window.addEventListener("message",(function e(t){var s=d.Z.getLocationOrigin(),n=!1;try{n=t.data.state===i}catch(l){d.Z.reportError(l)}if(s&&n)if(window.removeEventListener("message",e),t.data.error)o("Error authenticating with Wunderlist");else{var c=t.data.code;c&&d.Z.XHR_PrivateAPI({type:"POST",path:"/private/v1/oauth/wunderlist",data:{code:c},requireAuth:!0,cb:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("Wunderlist Login Reponse: ",e),200===e.status){try{var t=JSON.parse(e.response).data;a.wunderlist.token=t.access_token}catch(l){o("Error parsing response from remote server.",l)}a.wunderlist.token?r():o("Invalid username or password.")}else o("Error contacting remote server.")}))})}}))}},{key:"wunderlistImport",value:function(e,t){var r=this;try{d.Z.PAssert(509,e,"Wunderlist requires a success callback")}catch(s){d.Z.reportError(s)}try{d.Z.PAssert(510,t,"Wunderlist requires an error callback")}catch(s){d.Z.reportError(s)}var o={inbox:{title:"inbox",items:{},p:0}},a=0;this.wunderlistGetLists((function(s){var n=0;d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("Get ListData Response: ",s);for(var i=function(i){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var c=s[i];o[c.id]={title:c.title,items:{},p:c.position},r.wunderlistGetTasks(c.id,(function(n){var i=0;d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("Get TaskData Response: ",n);for(var l=0;l<n.length;++l){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var u=n[l];if(u.parent_id){var h=o[u.list_id].items[u.parent_id];h?(h.items||(h.items=[]),h.items.push(u)):o[u.list_id].items[u.parent_id]={items:[u]}}else{var m=o[u.list_id].items[u.id];o[u.list_id].items[u.id]=u,m&&(o[u.list_id].items[u.id].items=m.items)}}r.wunderlistGetSubtasks(c.id,(function(t){for(var r=0,n=0;n<t.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t[n],c=o[i.list_id];if(c)if(i.parent_id){var l=c.items[i.parent_id];l?(l.items||(l.items=[]),l.items.push(i)):c.items[i.parent_id]={items:[i]}}else{var u=c.items[i.id];c.items[i.id]=i,u&&(c.items[i.id].items=u.items)}}++a===s.length&&e(o)}),t)}),t)},c=0;c<s.length;++c)i(c)}),t)}},{key:"wunderlistGetLists",value:function(e,t){try{d.Z.PAssert(511,e,"Wunderlist requires a success callback")}catch(r){d.Z.reportError(r)}try{d.Z.PAssert(512,t,"Wunderlist requires an error callback")}catch(r){d.Z.reportError(r)}d.Z.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var r=a()(u().mark((function r(o){var a;return u().wrap((function(r){for(var s=0;;){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;switch(r.prev=r.next){case 0:if(200!==o.status){r.next=13;break}return r.prev=1,r.next=4,o.json();case 4:a=r.sent,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",r.t0);case 10:e(a),r.next=15;break;case 13:d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("XHR Status: "+o.status),t("Error contacting remote server.");case 15:case"end":return r.stop()}}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}())}},{key:"wunderlistGetTasks",value:function(e,t,r){try{d.Z.PAssert(513,t,"Wunderlist requires a success callback")}catch(o){d.Z.reportError(o)}try{d.Z.PAssert(514,r,"Wunderlist requires an error callback")}catch(o){d.Z.reportError(o)}d.Z.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var e=a()(u().mark((function e(o){var a;return u().wrap((function(e){for(var s=0;;){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;switch(e.prev=e.next){case 0:if(200!==o.status){e.next=7;break}return e.next=3,o.json();case 3:a=e.sent,t(a),e.next=9;break;case 7:d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("XHR Status: "+o.status),r("Error contacting remote server.");case 9:case"end":return e.stop()}}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"wunderlistGetSubtasks",value:function(e,t,r){try{d.Z.PAssert(515,t,"Wunderlist requires a success callback")}catch(o){d.Z.reportError(o)}try{d.Z.PAssert(516,r,"Wunderlist requires an error callback")}catch(o){d.Z.reportError(o)}d.Z.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var e=a()(u().mark((function e(o){var a;return u().wrap((function(e){for(var s=0;;){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;switch(e.prev=e.next){case 0:if(200!==o.status){e.next=7;break}return e.next=3,o.json();case 3:a=e.sent,t(a),e.next=9;break;case 7:d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("XHR Status: "+o.status),r("Error contacting remote server.");case 9:case"end":return e.stop()}}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"wunderlistSave",value:function(e,t,r){try{d.Z.PAssert(517,t,"Wunderlist requires a success callback")}catch(s){d.Z.reportError(s)}try{d.Z.PAssert(518,r,"Wunderlist requires an error callback")}catch(s){d.Z.reportError(s)}try{v.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Wunderlist import"),a=o.getRootItem();try{d.Z.PAssert(519,a,"Root item must exist in order to import")}catch(s){d.Z.reportError(s)}Object.keys(e).forEach((function(t){var r=e[t];d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("List: ",r);var s=r.title,n=h.Z.createVMLI({text:s},{parent:a,changeType:p.Z.ChangeType.AllLocal,documentOwner:o});a.insertItem(n,0),Object.keys(r.items).forEach((function(e){var t=r.items[e];d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("  Task: ",t);var a=h.Z.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:n,changeType:p.Z.ChangeType.AllLocal,documentOwner:o});if(n.insertItem(a),t.note){var s=h.Z.createVMLI({text:t.note},{parent:a,changeType:p.Z.ChangeType.AllLocal,documentOwner:o});a.insertItem(s)}if(t.items)for(var i=0,c=0;c<t.items.length;++c){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var l=t.items[c];d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("    SubTask: ",l);var u=h.Z.createVMLI({text:l.title,isComplete:!!l.completed_at,dateCompleted:l.completed_at,isStarred:l.starred},{parent:a,changeType:p.Z.ChangeType.AllLocal,documentOwner:o});a.insertItem(u)}}))})),o.parseAll(p.Z.ChangeType.Local|p.Z.ChangeType.All),this.saveDocument(o),v.default.PaneUpdateBatcher.commitUpdateItems(),t()}catch(n){r(void 0,n)}}},{key:"opmlLogin",value:function(e,t,r,o){try{d.Z.PAssert(520,r,"OPML requires a success callback")}catch(s){d.Z.reportError(s)}try{d.Z.PAssert(521,o,"OPML requires an error callback")}catch(s){d.Z.reportError(s)}var a=document.getElementById("importFileUploadButton");a.onchange=r,a.click()}},{key:"opmlImport",value:function(e,t){try{d.Z.PAssert(522,e,"OPML requires a success callback")}catch(a){d.Z.reportError(a)}try{d.Z.PAssert(523,t,"OPML requires an error callback")}catch(a){d.Z.reportError(a)}try{var r=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(r.onload=function(t){var r=t.target.result,o=f.Z.parseOPML(r);e(o)},r.onerror=t,r.readAsText(o)):t("You must select a file before importing.")}catch(s){t(void 0,s)}}},{key:"opmlSave",value:function(e,t,r){try{d.Z.PAssert(524,t,"OPML requires a success callback")}catch(o){d.Z.reportError(o)}try{d.Z.PAssert(525,r,"OPML requires an error callback")}catch(o){d.Z.reportError(o)}d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("OPML Save: ",e),this.createDocumentFromData(e.items,e.text||"OPML Import"),t()}},{key:"jsonLogin",value:function(e,t,r,o){try{d.Z.PAssert(526,r,"JSON requires a success callback")}catch(n){d.Z.reportError(n)}try{d.Z.PAssert(527,o,"JSON requires an error callback")}catch(n){d.Z.reportError(n)}var a=document.getElementById("importFileUploadButton"),s=!1;a.onchange=function(e){s=!0,r(e)},a.click();document.body.onfocus=function(){setTimeout((function(){s||o(!1),document.body.onfocus=void 0}),1e3)}}},{key:"jsonImport",value:function(e,t){try{var r=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(r.onload=function(r){var o,a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{a=a.replace(/\n/g,""),o=JSON.parse(a)}catch(s){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{f.Z.parseJSON(o,!0).then((function(r){if(r){r.text=r.text||"Imported document",v.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach((function(e){delete e.dateModified,m.Z.cacheItem(e)})),r.text=d.Z.createUniqueDocName(r.text,h.Z.getDocumentsArray().map((function(e){return e.text.get()})));var o=Z.Z.create(r);h.Z.addDocument(o),v.default.PaneUpdateBatcher.commitUpdateItems()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")}))}catch(n){return t("The JSON file has errors. The developers have been notified with details of the error.",n)}},r.onerror=t,r.readAsText(o)):t("You must select a file before importing.")}catch(a){t(void 0,a)}}},{key:"jsonSave",value:function(e,t,r){try{d.Z.PAssert(528,t,"JSON requires a success callback")}catch(o){d.Z.reportError(o)}try{d.Z.PAssert(529,r,"JSON requires an error callback")}catch(o){d.Z.reportError(o)}t()}},{key:"gtasksLogin",value:function(e,t,r,o){var a=this;try{d.Z.PAssert(534,r,"GTasks requires a success callback")}catch(s){d.Z.reportError(s)}try{d.Z.PAssert(535,o,"GTasks requires an error callback")}catch(s){d.Z.reportError(s)}g.Z.authAccountPrimary([p.Z.GScope.TasksRO],(function(e){e?(a.gtasks.token=e.access_token,r(e)):(d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("Error getting Google TaskRO permission: ",e),o("Unable to authenticate with Google. Please try again.",e))}))}},{key:"gtasksImport",value:function(e,t){var r=this;try{d.Z.PAssert(536,e,"GTasks requires a success callback")}catch(a){d.Z.reportError(a)}try{d.Z.PAssert(537,t,"GTasks requires an error callback")}catch(a){d.Z.reportError(a)}var o={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists((function(s){var n=0;try{d.Z.PAssert(538,d.Z.isArray(s),"List data must be an array")}catch(a){d.Z.reportError(a)}for(var i=s.length,c=0,l=0;l<s.length;++l){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var u=s[l];o.remoteItems[u.id]={id:u.id,text:u.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},o.roots.push(u.id),r.gtasksGetTasks(u,(function(r,s){if(r){try{d.Z.PAssert(539,d.Z.isArray(r),"List data must be an array")}catch(a){d.Z.reportError(a)}if(d.Z.isArray(r)){for(var n=0,l=0;l<r.length;++l){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var u=r[l];if(u&&"completed"!==u.status){o.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||s.id,items:[]};var p=o.remoteItems[u.parent||s.id];p?p.items.push(u.id):o.unassigned.push(u.id)}}++c===i&&e(o)}else t("Invalid task list returned.")}else c++}),t)}}),t)}},{key:"gtasksGetLists",value:function(e,t){try{d.Z.PAssert(540,e,"GTasks requires a success callback")}catch(r){d.Z.reportError(r)}try{d.Z.PAssert(541,t,"GTasks requires an error callback")}catch(r){d.Z.reportError(r)}d.Z.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=".concat(2e3,"&key=").concat(p.Z.APIKey,"&access_token=").concat(this.gtasks.token)}).then(function(){var o=a()(u().mark((function o(a){var s;return u().wrap((function(o){for(var n=0;;){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;switch(o.prev=o.next){case 0:if(200!==a.status){o.next=14;break}return o.prev=1,o.next=4,a.json();case 4:s=o.sent;try{d.Z.PAssert(542,s&&s.items,"Must have a valid set of data to get tasks from")}catch(r){d.Z.reportError(r)}s&&s.items?e(s.items):t("Error getting data from remote server."),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),t(o.t0);case 12:o.next=16;break;case 14:d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("XHR Status: "+a.status),t("Error contacting remote server.");case 16:case"end":return o.stop()}}}),o,null,[[1,9]])})));return function(e){return o.apply(this,arguments)}}())}},{key:"gtasksGetTasks",value:function(e,t,r){try{d.Z.PAssert(543,e,"GTasks requires a valid list to get tasks from")}catch(o){d.Z.reportError(o)}try{d.Z.PAssert(544,t,"GTasks requires a success callback")}catch(o){d.Z.reportError(o)}try{d.Z.PAssert(545,r,"GTasks requires an error callback")}catch(o){d.Z.reportError(o)}d.Z.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/".concat(e.id,"/tasks?maxResults=").concat(2500,"&key=").concat(p.Z.APIKey,"&access_token=").concat(this.gtasks.token)}).then(function(){var s=a()(u().mark((function a(s){var n;return u().wrap((function(a){for(var i=0;;){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;switch(a.prev=a.next){case 0:if(200!==s.status){a.next=14;break}return a.prev=1,a.next=4,s.json();case 4:n=a.sent;try{d.Z.PAssert(546,n,"Must have a valid array of tasks")}catch(o){d.Z.reportError(o)}n&&n.items?t(n.items,e):t([],e),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),r(a.t0);case 12:a.next=16;break;case 14:d.Z.shouldLog(p.Z.LogLevels.Import)&&d.Z.log("XHR Status: "+s.status),r("Error contacting remote server.");case 16:case"end":return a.stop()}}}),a,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}())}},{key:"gtasksSave",value:function(e,t,r){try{d.Z.PAssert(547,t,"GTasks requires a success callback")}catch(c){d.Z.reportError(c)}try{d.Z.PAssert(548,r,"GTasks requires an error callback")}catch(c){d.Z.reportError(c)}try{var o=0;try{d.Z.PAssert(549,0===e.unassigned.length,"We should never have unassigned tasks")}catch(c){d.Z.reportError(c)}v.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Google Tasks import"),s=a.getRootItem();try{d.Z.PAssert(550,s,"Root item must exist in order to import")}catch(c){d.Z.reportError(c)}for(var n=function t(r,o){var s=0,n=r.text;r.due&&(n+=" @"+_(r.due));var i=h.Z.createVMLI({text:n,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:o,changeType:p.Z.ChangeType.AllLocal,documentOwner:a});if(o.insertItem(i),r.notes){var c=h.Z.createVMLI({text:r.notes,isNote:!0},{parent:i,changeType:p.Z.ChangeType.AllLocal,documentOwner:a});i.setNote(c,p.Z.ChangeType.Local)}for(var l=0;l<r.items.length;++l){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;t(e.remoteItems[r.items[l]],i)}},i=0;i<e.roots.length;++i){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;n(e.remoteItems[e.roots[i]],s)}a.parseAll(p.Z.ChangeType.Local|p.Z.ChangeType.All),this.saveDocument(a),v.default.PaneUpdateBatcher.commitUpdateItems(),t()}catch(l){r(void 0,l)}}},{key:"trelloPreload",value:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,d.Z.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",(function(){d.Z.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",(function(){r.trello.isLoading=!1;try{d.Z.PAssert(551,window.Trello,"The Trello client lib must have been loaded correctly")}catch(o){d.Z.reportError(o)}window.Trello?e():t("Error loading Trello. Please try again.")}),(function(e){r.trello.isLoading=!1,t(e)}))}),(function(e){r.trello.isLoading=!1,t(e)})))}},{key:"trelloLogin",value:function(e,t,r,o){try{d.Z.PAssert(552,window.Trello,"The Trello client lib was not properly loaded")}catch(a){d.Z.reportError(a)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:o}):o("Error loading Trello. Please try again.")}},{key:"trelloImport",value:function(e,t){var r=this,o=[];window.Trello.get("members/me/boards",d.Z.wrapFn((function(a){var s=0,n=(a=a||[]).length,i=0;function c(){n===i&&e(o)}function l(e){i++,c()}for(var u=0;u<a.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=a[u];if(d.closed)n--;else{var p={text:d.name,items:[]};o.push(p),r._handleBoard(p,d.id,t,l)}}c()}),t),t)}},{key:"_handleBoard",value:function(e,t,r,o){var a=this;window.Trello.get("boards/"+t+"/lists",d.Z.wrapFn((function(t){var s=0,n=0,i=t.length;function c(){n===i&&o()}function l(){n++,c()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=t[u];if(d.closed)i--;else{var p={text:d.name,items:[]};e.items.push(p),a._handleList(p,d.id,r,l)}}c()}),r),r)}},{key:"_handleList",value:function(e,t,r,o){var a=this;window.Trello.get("lists/"+t+"/cards",d.Z.wrapFn((function(t){var s=0,n=0,i=t.length;function c(){n===i&&o()}function l(){n++,c()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=t[u];if(d.closed)i--;else{var h={text:d.name};if(d.labels&&d.labels.length>0){for(var m=0,f="",v=0;v<d.labels.length;++v){if(m++>5e3&&__infLoop&&__infLoop(m))throw new RangeError;var g=d.labels[v];f+=p.Z.TagPrefix+(g.name.length>0?g.name:g.color)+" "}h.text=f+h.text}if(d.due&&(d.date=new Date(d.due)),d.desc&&d.desc.length>0){var Z=0;h.items=[];for(var w=d.desc.split("\n"),y=0;y<w.length;++y){if(Z++>5e3&&__infLoop&&__infLoop(Z))throw new RangeError;var k=w[y];k&&k.length>0&&h.items.push({text:k})}}if(d.idChecklists&&d.idChecklists.length>0){var _=0;h.items||(h.items=[]);for(var L=0;L<d.idChecklists.length;++L){if(_++>5e3&&__infLoop&&__infLoop(_))throw new RangeError;a._handleChecklist(h,d.idChecklists[L],r,l)}}else n++;e.items.push(h)}}c()}),r),r)}},{key:"_handleChecklist",value:function(e,t,r,o){window.Trello.get("checklists/"+t+"/",d.Z.wrapFn((function(t){for(var r=0,a={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var n=t.checkItems[s],i="complete"===n.state;if(!i){var c={text:n.name,isComplete:i};a.items.push(c)}}e.items.push(a),o()}),r),r)}},{key:"trelloSave",value:function(e,t,r){try{var o=0;v.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Trello import"),s=function e(t,r){var o=h.Z.createVMLI({text:t.text,isComplete:t.isComplete},{parent:r,changeType:p.Z.ChangeType.AllLocal,documentOwner:a});if(r.insertItem(o),t.items)for(var s=0,n=0;n<t.items.length;++n){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;e(t.items[n],o)}return o},n=a.getRootItem();try{d.Z.PAssert(553,n,"Root item must exist in order to import")}catch(c){d.Z.reportError(c)}for(var i=0;i<e.length;++i){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;s(e[i],n)}this.saveDocument(a),v.default.PaneUpdateBatcher.commitUpdateItems()}catch(l){return r(l)}t()}},{key:"todoistLogin",value:function(e,t,r,o){var a=this;try{d.Z.PAssert(554,r,"Todoist requires a success callback")}catch(i){d.Z.reportError(i)}try{d.Z.PAssert(555,o,"Todoist requires an error callback")}catch(i){d.Z.reportError(i)}var s="Dchs"+(new Date).getTime(),n="https://todoist.com/oauth/authorize?client_id=de93a2f2c51d4e2fa0412a79f88c7960&scope=data:read&state="+s;window.open(n,"modal-todoist","height=600,width=550");window.addEventListener("message",(function e(t){var n=d.Z.getLocationOrigin(),i=!1;try{i=t.data.state===s}catch(l){d.Z.reportError(l)}if(n&&i)if(window.removeEventListener("message",e),t.data.error)o("Error authenticating with Todoist");else{var c=t.data.code;c&&y.Z.todoistImport(c).then((function(e){e.error?o("Error parsing response from remote server.",e.error):(console.log(e.value),a.todoist.data=e.value,r())}))}}))}},{key:"todoistImport",value:function(e,t){var r=0,o=0;try{d.Z.PAssert(556,e,"Todoist requires a success callback")}catch(p){d.Z.reportError(p)}try{d.Z.PAssert(557,t,"Todoist requires an error callback")}catch(p){d.Z.reportError(p)}for(var a=this.todoist.data,s={},n=0;n<a.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=a.projects[n];i.is_archived||i.is_deleted||(s[i.id]={id:i.id,name:i.name,items:[],itemMap:{},parent_id:i.parent_id,item_order:i.item_order})}for(var c=[],l=0;l<a.items.length;++l){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;var u=a.items[l];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&l>0&&!isNaN(u.indent)&&u.indent>1&&c[u.indent-1]&&(u.parent_id=c[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(c[u.indent]=u))}e(s)}},{key:"todoistSave",value:function(e,t,r){var o=[p.Z.VMLIFlag.None,p.Z.VMLIFlag.None,p.Z.VMLIFlag.P3,p.Z.VMLIFlag.P2,p.Z.VMLIFlag.P1];try{v.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Todoist import"),s=a.getRootItem();try{d.Z.PAssert(558,s,"Root item must exist in order to import")}catch(k){d.Z.reportError(k)}var n={},i={},c=function(e,t){var r=i[e.id],o=i[t.id];return((null===r||void 0===r?void 0:r.item_order)||0)-((null===o||void 0===o?void 0:o.item_order)||0)},l=function e(t,r){if(!n[r.id]){var s=r.parent_id;r.parent_id&&!n[r.id]&&e(t,t.itemMap[r.parent_id]);var l=n[s||r.project_id];try{d.Z.PAssert(559,l,"parent item did not exist",s,r.project_id)}catch(k){d.Z.reportError(k)}l&&function(e,t,r){if(t.priority&&(t.priority=o[t.priority]),t.due_date_utc){var s=w.Z.parseText(_(new Date(t.due_date_utc)));s&&(t.date=s.toData(),t.content+=" "+p.Z.CharDate)}var l=h.Z.createVMLI({text:t.content||"",priority:t.priority,date:t.date},{parent:r,changeType:p.Z.ChangeType.AllLocal,documentOwner:a});n[t.id]=l,i[l.id]=t,r.insertSorted(l,c)}(0,r,l)}},u=function t(r){if(!n[r.id]){var o,l=r.parent_id,u=r.id;l?(n[l]||t(e[l]),o=n[l]):o=s;var d=h.Z.createVMLI({text:r.name},{parent:o,changeType:p.Z.ChangeType.AllLocal,documentOwner:a});n[u]=d,i[d.id]=r,o.insertSorted(d,c)}};for(var m in e)if(e.hasOwnProperty(m)){var f=0,g=e[m],Z=g.items;u(g);for(var y=0;y<Z.length;y++){if(f++>5e3&&__infLoop&&__infLoop(f))throw new RangeError;l(g,Z[y])}}this.saveDocument(a),v.default.PaneUpdateBatcher.commitUpdateItems()}catch(L){return r(L)}t()}},{key:"createDocument",value:function(e){return h.Z.createEmptyDocument(e,h.Z.getDefaultBacking())}},{key:"saveDocument",value:function(e){h.Z.addDocument(e)}},{key:"runImport",value:function(e,t,r,o,a){e.login(t,r,(function(){e.import((function(t){e.save(t,(function(){o()}),a)}),a)}),a)}},{key:"createDocumentFromData",value:function(e,t){var r=0;v.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument(t),a=function(e,t){if(!e.isNote){var r=h.Z.createVMLI(e,{parent:t,changeType:p.Z.ChangeType.AllLocal,documentOwner:o});t.insertItem(r)}},s=o.getRootItem();try{d.Z.PAssert(560,s,"Root item must exist in order to import")}catch(i){d.Z.reportError(i)}k.Z.rewriteItemIDs(e,!0),k.Z.convertItemDatas(e);for(var n=0;n<e.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;a(e[n],s)}this.saveDocument(o),v.default.PaneUpdateBatcher.commitUpdateItems()}}]),e}()}}]);

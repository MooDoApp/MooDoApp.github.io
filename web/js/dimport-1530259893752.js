(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{94:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r(1),i=r(4),s=r(6),n=r(7),l=r(53),d=r(15),c=r(18),u=r(12),f=r(81),p=r.n(f);function h(){this.workflowy={login:this.workflowyLogin.bind(this),import:this.workflowyImport.bind(this),save:this.workflowySave.bind(this)},this.wunderlist={login:this.wunderlistLogin.bind(this),import:this.wunderlistImport.bind(this),save:this.wunderlistSave.bind(this)},this.iqtell={login:this.iqtellLogin.bind(this),import:this.iqtellImport.bind(this),save:this.iqtellSave.bind(this)},this.opml={login:this.opmlLogin.bind(this),import:this.opmlImport.bind(this),save:this.opmlSave.bind(this)},this.json={login:this.jsonLogin.bind(this),import:this.jsonImport.bind(this),save:this.jsonSave.bind(this)},this.gtasks={login:this.gtasksLogin.bind(this),import:this.gtasksImport.bind(this),save:this.gtasksSave.bind(this)},this.trello={preload:this.trelloPreload.bind(this),login:this.trelloLogin.bind(this),import:this.trelloImport.bind(this),save:this.trelloSave.bind(this)},this.todoist={login:this.todoistLogin.bind(this),import:this.todoistImport.bind(this),save:this.todoistSave.bind(this)}}function m(e){return e.toString(c.a.getFormat(DFormat.MonthDay))}h.prototype={workflowyLogin:function(e,t,r,o){try{a.default.PAssert(1579,r,"Workflowy requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1580,o,"Workflowy requires an error callback")}catch(e){a.default.reportError(e)}return e?t?void a.default.XHR_PrivateAPI({type:"POST",path:"/oauth/workflowy",data:{username:e,password:t},cb:function(e){if(200===e.status){try{var t=JSON.parse(e.response);this.workflowy.data=JSON.parse(t.data)}catch(e){return a.default.reportError(e),o("Error parsing successful response from server. The developers have been notified with details of the error.")}return!this.workflowy.data||this.workflowy.data.error?o("Invalid username or password."):r()}var i;try{var s=JSON.parse(e.response);switch(s.code){case PrivateAPIErrorCodes.InvalidParameter:i="Must specify a username and password.";break;case PrivateAPIErrorCodes.UnauthorizedUser:i="Invalid username or password.";break;case PrivateAPIErrorCodes.ErrorContactingRemote:i=s.data;break;default:i="Error contacting server. The developers have been notified with details of the error."}}catch(e){i="Error parsing error response from server. The developers have been notified with details of the error.",a.default.reportError(e)}return o(i)}.bind(this)}):o("Must provide a password."):o("Must provide a valid username.")},workflowyImport:function(e,t){try{a.default.PAssert(1581,e,"Workflowy requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1582,t,"Workflowy requires an error callback")}catch(e){a.default.reportError(e)}return e(this.workflowy.data)},workflowyReplaceFormatting:function(e){return e.replace(/<b>|<\/b>/g,"**").replace(/<i>|<\/i>/g,"*").replace(/<u>|<\/u>/g,"__")},workflowyIterateItem:function(e,t){try{a.default.PAssert(1583,e&&void 0!==e.nm,"All items must exist and have stars and text, children and notes are optional",e)}catch(e){a.default.reportError(e)}try{a.default.PAssert(1585,t,"A valid parent must always be defined")}catch(e){a.default.reportError(e)}if(e&&t)try{var r=!!e.cp;if(!r){var i=o.a.Prefix.Bullet+" "+a.default.unescape(this.workflowyReplaceFormatting(e.nm)),n=s.default.createVMLI({text:i,isComplete:r},{parent:t,changeType:ChangeType.AllLocal});if(t.insertItem(n),e.no){var l=a.default.unescape(e.no),d=s.default.createVMLI({text:l,isNote:!0},{parent:n,changeType:ChangeType.AllLocal});n.setNote(d,ChangeType.Local)}if(e.ch)for(var c=0,u=0;u<e.ch.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=e.ch[u];this.workflowyIterateItem(f,n)}}}catch(e){throw a.default.reportError(e),e}},workflowySave:function(e,t,r){try{a.default.PAssert(1586,e,"Workflowy requires having valid data")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1587,t,"Workflowy requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1588,r,"Workflowy requires an error callback")}catch(e){a.default.reportError(e)}try{try{a.default.PAssert(1589,e.projectTreeData,"Missing Workflowy projectTreeData")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1590,e.projectTreeData.mainProjectTreeInfo,"Missing Workflowy mainProjectTreeInfo")}catch(e){a.default.reportError(e)}var o=e.projectTreeData.mainProjectTreeInfo;try{a.default.PAssert(1591,o.rootProjectChildren,"Missing Workflowy rootProjectChildren")}catch(e){a.default.reportError(e)}n.a.beginAction(),a.default.vmMain.beginUpdateItems();var i=s.default.getRootModel();try{a.default.PAssert(1592,i,"Root item must exist in order to import")}catch(e){a.default.reportError(e)}var l=s.default.createVMLI({text:"Workflowy Import"},{parent:i,changeType:ChangeType.AllLocal});i.insertItem(l);try{for(var d=0,c=0;c<o.rootProjectChildren.length;++c){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var u=o.rootProjectChildren[c];this.workflowyIterateItem(u,l)}a.default.vmMain.parseSubtree(l,ChangeType.Local|ChangeType.All)}catch(e){return a.default.reportError(e),r("There was an error iterating your Workflowy items. The developers have been notified with daetails of the error.",e)}return a.default.vmMain.commitUpdateItems(),n.a.endAction(),t()}catch(e){return a.default.reportError(e),r("There was an error parsing your Workflowy data. The developers have been notified with details of the error.",e)}},wunderlistLogin:function(e,t,r,o){try{a.default.PAssert(1593,r,"Wunderlist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1594,o,"Wunderlist requires an error callback")}catch(e){a.default.reportError(e)}var i="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",s=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=i;var n="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+i+"&redirect_uri="+s+"&state="+n;window.open(l,"modal-wunderlist","height=600,width=550");var d=function(e){var t=a.default.getLocationOrigin(),i=!1;try{i=e.data.state===n}catch(e){a.default.reportError(e)}if(t&&i)if(window.removeEventListener("message",d),e.data.error)o("Error authenticating with Wunderlist");else{var s=e.data.code;s&&a.default.XHR_PrivateAPI({type:"POST",path:"/oauth/wunderlist",data:{code:s},requireAuth:!0,cb:function(e){if(200===e.status){try{var t=JSON.parse(e.response).data;this.wunderlist.token=t.access_token}catch(e){o("Error parsing response from remote server.",e)}this.wunderlist.token?r():o("Invalid username or password.")}else o("Error contacting remote server.")}.bind(this)})}}.bind(this);window.addEventListener("message",d)},wunderlistImport:function(e,t){try{a.default.PAssert(1595,e,"Wunderlist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1596,t,"Wunderlist requires an error callback")}catch(e){a.default.reportError(e)}var r={inbox:{title:"inbox",items:{},p:0}},o=0;this.wunderlistGetLists(function(a){var i=0;for(var s=0;s<a.length;++s){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var n=a[s];r[n.id]={title:n.title,items:{},p:n.position},this.wunderlistGetTasks(n.id,function(i){var s=0;for(var l=0;l<i.length;++l){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=i[l];if(d.parent_id){var c=r[d.list_id].items[d.parent_id];c?(c.items||(c.items=[]),c.items.push(d)):r[d.list_id].items[d.parent_id]={items:[d]}}else{var u=r[d.list_id].items[d.id];r[d.list_id].items[d.id]=d,u&&(r[d.list_id].items[d.id].items=u.items)}}this.wunderlistGetSubtasks(n.id,function(t){for(var i=0,s=0;s<t.length;++s){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var n=t[s],l=r[n.list_id];if(l)if(n.parent_id){var d=l.items[n.parent_id];d?(d.items||(d.items=[]),d.items.push(n)):l.items[n.parent_id]={items:[n]}}else{var c=l.items[n.id];l.items[n.id]=n,c&&(l.items[n.id].items=c.items)}}++o===a.length&&e(r)}.bind(this),t)}.bind(this),t)}}.bind(this),t)},wunderlistGetLists:function(e,t){try{a.default.PAssert(1597,e,"Wunderlist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1598,t,"Wunderlist requires an error callback")}catch(e){a.default.reportError(e)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(r){if(200===r.status){var a;try{a=JSON.parse(r.response)}catch(e){t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",e)}e(a)}else t("Error contacting remote server.")}.bind(this)})},wunderlistGetTasks:function(e,t,r){try{a.default.PAssert(1599,t,"Wunderlist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1600,r,"Wunderlist requires an error callback")}catch(e){a.default.reportError(e)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var a=JSON.parse(e.response);t(a)}else r("Error contacting remote server.")}.bind(this)})},wunderlistGetSubtasks:function(e,t,r){try{a.default.PAssert(1601,t,"Wunderlist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1602,r,"Wunderlist requires an error callback")}catch(e){a.default.reportError(e)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var a=JSON.parse(e.response);t(a)}else r("Error contacting remote server.")}.bind(this)})},wunderlistSave:function(e,t,r){try{a.default.PAssert(1603,t,"Wunderlist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1604,r,"Wunderlist requires an error callback")}catch(e){a.default.reportError(e)}try{n.a.beginAction(),a.default.vmMain.beginUpdateItems();var o=s.default.getRootModel();try{a.default.PAssert(1605,o,"Root item must exist in order to import")}catch(e){a.default.reportError(e)}var i=s.default.createVMLI({text:"Wunderlist Import"},{parent:o,changeType:ChangeType.AllLocal});for(var l in o.insertItem(i),e){var d=e[l];0;var c=d.title,u=s.default.createVMLI({text:c},{parent:i,changeType:ChangeType.AllLocal});for(var f in i.insertItem(u),d.items){var p=d.items[f];0;var h=s.default.createVMLI({text:p.title,isComplete:!!p.completed_at,dateCompleted:p.completed_at,isStarred:p.starred},{parent:u,changeType:ChangeType.AllLocal});if(u.insertItem(h),p.note){var m=s.default.createVMLI({text:p.note},{parent:h,changeType:ChangeType.AllLocal});h.insertItem(m)}if(p.items)for(var v=0,g=0;g<p.items.length;++g){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;var w=p.items[g];0;var y=s.default.createVMLI({text:w.title,isComplete:!!w.completed_at,dateCompleted:w.completed_at,isStarred:w.starred},{parent:h,changeType:ChangeType.AllLocal});h.insertItem(y)}}}a.default.vmMain.parseSubtree(i,ChangeType.Local|ChangeType.All),a.default.vmMain.commitUpdateItems(),n.a.endAction(),t()}catch(e){r(void 0,e)}},iqtellLogin:function(e,t,r,o){try{a.default.PAssert(1606,r,"IQTell requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1607,o,"IQTell requires an error callback")}catch(e){a.default.reportError(e)}var i=document.getElementById("importFileUploadButton");i.onchange=r,i.click()},_readMultipleFiles:function(e,t,r){var o=0,i=0,s=0,n=!1,d={},c={},u={};function f(){n&&i+s===e.length&&(s>0?r(function(){var e="";for(var t in u)e+=l.a._parseIQTellFilename(t)+": "+u[t]+"\r\n";return e}()):t(d,c))}function p(e,t,r){d[t]=e,c[t]=r,i++,f()}function h(e,t){u[t]=e,s++,f()}for(var m=0;m<e.length;++m){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;var v=new FileReader;v.onload=function(e,t){var r=t.target.result;if(r){var o=this.parseCSV(r);o&&!a.default.isString(o)?p(o,e,r):h(o||"Error parsing IQTell import. Please validate your data.",e)}else h("Unable to load IQTell data. Please contact support.",e)}.bind(this,e[m].name),v.onerror=function(e,t){h(t,e)}.bind(this,e[m].name),v.readAsText(e[m])}n=!0,f()},iqtellImport:function(e,t){try{a.default.PAssert(1608,e,"IQTell requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1609,t,"IQTell requires an error callback")}catch(e){a.default.reportError(e)}try{var r=document.forms.importFileUpload.importFile.files;if(r&&0!==r.length){this._readMultipleFiles(r,function(r,o){var i;n.a.beginAction(),a.default.vmMain.beginUpdateItems();try{i=l.a.iqtellProcess(r,o)}catch(e){a.default.reportError(e,o)}log("IQTell output: ",i),a.default.vmMain.commitUpdateItems(),n.a.endAction(),i?e():t("Error parsing IQTell import. Please contact support")},t)}else t("You must select a file before importing.")}catch(e){t(void 0,e)}},iqtellSave:function(e,t,r){try{a.default.PAssert(1610,t,"IQTell requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1611,r,"IQTell requires an error callback")}catch(e){a.default.reportError(e)}t()},opmlLogin:function(e,t,r,o){try{a.default.PAssert(1612,r,"OPML requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1613,o,"OPML requires an error callback")}catch(e){a.default.reportError(e)}var i=document.getElementById("importFileUploadButton");i.onchange=r,i.click()},opmlImport:function(e,t){try{a.default.PAssert(1614,e,"OPML requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1615,t,"OPML requires an error callback")}catch(e){a.default.reportError(e)}try{var r=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(r.onload=function(r){var i,s=r.target.result;if((s.startsWith("<?xml ")||s.startsWith("<?opml ")||s.startsWith("<opml "))&&(i=a.default.loadXML(s)),i){n.a.beginAction(),a.default.vmMain.beginUpdateItems();var d=l.a.parseOPML(i,o.name);a.default.vmMain.commitUpdateItems(),n.a.endAction(),d?e():t("Error parsing OPML. Please validate your data.")}else t("Unable to load XML lib. Please update or try another browser.")},r.onerror=t,r.readAsText(o)):t("You must select a file before importing.")}catch(e){t(void 0,e)}},opmlSave:function(e,t,r){try{a.default.PAssert(1616,t,"OPML requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1617,r,"OPML requires an error callback")}catch(e){a.default.reportError(e)}t()},jsonLogin:function(e,t,r,o){try{a.default.PAssert(1618,r,"JSON requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1619,o,"JSON requires an error callback")}catch(e){a.default.reportError(e)}var i=document.getElementById("importFileUploadButton"),s=!1;i.onchange=function(e){s=!0,r(e)},i.click();document.body.onfocus=function(){s||o(!1),document.body.onfocus=void 0}},jsonImport:function(e,t){try{var r=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(r.onload=function(r){var o=r.target.result;if(!o)return t("Unable to import your requested file. Please try a different file.");try{var i=JSON.parse(o)}catch(e){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{n.a.beginAction(),a.default.vmMain.beginUpdateItems();var s=l.a.parseJSON(i);return a.default.vmMain.commitUpdateItems(),n.a.endAction(),s?e():t("Invalid JSON format. The developers have been notified with details of the error.")}catch(e){return t("The JSON file has errors. The developers have been notified with details of the error.",e)}},r.onerror=t,r.readAsText(o)):t("You must select a file before importing.")}catch(e){t(void 0,e)}},jsonSave:function(e,t,r){try{a.default.PAssert(1620,t,"JSON requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1621,r,"JSON requires an error callback")}catch(e){a.default.reportError(e)}t()},gtasksLogin:function(e,t,r,o){try{a.default.PAssert(1626,r,"GTasks requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1627,o,"GTasks requires an error callback")}catch(e){a.default.reportError(e)}d.default.runAuthenticate([GScope.TasksRO],!1,!1,function(e){e&&!e.error?(this.gtasks.token=e,r(e)):o("Unable to authenticate with Google. Please try again.",e)}.bind(this))},gtasksImport:function(e,t){try{a.default.PAssert(1628,e,"GTasks requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1629,t,"GTasks requires an error callback")}catch(e){a.default.reportError(e)}var r={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists(function(o){var i=0;try{a.default.PAssert(1630,a.default.isArray(o),"List data must be an array")}catch(e){a.default.reportError(e)}for(var s=o.length,n=0,l=0;l<o.length;++l){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var d=o[l];r.remoteItems[d.id]={id:d.id,text:d.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},r.roots.push(d.id),this.gtasksGetTasks(d,function(o,i){if(o){try{a.default.PAssert(1631,a.default.isArray(o),"List data must be an array")}catch(e){a.default.reportError(e)}if(a.default.isArray(o)){for(var l=0,d=0;d<o.length;++d){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;var c=o[d];if(c&&"completed"!==c.status){r.remoteItems[c.id]={id:c.id,text:c.title,isComplete:"completed"===c.status,dateCompleted:c.completed?new Date(c.completed):void 0,isArchived:c.hidden,due:c.due?new Date(c.due):void 0,notes:c.notes,parent:c.parent||i.id,items:[]};var u=r.remoteItems[c.parent||i.id];u?u.items.push(c.id):r.unassigned.push(c.id)}}++n===s&&e(r)}else t("Invalid task list returned.")}else n++}.bind(this),t)}}.bind(this),t)},gtasksGetLists:function(e,t){try{a.default.PAssert(1632,e,"GTasks requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1633,t,"GTasks requires an error callback")}catch(e){a.default.reportError(e)}a.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=2000&key="+window.gapiKey+"&access_token="+u.a.getDefaultAccessToken(),cb:function(r){if(200===r.status)try{var o=JSON.parse(r.response);try{a.default.PAssert(1634,o&&o.items,"Must have a valid set of data to get tasks from")}catch(e){a.default.reportError(e)}o&&o.items?e(o.items):t("Error getting data from remote server.")}catch(e){t(e)}else t("Error contacting remote server.")}.bind(this)})},gtasksGetTasks:function(e,t,r){try{a.default.PAssert(1635,e,"GTasks requires a valid list to get tasks from")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1636,t,"GTasks requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1637,r,"GTasks requires an error callback")}catch(e){a.default.reportError(e)}a.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/"+e.id+"/tasks?maxResults=2500&key="+window.gapiKey+"&access_token="+u.a.getDefaultAccessToken(),cb:function(o){if(200===o.status)try{var i=JSON.parse(o.response);try{a.default.PAssert(1638,i,"Must have a valid array of tasks")}catch(e){a.default.reportError(e)}i&&i.items?t(i.items,e):t([],e)}catch(e){r(e)}else r("Error contacting remote server.")}.bind(this)})},gtasksSave:function(e,t,r){try{a.default.PAssert(1639,t,"GTasks requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1640,r,"GTasks requires an error callback")}catch(e){a.default.reportError(e)}try{var o=0,i=function t(r,a){var o=0,i=r.text;r.due&&(i+=" @"+m(r.due));var n=s.default.createVMLI({text:i,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:ChangeType.AllLocal});if(a.insertItem(n),r.notes){var l=s.default.createVMLI({text:r.notes,isNote:!0},{parent:n,changeType:ChangeType.AllLocal});n.setNote(l,ChangeType.Local)}for(var d=0;d<r.items.length;++d){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;t(e.remoteItems[r.items[d]],n)}};try{a.default.PAssert(1641,0===e.unassigned.length,"We should never have unassigned tasks")}catch(e){a.default.reportError(e)}n.a.beginAction(),a.default.vmMain.beginUpdateItems();var l=s.default.getRootModel();try{a.default.PAssert(1642,l,"Root item must exist in order to import")}catch(e){a.default.reportError(e)}var d=s.default.createVMLI({text:"Google Tasks Import"},{parent:l,changeType:ChangeType.AllLocal});l.insertItem(d);for(var c=0;c<e.roots.length;++c){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;i(e.remoteItems[e.roots[c]],d)}a.default.vmMain.parseSubtree(d,ChangeType.Local|ChangeType.All),a.default.vmMain.commitUpdateItems(),n.a.endAction(),t()}catch(e){r(void 0,e)}},trelloPreload:function(e,t){window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,a.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",function(){a.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",function(){this.trello.isLoading=!1;try{a.default.PAssert(1643,window.Trello,"The Trello client lib must have been loaded correctly")}catch(e){a.default.reportError(e)}window.Trello?e():t("Error loading Trello. Please try again.")}.bind(this),function(e){this.trello.isLoading=!1,t(e)})}.bind(this),function(e){this.trello.isLoading=!1,t(e)}))},trelloLogin:function(e,t,r,o){try{a.default.PAssert(1644,window.Trello,"The Trello client lib was not properly loaded")}catch(e){a.default.reportError(e)}if(window.Trello){if(i.a.appPlatform===AppPlatform.Chrome){window.addEventListener("message",function e(t){a.default.getLocationOrigin()&&(window.removeEventListener("message",e),t.data.error?o("Error authenticating with Trello."):(Trello.setToken(t.data.token),r()))})}Trello.authorize({type:i.a.appPlatform===AppPlatform.Chrome?"redirect":"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:o})}else o("Error loading Trello. Please try again.")},trelloImport:function(e,t){var r=[];Trello.get("members/me/boards",a.default.protectFn(function(a){var o=0,i=(a=a||[]).length,s=0;function n(){i===s&&e(r)}function l(e){s++,n()}for(var d=0;d<a.length;++d){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;var c=a[d];if(c.closed)i--;else{var u={text:c.name,items:[]};r.push(u),this._handleBoard(u,c.id,t,l)}}n()}.bind(this),t),t)},_handleBoard:function(e,t,r,o){Trello.get("boards/"+t+"/lists",a.default.protectFn(function(t){var a=0,i=0,s=t.length;function n(){i===s&&o()}function l(){i++,n()}for(var d=0;d<t.length;++d){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var c=t[d];if(c.closed)s--;else{var u={text:c.name,items:[]};e.items.push(u),this._handleList(u,c.id,r,l)}}n()}.bind(this),r),r)},_handleList:function(e,t,r,i){Trello.get("lists/"+t+"/cards",a.default.protectFn(function(t){var a=0,s=0,n=t.length;function l(){s===n&&i()}function d(){s++,l()}for(var c=0;c<t.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=t[c];if(u.closed)n--;else{var f={text:u.name};if(u.labels&&u.labels.length>0){for(var p=0,h="",v=0;v<u.labels.length;++v){if(p++>5e3&&__infLoop&&__infLoop(p))throw new RangeError;var g=u.labels[v];h+=o.a.TagPrefix+(g.name.length>0?g.name:g.color)+" "}f.text=h+f.text}if(u.due&&(f.text+=" "+o.a.DatePrefix+m(new Date(u.due))),u.desc&&u.desc.length>0){var w=0;f.items=[];var y=u.desc.split("\n");for(v=0;v<y.length;++v){if(w++>5e3&&__infLoop&&__infLoop(w))throw new RangeError;var b=y[v];b&&b.length>0&&f.items.push({text:b})}}if(u.idChecklists&&u.idChecklists.length>0){var _=0;f.items||(f.items=[]);for(v=0;v<u.idChecklists.length;++v){if(_++>5e3&&__infLoop&&__infLoop(_))throw new RangeError;this._handleChecklist(f,u.idChecklists[v],r,d)}}else s++;e.items.push(f)}}l()}.bind(this),r),r)},_handleChecklist:function(e,t,r,o){Trello.get("checklists/"+t+"/",a.default.protectFn(function(t){for(var r=0,a={text:t.name,isCollapsed:!0,items:[]},i=0;i<t.checkItems.length;++i){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var s=t.checkItems[i],n="complete"===s.state;if(!n){var l={text:s.name,isComplete:n};a.items.push(l)}}e.items.push(a),o()}.bind(this),r),r)},trelloSave:function(e,t,r){function o(e,t){var r=s.default.createVMLI({text:e.text,isComplete:e.isComplete,isCollapsed:e.isCollapsed},{parent:t,changeType:ChangeType.AllLocal});if(t.insertItem(r),e.items)for(var a=0,i=0;i<e.items.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;o(e.items[i],r)}return r}try{var i=0;n.a.beginAction(),a.default.vmMain.beginUpdateItems();var l=s.default.getRootModel();try{a.default.PAssert(1645,l,"Root item must exist in order to import")}catch(e){a.default.reportError(e)}var d=s.default.createVMLI({text:"Trello Import"},{parent:l,changeType:ChangeType.AllLocal});l.insertItem(d);for(var c=0;c<e.length;++c){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;o(e[c],d)}a.default.vmMain.commitUpdateItems(),n.a.endAction()}catch(e){return r(e)}t()},todoistLogin:function(e,t,r,o){try{a.default.PAssert(1646,r,"Todoist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1647,o,"Todoist requires an error callback")}catch(e){a.default.reportError(e)}var i="localhost"===window.location.hostname?"5d361221eddb4bcdb018457c7c74e698":"b701ac04f4df419ca4144ab208a9fb06",s="Dchs"+(new Date).getTime(),n="https://todoist.com/oauth/authorize?client_id="+i+"&scope=data:read&state="+s;window.open(n,"modal-todoist","height=600,width=550");var l=function(e){var t=a.default.getLocationOrigin(),i=!1;try{i=e.data.state===s}catch(e){a.default.reportError(e)}if(t&&i)if(window.removeEventListener("message",l),e.data.error)o("Error authenticating with Todoist");else{var n=e.data.code;n&&a.default.XHR_PrivateAPI({type:"POST",path:"/oauth/todoist",data:{code:n},requireAuth:!0,cb:function(e){if(200===e.status){try{var t=JSON.parse(e.response).data;this.todoist.data=t}catch(e){o("Error parsing response from remote server.",e)}this.todoist.data?r():o("Invalid username or password")}else o("Error contacting remote server.")}.bind(this)})}}.bind(this);window.addEventListener("message",l)},todoistImport:function(e,t){var r=0,o=0;try{a.default.PAssert(1648,e,"Todoist requires a success callback")}catch(e){a.default.reportError(e)}try{a.default.PAssert(1649,t,"Todoist requires an error callback")}catch(e){a.default.reportError(e)}for(var i=this.todoist.data,s={},n=0;n<i.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var l=i.projects[n];l.is_archived||l.is_deleted||(s[l.id]={id:l.id,name:l.name,items:[],itemMap:{},parent_id:l.parent_id,item_order:l.item_order})}for(var d=[],c=0;c<i.items.length;++c){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;var u=i.items[c];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&c>0&&!isNaN(u.indent)&&u.indent>1&&d[u.indent-1]&&(u.parent_id=d[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(d[u.indent]=u))}e(s)},todoistSave:function(e,t,r){var o=[VMLIFlag.None,VMLIFlag.None,VMLIFlag.P2,VMLIFlag.P1,VMLIFlag.P0];try{n.a.beginAction(),a.default.vmMain.beginUpdateItems();var i=s.default.getRootModel();try{a.default.PAssert(1650,i,"Root item must exist in order to import")}catch(e){a.default.reportError(e)}var l=s.default.createVMLI({text:"Todoist Import"},{parent:i,changeType:ChangeType.AllLocal});i.insertItem(l);var d={},c={},u=function(e,t){var r=c[e.id],a=c[t.id];return r.item_order-a.item_order},f=function e(t,r){if(!d[r.id]){var i=r.parent_id;r.parent_id&&!d[r.id]&&e(t,t.itemMap[r.parent_id]);var n=d[i||r.project_id];try{a.default.PAssert(1651,n,"parent item did not exist",i,r.project_id)}catch(e){a.default.reportError(e)}n&&function(e,t,r){t.priority&&(t.priority=o[t.priority]),t.due_date_utc&&(t.content+=" @"+m(new Date(t.due_date_utc)));var a=s.default.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority},{parent:r,changeType:ChangeType.AllLocal});d[t.id]=a,c[a.id]=t,r.insertSorted(a,u)}(0,r,n)}},p=function t(r){if(!d[r.id]){var a=r.parent_id,o=r.id,i=void 0;a?(d[a]||t(e[a]),i=d[a]):i=l;var n=s.default.createVMLI({text:r.name},{parent:i,changeType:ChangeType.AllLocal});d[o]=n,c[n.id]=r,i.insertSorted(n,u)}};for(var h in e)if(e.hasOwnProperty(h)){var v=0,g=e[h],w=g.items;p(g);for(var y=0;y<w.length;y++){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;f(g,w[y])}}a.default.vmMain.commitUpdateItems(),n.a.endAction()}catch(e){return r(e)}t()},_createCSVEntry:function(e,t){for(var r=0,a={},o=0;o<e.length;++o){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;a[e[o]]=t[o]}return a},parseCSV:function(e){for(var t=0,r=p.a.parse(e),a=["Area","Client","Contacts","Category","Context","Created By","Date Created","Date Updated","Delegated To","Start Date","Due Date","Links","Notes","Originating Entry","Parent Entries","Priority","Short Description","Title","Star","Status","Website References"],o=[],i=r.data[0],s=0;s<i.length;++s){if(t++>5e3&&__infLoop&&__infLoop(t))throw new RangeError;a.indexOf(i[s])<0?console.log("Unknown CSV Headers: ",i[s]):o.indexOf(i[s])>=0&&o.remove(i[s])}if(0===o.length){var n=0,l=[];for(s=1;s<r.data.length;++s){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;l.push(this._createCSVEntry(i,r.data[s]))}}else var d="Missing required export fields: "+o.join(", ");if(i.indexOf("Short Descrption")<0&&i.indexOf("Title")<0)d="Missing required export fields: Short Descrption OR Title.";return l||d}},t.default=h}}]);

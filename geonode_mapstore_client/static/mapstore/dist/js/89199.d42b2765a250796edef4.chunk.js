(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89199],{53001:(e,t,r)=>{"use strict";r.d(t,{xT:()=>n,H_:()=>o,Wv:()=>a,gC:()=>i,dG:()=>u,oQ:()=>c,Q2:()=>l,R3:()=>s,Zr:()=>f,Op:()=>E,l$:()=>p,uL:()=>d,zg:()=>O,M3:()=>A,st:()=>m,US:()=>T,$c:()=>R,pW:()=>y,$D:()=>v,ke:()=>_,vw:()=>C,r5:()=>g,X1:()=>G,V3:()=>S,p2:()=>I});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",a="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",i="BACKGROUND_SELECTOR:BACKGROUND_ADDED",u="BACKGROUND_SELECTOR:BACKGROUND_EDITED",c="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",E="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",p="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",d="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",O="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION";function A(e){return{type:E,backgrounds:e}}function m(e){return{type:n,source:e}}function T(e){return{type:c,modalParams:e}}function R(e){return{type:l,modalParams:e}}function y(e){return{type:i,layerId:e}}function v(e){return{type:u,layerId:e}}function _(e){return{type:a,layerId:e}}function C(e){return{type:O,allow:e}}function g(e,t){return{type:s,thumbnailData:e,id:t}}function G(e){return{type:o,backgroundId:e}}function S(){return{type:p}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:d,show:e,layerTitle:t,layerId:r}}},931273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>y,V3:()=>v,HR:()=>_,xi:()=>C,ur:()=>g,vK:()=>G,nm:()=>S,QF:()=>I,zZ:()=>h,uN:()=>L,Bz:()=>D,im:()=>P,CO:()=>N,$X:()=>w,Mt:()=>b,Oq:()=>x,YO:()=>M,PR:()=>F,wI:()=>U,bv:()=>B,mh:()=>K,$Y:()=>j,eA:()=>H,UT:()=>Y,cS:()=>q,l3:()=>k,Kz:()=>W,vg:()=>V,xM:()=>X,do:()=>Z,lb:()=>$,tt:()=>Q,nX:()=>z,BG:()=>J,Rc:()=>ee,K4:()=>te,Dw:()=>re,dL:()=>ne,In:()=>oe,r1:()=>ae,XW:()=>ie,L8:()=>ue,i3:()=>ce,XM:()=>le,X7:()=>se,M3:()=>fe,N3:()=>Ee,SU:()=>pe,wo:()=>de,ye:()=>Oe,m:()=>Ae,wl:()=>me,A4:()=>Re,vG:()=>ye,ky:()=>ve,Wf:()=>_e,Ts:()=>Ce,IT:()=>ge,XS:()=>Ge,tx:()=>Se,We:()=>Ie,nx:()=>he,E9:()=>Le});var n=r(659551),o=r(501157),a=r(603475),i=r(932354),u=r(580416),c=r(801550),l=r(624262),s=r(463202),f=r(313311),E=r.n(f),p=r(788113),d=r(675110),O=r(197395);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R={csw:n.ZP,wms:o.ZP,wmts:a.Z,backgrounds:i.Z},y="CATALOG:ADD_LAYERS_FROM_CATALOGS",v="CATALOG:TEXT_SEARCH",_="CATALOG:RECORD_LIST_LOADED",C="CATALOG:RESET_CATALOG",g="CATALOG:CATALOG_CLOSE",G="CATALOG:RECORD_LIST_LOAD_ERROR",S="CATALOG:CHANGE_CATALOG_FORMAT",I="CATALOG:ADD_LAYER_ERROR",h="CATALOG:CHANGE_SELECTED_SERVICE",L="CATALOG:CHANGE_CATALOG_MODE",D="CATALOG:CHANGE_METADATA_TEMPLATE",P="CATALOG:CHANGE_TITLE",N="CATALOG:CHANGE_TEXT",w="CATALOG:CHANGE_TYPE",b="CATALOG:CHANGE_SERVICE_PROPERTY",x="CATALOG:CHANGE_SERVICE_FORMAT",M="CATALOG:FOCUS_SERVICES_LIST",F="CATALOG:CHANGE_URL",U="CATALOG:ADD_CATALOG_SERVICE",B="CATALOG:DELETE_CATALOG_SERVICE",K="CATALOG:ADD_SERVICE",j="CATALOG:DELETE_SERVICE",H="CATALOG:SAVING_SERVICE",Y="CATALOG:GET_METADATA_RECORD_BY_ID",q="CATALOG:SET_LOADING",k="CATALOG:TOGGLE_TEMPLATE",W="CATALOG:TOGGLE_THUMBNAIL",V="CATALOG:TOGGLE_ADVANCED_SETTINGS",X="CATALOG:FORMAT_OPTIONS_FETCH",Z="CATALOG:FORMAT_OPTIONS_LOADING",$="CATALOG:SET_FORMAT_OPTIONS";function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,a=e.text,i=e.options,u=void 0===i?{}:i;return{type:v,format:t,url:r,startPosition:n,maxRecords:o,text:a,options:u}}function z(e,t){return{type:_,searchOptions:e,result:t}}function J(e){return{type:S,format:e}}function ee(e){return{type:H,status:e}}function te(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:q,loading:e}}function re(e){return{type:h,service:e}}function ne(e){return{type:M,status:e}}function oe(e,t){return{type:L,mode:e,isNew:t}}function ae(e){return{type:P,title:e}}function ie(e){return{type:N,text:e}}function ue(e,t){return{type:b,property:e,value:t}}function ce(e){return{type:x,format:e}}function le(e){return{type:w,newType:e}}function se(e){return{type:F,url:e}}function fe(){return{type:K}}function Ee(e){return{type:U,service:e}}function pe(e){return{type:B,service:e}}function de(){return{type:j}}function Oe(){return{type:C}}function Ae(e){return{type:G,error:e}}function me(){return{type:g}}function Te(e,t){return{type:"CATALOG:DESCRIBE_ERROR",layer:e,error:t}}var Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.zoomToLayer,n=void 0!==r&&r;return function(t,r){var o=r(),a=(0,d.l2)(o),i=(0,l.R8)(e,a||[]);return t((0,u.A4)(m(m({},e),{},{id:i}))),n&&e.bbox&&t((0,c.Px)(e.bbox.bounds,e.bbox.crs)),"wms"===e.type?R.wms.describeLayers((0,l.Hi)(e),e.name).then((function(r){if(r){var n=E()(r,(function(t){return t.name===e.name}));if(n&&"WFS"===n.owsType){var a=s.jQ(s.$F(n.owsURL),(0,p.kS)(o));t((0,u.He)(i,{search:{url:a,type:"wfs"}}))}}})).catch((function(r){return t(Te(e,r))})):null}};function ye(e){return{type:I,error:e}}function ve(e){return{type:Y,metadataOptions:e}}var _e=function(e){return{type:D,metadataTemplate:e}},Ce=function(){return{type:V}},ge=function(){return{type:k}},Ge=function(){return{type:W}},Se=function(e){return{type:X,url:e}},Ie=function(e){return{type:Z,loading:e}},he=function(e,t){return{type:$,formats:e,url:t}};function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,O.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}},921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>a,Ih:()=>i,Xw:()=>u,Pn:()=>c,DZ:()=>l,e8:()=>s,E0:()=>f,F9:()=>E,X_:()=>p,pb:()=>d,qb:()=>O,Re:()=>A,ih:()=>m,xy:()=>T,jL:()=>R,oz:()=>y,ph:()=>v,lF:()=>_,gG:()=>C,cb:()=>g,GI:()=>G,B1:()=>S,fv:()=>I,gc:()=>h,zX:()=>L,ZF:()=>D,Zb:()=>P,DW:()=>N,Xp:()=>w,Fm:()=>b,sV:()=>x,Mn:()=>M,LU:()=>F,XP:()=>U,WU:()=>B,JB:()=>K,g:()=>j,ws:()=>H,HP:()=>Y,aN:()=>q,Pg:()=>W,u0:()=>V,TM:()=>X,PM:()=>Z,lK:()=>$,sv:()=>Q,MO:()=>z,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ae,Y$:()=>ie,Qu:()=>ue,kT:()=>ce});var n=r(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",E="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",O="GET_VECTOR_INFO",A="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",T="FEATURE_INFO_CLICK",R="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",y="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",v="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",C="IDENTIFY:CHANGE_PAGE",g="IDENTIFY:CLOSE_IDENTIFY",G="IDENTIFY:CHANGE_FORMAT",S="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",I="IDENTIFY:EDIT_LAYER_FEATURES",h="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",L="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",P="IDENTIFY:SET_SHOW_IN_MAP_POPUP",N="IDENTIFY:IDENTIFY_IS_MOUNTED",w="IDENTIFY:INIT_PLUGIN";function b(e,t,r,n,a){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:a}}function x(e,t,r,n){return{type:a,error:t,reqId:e,requestParams:r,layerMetadata:n}}function M(e,t,r,n){return{type:i,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function F(){return{type:A}}function U(){return{type:m}}function B(e,t){return{type:c,reqId:e,request:t}}function K(e,t,r,n){return{type:O,layer:e,request:t,metadata:r,queryableLayers:n}}function j(){return{type:l}}function H(e){return{type:s,infoFormat:e}}function Y(){return{type:f}}function q(){return{type:E}}function k(e){return{type:p,reverseGeocodeData:e.data}}function W(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(k(e))})).catch((function(e){t(k(e))}))}}function V(){return{type:d}}function X(){return{type:v}}function Z(e){return{type:_,status:e}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:T,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function Q(e){return{type:R,point:e}}function z(e){return{type:y,enabled:e}}function J(e){return{type:C,index:e}}var ee=function(){return{type:g}},te=function(e){return{type:G,format:e}},re=function(e){return{type:S,showCoordinateEditor:e}},ne=function(e){return{type:I,layer:e}},oe=function(e){return{type:h,query:e}},ae=function(e){return{type:L,trigger:e}},ie=function(e){return{type:P,value:e}},ue=function(e){return{type:N,isMounted:e}},ce=function(e){return{type:w,cfg:e}}},659551:(e,t,r)=>{"use strict";r.d(t,{_b:()=>h,ZP:()=>P});var n=r(608575),o=r(227361),a=r.n(o),i=r(91175),u=r.n(i),c=r(610928),l=r.n(c),s=r(941106),f=r.n(s),E=r(414293),p=r.n(E),d=r(727418),O=r.n(d),A=r(375875),m=r.n(A),T=r(463202),R=r(986267),y=r(501157);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=function(e){var t=n.parse(e,!0);return n.format(O()({},t,{search:null},{query:O()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},S="<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",I="<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ",h='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> </csw:Query> </csw:GetRecords>',L={},D={parseUrl:G,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(m().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},a=0;a<n.length;a++){var i=n[a],u=i.name.localPart,c={};c="references"===u&&i.value?{value:i.value.content&&(0,T.$F)(i.value.content[0])||i.value.content||i.value,scheme:i.value.scheme}:i.value.content&&i.value.content[0]||i.value.content||i.value,o[u]&&Array.isArray(o[u])?o[u].push(c):o[u]?o[u]=[o[u],c]:o[u]=c}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,i){return new Promise((function(c){Promise.all([r.e(99942),r.e(1269)]).then(function(){var s=r(566372),E=s.CSW,d=s.marshaller,O=s.unmarshaller,A=d.marshalString({name:"csw:GetRecords",value:E.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(A=function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).filter,o=(null==n?void 0:n.staticFilter)||S,a="<ogc:And>\n        ".concat(f()((null==n?void 0:n.dynamicFilter)||I)({searchText:r}),"\n        ").concat(o,"\n    </ogc:And>");return f()(h)({filterXml:r?a:o,startPosition:e,maxRecords:t})}(t,n,o,i)),c(m().post(G(e),A,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=O.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n,o=t.value,i=o.searchResults.abstractRecord||o.searchResults.any,c={numberOfRecordsMatched:o.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:o.searchResults.numberOfRecordsReturned,nextRecord:o.searchResults.nextRecord},s=[];if(i)for(var f=0;f<i.length;f++){var E=i[f].value,d={dateStamp:E.dateStamp&&E.dateStamp.date,fileIdentifier:E.fileIdentifier&&E.fileIdentifier.characterString&&E.fileIdentifier.characterString.value,identificationInfo:E.abstractMDIdentification&&E.abstractMDIdentification.value};if(E.boundingBox){var A,m=void 0;if((A=Array.isArray(E.boundingBox)?u()(E.boundingBox):E.boundingBox)&&A.value){var _,g,G,S,I=null!==(_=null===(g=A.value)||void 0===g?void 0:g.crs)&&void 0!==_?_:"",h=null===(G=I.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===G?void 0:G[0],D=(0,R.makeNumericEPSG)(null===(S=I.match(/EPSG:[0-9]+/))||void 0===S?void 0:S[0]),P=A.value.lowerCorner,N=A.value.upperCorner,w=D||(0,R.extractCrsFromURN)(h)||l()(I.split(":"));"EPSG:4326"===(w?"EPSG:"===w.slice(0,5)?(0,R.makeNumericEPSG)(w):(0,R.makeNumericEPSG)("EPSG:".concat(w)):"EPSG:4326")&&"CRS84"!==w&&"OGC:CRS84"!==w&&(P=[P[1],P[0]],N=[N[1],N[0]]),m=(0,R.makeBboxFromOWS)(P,N)}d.boundingBox={extent:m,crs:"EPSG:4326"}}var b=E.dcElement;if(b){for(var x={references:[]},M=0;M<b.length;M++){var F=b[M],U=F.name.localPart,B={};B="references"===U&&F.value?{value:F.value.content&&(0,T.$F)(F.value.content[0])||F.value.content||F.value,scheme:F.value.scheme}:F.value.content&&F.value.content[0]||F.value.content||F.value,x[U]&&Array.isArray(x[U])?x[U].push(B):x[U]?x[U]=[x[U],B]:x[U]=B}n||(n=x.references),d.dc=x}s.push(d)}c.records=s;var K=((null===(r=n)||void 0===r?void 0:r.find((function(e){return"OGC:WMS"===e.scheme})))||{}).value;return function(e,t){var r=L[e],n=r&&(new Date).getTime()<r.timestamp+1e3*((0,T.u8)("cacheExpire")||60);return Promise.resolve(n?r.data:y.ZP.getCapabilities(e+"?version=").then((function(e){return a()(e,"capability.layer.layer",[])})).catch((function(){return[]}))).then((function(r){var o;return n||(L[e]={timestamp:(new Date).getTime(),data:r}),C(C({},t),{},{records:null==t||null===(o=t.records)||void 0===o?void 0:o.map((function(e){var t=r.find((function(t){var r;return t.name===(null==e||null===(r=e.dc)||void 0===r?void 0:r.identifier)}))||{},n=t.minScaleDenominator,o=t.maxScaleDenominator;return C(C({},e),(!p()(n)||!p()(o))&&{capabilities:{MaxScaleDenominator:o,MinScaleDenominator:n}})}))})}))}(function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(K&&K.split("?")||[],1)[0],c)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(a){a(D.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,a){return new Promise((function(i){Promise.all([r.e(99942),r.e(1269)]).then(function(){var u=r(484454).Filter,c=a||"%",l=o&&"%"+o+"%"||"%",s=u.propertyIsLike("dc:identifier",c+":"+l),f=u.filter(s);i(D.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const P=D},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(375875),o=r.n(n),a=r(608575),i=r(727418),u=r.n(i),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(e,t){var r=u()({q:e},c,t||{}),n=a.format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=u()({lat:e.lat,lon:e.lng},t||{},c),n=a.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},603475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(375875),o=r.n(n),a=r(463202),i=r(608575),u=r(727418),c=r.n(u),l=r(505055),s=r.n(l),f=r(984596),E=r.n(f),p=r(986267),d=r(707294),O={},A=function(e){var t=i.parse(e,!0);return i.format(c()({},t,{search:null},{query:c()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},m=function(e,t,r,n,o){for(var a=e.Capabilities.Contents,i=(0,d.G6)(e),u=(0,d.s5)(e),l=a.TileMatrixSet&&E()(a.TileMatrixSet)||[],s=[],f=l.length,O=0;O<f;O++)s.push((0,p.getEPSGCode)(l[O]["ows:SupportedCRS"]));var A=a.Layer,m=E()(A).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:m.length,numberOfRecordsReturned:Math.min(r,m.length),nextRecord:t+Math.min(r,m.length)+1,records:m.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return c()({},e,{SRS:s,TileMatrixSet:l,queryable:!!(0,d.b4)(i,"GetFeatureInfo","KVP"),requestEncoding:u,style:(0,d.EN)(e),format:(0,d.JY)(e),GetTileURL:(0,d.b4)(i,"GetTile",u),capabilitiesURL:o})}))}},T={parseUrl:A,getRecords:function(e,t,r,n){var i=O[e];return i&&(new Date).getTime()<i.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(o){o(m(i.data,t,r,n,e))})):o().get(A(e)).then((function(o){var a;return s().parseString(o.data,{explicitArray:!1},(function(e,t){a=t})),O[e]={timestamp:(new Date).getTime(),data:a},m(a,t,r,n,e)}))},getCapabilities:function(e){var t=O[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(A(e)).then((function(t){var r;return s().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),O[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return T.getRecords(e,t,r,n)},reset:function(){Object.keys(O).forEach((function(e){delete O[e]}))}};const R=T},932354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(227361),o=r.n(n),a=r(463202),i=function(e,t,r,n){var i=o()(a.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),u=i.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:i.length,numberOfRecordsReturned:u.length,records:u,service:{Name:"Background Provider"}})}))};const u={getRecords:i,reset:function(){},textSearch:function(e,t,r,n){return i(0,t,r,n)}}}}]);
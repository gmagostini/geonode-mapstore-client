(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6125],{80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>a,OX:()=>u,sb:()=>c,K$:()=>s,k7:()=>p,cX:()=>l,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>m,qv:()=>E,cI:()=>b,g6:()=>v,I4:()=>h,l$:()=>g,Xv:()=>O,k3:()=>_,CQ:()=>R,R8:()=>w,HN:()=>D,sH:()=>P,c7:()=>S,_7:()=>T,eF:()=>I,O6:()=>N,ED:()=>A,RP:()=>C,sF:()=>j,VP:()=>F,He:()=>L,vO:()=>x,WO:()=>G,bh:()=>M,pV:()=>Y,MK:()=>k,ZF:()=>H,tV:()=>U,Dv:()=>K,Yz:()=>V,kI:()=>Z,XG:()=>q,A4:()=>W,Rp:()=>X,$o:()=>B,ct:()=>z,oh:()=>Q,$h:()=>$,ud:()=>J,Qr:()=>ee,LR:()=>te,nN:()=>ne,UG:()=>re,F5:()=>oe,c9:()=>ie,Jh:()=>ae,Xy:()=>ue});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",a="TOGGLE_NODE",u="SORT_NODE",c="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",l="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",m="ADD_GROUP",E="REMOVE_LAYER",b="SHOW_SETTINGS",v="HIDE_SETTINGS",h="UPDATE_SETTINGS",g="REFRESH_LAYERS",O="LAYERS:UPDATE_LAYERS_DIMENSION",_="LAYERS_REFRESHED",R="LAYERS_REFRESH_ERROR",w="LAYERS:BROWSE_DATA",D="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",S="LAYERS:SELECT_NODE",T="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",N="LAYERS:HIDE_LAYER_METADATA",A="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,t,n){return{type:b,node:e,nodeType:t,options:n}}function j(){return{type:v}}function F(e){return{type:h,options:e}}function L(e,t){return{type:r,newProperties:t,layer:e}}function x(e,t){return{type:o,layer:e,params:t}}function G(e,t){return{type:i,newProperties:t,group:e}}function M(e,t,n){return{type:a,node:e,nodeType:t,status:!n}}function Y(e){return{type:"CONTEXT_NODE",node:e}}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:u,node:e,order:t,sortLayers:n}}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:c,node:e,nodeType:t,removeEmpty:n}}function U(e,t,n){return{type:s,node:e,nodeType:t,options:n}}function K(e,t,n){return{type:p,node:e,groupId:t,index:n}}function V(e){return{type:l,layerId:e}}function Z(e,t){return{type:f,layerId:e,error:t}}function q(e,t,n){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:n}}function W(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d,layer:e,foreground:t}}function X(e,t,n){return{type:m,group:e,parent:t,options:n}}function B(e){return{type:E,layerId:e}}function z(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function Q(e){return{type:_,layers:e}}function $(e,t){return{type:R,layers:e,error:t}}function J(e,t,n,r){return{type:O,dimension:e,value:t,options:n,layers:r}}function ee(e){return{type:w,layer:e}}function te(e){return{type:D,layer:e}}function ne(){return{type:P}}function re(e,t,n){return{type:S,id:e,nodeType:t,ctrlKey:n}}function oe(e){return{type:T,text:e}}function ie(e,t){return{type:I,metadataRecord:e,maskLoading:t}}function ae(){return{type:N}}function ue(e,t){return{type:A,newParams:e,update:t}}},21914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>s,e8:()=>p,E0:()=>l,F9:()=>f,X_:()=>y,pb:()=>d,qb:()=>m,Re:()=>E,ih:()=>b,xy:()=>v,jL:()=>h,oz:()=>g,ph:()=>O,lF:()=>_,gG:()=>R,cb:()=>w,GI:()=>D,B1:()=>P,fv:()=>S,gc:()=>T,zX:()=>I,ZF:()=>N,Zb:()=>A,DW:()=>C,Xp:()=>j,Fm:()=>F,sV:()=>L,Mn:()=>x,LU:()=>G,XP:()=>M,WU:()=>Y,JB:()=>k,g:()=>H,ws:()=>U,HP:()=>K,aN:()=>V,Pg:()=>q,u0:()=>W,TM:()=>X,PM:()=>B,lK:()=>z,sv:()=>Q,MO:()=>$,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ae,Qu:()=>ue,kT:()=>ce});var r=n(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",p="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",E="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",v="FEATURE_INFO_CLICK",h="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",g="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",R="IDENTIFY:CHANGE_PAGE",w="IDENTIFY:CLOSE_IDENTIFY",D="IDENTIFY:CHANGE_FORMAT",P="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",S="IDENTIFY:EDIT_LAYER_FEATURES",T="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",N="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",A="IDENTIFY:SET_SHOW_IN_MAP_POPUP",C="IDENTIFY:IDENTIFY_IS_MOUNTED",j="IDENTIFY:INIT_PLUGIN";function F(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function L(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function x(e,t,n,r){return{type:a,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function G(){return{type:E}}function M(){return{type:b}}function Y(e,t){return{type:c,reqId:e,request:t}}function k(e,t,n,r){return{type:m,layer:e,request:t,metadata:n,queryableLayers:r}}function H(){return{type:s}}function U(e){return{type:p,infoFormat:e}}function K(){return{type:l}}function V(){return{type:f}}function Z(e){return{type:y,reverseGeocodeData:e.data}}function q(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Z(e))})).catch((function(e){t(Z(e))}))}}function W(){return{type:d}}function X(){return{type:O}}function B(e){return{type:_,status:e}}function z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:v,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function Q(e){return{type:h,point:e}}function $(e){return{type:g,enabled:e}}function J(e){return{type:R,index:e}}var ee=function(){return{type:w}},te=function(e){return{type:D,format:e}},ne=function(e){return{type:P,showCoordinateEditor:e}},re=function(e){return{type:S,layer:e}},oe=function(e){return{type:T,query:e}},ie=function(e){return{type:I,trigger:e}},ae=function(e){return{type:A,value:e}},ue=function(e){return{type:C,isMounted:e}},ce=function(e){return{type:j,cfg:e}}},47310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(75875),o=n.n(r),i=n(8575),a=n(37295),u=n.n(a),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var n=u()({q:e},c,t||{}),r=i.format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=u()({lat:e.lat,lon:e.lng},t||{},c),r=i.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},99509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var r=n(67294),o=n.n(r),i=n(45697),a=n.n(i),u=n(48403),c=n.n(u),s=n(80681),p=n(94192);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(){var e;f(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(E(e=a.call.apply(a,[this].concat(n))),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),v(E(e),"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),v(E(e),"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return t=u,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,a=t.disabled,u="validateDecimal"+c()(n);return o().createElement(s.FormGroup,{validationState:this[u](r)},o().createElement(p.Z,{disabled:a,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[u](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[u],type:"number"}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);v(h,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,coordinate:a().string,onChange:a().func,onKeyDown:a().func,onSubmit:a().func,disabled:a().bool}),v(h,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const g=h;var O=n(14293),_=n.n(O),R=n(18093);const w=(0,R.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var D=n(62395);const P=(0,R.compose)((0,R.withProps)((function(e){return{isValid:""!==e.value}})),(0,R.withState)("initial","setInitial",{}),(0,R.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,R.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G="degrees",M="seconds",Y="minutes",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(i){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(){var e;N(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(F(e=a.call.apply(a,[this].concat(n))),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),x(F(e),"getUpdatedCoordinateValue",(function(t,n){try{var r=x({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,t===G?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),a=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),u=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),a===e.props.maxDegrees&&(i=0,o=0),u=a<0?u===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:u,-1===a&&(r.degrees<0&&r.minutes>=0?a=r.degrees:r.minutes<0&&r.degrees<=0?(a=0,i=r.minutes):(a=0,i=0,o=1e-4)),{degrees:a,minutes:i,seconds:o,direction:u}}catch(e){return null}})),x(F(e),"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),x(F(e),"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),x(F(e),"getNewValue",(function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;if(""===t)n="";else{var o=r===M?parseFloat(t):parseInt(t,10),i=r===G?e.props.maxDegrees:60;n=Math.round(10*o)/10<i?o:e.props[r]}return n})),x(F(e),"verifyOnKeyDownEvent",(function(t){var n;69===t.keyCode&&t.preventDefault(),"0"===(null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&t.target.setSelectionRange(-1,-1),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),x(F(e),"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),x(F(e),"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!_()(n)&&n>0&&n<60&&!_()(r)&&r>0&&r<60&&!_()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return t=u,(n=[{key:"render",value:function(){var e,t,n,r=this,i={padding:0,textAlign:"center",borderRight:"none"},a=this.getInputStyle(this.props.degrees),u=this.getInputStyle(this.props.minutes),c=this.getInputStyle(this.props.seconds),l={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},f=(null!==(e=null==this||null===(t=this.props)||void 0===t||null===(n=t.aeronauticalOptions)||void 0===n?void 0:n.seconds)&&void 0!==e?e:{}).step;return o().createElement(s.FormGroup,{style:{display:"inline-flex"}},o().createElement("div",{className:G,style:{width:40,display:"flex"}},o().createElement(p.Z,{key:this.props.coordinate+G,value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(e){return r.onChange(G,r.getNewValue(e))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:I(I({width:"100%"},i),a),type:"number"}),o().createElement("span",{style:l},"°")),o().createElement("div",{className:Y,style:{width:40,display:"flex"}},o().createElement(p.Z,{disabled:this.props.disabled,key:this.props.coordinate+Y,placeholder:"m",size:3,value:this.props.minutes,onChange:function(e){return r.onChange(Y,r.getNewValue(e,Y))},max:60,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:I(I({width:"100%"},i),u),step:1,type:"number"}),o().createElement("span",{style:l},"′")),o().createElement("div",{className:M,style:{display:"flex"}},o().createElement(p.Z,{disabled:this.props.disabled,key:this.props.coordinate+M,value:this.props.seconds,placeholder:"s",onChange:function(e){return r.onChange(M,r.getNewValue(e,M))},step:f,max:60,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},min:-1,style:I(I({width:"100%"},i),c),type:"number"}),o().createElement("span",{style:l},"″")),o().createElement("div",{className:"direction-select"},o().createElement(s.FormControl,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(e){return r.onChange("direction",e.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);x(k,"propTypes",{idx:a().number,maxDegrees:a().number,degrees:a().number,minutes:a().number,seconds:a().number,directions:a().array,direction:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func,disabled:a().bool}),x(k,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const H=(0,R.compose)(w,D.Z,P)(k),U=(0,R.compose)((0,R.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function X(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(i){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function u(){return Z(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.format;return"decimal"===e||_()(e)?o().createElement(g,V({},this.props,{format:this.props.format||"decimal"})):o().createElement(H,this.props)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);z(Q,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func}),z(Q,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}});const $=U(Q)},62395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(7654),o=n.n(r),i=n(59854),a=n.n(i),u=n(18093);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=(0,u.compose)((0,u.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).seconds,i=e>=0?Math.floor(e):Math.ceil(e),u=Math.abs(60*(e-i)),c=Math.floor(u),s=60*(u-c),p=a()(s,null!==(n=null==r?void 0:r.decimals)&&void 0!==n?n:4);return i=Math.abs(i),60===p&&(c++,p=0),60===c&&(i++,c=0),o()(i)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:i,minutes:c,seconds:p,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,u.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,a=t.direction,u=0,c=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(u=n),o()(r)||(c=r),o()(i)||(s=i);var p=u+c/60+s/3600;(p>0&&("S"===a||"W"===a)||p<0&&("N"===a||"E"===a))&&(p*=-1),e.onChange(p.toPrecision(12))}}}))},77900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(80681),o=n(15135),i=n(67294),a=n.n(i),u=n(84110),c=n.n(u);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var p=(0,o.Z)(r.DropdownButton),l={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:c()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return a().createElement(p,s({},l,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,u=e.active,c=void 0!==u&&u;return a().createElement(r.MenuItem,{active:c,eventKey:t,onClick:i,key:t},n&&a().createElement(r.Glyphicon,{glyph:n})," ",o)})):null)}}}]);
(function(){"use strict";var e={371:function(e,o,t){var n,r,l=t(144),a=function(){var e=this,o=e._self._c;return o("JetsSeatmap",{attrs:{flight:e.flight,config:e.config,availability:e.availability,passengers:e.passengers,seatJumpTo:e.seatJumpTo,currentDeckIndex:e.currentDeckIndex},on:{onSeatMapInited:e.onSeatMapInited,onSeatSelected:e.onSeatSelected,onSeatUnselected:e.onSeatUnselected,onTooltipRequested:e.onTooltipRequested,onLayoutUpdated:e.onLayoutUpdated,onSeatMouseLeave:e.onSeatMouseLeave,onSeatMouseClick:e.onSeatMouseClick,onAvailabilityApplied:e.onAvailabilityApplied}})},i=[],s=t(644),c=t.n(s),p=t(726),u=react-dom,d=t.n(u),f={name:"JetsSeatmap",props:{flight:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})},availability:{type:Array,default:()=>[]},passengers:{type:Array,default:()=>[]},seatJumpTo:{type:Object,default:()=>null},currentDeckIndex:{type:Number,default:0}},emits:["onSeatMapInited","onSeatSelected","onSeatUnselected","onTooltipRequested","onLayoutUpdated","onSeatMouseLeave","onSeatMouseClick","onAvailabilityApplied"],mounted(){const e=this,o={flight:this.flight,config:this.config,availability:this.availability,passengers:this.passengers,seatJumpTo:this.seatJumpTo,currentDeckIndex:this.currentDeckIndex,onSeatMapInited:function(o){e.$emit("onSeatMapInited - ",o)},onSeatSelected:function(o){e.$emit("onSeatSelected - ",o)},onSeatUnselected:function(o){e.$emit("onSeatUnselected - ",o)},onTooltipRequested:function(o){e.$emit("onTooltipRequested - ",o)},onLayoutUpdated:function(o){e.$emit("onLayoutUpdated - ",o)},onSeatMouseLeave(o){e.$emit("onSeatMouseLeave - ",o)},onSeatMouseClick(o){e.$emit("onSeatMouseClick - ",o)},onAvailabilityApplied(o){e.$emit("onAvailabilityApplied - ",o)}};d().render(c().createElement(p.dZ,o),this.$refs.wrapper)},beforeDestroy:function(){d().unmountComponentAtNode(this.$refs.wrapper)},render:function(){return(0,l.h)("div",{ref:"wrapper"})}},g=f,b=t(1),y=(0,b.Z)(g,n,r,!1,null,null,null),S=y.exports;const h={id:"1111",airlineCode:"BA",flightNo:"106",departureDate:"2023-09-27",departure:"DXB",arrival:"LHR",cabinClass:"E",passengerType:"ADT",planeCode:null};var v=h;const C={width:400,horizontal:!0,rightToLeft:!1,visibleFuselage:!0,visibleWings:!1,showDeckSelector:!1,builtInTooltip:!0,externalPassengerManagement:!1,tooltipOnHover:!1,lang:"EN",apiUrl:"https://sandbox.quicket.io/api/v1",apiAppId:"aff6eb5e-1c83-4e5c-a2a2-seatmaps-com",apiKey:"d5c55bd9-60f0-4e2f-84e0-seatmaps-com",colorTheme:{deckLabelTitleColor:"white",deckHeightSpacing:100,wingsWidth:50,deckSeparation:0,floorColor:"rgb(30,60,90)",seatLabelColor:"white",seatStrokeColor:"rgb(237, 237, 237)",seatStrokeWidth:1,seatArmrestColor:"#cccccc",defaultPassengerBadgeColor:"darkred",fontFamily:"Montserrat, sans-serif",tooltipBackgroundColor:"rgb(255,255,255)",tooltipHeaderColor:"#4f6f8f",tooltipBorderColor:"rgb(255,255,255)",tooltipFontColor:"#4f6f8f",tooltipIconColor:"#4f6f8f",tooltipIconBorderColor:"#4f6f8f",tooltipIconBackgroundColor:"#fff",tooltipSelectButtonTextColor:"#fff",tooltipSelectButtonBackgroundColor:"rgb(42, 85, 128)",tooltipCancelButtonTextColor:"#fff",tooltipCancelButtonBackgroundColor:"rgb(55, 55, 55)",deckSelectorStrokeColor:"#fff",deckSelectorFillColor:"rgba(55, 55, 55, 0.5)",deckSelectorSize:30,fuselageStrokeWidth:16,fuselageFillColor:"lightgrey",fuselageStrokeColor:"darkgrey",fuselageWindowsColor:"darkgrey",fuselageWingsColor:"rgba(55, 55, 55, 0.5)"}};var T=C;const m=[{currency:"USD",label:"8A",price:500,onlyForPassengerType:["ADT","CHD","INF"],additionalProps:[{label:"Test prop for all",icon:null},{label:"Another test prop for all",icon:"wifi"}],color:"green"},{currency:"USD",label:"8B",price:300,onlyForPassengerType:["ADT","CHD","INF"],additionalProps:[{label:"Test prop for all",icon:null},{label:"Another test prop for all",icon:"wifi"}],color:"green"},{currency:"USD",label:"8C",price:100,onlyForPassengerType:["ADT","CHD","INF"],additionalProps:[{label:"Test prop for all",icon:null},{label:"Another test prop for all",icon:"wifi"}],color:"green"},{currency:"USD",label:"20A",price:33,onlyForPassengerType:["ADT","CHD","INF"],additionalProps:[{label:"Test prop for all",icon:null},{label:"Another test prop for all",icon:"wifi"}],color:"lightgrey"},{currency:"USD",label:"20E",price:33,onlyForPassengerType:["ADT","CHD","INF"],additionalProps:[{label:"Clear air",icon:null},{label:"USB plug",icon:"power"}],color:"red"},{currency:"USD",label:"20K",price:33,onlyForPassengerType:["ADT","CHD","INF"],color:"magenta"},{currency:"USD",label:"21F",price:13,onlyForPassengerType:["ADT","CHD","INF"]},{currency:"USD",label:"21J",price:13,onlyForPassengerType:["CHD","INF"]},{currency:"USD",label:"35K",price:1337,onlyForPassengerType:["CHD","INF"]},{currency:"EUR",label:"70E",price:1234}];var k=m;const D=[{passengerType:"ADT",id:"1",seat:null},{id:"2",seat:{price:0,seatLabel:"21F"},passengerLabel:"Alex Test",passengerColor:"brown"},{id:"4",seat:{price:0,seatLabel:"21J"},passengerLabel:"Big Lebowski",passengerColor:"green"},{id:"3",passengerType:"CHD",seat:null,passengerLabel:"John Snow",passengerColor:"orange"}];var A=D,w={name:"App",components:{JetsSeatmap:S},data(){return{flight:v,config:T,availability:k,passengers:A,seatJumpTo:null,currentDeckIndex:0}},methods:{onSeatMapInited(e){console.log("[[onSeatMapInited]]:",e)},onSeatSelected(e){console.log("[[onSeatSelected]]:",e)},onSeatUnselected(e){console.log("[[onSeatUnselected]]:",e)},onTooltipRequested(e){console.log("[[onTooltipRequested]]",e)},onLayoutUpdated(e){console.log("[[onLayoutUpdated]]:",e)},onSeatMouseLeave(e){console.log("[[onSeatMouseLeave]]:",e)},onSeatMouseClick(e){console.log("[[onSeatMouseClick]]:",e)},onAvailabilityApplied(e){console.log("[[onAvailabilityApplied]]:",e)}}},I=w,F=(0,b.Z)(I,a,i,!1,null,null,null),U=F.exports;l.ZP.config.productionTip=!1,new l.ZP({render:e=>e(U)}).$mount("#app")},644:function(e){e.exports=react}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var l=o[n]={exports:{}};return e[n](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,l){if(!n){var a=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],l=e[p][2];for(var i=!0,s=0;s<n.length;s++)(!1&l||a>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(p--,1);var c=r();void 0!==c&&(o=c)}}return o}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[n,r,l]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,l,a=n[0],i=n[1],s=n[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(s)var p=s(t)}for(o&&o(n);c<a.length;c++)l=a[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(p)},n=self["webpackChunk_seatmaps_com_react_lib_vue_wrapper"]=self["webpackChunk_seatmaps_com_react_lib_vue_wrapper"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(371)}));n=t.O(n)})();
//# sourceMappingURL=app.488b24fe.js.map
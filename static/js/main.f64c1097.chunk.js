(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,a){t.exports={graphContainer:"timeline_graphContainer__1X6eL"}},141:function(t,e,a){t.exports={container:"toggle_container__3VUN2"}},144:function(t,e,a){t.exports={container:"analogWriteSlider_container__Us8ZG"}},145:function(t,e,a){t.exports={container:"dial_container__1ZnML"}},153:function(t,e,a){t.exports=a(282)},158:function(t,e,a){},159:function(t,e,a){},160:function(t,e,a){},164:function(t,e,a){},250:function(t,e,a){},271:function(t,e,a){},278:function(t,e,a){},281:function(t,e,a){},282:function(t,e,a){"use strict";a.r(e);var n,i,s,r,o,l,c=a(1),u=a.n(c),d=a(7),h=a.n(d),p=(a(158),a(159),a(14)),m=a(15),v=a(17),f=a(16),g=a(57),y=a(18),E=(a(160),a(161),a(61)),b=(a(103),a(164),E.a.SubMenu),k=function(t){function e(){var t;return Object(p.a)(this,e),(t=Object(v.a)(this,Object(f.a)(e).call(this))).handleClick=function(e){t.setState({current:e.key}),t.props.getChoice(e.key)},t.state={current:"hq"},t}return Object(y.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return u.a.createElement(E.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",theme:"dark",className:"MNmenu"},u.a.createElement(b,{title:u.a.createElement("span",{className:"MNsubmenu-title-wrapper",style:{color:"rgba(255, 255, 255, 0.6"}},"Mo Control")},u.a.createElement(E.a.ItemGroup,{className:"MNmenuGroup"},u.a.createElement(E.a.Item,{key:"hq",className:"MNitem"},u.a.createElement("a",{href:"index.html"},"Mo HQ")),u.a.createElement(E.a.Item,{key:"about",className:"MNitem"},u.a.createElement("a",{href:"http://www.robotstack.com",rel:"noopener noreferrer"},"About Mo")))))}}]),e}(c.Component),C=(a(136),a(31)),j=(a(70),a(25)),O=(a(65),a(23)),x=(a(119),a(8)),U=(a(283),a(146)),S=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).onChange=function(t){var e=a.props.allUnits[t-1];a.setState({activeUnit:e,current:t}),a.props.getActiveUnit(e)},a.state={activeUnit:a.props.allUnits[0],current:1},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"itemRender",value:function(t,e,a){var n=this.props,i=n.allUnits,s=n.getColors,r=this.state.activeUnit,o=t-1,l="mo:"+i[o],c=s(i,r,1,.5);return"page"===e?u.a.createElement("a",{alt:l,style:{color:c[o],fontSize:".9em",padding:"0px"}},i[o]):a}},{key:"render",value:function(){var t=this.props.allUnits,e=this.state.current;return u.a.createElement(U.a,{current:e,pageSize:1,onChange:this.onChange,total:t.length,size:this.props.size,showLessItems:!0,style:{position:"relative",bottom:"1px"},itemRender:this.itemRender.bind(this)})}}]),e}(u.a.Component),P=a(140),I=a.n(P),N={style:{background:"rgba(0, 0, 0, 1)",width:"100%",height:"100%",minHeight:"190px",minWidth:"250px"},contentStyle:{color:"rgba(255, 255, 255, 0.65)"},inputStyle:{color:"rgba(255, 255, 255, 0.65)",position:"relative",top:"3px"},promptLabelStyle:{color:"rgba(238, 156, 52, 0.75)"}},w=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).commands={echo:{description:"Echo a passed string.",usage:"echo <string>",fn:function(){return"".concat(Array.from(arguments).join(" "))}},digitalWrite:{description:"Write a high or low value to a pin.\n",usage:"digitalWrite <pin (0-255)> <value (0, 1)> <unitId (0-255)>",fn:function(t,e,n){var i=a.terminal.current;fetch("/digitalwrite/"+t+"/"+e+"/"+n+"/").then(function(t){return t.json()}).then(function(t){return i.pushToStdout(JSON.stringify(t.reply))})}},rotate:{description:"Rotate at the given speed in the given direction.",usage:"rotate <speed (0-255)> <direction (-1,0,1)> <unitId (0-255)>",fn:function(t,e,n){var i=a.terminal.current;fetch("/rotate/"+t+"/"+e+"/"+n+"/").then(function(t){return t.json()}).then(function(t){return i.pushToStdout(JSON.stringify(t.reply))})}}},a.terminal=u.a.createRef(),a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return u.a.createElement(I.a,Object.assign({ref:this.terminal,commands:this.commands,welcomeMessage:'console in development - type "help" for available commands',promptLabel:"mo>"},N))}}]),e}(u.a.Component),T=(a(250),a(251),a(142)),D=a(141),R=a.n(D),M=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).state={checked:!1},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this.state.checked?1:0;fetch("/digitalwrite/"+this.props.pin+"/"+t+"/"+this.props.unitId+"/").then(function(t){return t.json()}).then(function(t){return console.log(t)})}},{key:"onChange",value:function(t){var e=t?1:0;fetch("/digitalwrite/"+this.props.pin+"/"+e+"/"+this.props.unitId+"/").then(function(t){return t.json()}).then(function(t){return console.log(t)}),this.setState({checked:t})}},{key:"render",value:function(){return u.a.createElement("div",{className:R.a.container},u.a.createElement(T.a,{onChange:this.onChange.bind(this),checked:this.state.checked,size:this.props.size}))}}]),e}(c.Component),A=(a(254),a(148)),V=a(144),_=a.n(V),B=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).state={value:0},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){fetch("/analogwrite/"+this.props.pin+"/"+this.state.value+"/"+this.props.unitId+"/").then(function(t){return t.json()}).then(function(t){return console.log(t)})}},{key:"onChange",value:function(t){fetch("/analogwrite/"+this.props.pin+"/"+t+"/"+this.props.unitId+"/").then(function(t){return t.json()}).then(function(t){return console.log(t)}),this.setState({value:t})}},{key:"render",value:function(){return u.a.createElement("div",{className:_.a.container},u.a.createElement(A.a,{vertical:!0,max:255,defaultValue:this.state.value,onChange:this.onChange.bind(this)}))}}]),e}(c.Component),z=(a(271),function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).state={value:"click"},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"onClick",value:function(){var t=this;fetch("/analogread/"+this.props.pin+"/"+this.props.unitId+"/").then(function(t){return t.json()}).then(function(e){console.log(e),e.reply&&t.setState({value:e.reply.params})}).catch(function(){return t.setState({value:"null"})})}},{key:"render",value:function(){return u.a.createElement("div",{className:"ARcontainer"},u.a.createElement(O.a,{size:this.props.size,onClick:this.onClick.bind(this),className:"ARbuttonUnit"},u.a.createElement("span",{className:"ARtext"},this.state.value)))}}]),e}(c.Component)),H=a(145),L=a.n(H),Q=a(42),W=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).getMotiPos=function(){return fetch("/get/R_PRESENT_POSITION/1/"+a.props.unitId+"/").then(function(t){return t.json()}).then(function(t){if(t.reply.params){var e=t.reply.params[0]/a.props.steps;null!==e&&!1===isNaN(e)&&a.setState({motiPos:e})}}).catch(function(t){console.log(t)})},a.state={rotations:0,dialPos:0,lastDialVal:0,motiPos:0},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.getMotiPos(),setInterval(this.getMotiPos,250)}},{key:"getRangeValue",value:function(t){return Math.round(360*t)}},{key:"checkRollover",value:function(t){var e=0,a=this.state.lastDialVal;return t<a-.8?e=1:t>a+.8&&(e=-1),e}},{key:"moveIt",value:function(){var t=this.state.dialPos*this.props.steps;fetch("/rotateTo/"+t+"/"+this.props.speed+"/"+this.props.unitId+"/").then(function(t){return t.json()}).then(function(t){console.log(t)})}},{key:"changeValue",value:function(t){if(this.props.capture);else{var e=this.state.rotations+this.checkRollover(t),a=t+e;this.setState({lastDialVal:t,rotations:e,dialPos:a}),this.props.getDialPos(a),this.moveIt()}}},{key:"componentDidUpdate",value:function(t,e){var a=this.props,n=a.incomingVal,i=a.capture,s=a.getDialPos,r=a.color,o=this.state,l=o.motiPos,c=o.dialPos;null!==n&&n!==t.incomingVal&&(this.setState({dialPos:n,lastIncomingVal:n}),!1===i&&this.moveIt()),i&&l!==e.motiPos&&this.setState({dialPos:l,lastDialVal:l}),c!==e.dialPos&&s(l),console.log(r)}},{key:"render",value:function(){var t=this.props.color,e=this.state,a=e.motiPos,n=e.dialPos,i=this.getRangeValue(n),s=this.getRangeValue(a),r=this.props,o=r.radius,l=r.capture,c=l?"("+s+"\xb0)":i+"\xb0 ",d=l?"":"("+s+"\xb0)";return u.a.createElement("div",{className:L.a.container},u.a.createElement(Q.CircularInput,{onChange:this.changeValue.bind(this),value:n,radius:o},u.a.createElement(Q.CircularTrack,{strokeWidth:1,stroke:t}),u.a.createElement(Q.CircularThumb,{strokeWidth:1,stroke:t,fill:t,r:9}),u.a.createElement("text",{x:o,y:o,textAnchor:"middle",dy:"0.3em",fill:"rgba(255, 255, 255, 0.65)"},c),u.a.createElement("text",{x:o,y:o+16,textAnchor:"middle",fontSize:"10px",fill:"rgba(255, 255, 255, 0.2)"},d)),u.a.createElement("br",null))}}]),e}(c.Component),F=function(t){function e(){var t;return Object(p.a)(this,e),(t=Object(v.a)(this,Object(f.a)(e).call(this))).state={capture:!1},t}return Object(y.a)(e,t),Object(m.a)(e,[{key:"onCaptureClick",value:function(){var t=this.props.getCapture,e=this.state.capture;e=!e,this.setState({capture:e}),t(e),e&&fetch("/rotate/0/0/"+this.props.activeUnit+"/").then(function(t){return t.json()}).then(function(t){console.log(t)})}},{key:"render",value:function(){var t=this.props,e=t.activeUnit,a=t.colors,n=t.allUnits,i=t.steps,s=t.activePointVal,r=t.getDialPos,o=t.screen,l=this.state.capture,c=l?"vertical-align-top":"vertical-align-bottom",d=l?"captureFrom":"rotateTo",h=l?"Capture: Manually turn motor to read its position to the dial. Click Arrow to Drive instead.":"Drive: Turn dial to make motor move to corresponding position. Click Arrow to Capture instead.",p=a[n.indexOf(e)],m=80,v="default";return o.width<400?(m=50,v="small"):o.width<600?(m=65,v="small"):o.width>1080&&(m=100,v="default"),u.a.createElement("div",{className:"UIcontrols"},u.a.createElement("div",{className:"UIpinBox"},u.a.createElement(j.a,{title:"Turn corresponding pin On or Off"},u.a.createElement("span",{className:"UIioTitle"},"digitalWrite")),u.a.createElement(C.a,{type:"flex",justify:"start",align:"middle"},u.a.createElement("div",{className:"UIpinUnit"},"p11 ",u.a.createElement(M,{unitId:e,pin:11,size:v}))),u.a.createElement(C.a,{type:"flex",justify:"start",align:"middle"},u.a.createElement("div",{className:"UIpinUnit"},"p12 ",u.a.createElement(M,{unitId:e,pin:12,size:v}))),u.a.createElement(C.a,{type:"flex",justify:"start",align:"middle"},u.a.createElement("div",{className:"UIpinUnit"},"p13 ",u.a.createElement(M,{unitId:e,pin:13,size:v}))),u.a.createElement(j.a,{title:"Read value(0 to 1024)/voltage(0 to 3.3V) of corresponding pin"},u.a.createElement("span",{className:"UIioTitlePadded"},"analogRead")),u.a.createElement(C.a,{type:"flex",justify:"start",align:"middle"},u.a.createElement("div",{className:"UIpinUnit"},"a2 ",u.a.createElement(z,{unitId:e,pin:16,size:v}))),u.a.createElement(C.a,{type:"flex",justify:"start",align:"middle"},u.a.createElement("div",{className:"UIpinUnit"},"a3 ",u.a.createElement(z,{unitId:e,pin:17,size:v}))),u.a.createElement(C.a,{type:"flex",justify:"start",align:"middle"},u.a.createElement("div",{className:"UIpinUnit"},"a4 ",u.a.createElement(z,{unitId:e,pin:18,size:v})))),u.a.createElement("div",{className:"UIdialBox"},u.a.createElement("div",{className:"UIdialBoxHeader"},u.a.createElement(j.a,{title:h},u.a.createElement("span",{className:"UIioTitle"},d)),u.a.createElement(O.a,{type:"link",onClick:this.onCaptureClick.bind(this),className:"UIcaptureIconUnit"},u.a.createElement(x.a,{type:c,className:"UIcaptureButtonText"})),u.a.createElement("div",{className:"UIdial"},u.a.createElement(W,{unitId:e,steps:i,radius:m,speed:255,capture:l,getDialPos:r,incomingVal:s,vscreen:o,color:p}))),u.a.createElement("div",{className:"UImotorId"},u.a.createElement(j.a,{title:"The active motor"},"MO:",e))),u.a.createElement("div",{className:"UIvSliderBox"},u.a.createElement(j.a,{title:"Move sliders to change value(0 to 255)/voltage(0 to 3.3V) on corresponding pin"},u.a.createElement("span",{className:"UIioTitle"},"analogWrite")),u.a.createElement("div",{className:"UIvSliderBoxSub"},u.a.createElement("div",{className:"UIvSliderUnit"},u.a.createElement(B,{unitId:e,pin:14}),u.a.createElement("br",null),u.a.createElement("span",{className:"UIvSliderTitle"},"a0")),u.a.createElement("div",{className:"UIvSliderUnit"},u.a.createElement(B,{unitId:e,pin:15}),u.a.createElement("br",null),u.a.createElement("span",{className:"UIvSliderTitle"},"a1")),u.a.createElement("div",{className:"UIvSliderUnit"},u.a.createElement(B,{unitId:e,pin:10}),u.a.createElement("br",null),u.a.createElement("span",{className:"UIvSliderTitle"},"p10")))))}}]),e}(c.Component),X=a(69),q=a.n(X),J=a(101),Y=a(150),G=a(151),Z=a(82),K=a.n(Z),$=a(149),tt=a(9);function et(t,e){return isNaN(e)?t:Math.round(t*Math.pow(10,e))/Math.pow(10,e)}function at(t,e,a,n,o){var l,c;return t.touches?(l=e.scales[s].getValueForPixel(t.touches[0].clientX-e.canvas.getBoundingClientRect().left),c=e.scales[i].getValueForPixel(t.touches[0].clientY-e.canvas.getBoundingClientRect().top)):(l=e.scales[s].getValueForPixel(t.clientX-e.canvas.getBoundingClientRect().left),c=e.scales[i].getValueForPixel(t.clientY-e.canvas.getBoundingClientRect().top)),l=et(l,e.options.dragDataRound),c=et(c,e.options.dragDataRound),l=(l=l>e.scales[s].max?e.scales[s].max:l)<e.scales[s].min?e.scales[s].min:l,c=(c=c>e.scales[i].max?e.scales[i].max:c)<e.scales[i].min?e.scales[i].min:c,e.data.datasets[a].data[n].x&&e.options.dragX&&(o.x=l),e.data.datasets[a].data[n].y?(o.y=c,o):"horizontalBar"===r?l:c}function nt(t,e){return function(){if(n&&tt.b){var a=tt.b.sourceEvent,s=n._datasetIndex,c=n._index,u=t.data.datasets[s].data[c];if("radar"===r)u=function(t,e){var a,n,s;t.touches?(a=t.touches[0].clientX-e.canvas.getBoundingClientRect().left,n=t.touches[0].clientY-e.canvas.getBoundingClientRect().top):(a=t.clientX-e.canvas.getBoundingClientRect().left,n=t.clientY-e.canvas.getBoundingClientRect().top);var r=e.scales[i],o=Math.sqrt(Math.pow(a-r.xCenter,2)+Math.pow(n-r.yCenter,2)),l=r.drawingArea/(r.max-r.min);return s=(s=(s=et(s=r.options.ticks.reverse?r.max-o/l:r.min+o/l,e.options.dragDataRound))>e.scale.max?e.scale.max:s)<e.scale.min?e.scale.min:s}(a,t);else if(o){u=at(a,t,s,c,u)-l}else u=at(a,t,s,c,u);"function"===typeof e?!1!==e(a,s,c,u)&&(t.data.datasets[s].data[c]=u,t.update(0)):(t.data.datasets[s].data[c]=u,t.update(0))}}}var it={id:"dragdata",afterInit:function(t){t.options.dragData&&Object(tt.d)(t.chart.canvas).call(Object($.a)().container(t.chart.canvas).on("start",function(t,e){return function(){if(tt.b){var a=tt.b.sourceEvent,c=t.options.activeLine;n=t.getElementsAtEvent(a)[c];var u="radar"===(r=t.config.type)?"_scale":"_yScale";if(n){if(!1===t.data.datasets[n._datasetIndex].dragData||!1===n[u].options.dragData)return void(n=null);if(i=n[u].id,n._xScale&&(s=n._xScale.id),"bar"===r||"horizontalBar"===r){o=t.config.options.scales.xAxes[0].stacked;var d=n._datasetIndex,h=n._index,p=at(a,t,d,h,{}),m=t.data.datasets[d].data[h];l=p-m}"function"===typeof e&&n&&!1===e(a,n)&&(n=null)}}}}(t,t.options.onDragStart)).on("drag",nt(t,t.options.onDrag)).on("end",function(t,e){return function(){if("function"===typeof e&&n){var a=tt.b.sourceEvent,i=n._datasetIndex,s=n._index,r=t.data.datasets[i].data[s];return e(a,i,s,r)}}}(t,t.options.onDragEnd)))}};K.a.pluginService.register(it);var st=a(102),rt=a.n(st),ot=(a(278),!0),lt="rgba(255, 255, 255, 0.45)",ct=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).saveDatasets=function(){try{var t=[];a.chart.data.datasets.forEach(function(e,a){t[a]=Object(G.a)({},e),delete t[a]._meta,t[a].data=Object(Y.a)(e.data)}),localStorage.removeItem("storedDatasets"),localStorage.setItem("storedDatasets",JSON.stringify(t))}catch(e){console.log("failed save")}},a.clearDatasets=function(){var t=a.props,e=t.allUnits,n=t.colors,i=a.state.numPoints,s=e.map(function(t,e){return{id:t,label:"MO"+t,data:new Array(i).fill(90*e),pointBackgroundColor:new Array(i).fill(n[e]),pointRadius:a.setPointsRadii(i,0),radius:4,pointHitRadius:25,pointHoverRadius:8,pointHoverColor:"#FFF",borderColor:n[e],borderWidth:1,fill:!1}});return console.log("new datasets"),a.saveDatasets(),s},a.getMotiPos=function(t){return fetch("/get/R_PRESENT_POSITION/1/"+t+"/").then(function(t){return t.json()}).then(function(t){var e;return t.reply.params&&(e=t.reply.params[0]/a.props.steps),e}).catch(function(t){return console.log(t)})},a.idle=function(t){return fetch("/rotate/0/0/"+t+"/").then(function(t){return t.json()}).then(function(t){console.log(t)}).catch(function(t){return console.log(t)})},a.chartRef=u.a.createRef(),a.state={numPoints:10,activePoint:0,activePointVal:null,interval:3e3,intervalId:null,play:!1,edit:!1},a.saveDatasets.bind(Object(g.a)(a)),a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.state,a=e.numPoints,n=e.interval,i=Array.from({length:a},function(t,e){return(e*n/1e3).toFixed(1)}),s=this.createChartLines(),r=function(e){var a=t.props,n=a.allUnits,i=a.activeUnit,s=!1;return e===n.indexOf(i)&&(s=!0),s},o=function(e){return t.setActivePoint(e)},l=function(e){t.setState({activePointVal:e}),t.props.getActivePointVal(e)},c={type:"line",data:{labels:i,datasets:s,backgroundColor:"rgba(0,0,0,0)"},options:{dragData:!0,dragX:!1,dragDataRound:0,activeLine:0,onDragStart:function(t,e){var a=e._index;if(o(a),ot||!r(e._datasetIndex))return!1},onDrag:function(t,e,a,n){r(e)&&(o(a),l(n/360))},onDragEnd:function(t,e,a,n){r(e)&&(o(a),l(n/360))},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"degrees",fontColor:lt,padding:0},ticks:{stepSize:360,suggestedMax:1080,suggestedMin:-1080,padding:0,fontColor:lt,fontSize:11},gridLines:{color:"rgba(255, 255, 255, 0.1)"}}],xAxes:[{scaleLabel:{display:!0,labelString:"seconds",fontColor:lt},ticks:{fontColor:lt,fontSize:11},gridLines:{color:"rgba(255, 255, 255, 0.1)"}}]},animation:{duration:this.state.interval/2},legend:{display:!1,labels:{boxWidth:0}},responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"nearest",intersect:!0},hover:{mode:"nearest",intersect:!0},layout:{padding:{top:0,left:0,right:0,bottom:0}}}};this.chartRef=this.chartRef.current.getContext("2d"),this.chart=new K.a(this.chartRef,c),this.pause(),this.lock(),setInterval(this.saveDatasets,1e4)}},{key:"setPointsRadii",value:function(t,e){return Array.from({length:t},function(t,a){return a===e?8:4})}},{key:"createChartLines",value:function(){var t=JSON.parse(localStorage.getItem("storedDatasets"));return t||(t=this.clearDatasets()),t}},{key:"nextActivePoint",value:function(){var t=this.props,e=t.allUnits,a=t.activeUnit,n=e.indexOf(a),i=this.chart.data.datasets[n].data.length,s=this.state.activePoint+1>=i?0:this.state.activePoint+1;this.setActivePoint(s)}},{key:"setActivePoint",value:function(t){var e=this;this.setState({activePoint:t});var a=this.props.allUnits,n=this.state.numPoints;this.chart.data.datasets.forEach(function(a){a.pointRadius=e.setPointsRadii(n,t)}),this.chart.update(),a.forEach(function(a,n){var i=e.chart.data.datasets[n].data[t]/360*e.props.steps;e.moveIt(i,a)})}},{key:"moveIt",value:function(t,e){this.state.play&&fetch("/rotateTo/"+t+"/255/"+e+"/").then(function(t){return t.json()}).then(function(t){console.log(t)})}},{key:"capture",value:function(){var t=this,e=this.props.allUnits,a=this.state.activePoint;e.forEach(function(){var e=Object(J.a)(q.a.mark(function e(a,n){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.idle(a);case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),e.forEach(function(){var e=Object(J.a)(q.a.mark(function e(n,i){var s;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMotiPos(n);case 2:s=e.sent,console.log(360*s),null!==s&&!1===isNaN(s)&&(t.chart.data.datasets[i].data[a]=360*s),t.chart.update();case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}())}},{key:"edit",value:function(){this.pause(),this.setState({edit:!0}),this.setActivePoint(0),ot=!1}},{key:"lock",value:function(){this.setState({edit:!1}),ot=!0}},{key:"play",value:function(){var t=this;this.lock(),this.setState({play:!0});var e=setInterval(function(){return t.nextActivePoint()},this.state.interval);this.setState({intervalId:e})}},{key:"pause",value:function(){this.setState({play:!1});var t=this.state.intervalId;t&&clearInterval(t),this.setState({intervalId:null})}},{key:"componentDidUpdate",value:function(t,e){var a=this.props,n=a.makePlay,i=a.makeEdit,s=a.makeSave,r=a.makeClear,o=a.makeCapture,l=a.allUnits,c=a.activeUnit,u=a.inPointVal,d=a.colors,h=l.indexOf(c);if(n!==t.makePlay&&(n?this.play():this.pause()),i!==t.makeEdit&&(i?this.edit():this.lock()),s!==t.makeSave&&this.saveDatasets(),r!==t.makeClear&&(this.chart.data.datasets=this.clearDatasets(),this.chart.update(),this.saveDatasets()),o!==t.makeCapture&&this.capture(),null!=u&&u!==t.inPointVal&&i){var p=this.state.activePoint;this.chart.data.datasets[h].data[p]=360*u,this.chart.update(),this.setState({activePointVal:u})}if(c!==t.activeUnit){var m=l.indexOf(c);this.chart.options.activeLine=m}if(d!==t.colors){var v=this.state.numPoints;this.chart.data.datasets.forEach(function(t,e){var a=new Array(v).fill(d[e]);t.pointBackgroundColor=a,t.borderColor=d[e]}),this.chart.update()}}},{key:"render",value:function(){return u.a.createElement("div",{className:rt.a.graphContainer},u.a.createElement("canvas",{id:"chart",ref:this.chartRef,className:rt.a.canvas}))}}]),e}(c.Component),ut=(a(279),a(147)),dt=function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).showModal=function(){a.setState({visible:!0})},a.handleOk=function(t){console.log(t),a.setState({visible:!1})},a.handleCancel=function(t){console.log(t),a.setState({visible:!1})},a.state={visible:!1},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){var t=this,e=this.props,a=e.saveTrigger,n=e.clearTrigger;return u.a.createElement("div",null,u.a.createElement(ut.a,{title:"Timeline Settings",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},u.a.createElement(O.a,{type:"primary",size:"small",onClick:function(){return t.props.getSaveTrigger(a+1)}},"save"),"\xa0",u.a.createElement(O.a,{type:"primary",size:"small",onClick:function(){return t.props.getClearTrigger(n+1)}},"clear")))}}]),e}(u.a.Component),ht=(a(281),function(t){function e(t){var a;return Object(p.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).getColors=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.35;return t.map(function(t,i){return"hsla("+(56*i+0)%360+", 70%, 65%, "+(t===e?a:n)+")"})},a.state={activeUnit:1,capture:!1,dialPos:0,activePointVal:null,areTimelinesPlaying:!1,areTimelinesEditing:!1,saveTrigger:!1,clearTrigger:!1,captureTrigger:0,colors:a.getColors(a.props.allUnits,1)},a}return Object(y.a)(e,t),Object(m.a)(e,[{key:"onPlayClick",value:function(){this.setState({areTimelinesPlaying:!this.state.areTimelinesPlaying})}},{key:"onEditClick",value:function(){this.setState({areTimelinesEditing:!this.state.areTimelinesEditing})}},{key:"onCaptureClick",value:function(){var t=this.state.captureTrigger;this.setState({captureTrigger:t+1})}},{key:"componentDidUpdate",value:function(t,e){var a=this.props.allUnits,n=this.state.activeUnit;if(a!==t.allUnits||n!==e.activeUnit){var i=this.getColors(a,n);this.setState({colors:i})}}},{key:"render",value:function(){var t,e,a=this,n=this.state,i=n.activeUnit,s=n.colors,r=this.props,o=r.allUnits,l=r.screen,c=!1===this.state.areTimelinesPlaying?"play-circle":"pause-circle",d=!1===this.state.areTimelinesEditing?"edit":"lock",h="default";l&&(l.width<600?h="small":l.width>2e3&&(h="large"),l.width>800&&(e=u.a.createElement("div",{className:"HQconsole"},u.a.createElement(w,null))),l.height>500&&(t=u.a.createElement("div",{className:"HQtopContainer"},e,u.a.createElement("div",{className:"HQuiControls"},u.a.createElement(F,{activeUnit:i,allUnits:o,colors:s,steps:this.props.steps,screen:this.props.screen,getCapture:function(t){return a.setState({capture:t})},getDialPos:function(t){return a.setState({dialPos:t})}})))));return u.a.createElement("div",{className:"HQcontainer"},t,u.a.createElement(C.a,{type:"flex",justify:"start",align:"top"},u.a.createElement("div",{className:"HQtimelineBox"},u.a.createElement("div",{className:"HQtimelineButtonRow"},u.a.createElement(C.a,{type:"flex",justify:"space-between",align:"middle"},u.a.createElement("div",{className:"HQtimelineButtonBox"},u.a.createElement(j.a,{title:"Timeline Settings"},u.a.createElement(O.a,{type:"link",onClick:function(){a.TimelineConfig.showModal()},className:"HQtimelineButtonUnit"},u.a.createElement(x.a,{type:"setting",className:"HQbuttonText"}))),u.a.createElement(j.a,{title:"Edit/Lock"},u.a.createElement(O.a,{type:"link",onClick:this.onEditClick.bind(this),className:"HQtimelineButtonUnit"},u.a.createElement(x.a,{type:d,className:"HQbuttonText"}))),u.a.createElement(j.a,{title:"Play/Pause"},u.a.createElement(O.a,{type:"link",onClick:this.onPlayClick.bind(this),className:"HQtimelineButtonUnit"},u.a.createElement(x.a,{type:c,className:"HQbuttonText"}))),u.a.createElement(j.a,{title:"Capture Motor Positions"},u.a.createElement(O.a,{type:"link",onClick:this.onCaptureClick.bind(this),className:"HQtimelineButtonUnit"},u.a.createElement(x.a,{type:"sync",className:"HQbuttonText"}))),u.a.createElement(dt,{onRef:function(t){return a.TimelineConfig=t},saveTrigger:this.state.saveTrigger,clearTrigger:this.state.clearTrigger,getSaveTrigger:function(t){return a.setState({saveTrigger:t})},getClearTrigger:function(t){return a.setState({clearTrigger:t})}})),u.a.createElement("div",{className:"HQmoSelector"},u.a.createElement(S,{size:h,defaultUnit:i,allUnits:o,getColors:this.getColors,getActiveUnit:function(t){return a.setState({activeUnit:t})}})))),u.a.createElement(C.a,{type:"flex",justify:"start",align:"bottom"},u.a.createElement(ct,{activeUnit:i,allUnits:o,screen:this.props.screen,steps:this.props.steps,capture:this.state.capture,inPointVal:this.state.dialPos,makePlay:this.state.areTimelinesPlaying,makeEdit:this.state.areTimelinesEditing,makeClear:this.state.clearTrigger,makeSave:this.state.saveTrigger,makeCapture:this.state.captureTrigger,colors:s,getActivePointVal:function(t){return a.setState({activePointVal:t})}})))))}}]),e}(c.Component)),pt=function(t){function e(){var t;return Object(p.a)(this,e),(t=Object(v.a)(this,Object(f.a)(e).call(this))).state={page:"hq",screen:{width:0,height:0},steps:4096},t.updateDimensions=t.updateDimensions.bind(Object(g.a)(t)),t}return Object(y.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),setInterval(this.updateDimensions,200),this.updateDimensions()}},{key:"updateDimensions",value:function(){var t=this.state.screen;t.width===window.innerWidth&&t.height===window.innerHeight||this.setState({screen:{width:window.innerWidth,height:window.innerHeight}})}},{key:"render",value:function(){var t,e=this,a=this.state,n=a.page,i=a.screen;return"hq"===n?t=u.a.createElement(ht,{className:"APhq",unitId:2,allUnits:[1,2,6,11,19,25],screen:i,steps:this.state.steps}):"timelines"===n&&(t=u.a.createElement("div",{className:"APtimelineContainer"})),u.a.createElement("div",{className:"App"},u.a.createElement("div",{className:"APmenu"},u.a.createElement(k,{getChoice:function(t){return e.setState({page:t})}})),u.a.createElement("div",{className:"APoffset"}),t)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}}]),e}(c.Component);h.a.render(u.a.createElement(pt,null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.f64c1097.chunk.js.map
(this["webpackJsonpvisualizer-web"]=this["webpackJsonpvisualizer-web"]||[]).push([[0],{202:function(e,t,a){e.exports=a(452)},207:function(e,t,a){},233:function(e,t){},235:function(e,t){},244:function(e,t,a){},245:function(e,t,a){},247:function(e,t,a){},449:function(e,t,a){},450:function(e,t,a){},451:function(e,t,a){e.exports=a.p+"static/media/rsz_covid.9cedadc4.png"},452:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),i=(a(207),a(192)),s=a(193),l=(a(208),a(476)),u=a(191),d=a(477),h=a(481),m=a(479),p=a(475),f=a(478),v=a(480),b=a(12),g=a.n(b),E=a(22),y=a(27),w=a(28),C=a(43),x=a(29),O=a(30),S=a(35),k=a.n(S),D=a(52),j=a.n(D),I=function(e){return fetch({CONFIRMED:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",DEATHS:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",RECOVERED:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"}[e]).then((function(e){return e.text()}))},_=function(e){var t=e?R():N(),a="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/".concat(t,".csv");return fetch(a).then((function(e){return 200===e.status?e.text():e.status}))},N=function(){var e=new Date;e.setDate(e.getDate()-1);var t=e.getDate();t=t>9?t:"0"+t;var a=e.getMonth()+1;a=a>9?a:"0"+a;var n=e.getFullYear();return"".concat(a,"-").concat(t,"-").concat(n)},R=function(){var e=new Date;e.setDate(e.getDate());var t=e.getDate();t=t>9?t:"0"+t;var a=e.getMonth()+1;a=a>9?a:"0"+a;var n=e.getFullYear();return"".concat(a,"-").concat(t,"-").concat(n)},M=function(e,t){var a=e.filter((function(e){return e["Country/Region"]===t}));return e.length>1?F(a):W(a[0])},A=function(e){return e.shift(),e.map((function(e){return{country:e[1],count:e[e.length-1]}})).reduce((function(e,t){return{count:(parseInt(e.count)||0)+(parseInt(t.count)||0)}})).count},T=function(e){return e.forEach((function(e){delete e.Lat,delete e.Long,delete e["Province/State"],delete e["Country/Region"]})),e},W=function(e){var t=e["Country/Region"],a=T([e])[0],n=Object.keys(e),r=[];return n.forEach((function(e){var t=a[e];r.push([new Date(e).getTime(),t])})),{name:t,data:r}},F=function(e){var t=e[0]["Country/Region"],a=T(e),n=Object.keys(a[0]),r=[];return n.forEach((function(e){var t=0;a.forEach((function(a){var n=parseInt(a[e]);t+=isNaN(n)?0:parseInt(a[e])})),r.push([new Date(e).getTime(),t])})),{name:t,data:r}},V=function(e){var t=e.map((function(e){return{country:e["Country/Region"],confirmed:parseInt(e.Confirmed)||0,dead:parseInt(e.Deaths)||0,recovered:parseInt(e.Recovered)||0}})),a=U(e),n=[];a.forEach((function(e){var a=t.filter((function(t){return t.country===e}));n.push(a)}));var r=[];return n.forEach((function(e){if(e&&e.length){var t=e.reduce((function(e,t){return{country:e.country,confirmed:parseInt(e.confirmed)+parseInt(t.confirmed),dead:e.dead+t.dead,recovered:e.recovered+t.recovered}}));r.push(t)}})),r},z=function(e){var t=[],a=[],n=[];e.sort((function(e,t){return t.confirmed-e.confirmed}));var r=e.map((function(e){return e.country})).slice(0,15);e.forEach((function(e){t.push(e.confirmed),a.push(e.recovered),n.push(e.dead)}));var o=[];return o.push({name:"Confirmed",data:t.slice(0,15),color:"#F9D93E"}),o.push({name:"Recovered",data:a.slice(0,15),color:"#4caf50"}),o.push({name:"Deceased",data:n.slice(0,15),color:"#e53935"}),{series:o,countries:r}},U=function(e){var t=[];e.forEach((function(e){t.push(e["Country/Region"])}));var a=[];return t.forEach((function(e){e&&a.indexOf(e)<0&&a.push(e)})),a.sort(),a},P=a(19),G=(a(244),function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(y.a)(this,a),n=t.call(this,e),k.a.setOptions({lang:{thousandsSep:","}}),n.allowChartUpdate=!0,n.state={series:[],countries:[]},n.createChart=n.createChart.bind(Object(C.a)(n)),n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.createChart();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createChart",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.allowChartUpdate=!1,e.next=4,_(!1);case 4:return t=e.sent,e.next=7,Object(P.a)(t,{header:!0});case 7:(a=e.sent)&&(n=V(a.data),r=z(n),this.setState({series:r.series,countries:r.countries})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state,a=t.series,n=t.countries,o={chart:{type:"bar",height:"100%"},title:{text:"Top 15 Affected Countries"},xAxis:{categories:(e={series:a,countries:n}).countries},legend:{reversed:!1},plotOptions:{bar:{dataLabels:{enabled:!0},groupPadding:.2}},series:e.series,credits:{enabled:!1},exporting:{enabled:!1}};return r.a.createElement("div",{className:"card"},r.a.createElement(j.a,{containerProps:{style:{minWidth:"375px",width:"100%"}},highcharts:k.a,options:o}))}}]),a}(r.a.Component)),H=(a(245),a(474)),L=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(y.a)(this,a),(e=t.call(this)).state={count:[{name:"Total Confirmed",value:0,class:"yellow"},{name:"Total Recovered",value:0,class:"green"},{name:"Total Deceased",value:0,class:"red"}]},e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a,n,r,o,c,i,s,l,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("CONFIRMED");case 3:return t=e.sent,e.next=6,Object(P.a)(t);case 6:return a=e.sent,e.next=9,I("RECOVERED");case 9:return n=e.sent,e.next=12,Object(P.a)(n);case 12:return r=e.sent,e.next=15,I("DEATHS");case 15:return o=e.sent,e.next=18,Object(P.a)(o);case 18:c=e.sent,a&&r&&c&&(i=A(a.data),s=A(r.data),l=A(c.data),(u=this.state.count)[0].value=i,u[1].value=s,u[2].value=l,this.setState({count:u})),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.warn(e.t0);case 25:case"end":return e.stop()}}),e,this,[[0,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.count,a={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},title:{text:"<b>Total Cases</b>",align:"center",verticalAlign:"middle",y:100},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{size:350,allowPointSelect:!0,dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %",distance:-40},startAngle:-90,endAngle:90,center:["50%","75%"]}},series:[{type:"pie",name:"Count",innerSize:"50%",colorByPoint:!0,data:[{name:"Confirmed",color:"#F9D93E",y:(e={count:t}).count[0].value||1},{name:"Recovered",color:"#4caf50",y:e.count[1].value||1},{name:"Deceased",color:"#e53935",y:e.count[2].value||1}]}],credits:{enabled:!1},exporting:{enabled:!1}};return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"tiles"},r.a.createElement(H.a,{className:"tile"},r.a.createElement(j.a,{containerProps:{style:{minWidth:"375px",width:"100%"}},highcharts:k.a,options:a})),this.state.count.map((function(e,t){return r.a.createElement(H.a,{key:t,className:"tile"},r.a.createElement("div",null,e.name),r.a.createElement("div",{className:e.class},new Intl.NumberFormat("en-US").format(e.value)||"Data is updating..."))}))))}}]),a}(r.a.Component),B=(a(247),a(97)),J=B.compose,Y=B.withProps,Z=B.withHandlers,q=a(249),X=q.withScriptjs,$=q.withGoogleMap,K=q.GoogleMap,Q=q.Marker,ee=q.InfoWindow,te=a(444).MarkerClusterer,ae=J(Y({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDEDlsTIDM12nZXq9_jrUZOJroDTeL0YS0&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100vh"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),Z({onMarkerClustererClick:function(){return function(e){var t=e.getMarkers();console.log("Current clicked markers length: ".concat(t.length)),console.log(t)}}}),X,$)((function(e){return r.a.createElement(K,{defaultZoom:3,defaultCenter:{lat:25.0391667,lng:121.525}},r.a.createElement(te,{onClick:e.onMarkerClustererClick,averageCenter:!0,enableRetinaIcons:!0,gridSize:60},e.markers.map((function(e,t){return r.a.createElement(re,{key:t,marker:e})}))))})),ne=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={markers:[]},n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(!1);case 3:return t=e.sent,e.next=6,Object(P.a)(t,{header:!0});case 6:(a=e.sent)&&a.data&&(this.setState({markers:(n=a.data,n.map((function(e){return{country:e["Country/Region"],region:e["Province/State"],coordinates:{latitude:parseFloat(e.Latitude)||0,longitude:parseFloat(e.Longitude)||0},confirmed:e.Confirmed,dead:e.Deaths,recovered:e.Recovered}})))}),console.log(this.state.markers)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0);case 13:case"end":return e.stop()}var n}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"100vh"}},r.a.createElement(ae,{markers:this.state.markers}))}}]),a}(r.a.PureComponent),re=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showInfoWindow:!1},e.onClick=function(t){e.setState({showInfoWindow:!e.state.showInfoWindow}),setTimeout((function(){e.setState({showInfoWindow:!e.state.showInfoWindow})}),1e3)},e.handleMouseOver=function(t){e.setState({showInfoWindow:!0})},e.handleMouseExit=function(t){e.setState({showInfoWindow:!1})},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this.state.showInfoWindow,t=this.props.marker;return r.a.createElement(Q,{position:{lat:t.coordinates.latitude,lng:t.coordinates.longitude},onClick:this.onClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseExit},e&&r.a.createElement(ee,null,r.a.createElement("div",{className:"markerContainer"},r.a.createElement("div",{className:"yellow"},"Confirmed: ",new Intl.NumberFormat("en-US").format(t.confirmed)),r.a.createElement("div",{className:"green"},"Recovered: ",new Intl.NumberFormat("en-US").format(t.recovered)),r.a.createElement("div",{className:"red"},"Deceased: ",new Intl.NumberFormat("en-US").format(t.dead)))))}}]),a}(n.Component),oe=a(92),ce=a.n(oe),ie=a(189),se=a.n(ie),le=a(190),ue=a.n(le);a(448),a(449);se()(ce.a);var de=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(y.a)(this,a),n=t.call(this,e),ce.a.setOptions({lang:{thousandsSep:","}}),n.allowChartUpdate=!0,n.state={country:{value:"China",label:"China"},countries:[],confirmedSeries:[],deadSeries:[],recoveredSeries:[],countConfirmed:0,countRecovered:0,countDead:0,xAxis:[]},n.createChart=n.createChart.bind(Object(C.a)(n)),n.updateCountry=n.updateCountry.bind(Object(C.a)(n)),n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.createChart();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createChart",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a,n,r,o,c,i,s,l,u,d,h,m,p;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.allowChartUpdate=!1,e.next=4,I("CONFIRMED");case 4:return t=e.sent,e.next=7,Object(P.a)(t,{header:!0});case 7:return a=e.sent,e.next=10,I("DEATHS");case 10:return n=e.sent,e.next=13,Object(P.a)(n,{header:!0});case 13:return r=e.sent,e.next=16,I("RECOVERED");case 16:return o=e.sent,e.next=19,Object(P.a)(o,{header:!0});case 19:c=e.sent,a&&(i=U(a.data),s=i.map((function(e){return{label:e,value:e}})),this.setState({countries:s})),a&&r&&c&&(l=M(a.data,this.state.country.value),u=M(r.data,this.state.country.value),d=M(c.data,this.state.country.value),(h=l).name="Confirmed",h.color="#fbc02d",(m=d).name="Recovered",m.color="#00c853",(p=u).name="Deceased",p.color="#f44336",this.setState({confirmedSeries:h,deadSeries:p,recoveredSeries:m,countConfirmed:h.data[h.data.length-1][1]||0,countDead:p.data[p.data.length-1][1]||0,countRecovered:m.data[m.data.length-1][1]||0,xAxis:h.data.map((function(e){return e[0]}))})),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.warn(e.t0);case 27:case"end":return e.stop()}}),e,this,[[0,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateCountry",value:function(){var e=Object(E.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({country:t}),e.next=3,this.createChart();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state,a=t.confirmedSeries,n=t.recoveredSeries,o=t.deadSeries,c=t.xAxis,i=t.country,s=t.countries,l={title:{text:"Confirmed/Recovered/Deceased By Country"},chart:{type:"spline"},yAxis:{title:{text:"Total Count"},opposite:!1},xAxis:{categories:(e={confirmedSeries:a,recoveredSeries:n,deadSeries:o,xAxis:c}).xAxis,type:"datetime",labels:{format:"{value:%e-%b}"}},rangeSelector:{inputEnabled:!1,buttonSpacing:10,buttonTheme:{r:8,fill:"none",stroke:"none",width:60,height:18,style:{color:"#039",fontSize:"13px"},states:{hover:{fill:"#333333",stroke:"#333333"},select:{fill:"#039",style:{color:"white"}}}},buttons:[{type:"day",count:10,text:"10 Days"},{type:"day",count:20,text:"20 Days"},{type:"day",count:30,text:"30 Days"},{type:"all",count:e.confirmedSeries.length-1,text:"All"}]},series:[e.confirmedSeries,e.deadSeries,e.recoveredSeries],credits:{enabled:!1},exporting:{enabled:!1}};return r.a.createElement("div",{className:"tiles"},r.a.createElement("div",{className:"tile"},r.a.createElement("div",{className:"card-drop"},r.a.createElement("p",null,"Select a country from the dropdown below to view a time series of confirmed, recovered and deceased cases on a daily basis.",r.a.createElement("br",null)," Time series window can be updated on the chart using the zoom buttons and the sliders below the chart."),r.a.createElement(ue.a,{options:s,onChange:this.updateCountry,value:i,placeholder:"Select an option"}))),r.a.createElement(H.a,{className:"chart"},r.a.createElement(j.a,{constructorType:"stockChart",containerProps:{style:{minWidth:"375px",width:"90vw",height:"80vh"}},highcharts:ce.a,options:l})))}}]),a}(r.a.Component);a(450);function he(e){var t=e.children,a=e.value,n=e.index,o=Object(s.a)(e,["children","value","index"]);return r.a.createElement(p.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},o),a===n&&r.a.createElement(v.a,{p:3},t))}function me(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var pe=Object(l.a)((function(e){return{root:{backgroundColor:"#e0e0e0",padding:"0"}}}));function fe(){var e=pe(),t=(Object(u.a)(),r.a.useState(0)),n=Object(i.a)(t,2),o=n[0],c=n[1],s=a(451);return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"static",color:"primary"},r.a.createElement(f.a,null,r.a.createElement("img",{className:"image-container",src:s}),r.a.createElement(p.a,{variant:"h6",className:e.title},"Viru Saastrabuddhe - COVID-19 Data Visualizer"))),r.a.createElement(d.a,{position:"static",color:"default"},r.a.createElement(h.a,{centered:!0,value:o,onChange:function(e,t){c(t)},indicatorColor:"primary",textColor:"primary"},r.a.createElement(m.a,Object.assign({label:"Dashboard"},me(0))),r.a.createElement(m.a,Object.assign({label:"Heat Map"},me(1))),r.a.createElement(m.a,Object.assign({label:"Top 15"},me(2))),r.a.createElement(m.a,Object.assign({label:"Time Series"},me(3))))),r.a.createElement(he,{className:"padd",value:o,index:0},r.a.createElement(L,null)),r.a.createElement(he,{value:o,index:1},r.a.createElement(ne,null)),r.a.createElement(he,{className:"padd",value:o,index:2},r.a.createElement(G,null)),r.a.createElement(he,{className:"padd",value:o,index:3},r.a.createElement(de,null)),r.a.createElement("hr",null),r.a.createElement("div",{className:"disclaimer"},r.a.createElement("p",null,"Viru Saastrabuddhe (A COVID-19 Data Visualizer) is built using the data from"," ",r.a.createElement("a",{target:"blank",href:"https://github.com/CSSEGISandData"},"John Hopkins CSSE GitHub Repo"),". It displays interactive visuals and map to provide best available information on the current global issue of COVID-19."),r.a.createElement("p",null,"As stated in the mentioned repo's Terms of Use, the data is provided to the public strictly for educational and academic research purposes. The data comes from multiple publicly available sources, that do not always agree."),r.a.createElement("p",null,"This App is strictly for the purpose of information and education and not for commercial use."),r.a.createElement("p",null,r.a.createElement("a",{target:"blank",href:"https://phil.cdc.gov/Details.aspx?pid=23312"},"Coronavirus Image Source"," "),"- CDC/ Alissa Eckert, MS; Dan Higgins, MAM")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[202,1,2]]]);
//# sourceMappingURL=main.fd166a8e.chunk.js.map
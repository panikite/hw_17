(this.webpackJsonphw17=this.webpackJsonphw17||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),s=(n(12),n(1)),c=n(2),l=n(4),u=n(3),m=(n(13),n(14),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={timerValue:e.props.time,timerProgress:e.props.time},e.timerStart=function(){e.doIntervalChange()},e.timerReset=function(){clearInterval(e.timerInterval)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.autostart&&this.doIntervalChange()}},{key:"shouldComponentUpdate",value:function(e,t){return!!(1e3*(t.timerValue-1)%this.props.step)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval)}},{key:"doIntervalChange",value:function(){var e=this;this.timerInterval=setInterval((function(){e.state.timerValue>0?(e.props.onTick(e.state.timerValue),e.setState((function(e){return{timerValue:e.timerValue-1,timerProgress:e.timerProgress-1}}))):(e.props.onTick(0),e.setState({timerValue:0,timerProgress:0}),clearInterval(e.timerInterval))}),1e3)}},{key:"render",value:function(){var e=this.state.timerProgress/this.props.time*100;return a.a.createElement("div",{className:"timer_wrap"},a.a.createElement("h1",null,"Timer"),a.a.createElement("p",null," ","\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044c \u0447\u0430\u0441\u0443: ".concat(this.state.timerValue)," "),a.a.createElement("div",{className:"timer_bar"},a.a.createElement("div",{className:"timer_indicator",style:{width:e+"%"}})),a.a.createElement("div",{className:"btn_wrap"},a.a.createElement("button",{className:"btn btn_start",onClick:this.timerStart},"Start"),a.a.createElement("button",{className:"btn btn_stop",onClick:this.timerReset},"Stop")))}}]),n}(r.Component)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(m,{time:30,autostart:!0,step:2e3,onTick:function(e){return console.log("\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044c \u0447\u0430\u0441\u0443: "+e)}})}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5985da9b.chunk.js.map
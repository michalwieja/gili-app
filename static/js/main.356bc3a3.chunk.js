(this["webpackJsonpgili-app"]=this["webpackJsonpgili-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=(a(13),a(1)),o=a(2),s=a(4),u=a(3),m=a(5),h=function(e){var t=0;return e.items.map((function(e){return t+=e.price*e.value})),l.a.createElement("header",null,l.a.createElement("span",null,"SUMA: ",l.a.createElement("strong",null,t)," PLN"),l.a.createElement("span",null,l.a.createElement("input",{type:"text",value:e.name,onChange:e.handleNameChange})))},p=function(e){var t=e.item;return l.a.createElement("li",null,t.name," ",t.price," PLN",l.a.createElement("div",{className:"value"},l.a.createElement("button",{disabled:0===t.value,onClick:function(){return e.handleValue(t.name,"minus")}},"-"),t.value,l.a.createElement("button",{onClick:function(){return e.handleValue(t.name,"plus")}},"+")))},E=function(e){var t=e.items.map((function(t){return l.a.createElement(p,{item:t,handleValue:e.handleValue})}));return l.a.createElement("ul",null,t)},d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={items:[{id:1,name:"kawa",price:13,value:0},{id:2,name:"wejscie",price:18,value:0},{id:3,name:"ciasto",price:12,value:0}],name:""},a.handleNameChange=function(e){a.setState({name:e.target.value})},a.handleValue=function(e,t){var n=a.state.items.map((function(a){return e===a.name&&("plus"===t&&a.value++,"minus"===t&&a.value--),a}));a.setState({items:n})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"table"},l.a.createElement(h,{items:this.state.items,name:this.state.name,handleNameChange:this.handleNameChange}),l.a.createElement(E,{items:this.state.items,handleValue:this.handleValue}))}}]),t}(n.Component),v=(a(14),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={total:10},a.resetTotal=function(){a.setState({total:0})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"sum"},"Suma: ",this.state.total," ",l.a.createElement("button",{onClick:this.resetTotal},"reset")),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}),l.a.createElement(d,{total:this.state.total}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.356bc3a3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";var a=n(1),i=n(2),r=n(4),c=n(3),s=n(5),o=n(0),u=n.n(o),m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).createTasks=function(e){return u.a.createElement("li",{key:e.key},u.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:function(){return n.props.changeItem(e.checked,e.key)}}),e.edit?u.a.createElement("input",{value:e.text,name:"tempData",onChange:function(t){return n.props.updateItem({key:e.key,text:t.target.value})},onBlur:function(t){return n.props.updateItem({key:e.key,edit:!1})}}):u.a.createElement("span",{onDoubleClick:function(){return n.props.editItem(e.key)}},e.text),u.a.createElement("button",{onClick:function(){return n.props.deleteItem(e.key)}},"Delete"))},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.entries;if(e){var t=e.map(this.createTasks);return u.a.createElement("ul",{className:"theList"},t)}return u.a.createElement("ul",{className:"theList"}," Kosong ")}}]),t}(o.Component);t.a=m},13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),s=(n(18),n(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){"use strict";(function(e){var a=n(12),i=n(11),r=n(1),c=n(2),s=n(4),o=n(3),u=n(5),m=n(0),l=n.n(m),h=n(9),d=n(10),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var c=arguments.length,u=new Array(c),m=0;m<c;m++)u[m]=arguments[m];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={name:"Test",items:[],currentItem:{text:"",key:"",checked:0,edit:!1},active:0,total:0},n.handleChange=function(e){var t={text:e.target.value,key:Date.now(),checked:0,edit:!1};n.setState({currentItem:t})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(""!==t.text){var a=Object(i.a)(n.state.items).concat([t]),r=n.state.total+1;n.setState({items:a,total:r,currentItem:{text:"",key:"",checked:0,edit:!1}}),sessionStorage.setItem("myData",JSON.stringify(a))}},n.deleteItem=function(e){var t=n.state.items.filter(function(t){return t.key===e&&1===t.checked&&n.countActive(0),t.key!==e}),a=n.state.total-1;n.setState({items:t,total:a}),sessionStorage.setItem("myData",JSON.stringify(t))},n.changeItem=function(e,t){var a=1===e?0:1;n.countActive(a);var i=n.state.items.filter(function(e){return e.key===t&&(e.checked=a),e});n.setState({items:i}),sessionStorage.setItem("myData",JSON.stringify(i))},n.editItem=function(e){var t=n.state.items.filter(function(t){return t.key===e&&(t.edit=!0),t});n.setState({items:t})},n.updateItem=function(e){n.setState(function(t){return{items:t.items.map(function(t){return t.key===e.key?Object(a.a)({},t,e):t})}}),sessionStorage.setItem("myData",JSON.stringify(n.state.items))},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("myData");e&&this.setState({items:JSON.parse(e)})}},{key:"countActive",value:function(e){var t=this.state.active;0===e?t-=1:t+=1,this.setState({active:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,"Complete : ",this.state.active),l.a.createElement("div",null,"Active : ",this.state.total),l.a.createElement("form",{onSubmit:this.addItem},l.a.createElement("input",{value:this.state.currentItem.text,onChange:this.handleChange,name:"currentItem"}),l.a.createElement("input",{type:"submit",value:"Kirim"})),l.a.createElement(d.a,{entries:this.state.items,deleteItem:this.deleteItem,changeItem:this.changeItem,editItem:this.editItem,updateItem:this.updateItem}))}}]),t}(m.Component);t.a=Object(h.hot)(e)(f)}).call(this,n(20)(e))}},[[13,2,1]]]);
//# sourceMappingURL=main.f66b2ff7.chunk.js.map
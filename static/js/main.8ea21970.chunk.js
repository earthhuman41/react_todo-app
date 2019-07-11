(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(9),c=n.n(l),r=(n(18),n(19),n(11)),i=n(1),d=n(7),s=n.n(d),u=n(10),m=n(2),p=n(3),h=n(5),f=n(4),g=n(6);var v=function(e){var t=e.todo,n=e.deleteTodo,o=e.completeTodo,l=t.completed?"completed":"";return a.a.createElement("li",{className:l},a.a.createElement("div",{className:"view"},a.a.createElement("input",{onChange:function(){return o(t.id)},type:"checkbox",className:"toggle",id:"todo-".concat(t.id),checked:t.completed}),a.a.createElement("label",{htmlFor:"todo-".concat(t.id)},t.title),a.a.createElement("button",{onClick:function(){return n(t.id)},type:"button",className:"destroy"})))};var L=function(e){var t=e.todosList,n=e.deleteTodo,o=e.togleAllComplete,l=e.completeTodo,c=e.completedLength>0;return a.a.createElement("section",{className:"main"},a.a.createElement("input",{onChange:o,type:"checkbox",id:"toggle-all",className:"toggle-all",checked:c}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},t.map(function(e){return a.a.createElement(v,{key:e.id,completeTodo:l,deleteTodo:n,todo:e})})))};var E=function(e){var t=e.addTodo,n=e.inputValue,o=e.changeInput;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("input",{onKeyDown:t,onChange:o,className:"new-todo",placeholder:"What needs to be done?",value:n}))},b=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"selectedPage",value:function(e){return e===this.props.filteredField?"selected":""}},{key:"render",value:function(){var e=this.props,t=e.deleteAllCompleted,n=e.changeFilter,o=e.todosLeft,l=e.completedLength?"":"clear-completed--disable";return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},o," items left"),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{onClick:function(e){return n(e)},href:"#/",className:this.selectedPage("")},"All")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(e){return n(e)},href:"#/active",className:this.selectedPage("active")},"Active")),a.a.createElement("li",null,a.a.createElement("a",{onClick:n,href:"#/completed",className:this.selectedPage("completed")},"Completed"))),a.a.createElement("button",{onClick:t,type:"button",className:"clear-completed ".concat(l)},"Clear completed"))}}]),t}(a.a.Component),k=function(e){function t(){var e,n;Object(m.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={todosList:[],filteredField:"",inputValue:"",completedLength:0},n.changeFilter=function(){var e=Object(u.a)(s.a.mark(function e(t){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target),o=(o=t.target.href.match(/#\/([a-z]+)/))?o[1]:"",n.setState({filteredField:o});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.filterTodos=function(e){var t;switch(n.state.filteredField){case"completed":t=!0;break;case"active":t=!1;break;default:return e}return e.filter(function(e){return e.completed===t})},n.completeTodo=function(e){n.setState(function(t){var n=Object(i.a)(t.todosList),o=n.findIndex(function(t){return t.id===e}),a=!n[o].completed;return n[o].completed=a,{todosList:n,completedLength:a?t.completedLength+1:t.completedLength-1}})},n.togleAllComplete=function(){var e=n.state,t=e.completedLength,o=e.todosList,a=t!==o.length;n.setState(function(e){return o=e.todosList.map(function(e){return{id:e.id,title:e.title,completed:a}}),t=a?e.todosList.length:0,{todosList:o,completedLength:t}})},n.deleteAllCompleted=function(){n.setState(function(e){var t=Object(i.a)(e.todosList);return{todosList:t=t.filter(function(e){return!e.completed}),completedLength:0}})},n.deleteTodo=function(e){n.setState(function(t){var n=Object(i.a)(t.todosList),o=n.findIndex(function(t){return t.id===e}),a=t.completedLength-1;return n.splice(o,1),{todosList:n,completedLength:a}})},n.changeInput=function(e){n.setState({inputValue:e.target.value})},n.createTodo=function(e,t){var o=n.state.inputValue.trim();if("Enter"===e.key&&o){var a={id:t,title:o,completed:!1};n.setState(function(e){var t=Object(i.a)(e.todosList);return t.push(a),{todosList:t,inputValue:""}})}},n.addId=function(e){var t=1;return function(n){e(n,t+=1)}},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){console.log(window.location.href);var e=JSON.parse(localStorage.getItem("state"));console.log(JSON.parse(localStorage.getItem("state"))),this.setState(Object(r.a)({},e))}},{key:"componentWillUpdate",value:function(e,t,n){localStorage.setItem("state",JSON.stringify(t))}},{key:"render",value:function(){var e=this.state,t=e.todosList,n=e.inputValue,o=e.completedLength,l=e.filteredField,c=this.filterTodos(t),r=t.length-o,i=this.addId(this.createTodo);return a.a.createElement("section",{className:"todoapp"},a.a.createElement(E,{inputValue:n,changeInput:this.changeInput,addTodo:i}),t.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{completedLength:o,completeTodo:this.completeTodo,togleAllComplete:this.togleAllComplete,deleteTodo:this.deleteTodo,todosList:c}),a.a.createElement(b,{filteredField:l,todosLeft:r,completedLength:o,changeFilter:this.changeFilter,deleteAllCompleted:this.deleteAllCompleted})))}}]),t}(a.a.Component);c.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8ea21970.chunk.js.map
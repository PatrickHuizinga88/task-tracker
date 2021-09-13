(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),i=n(23),u=n(7),j=n.n(u),l=n(11),d=n(10),b=n(8),h=n(2),p=n(1),f=function(e){var t=e.onClick,n=e.text;return Object(p.jsx)("button",{onClick:t,className:"btn",children:n})};f.defaultProps={text:"Add"};var x=f,O=function(e){var t=e.onAdd,n=e.showAdd,r=Object(h.e)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{children:"Task Tracker"}),"/"===r.pathname&&Object(p.jsx)(x,{onClick:t,text:n?"Add":"Close"})]})},m=n(16),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(p.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(p.jsxs)("h3",{children:[t.text," ",Object(p.jsx)(m.b,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]}),Object(p.jsx)("p",{children:t.day})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)(k,{task:e,onDelete:n,onToggle:r},e.id)}))})},g=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1],l=Object(r.useState)(!1),b=Object(d.a)(l,2),h=b[0],f=b[1];return Object(p.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),s(""),j(""),f(!1)):alert("Please fill in the task.")},children:[Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Task"}),Object(p.jsx)("input",{type:"text",placeholder:"Enter your task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Day and time"}),Object(p.jsx)("input",{type:"text",placeholder:"Enter the day and time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control form-control-check",children:[Object(p.jsx)("label",{children:"Set reminder"}),Object(p.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(p.jsx)("input",{type:"submit",className:"btn btn-block",value:"Save task"})]})},y=function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("p",{children:"Copyright \xa9 2021"}),Object(p.jsx)(b.b,{to:"/about",children:"About"})]})},w=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Version 1.3"}),Object(p.jsx)("p",{children:"Last update: Sep 14th 2021"}),Object(p.jsxs)("p",{children:["Made by ",Object(p.jsx)("a",{href:"https://patrickhuizinga88.github.io/",children:"Patrick Huizinga"})]}),Object(p.jsxs)(b.b,{to:"/task-tracker",className:"btn",style:{margin:"20px 0 0 0"},children:[Object(p.jsx)(m.a,{style:{verticalAlign:"middle",marginRight:"5px"}}),"Go back"]})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,f(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(O,{onAdd:function(){return c(!n)},showAdd:!n}),Object(p.jsx)(h.a,{path:"/task-tracker",exact:!0,render:function(e){return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(g,{onAdd:k}),u.length>0?Object(p.jsx)(v,{tasks:u,onDelete:C,onToggle:N}):"No tasks to show.",Object(p.jsx)("p",{className:"task-tip",children:"Double click a task to enable/disable the reminder."})]})}}),Object(p.jsx)(h.a,{path:"/about",component:w}),Object(p.jsx)(y,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.3dce8e5c.chunk.js.map
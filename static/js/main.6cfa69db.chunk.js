(this.webpackJsonppatients=this.webpackJsonppatients||[]).push([[0],{22:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),s=n(15),r=n.n(s),o=(n(22),n(7)),a=n(2),j=n(9),u=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"People"})})},h=function(){var t=Object(i.useState)([]),e=Object(j.a)(t,2),n=e[0],s=e[1],r="https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients";return Object(i.useEffect)((function(){fetch(r).then((function(t){return t.json()})).then((function(t){return s(t)})).catch((function(t){return console.log(t)}))}),[r]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"List of Users"}),n.map((function(t){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[t.id,", ",t.firstName,", ",t.lastName,",",t.email,", ",t.address,", ",t.phone,", ",t.since," "]},t.id),Object(c.jsx)("p",{children:Object(c.jsx)(o.b,{to:"/".concat(t.id,"/visits"),children:"Look at visits"})})]})})),Object(c.jsx)(u,{})]})},d=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"HomePage"}),Object(c.jsx)(h,{})]})},f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Page not found"})})},b=function(){var t=Object(a.f)(),e=Object(i.useState)({}),n=Object(j.a)(e,2),s=n[0],r=n[1],o="https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/".concat(t.Physicianid);return Object(i.useEffect)((function(){fetch(o).then((function(t){return t.json()})).then((function(t){return r(t)})).catch((function(t){return console.log(t)}))}),[o]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Physician Page"}),Object(c.jsxs)("p",{children:[s.id,", ",s.firstName,", ",s.lastName,", ",s.phone]})]},s.id)},l=function(){var t=Object(a.f)(),e=Object(i.useState)([]),n=Object(j.a)(e,2),s=n[0],r=n[1],u="https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients/".concat(t.Patientid,"/visits");return Object(i.useEffect)((function(){fetch(u).then((function(t){return t.json()})).then((function(t){return r(t)})).catch((function(t){return console.log(t)}))}),[u]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Visits Page"}),s.map((function(t){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[t.id,", ",t.patientId,", ",t.physicianId,",",t.time,", ",t.location,", ",t.symptoms,", ",t.diagnosis," "]}),Object(c.jsx)("p",{children:Object(c.jsx)(o.b,{to:"/physicians/".concat(t.physicianId),children:"Look at phycisian"})})]},t.id)}))]})},p=(n(31),Object(a.g)((function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,path:"/patients",component:d}),Object(c.jsx)(a.a,{exact:!0,path:"/not-found",component:f}),Object(c.jsx)(a.a,{exact:!0,path:"/:Patientid/visits",component:l}),Object(c.jsx)(a.a,{exact:!0,path:"/physicians/:Physicianid",component:b})]})})}))),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(c.jsx)(o.a,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),O()}},[[32,1,2]]]);
//# sourceMappingURL=main.6cfa69db.chunk.js.map
(this.webpackJsonppatients=this.webpackJsonppatients||[]).push([[0],{11:function(t,e,c){t.exports={Visits:"Visits_Visits__3qPZM",Patient:"Visits_Patient__3hfOj",Containers:"Visits_Containers__Of6Xy",Container:"Visits_Container__1TVzk"}},14:function(t,e,c){t.exports={Loading:"Loading_Loading__1PTXA",Loader:"Loading_Loader__XJmFL",spin:"Loading_spin__2hZwy"}},17:function(t,e,c){t.exports={Button:"Button_Button__UUCg_"}},19:function(t,e,c){t.exports={Table:"Table_Table__EGIDv"}},21:function(t,e,c){t.exports={Header:"Home_Header__3_kxF"}},22:function(t,e,c){t.exports={Card:"Physcian_Card__nzPma"}},28:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),i=c(18),a=c.n(i),r=(c(28),c(8)),o=c(2),j=c(7),u=c(14),b=c.n(u),d=function(){return Object(n.jsxs)("div",{className:b.a.Loading,children:[Object(n.jsx)("div",{className:b.a.Loader}),Object(n.jsx)("p",{children:"Just Wait a Short Amount"})]})},h=c(19),l=c.n(h);function O(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],c=t.split("T")[0].split("-");switch(c[2]){case"01":return"".concat(Number(c[2]),"st of ").concat(e[Number(c[1])-1],", ").concat(c[0]);case"02":return"".concat(Number(c[2]),"nd of ").concat(e[Number(c[1])-1],", ").concat(c[0]);case"03":return"".concat(Number(c[2]),"rd of ").concat(e[Number(c[1])-1],", ").concat(c[0]);case"21":return"".concat(Number(c[2]),"st of ").concat(e[Number(c[1])-1],", ").concat(c[0]);case"22":return"".concat(Number(c[2]),"nd of ").concat(e[Number(c[1])-1],", ").concat(c[0]);case"23":return"".concat(Number(c[2]),"rd of ").concat(e[Number(c[1])-1],", ").concat(c[0]);case"31":return"".concat(Number(c[2]),"st of ").concat(e[Number(c[1])-1],", ").concat(c[0]);default:return"".concat(Number(c[2]),"th of ").concat(e[Number(c[1])-1],", ").concat(c[0])}}var x=function(){var t=Object(s.useState)([]),e=Object(j.a)(t,2),c=e[0],i=e[1],a=Object(s.useState)(!0),o=Object(j.a)(a,2),u=o[0],b=o[1],h="https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients";return Object(s.useEffect)((function(){fetch(h).then((function(t){return t.json()})).then((function(t){return i(t)})).then((function(t){return b(!1)})).catch((function(t){return console.log(t)}))}),[h]),!0===u?Object(n.jsx)(d,{}):Object(n.jsxs)("div",{className:l.a.Table,children:[Object(n.jsx)("h2",{children:"List of Patients"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{title:"First Name",children:"First Name"}),Object(n.jsx)("th",{title:"Last Name",children:"Last Name"}),Object(n.jsx)("th",{title:"E-Mail",children:"E-Mail"}),Object(n.jsx)("th",{title:"Address",children:"Address"}),Object(n.jsx)("th",{title:"Number",children:"Number"}),Object(n.jsx)("th",{title:"Joined",children:"Joined"}),Object(n.jsx)("th",{title:"Visits",children:"Visits"})]})}),Object(n.jsx)("tbody",{children:c.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.firstName}),Object(n.jsx)("td",{children:t.lastName}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(n.jsx)("td",{children:t.address}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"tel:".concat(t.phone),children:t.phone})}),Object(n.jsx)("td",{children:O(t.since)}),Object(n.jsx)("td",{children:Object(n.jsx)(r.b,{to:"/patients/".concat(t.id,"/").concat(t.firstName,"/").concat(t.lastName),children:"View Visits"})})]},t.id)}))})]})]})},m=c(21),f=c.n(m),p=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:f.a.Header,children:[Object(n.jsx)("h2",{children:"Welcome to "}),Object(n.jsx)("h3",{children:"Because behind every scan is a person. "})]}),Object(n.jsx)(x,{})]})},N=c(17),_=c.n(N),g=function(t){var e=Object(o.g)();return!0===t.goHome?Object(n.jsx)(r.b,{to:"/patients",children:Object(n.jsx)("button",{className:_.a.Button,children:"Go to HomePage"})}):Object(n.jsx)("button",{className:_.a.Button,onClick:function(){return e.goBack()},children:"Go to Previous Page"})},v=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"404"}),Object(n.jsx)("p",{children:"Page does not exist! Unless you were looking for this error page, In which case you find it!"}),Object(n.jsx)(g,{goHome:!0})]})},y=c.p+"static/media/doctor.aa382748.png",P=c(22),C=c.n(P),L=function(){var t=Object(o.h)(),e=Object(s.useState)({}),c=Object(j.a)(e,2),i=c[0],a=c[1],r=Object(s.useState)(!0),u=Object(j.a)(r,2),b=u[0],h=u[1],l=Object(s.useState)(!0),O=Object(j.a)(l,2),x=O[0],m=O[1],f="https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/".concat(t.physicianID);return Object(s.useEffect)((function(){fetch(f).then((function(t){return t.json()})).then((function(t){return a(t)})).then((function(t){return h(!1)})).catch((function(t){return m(!1)}))}),[f]),!1===x?Object(n.jsx)(o.a,{to:"/patients/not-found"}):!0===b?Object(n.jsx)(d,{}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["Hey I'm DR. ",i.firstName," ",i.lastName]}),Object(n.jsxs)("div",{className:C.a.Card,children:[Object(n.jsx)("img",{src:y,alt:"Physician"}),Object(n.jsxs)("h3",{children:["You can call me at ",Object(n.jsx)("a",{href:"tel:".concat(i.phone),children:i.phone})]})]},i.id),Object(n.jsx)(g,{goHome:!0}),Object(n.jsx)(g,{goHome:!1})]})},H=c(11),S=c.n(H),V=function(){var t=Object(o.h)(),e=Object(s.useState)([]),c=Object(j.a)(e,2),i=c[0],a=c[1],u=Object(s.useState)(!0),b=Object(j.a)(u,2),h=b[0],l=b[1],x=Object(s.useState)(!0),m=Object(j.a)(x,2),f=m[0],p=m[1],N="https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients/".concat(t.patientID,"/visits");return Object(s.useEffect)((function(){fetch(N).then((function(t){return t.json()})).then((function(t){return a(t)})).then((function(t){return l(!1)})).catch((function(t){return p(!1)}))}),[N]),!1===f?Object(n.jsx)(o.a,{to:"/patients/not-found"}):!0===h?Object(n.jsx)(d,{}):Object(n.jsxs)("div",{className:S.a.Visits,children:[Object(n.jsxs)("h2",{className:S.a.Patient,children:[t.firstName," ",t.lastName,"'s visits"]}),Object(n.jsx)("div",{className:S.a.Containers,children:i.map((function(t){return Object(n.jsxs)("div",{className:S.a.Container,children:[Object(n.jsxs)("h3",{children:[O(t.time)," at ",t.location]}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Symptoms:"})," ",t.symptoms]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Diagnosis:"})," ",t.diagnosis," "]}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"/patients/physicians/".concat(t.physicianId),children:"Click Here to see the Physician"})})]})]},t.id)}))}),Object(n.jsx)(g,{goHome:!1})]})},I=Object(o.i)((function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/patients",component:p}),Object(n.jsx)(o.b,{exact:!0,path:"/patients/not-found",component:v}),Object(n.jsx)(o.b,{exact:!0,path:"/patients/:patientID/:firstName/:lastName",component:V}),Object(n.jsx)(o.b,{exact:!0,path:"/patients/physicians/:physicianID",component:L})]})})})),B=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),i(t),a(t)}))};a.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.95290bb9.chunk.js.map
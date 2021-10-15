(this["webpackJsonpgoit-react-hw-06-phonebook666"]=this["webpackJsonpgoit-react-hw-06-phonebook666"]||[]).push([[0],{13:function(e,t,n){e.exports={div:"filter-styles_div__eV7Ek",input:"filter-styles_input__7xbHg",label:"filter-styles_label__QfRe6"}},26:function(e,t,n){},27:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),i=(n(26),n(27),n(18)),l=n(19),o=n.n(l),u=n(6),b=n.n(u),d="addContact",j="deleteContact",m="filter",f=n(4),p=Object(f.b)(d),O=Object(f.b)(j),_=Object(f.b)(m),h=n(3),x=n(1);var v=Object(h.b)(null,(function(e){return{toAddContact:function(t){return e(p(t))}}}))((function(e){var t=e.toAddContact,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),d=u[0],j=u[1];return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:r,number:d,id:o.a.generate()};t(n),s(""),j("")},className:b.a.form,children:[Object(x.jsx)("label",{className:b.a.label,children:"Name"}),Object(x.jsx)("input",{className:b.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:function(e){s(e.target.value)}}),Object(x.jsx)("label",{className:b.a.label,children:"Number"}),Object(x.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:function(e){j(e.target.value)}}),Object(x.jsx)("button",{type:"submit",className:b.a.btn,children:"Add to contacts"})]})})),y=n(13),g=n.n(y),C=Object(h.b)((function(e){return{filterValue:e.filter}}),(function(e){return{toFilter:function(t){return e(_(t.target.value))}}}))((function(e){var t=e.filterValue,n=e.toFilter;return Object(x.jsxs)("div",{className:g.a.div,children:[Object(x.jsx)("label",{className:g.a.label,children:"Find contacts by name"}),Object(x.jsx)("input",{onChange:n,value:t,className:g.a.input})]})})),N=n(7),L=n.n(N);var k,A=function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))},F=Object(h.b)((function(e){var t=e.contacts,n=e.filter;return{contacts:A(t,n)}}),(function(e){return{onDeleteContact:function(t){return e(O(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(x.jsx)("ul",{className:L.a.list,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(x.jsxs)("li",{className:L.a.item,children:[Object(x.jsxs)("p",{className:L.a.p,children:[t," ",Object(x.jsx)("span",{className:L.a.span,children:a})]}),Object(x.jsx)("button",{type:"button",onClick:function(){n(c)},className:L.a.btn,children:"Delete"})]},c)}))})})),w=n(12),S=n(14),z=Object(f.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(k={},Object(S.a)(k,d,(function(e,t){return void 0!==e.find((function(e){return e.name===t.payload.name}))?(alert("".concat(t.payload.name," is already in contacts.")),e):[].concat(Object(w.a)(e),[t.payload])})),Object(S.a)(k,j,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),k)),D=Object(f.c)("",Object(S.a)({},m,(function(e,t){return t.payload}))),E=n(2),q=n(5),B=n(20),G={key:"contacts",storage:n.n(B).a,blacklist:["filter"]},H=Object(w.a)(Object(f.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),J=Object(E.b)({contacts:z,filter:D}),R=Object(q.g)(G,J),T=Object(f.a)({reducer:R,middleware:H}),V=Object(q.h)(T);var Z=Object(h.b)()((function(){return console.log(T.getState()),Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(C,{}),Object(x.jsx)(F,{})]})})),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},K=n(21);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(h.a,{store:T,children:Object(x.jsx)(K.a,{loading:null,persistor:V,children:Object(x.jsx)(Z,{})})})}),document.getElementById("root")),I()},6:function(e,t,n){e.exports={label:"form-styles_label__12KYp",input:"form-styles_input__1a25E",form:"form-styles_form__38Uoh",btn:"form-styles_btn__21mGH"}},7:function(e,t,n){e.exports={list:"contactsList-styles_list__2hefj",item:"contactsList-styles_item__3kxLG",span:"contactsList-styles_span__29gG_",btn:"contactsList-styles_btn__1hdcT",p:"contactsList-styles_p__2FqRQ"}}},[[43,1,2]]]);
//# sourceMappingURL=main.5c1e990d.chunk.js.map
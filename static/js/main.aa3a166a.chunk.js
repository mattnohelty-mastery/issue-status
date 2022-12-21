(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{54:function(n,e,t){},55:function(n,e,t){},82:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,s,d,u,l,b,p,j,x,g,h,f,m,O,v,w,k,y,S,I,C,D,z,F,E,A,M,N,_,L,Z,J,T,U,Y,P,$,B,H=t(2),W=t.n(H),K=t(38),R=t.n(K),q=(t(54),t(6)),G=t(3),Q=(t(55),t(4)),V={message:"All Systems Operational",backgroundColour:"#3da751"},X={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},nn={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},en=function(n,e){return 100*n.filter((function(n){return n.labels.find((function(n){return n.name===e}))})).length/n.length},tn=t(17),rn=t.n(tn),an=t(0),on=Q.a.div(r||(r=Object(G.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(n){return n.backgroundColour?n.backgroundColour:"#b1b1b1"})),cn=Q.a.h2(a||(a=Object(G.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),sn=Q.a.button(o||(o=Object(G.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),dn=Q.a.code(i||(i=Object(G.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),un=function(n){var e=n.loading,t=n.error,r=n.components,a=n.refetch,o=function(n){var e=Object(H.useState)(),t=Object(q.a)(e,2),r=t[0],a=t[1];return Object(H.useEffect)((function(){var e=!1;en(n,"operational")<70&&(a(X),e=!0),en(n,"major outage")>0&&(a(nn),e=!0),e||a(V)}),[n]),[r]}(r),i=Object(q.a)(o,1)[0],c=function(n,e){var t=Object(H.useState)(rn()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),r=Object(q.a)(t,2),a=r[0],o=r[1];return Object(H.useEffect)((function(){var e=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?n((function(){o(rn()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):o(rn()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(e)}}),[n]),Object(H.useEffect)((function(){o(rn()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[e]),[a]}(a,e),s=Object(q.a)(c,1)[0];return Object(an.jsxs)(an.Fragment,{children:[t.hasError&&Object(an.jsxs)(dn,{children:[Object(an.jsx)("div",{children:"An error occured"}),Object(an.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(t.errors,null,3)]}),Object(an.jsxs)(on,{backgroundColour:null===i||void 0===i?void 0:i.backgroundColour,children:[Object(an.jsx)(cn,{children:null===i||void 0===i?void 0:i.message}),Object(an.jsx)(sn,{onClick:a,children:e?"reloading":s})]})]})},ln=function(n){var e=Object(H.useState)([]),t=Object(q.a)(e,2),r=t[0],a=t[1],o=Object(H.useState)(),i=Object(q.a)(o,2),c=i[0],s=i[1],d=Object(H.useState)(!0),u=Object(q.a)(d,2),l=u[0],b=u[1];return Object(H.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(n)))<new Date-24e4?bn(b,s,a,n):(a(JSON.parse(localStorage.getItem("issueStatus".concat(n)))),b(!1),s())}),[n]),[l,c,r||[],function(){return bn(b,s,a,n)}]},bn=function(n,e,t,r){n(!0),fetch("https://api.github.com/repos/".concat("mattnohelty-mastery/issue-status","/issues?state=all&labels=issue status,").concat(r)).then((function(n){return n.json()})).then((function(a){e(),localStorage.setItem("issueStatusLastFetch".concat(r),new Date),localStorage.setItem("issueStatus".concat(r),JSON.stringify(a)),t(a),n(!1)})).catch((function(a){e(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(r),new Date),t(JSON.parse(localStorage.getItem("issueStatus".concat(r)))),n(!1)}))},pn=Q.a.header(c||(c=Object(G.a)(["\n  margin-bottom: 16px;\n  background-color: black;\n  height: 30px;\n  padding: 10px;\n  display: flex;\n"]))),jn=Q.a.img(s||(s=Object(G.a)(["\n  align-self: flex-start;\n"]))),xn=Q.a.h1(d||(d=Object(G.a)(['\n  width: 100%;\n  color: white;\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  font-size: 28px;\n  align-self: center;\n  margin-left: -118px;\n  text-align: center;\n  letter-spacing: 1px;\n  line-height: 1.2em;\n']))),gn=Q.a.span(u||(u=Object(G.a)(["\n  color: #b25d42;\n"]))),hn=function(){return Object(an.jsxs)(pn,{children:[Object(an.jsx)(jn,{src:"https://mastery.net/wp-content/themes/mastery/assets/images/logo.svg",alt:"MasterMind Status"}),Object(an.jsxs)(xn,{children:["MasterMind ",Object(an.jsx)(gn,{children:"Status"})]})]})},fn=Q.a.div(l||(l=Object(G.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),mn={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},On=Q.a.div(b||(b=Object(G.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(n){return n.colour}),(function(n){return n.backgroundColour})),vn=function(n){var e=function(n){var e=Object(H.useState)(),t=Object(q.a)(e,2),r=t[0],a=t[1];return Object(H.useEffect)((function(){a(Object.values(mn).find((function(e){return n.find((function(n){return n.name===e.name.toLowerCase()}))})))}),[n]),r||a(mn.unknown),[r]}(n.labels),t=Object(q.a)(e,1)[0];return Object(an.jsx)(On,{colour:null===t||void 0===t?void 0:t.colour,backgroundColour:null===t||void 0===t?void 0:t.backgroundColour,children:null===t||void 0===t?void 0:t.name})},wn=Q.a.div(p||(p=Object(G.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),kn=function(n){var e=n.component;return Object(an.jsxs)(wn,{children:[e.title," ",Object(an.jsx)(vn,{labels:e.labels})]})},yn=function(){var n=Object(H.useState)(),e=Object(q.a)(n,2),t=e[0],r=e[1];return Object(H.useEffect)((function(){r(!0)}),[]),[t]},Sn=function(n,e){return n.title<e.title?-1:n.title>e.title?1:0},In=function(n){var e=n.loading,t=n.components,r=yn(),a=Object(q.a)(r,1)[0];return!e||a?(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.sort(Sn).map((function(n){return Object(an.jsx)(kn,{component:n},n.id)})):Object(an.jsx)("p",{children:"No Components found."}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(fn,{}),Object(an.jsx)(fn,{}),Object(an.jsx)(fn,{})]})},Cn=t(47),Dn=t(14),zn=t(11),Fn=t.n(zn),En=t(86),An=t(28),Mn=(t(35),Q.a.span(j||(j=Object(G.a)(['\n  position: relative;\n  display: inline-block;\n  margin-top: 10px;\n  width: 50px;\n  margin: 10px 1px;\n  height: 5px;\n  background: #b25d42;\n  &::before {\n    content: "";\n    position: absolute;\n    z-index: 2;\n    right: -12px;\n    top: -12px;\n    height: 20px;\n    width: 20px;\n    background: white;\n    border: 5px solid #b25d42;\n    border-radius: 50%;\n  }\n']))),Q.a.h2(x||(x=Object(G.a)(["\n  font-size: 18px;\n"]))),Q.a.div(g||(g=Object(G.a)(["\n  display: flex;\n"]))),Q.a.div(h||(h=Object(G.a)([""]))),Q.a.div(f||(f=Object(G.a)(["\n  cursor: pointer;\n"])))),Nn=function(n){var e=n.children,t=n.open,r=void 0!==t&&t,a=Object(H.useState)(r),o=Object(q.a)(a,2),i=o[0],c=o[1];return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(Mn,{onClick:function(){return c(!i)},title:i?"close":"open",children:i?"-":"+"}),i&&e]})},_n=Q.a.div(m||(m=Object(G.a)(['\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  &::after {\n    content: "";\n    position: absolute;\n    width: 6px;\n    background-color: #eee;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    margin-left: -3px;\n  }\n']))),Ln=Q.a.div(O||(O=Object(G.a)(['\n  font-size: 13px;\n  left: 0;\n  padding: 0px 15px;\n  position: relative;\n  background-color: inherit;\n  /*width: 50%;*/\n  &::after {\n    content: "";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    /*right: -17px;*/\n    background-color: white;\n    border: 4px solid #b25d42;\n    top: 3px;\n    border-radius: 50%;\n    z-index: 1;\n  }\n  &::before {\n    content: " ";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    /*right: 30px;*/\n    border: medium solid white;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent white;\n  }\n']))),Zn=Q.a.div(v||(v=Object(G.a)(["\n  padding: 0px 30px;\n  background-color: white;\n  position: relative;\n  border-radius: 6px;\n"]))),Jn=Q.a.p(w||(w=Object(G.a)(["\n  color: #777;\n"]))),Tn=function(n){var e=n.item;return Object(an.jsx)(Ln,{children:Object(an.jsxs)(Zn,{children:[Object(an.jsx)("p",{children:e.event}),Object(an.jsx)(Jn,{children:new Date(e.created_at).toUTCString()})]})})},Un=function(n){var e=n.timelineItems;return Object(an.jsx)(Nn,{children:Object(an.jsx)(_n,{children:(null===e||void 0===e?void 0:e.length)>0?e.map((function(n,e){return Object(an.jsx)(Tn,{item:n},e)})):Object(an.jsx)(an.Fragment,{})})})},Yn=function(n){var e=n.incident,t=Object(H.useState)(),r=Object(q.a)(t,2),a=r[0],o=r[1];return Object(H.useEffect)((function(){var n=function(){var n=Object(Dn.a)(Fn.a.mark((function n(e){var t;return Fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,En.a.get(e);case 3:t=n.sent,o(t.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();null!==e&&void 0!==e&&e.timeline_url&&n(e.timeline_url)}),[e]),Object(an.jsx)(Un,{timelineItems:a})},Pn=Q.a.div(k||(k=Object(G.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),$n=Q.a.div(y||(y=Object(G.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),Bn=Q.a.div(S||(S=Object(G.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),Hn=Q.a.div(I||(I=Object(G.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),Wn=Q.a.div(C||(C=Object(G.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(n){return n.active?"#6e6b6b":"#2f5888"}),(function(n){return n.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),Kn=Q.a.div(D||(D=Object(G.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),Rn=function(n){var e=n.incident;return Object(an.jsxs)(Pn,{active:e.closed_at,children:[Object(an.jsxs)($n,{children:[Object(an.jsx)(Kn,{children:rn()(e.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(an.jsx)(Wn,{active:e.closed_at,children:e.closed_at?"Closed":"Active"})]}),Object(an.jsx)(Bn,{children:e.title}),Object(an.jsxs)(Hn,{children:[Object(an.jsx)(Cn.a,{children:e.body}),Object(an.jsx)(Yn,{incident:e})]})]})},qn=Q.a.div(z||(z=Object(G.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),Gn=Q.a.div(F||(F=Object(G.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),Qn=Q.a.div(E||(E=Object(G.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),Vn=Q.a.div(A||(A=Object(G.a)(["\n  margin: 0 8px;\n"]))),Xn=function(n){var e=n.loading,t=n.incidents,r=yn(),a=Object(q.a)(r,1)[0],o=(new Date).getTime()-216e5,i=t.filter((function(n){return"open"===n.state.toLowerCase()||new Date(n.updated_at).getTime()>o}));return Object(an.jsxs)(Gn,{children:[Object(an.jsx)(Qn,{children:"Incidents"}),!e||a?(null===i||void 0===i?void 0:i.length)>0?null===i||void 0===i?void 0:i.map((function(n){return Object(an.jsx)(Rn,{incident:n},n.id)})):Object(an.jsx)(Vn,{children:"No Incidents found."}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(qn,{}),Object(an.jsx)(qn,{}),Object(an.jsx)(qn,{})]})]})},ne=Q.a.div(M||(M=Object(G.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),ee=Q.a.a(N||(N=Object(G.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(n){return n.visible?"block":"none"})),te=function(){return Object(an.jsxs)(ne,{children:[Object(an.jsx)("div",{}),Object(an.jsx)(ee,{visible:!1,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},re=t(22),ae=t.n(re),oe=Q.a.div(_||(_=Object(G.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.67);\n  padding: 4px;\n"]))),ie=Q.a.label(L||(L=Object(G.a)(["\n  margin-right: 8px;\n  display: inline;\n"]))),ce=Q.a.button(Z||(Z=Object(G.a)(["\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid ",";\n  border-radius: 3px;\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.primary?"green":"white"}),(function(n){return n.primary?"white":"gray"}),(function(n){return n.primary?"green":"gray"})),se=Q.a.input(J||(J=Object(G.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  background: ",";\n  border: ",";\n  border-radius: 3px;\n"])),(function(n){return n.inputColor||"white"}),(function(n){return n.isError?"1px solid red":"1px solid lightgray"})),de=function(){var n=new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),e=Object(H.useState)(""),t=Object(q.a)(e,2),r=t[0],a=t[1],o=Object(H.useState)(!1),i=Object(q.a)(o,2),c=i[0],s=i[1],d=function(){var e=Object(Dn.a)(Fn.a.mark((function e(t){var a,o,i,c;return Fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.test(r)?(s(!1),1):(ae.a.error("Please enter a valid email address"),s(!0),0)){e.next=2;break}return e.abrupt("return");case 2:return a=t?"subscribe":"unsubscribe",e.prev=3,i=null!==(o="http://localhost:5555")?o:"http://localhost",e.next=7,En.a.put("".concat(i,"/").concat(a,"?email=").concat(r));case 7:c=e.sent,ae.a.success("Subscription Updated"),console.log(c),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),ae.a.error("error :("),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(n){return e.apply(this,arguments)}}();return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)("div",{children:Object(an.jsx)(re.Toaster,{})}),Object(an.jsxs)(oe,{children:[Object(an.jsx)(ie,{htmlFor:"emailInput",children:"Subscribe to notifications:"}),Object(an.jsx)(se,{placeholder:"email@example.com",type:"email",id:"emailInput",value:r,onChange:function(n){return a(n.target.value)},isError:c,onKeyDown:function(n){"Enter"===n.key&&d(!0)}}),Object(an.jsx)(ce,{primary:!0,onClick:function(){return d(!0)},children:"Subscribe"})]})]})},ue=Q.a.div(T||(T=Object(G.a)(["\n  display: flex;\n  position: relative;\n"]))),le=Q.a.div(U||(U=Object(G.a)(["\n  height: 30px;\n  background-color: rgb(35, 38, 39);\n  flex: 1;\n  padding: 0;\n  margin-right: 2px;\n  background: #ececec;\n  position: relative;\n"]))),be=Q.a.div(Y||(Y=Object(G.a)(["\n  background: ;\n  background-color: ",";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n"])),(function(n){return n.hasIncident?"red":"rgb(20, 184, 118)"})),pe=function(n){var e=n.segment,t=n.index,r=function(n){var t="<div>".concat(new Date(e.date).toDateString(),"</div><br />"),r="";return r=e.incidents.length?n.map((function(n){return"<div>".concat(n.title,"</div>")})).join("<br />"):"<div>No Incident</div>","".concat(t).concat(r)}(e.incidents);return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(le,{id:"tooltip-anchor-data-html-".concat(t),"data-tooltip-html":r,children:Object(an.jsx)(be,{hasIncident:e.incidents.length})}),Object(an.jsx)(An.a,{anchorId:"tooltip-anchor-data-html-".concat(t)})]})};function je(n){var e=n.segments;return Object(an.jsx)(ue,{children:e.map((function(n,e){return Object(an.jsx)(pe,{segment:n,index:e},e)}))})}var xe,ge,he=Q.a.div(P||(P=Object(G.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),fe=Q.a.div($||($=Object(G.a)(["\n  font-size: 24px;\n  margin-bottom: 16px;\n  display: flex;\n  align-self: center;\n  color: rgba(0, 0, 0, 0.75);\n"]))),me=Q.a.div(B||(B=Object(G.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Oe=function(n){return new Date(n).setHours(0,0,0,0)},ve=Oe(new Date),we=new Date(ve).getDate(),ke=function(n){var e=n.loading,t=n.incidents,r=yn(),a=Object(q.a)(r,1)[0],o=function(n){for(var e=[],t=0,r=function(r){var a=Oe((new Date).setDate(we-r)),o=n.filter((function(n){return Oe(n.created_at)===a}));o.length&&t++,e.push({date:a,incidents:o})},a=0;a<60;a++)r(a);return[Math.round((60-t)/60*100),e.reverse()]}(t),i=Object(q.a)(o,2),c=i[0],s=i[1];return Object(an.jsxs)(he,{children:[Object(an.jsxs)(fe,{children:[c,"% Uptime"]}),!e||a?Object(an.jsx)(je,{segments:s}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(fn,{}),Object(an.jsx)(fn,{}),Object(an.jsx)(fn,{})]}),Object(an.jsxs)(me,{children:[Object(an.jsxs)("div",{children:[60," days ago"]}),Object(an.jsx)("div",{children:"today"})]})]})},ye=Q.a.div(xe||(xe=Object(G.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),Se=Q.a.div(ge||(ge=Object(G.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),Ie=function(){var n=ln("component"),e=Object(q.a)(n,4),t=e[0],r=e[1],a=e[2],o=e[3],i=ln("incident"),c=Object(q.a)(i,4),s=c[0],d=c[1],u=c[2],l=c[3];return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(hn,{}),Object(an.jsxs)(ye,{children:[Object(an.jsxs)(Se,{children:[Object(an.jsx)(un,{loading:t||s,error:{hasError:r||d,errors:{componentsError:r,incidentsError:d}},components:a,refetch:function(){o(),l()}}),Object(an.jsx)(In,{loading:t,components:a})]}),Object(an.jsx)(ke,{loading:s,incidents:u}),Object(an.jsx)(Xn,{loading:s,incidents:u}),Object(an.jsx)(te,{}),Object(an.jsx)(de,{})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));R.a.render(Object(an.jsx)(W.a.StrictMode,{children:Object(an.jsx)(Ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.aa3a166a.chunk.js.map
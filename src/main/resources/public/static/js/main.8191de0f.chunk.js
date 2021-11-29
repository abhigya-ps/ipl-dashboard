(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(10),r=c.n(s),i=(c(16),c(17),c(4)),j=c(2),l=c(6),m=c.n(l),h=c(7),o=c(5),d=(c(19),c(0)),u=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:n,children:a})}),Object(d.jsx)("h2",{className:"match-date",children:c.date}),Object(d.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(d.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(d.jsxs)("div",{className:"additional-detail",children:[Object(d.jsx)("h3",{children:"First Innings"}),Object(d.jsx)("p",{children:c.team1}),Object(d.jsx)("h3",{children:"Second Innings"}),Object(d.jsx)("p",{children:c.team2}),Object(d.jsx)("h3",{children:"Man of the Match"}),Object(d.jsx)("p",{children:c.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},b=(c(21),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:n,children:a})}),Object(d.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),O=c(11),x=(c(22),function(){var e=Object(a.useState)({matches:[]}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.g)().teamName;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8090/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"Latest Matches"}),Object(d.jsx)(u,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(b,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(d.jsx)("h1",{children:" "})}),f=(c(23),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=(c(24),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.g)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8090/team/".concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(d.jsx)(u,{teamName:r,match:e},e.id)}))]})]})}),p=(c(25),c(26),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:"/teams/".concat(t),children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8090/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{className:"app-name",children:"IPL Cricket Dashboard"})}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(d.jsx)(p,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/teams/:teamName",element:Object(d.jsx)(x,{})}),Object(d.jsx)(j.a,{path:"/teams/:teamName/matches/:year",element:Object(d.jsx)(v,{})}),Object(d.jsx)(j.a,{path:"/",element:Object(d.jsx)(N,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),M()}],[[27,1,2]]]);
//# sourceMappingURL=main.8191de0f.chunk.js.map
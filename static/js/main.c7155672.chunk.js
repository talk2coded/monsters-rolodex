(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),c=(n(20),n(10)),l=n(11),i=n(14),m=n(13),u=(n(21),n(22),n(23),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/{props.monster.id}?set=set5cdn[&size=180x180"}),r.a.createElement("h2",null," ",e.monster.name,"  "),r.a.createElement("p",null,e.monster.email))}),h=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(u,{key:e.id,monster:e})})))},d=(n(24),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=n(28),p=n(29),E=n(30),v=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchfield:t.target.value})},e.state={monsters:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(d,{placeholder:"search monster",handleChange:this.handleChange}),r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{md:4,sm:4,xs:12},r.a.createElement(h,{monsters:a})),r.a.createElement(E.a,{md:4,sm:4,xs:12},r.a.createElement(h,{monsters:a})),r.a.createElement(E.a,{md:4,sm:4,xs:12},r.a.createElement(h,{monsters:a})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.c7155672.chunk.js.map
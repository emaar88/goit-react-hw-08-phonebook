(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[4],{80:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},90:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a(3),l=a(30),o=a(31),i=a(34),c=a(32),s=a(0),u=a.n(s),p=a(8),b=a(9),m=a(33),h={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},f=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(r.a)({},n,l))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(Object(n.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return u.a.createElement("div",null,u.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),u.a.createElement("form",{onSubmit:this.handleSubmit,style:h.form},u.a.createElement("label",{style:h.label},"\u0418\u043c\u044f",u.a.createElement("input",{type:"text",name:"name",value:t,required:!0,onChange:this.handleChange})),u.a.createElement("label",{style:h.label},"E-mail",u.a.createElement("input",{type:"email",name:"email",value:a,required:!0,onChange:this.handleChange})),u.a.createElement("label",{style:h.label},"\u041f\u0430\u0440\u043e\u043b\u044c",u.a.createElement("input",{type:"password",name:"password",value:n,required:!0,onChange:this.handleChange})),u.a.createElement(m.a,{type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),a}(s.Component);t.default=Object(p.b)(null,{onRegister:b.a.register})(f)}}]);
//# sourceMappingURL=registerview.56c8e9d9.chunk.js.map
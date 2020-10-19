(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),i=n(1),o=n(2),s=n(4),u=n(3),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Subject render"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("a",{href:"/a",onClick:function(e){e.preventDefault(),this.props.onClick()}.bind(this)},this.props.title)),this.props.sub)}}]),n}(r.a.Component),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.data!==this.props.data}},{key:"render",value:function(){console.log("nav render");for(var e=this.props.data,t=[],n=0;n<e.length;)t.push(r.a.createElement("li",{key:e[n].id},r.a.createElement("a",{id:e[n].id,onClick:function(e){e.preventDefault(),this.props.onClick(e.target.id)}.bind(this),href:"/content/"+e[n].id},e[n].title))),n+=1;return r.a.createElement("nav",null,r.a.createElement("ul",null,t))}}]),n}(r.a.Component),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Control render"),r.a.createElement("div",{className:"control"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/create",onClick:function(e){e.preventDefault(),this.props.onChangeMode("create")}.bind(this)},"create")),r.a.createElement("li",null,r.a.createElement("a",{href:"/update",onClick:function(e){e.preventDefault(),this.props.onChangeMode("update")}.bind(this)},"update")),r.a.createElement("li",null,r.a.createElement("input",{type:"button",value:"delete",onClick:function(e){e.preventDefault(),this.props.onChangeMode("delete")}.bind(this)}))))}}]),n}(r.a.Component)),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("article render"),r.a.createElement("article",null,r.a.createElement("h2",null,this.props.title),this.props.sub)}}]),n}(r.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return console.log("article render"),r.a.createElement("article",null,r.a.createElement("h2",null,"Create"),r.a.createElement("form",{action:"/create_process",method:"post",onSubmit:function(t){t.preventDefault(),e.props.onSubmit(t.target.title.value,t.target.desc.value)}},r.a.createElement("p",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"title"})),r.a.createElement("p",null,r.a.createElement("textarea",{name:"desc",placeholder:"description"})),r.a.createElement("p",null,r.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),n}(r.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={id:a.props.data.id,title:a.props.data.title,desc:a.props.data.desc},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return console.log("updateContent"),r.a.createElement("article",null,r.a.createElement("h2",null,"Update"),r.a.createElement("form",{action:"/update_process",method:"post",onSubmit:function(t){t.preventDefault(),e.props.onSubmit(e.state.id,e.state.title,e.state.desc)}},r.a.createElement("p",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:function(t){e.setState({title:t.target.value})}})),r.a.createElement("p",null,r.a.createElement("textarea",{name:"desc",placeholder:"description",value:this.state.desc,onChange:function(t){e.setState({desc:t.target.value})}})),r.a.createElement("p",null,r.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),n}(r.a.Component),v=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={mode:"welcome",selected_content_id:2,subject:{title:"WEB",sub:"Would Wide Web!"},welcome:{title:"welcome",desc:"Hello, React!!"},article:{title:"HTML",sub:"HTML is HyperText Markup Language"},contents:[{id:1,title:"HTML",desc:"HTML is HyperText Markup Language"},{id:2,title:"CSS",desc:"CSS is for design"},{id:3,title:"Javascript",desc:"Javascript is for interactive"}]},a}return Object(o.a)(n,[{key:"getReadContent",value:function(){for(var e=this.state.contents,t=0;t<e.length;t++)if(this.state.selected_content_id===e[t].id)return e[t]}},{key:"getContent",value:function(){var e,t,n=this,a=null;if("welcome"===this.state.mode)e=this.state.subject.title,t=this.state.subject.sub,a=r.a.createElement(h,{title:e,sub:t});else if("read"===this.state.mode){var l=this.getReadContent();a=r.a.createElement(h,{title:l.title,sub:l.desc})}else if("create"===this.state.mode)a=r.a.createElement(f,{onSubmit:function(e,t){var a={id:n.state.contents.length+1,title:e,desc:t},r=n.state.contents.concat(a);n.setState({contents:r,mode:"read",selected_content_id:n.state.contents.length+1})}});else if("update"===this.state.mode){var c=this.getReadContent();a=r.a.createElement(b,{data:c,onSubmit:function(e,t,a){for(var r=Array.from(n.state.contents),l=0;l<r.length;l++)if(r[l].id===e){r[l]={id:e,title:t,desc:a};break}console.log(r),n.setState({contents:r,mode:"read"})}})}return a}},{key:"render",value:function(){var e=this;console.log("App render");return r.a.createElement("div",{className:"App"},r.a.createElement(d,{mode:this.state.mode,onClick:function(t){e.setState({mode:"welcome"})},title:this.state.subject.title,sub:this.state.subject.sub}),r.a.createElement(p,{data:this.state.contents,onClick:function(t){e.setState({mode:"read",selected_content_id:Number(t)})}}),r.a.createElement(m,{onChangeMode:function(e){if("delete"===e){if(window.confirm(this.state.contents[this.state.selected_content_id-1].title+"\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){for(var t=Array.from(this.state.contents),n=0;n<t.length;n++)if(t[n].id===this.state.selected_content_id){t.splice(n,1);break}this.setState({mode:"welcome",contents:t})}}else this.setState({mode:e})}.bind(this)}),this.getContent())}}]),n}(r.a.Component));c.a.render(r.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.afa1dd3c.chunk.js.map
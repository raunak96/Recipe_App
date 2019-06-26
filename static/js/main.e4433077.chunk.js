(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),l=(n(18),n(9)),o=n(7),s=n(1),u=n(2),m=n(4),p=n(3),h=n(6),d=n(5),b=(n(19),n(20),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h2",null,i.a.createElement("a",null,"Recipe App")),i.a.createElement("nav",null,i.a.createElement("li",null,i.a.createElement("a",{onClick:this.props.onNewRecipe},"New Recipe")),i.a.createElement("li",null,i.a.createElement("a",null,"Home")),i.a.createElement("li",null,i.a.createElement("a",null,"About")),i.a.createElement("li",null,i.a.createElement("a",null,"Contact Us"))))}}]),t}(a.Component));b.defaultProps={onNewRecipe:function(){}};var g=b,f=(n(21),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.img,a=e.instructions,r=e.id,c=e.onDelete,l=this.props.ingredients.map(function(e,t){return i.a.createElement("li",{key:t},e)});return i.a.createElement("div",{className:"recipe-card"},i.a.createElement("div",{className:"recipe-card-img"},i.a.createElement("img",{src:n,alt:t})),i.a.createElement("div",{className:"recipe-card-content"},i.a.createElement("h3",{className:"recipe-title"},t),i.a.createElement("h4",null,"Ingredients:"),i.a.createElement("ul",null,l),i.a.createElement("h4",null,"Instructions:"),i.a.createElement("p",null,a),i.a.createElement("button",{className:"btn",type:"button",onClick:function(){return c(r)}},"DELETE")))}}]),t}(a.Component)),v=(n(22),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onDelete,t=this.props.recipes.map(function(t){return i.a.createElement(f,Object.assign({key:t.id},t,{onDelete:e}))});return i.a.createElement("div",{className:"recipe-list"},t)}}]),t}(a.Component)),E=n(8),j=(n(23),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={title:"",instructions:"",ingredients:[""],img:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleNewIngredient=n.handleNewIngredient.bind(Object(h.a)(n)),n.handleChangeIng=n.handleChangeIng.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleNewIngredient",value:function(e){var t=this.state.ingredients;this.setState({ingredients:[].concat(Object(l.a)(t),[""])})}},{key:"handleChangeIng",value:function(e){var t=Number(e.target.name.split("-")[1]),n=this.state.ingredients.map(function(n,a){return a===t?e.target.value:n});this.setState({ingredients:n})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(Object(o.a)({},this.state)),this.setState({title:"",instructions:"",ingredients:[""],img:""})}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.instructions,r=t.img,c=t.ingredients,l=this.props.onClose,o=c.map(function(t,n){return i.a.createElement("div",{className:"recipe-form-line",key:"ingredient-".concat(n)},i.a.createElement("label",null,n+1,".",i.a.createElement("input",{type:"text",name:"ingredient-".concat(n),value:t,size:45,autoComplete:"off",placeholder:"Ingredient".concat(n+1),onChange:e.handleChangeIng})))});return i.a.createElement("div",{className:"recipe-form-container"},i.a.createElement("form",{className:"recipe-form",onSubmit:this.handleSubmit},i.a.createElement("button",{type:"button",className:"close-button",onClick:l},"X"),i.a.createElement("div",{className:"recipe-form-line"},i.a.createElement("label",{htmlFor:"recipe-title-input"},"Title"),i.a.createElement("input",{id:"recipe-title-input",key:"title",name:"title",type:"text",value:n,size:42,autoComplete:"off",onChange:this.handleChange})),i.a.createElement("label",{htmlFor:"recipe-instructions-input",style:{marginTop:"5px"}},"Instructions"),i.a.createElement("textarea",{key:"instructions",id:"recipe-instructions-input",type:"Instructions",name:"instructions",rows:"8",cols:"50",autoComplete:"off",value:a,onChange:this.handleChange}),o,i.a.createElement("button",{type:"button",onClick:this.handleNewIngredient,className:"buttons"},"+"),i.a.createElement("div",{className:"recipe-form-line"},i.a.createElement("label",{htmlFor:"recipe-img-input"},"Image Url"),i.a.createElement("input",{id:"recipe-img-input",type:"text",placeholder:"",name:"img",value:r,size:36,autoComplete:"off",onChange:this.handleChange})),i.a.createElement("button",{type:"submit",className:"buttons",style:{alignSelf:"flex-end",marginRight:0}},"SAVE")))}}]),t}(a.Component));j.defaultProps={onClose:function(){},onSave:function(){}};var O=j,C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={recipes:[{id:0,title:"Spaghetti",instructions:"Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",ingredients:["pasta","8 cups water","1 box spaghetti"],img:"spaghetti.jpg"},{id:1,title:"Milkshake",instructions:"Combine ice cream and milk.  Blend until creamy",ingredients:["2 Scoops Ice cream","8 ounces milk"],img:"milkshake.jpg"},{id:2,title:"Avocado Toast",instructions:"Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",ingredients:["2 slices of bread","1 avocado","1 tablespoon olive oil","1 pinch of salt","pepper"],img:"avocado_toast.jpg"}],nextId:3,showForm:!1},n.handleSave=n.handleSave.bind(Object(h.a)(n)),n.onDelete=n.onDelete.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleSave",value:function(e){var t=this;this.setState(function(n,a){var i=Object(o.a)({},e,{id:t.state.nextId});return{nextId:n.nextId+1,recipes:[].concat(Object(l.a)(t.state.recipes),[i]),showForm:!1}})}},{key:"onDelete",value:function(e){var t=this.state.recipes.filter(function(t){return t.id!==e});this.setState({recipes:t})}},{key:"render",value:function(){var e=this,t=this.state.showForm;return i.a.createElement("div",{className:"App"},i.a.createElement(g,{onNewRecipe:function(){return e.setState({showForm:!0})}}),t?i.a.createElement(O,{onSave:this.handleSave,onClose:function(){return e.setState({showForm:!1})}}):null,i.a.createElement(v,{onDelete:this.onDelete,recipes:this.state.recipes}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.e4433077.chunk.js.map
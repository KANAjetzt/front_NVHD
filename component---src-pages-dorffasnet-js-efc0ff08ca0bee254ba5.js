(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(155),r=n.n(a),i=n(0),o=n.n(i),c=n(154),s=n(152),u=n(178),l="2117898393";t.default=function(e){var t=e.data,n=r()(e,["data"]);return console.log(t),o.a.createElement(c.a,{currentPath:n.location.pathname},o.a.createElement(s.a,{title:"Figuren",keywords:["Figuren","Hardmännle","Heulicher"]}),o.a.createElement("section",null,o.a.createElement("h2",null,"die ",o.a.createElement("br",null),o.a.createElement("span",null,"Dorffasnet")),o.a.createElement(u.a,{data:t})))}},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(156),u=n.n(s),l=n(151);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Narrenverein Heulicher | Heudorf im Hegau",description:"Der Narrenverein Heulicher",author:"NV Heulicher"}}}}},157:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},173:function(e,t,n){},174:function(e,t,n){e.exports={figur:"figur-module--figur--1gSfv",img:"figur-module--img--1xRLt",heading:"figur-module--heading--lgNBC",text:"figur-module--text--3RiPh"}},178:function(e,t,n){"use strict";n(157);var a=n(7),r=n.n(a),i=(n(151),n(0)),o=n.n(i),c=n(173),s=n.n(c),u=n(174),l=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:l.a.figur},o.a.createElement("img",{className:l.a.img,src:this.props.img}),o.a.createElement("h3",{className:l.a.heading}," ",this.props.heading," "),o.a.createElement("p",{className:l.a.text},this.props.text))},t}(i.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return console.log(this.props.data),o.a.createElement("div",{className:s.a.figuren},this.props.data.page.edges.map(function(e){return o.a.createElement(d,{key:e.node.id,FigurKey:e.node.id,img:"https://cdn.sanity.io/"+e.node.bild.asset.path,heading:e.node.name,text:e.node.description})}))},t}(o.a.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-dorffasnet-js-efc0ff08ca0bee254ba5.js.map
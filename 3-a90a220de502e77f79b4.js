(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(e,t,s){"use strict";var a=s(8);t.__esModule=!0,t.default=void 0;var r,i=a(s(7)),o=a(s(35)),n=a(s(74)),l=a(s(76)),c=a(s(0)),d=a(s(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),s=t.fluid?t.fluid.src:t.fixed.src;return f[s]||!1},h=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',s=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+s+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+"<img "+n+l+s+r+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var s=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:s,srcSet:a,src:r},u,{onLoad:o,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var s;s=e.call(this,t)||this;var a=!0,r=!1,i=t.fadeIn,n=p(t);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var l=!(s.props.critical&&!s.props.fadeIn);return s.state={isVisible:a,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:n},s.imageRef=c.default.createRef(),s.handleImageLoaded=s.handleImageLoaded.bind((0,o.default)((0,o.default)(s))),s.handleRef=s.handleRef.bind((0,o.default)((0,o.default)(s))),s}(0,i.default)(t,e);var s=t.prototype;return s.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},s.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},s.handleImageLoaded=function(){var e,t,s;e=this.props,t=u(e),s=t.fluid?t.fluid.src:t.fixed.src,f[s]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},s.render=function(){var e=u(this.props),t=e.title,s=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,n=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,S="boolean"==typeof y?"lightgray":y,I=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n),L={title:t,alt:this.state.isVisible?"":s,style:I,className:p};if(h){var E=h;return c.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),S&&c.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),E.base64&&c.default.createElement(b,(0,l.default)({src:E.base64},L)),E.tracedSVG&&c.default.createElement(b,(0,l.default)({src:E.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,E.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),c.default.createElement(b,{alt:s,title:t,sizes:E.sizes,src:E.src,srcSet:E.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:s,title:t},E))}}))}if(g){var $=g,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:$.width,height:$.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify($.srcSet)},S&&c.default.createElement(w,{title:t,style:{backgroundColor:S,width:$.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:$.height}}),$.base64&&c.default.createElement(b,(0,l.default)({src:$.base64},L)),$.tracedSVG&&c.default.createElement(b,(0,l.default)({src:$.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,$.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:$.srcSetWebp,sizes:$.sizes}),c.default.createElement(b,{alt:s,title:t,width:$.width,height:$.height,sizes:$.sizes,src:$.src,srcSet:$.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:s,title:t,width:$.width,height:$.height},$))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S},200:function(e,t,s){e.exports=s(259)},259:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pkgName="gatsby-source-sanity";var a=s(260);t.getFluidGatsbyImage=a.getFluidGatsbyImage,t.getFixedGatsbyImage=a.getFixedGatsbyImage},260:function(e,t,s){"use strict";var a=this&&this.__rest||function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(s[a[r]]=e[a[r]])}return s};Object.defineProperty(t,"__esModule",{value:!0});const r=s(261);var i;t.DEFAULT_FIXED_WIDTH=400,t.DEFAULT_FLUID_MAX_WIDTH=800,function(e){e.NO_CHANGE="",e.WEBP="webp",e.JPG="jpg",e.PNG="png"}(i||(i={}));const o=/^image-[A-Za-z0-9]+-\d+x\d+-[a-z]+$/,n=[1,1.5,2,3],l=[.25,.5,1,1.5,2,3];function c(e,t){if(!e)return!1;const s=e,a=e,r=e;let i="";if(!(!(i="string"==typeof e?e:s.asset?s.asset._ref||s.asset._id:a._ref||r._id)||o.test(i)))return!1;const[,n,l,c]=i.split("-"),[d,u]=l.split("x").map(e=>parseInt(e,10)),f=d/u,p=r.metadata||{dimensions:{width:d,height:u,aspectRatio:f}};return{url:r.url||function(e,t){const{projectId:s,dataset:a}=e,{assetId:r,extension:i,metadata:o}=t,{width:n,height:l}=o.dimensions;return`https://cdn.sanity.io/images/${s}/${a}/${r}-${n}x${l}.${i}`}(t,{url:"",assetId:n,extension:c,metadata:p}),assetId:n,extension:c,metadata:p}}function d(e,t){const s=r(e,!0),i=s.pathname.replace(/.*\//,"").replace(/.*\./,""),o=s.query.fm===t,n=i===t;if(o&&n){const e=s.query,{fm:t}=e,r=a(e,["fm"]);return s.set("query",r),s.toString()}if(o||n)return e;const l=Object.assign({},s.query,{fm:t});return s.set("query",l),s.toString()}function u(e){const t=e.includes("fm=webp"),s=/[a-f0-9]+-\d+x\d+\.webp/.test(e);return t||s}t.getFixedGatsbyImage=function(e,s,a){const r=c(e,a);if(!r)return null;const i=s.width||t.DEFAULT_FIXED_WIDTH,o=s.height,{url:l,metadata:f,extension:p}=r,{dimensions:h,lqip:g}=f;let m=h.aspectRatio;s.height&&(m=i/s.height);let b=null;s.toFormat?b=s.toFormat:u(r.url)&&(b="jpg");const y=n.map(e=>Math.round(i*e)).filter(e=>e<h.width).reduce((e,t,s)=>{const a=`${n[s]}x`,i=Math.round(t/m),o=`${l}?w=${t}&h=${i}&fit=crop`,c=d(o,"webp"),u=d(o,b||r.extension);return e.webp.push(`${c} ${a}`),e.base.push(`${u} ${a}`),e},{webp:[],base:[]}),w=Math.round(o||i/m),v=`${l}?w=${i}&h=${w}&fit=crop`;return{base64:g||null,aspectRatio:m,width:Math.round(i),height:w,src:d(v,b||p),srcWebp:d(v,"webp"),srcSet:y.base.join(",\n")||null,srcSetWebp:y.webp.join(",\n")||null}},t.getFluidGatsbyImage=function(e,s,a){const r=c(e,a);if(!r)return null;const{url:i,metadata:o,extension:n}=r,{dimensions:f,lqip:p}=o,h=s.maxWidth||t.DEFAULT_FLUID_MAX_WIDTH;let g=f.aspectRatio;s.maxHeight&&(g=h/s.maxHeight);const m=s.maxHeight||Math.round(h/f.aspectRatio);let b=null;s.toFormat?b=s.toFormat:u(r.url)&&(b="jpg");const y=s.sizes||`(max-width: ${h}px) 100vw, ${h}px`,w=l.map(e=>Math.round(h*e)).filter(e=>e<f.width).concat(f.width).filter(e=>e<=f.width).reduce((e,t)=>{const s=Math.round(t/g),a=`${i}?w=${t}&h=${s}&fit=crop`,o=d(a,"webp"),n=d(a,b||r.extension);return e.webp.push(`${o} ${t}w`),e.base.push(`${n} ${t}w`),e},{webp:[],base:[]}),v=`${i}?w=${h}&h=${m}&fit=crop`,S=d(v,b||n),I=d(v,"webp");return{base64:p||null,aspectRatio:g,src:S,srcWebp:I,srcSet:w.base.join(",\n")||null,srcSetWebp:w.webp.join(",\n")||null,sizes:y}}},261:function(e,t,s){"use strict";(function(t){var a=s(262),r=s(263),i=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function c(e){var s,a=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},r={},i=typeof(e=e||a);if("blob:"===e.protocol)r=new u(unescape(e.pathname),{});else if("string"===i)for(s in r=new u(e,{}),l)delete r[s];else if("object"===i){for(s in e)s in l||(r[s]=e[s]);void 0===r.slashes&&(r.slashes=o.test(e.href))}return r}function d(e){var t=i.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function u(e,t,s){if(!(this instanceof u))return new u(e,t,s);var i,o,l,f,p,h,g=n.slice(),m=typeof t,b=this,y=0;for("object"!==m&&"string"!==m&&(s=t,t=null),s&&"function"!=typeof s&&(s=r.parse),t=c(t),i=!(o=d(e||"")).protocol&&!o.slashes,b.slashes=o.slashes||i&&t.slashes,b.protocol=o.protocol||t.protocol||"",e=o.rest,o.slashes||(g[3]=[/(.*)/,"pathname"]);y<g.length;y++)"function"!=typeof(f=g[y])?(l=f[0],h=f[1],l!=l?b[h]=e:"string"==typeof l?~(p=e.indexOf(l))&&("number"==typeof f[2]?(b[h]=e.slice(0,p),e=e.slice(p+f[2])):(b[h]=e.slice(p),e=e.slice(0,p))):(p=l.exec(e))&&(b[h]=p[1],e=e.slice(0,p.index)),b[h]=b[h]||i&&f[3]&&t[h]||"",f[4]&&(b[h]=b[h].toLowerCase())):e=f(e);s&&(b.query=s(b.query)),i&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=function(e,t){for(var s=(t||"/").split("/").slice(0,-1).concat(e.split("/")),a=s.length,r=s[a-1],i=!1,o=0;a--;)"."===s[a]?s.splice(a,1):".."===s[a]?(s.splice(a,1),o++):o&&(0===a&&(i=!0),s.splice(a,1),o--);return i&&s.unshift(""),"."!==r&&".."!==r||s.push(""),s.join("/")}(b.pathname,t.pathname)),a(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(f=b.auth.split(":"),b.username=f[0]||"",b.password=f[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}u.prototype={set:function(e,t,s){var i=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(s||r.parse)(t)),i[e]=t;break;case"port":i[e]=t,a(t,i.protocol)?t&&(i.host=i.hostname+":"+t):(i.host=i.hostname,i[e]="");break;case"hostname":i[e]=t,i.port&&(t+=":"+i.port),i.host=t;break;case"host":i[e]=t,/:\d+$/.test(t)?(t=t.split(":"),i.port=t.pop(),i.hostname=t.join(":")):(i.hostname=t,i.port="");break;case"protocol":i.protocol=t.toLowerCase(),i.slashes=!s;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";i[e]=t.charAt(0)!==o?o+t:t}else i[e]=t;break;default:i[e]=t}for(var l=0;l<n.length;l++){var c=n[l];c[4]&&(i[c[1]]=i[c[1]].toLowerCase())}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,s=this,a=s.protocol;a&&":"!==a.charAt(a.length-1)&&(a+=":");var i=a+(s.slashes?"//":"");return s.username&&(i+=s.username,s.password&&(i+=":"+s.password),i+="@"),i+=s.host+s.pathname,(t="object"==typeof s.query?e(s.query):s.query)&&(i+="?"!==t.charAt(0)?"?"+t:t),s.hash&&(i+=s.hash),i}},u.extractProtocol=d,u.location=c,u.qs=r,e.exports=u}).call(this,s(75))},262:function(e,t,s){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},263:function(e,t,s){"use strict";var a,r=Object.prototype.hasOwnProperty;function i(e){return decodeURIComponent(e.replace(/\+/g," "))}t.stringify=function(e,t){t=t||"";var s,i,o=[];for(i in"string"!=typeof t&&(t="?"),e)r.call(e,i)&&((s=e[i])||null!==s&&s!==a&&!isNaN(s)||(s=""),o.push(encodeURIComponent(i)+"="+encodeURIComponent(s)));return o.length?t+o.join("&"):""},t.parse=function(e){for(var t,s=/([^=?&]+)=?([^&]*)/g,a={};t=s.exec(e);){var r=i(t[1]),o=i(t[2]);r in a||(a[r]=o)}return a}}}]);
//# sourceMappingURL=3-a90a220de502e77f79b4.js.map
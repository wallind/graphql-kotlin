(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{222:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(235)),i={id:"graphql-server",title:"GraphQLServer",original_id:"graphql-server"},l={unversionedId:"server/graphql-server",id:"version-4.x.x/server/graphql-server",isDocsHomePage:!1,title:"GraphQLServer",description:"graphql-kotlin-server provides common code and basic interfaces to setup a GraphQL server in any framework.",source:"@site/versioned_docs/version-4.x.x/server/graphql-server.md",slug:"/server/graphql-server",permalink:"/graphql-kotlin/docs/server/graphql-server",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/graphql-server.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613851227,sidebar:"version-4.x.x/docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/federated/type-resolution"},next:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/server/graphql-request-parser"}},c=[{value:"<code>GraphQLServer</code>",id:"graphqlserver",children:[]}],s={toc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," provides common code and basic interfaces to setup a GraphQL server in any framework."),Object(o.b)("p",null,"The official reference implementations are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/spring-server/spring-overview"},"graphql-kotlin-spring-server"))),Object(o.b)("p",null,"We reccomend using one of the implementations as the common code has very little logic but you can still use the common\npackage to create implementation for other libraries (Ktor, Spark, etc)."),Object(o.b)("p",null,"There are demos of how to use these server libraries in the ",Object(o.b)("inlineCode",{parentName:"p"},"/examples")," folder of the repo."),Object(o.b)("h2",{id:"graphqlserver"},Object(o.b)("inlineCode",{parentName:"h2"},"GraphQLServer")),Object(o.b)("p",null,"The top level object in the common package is ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLServer<T>"),".\nThis class is open for extensions and requires that you specify the type of the http requests you will be handling."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",{parentName:"li",href:"https://spring.io/reactive"},"Spring Reactive")," we would define a ",Object(o.b)("inlineCode",{parentName:"li"},"GraphQLServer<ServerRequest>")),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",{parentName:"li",href:"https://ktor.io/"},"Ktor")," we would define a ",Object(o.b)("inlineCode",{parentName:"li"},"GraphQLServer<ApplicationRequest>"))),Object(o.b)("p",null,"In its simplest form, a GraphQL server has the following responsibilties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parse the GraphQL request info from the HTTP request"),Object(o.b)("li",{parentName:"ul"},"Create a ",Object(o.b)("inlineCode",{parentName:"li"},"GraphQLContext")," object from the HTTP request to be used during execution"),Object(o.b)("li",{parentName:"ul"},"Send the request and the context to the GraphQL schema to execute and get a response (may contain ",Object(o.b)("inlineCode",{parentName:"li"},"data")," or ",Object(o.b)("inlineCode",{parentName:"li"},"errors"),")"),Object(o.b)("li",{parentName:"ul"},"Send the reponse back to the client over HTTP")),Object(o.b)("p",null,"Most of the logic in a GraphQL server that is specific to your application is already in the schema, so if we have interfaces for all these\ncommon functions, we can abstract away the library specific features."),Object(o.b)("p",null,"The one method we don't have an interface for is sending back the response to the client. Once you get the response back from ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLServer"),",\nwe leave the rest up to your application to call it's server specific methods to encode and send the response."))}p.isMDXComponent=!0},235:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),h=n,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return t?a.a.createElement(d,l(l({ref:r},s),{},{components:t})):a.a.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);
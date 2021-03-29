(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(180)),i={id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},s={unversionedId:"schema-generator/writing-schemas/nested-arguments",id:"schema-generator/writing-schemas/nested-arguments",isDocsHomePage:!1,title:"Nested Resolvers and Shared Arguments",description:"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:",source:"@site/docs/schema-generator/writing-schemas/nested-arguments.md",slug:"/schema-generator/writing-schemas/nested-arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nested-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/nested-arguments.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1617040185,sidebar:"docs",previous:{title:"Annotations",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/annotations"},next:{title:"Generator Configuration",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"}},c=[{value:"DataFetchingEnvironment",id:"datafetchingenvironment",children:[]},{value:"GraphQL Context",id:"graphql-context",children:[]},{value:"Excluding Arguments from the Schema",id:"excluding-arguments-from-the-schema",children:[]},{value:"Spring Integration",id:"spring-integration",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  findUser(id: String!): User\n}\n\ntype User {\n  photos(numberOfPhotos: Int!): [Photo!]!\n}\n\ntype Photo {\n  url: String!\n}\n\n")),Object(o.b)("p",null,"In Kotlin code, when we are resolving  ",Object(o.b)("inlineCode",{parentName:"p"},"photos"),", if we want access to the parent field ",Object(o.b)("inlineCode",{parentName:"p"},"findUser")," and its arguments there\nare a couple ways we can access it:"),Object(o.b)("h2",{id:"datafetchingenvironment"},"DataFetchingEnvironment"),Object(o.b)("p",null,"You can add the ",Object(o.b)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as an argument. This class will be ignored by the schema generator and will allow\nyou to view the entire query sent to the server. See more in the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment documentation")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nclass User {\n    fun photos(environment: DataFetchingEnvironment, numberOfPhotos: Int): List<Photo> {\n      val username = environment.executionStepInfo.parent.arguments["id"]\n      return getPhotosFromDataSource(username, numberOfPhotos)\n    }\n}\n\n')),Object(o.b)("h2",{id:"graphql-context"},"GraphQL Context"),Object(o.b)("p",null,"You can add the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," as an argument. This class will be ignored by the schema generator and will allow you to\nview the context object you set up in the data fetchers. See more in the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"GraphQLContext documentation")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass User {\n    fun photos(context: MyContextObject, numberOfPhotos: Int): List<Photo> {\n      val userId = context.getDataFromMyCustomFunction()\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n\n")),Object(o.b)("h2",{id:"excluding-arguments-from-the-schema"},"Excluding Arguments from the Schema"),Object(o.b)("p",null,"You can construct the child objects by passing down arguments as non-public fields or annotate the argument with ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass User(private val userId: String) {\n\n    fun photosProperty(numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n\n    fun photosIgnore(@GraphQLIgnore userId: String, numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n\n")),Object(o.b)("h2",{id:"spring-integration"},"Spring Integration"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-schema"},"Writing Schemas with Spring")," for integration details."))}u.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,g=m["".concat(i,".").concat(p)]||m[p]||h[p]||o;return t?a.a.createElement(g,s(s({ref:n},l),{},{components:t})):a.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
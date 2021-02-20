(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),i=(t(0),t(235)),o={id:"client-features",title:"Client Features",original_id:"client-features"},l={unversionedId:"client/client-features",id:"version-3.x.x/client/client-features",isDocsHomePage:!1,title:"Client Features",description:"Polymorphic Types\xa0Support",source:"@site/versioned_docs/version-3.x.x/client/client-features.md",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/3.x.x/client/client-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/client/client-features.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613851227,sidebar:"version-3.x.x/docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/3.x.x/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/3.x.x/client/client-customization"}},c=[{value:"Polymorphic Types\xa0Support",id:"polymorphic-types-support",children:[]},{value:"Default Enum\xa0Values",id:"default-enum-values",children:[]},{value:"Auto Generated Documentation",id:"auto-generated-documentation",children:[]},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"polymorphic-types-support"},"Polymorphic Types\xa0Support"),Object(i.b)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nhave to ",Object(i.b)("strong",{parentName:"p"},"explicitly specify all implementations"),". Polymorphic queries also have to explicitly request ",Object(i.b)("inlineCode",{parentName:"p"},"__typename"),"\nfield so it can be used to Jackson correctly distinguish between different implementations."),Object(i.b)("p",null,"Given example schema"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n\n")),Object(i.b)("p",null,"We can query interface field as"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n\n")),Object(i.b)("p",null,"Which will generate following data model"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename"\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    PolymorphicQuery.FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = PolymorphicQuery.SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  val id: Int\n  val name: String\n}\n\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : PolymorphicQuery.BasicInterface\n\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : PolymorphicQuery.BasicInterface\n\n')),Object(i.b)("h2",{id:"default-enum-values"},"Default Enum\xa0Values"),Object(i.b)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",Object(i.b)("inlineCode",{parentName:"p"},"@JsonEnumDefaultValue __UNKNOWN_VALUE"),"\nto all generated enums as a catch all safeguard for handling new enum values."),Object(i.b)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),Object(i.b)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),Object(i.b)("p",null,"Given simple GraphQL object definition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'\n"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n\n')),Object(i.b)("p",null,"Will result in a corresponding auto generated data class"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\n/**\n * Some basic description\n */\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n\n")),Object(i.b)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),Object(i.b)("p",null,"GraphQL Kotlin Client is a thin wrapper on top of ",Object(i.b)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client")," which provides\nfully asynchronous communication through Kotlin coroutines. ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClient")," exposes single ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," method that will\nsuspend your GraphQL operation until it gets a response back without blocking the underlying thread. In order to fetch\ndata asynchronously and perform some additional computations at the same time you should wrap your client execution in\n",Object(i.b)("inlineCode",{parentName:"p"},"launch")," or ",Object(i.b)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",Object(i.b)("inlineCode",{parentName:"p"},"await")," for their results."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."))}s.isMDXComponent=!0},235:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?r.a.createElement(f,l(l({ref:n},p),{},{components:t})):r.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
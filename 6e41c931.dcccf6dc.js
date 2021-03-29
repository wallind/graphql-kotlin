(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(180)),o={id:"spring-beans",title:"Automatically Created Beans"},b={unversionedId:"server/spring-server/spring-beans",id:"server/spring-server/spring-beans",isDocsHomePage:!1,title:"Automatically Created Beans",description:"graphql-kotlin-spring-server automatically creates all the necessary beans to start a GraphQL server.",source:"@site/docs/server/spring-server/spring-beans.md",slug:"/server/spring-server/spring-beans",permalink:"/graphql-kotlin/docs/server/spring-server/spring-beans",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-beans.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1617040185,sidebar:"docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"},next:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/server/spring-server/spring-properties"}},c=[{value:"Execution",id:"execution",children:[]},{value:"Non-Federated Schema",id:"non-federated-schema",children:[]},{value:"Federated Schema",id:"federated-schema",children:[]},{value:"GraphQL Configuration",id:"graphql-configuration",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]},{value:"Fixed Beans",id:"fixed-beans",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," automatically creates all the necessary beans to start a GraphQL server.\nMany of the beans are conditionally created and the default behavior can be customized by providing custom overriding beans in your application context."),Object(i.b)("h2",{id:"execution"},"Execution"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"DataFetcherExceptionHandler"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL exception handler used from the various execution strategies, defaults to ",Object(i.b)("a",{parentName:"td",href:"https://www.graphql-java.com/documentation/v16/execution/"},"SimpleDataFetcherExceptionHandler")," from graphql-java.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"KotlinDataFetcherFactoryProvider"),Object(i.b)("td",{parentName:"tr",align:"left"},"Factory used during schema construction to obtain ",Object(i.b)("inlineCode",{parentName:"td"},"DataFetcherFactory")," that should be used for target function (using Spring aware ",Object(i.b)("inlineCode",{parentName:"td"},"SpringDataFetcher"),") and property resolution.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"KotlinDataLoader (optional)"),Object(i.b)("td",{parentName:"tr",align:"left"},"Any number of beans created that implement ",Object(i.b)("inlineCode",{parentName:"td"},"KotlinDataLoader"),". See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/data-loaders"},"Data Loaders")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"DataLoaderRegistryFactory"),Object(i.b)("td",{parentName:"tr",align:"left"},"A factory class that creates a ",Object(i.b)("inlineCode",{parentName:"td"},"DataLoaderRegistry")," of all the ",Object(i.b)("inlineCode",{parentName:"td"},"KotlinDataLoaders"),". Defaults to empty registry.")))),Object(i.b)("h2",{id:"non-federated-schema"},"Non-Federated Schema"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Created only if federation is disabled")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SchemaGeneratorConfig"),Object(i.b)("td",{parentName:"tr",align:"left"},"Schema generator configuration information, see ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"Schema Generator Configuration")," for details. Can be customized by providing ",Object(i.b)("inlineCode",{parentName:"td"},"TopLevelNames"),", ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"SchemaGeneratorHooks")," and ",Object(i.b)("inlineCode",{parentName:"td"},"KotlinDataFetcherFactoryProvider")," beans.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQLSchema"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL schema generated based on the schema generator configuration and  ",Object(i.b)("inlineCode",{parentName:"td"},"Query"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Mutation")," and ",Object(i.b)("inlineCode",{parentName:"td"},"Subscription")," objects available in the application context.")))),Object(i.b)("h2",{id:"federated-schema"},"Federated Schema"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Created only if federation is enabled")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedTypeResolvers"),Object(i.b)("td",{parentName:"tr",align:"left"},"List of ",Object(i.b)("inlineCode",{parentName:"td"},"FederatedTypeResolvers")," marked as beans that should be added to hooks. See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"},"Federated Type Resolution")," for more details")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedSchemaGeneratorHooks"),Object(i.b)("td",{parentName:"tr",align:"left"},"Schema generator hooks used to build federated schema")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedSchemaGeneratorConfig"),Object(i.b)("td",{parentName:"tr",align:"left"},"Federated schema generator configuration information. You can customize the configuration by providing ",Object(i.b)("inlineCode",{parentName:"td"},"TopLevelNames"),", ",Object(i.b)("inlineCode",{parentName:"td"},"FederatedSchemaGeneratorHooks")," and ",Object(i.b)("inlineCode",{parentName:"td"},"KotlinDataFetcherFactoryProvider")," beans")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"FederatedTracingInstrumentation"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"graphql.federation.tracing.enabled")," is true, it adds tracing info to the response via the ",Object(i.b)("a",{parentName:"td",href:"https://github.com/apollographql/federation-jvm"},"apollo federation-jvm")," library.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQLSchema"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL schema generated based on the federated schema generator configuration and  ",Object(i.b)("inlineCode",{parentName:"td"},"Query"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Mutation")," and ",Object(i.b)("inlineCode",{parentName:"td"},"Subscription")," objects available in the application context.")))),Object(i.b)("h2",{id:"graphql-configuration"},"GraphQL Configuration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Instrumentation (optional)"),Object(i.b)("td",{parentName:"tr",align:"left"},"Any number of beans created that implement ",Object(i.b)("inlineCode",{parentName:"td"},"graphql-java")," ",Object(i.b)("a",{parentName:"td",href:"https://www.graphql-java.com/documentation/v16/instrumentation/"},"Instrumentation")," will be pulled in. The beans can be ordered by implementing the Spring ",Object(i.b)("inlineCode",{parentName:"td"},"Ordered")," interface.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"ExecutionIdProvider (optional)"),Object(i.b)("td",{parentName:"tr",align:"left"},"Any number of beans created that implement ",Object(i.b)("inlineCode",{parentName:"td"},"graphql-java")," ",Object(i.b)("a",{parentName:"td",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/ExecutionIdProvider.java"},"ExecutionIdProvider")," will be pulled in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"PreparsedDocumentProvider (optional)"),Object(i.b)("td",{parentName:"tr",align:"left"},"Any number of beans created that implement ",Object(i.b)("inlineCode",{parentName:"td"},"graphql-java")," ",Object(i.b)("a",{parentName:"td",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/preparsed/PreparsedDocumentProvider.java"},"PreparsedDocumentProvider")," will be pulled in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL"),Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQL execution object generated using ",Object(i.b)("inlineCode",{parentName:"td"},"GraphQLSchema")," with default async execution strategies. The GraphQL object can be customized by optionally providing the above beans in the application context.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SpringGraphQLRequestParser"),Object(i.b)("td",{parentName:"tr",align:"left"},"Provides the Spring specific logic for parsing the HTTP request into a common GraphQLRequest. See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/graphql-request-parser"},"GraphQLRequestParser"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SpringGraphQLContextFactory"),Object(i.b)("td",{parentName:"tr",align:"left"},"Spring specific factory that uses the ",Object(i.b)("inlineCode",{parentName:"td"},"ServerRequest"),". The ",Object(i.b)("inlineCode",{parentName:"td"},"GraphQLContext")," generated can be any object. See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"GraphQLRequestHandler"),Object(i.b)("td",{parentName:"tr",align:"left"},"Handler invoked from ",Object(i.b)("inlineCode",{parentName:"td"},"GraphQLServer")," that executes the incoming request, defaults to ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/graphql-request-handler"},"GraphQLRequestHandler"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SpringGraphQLServer"),Object(i.b)("td",{parentName:"tr",align:"left"},"Spring specific object that takes in a ",Object(i.b)("inlineCode",{parentName:"td"},"ServerRequest")," and returns a ",Object(i.b)("inlineCode",{parentName:"td"},"GraphQLResponse")," using all the above implementations. See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/graphql-server"},"GraphQLServer"))))),Object(i.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Created only if the ",Object(i.b)("inlineCode",{parentName:"em"},"Subscription")," marker interface is used")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Bean"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SpringGraphQLSubscriptionHandler"),Object(i.b)("td",{parentName:"tr",align:"left"},"Spring reactor code for executing GraphQL subscriptions requests")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"WebSocketHandlerAdapter"),Object(i.b)("td",{parentName:"tr",align:"left"},"Spring class for handling web socket http requests. See ",Object(i.b)("a",{parentName:"td",href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/socket/server/support/WebSocketHandlerAdapter.html"},"Spring documentation"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"ApolloSubscriptionHooks"),Object(i.b)("td",{parentName:"tr",align:"left"},"Provides hooks into the subscription request lifecycle. See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},"the subscription docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"SpringSubscriptionGraphQLContextFactory"),Object(i.b)("td",{parentName:"tr",align:"left"},"Spring specific factory that uses the ",Object(i.b)("inlineCode",{parentName:"td"},"WebSocketSession"),". See ",Object(i.b)("a",{parentName:"td",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContextFactory"),".")))),Object(i.b)("h2",{id:"fixed-beans"},"Fixed Beans"),Object(i.b)("p",null,"The following beans cannot be overridden, but may have options to disable them:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Route handler for GraphQL queries and mutations endpoint."),Object(i.b)("li",{parentName:"ul"},"Route handler for the SDL endpoint. Created only if sdl route is enabled."),Object(i.b)("li",{parentName:"ul"},"Route handler for ",Object(i.b)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"Prisma Labs Playground"),". Created only if playground is enabled"),Object(i.b)("li",{parentName:"ul"},"Route handler for the subscriptions endpoint. Created only if subscriptions are used."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ApolloSubscriptionProtocolHandler")," for handling GraphQL subscriptions using the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},Object(i.b)("inlineCode",{parentName:"a"},"graphql-ws")," protocol"),". Created only if subscriptions are used."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SubscriptionWebSocketHandler")," that utilizes above subscription protocol handler. Created only if subscriptions are used.")))}p.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return a?n.a.createElement(h,b(b({ref:t},l),{},{components:a})):n.a.createElement(h,b({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
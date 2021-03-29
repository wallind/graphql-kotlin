(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{180:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,u=d["".concat(i,".").concat(h)]||d[h]||b[h]||o;return a?r.a.createElement(u,l(l({ref:t},c),{},{components:a})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(180)),i={id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},l={unversionedId:"getting-started",id:"version-3.x.x/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that aim to simplify running GraphQL in Kotlin",source:"@site/versioned_docs/version-3.x.x/getting-started.md",slug:"/",permalink:"/graphql-kotlin/docs/3.x.x/",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/getting-started.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1617040185,sidebar:"version-3.x.x/docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/3.x.x/examples"}},p=[{value:"Modules",id:"modules",children:[]},{value:"Installation",id:"installation",children:[{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]}]},{value:"Generating a Schema",id:"generating-a-schema",children:[{value:"Apollo Federation",id:"apollo-federation",children:[]}]},{value:"Running a Server",id:"running-a-server",children:[]},{value:"Creating a Client",id:"creating-a-client",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Blogs and Videos",id:"blogs-and-videos",children:[]}],c={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",Object(o.b)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that aim to simplify running GraphQL in Kotlin"),Object(o.b)("h2",{id:"modules"},"Modules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples"},"examples"),"\n\u2014 Example apps that use graphql-kotlin libraries to test and demonstrate usages"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-client"},"graphql-kotlin-client")," (",Object(o.b)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-client"},"Javadoc"),")\n\u2014 Lightweight GraphQL Kotlin HTTP client"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-schema-generator"},"graphql-kotlin-schema-generator")," (",Object(o.b)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-schema-generator"},"Javadoc"),")\n\u2014 Code only GraphQL schema generation for Kotlin"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-federation"},"graphql-kotlin-federation")," (",Object(o.b)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-federation"},"Javadoc"),")\n\u2014 Schema generator extension to build federated GraphQL schemas"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server")," (",Object(o.b)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-spring-server"},"Javadoc"),")\n\u2014 Spring Boot auto-configuration library to create GraphQL server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-types"},"graphql-kotlin-types")," (",Object(o.b)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-types"},"Javadoc"),")\n\u2014 Core types used by both client and server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/plugins"},"plugins"),"\n\u2014 GraphQL Kotlin Gradle and Maven plugins")),Object(o.b)("p",null,"If you encounter any problems using this library please open up a new\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues"},"Issue")),Object(o.b)("p",null,"Additional resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Using a JVM dependency manager, simply link any ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project. You can see the latest\nversion and other examples in ",Object(o.b)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.expediagroup/graphql-kotlin-spring-server"},"Sonatype Central\nRepository")),Object(o.b)("h3",{id:"maven"},"Maven"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),Object(o.b)("h3",{id:"gradle"},"Gradle"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n\n')),Object(o.b)("h2",{id:"generating-a-schema"},"Generating a Schema"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),Object(o.b)("p",null,"See the docs in ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),Object(o.b)("h3",{id:"apollo-federation"},"Apollo Federation"),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),Object(o.b)("p",null,"See the docs in ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},"Apollo Federation"),"."),Object(o.b)("h2",{id:"running-a-server"},"Running a Server"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," is a combination of the schema generator, fedeation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),Object(o.b)("p",null,"See the docs in ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},"Spring Server Overview"),"."),Object(o.b)("h2",{id:"creating-a-client"},"Creating a Client"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),Object(o.b)("p",null,"See the docs in ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/client/client-overview"},"Client Overview"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),Object(o.b)("p",null,"See the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/examples"},"example docs")," for more info."),Object(o.b)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),Object(o.b)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"},"Blogs and Videos")," page."))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmaglev_training_github_io=self.webpackChunkmaglev_training_github_io||[]).push([[183],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(o),d=n,u=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return o?a.createElement(u,r(r({ref:t},p),{},{components:o})):a.createElement(u,r({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var h=2;h<i;h++)r[h]=o[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9322:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return c}});var a=o(7462),n=o(3366),i=(o(7294),o(3905)),r=["components"],s={sidebar_position:6},l="Microservices",h={unversionedId:"architecture/microservices",id:"architecture/microservices",title:"Microservices",description:"This document provides an overview of the Microservice architecture pattern, and associated patterns. It also introduces some technology associated with microservices, including containerized applications and CI/CD.",source:"@site/docs/architecture/microservices.md",sourceDirName:"architecture",slug:"/architecture/microservices",permalink:"/docs/architecture/microservices",editUrl:"https://github.com/maglev-training/maglev-training.github.io/blob/main/docs/architecture/microservices.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/intro"},next:{title:"Kubernetes",permalink:"/docs/architecture/k8s"}},p=[{value:"Preamble",id:"preamble",children:[{value:"A Tiny Bit of Woo Woo",id:"a-tiny-bit-of-woo-woo",children:[{value:"The Simple Thing is the Right Thing",id:"the-simple-thing-is-the-right-thing",children:[],level:4},{value:"Final Woo Woo Thoughts",id:"final-woo-woo-thoughts",children:[],level:4}],level:3}],level:2},{value:"Our Guardrails",id:"our-guardrails",children:[{value:"Guardrail One: Microservices are Created to Provide Value",id:"guardrail-one-microservices-are-created-to-provide-value",children:[],level:3},{value:"Guardrail Two: Microservices must be Independently Deployable",id:"guardrail-two-microservices-must-be-independently-deployable",children:[],level:3},{value:"Guardrail Three: Failure is a Feature",id:"guardrail-three-failure-is-a-feature",children:[],level:3}],level:2},{value:"Integration Patterns",id:"integration-patterns",children:[],level:2},{value:"Containerized Applications",id:"containerized-applications",children:[],level:2}],m={toc:p};function c(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microservices"},"Microservices"),(0,i.kt)("p",null,"This document provides an overview of the Microservice architecture pattern, and associated patterns. It also introduces some technology associated with microservices, including containerized applications and CI/CD."),(0,i.kt)("h2",{id:"preamble"},"Preamble"),(0,i.kt)("p",null,"For about as long as we've been building software (which isn't ",(0,i.kt)("em",{parentName:"p"},"that")," long in the grand scheme human of engineering pursuits), we've been thinking of new ways to construct software to deal with the issues of ",(0,i.kt)("em",{parentName:"p"},"complexity"),". This isn't a new thing. The Gandalf of the computer science world talked about it in 1968",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". He suggested building software in encapsulated layers of functionality, each at an increasing level of abstraction from the one below it, with an acknowledgement that keeping things that change together, while isolating their need from change from the other pieces that depend on them."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Software development ",(0,i.kt)("em",{parentName:"p"},"is")," complex. And it is usually written by people that thrive on complexity. We ",(0,i.kt)("em",{parentName:"p"},"dig")," it. When it is our complexity, it is ",(0,i.kt)("em",{parentName:"p"},"awesome")," or ",(0,i.kt)("em",{parentName:"p"},"clever"),". When it is someone else's though, it is ",(0,i.kt)("em",{parentName:"p"},"sucky"),", or ",(0,i.kt)("em",{parentName:"p"},"a mess"),". Work long enough in software, stuff you wrote will be your own ",(0,i.kt)("em",{parentName:"p"},"sucky")," code.")),(0,i.kt)("h3",{id:"a-tiny-bit-of-woo-woo"},"A Tiny Bit of Woo Woo"),(0,i.kt)("p",null,'Indulge me, please. Or skip this section. I\'ve noticed a common thing when talking to some developers about Microservices. First, I\'m usually either creating Microservices, or teaching others about them. When I am teaching about them, I like to create them with the students. We don\'t need any more high-level Powerpoint death marches. So often when we divorce the "view" of how something should be done from the "how", it is too easy to be dismissive. "Well, it sounds good on paper." is a common reproach.'),(0,i.kt)("p",null,"However, when I actually ",(0,i.kt)("em",{parentName:"p"},"show")," how to do this, along with talking about it, there is another problem. It is based on the generosity of students and their ability to project upon the teacher the ",(0,i.kt)("em",{parentName:"p"},"best of intentions"),". \"Oh, he's showing a very simple example because there are other people here (not ",(0,i.kt)("em",{parentName:"p"},"me")," of course), that need super simple examples. But I write very complicated, important things! I get why he is doing this, but this wouldn't work for me.\""),(0,i.kt)("p",null,'I almost never do that. The code I write in class and the code I write "for real" are the same. Or, more, the process through which I write code in class mirrors exactly (or as exact as possible) the the process I use to write "real" code.'),(0,i.kt)("p",null,"An Example: Perhaps I am teaching about how to write an app using Angular. At some point in the creation of the application, it inevitably becomes obvious that we are going to need an API of some type. Some server-side ",(0,i.kt)("em",{parentName:"p"},"thing"),", maybe to persist our data between uses of the application, or something like that. I mean, you add some stuff to your todo list, you need to save it ",(0,i.kt)("em",{parentName:"p"},"somewhere")," right? So we will create a simple little API. Maybe an HTTP-based API that has a resource we can ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," some data from, or ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," some new stuff to. That kind of thing. If I'm doing it with .NET (a lot of my clients are from companies that use .NET), I'm create an API, maybe use Entity Framework and a local Sql Server, get the thing going. Just enough. The \"seasoned\" developers in the class just ",(0,i.kt)("em",{parentName:"p"},"know"),' this is a "classroom" thing. That in real applications (a Todo list! I ',(0,i.kt)("em",{parentName:"p"},"wish!"),"), you need to get your data from the Mainframe, from Oracle, from DB2, whatever. They just assume that the way I am showing this in class is an ",(0,i.kt)("em",{parentName:"p"},"expedient"),". A pedagogical device for their benefit."),(0,i.kt)("p",null,'I know this because they follow up with me, sometimes weeks later with questions like "How do you map Entity Framework to existing data in DB2? In Oracle?". Or they get blocked. Stalled out while another team considers merging their pull request to their API for the functionality they need.'),(0,i.kt)("p",null,'I often have people that are "repeat customers" come to my class and actually tell me they love my classes because it is a "nice vacation". What they mean, I assume, is that they want a break from the complexity of their "real" applications, and want the thrill of "greenfield" development. "Must be nice!" they say.'),(0,i.kt)("p",null,'As if I work in a world where there is no complexity. That every day I just "file new project" and create something from scratch without the need for testing, without the need for integration, without the need compliance, security, even dreaded requirements!. To be honest, I do. And to be double-honest, when I\'m teaching, that stuff is sort of off in the margins. But that is the ',(0,i.kt)("strong",{parentName:"p"},"exact point"),'. Your experience of writing software should be creating small, simple things. "Simple" here means the opposite of "Complex". Rich Hickey gave a great talk a few years ago about this that everyone should listen to each night as they fall asleep.',(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),' Simple comes form the term "Simplex": "Dealing with one thing", and "Complex" means dealing with many things.'),(0,i.kt)("p",null,"Microservices aren't ",(0,i.kt)("em",{parentName:"p"},"easy"),", but they should be ",(0,i.kt)("em",{parentName:"p"},"simple"),"."),(0,i.kt)("p",null,"Here's the woo-woo",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," part. Working as a software developer for a long time ",(0,i.kt)("em",{parentName:"p"},"can"),' cause you to disassociate. It seems to force us to live "in our heads", to ',(0,i.kt)("em",{parentName:"p"},"hyperfocus"),". We all ",(0,i.kt)("em",{parentName:"p"},"know"),' that interrupting a software developer deep into their work is like poking a sleeping bear. They are holding a lot of stuff in their head (see: "Complex" above), and it\'s a fragile house of cards. Even a "schtick-tick-tick" notification from Slack can bring it all tumbling to the ground. That day is ',(0,i.kt)("em",{parentName:"p"},"gone"),". Some of the absolute ",(0,i.kt)("em",{parentName:"p"},"best")," software developers I know have Tibetan Yogi levels of concentration when they are working. They skip meals, they don't notice it is dark out. Their children are gnawing on cans of beans from the cabinet out of hunger."),(0,i.kt)("p",null,"I know we glamorize this, and to some extent ",(0,i.kt)("em",{parentName:"p"},"rely")," on it from time to time. But it isn't good. It isn't healthy for you, and it isn't healthy for the code you are writing, either. Brief moments of it are necessary. Disassociating",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),' like that as a baseline way of being is pathological. It can be easily mistaken for the concept of "Flow"',(0,i.kt)("sup",{parentName:"p",id:"fnref-5"},(0,i.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),'. It\'s a near neighbor to flow, for sure. But flow involves the sense of "complete involvement", and disassociation leaves some pieces of the "complete" thing out. If I were being very openly "woo woo" here I\'d say it lacks the factor of "embodiment", which, while true, is easier to explain by simply saying we are cut off from our emotional reactions to what it is we are doing. I\'ve often worked in that state, and had the sense that I was creating something ',(0,i.kt)("em",{parentName:"p"},"absolutely"),' brilliant, genius even. Only to find that when I finally came down from my dissociative "high" that I had pretty much written the wrong thing entirely. Completely missed the point. I got so caught up in my own head that there was no room for feedback from the outside ',(0,i.kt)("em",{parentName:"p"},"at all"),"."),(0,i.kt)("p",null,'Several times a year I teach a two-week intensive course for new programmers at a large company. I love it. These are people that are new to the company I am contracted to teach for, and relatively new to the profession. They often have Computer Science degrees, or similar educational backgrounds, and it is an opportunity for me to show them some things that will help when writing code in the "real world".'),(0,i.kt)("p",null,"We spend the entire first week doing Test Driven Development. I love TDD. I don't do it ",(0,i.kt)("em",{parentName:"p"},"all")," the time, and I don't prescribe it for all situations. The reason I have new developers do it is to break their sense of ",(0,i.kt)("em",{parentName:"p"},"hyper-focus")," and ",(0,i.kt)("em",{parentName:"p"},"disassociation"),'. "You have one minute to make the test you just wrote pass. If it takes you longer than one minute, delete your code and the test, and write another one you can get done in one minute" is one technique I use. It aggravates ',(0,i.kt)("em",{parentName:"p"},"the hell")," out of them. And that is the point. At least they are feeling ",(0,i.kt)("em",{parentName:"p"},"something"),". They are forced to stop, check in, and think about what they are actually doing. It forces them to write ",(0,i.kt)("em",{parentName:"p"},"simple")," things. If the ",(0,i.kt)("em",{parentName:"p"},"simple"),' thing they are writing needs something less simple, they are trained to "push it off", make it a responsibility of some ',(0,i.kt)("em",{parentName:"p"},"other")," code, and worry about that later."),(0,i.kt)("p",null,'Sort of like my new shiny Angular application needs an API, so I build a simple API. Implicit in that is that the API is an entirely different world of "Function and Variability"',(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' than the thing I am working on (my little Angular application). It doesn\'t belong "here", and by "here" I mean in my mind as I\'m working on this "thing". In the API I do the simplest thing that could work. And it will work, for now.'),(0,i.kt)("h4",{id:"the-simple-thing-is-the-right-thing"},"The Simple Thing is the Right Thing"),(0,i.kt)("p",null,"This shouldn't be interpreted to mean \"Oh, I get it! The API is just a 'place holder'! Later on you will replace it with ",(0,i.kt)("em",{parentName:"p"},"real"),' code that maps Entity Framework to Oracle, or uses our DB2 stored procedures!" No. Just No. What I am saying is something along the lines of: "For this application, we need a ',(0,i.kt)("em",{parentName:"p"},"definitive source")," of our data. That is this API. It is exactly what this application needs. And frankly, at this point, I don't even ",(0,i.kt)("em",{parentName:"p"},"care")," about other people's applications. I don't care that HR might need access to my Todo list data to track employee work or something. That's not my problem. Yet. And if it is going to my \"my problem\" in the future, that sounds complicated as heck, and I sure don't want that kind of thing in my simple, beautiful RESTy API. That would make it ",(0,i.kt)("em",{parentName:"p"},"complex")," as heck!"),(0,i.kt)("p",null,"In Microservice architecture we have some guardrails that will keep us from doing the wrong thing, which is to say that will keep us from writing code that isn't ",(0,i.kt)("em",{parentName:"p"},"simple"),'. These are the "forms" of Microservice development. They are principals and behaviors we willingly adopt to keep us from accidentally getting disassociated and writing a mess. If you violate these, you will have a mess.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sidenote: Some things are really hard and, well, complicated. A student of mine told me how he had to go learn all about Kerberos authentication and implement it within his API. This is how we make a simple thing complex. Your job as a developer is to put aside your desire to be the hero, to be the one that will \"slay the best\", or even to avoid the glee of focusing in on that and feeling all proud of something you did that you can't explain to your mail carrier. It's to learn techniques to make that complicated thing simple, and never let it complex-ify your simple code again. We'll do it. It can be done. The answer is always some version of the same thing, though: Make something else responsible for that, and only that. You know, maybe a Microservice?")),(0,i.kt)("h4",{id:"final-woo-woo-thoughts"},"Final Woo Woo Thoughts"),(0,i.kt)("p",null,"Here's my advice. Get emotional. Get annoyed. Get frustrated. There is a ",(0,i.kt)("em",{parentName:"p"},"lot"),' of wisdom in those emotions. Feel them, don\'t disassociate, but do something about them! If you are working on something pretty simple and you start to get annoyed with it because now you are dealing with something really complicated, don\'t just "buckle down" and get it "done". ',(0,i.kt)("strong",{parentName:"p"},"It. Does. Not. Belong. There"),'. It feels annoying and frustrating because it is "clashing" with the beautiful simple, elegant stuff you just wrote. If you are writing an Angular component and find yourself 18 tabs deep into learning about RXJS operators, push the yourself away from the desk like it is on ',(0,i.kt)("em",{parentName:"p"},"fire"),". You are doing it wrong. Your component ",(0,i.kt)("em",{parentName:"p"},"needs")," something, but it doesn't need to know how that is done. That is the message. Have your component ask something else for it, define an ",(0,i.kt)("em",{parentName:"p"},"interface"),", and finish up the component. Then go work on that thing. You will find it ",(0,i.kt)("em",{parentName:"p"},"much")," less frustrating when you (a) know exactly what it is you need, (b) can concentrate on ",(0,i.kt)("em",{parentName:"p"},"just")," that, and (c) aren't worried about protecting your code from other dummies. Just you."),(0,i.kt)("h2",{id:"our-guardrails"},"Our Guardrails"),(0,i.kt)("p",null,'The most common, and, frankly, most boring question about microservices is the dreaded "How big?". Maybe I find it a boring question because it is so hard to answer. So, let\'s just bracket that question. "Bracket" in the philosophical sense. Just set it aside and see what happens through observation and following some basic forms. Making some rules for ourselves about what our services are allowed to do, what they aren\'t allowed to do, and I suspect you will find you end up with what will arguable be "micro", even if we can\'t find a way to quantify them.'),(0,i.kt)("h3",{id:"guardrail-one-microservices-are-created-to-provide-value"},"Guardrail One: Microservices are Created to Provide Value"),(0,i.kt)("p",null,'A production team is always creating software to put in front of our customers. The longer we work on something, the bigger the risk. Are we building the right thing? This is very different than "building what they are asking for". Briefly in the history of software development there ',(0,i.kt)("em",{parentName:"p"},"were"),' people that knew what the product should be and how it should work. In it\'s infancy, software development was the process of "digitizing" and "automating" existing systems. One of the first applications I wrote was to replace a dental office receptionist\'s paper calendar and post it notes with a database to track and schedule appointments. It was "done" when it worked as a suitable replacement for what she was already using. Hopefully more reliably and faster, but that was it. '),(0,i.kt)("p",null,'On a bigger scale, legions of people were trained as "Systems Analysts". They knew ',(0,i.kt)("em",{parentName:"p"},"business"),", and they knew ",(0,i.kt)("em",{parentName:"p"},"software"),'. They would figure out how to "modernize" your factory, your warehouse, your order processing. All that stuff. '),(0,i.kt)("p",null,'I think one of the most damaging things in modern software development is the assumption that we are still living in that world. We are no longer simply coming up with faster, better ways to do what we\'ve already done. We are creating entirely new concepts, new worlds, that have never existed before. There are no "subject matter experts". In anything but the most simple of software development tasks, nobody knows what it will end up looking like, how it will work, what is "best". And still we have overly long "planning sprints" were we get out our chrystal balls and speculate what we should do over the next 6 months. Nobody knows. They look to the "business", and those people ',(0,i.kt)("em",{parentName:"p"},"never")," want to admit they don't know things, so they make up some crap. And, for our part, we too easily fall into the \"well, just tell me what you want, and we'll make it\", which makes us perfect targets for being given a bunch of story cards that have no basis in reality, other than to be used against us when we don't deliver some imagined product on time."),(0,i.kt)("p",null,"Many developers (myself included) spent the interregnum between the two paradigms of software development (building computer stuff to replace analog stuff) and now building ",(0,i.kt)("em",{parentName:"p"},"bigger")," systems, ",(0,i.kt)("em",{parentName:"p"},"bigger")," frameworks to make development \"easy\". We pretended we knew the future, and we built big complicated things to prepare us for it. And we've left that crap for a generation of people that are building software for use cases and contexts that didn't even exist when we created these mega-frameworks. A mega framework that presupposes all content will be delivered through stateless HTML applications makes it a royal pain in the ass to build stateful applications that run on these new-fangled devices like phones and web browsers (I mean, 15 years ago, who would of thought that we'd be building applications that are written in JavaScript! A language that doesn't even know what an integer is!)."),(0,i.kt)("p",null,"I have seen ",(0,i.kt)("em",{parentName:"p"},"so many"),' applications that could have been written with 1/2 the code and 1/3 of the time, if they didn\'t have to bow down to some sacred "enterprise platform" that was designed to ensure we\'d have absolute consistency across the enterprise. Unfortunately, that consistency is mostly "how we did things 10 years ago", and every new application is some form of lipstick on a pig monstrosity that tries to hide the ancient underpinnings of so many "enterprise service bus" implementations, or "universal API gateways".'),(0,i.kt)("p",null,'Sometimes what we do is we try to "modernize" those application. Rewrite them. I talked to some people working on a rewrite of a huge call center management application recently. They told me that while doing "archeology" through the old code base, they found hundreds of business rules embedded in the code that were not documented anywhere else. You can imagine the temptation to "play it safe" and just reimplement those very same rules in the new system. I can\'t but help think they\'ll end up with an expensive version of the very thing they started with. '),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Eventually"),' we will have to talk a bunch about how to do that kind of thing - how to go from "Monoliths to Microservices". I\'m a big fan of Sam Newman\'s book "Monoliths to Microservices"',(0,i.kt)("sup",{parentName:"p",id:"fnref-6"},(0,i.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),'. Going from a "monolith" to "microservices" is a great way to go. Even so, it doesn\'t need to be such a Manichean thing as "Oh, we have this \'legacy\' monolith, so we ',(0,i.kt)("em",{parentName:"p"},"should")," move it to Microservices\". I've created plenty of things that start life as a microservice, but complexity sneaks in and then they are a monolith. I've refactored monoliths to microservices to the point that the monolith disappears and nobody even realy notices. I don't think, though, that if I hadn't already created applications using a microservice architecture from the start I would have done a very good job. I think it would have been too tempting to just stay in the snug monolith world. ")),(0,i.kt)("h3",{id:"guardrail-two-microservices-must-be-independently-deployable"},"Guardrail Two: Microservices must be Independently Deployable"),(0,i.kt)("h3",{id:"guardrail-three-failure-is-a-feature"},"Guardrail Three: Failure is a Feature"),(0,i.kt)("h2",{id:"integration-patterns"},"Integration Patterns"),(0,i.kt)("h2",{id:"containerized-applications"},"Containerized Applications"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},'Complexity Controlled by Hierarchical Ordering of Function and Variablity\nDijkstra, Edsger W. "Complexity controlled by hierarchical ordering of function and variability." Software Engineering: Report on a conference sponsored by the NATO Science Committee. 1968.',(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},'Simple Made Easy\nHicky, Rich "Simple Made Easy"\n',(0,i.kt)("a",{parentName:"li",href:"https://www.infoq.com/presentations/Simple-Made-Easy/"},"InfoQ"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},'"Woo Woo" here meaning this is sort of opinion mixed with pop psychology as a way to explain a phenomena.',(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"Psychological Disassociation\n",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dissociation_(psychology)"},"Wikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-5"},"Flow - Cs\xedkszentmih\xe1lyi\n",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Flow_(psychology)"},"Wikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-6"},(0,i.kt)("a",{parentName:"li",href:"https://www.amazon.com/Monolith-Microservices-Evolutionary-Patterns-Transform-ebook/dp/B081TKSSNN/ref=sr_1_1?keywords=monolith+to+microservices&qid=1639860376&sprefix=monolith+to+%2Caps%2C91&sr=8-1"},"Monoliths to Microservices"),(0,i.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);
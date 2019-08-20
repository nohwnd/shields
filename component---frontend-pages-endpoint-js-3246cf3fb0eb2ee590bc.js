(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1),o=n.n(r),i=n(151),d=n(153),s=n(166),c=n(167),u=n(170),h=n(184),m=n(152),p=n(161),g=n(185),b=Object(i.c)(m.b).withConfig({displayName:"endpoint__MainContainer",componentId:"efkpmr-0"})(["text-align:center;"]),f=i.c.div.withConfig({displayName:"endpoint__Explanation",componentId:"efkpmr-1"})(["display:block;max-width:800px;margin:0 auto;text-align:left;"]),E=i.c.code.withConfig({displayName:"endpoint__JsonExampleBlock",componentId:"efkpmr-2"})(["display:inline-block;text-align:left;line-height:1.2em;padding:16px 18px;border-radius:4px;background:#eef;font-family:Lekton;font-size:",";white-space:pre;"],function(e){return e.fontSize}),y=function(e){var t=e.data;return l.a.createElement(E,null,JSON.stringify(t,void 0,2))};y.propTypes={data:o.a.object.isRequired};var v=i.c.dl.withConfig({displayName:"endpoint__Schema",componentId:"efkpmr-3"})(["display:inline-block;max-width:800px;margin:0;padding:10px;text-align:left;background:#efefef;clear:both;overflow:hidden;dt,dd{padding:0 1%;margin-top:8px;margin-bottom:8px;float:left;}dt{width:100px;clear:both;}dd{margin-left:20px;width:75%;}@media (max-width:600px){.data_table{text-align:center;}}"]);t.default=function(){return l.a.createElement(b,null,l.a.createElement(m.d,null),l.a.createElement(c.a,null),l.a.createElement(u.a,null),l.a.createElement(m.f,null,"Endpoint (Beta)"),l.a.createElement(p.a,{snippet:s.a+"/endpoint.svg?url=...&style=..."}),l.a.createElement("p",null,"Endpoint response:"),l.a.createElement(y,{data:{schemaVersion:1,label:"hello",message:"sweet world",color:"orange"}}),l.a.createElement("p",null,"Shields response:"),l.a.createElement(m.a,{alt:"hello | sweet world",src:Object(d.staticBadgeUrl)({baseUrl:s.a,label:"hello",message:"sweet world",color:"orange"})}),l.a.createElement(f,null,l.a.createElement("p",null,"Developers rely on Shields for visual consistency and powerful customization options. As a service provider or data provider, you can use the endpoint badge to provide content while giving users the full power of Shields' badge customization."),l.a.createElement("p",null,"Using the endpoint badge, you can provide content for a badge through a JSON endpoint. The content can be prerendered, or generated on the fly. To strike a balance between responsiveness and bandwidth utilization on one hand, and freshness on the other, cache behavior is configurable, subject to the Shields minimum. The endpoint URL is provided to Shields through the query string. Shields fetches it and formats the badge."),l.a.createElement("p",null,"The endpoint badge is a better alternative than redirecting to the static badge enpoint or generating SVG on your server:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Separation_of_content_and_presentation"},"Content and presentation are separate.")," ","The service provider authors the badge, and Shields takes input from the user to format it. As a service provider you author the badge but don't have to concern yourself with styling. You don't even have to pass the formatting options through to Shields."),l.a.createElement("li",null,"Badge formatting is always 100% up to date. There's no need to track updates to the npm package, badge templates, or options."),l.a.createElement("li",null,"A JSON response is easy to implement; easier than an HTTP redirect. It is trivial in almost any framework, and is more compatible with hosting environments such as"," ",l.a.createElement("a",{href:"https://runkit.com/docs/endpoint"},"RunKit endpoints"),"."),l.a.createElement("li",null,"As a service provider you can rely on the Shields CDN. There's no need to study the HTTP headers. Adjusting cache behavior is as simple as setting a property in the JSON response."))),l.a.createElement("h4",null,"Schema"),l.a.createElement(f,null,l.a.createElement("p",null,"The schema may change during the beta period. Any changes will be posted here. After launch, breaking changes will trigger an increment to the `schemaVersion`.")),l.a.createElement(v,null,l.a.createElement("dt",null,"schemaVersion"),l.a.createElement("dd",null,"Required. Always the number ",l.a.createElement("code",null,"1"),"."),l.a.createElement("dt",null,"label"),l.a.createElement("dd",null,"Required. The left text, or the empty string to omit the left side of the badge. This can be overridden by the query string."),l.a.createElement("dt",null,"message"),l.a.createElement("dd",null,"Required. Can't be empty. The right text."),l.a.createElement("dt",null,"color"),l.a.createElement("dd",null,"Default: ",l.a.createElement("code",null,"lightgrey"),". The right color. Supports the eight named colors above, as well as hex, rgb, rgba, hsl, hsla and css named colors. This can be overridden by the query string."),l.a.createElement("dt",null,"labelColor"),l.a.createElement("dd",null,"Default: ",l.a.createElement("code",null,"grey"),". The left color. This can be overridden by the query string."),l.a.createElement("dt",null,"isError"),l.a.createElement("dd",null,"Default: ",l.a.createElement("code",null,"false"),". ",l.a.createElement("code",null,"true")," to treat this as an error badge. This prevents the user from overriding the color. In the future it may affect cache behavior."),l.a.createElement("dt",null,"namedLogo"),l.a.createElement("dd",null,"Default: none. One of the named logos supported by Shields or ",l.a.createElement("a",{href:"https://simpleicons.org/"},"simple-icons"),". Can be overridden by the query string."),l.a.createElement("dt",null,"logoSvg"),l.a.createElement("dd",null,"Default: none. An SVG string containing a custom logo."),l.a.createElement("dt",null,"logoColor"),l.a.createElement("dd",null,"Default: none. Same meaning as the query string. Can be overridden by the query string."),l.a.createElement("dt",null,"logoWidth"),l.a.createElement("dd",null,"Default: none. Same meaning as the query string. Can be overridden by the query string."),l.a.createElement("dt",null,"logoPosition"),l.a.createElement("dd",null,"Default: none. Same meaning as the query string. Can be overridden by the query string."),l.a.createElement("dt",null,"style"),l.a.createElement("dd",null,"Default: ",l.a.createElement("code",null,"flat"),". The default template to use. Can be overridden by the query string."),l.a.createElement("dt",null,"cacheSeconds"),l.a.createElement("dd",null,"Default: ",l.a.createElement("code",null,"300"),", min ",l.a.createElement("code",null,"300"),". Set the HTTP cache lifetime in seconds, which should respected by the Shields' CDN and downstream users. Values below 300 will be ignored. This lets you tune performance and traffic vs. responsiveness. The value you specify can be overridden by the user via the query string, but only to a longer value.")),l.a.createElement("h4",null,"Customize and test"),l.a.createElement(g.a,{baseUrl:s.a,exampleNamedParams:{},exampleQueryParams:{url:"https://shields.redsparr0w.com/2473/monday"},pattern:"/endpoint",title:"Custom badge"}),l.a.createElement(h.a,{baseUrl:s.a}))}}}]);
//# sourceMappingURL=component---frontend-pages-endpoint-js-3246cf3fb0eb2ee590bc.js.map
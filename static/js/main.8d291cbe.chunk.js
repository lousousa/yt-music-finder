(this["webpackJsonpyt-artist-finder"]=this["webpackJsonpyt-artist-finder"]||[]).push([[0],{35:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(24),r=a.n(c),i=(a(35),a(36),a(6)),l=a(7),o=a(12),u=a(11),d=a(14),h=a.n(d),x=a(15),m=a(25),j=a(4),b=a(26),p=a.n(b),f=a(27),v=a.n(f),O=a(8),y=a.n(O),g=a(9),w=y.a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{key:g.youTubeAPI,part:"snippet",maxResults:8,videoCategoryId:10,regionCode:"BR",type:"video"}}),N=y.a.create({baseURL:"https://app.ticketmaster.com/discovery/v2/",params:{apikey:g.ticketMasterDiscoveryAPI}}),T=a(10),k=a.n(T),D=a(0),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).search=function(){var e=Object(m.a)(h.a.mark((function e(t,a){var n,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({waiting:{search:!0}}),s.props.onYouTubeData(null),n={q:s.state.term},t?n.pageToken=t:s.props.setVideo(null),a&&(n.q=a),e.next=7,w.get("/search",{params:n});case 7:return c=e.sent,e.next=10,N.get("/events.json",{params:{keyword:s.state.term}});case 10:r=e.sent,s.props.onYouTubeData(Object(x.a)(Object(x.a)({},c.data),{},{term:a||s.state.term})),s.props.onTicketmasterData(r.data),s.setState({term:"",waiting:{search:!1}});case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),s.handleSubmit=function(e){e.preventDefault(),s.state.term.length>0&&s.search()},s.typeSearchText=function(e){s.setState({term:e.target.value})},s.clearSearchText=function(){s.setState({term:""}),s.props.onYouTubeData(null)},s.state={term:"",waiting:{search:!1}},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.waiting.search;return Object(D.jsx)("div",{className:"flex justify-center",children:e?Object(D.jsx)(k.a,{className:"my-12",type:"Oval",color:"#ef4444",height:32,width:32,timeout:3e3}):Object(D.jsxs)("form",{className:"w-full flex flex-wrap mt-12",children:[Object(D.jsxs)("div",{className:"w-full flex rounded-full hover:shadow-md",children:[Object(D.jsx)("div",{className:"w-1/6 text-xl text-gray-400 text-center border border-gray-300 rounded-l-full border-r-0 p-2",children:Object(D.jsx)(j.InlineIcon,{className:"inline",icon:p.a})}),Object(D.jsx)("input",{className:"w-4/6 text-xl text-gray-600 border-t border-b border-gray-300 focus:outline-none p-2",placeholder:"Search artist or band",type:"text",value:this.state.term,onChange:this.typeSearchText}),Object(D.jsx)("div",{className:"w-1/6 text-3xl text-gray-400 text-center border border-gray-300 rounded-r-full border-l-0 p-1",children:this.state.term.length>0&&Object(D.jsx)(j.InlineIcon,{className:"inline cursor-pointer",icon:v.a,onClick:this.clearSearchText})})]}),Object(D.jsx)("div",{className:"w-full mt-6",children:Object(D.jsx)("button",{type:"submit",className:"text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none",onClick:this.handleSubmit,children:"Search"})})]})})}}]),a}(s.Component),I=a(5),C=a(30),P=function(e){var t,a=Object(s.useState)(!1),n=Object(C.a)(a,2),c=n[0],r=n[1];return Object(s.useEffect)((function(){r(!0),window.setTimeout((function(){return r(!1)}),500)}),[e.video]),Object(D.jsx)("div",{className:"w-full flex flex-wrap justify-center items-center",children:c?Object(D.jsx)(k.a,{className:"my-12",type:"Oval",color:"#ef4444",height:32,width:32,timeout:3e3}):Object(D.jsxs)("div",{className:"mt-8 w-full flex flex-wrap justify-center",children:[Object(D.jsx)("iframe",{className:"max-w-full",width:"640",height:"360",src:e.video.url,title:e.video.url}),Object(D.jsxs)("div",(t={className:"max-w-full",style:{width:"640px"}},Object(I.a)(t,"className","text-left mt-2"),Object(I.a)(t,"children",[Object(D.jsx)("h1",{className:"font-bold",dangerouslySetInnerHTML:{__html:e.video.title}}),Object(D.jsx)("h2",{className:"text-gray-500",children:e.video.channelTitle})]),t))]})})},Y=a(28),F=a.n(Y),A=a(29),L=a.n(A),M=function(e){var t=e.data.items.map((function(t){return Object(D.jsx)("div",{className:"w-full sm:w-1/4 p-2",children:Object(D.jsxs)("div",{className:"cursor-pointer",value:t.id.videoId,onClick:function(){return e.onClickThumbnail({url:"https://www.youtube.com/embed/".concat(t.id.videoId),title:t.snippet.title,channelTitle:t.snippet.channelTitle})},children:[Object(D.jsx)("img",{className:"w-full",width:"320",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(D.jsx)("h1",{className:"font-bold",dangerouslySetInnerHTML:{__html:t.snippet.title}}),Object(D.jsx)("h2",{className:"text-gray-500",children:t.snippet.channelTitle})]})},t.id.videoId)}));return Object(D.jsxs)("div",{className:"w-full flex flex-wrap items-center",children:[Object(D.jsx)("div",{className:"hidden sm:block w-1/12 text-center",children:e.data.prevPageToken&&Object(D.jsx)(j.InlineIcon,{className:"inline text-6xl text-gray-600 cursor-pointer",onClick:e.onPrev,icon:F.a})}),Object(D.jsxs)("div",{className:"w-full sm:w-10/12",children:[Object(D.jsx)("div",{className:"p-2",children:Object(D.jsxs)("p",{children:["Showing results for: ",Object(D.jsx)("b",{children:e.data.term})]})}),Object(D.jsx)("div",{className:"flex flex-wrap",children:t})]}),Object(D.jsx)("div",{className:"hidden sm:block w-1/12 text-center",children:e.data.nextPageToken&&Object(D.jsx)(j.InlineIcon,{className:"inline text-6xl text-gray-600 cursor-pointer",onClick:e.onNext,icon:L.a})}),Object(D.jsxs)("div",{className:"sm:hidden flex w-full my-2 p-2",children:[Object(D.jsx)("div",{className:"w-1/2",children:e.data.prevPageToken&&Object(D.jsx)("button",{type:"button",className:"text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none",onClick:e.onPrev,children:"Previous"})}),Object(D.jsx)("div",{className:"w-1/2 text-right",children:e.data.nextPageToken&&Object(D.jsx)("button",{type:"button",className:"text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none",onClick:e.onNext,children:"Next"})})]})]})},V=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onYouTubeData=function(e){s.setState({youTubeData:e})},s.onTicketmasterData=function(e){s.setState({ticketmasterData:e})},s.onNext=function(){s.searchForm.current.search(s.state.youTubeData.nextPageToken,s.state.youTubeData.term)},s.onPrev=function(){s.searchForm.current.search(s.state.youTubeData.prevPageToken,s.state.youTubeData.term)},s.setVideo=function(e){s.setState({video:e})},s.searchForm=n.a.createRef(),s.state={youTubeData:null,ticketmasterData:null,video:null},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(D.jsxs)("div",{className:"max-w-screen-lg mx-auto min-h-screen flex flex-wrap justify-center py-6 px-4 content-center items-center",children:[Object(D.jsxs)("div",{className:"w-full sm:w-2/3 text-center",children:[Object(D.jsxs)("h2",{className:"text-3xl sm:text-5xl",children:[Object(D.jsx)("span",{className:"font-bold text-red-500",children:"YouTube"}),Object(D.jsx)("span",{className:"text-gray-600 font-thin",children:"\xa0Music Finder"})]}),this.state.video&&Object(D.jsx)("div",{className:"w-full flex justify-center",children:Object(D.jsx)(P,{video:this.state.video})}),Object(D.jsx)(S,{ref:this.searchForm,setVideo:this.setVideo,onYouTubeData:this.onYouTubeData,onTicketmasterData:this.onTicketmasterData})]}),this.state.youTubeData&&Object(D.jsx)("div",{className:"mt-4",children:Object(D.jsx)(M,{data:this.state.youTubeData,onNext:this.onNext,onPrev:this.onPrev,onClickThumbnail:this.setVideo})})]})}}]),a}(s.Component);a(77);var H=function(){return Object(D.jsx)(V,{})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(H,{})}),document.getElementById("root")),R()},9:function(e){e.exports=JSON.parse('{"youTubeAPI":"AIzaSyC-cwsPVq7y9KUDAOpYjogXYBh6jfCHwYE","ticketMasterDiscoveryAPI":"9eY3hihgHr3pGYsGyG159d3PU0IgYCdH"}')}},[[78,1,2]]]);
//# sourceMappingURL=main.8d291cbe.chunk.js.map
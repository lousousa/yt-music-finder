(this["webpackJsonpyt-artist-finder"]=this["webpackJsonpyt-artist-finder"]||[]).push([[0],{34:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(23),c=a.n(r),i=(a(34),a(35),a(5)),l=a(6),o=a(11),u=a(10),d=a(13),h=a.n(d),x=a(14),m=a(24),j=a(4),b=a(25),p=a.n(b),f=a(26),v=a.n(f),y=a(7),O=a.n(y),g=a(8),w=O.a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{key:g.youTubeAPI,part:"snippet",maxResults:8,videoCategoryId:10,regionCode:"BR",type:"video"}}),N=O.a.create({baseURL:"https://app.ticketmaster.com/discovery/v2/",params:{apikey:g.ticketMasterDiscoveryAPI}}),T=a(9),k=a.n(T),D=a(0),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).search=function(){var e=Object(m.a)(h.a.mark((function e(t,a){var s,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({waiting:{search:!0}}),n.props.onYouTubeData(null),s={q:n.state.term},t?s.pageToken=t:n.props.setVideo(null),a&&(s.q=a),e.next=7,w.get("/search",{params:s});case 7:return r=e.sent,e.next=10,N.get("/events.json",{params:{keyword:n.state.term}});case 10:c=e.sent,n.props.onYouTubeData(Object(x.a)(Object(x.a)({},r.data),{},{term:a||n.state.term})),n.props.onTicketmasterData(c.data),n.setState({term:"",waiting:{search:!1}});case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.handleSubmit=function(e){e.preventDefault(),n.state.term.length>0&&n.search()},n.typeSearchText=function(e){n.setState({term:e.target.value})},n.clearSearchText=function(){n.setState({term:""}),n.props.onYouTubeData(null)},n.state={term:"",waiting:{search:!1}},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.waiting.search;return Object(D.jsx)("div",{className:"flex justify-center",children:e?Object(D.jsx)(k.a,{className:"my-12",type:"Oval",color:"#ef4444",height:32,width:32,timeout:3e3}):Object(D.jsxs)("form",{className:"w-full flex flex-wrap mt-12",children:[Object(D.jsxs)("div",{className:"w-full flex rounded-full hover:shadow-md",children:[Object(D.jsx)("div",{className:"w-1/6 text-xl text-gray-400 text-center border border-gray-300 rounded-l-full border-r-0 p-2",children:Object(D.jsx)(j.InlineIcon,{className:"inline",icon:p.a})}),Object(D.jsx)("input",{className:"w-4/6 text-xl text-gray-600 border-t border-b border-gray-300 focus:outline-none p-2",placeholder:"Search artist or band",type:"text",value:this.state.term,onChange:this.typeSearchText}),Object(D.jsx)("div",{className:"w-1/6 text-3xl text-gray-400 text-center border border-gray-300 rounded-r-full border-l-0 p-1",children:this.state.term.length>0&&Object(D.jsx)(j.InlineIcon,{className:"inline cursor-pointer",icon:v.a,onClick:this.clearSearchText})})]}),Object(D.jsx)("div",{className:"w-full mt-6",children:Object(D.jsx)("button",{type:"submit",className:"text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none",onClick:this.handleSubmit,children:"Search"})})]})})}}]),a}(n.Component),I=a(29),C=function(e){var t=Object(n.useState)(!1),a=Object(I.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){r(!0),window.setTimeout((function(){return r(!1)}),500)}),[e.video]),Object(D.jsx)("div",{className:"w-full flex flex-wrap justify-center items-center",children:s?Object(D.jsx)(k.a,{className:"my-12",type:"Oval",color:"#ef4444",height:32,width:32,timeout:3e3}):Object(D.jsxs)("div",{className:"mt-8 w-full flex flex-wrap justify-center",children:[Object(D.jsx)("iframe",{className:"max-w-full",width:"640",height:"360",src:e.video.url,title:e.video.url}),Object(D.jsxs)("div",{className:"max-w-full text-left mt-2",style:{width:"640px"},children:[Object(D.jsx)("h1",{className:"font-bold",dangerouslySetInnerHTML:{__html:e.video.title}}),Object(D.jsx)("h2",{className:"text-gray-500",children:e.video.channelTitle})]})]})})},P=a(27),Y=a.n(P),F=a(28),A=a.n(F),L=function(e){var t=e.data.items.map((function(t){return Object(D.jsx)("div",{className:"w-full sm:w-1/4 p-2",children:Object(D.jsxs)("div",{className:"cursor-pointer",value:t.id.videoId,onClick:function(){return e.onClickThumbnail({url:"https://www.youtube.com/embed/".concat(t.id.videoId),title:t.snippet.title,channelTitle:t.snippet.channelTitle})},children:[Object(D.jsx)("img",{className:"w-full",width:"320",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(D.jsx)("h1",{className:"font-bold",dangerouslySetInnerHTML:{__html:t.snippet.title}}),Object(D.jsx)("h2",{className:"text-gray-500",children:t.snippet.channelTitle})]})},t.id.videoId)}));return Object(D.jsxs)("div",{className:"w-full flex flex-wrap items-center",children:[Object(D.jsx)("div",{className:"hidden sm:block w-1/12 text-center",children:e.data.prevPageToken&&Object(D.jsx)(j.InlineIcon,{className:"inline text-6xl text-gray-600 cursor-pointer",onClick:e.onPrev,icon:Y.a})}),Object(D.jsxs)("div",{className:"w-full sm:w-10/12",children:[Object(D.jsx)("div",{className:"p-2",children:Object(D.jsxs)("p",{children:["Showing results for: ",Object(D.jsx)("b",{children:e.data.term})]})}),Object(D.jsx)("div",{className:"flex flex-wrap",children:t})]}),Object(D.jsx)("div",{className:"hidden sm:block w-1/12 text-center",children:e.data.nextPageToken&&Object(D.jsx)(j.InlineIcon,{className:"inline text-6xl text-gray-600 cursor-pointer",onClick:e.onNext,icon:A.a})}),Object(D.jsxs)("div",{className:"sm:hidden flex w-full my-2 p-2",children:[Object(D.jsx)("div",{className:"w-1/2",children:e.data.prevPageToken&&Object(D.jsx)("button",{type:"button",className:"text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none",onClick:e.onPrev,children:"Previous"})}),Object(D.jsx)("div",{className:"w-1/2 text-right",children:e.data.nextPageToken&&Object(D.jsx)("button",{type:"button",className:"text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none",onClick:e.onNext,children:"Next"})})]})]})},M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onYouTubeData=function(e){n.setState({youTubeData:e})},n.onTicketmasterData=function(e){n.setState({ticketmasterData:e})},n.onNext=function(){n.searchForm.current.search(n.state.youTubeData.nextPageToken,n.state.youTubeData.term)},n.onPrev=function(){n.searchForm.current.search(n.state.youTubeData.prevPageToken,n.state.youTubeData.term)},n.setVideo=function(e){n.setState({video:e})},n.searchForm=s.a.createRef(),n.state={youTubeData:null,ticketmasterData:null,video:null},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(D.jsxs)("div",{className:"max-w-screen-lg mx-auto min-h-screen flex flex-wrap justify-center py-6 px-4 content-center items-center",children:[Object(D.jsxs)("div",{className:"w-full sm:w-2/3 text-center",children:[Object(D.jsxs)("h2",{className:"text-3xl sm:text-5xl",children:[Object(D.jsx)("span",{className:"font-bold text-red-500",children:"YouTube"}),Object(D.jsx)("span",{className:"text-gray-600 font-thin",children:"\xa0Music Finder"})]}),this.state.video&&Object(D.jsx)("div",{className:"w-full flex justify-center",children:Object(D.jsx)(C,{video:this.state.video})}),Object(D.jsx)(S,{ref:this.searchForm,setVideo:this.setVideo,onYouTubeData:this.onYouTubeData,onTicketmasterData:this.onTicketmasterData})]}),this.state.youTubeData&&Object(D.jsx)("div",{className:"mt-4",children:Object(D.jsx)(L,{data:this.state.youTubeData,onNext:this.onNext,onPrev:this.onPrev,onClickThumbnail:this.setVideo})})]})}}]),a}(n.Component);a(76);var V=function(){return Object(D.jsx)(M,{})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(V,{})}),document.getElementById("root")),H()},8:function(e){e.exports=JSON.parse('{"youTubeAPI":"AIzaSyC-cwsPVq7y9KUDAOpYjogXYBh6jfCHwYE","ticketMasterDiscoveryAPI":"9eY3hihgHr3pGYsGyG159d3PU0IgYCdH"}')}},[[77,1,2]]]);
//# sourceMappingURL=main.da273610.chunk.js.map
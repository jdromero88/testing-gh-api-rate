!function(t){var e={};function a(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){t.exports=a(2)},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n);var o=()=>{let t=s()(window).height()/2;s()(window).scroll((function(){s()(this).scrollTop()<t?s()(".backToTop-container").fadeOut(500):s()(".backToTop-container").fadeIn(500)})),s()(".backToTop-container").on("click",(function(){return s()("html, body").animate({scrollTop:0},250),!1}))};var i=()=>{if(s()(".breadcrumbs-extended").length){let t=s()(".header-breadcrumbsContainer"),e=s()(".breadcrumbs-extended"),a=s()(".site-header").height(),n=e.outerHeight();"none"!=s()(".tableOfContents-dropdown").css("display")&&s()(".tableOfContents.fixedMobile").css({position:"static"}),s()(document).scroll((function(){s()(this).scrollTop()>=n&&t.hasClass("useExtended")?(t.removeClass("useExtended").addClass("notExtended"),"none"!=s()(".tableOfContents-dropdown").css("display")&&s()(".tableOfContents.fixedMobile").css({position:"fixed",top:a+"px","z-index":51})):s()(this).scrollTop()<=n&&t.hasClass("notExtended")&&(t.removeClass("notExtended").addClass("useExtended"),"none"!=s()(".tableOfContents-dropdown").css("display")&&s()(".tableOfContents.fixedMobile").css({position:"static",top:"initial","z-index":"initial"}))}))}if(s()(".header-breadcrumbs").height()>s()(".header-breadcrumbsContainer").height()){s()(".header-breadcrumbsContainer").css({height:"initial","padding-top":"0.2rem","padding-bottom":"0.2rem"});let t=s()(".site-header").outerHeight();s()("body").css("padding-top",t)}};var r=()=>{s()(".home-body").length&&(s()(".home-dropdownContainer button").click((function(){let t=s()(this).attr("id");s()("#"+t).closest(".home-dropdownContainer").toggleClass("open"),s()(".home-dropdownMenu[data-dropdown='"+t+"']").slideToggle()})),s()(document).click((function(t){s()(t.target).closest(".home-dropdownContainer").length||s()(".home-dropdownContainer").hasClass("open")&&(s()(".home-dropdownContainer .home-dropdownMenu").slideUp(),s()(".home-dropdownContainer").removeClass("open"))})))};var l=()=>{Array.from(document.getElementsByClassName("progress-wrap")).map((function(t){return t.getAttribute("data-progress-percent")})).push(100),Array.from(document.getElementsByClassName("progress-wrap")).forEach((function(t){let e=t.getAttribute("data-progress-percent");e>=95?(t.children[0].style.width=e,t.classList.add("over-100")):t.children[0].style.width=e+"%"}));let t=document.querySelectorAll(".tip-content");window.onmousemove=function(e){let a=e.clientX+20+"px",n=e.clientY+20+"px";for(let e=0;e<t.length;e++)t[e].style.top=n,t[e].style.left=a}};var c=()=>{let t=s()("#nav-toggle").css("display");"none"!=t&&(s()("#nav-toggle").click((function(){s()(this).toggleClass("active")})),s()(".ss-nav > a").click((function(t){t.preventDefault(),s()(this).siblings("ul").toggle()})),s()(".header-navigationSiteOverlay").click((function(){s()("#toggleMenu").prop("checked",!1),s()("#nav-toggle").toggleClass("active")}))),s()(window).resize((function(){t=s()("#nav-toggle").css("display")}))};var d=()=>{function t(){if(0==s()(".pagination-posts-container").length)return;let t,a,n,o=window.location.hash.replace("#",""),i=1;o?(t=o.substr(o.indexOf("subsector=")).split("&")[0].split("=")[1],a=o.substr(o.indexOf("sort=")).split("&")[0].split("=")[1],n=o.substr(o.indexOf("order=")).split("&")[0].split("=")[1],i=o.substr(o.indexOf("page=")).split("&")[0].split("=")[1],t&&(s()("a.sort-attribute").each((function(){let e=s()(this).attr("href"),a=s()(this).data("sort"),n="#subsector="+t+"&"+a;s()(this).attr("href",e.replace(e,n))})),s()(".subsector-link").removeClass("active"),s()(".subsector-link[data-show-subsector='"+t+"']").first().addClass("active")),s()("a.sort-attribute").removeClass("active"),s()("a.sort-attribute[data-sort='sort="+a+"&order="+n+"']").addClass("active")):s()(".subsector-link[data-show-subsector='all']").addClass("active"),a||(s()(".sort-attribute").removeClass("active"),s()("a.sort-attribute[data-sort='sort=date&order=desc']").addClass("active")),s()(".pagination-pagesContainer a").removeClass("active"),s()('.pagination-pagesContainer a[data-page="'+i+'"]').addClass("active"),function(t,a,n,o){a=a||"date",n=n||"desc",o=o||1;let i,r,l,c,d=0;"undefined"===subsectorFiltering||1!=subsectorFiltering||t||(t="all");o>1?(i=posts_per_page*(o-1),r=posts_per_page*o-1):(i=0,r=posts_per_page-1);s()(".pagination-posts-container").empty(),"date"==a?(l=t?postsPaginateMainObject[t]:postsPaginateMain,c=!1):(l=t?postsPaginateSecondaryObject[t]:postsPaginateSecondary,c=!0);1==subsectorFiltering&&"all"!=t?(s()(".subsectorFiltering-subsectorTitle").html(subsectorInfoObject[t].title),s()(".subsectorFiltering-subsectorTitle").show("fast"),s()(".subsectorFiltering-subsectorInfo span").html(s.a.parseHTML(unescape(subsectorInfoObject[t].content))),s()(".subsectorFiltering-subsectorInfo").show("fast")):"all"==t&&(s()(".subsectorFiltering-subsectorTitle").hide("fast"),s()(".subsectorFiltering-subsectorInfo").hide("fast"));if(null==l||0==l.length)s()(".pagination-totalResults").html("0 total results"),s()(".pagination-posts-container").html("<p class='noResults'>There are currently no related articles in this subsector.</p>"),s()(".pagination-pagesContainer").empty();else{"desc"==n?l.sort(e("-"+a)):l.sort(e(a)),d=l.length,!function(t,e,a){s.a.each(t,(function(t,n){let o;if(n.state){let t=n.state.replace(" ","");e&&0==s()("#"+t).length&&(o=subsectorFiltering?postsPaginateSecondaryTotal[n.state][a]:postsPaginateSecondaryTotal[n.state],s()(".pagination-posts-container").append("<h3 class='sectionTitle pagination-sectionTitle' id='"+t+"'>"+n.state+"</h3>"))}else if(n.sector){let t=n.sector.replace(" ","");e&&0==s()("#"+t).length&&s()(".pagination-posts-container").append("<h3 class='sectionTitle pagination-sectionTitle' id='"+t+"'>"+n.sector+"</h3>")}s()(".pagination-posts-container").append(s.a.parseHTML(unescape(n.postHtml)))}))}(l.slice(i,r+1),c,t),function(t,e,a,n,o,i){let r,l=Math.ceil(t/posts_per_page);if(s()(".pagination-pagesContainer").empty(),l>1){if(r=a?"#subsector="+a+"&amp;sort="+n+"&amp;order="+o+"&amp;page=":"#sort="+n+"&amp;order="+o+"&amp;page=",(i=parseInt(i))>1){s()(".pagination-pagesContainer").append("<a href='"+r+"1' data-page='1' class='next-prev'>«</a>");let t=i-1;s()(".pagination-pagesContainer").append("<a href='"+r+t+"' data-page='"+t+"' class='next-prev'>&#8249; Previous</a>")}let t,e,c;l>5&&i>=4?(t=i-2,e=i+2>l?l:i+2):l>5&&i<4?(t=1,e=5):(t=1,e=l);for(let a=t;a<=e;a++)c=a==i?"active":"",s()(".pagination-pagesContainer").append("<a href='"+r+a+"' class='"+c+"' data-page='"+a+"'><button class='btn-gray'>"+a+"</button></a>");if(i<l){let t=i+1;s()(".pagination-pagesContainer").append("<a href='"+r+t+"' data-page='"+t+"' class='next-prev'>Next &#8250;</a>"),s()(".pagination-pagesContainer").append("<a href='"+r+l+"' data-page='"+l+"' class='next-prev'>»</a>")}}s()(".pagination-totalResults").html(t+" total results | Page "+i+" of "+l)}(d,0,t,a,n,o)}}(t,a,n,i)}function e(t){let e=1;return"-"===t[0]&&(e=-1,t=t.substr(1)),function(a,n){if(!a.is_featured&&n.is_featured)return 1;if(a.is_featured&&!n.is_featured)return-1;return(a[t]<n[t]?-1:a[t]>n[t]?1:0)*e}}window.onhashchange=t,t(),s()(".sort-dropdown").length&&s()(".sort-dropdown").on("change",(function(){let t=s()(this).val();window.location=t})),s()(".pagination-pagesContainer").on("click","a",(function(){let t=s()(".pagination-sortByContainer").offset().top-s()(".site-header").outerHeight();s()("html, body").scrollTop(t)}))};var p=()=>{let t=window.location.hash.replace("#",""),e=t.substr(t.indexOf("subsector=")).split("&")[0].split("=")[1],a=s()(".post-listing").data("sector");function n(t,e){s()(".post-listing[data-sector='"+t+"'] .active").removeClass("active").addClass("hidden"),s()(".post-listing[data-sector='"+t+"'] [data-subsector='"+e+"']").removeClass("hidden").addClass("active")}e&&n(a,e),s()(".subsector-link").click((function(){n(s()(this).data("sector"),s()(this).data("show-subsector"))}))};var h=()=>{s()("body").on("click",".share-print.printIndividual",(function(){let t=s()(this).parents(".post-articleContainer"),e=s()(".page-content").html(),a=t.html();s()(".page-content").html(a),window.print(),s()(".page-content").html(e)})),s()("body").on("click",".share-print.printEntire",(function(){s()(".printable").removeClass("printable"),s()("body").addClass("printable"),window.print()})),s()("body").on("click",".share-social",(function(t){t.preventDefault()})),s()(".share-social").hover((function(){s()(this).children(".share-socialContainer").show()}),(function(){s()(this).children(".share-socialContainer").hide()}))};var u=()=>{s()("body").on("click",".post-articleShowMoreMeta img",(function(){let t=s()(this).parent(".post-articleShowMoreMeta").data("post");s()(this).hide(),s()(this).siblings().show(),s()(".post-articleExtraMetaIndicator[data-post='"+t+"']").toggle(),s()(".post-articleExtraMeta[data-post='"+t+"']").toggle(),"block"==s()(".post-articleExtraMeta[data-post='"+t+"']").css("display")&&s()(".post-articleExtraMeta[data-post='"+t+"']").css("display","inline")}))};var g=()=>{s()("a.smoothScroll").on("click",(function(t){if(""!==this.hash){t.preventDefault();const e=this.hash;s()("html, body").animate({scrollTop:s()(e).offset().top-200},800,(function(){window.location.hash=e}))}}))};function f(t,e){let a=s()("path#"+t+", #"+t+" path");"highlight"==e?a.addClass("active"):a.removeClass("active")}function b(t,e){let a=s()("a[data-state='"+t+"']");"highlight"==e?a.addClass("active"):a.removeClass("active")}var m=()=>{s()(".statesLanding-mainContent").length&&(s()(".stateLink").hover((function(){f(s()(this).data("state"),"highlight")}),(function(){f(s()(this).data("state"),"unhighlight")})),s()("#map path, #map g, #map polygon").not(s()(".nolink")).hover((function(){let t=s()(this).attr("id");b(t,"highlight"),f(t,"highlight")}),(function(){let t=s()(this).attr("id");b(t,"unhighlight"),f(t,"unhighlight")})),s()("#map path.nolink, #map g.nolink").hover((function(t){let e=t.clientX+20+"px",a=t.clientY+20+"px",n=s()(this).attr("id").replace(/-/g," ");n=n.toUpperCase(),s()(".statesLanding-map").append("<div class='tooltip' style='top: "+a+"; left: "+e+"'><span>"+n+"</span><br /> No data available.</div>")}),(function(){s()(".statesLanding-map .tooltip").remove()})),s()("#map path, #map g, #map polygon").not(s()(".nolink")).click((function(){let t=s()(this).attr("id");location.href="/states/"+t})))};var w=()=>{if(s()(".isSticky").length){let t=s()(".site-header").outerHeight()+32;s.a.fn.followTo=function(){let e=this,a=e.width(),n=e[0].getBoundingClientRect(),o=e.parent(".tableOfContents")[0].getBoundingClientRect(),i=o.top+window.scrollY-t,r=o.bottom+window.scrollY-t;window.scrollY>i&&window.scrollY<r&&(e.css({position:"fixed",top:t,width:a}),i=o.top+window.scrollY-t,r=o.bottom+window.scrollY-t);let l=n.bottom+window.scrollY,c=o.bottom+window.scrollY-t-e.height();s()(window).scroll((function(){window.scrollY>i&&window.scrollY<l?e.css({position:"fixed",top:t,width:a}):(window.scrollY<i||window.scrollY>c)&&e.css({position:"initial",top:0})}))},s()(".isSticky").each((function(){s()(this).followTo()}))}s()(".tableOfContents-dropdown").length&&s()(".tableOfContents-dropdown").on("change",(function(){let t=s()(this).val();window.location=t,"#"!=t?s()(".tableOfContents-instructions").css("display","inline-block"):s()(".tableOfContents-instructions").hide()}))};window.addEventListener("DOMContentLoaded",()=>{o(),i(),r(),l(),c(),d(),p(),h(),u(),g(),m(),w(),s()(".site-header .search-icon").click((function(){-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0?location.href="/search/":s()(".search-overlay").show()})),document.onkeydown=function(t){let e=!1;e="key"in(t=t||window.event)?"Escape"==t.key||"Esc"==t.key:27==t.keyCode,e&&s()(".search-overlay").hide()},s()(".search-overlay .search-closeIcon").click((function(){s()(".search-overlay").hide()})),(()=>{function t(t){return document.querySelector("#"+t+"-template").innerHTML}function e(t){return'<h4 class="sectionSubtitle">'+t+"</h4>"}s()(".search-container").length<0||function(a){let n=instantsearch({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,urlSync:!0});n.addWidget(instantsearch.widgets.searchBox({container:"#search-input",placeholder:"Search"})),n.addWidget(instantsearch.widgets.hits({container:"#hits",hitsPerPage:10,templates:{item:t("hit"),empty:t("no-results")},transformData:{item:function(t){return"Articles"==t.content_type||"Analysis"==t.content_type?t.formattedDate='<span class="articleMeta hit-date">Posted on <span class="articleDate">'+t.date+"</span></span>":t.formattedDate=null,t}}})),n.addWidget(instantsearch.widgets.stats({container:"#stats",templates:{body:"{{{nbHits}}} total results | Page {{{currentPage}}} of {{{nbPages}}}"},transformData:function(t){return{currentPage:t.page+1,nbHits:t.nbHits,nbPages:t.nbPages}}})),n.addWidget(instantsearch.widgets.sortBySelector({container:"#sort-by",autoHideContainer:!0,indices:[{name:a.indexName,label:"Date DESC"},{name:"india_states_date_asc",label:"Date ASC"}]})),n.addWidget(instantsearch.widgets.pagination({container:"#pagination",scrollTo:"#search-input",labels:{previous:"&#8249; Previous",next:"Next &#8250;"}})),n.addWidget(instantsearch.widgets.refinementList({container:"#content_type",attributeName:"content_type",sortBy:["isRefined","count:desc","name:asc"],limit:10,operator:"or",templates:{header:e("Type")}})),n.addWidget(instantsearch.widgets.refinementList({container:"#states",attributeName:"states",sortBy:["isRefined","count:desc","name:asc"],limit:10,operator:"or",templates:{header:e("States")},searchForFacetValues:{placeholder:"Search for states",templates:{noResults:'<div class="sffv_no-results">No matching states.</div>'}}})),n.addWidget(instantsearch.widgets.refinementList({container:"#sectors",attributeName:"sectors",sortBy:["isRefined","count:desc","name:asc"],limit:10,operator:"or",templates:{header:e("Sectors")}})),n.addWidget(instantsearch.widgets.refinementList({container:"#tags",attributeName:"tags",sortBy:["isRefined","count:desc","name:asc"],limit:10,operator:"or",searchForFacetValues:{placeholder:"Search for tags",templates:{noResults:'<div class="sffv_no-results">No matching tags.</div>'}},templates:{header:e("Tags")}})),n.start()}({appId:"7UNKAH6RMH",apiKey:"b9011cf7f49e60630161fcacf0e37d02",indexName:"india_states"})})()})}]);
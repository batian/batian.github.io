webpackJsonp([1,2],[,,,,,function(t,e,n){"use strict";var a=n(20),s=n.n(a);e.a={getdata:function(t){s.a.get("https://bird.ioliu.cn/v1/?url=http://v.juhe.cn/toutiao/index?type=&key=fd3f7fc7f0aa529f06cfd38fb46c1f15").then(function(e){t(e.data.result.data)})},getnews:function(t){var e=Date.parse(new Date).toString();e=e.substr(0,10);var n="http://japi.juhe.cn/joke/content/list.from?sort=&page=&pagesize=20&time="+e+"&key=4938e9af16277c6209ca00a683d96849";s.a.get("https://bird.ioliu.cn/v1/?url="+n).then(function(e){t(e.data.result.data)})},getimgs:function(t){s.a.get("https://bird.ioliu.cn/joke/rand",{params:{pagesize:20}}).then(function(e){t(e.data.data)})}}},,,,,,,,function(t,e,n){n(53);var a=n(1)(n(62),n(45),null,null);t.exports=a.exports},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";var a=n(2),s=n(61),i=n(39),o=n.n(i),r=n(42),u=n.n(r),c=n(41),l=n.n(c),f=n(44),p=n.n(f);a.default.use(s.a),e.a=new s.a({routes:[{path:"/",component:o.a},{path:"/movies",component:o.a},{path:"/pictures",component:u.a},{path:"/music",component:l.a},{path:"/books",component:p.a}]})},function(t,e,n){"use strict";var a=n(2),s=n(60),i=n(69),o=n(71),r=n(70);a.default.use(s.a),e.a=new s.a.Store({modules:{hello:i.a,news:o.a,imgs:r.a}})},,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(55);var a=n(1)(n(63),n(47),null,null);t.exports=a.exports},function(t,e,n){n(56);var a=n(1)(n(64),n(48),null,null);t.exports=a.exports},function(t,e,n){n(57);var a=n(1)(n(65),n(49),null,null);t.exports=a.exports},function(t,e,n){n(54);var a=n(1)(n(66),n(46),null,null);t.exports=a.exports},function(t,e,n){n(59);var a=n(1)(n(67),n(51),null,null);t.exports=a.exports},function(t,e,n){n(58);var a=n(1)(n(68),n(50),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Topbar"),t._v(" "),n("Navbar"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pictures"},[n("mu-list",[n("mu-list-item",{attrs:{title:"个人中心"}},[n("mu-icon",{attrs:{value:"perm_identity"},slot:"left"})],1),t._v(" "),n("mu-list-item",{attrs:{title:"收藏"}},[n("mu-icon",{attrs:{value:"grade"},slot:"left"})],1),t._v(" "),n("mu-list-item",{attrs:{title:"发表"}},[n("mu-icon",{attrs:{value:"send"},slot:"left"})],1),t._v(" "),n("mu-list-item",{attrs:{title:"邮件"}},[n("mu-icon",{attrs:{value:"drafts"},slot:"left"})],1)],1),t._v(" "),n("mu-divider")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},t._l(t.list.aaa,function(e){return n("div",[n("mu-paper",{staticClass:"demo-paper",attrs:{zDepth:2}},[n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:e.thumbnail_pic_s}}),t._v(" "),n("p",[t._v(t._s(e.title))])])])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav2"},[n("mu-paper",{staticStyle:{"max-width":"376px"}},[n("mu-bottom-nav",{attrs:{value:t.bottomNav},on:{change:t.handleChange}},[n("mu-bottom-nav-item",{attrs:{value:"movies",title:"笑话",icon:"ondemand_video"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"music",title:"新闻",icon:"music_note"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"books",title:"图片",icon:"books"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"pictures",title:"个人中心",icon:"photo"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},t._l(t.list.aaa,function(e){return n("div",[n("mu-paper",{staticClass:"demo-paper",attrs:{zDepth:2}},[n("p",[t._v(t._s(e.content))])])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},t._l(t.list.aaa,function(e){return n("div",[n("mu-paper",{staticClass:"demo-paper",attrs:{zDepth:2}},[n("p",[t._v(t._s(e.content))]),t._v(" "),n("img",{staticClass:"imgs",attrs:{src:e.url}})])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbar"},[n("mu-appbar",{attrs:{title:""}},[n("mu-icon-button",{attrs:{icon:"keyboard_arrow_left"},on:{click:t.back},slot:"left"}),t._v(" "),n("mu-icon-button",{attrs:{icon:"loop"},on:{click:t.f5},slot:"right"})],1)],1)},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(40),s=n.n(a),i=n(43),o=n.n(i);e.default={components:{Navbar:s.a,Topbar:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3);n.n(a);e.default={data:function(){return{msg:"mous"}},created:function(){this.$store.dispatch("getJock")},computed:{list:function(){return{aaa:this.$store.state.hello.list}}},component:{Swipe:a.Swipe,SwipeItem:a.SwipeItem}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{bottomNav:"movies",bottomNavColor:"movies"}},methods:{handleChange:function(t){this.bottomNav=t,this.$router.push("/"+t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3);n.n(a);e.default={data:function(){return{msg:"新闻"}},created:function(){this.$store.dispatch("getNews")},computed:{list:function(){return{aaa:this.$store.state.news.news}}},component:{Swipe:a.Swipe,SwipeItem:a.SwipeItem}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{text:"笑话"}},methods:{back:function(){this.$router.go(-1)},f5:function(){location.reload()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3);n.n(a);e.default={data:function(){return{msg:"新闻"}},created:function(){this.$store.dispatch("getImgs")},computed:{list:function(){return{aaa:this.$store.state.imgs.imgs}}},component:{Swipe:a.Swipe,SwipeItem:a.SwipeItem}}},function(t,e,n){"use strict";var a=n(5),s={list:[]},i={getJock:function(t){var e=t.commit;a.a.getdata(function(t){e("GETDATA",{res:t})})}},o={GETDATA:function(t,e){var n=e.res;t.list=n}};e.a={state:s,actions:i,mutations:o}},function(t,e,n){"use strict";var a=n(5),s={imgs:[]},i={getImgs:function(t){var e=t.commit;a.a.getimgs(function(t){e("GETIMGS",{res:t})})}},o={GETIMGS:function(t,e){var n=e.res;t.imgs=n}};e.a={state:s,actions:i,mutations:o}},function(t,e,n){"use strict";var a=n(5),s={news:[]},i={getNews:function(t){var e=t.commit;a.a.getnews(function(t){e("GETNEWS",{res:t})})}},o={GETNEWS:function(t,e){var n=e.res;t.news=n}};e.a={state:s,actions:i,mutations:o}},,,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=n(13),i=n.n(s),o=n(17),r=n(18),u=n(3),c=n.n(u),l=n(14),f=(n.n(l),n(19)),p=n.n(f),m=n(15),d=(n.n(m),n(16));n.n(d);a.default.use(p.a),a.default.use(c.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:i.a}})}],[76]);
//# sourceMappingURL=app.78c42d7fac01e001c63e.js.map
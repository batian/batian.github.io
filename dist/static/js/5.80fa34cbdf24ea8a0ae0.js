webpackJsonp([5],{580:function(t,n,i){i(617);var e=i(9)(i(598),i(629),"data-v-408d5c6c",null);t.exports=e.exports},592:function(t,n,i){"use strict";function e(){var t=a()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return i.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function o(t){var n=a()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return i.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.c)}n.b=e,n.a=o;var A=i(88),a=i.n(A),s=i(199),l=i(64)},598:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(56),o=i.n(e),A=i(65),a=i.n(A),s=i(200),l=i.n(s),c=i(592),r=i(64),p=i(87),d=i(47);n.default={mixins:[p.c],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:o()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;i.i(c.b)().then(function(n){n.code===r.a&&(t.topList=n.data.topList)})}},i.i(d.b)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:a.a,Loading:l.a}}},607:function(t,n,i){n=t.exports=i(577)(!0),n.push([t.i,".rank[data-v-408d5c6c]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-408d5c6c]{height:100%;overflow:hidden}.rank .toplist .item[data-v-408d5c6c]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-408d5c6c]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-408d5c6c]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-408d5c6c]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-408d5c6c]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-408d5c6c]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["E:/vue-music(code)/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-408d5c6c] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-408d5c6c] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-408d5c6c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-408d5c6c]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-408d5c6c] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-408d5c6c] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-408d5c6c] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-408d5c6c] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},617:function(t,n,i){var e=i(607);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(578)("7d8d6237",e,!0)},629:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"rank",staticClass:"rank"},[i("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[i("ul",t._l(t.topList,function(n){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(n)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),i("ul",{staticClass:"songlist"},t._l(n.songList,function(n,e){return i("li",{staticClass:"song"},[i("span",[t._v(t._s(e+1))]),t._v(" "),i("span",[t._v(t._s(n.songname)+"-"+t._s(n.singername))])])}))])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.80fa34cbdf24ea8a0ae0.js.map
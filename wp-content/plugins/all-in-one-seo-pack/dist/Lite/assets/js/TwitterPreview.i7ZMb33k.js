import{a as h,u as S,t as f}from"./links.rndHrQjc.js";import{B as v}from"./Img.C6u5nam7.js";import{b as w}from"./Caret.iRBf3wcH.js";import{S as y}from"./Book.BwJHPER-.js";import{S as C}from"./Profile.vTi7bzTi.js";import{x as a,o as i,c as b,a as e,C as c,t as r,H as k,k as I,l,d,N as B,O as x,q as N,D as A,L as D,M as L}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as O}from"./_plugin-vue_export-helper.BN1snXvA.js";const V={setup(){return{optionsStore:h(),rootStore:S()}},components:{BaseImg:v,CoreLoader:w,SvgBook:y,SvgDannieProfile:C},props:{card:String,description:{type:String,required:!0},image:String,loading:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{canShowImage:!1}},computed:{appName(){return"All in One SEO"},getCard(){return this.card==="default"?this.optionsStore.options.social.twitter.general.defaultCardType:this.card}},methods:{maybeCanShow(o){this.canShowImage=o},truncate:f}},q=o=>(D("data-v-3ab503eb"),o=o(),L(),o),P={class:"aioseo-twitter-preview"},T={class:"twitter-post"},z={class:"twitter-header"},E={class:"profile-photo"},R={class:"poster"},H={class:"poster-name"},M=q(()=>e("div",{class:"poster-username"}," @aioseopack ",-1)),U={class:"twitter-content"},j={class:"twitter-site-description"},F={class:"site-domain"},G={class:"site-title"},J={class:"site-description"};function K(o,Q,t,m,n,s){const _=a("svg-dannie-profile"),u=a("svg-book"),p=a("core-loader"),g=a("base-img");return i(),b("div",P,[e("div",T,[e("div",z,[e("div",E,[c(_)]),e("div",R,[e("div",H,r(s.appName),1),M])]),e("div",{class:k(["twitter-container",t.image?s.getCard:"summary"])},[e("div",U,[e("div",{class:"twitter-image-preview",style:I({backgroundImage:s.getCard==="summary"&&n.canShowImage?`url('${t.image}')`:""})},[!t.loading&&(!t.image||!n.canShowImage)?(i(),l(u,{key:0})):d("",!0),t.loading?(i(),l(p,{key:1})):d("",!0),B(c(g,{src:t.image,debounce:!1,onCanShow:s.maybeCanShow},null,8,["src","onCanShow"]),[[x,s.getCard==="summary_large_image"&&n.canShowImage]])],4),e("div",j,[e("div",F,[N(o.$slots,"site-url",{},()=>[A(r(m.rootStore.aioseo.urls.domain),1)],!0)]),e("div",G,r(s.truncate(t.title,70)),1),e("div",J,r(s.truncate(t.description,105)),1)])])],2)])])}const oe=O(V,[["render",K],["__scopeId","data-v-3ab503eb"]]);export{oe as C};

import{k as t,o as a,c as s,w as e,i as l,a as o,b as h,t as r,l as i,m as c,g as d,h as u}from"./index-735f3df1.js";import{_ as n}from"./_plugin-vue_export-helper.1b428a4d.js";const f=n({data:()=>({totalScore:"无",state:"抗/促炎饮食",health:"有/不利于健康。"}),onShow(){let a=t("totalScore");this.totalScore=a,this.totalScore>0?(this.state="促炎饮食，",this.health="不利于健康。"):this.totalScore<0?(this.state="抗炎饮食，",this.health="有利于健康。"):0==this.totalScore?(this.state="既不是抗炎饮食也不是促炎饮食。",this.health=""):(this.state="",this.health="")}},[["render",function(t,n,f,_,p,m){const S=d,b=u,g=l;return a(),s(g,null,{default:e((()=>[o(S,{src:"/healthy-diet-h5/assets/doctor-ab024898.png",mode:"",class:"doctor"}),o(g,{class:"score"},{default:e((()=>[o(b,null,{default:e((()=>[h("您的膳食炎症评分为")])),_:1}),o(b,{class:"num"},{default:e((()=>[h(r(p.totalScore)+"分",1)])),_:1}),p.state?(a(),s(g,{key:0,style:{display:"block","margin-bottom":"5px"}},{default:e((()=>[h(" 表示为"),o(b,null,{default:e((()=>[h(r(p.state),1)])),_:1}),i("br")])),_:1})):c("",!0),o(b,null,{default:e((()=>[h(r(p.health),1)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3879395f"]]);export{f as default};

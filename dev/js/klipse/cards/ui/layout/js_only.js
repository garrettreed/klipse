// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.cards.ui.layout.js_only');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('klipse.ui.layout');
goog.require('devcards.core');
/**
 * @constructor
 */
klipse.cards.ui.layout.js_only.Root_computed = (function klipse$cards$ui$layout$js_only$Root_computed(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.cards.ui.layout.js_only.Root_computed.prototype = goog.object.clone(React.Component.prototype);

var x34153_34253 = klipse.cards.ui.layout.js_only.Root_computed.prototype;
x34153_34253.componentWillUpdate = ((function (x34153_34253){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___34258 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___34259 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___34258,next_ident__21730__auto___34259)){
var idxr__21731__auto___34270 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___34270 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___34270),((function (idxr__21731__auto___34270,ident__21729__auto___34258,next_ident__21730__auto___34259,this__21725__auto__,x34153_34253){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___34258], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___34259], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___34270,ident__21729__auto___34258,next_ident__21730__auto___34259,this__21725__auto__,x34153_34253))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x34153_34253))
;

x34153_34253.shouldComponentUpdate = ((function (x34153_34253){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__34162 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34162);
} else {
return G__34162;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34169 = this__21725__auto__.state;
var G__34170 = "omcljs$state";
return goog.object.get(G__34169,G__34170);
})(),goog.object.get(next_state__21727__auto__,"omcljs$state"));
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__21725__auto__.props.children,next_children__21728__auto__);
}
}
});})(x34153_34253))
;

x34153_34253.componentWillUnmount = ((function (x34153_34253){
return (function (){
var this__21725__auto__ = this;
var r__21736__auto__ = om.next.get_reconciler(this__21725__auto__);
var cfg__21737__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__21736__auto__);
var st__21738__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__21737__auto__);
var indexer__21735__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__21737__auto__);
if(cljs.core.truth_((function (){var and__6209__auto__ = !((st__21738__auto__ == null));
if(and__6209__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__21738__auto__) : cljs.core.deref.call(null,st__21738__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__21725__auto__], null));
} else {
return and__6209__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__21738__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__21725__auto__], 0));
} else {
}

if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x34153_34253))
;

x34153_34253.componentDidUpdate = ((function (x34153_34253){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x34153_34253))
;

x34153_34253.isMounted = ((function (x34153_34253){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34153_34253))
;

x34153_34253.componentWillMount = ((function (x34153_34253){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x34153_34253))
;

x34153_34253.render = ((function (x34153_34253){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_34230 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34231 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34232 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34233 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34234 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__34239 = {"className": "dev-cards-layout"};
var G__34240 = om.util.force_children((function (){var G__34241 = om.next.props(this$);
return (klipse.ui.layout.layout.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.layout.layout.cljs$core$IFn$_invoke$arity$1(G__34241) : klipse.ui.layout.layout.call(null,G__34241));
})());
return React.DOM.div(G__34239,G__34240);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34234;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34233;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34232;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34231;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34230;
}});})(x34153_34253))
;


klipse.cards.ui.layout.js_only.Root_computed.prototype.constructor = klipse.cards.ui.layout.js_only.Root_computed;

klipse.cards.ui.layout.js_only.Root_computed.prototype.constructor.displayName = "klipse.cards.ui.layout.js-only/Root-computed";

klipse.cards.ui.layout.js_only.Root_computed.prototype.om$isComponent = true;

var x34244_34423 = klipse.cards.ui.layout.js_only.Root_computed;


var x34245_34424 = klipse.cards.ui.layout.js_only.Root_computed.prototype;


klipse.cards.ui.layout.js_only.Root_computed.cljs$lang$type = true;

klipse.cards.ui.layout.js_only.Root_computed.cljs$lang$ctorStr = "klipse.cards.ui.layout.js-only/Root-computed";

klipse.cards.ui.layout.js_only.Root_computed.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.cards.ui.layout.js-only/Root-computed");
});
klipse.cards.ui.layout.js_only.root_computed = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.cards.ui.layout.js_only.Root_computed);
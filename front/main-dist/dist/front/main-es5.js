(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader_new\" id=\"loader_new\" style=\"display: none;\">\n\t<img src=\"assets/images/loader_new.gif\" class=\"img-fluid\">\n</div>\n<router-outlet id=\"body\"></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cms/faq/faq.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cms/faq/faq.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content\">\n\t<div class=\"innerBanner\">\n   <div class=\"container\">\n    <h1 class=\"text-center\">\n     <span class=\"color-gradient\">Have a Question Look here.</span>\n   </h1>\n </div>\n</div>\n<div class=\"innerPage faqPage\">\n <div class=\"container\">\n  <div class=\"faqBlock\">\n    <tabset class=\"faqAcc\">\n      <tab heading=\"General\" id=\"tab1\">\n       <accordion [isAnimated]=\"true\" [closeOthers]=\"oneAtATime\" *ngIf=\"content\">\n        <div *ngFor=\"let group of faq\">\n          <accordion-group [isOpen]=\"isFirstOpen\" [heading]=\"group?.question\">        \n            <p class=\"mb-0\" [innerHTML]= \"group?.answer\"></p>\n          </accordion-group>\n        </div>\n      </accordion>\n    </tab>\n  </tabset>\n</div>\n</div>\n</div>\n</div>\n\n<app-footer class=\"inner_footer\"></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/binancesection/binancesection.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/binancesection/binancesection.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content\">\n\t<div class=\"banner\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"bannerContent\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"bannerLabel\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<h1> \n\t\t\t\t\t\t\t\t<span class=\"color-gradient\"> Decentralized Money Market Protocol </span>\n\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tBe sure to read docs.1 pool.finance before using the pools<br/>\n\t\t\t\t\t\t\t\tso you are familiar with protocol risks and fees.!\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"bannerMenu\">\n\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-wrap align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/stake-bnb\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tStake\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/farm-bnb\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tFarm\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/transit-bnb\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tToken bridge\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/ethereumsection/ethereumsection.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/ethereumsection/ethereumsection.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content\">\n\t<div class=\"banner\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"bannerContent\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"bannerLabel\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<h1> \n\t\t\t\t\t\t\t\t<span class=\"color-gradient\"> Decentralized Money Market Protocol </span>\n\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tBe sure to read docs.1 pool.finance before using the pools<br/>\n\t\t\t\t\t\t\t\tso you are familiar with protocol risks and fees.!\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"bannerMenu\">\n\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-wrap align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/stake\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tStake\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/farm\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tFarm\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/transit\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tToken bridge\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"btn btn-primary btnMd\">\n\t\t\t\t\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/farm-bnb/farm-bnb.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/farm-bnb/farm-bnb.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content\">\n\t<div class=\"innerBanner pb-1 mb-1\">\n\t\t<div class=\"container\">\n\t\t\t<h1 class=\"text-center\">\n\t\t\t\t<span class=\"d-inline-block color-gradient\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\tFarm your digital assets with 1Pool \n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</h1>\n\t\t\t<!-- <div class=\"bannerLabel md pt-2\">\n\t\t\t\t<span> It ain't much, but it's honest work. </span>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\t\n\t<div class=\"farmStatus\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-center farmStatusRow\">\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 farmStatusCol\">\n\t\t\t\t\t<div class=\"d-flex flex-column justify-content-between farmStatusContent\">\n\t\t\t\t\t\t<div class=\"fsPoint\">\n\t\t\t\t\t\t\t<span class=\"fsPoint_label\"> Deposits in 1POOL : </span>\n\t\t\t\t\t\t\t<span class=\"fsPoint_value fMd d-inline-block w-100\"> {{deposit_harv |number:'1.2'}} USD </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 farmStatusCol\">\n\t\t\t\t\t<div class=\"d-flex flex-column justify-content-center farmStatusContent difr\">\n\t\t\t\t\t\t<div class=\"fsTimer_label\">\n\t\t\t\t\t\t\tNext Emissions Decrease In\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fsTimer_value\">\n\t\t\t\t\t\t\t<span class=\"fsTimer_days\">\n\t\t\t\t\t\t\t\t ∞ Days\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 farmStatusCol\">\n\t\t\t\t\t<div class=\"farmStatusContent\">\n\t\t\t\t\t\t<div class=\"fsPoint\">\n\t\t\t\t\t\t\t<span class=\"fsPoint_label\"> 1POOL price : </span>\n\t\t\t\t\t\t\t<span class=\"fsPoint_value\"> {{uni_usd}} USD </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fsPoint\">\n\t\t\t\t\t\t\t<span class=\"fsPoint_label\"> 1POOL Staked % : </span>\n\t\t\t\t\t\t\t<span class=\"fsPoint_value\"> {{uni_perc | number:'1.2'}} % </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"bannerMenu inner\">\n\t\t<div class=\"container\">\n\t\t\t<ul class=\"d-flex flex-wrap align-items-center justify-content-center\">\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"/faq\" class=\"btn btn-primary btnMd\">FAQ</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"/\" class=\"btn btn-primary btnMd\">Home</a>\n\t\t\t\t</li>\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\t\n\t</div>\n\t<div class=\"noConnect text-center\" *ngIf='!token'>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"noConnectCon\">\n\t\t\t\t<span class=\"noConnectText mr-1\">You haven't connected a wallet.</span>\n\t\t\t\t<button class=\"btn btn-primary btnMld\" data-toggle=\"modal\" data-target=\"#walletLogin\">\n\t\t\t\t\tConnect wallet\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"deFarm\">\n\t\t<div class=\"container\">\n\t\t\t<h2 class=\"sectionTitle text-center\">\n\t\t\t\t<span class=\"color-gradient\">Deposit and farm your assets</span>\n\t\t\t</h2>\n\t\t\t<div class=\"stake_table mt-4 farm_table\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Asset</th>\n\t\t\t\t\t\t\t<th>1POOL APY</th>\n\t\t\t\t\t\t\t<th> Deposits</th>\n\t\t\t\t\t\t\t<th> Your LP Tokens</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let pair of stakepairHis\">\n\t\t\t\t\t\t\t<td (click) =\"open_pair(pair.address)\"><img src=\"assets/images/icon_1.png\" class=\"ml-4 mr-2\">\n\t\t\t\t\t\t\t\t<accordion [isAnimated]=\"true\">\n\t\t\t\t\t\t\t\t  <accordion-group heading=\"{{pair.symbol}}\">\n\t\t\t\t\t\t\t\t    <div class=\"tdAcc\">\n\t\t\t\t\t\t\t\t    \t<form class=\"modalform stakeForm\" #stake=\"ngForm\" autocomplete=\"off\" novalidate>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center tdAcc_depRow\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depIp\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input onkeypress=\"return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57\" [ngModel]=\"stakeall_value\" type=\"number\" id=\"amount\" class=\"form-control border-right-0\" placeholder=\"Amount\" name= \"amount\" #amount= \"ngModel\" ngModel required pattern=\"^\\d{0,50}(\\.\\d{1,8})?$\" [class.is-invalid] = \"amount.invalid && amount.touched\" (keyup)=\"amountKeyup(amount.value,stake)\" min=\"0\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-2 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click) = \"stakeall(pair.balance)\" class=\"btn btnBk\"> Max </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input name=\"poolid\" type=\"hidden\" [ngModel]=pair.poolid> \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"stakeFun(stake)\" class=\"btn btnGn\"> Deposit </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row tdAcc_depRow tdAcc_depStatus\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_sCon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_label\"> Your Staked {{pair.symbol}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_value\"> {{pair.depo_bal}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_sCon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_label\"> Total OP Earned </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_value\"> {{pair.earning}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_sCon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_label\"> Your Unstaked {{pair.symbol}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_value\"> {{pair.balance}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center tdAcc_depRow\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click) = reward(pair.poolid,pair.depo_bal) class=\"btn btnBk\"> Claim Rewards </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-2 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #popTemplate><div class=\"popupcontent\">\n<div class=\"poplist\"><span>Asset: </span><span><b>{{pair.symbol}}</b></span></div>\n<div class=\"poplist\"><span>Vault address: </span><span><b><a target=\"_blank\" href=\"https://bscscan.com/address/{{pair.address}}\">{{pair.address.substr(0,6)}}.. {{pair.address.substr(38,42)}}<i class=\"fas fa-external-link-alt\"></i></a></b></span></div>\n<div class=\"poplist\"><span>Pool address: </span><span><b><a target=\"_blank\" href=\"https://bscscan.com/address/{{pair.contract_address}}\">{{pair.contract_address.substr(0,6)}}..{{pair.contract_address.substr(38,42)}} <i class=\"fas fa-external-link-alt\"></i></a></b></span></div>\n<div class=\"poplist3\"><span><b>Claim rewards:</b></span></div>\n<div><ol class=\"numeric-list\"><li>Hit \"Claim rewards\" to claim your <b>FARM</b></li>\n<li>To earn additional interest on your <b>FARM</b>, stake your claimed <b>FARM</b> into the <b>FARM</b> pool. We recommend claiming and re-staking your <b>FARM</b> rewards into the <b>FARM</b> pool periodically (for example, weekly)</li></ol></div>\n</div></ng-template>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-none\" [popover]=\"popTemplate\" triggers=\"mouseenter\" containerClass=\"mypopover\"> \n\t\t\t\t\t\t\t\t\t<span class=\"btnText\"> Vault rewards </span>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-arrow-right\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-2 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"unstakeFun(stake)\" class=\"btn btnRd\"> Withdraw & claim </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </accordion-group>\n\t\t\t\t\t\t\t\t</accordion>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>0 %</td>\n\t\t\t\t\t\t\t<td>{{pair.depo_bal}}</td>\n\t\t\t\t\t\t\t<td class=\"\">{{pair.balance}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"stake_table mt-4 table-responsive container\">\n\t\t\t\t\t<h5 class=\"stake_hd text-center\">Deposit &Withdraw</h5>\n\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Date & Time </th>\n\t\t\t\t\t<th>Type </th>\n\t\t\t\t\t<th>Name </th>\n\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t<th>Transaction Hash</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let stake of stakeHis\">\n\t\t\t\t\t<td>{{stake.created_at | date: 'yyyy-MM-dd h:mm:ss'}}</td>\n\t\t\t\t\t<td>{{stake.types}}</td>\n\t\t\t\t\t<td>{{stake.currency}}</td>\n\t\t\t\t\t<td>{{(stake.amount > 0) ? stake.amount :'-' }}</td>\n\t\t\t\t\t<td title=\"{{stake.txnid}}\"><a target=\"_blank\" href=\"https://testnet.bscscan.com/tx/{{stake.txnid}}\" style=\"display: inline-block;width: 180px;white-space: nowrap;overflow: hidden !important; text-overflow: ellipsis;\">{{stake.txnid}}</a></td>\n\t\t\t\t\t<td class=\"grn_text\">{{stake.status}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\n\t<div class=\"farmFees\">\n\t\t<div class=\"container\">\n\t\t\t<p class=\"text-center\">\n\t\t\t\t<span class=\"farmFeesValue\">\n\t\t\t\t\t${{deposit_harv |number:'1.2'}}\n\t\t\t\t</span>\n\t\t\t\t<span class=\"farmFeesText\">\n\t\t\t\t\tof deposits are auto harvesting yields.\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t\n</div>\n<app-footer class=\"inner_footer\"></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/farm/farm.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/farm/farm.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content\">\n\t<div class=\"innerBanner pb-1 mb-1\">\n\t\t<div class=\"container\">\n\t\t\t<h1 class=\"text-center\">\n\t\t\t\t<span class=\"d-inline-block color-gradient\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\tFarm your digital assets with 1Pool\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</h1>\n\t\t\t<!-- <div class=\"bannerLabel md pt-2\">\n\t\t\t\t<span> It ain't much, but it's honest work. </span>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\t\n\t<div class=\"farmStatus\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-center farmStatusRow\">\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 farmStatusCol\">\n\t\t\t\t\t<div class=\"d-flex flex-column justify-content-between farmStatusContent\">\n\t\t\t\t\t\t<div class=\"fsPoint\">\n\t\t\t\t\t\t\t<span class=\"fsPoint_label\"> Deposits in 1POOL : </span>\n\t\t\t\t\t\t\t<span class=\"fsPoint_value fMd d-inline-block w-100\"> {{deposit_harv |number:'1.2'}} USD </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 farmStatusCol\">\n\t\t\t\t\t<div class=\"d-flex flex-column justify-content-center farmStatusContent difr\">\n\t\t\t\t\t\t<div class=\"fsTimer_label\">\n\t\t\t\t\t\t\tNext Emissions Decrease In\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fsTimer_value\">\n\t\t\t\t\t\t\t<span class=\"fsTimer_days\">\n\t\t\t\t\t\t\t\t ∞ Days\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 farmStatusCol\">\n\t\t\t\t\t<div class=\"farmStatusContent\">\n\t\t\t\t\t\t<div class=\"fsPoint\">\n\t\t\t\t\t\t\t<span class=\"fsPoint_label\"> 1POOL price : </span>\n\t\t\t\t\t\t\t<span class=\"fsPoint_value\"> {{uni_usd}} USD </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fsPoint\">\n\t\t\t\t\t\t\t<span class=\"fsPoint_label\"> 1POOL Staked % : </span>\n\t\t\t\t\t\t\t<span class=\"fsPoint_value\"> {{uni_perc | number:'1.2'}} % </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"bannerMenu inner\">\n\t\t<div class=\"container\">\n\t\t\t<ul class=\"d-flex flex-wrap align-items-center justify-content-center\">\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"/faq\" class=\"btn btn-primary btnMd\">FAQ</a>\n\t\t\t\t</li>\t\t\t\t\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"/\" class=\"btn btn-primary btnMd\">Home</a>\n\t\t\t\t</li>\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\t\n\t</div>\n\t<div class=\"noConnect text-center\" *ngIf='!token'>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"noConnectCon\">\n\t\t\t\t<span class=\"noConnectText mr-1\">You haven't connected a wallet.</span>\n\t\t\t\t<button class=\"btn btn-primary btnMld\" data-toggle=\"modal\" data-target=\"#walletLogin\">\n\t\t\t\t\tConnect wallet\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"deFarm\">\n\t\t<div class=\"container\">\n\t\t\t<h2 class=\"sectionTitle text-center\">\n\t\t\t\t<span class=\"color-gradient\">Deposit and farm your assets</span>\n\t\t\t</h2>\n\t\t\t<div class=\"stake_table mt-4 farm_table\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Asset</th>\n\t\t\t\t\t\t\t<th>1POOL APY</th>\n\t\t\t\t\t\t\t<th> Deposits</th>\n\t\t\t\t\t\t\t<th> Your balance</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let pair of stakepairHis\">\n\t\t\t\t\t\t\t<td (click) =\"open_pair(pair.address)\"><img src=\"assets/images/icon_1.png\" class=\"ml-4 mr-2\">\n\t\t\t\t\t\t\t\t<accordion [isAnimated]=\"true\">\n\t\t\t\t\t\t\t\t  <accordion-group heading=\"{{pair.symbol}}\">\n\t\t\t\t\t\t\t\t    <div class=\"tdAcc\">\n\t\t\t\t\t\t\t\t    \t<form class=\"modalform stakeForm\" #stake=\"ngForm\" autocomplete=\"off\" novalidate>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center tdAcc_depRow\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depIp\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input onkeypress=\"return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57\" [ngModel]=\"stakeall_value\" type=\"number\" id=\"amount\" class=\"form-control border-right-0\" placeholder=\"Amount\" name= \"amount\" #amount= \"ngModel\" ngModel required pattern=\"^\\d{0,50}(\\.\\d{1,8})?$\" [class.is-invalid] = \"amount.invalid && amount.touched\" (keyup)=\"amountKeyup(amount.value,stake)\" min=\"0\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-2 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click) = \"stakeall(pair.balance)\" class=\"btn btnBk\"> Max </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input name=\"poolid\" type=\"hidden\" [ngModel]=pair.poolid> \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"stakeFun(stake)\" class=\"btn btnGn\"> Deposit </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row tdAcc_depRow tdAcc_depStatus\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_sCon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_label\"> Your Staked {{pair.symbol}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_value\"> {{pair.depo_bal}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_sCon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_label\"> Total OP Earned </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_value\"> {{pair.earning}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4 col-lg-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_sCon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_label\"> Your Unstaked {{pair.symbol}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"tdAcc_sCon_value\"> {{pair.balance}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center tdAcc_depRow\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-4 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click) = reward(pair.poolid,pair.depo_bal) class=\"btn btnBk\"> Claim Rewards </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-2 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #popTemplate>\n<div class=\"popupcontent\">\n<div class=\"poplist\"><span>Asset: </span><span><b>{{pair.symbol}}</b></span></div>\n<div class=\"poplist\"><span>Vault address: </span><span><b><a target=\"_blank\" href=\"https://etherscan.io/address/{{pair.address}}\">{{pair.address.substr(0,6)}}.. {{pair.address.substr(38,42)}}<i class=\"fas fa-external-link-alt\"></i></a></b></span></div>\n<div class=\"poplist\"><span>Pool address: </span><span><b><a target=\"_blank\" href=\"https://etherscan.io/address/{{pair.contract_address}}\">{{pair.contract_address.substr(0,6)}}..{{pair.contract_address.substr(38,42)}} <i class=\"fas fa-external-link-alt\"></i></a></b></span></div>\n<div class=\"poplist3\"><span><b>Claim rewards:</b></span></div>\n<div><ol class=\"numeric-list\"><li>Hit \"Claim rewards\" to claim your <b>FARM</b></li>\n<li>To earn additional interest on your <b>FARM</b>, stake your claimed <b>FARM</b> into the <b>FARM</b> pool. We recommend claiming and re-staking your <b>FARM</b> rewards into the <b>FARM</b> pool periodically (for example, weekly)</li></ol></div>\n</div>\n\n</ng-template>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-none\" [popover]=\"popTemplate\" triggers=\"mouseenter\" containerClass=\"mypopover\"> \n\t\t\t\t\t\t\t\t\t<span class=\"btnText\"> Vault rewards </span>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-arrow-right\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 col-xl-2 tdAcc_depCol\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tdAcc_depBtn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"unstakeFun(stake)\" class=\"btn btnRd\"> Withdraw & claim </button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </accordion-group>\n\t\t\t\t\t\t\t\t</accordion>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>0 %</td>\n\t\t\t\t\t\t\t<td>{{pair.depo_bal}}</td>\n\t\t\t\t\t\t\t<td class=\"\">{{pair.balance}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"stake_table mt-4 table-responsive container\">\n\t\t\t\t\t<h5 class=\"stake_hd text-center\">Deposit &Withdraw</h5>\n\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Date & Time </th>\n\t\t\t\t\t<th>Type </th>\n\t\t\t\t\t<th>Name </th>\n\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t<th>Transaction Hash</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let stake of stakeHis\">\n\t\t\t\t\t<td>{{stake.created_at | date: 'yyyy-MM-dd h:mm:ss'}}</td>\n\t\t\t\t\t<td>{{stake.types}}</td>\n\t\t\t\t\t<td>{{stake.currency}}</td>\n\t\t\t\t\t<td>{{(stake.amount > 0) ? stake.amount :'-' }}</td>\n\t\t\t\t\t<td title=\"{{stake.txnid}}\"><a target=\"_blank\" href=\"https://ropsten.etherscan.io/tx/{{stake.txnid}}\" style=\"display: inline-block;width: 180px;white-space: nowrap;overflow: hidden !important; text-overflow: ellipsis;\">{{stake.txnid}}</a></td>\n\t\t\t\t\t<td class=\"grn_text\">{{stake.status}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\n\t<div class=\"farmFees\">\n\t\t<div class=\"container\">\n\t\t\t<p class=\"text-center\">\n\t\t\t\t<span class=\"farmFeesValue\">\n\t\t\t\t\t${{deposit_harv |number:'1.2'}}\n\t\t\t\t</span>\n\t\t\t\t<span class=\"farmFeesText\">\n\t\t\t\t\tof deposits are auto harvesting yields.\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\t\n</div>\n<app-footer class=\"inner_footer\"></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/home/home.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/home/home.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content\">\n\t<div class=\"banner\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"bannerContent\">\n\t\t\t\t\t\t<div class=\"bannerLabel\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h1> \n\t\t\t\t\t\t\t<span class=\"color-gradient\" *ngIf=\"cms\"> {{static[0].pagetitle}} </span>\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[0].pagecontent\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"bannerMenu\">\n\t\t\t\t\t\t\t<ul class=\"d-flex flex-wrap align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/eth\" class=\"btn btn-primary btnMd\">ERC 20 (Ethereum) blockchain</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/bnb\" class=\"btn btn-primary btnMd\">Binance Smart Chain</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/transit\" class=\"btn btn-primary btnMd\">Token bridge</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-primary btnMd\" href=\"https://onepool.gitbook.io\" target=\"_blank\">Docs</a>\n\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"overView\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"overViewContent\" *ngIf=\"cms\">\n\t\t\t\t\t\t<h2 class=\"sectionTitle\">{{static[1].pagetitle}}</h2>\n\t\t\t\t\t\t<ul class=\"sectionList\">\n\t\t\t\t\t\t\t<li [innerHTML]=\"static[1].pagecontent\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"overViewContent\" *ngIf=\"cms\">\n\t\t\t\t\t\t<h2 class=\"sectionTitle\">{{static[2].pagetitle}} </h2>\n\t\t\t\t\t\t<ul class=\"sectionList\">\n\t\t\t\t\t\t\t<li [innerHTML]=\"static[2].pagecontent\">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"overViewImage text-center\">\n\t\t\t\t\t\t<img src=\"assets/images/pic/overView.png\" alt=\"overView\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"features\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"featuresContent\">\n\t\t\t\t\t\t<div class=\"featuresIcon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/lend.png\" alt=\"lend\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 *ngIf=\"cms\">{{static[3].pagetitle}}</h3>\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[3].pagecontent\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"featuresContent\">\n\t\t\t\t\t\t<div class=\"featuresIcon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/loan.png\" alt=\"loan\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 *ngIf=\"cms\">{{static[4].pagetitle}} </h3>\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[4].pagecontent\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"featuresContent\">\n\t\t\t\t\t\t<div class=\"featuresIcon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/valid.png\" alt=\"valid\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 *ngIf=\"cms\">{{static[5].pagetitle}}</h3>\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[5].pagecontent\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-3 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"featuresContent\">\n\t\t\t\t\t\t<div class=\"featuresIcon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/money-exchange.png\" alt=\"money-exchange\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 *ngIf=\"cms\">{{static[7].pagetitle}}</h3>\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[7].pagecontent\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\t\n\t</div>\t\n\n\t<div class=\"farming\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row align-items-center\">\t\t\t\t\t\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"farmingImage text-center\">\n\t\t\t\t\t\t<img src=\"assets/images/pic/farming.png\" alt=\"farming\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6 my-3 my-lg-5\">\n\t\t\t\t\t<div class=\"farmingContent\" *ngIf=\"cms\">\n\t\t\t\t\t\t<h2 class=\"sectionTitle\"> {{static[8].pagetitle}} </h2>\n\t\t\t\t\t\t<ul class=\"sectionList\">\n\t\t\t\t\t\t\t<li [innerHTML]=\"static[8].pagecontent\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"farmingContent\" *ngIf=\"cms\">\n\t\t\t\t\t\t<h2 class=\"sectionTitle\"> {{static[9].pagetitle}} </h2>\n\t\t\t\t\t\t<ul class=\"sectionList\">\n\t\t\t\t\t\t\t<li [innerHTML]=\"static[9].pagecontent\">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"farmingContent\" *ngIf=\"cms\">\n\t\t\t\t\t\t<h2 class=\"sectionTitle\"> {{static[10].pagetitle}} </h2>\n\t\t\t\t\t\t<ul class=\"sectionList\">\n\t\t\t\t\t\t\t<li [innerHTML]=\"static[10].pagecontent\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"farmingContent\" *ngIf=\"cms\">\n\t\t\t\t\t\t<h2 class=\"sectionTitle\"> {{static[11].pagetitle}} </h2>\n\t\t\t\t\t\t<ul class=\"sectionList\">\n\t\t\t\t\t\t\t<li [innerHTML]=\"static[11].pagecontent\">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"benefits\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 my-3 my-lg-5 benefitsCol\">\n\t\t\t\t\t<div class=\"benefitsContent\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"d-flex align-items-center benefitsIconText\">\n\t\t\t\t\t\t\t<div class=\"benefitsIcon\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/low-cost.png\" alt=\"low-cost\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"benefitsText\" *ngIf=\"cms\">\n\t\t\t\t\t\t\t\t{{static[12].pagetitle}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[12].pagecontent\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 my-3 my-lg-5 benefitsCol\">\n\t\t\t\t\t<div class=\"benefitsContent\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"d-flex align-items-center benefitsIconText\">\n\t\t\t\t\t\t\t<div class=\"benefitsIcon\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/real-world.png\" alt=\"real-world\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"benefitsText\" *ngIf=\"cms\">\n\t\t\t\t\t\t\t\t{{static[13].pagetitle}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[13].pagecontent\"> \t\t\t\t\t\t\t\t \n\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4 my-3 my-lg-5 benefitsCol\">\n\t\t\t\t\t<div class=\"benefitsContent\">\n\t\t\t\t\t\t<div class=\"d-flex align-items-center benefitsIconText\">\n\t\t\t\t\t\t\t<div class=\"benefitsIcon\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/liq-pool.png\" alt=\"liq-pool\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"benefitsText\" *ngIf=\"cms\">\n\t\t\t\t\t\t\t\t{{static[14].pagetitle}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t<p *ngIf=\"cms\" [innerHTML]=\"static[14].pagecontent\"> \t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<h2 class=\"text-center color-gradient\">Roadmap</h2>\n\t\t\t<div class=\"roadmap-cnt d-flex flex-column flex-lg-row\" *ngIf=\"cms\">\n\t\t\t\t<div class=\"roadmap-txt-cnt\">\n\t\t\t\t\t<h3>{{static[15].pagetitle}}</h3>\n\t\t\t\t\t<p [innerHTML]=\"static[15].pagecontent\"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"roadmap-txt-cnt\">\n\t\t\t\t\t<h3>{{static[16].pagetitle}}</h3>\n\t\t\t\t\t<p [innerHTML]=\"static[16].pagecontent\"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"roadmap-txt-cnt\">\n\t\t\t\t\t<h3>{{static[17].pagetitle}}</h3>\n\t\t\t\t\t<p [innerHTML]=\"static[17].pagecontent\"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"roadmap-txt-cnt\">\n\t\t\t\t\t<h3>{{static[18].pagetitle}}</h3>\n\t\t\t\t\t<p [innerHTML]=\"static[18].pagecontent\"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"roadmap-txt-cnt\">\n\t\t\t\t\t<h3>{{static[19].pagetitle}}</h3>\n\t\t\t\t\t<p [innerHTML]=\"static[19].pagecontent\"></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"subscribe\">\n\t\t\t\t<div class=\"d-flex justify-content-center  align-items-center my-4\">\n\t\t\t\t\t<div class=\"subscribeContent\">\n\t\t\t\t\t\t<h2 *ngIf=\"cms\">Get latest updates on 1pool.finance</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t</div>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/stake-bnb/stake-bnb.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/stake-bnb/stake-bnb.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content stake_page\">\n\t<div class=\"innerBanner\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h1 class=\"text-center\">\n\t\t\t\t\t<span class=\"color-gradient\">Staking</span>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"stakeBlock\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"stakeNow\">\n\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between stc_stauts_row\">\n\t\t\t\t\t\t<div class=\"stc_stauts_col flex-grow-1\">\n\t\t\t\t\t\t\t<span class=\"stc_stauts_label\"> Available balance : </span>\n\t\t\t\t\t\t\t<span class=\"stc_stauts_value\"> {{metabalance}} BNB </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"stc_stauts_col flex-grow-1\">\n\t\t\t\t\t\t\t<span class=\"stc_stauts_label\"> Maximum stacking amount : </span>\n\t\t\t\t\t\t\t<span class=\"stc_stauts_value\"> 6000.00 OP </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"stc_stauts_col flex-grow-1\">\n\t\t\t\t\t\t\t<span class=\"stc_stauts_label\"> Annualized rate of return : </span>\n\t\t\t\t\t\t\t<span class=\"stc_stauts_value\"> 3.00 % - 7.00 % </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<form class=\"modalform stakeForm\" #stake=\"ngForm\" autocomplete=\"off\" novalidate>\n\t\t\t\t\t<div class=\"row skt_ip_row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 skt_ip_col\">\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Staked Amount : {{deposit_amount}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Select Product : </label>\n\n\t\t\t\t\t\t\t\t<select class=\"form-control border-right-0\" id=\"currency\" name=\"currency\" (change)=\"stakepair_select($event)\"  #currency=\"ngModel\" ngModel required>\n\t\t\t\t\t               <option [value]=\"31\">1Pool-Bep</option>\n\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<input name=\"currency\" type=\"hidden\" [ngModel]=currency_select>\n\n\n\t\t\t\t\t\t\t<div *ngIf= \"currency.errors && (currency.valid || currency.touched || stake.submitted)\" class=\"errMsg\">\n\t\t\t\t               <span *ngIf=\"currency.errors.required\">Enter currency</span>\n\t\t\t\t            </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 skt_ip_col\">\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Available 1POOL : {{available_lp_amount}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Amount : </label>\n\t\t\t\t\t\t\t\t<input onkeypress=\"return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57\" type=\"number\" id=\"amount\" class=\"form-control border-right-0\" placeholder=\"Amount\" name= \"amount\" #amount= \"ngModel\" ngModel required pattern=\"^\\d{0,50}(\\.\\d{1,16})?$\" [class.is-invalid] = \"amount.invalid && amount.touched\" (keyup)=\"amountKeyup(amount.value,stake)\"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf= \"amount.errors && (amount.valid || amount.touched || stake.submitted)\" class=\"errMsg\">\n\t\t\t\t               <span *ngIf=\"amount.errors.required\">Enter Amount</span>\n\t\t\t\t            </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 skt_ip_col align-self-end\">\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip text-right\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"stakeFun(stake)\" *ngIf=\"!stakeLoader\">Stack Now</button>\n\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"unstakeFun(stake)\" *ngIf=\"!stakeLoader\">Unstake Now</button>\n\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn\" [disabled]=\"rewrd_btn\" (click)=\"reward()\" *ngIf=\"!stakeLoader\">claim</button>\n\n            \t\t\t\t\t<button type=\"submit\" class=\"btn btn-blue w-100\" disabled *ngIf=\"stakeLoader\"><i class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"stk_notes\">\n\t\t\t\t\t\t<img src=\"assets/images/icons/infr-circular.png\" class=\"align-middle mr-1\" alt=\"infr-circular\" />\t\t\t\t\t\t\n\t\t\t\t\t\t<span class=\"d-inline-block align-middle\">\n\t\t\t\t\t\t\tPlease read the following tips carefully and choose continuosly\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"stake_table mt-4 table-responsive\">\n\t\t\t\t\t<h5 class=\"stake_hd text-center\">Deposit & Withdraw</h5>\n\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Date & Time </th>\n\t\t\t\t\t<th>Type </th>\n\t\t\t\t\t<th>Name </th>\n\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t<th>Transaction Hash</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let stake of stakeHis\">\n\t\t\t\t\t<td>{{stake.created_at | date: 'yyyy-MM-dd h:mm:ss'}}</td>\n\t\t\t\t\t<td>{{stake.types}}</td>\n\t\t\t\t\t<td>{{stake.currency}}</td>\n\t\t\t\t\t<td>{{stake.amount}}</td>\n\t\t\t\t\t<td title=\"{{stake.txnid}}\"><a target=\"_blank\" href=\"https://testnet.bscscan.com/tx/{{stake.txnid}}\" style=\"display: inline-block;width: 180px;white-space: nowrap;overflow: hidden !important; text-overflow: ellipsis;\">{{stake.txnid}}</a></td>\n\t\t\t\t\t<td class=\"grn_text\">{{stake.status}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\t\t</div>\n\t\t</div>\n\n</div>\n\n<app-footer class=\"inner_footer\"></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/stake/stake.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/stake/stake.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content stake_page\">\n\t<div class=\"innerBanner\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h1 class=\"text-center\">\n\t\t\t\t\t<span class=\"color-gradient\">Staking</span>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"stakeBlock\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"stakeNow\">\n\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between stc_stauts_row\">\n\t\t\t\t\t\t<div class=\"stc_stauts_col flex-grow-1\">\n\t\t\t\t\t\t\t<span class=\"stc_stauts_label\"> Available balance : </span>\n\t\t\t\t\t\t\t<span class=\"stc_stauts_value\"> {{metabalance}} ETH </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"stc_stauts_col flex-grow-1\">\n\t\t\t\t\t\t\t<span class=\"stc_stauts_label\"> Maximum staking amount : </span>\n\t\t\t\t\t\t\t<span class=\"stc_stauts_value\"> 6000.00 OP </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"stc_stauts_col flex-grow-1\">\n\t\t\t\t\t\t\t<span class=\"stc_stauts_label\"> Annualized rate of return : </span>\n\t\t\t\t\t\t\t<span class=\"stc_stauts_value\"> 3.00 % - 7.00 % </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<form class=\"modalform stakeForm\" #stake=\"ngForm\" autocomplete=\"off\" novalidate>\n\t\t\t\t\t<div class=\"row skt_ip_row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 skt_ip_col\">\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Deposit Amount : {{deposit_amount}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Select Product : </label>\n\n\t\t\t\t\t\t\t\t<select class=\"form-control border-right-0\" id=\"currency\" name=\"currency\" (change)=\"stakepair_select($event)\"  #currency=\"ngModel\" ngModel required>\n\t\t\t\t\t               <option [value]=\"31\">1Pool</option>\n\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<input name=\"currency\" type=\"hidden\" [ngModel]=currency_select>\n\n\n\t\t\t\t\t\t\t<div *ngIf= \"currency.errors && (currency.valid || currency.touched || stake.submitted)\" class=\"errMsg\">\n\t\t\t\t               <span *ngIf=\"currency.errors.required\">Enter currency</span>\n\t\t\t\t            </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 skt_ip_col\">\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Available 1POOL : {{available_lp_amount}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip\">\n\t\t\t\t\t\t\t\t<label> Amount : </label>\n\t\t\t\t\t\t\t\t<input onkeypress=\"return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57\" type=\"number\" id=\"amount\" class=\"form-control border-right-0\" placeholder=\"Amount\" name= \"amount\" #amount= \"ngModel\" ngModel required pattern=\"^\\d{0,50}(\\.\\d{1,16})?$\" [class.is-invalid] = \"amount.invalid && amount.touched\" (keyup)=\"amountKeyup(amount.value,stake)\"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf= \"amount.errors && (amount.valid || amount.touched || stake.submitted)\" class=\"errMsg\">\n\t\t\t\t               <span *ngIf=\"amount.errors.required\">Enter Amount</span>\n\t\t\t\t            </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 skt_ip_col align-self-end\">\n\t\t\t\t\t\t\t<div class=\"form-group stk_ip text-right\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn\" [disabled]=\"stake.invalid && stakebutton_show\" (click)=\"stakeFun(stake)\" *ngIf=\"!stakeLoader\">Stake Now</button>\n\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button (click)=\"unstakeFun(stake)\" class=\"btn\" [disabled]=\"stake.invalid && stakebutton_show\" >Unstake Now</button>\n\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"reward()\" [disabled]=\"rewrd_btn\" class=\"btn\">Claim</button>\n\n            \t\t\t\t\t<button type=\"submit\" class=\"btn btn-blue w-100\" disabled *ngIf=\"stakeLoader\"><i class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"stk_notes\">\n\t\t\t\t\t\t<img src=\"assets/images/icons/infr-circular.png\" class=\"align-middle mr-1\" alt=\"infr-circular\" />\t\t\t\t\t\t\n\t\t\t\t\t\t<span class=\"d-inline-block align-middle\">\n\t\t\t\t\t\t\tPlease read the following tips carefully and choose continuosly\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"stake_table mt-4 table-responsive\">\n\t\t\t\t\t<h5 class=\"stake_hd text-center\">Deposit & Withdraw</h5>\n\t\t<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Date & Time </th>\n\t\t\t\t\t<th>Type </th>\n\t\t\t\t\t<th>Name </th>\n\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t<th>Transaction Hash</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let stake of stakeHis\">\n\t\t\t\t\t<td>{{stake.created_at | date: 'yyyy-MM-dd h:mm:ss'}}</td>\n\t\t\t\t\t<td>{{stake.types}}</td>\n\t\t\t\t\t<td>{{stake.currency}}</td>\n\t\t\t\t\t<td>{{(stake.amount >0 )?stake.amount:'--'}}</td>\n\t\t\t\t\t<td title=\"{{stake.txnid}}\"><a target=\"_blank\" href=\"https://etherscan.io/tx/{{stake.txnid}}\" style=\"display: inline-block;width: 180px;white-space: nowrap;overflow: hidden !important; text-overflow: ellipsis;\">{{stake.txnid}}</a></td>\n\t\t\t\t\t<td class=\"grn_text\">{{stake.status}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\t\t</div>\n\t\t</div>\n\n</div>\n\n<app-footer class=\"inner_footer\"></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/transit-bnb/transit-bnb.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/transit-bnb/transit-bnb.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content stake_page\">\n    <div class=\"innerBanner\">\n        <div class=\"container\">\n            <h1 class=\"text-center\">\n                <span class=\"color-gradient\">Token Bridge</span>\n            </h1>\n        </div>\n    </div>\n\n    <div class=\"stakeBlock\">\n        <div class=\"container\">\n            <div class=\"stakeNow transitblock\">\n                    <form class=\"modalform stakeForm\" #eth_op_form=\"ngForm\" autocomplete=\"off\" novalidate>\n                <div class=\"row skt_ip_row\">\n                    <div class=\"col-md-12\">\n                        <h4 class=\"text-white\"> BEP20 to ERC20 </h4>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 skt_ip_col dropdown user-dropdown\">\n\n                        <div class=\"form-group stk_ip\">\n                            <label> Select a token : </label>\n\n                            <select (change)=\"change_fun($event)\" class=\"form-control border-right-0\" id=\"currency\" name=\"currency\" required>\n                                   <option disabled value=\"\">Select Currency</option>\n                                   <option value=\"BEP1pool\">1POOL BEP</option>\n                                </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 skt_ip_col\">\n                        <div class=\"form-group stk_ip\">\n                            <label> Balance : <span>{{eth_bal_op}}</span></label>\n                            <input onkeypress=\"return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57\" type=\"text\" name=\"amount_\" ngModel required class=\"form-control\" placeholder=\"Enter Amount\" />\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-12 skt_ip_col align-self-end\">\n                        <div class=\"form-group stk_ip pb-lg-0 mb-lg-0 text-right\">\n                            <button (click)=\"approve_func()\" *ngIf=\"approve_btn\" class=\"btn mr-lg-3\">\n                                Approve\n                            </button>\n                            <button class=\"btn\" *ngIf=\"transit_btn\" type=\"submit\" (click)=\"deposit_ethop(eth_op_form)\">\n                                Create crosschain assets\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                </form>\n\n                <form class=\"\" #ethtobnb=\"ngForm\" autocomplete=\"off\" novalidate>\n                <div class=\"row skt_ip_row\">\n                    <div class=\"col-md-6 col-sm-12\">\n                        <h4 class=\"text-white\"> Transit record </h4>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 skt_ip_col\">\n                        <div class=\"form-group stk_ip mb-0\">\n                            <input type=\"text\" name=\"txid_\" ngModel class=\"form-control\" placeholder=\"Please Input Ethereum Transaction Hash\" />\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2 skt_ip_col\">\n                        <div class=\"form-group stk_ip\">\n                            <button (click)=\"withdraw_bnb(ethtobnb)\" type=\"submit\" class=\"btn btn-outline mr-lg-3\">\n                                Submit\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                </form>\n\n            </div>\n\n\n\n            <div class=\"stake_table mt-4 table-responsive\">\n                    <h5 class=\"stake_hd text-center\">Transactions</h5>\n        <table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n            <thead>\n                <tr>\n                    <th>Date & Time </th>\n                    <th>Currency </th>\n                    <th>Amount</th>\n                    <th>Transaction Hash</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let stake of stakeHis\">\n                    <td>{{stake.date | date: 'yyyy-MM-dd h:mm:ss'}}</td>\n                    <td>{{stake.currency}}</td>\n                    <td>{{stake.amount}}</td>\n                    <td title=\"{{stake.txnid}}\"><a target=\"_blank\" href=\"https://etherscan.io/tx/{{stake.transactionid}}\" style=\"display: inline-block;width: 180px;white-space: nowrap;overflow: hidden !important; text-overflow: ellipsis;\">{{stake.transactionid}}</a></td>\n                    <td class=\"grn_text\">{{stake.status}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n\n        </div>\n    </div>\n</div>\n<app-footer class=\"inner_footer\"></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/content/transit/transit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/content/transit/transit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main_content stake_page\">\n    <div class=\"innerBanner\">\n        <div class=\"container\">\n            <h1 class=\"text-center\">\n                <span class=\"color-gradient\">Token Bridge</span>\n            </h1>\n        </div>\n    </div>\n\n    <div class=\"stakeBlock\">\n        <div class=\"container\">\n            <div class=\"stakeNow transitblock\">\n                    <form class=\"modalform stakeForm\" #eth_op_form=\"ngForm\" autocomplete=\"off\" novalidate>\n                <div class=\"row skt_ip_row\">\n                    <div class=\"col-md-12\">\n                        <h4 class=\"text-white\"> ERC20 to BEP20 </h4>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 skt_ip_col dropdown user-dropdown\">\n                        <div class=\"form-group stk_ip\">\n                            <label> Select a token : </label>\n\n                            <select (change)=\"change_fun($event)\" class=\"form-control border-right-0\" id=\"currency\" name=\"currency\" required>\n                                   <option disabled value=\"\">Select Currency</option>\n                                   <option value=\"ERC201pool\">1pool ERC20</option>\n                                </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 skt_ip_col\">\n                        <div class=\"form-group stk_ip\">\n                            <label> Balance : <span>{{eth_bal_op}}</span></label>\n                            <input onkeypress=\"return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57\" type=\"text\" name=\"amount_\" ngModel required class=\"form-control\" placeholder=\"Enter Amount\" />\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-12 skt_ip_col align-self-end\">\n                        <div class=\"form-group stk_ip pb-lg-0 mb-lg-0 text-right\">\n                            <button (click)=\"approve_func()\" *ngIf=\"approve_btn\" class=\"btn mr-lg-3\">\n                                Approve\n                            </button>\n                            <button class=\"btn\" *ngIf=\"transit_btn\" type=\"submit\" (click)=\"deposit_ethop(eth_op_form)\">\n                                Create crosschain assets\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                </form>\n\n                <form class=\"\" #ethtobnb=\"ngForm\" autocomplete=\"off\" novalidate>\n                <div class=\"row skt_ip_row\">\n                    <div class=\"col-md-6 col-sm-12\">\n                        <h4 class=\"text-white\"> Transit record </h4>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 skt_ip_col\">\n                        <div class=\"form-group stk_ip mb-0\">\n                            <input type=\"text\" name=\"txid_\" ngModel class=\"form-control\" placeholder=\"Please Input BSC Transaction Hash\" />\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2 skt_ip_col\">\n                        <div class=\"form-group stk_ip\">\n                            <button (click)=\"withdraw_bnb(ethtobnb)\" type=\"submit\" class=\"btn btn-outline mr-lg-3\">\n                                Submit\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                </form>\n\n            </div>\n\n\n\n            <div class=\"stake_table mt-4 table-responsive\">\n                    <h5 class=\"stake_hd text-center\">Transactions</h5>\n        <table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n            <thead>\n                <tr>\n                    <th>Date & Time </th>\n                    <th>Currency </th>\n                    <th>Amount</th>\n                    <th>Transaction Hash</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let stake of stakeHis\">\n                    <td>{{stake.date | date: 'yyyy-MM-dd h:mm:ss'}}</td>\n                    <td>{{stake.currency}}</td>\n                    <td>{{stake.amount}}</td>\n                    <td title=\"{{stake.txnid}}\"><a target=\"_blank\" href=\"https://bscscan.com/tx/{{stake.transactionid}}\" style=\"display: inline-block;width: 180px;white-space: nowrap;overflow: hidden !important; text-overflow: ellipsis;\">{{stake.transactionid}}</a></td>\n                    <td class=\"grn_text\">{{stake.status}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n\n        </div>\n    </div>\n</div>\n\n\n<app-footer class=\"inner_footer\"></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ipblock/ipblock.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ipblock/ipblock.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-cnt err-cont\" *ngIf=\"ip_block\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-lg-8 err-cnt\">\n        <div class=\"d-flex\">\n          <div class=\"img-cnt mx-auto\">\n            <img src=\"assets/images/ip-blocked.png\" class=\"img-fluid\">\n          </div>\n        </div>\n        <h3 class=\"text-center\">Your IP was blocked</h3>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/layout/footer/footer.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/layout/footer/footer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer homeFooter\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"footerLogo text-center\">\n\t\t\t\t\t<a routerLink=\"/\">\n\t\t\t\t\t\t<img src=\"assets/images/logo.png\" alt=\"logo\" />\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"footerSocial\">\n\t\t\t\t\t<ul class=\"d-flex flex-wrap align-items-center justify-content-center\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"{{site.facebook}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"{{site.twitter}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"{{site.telegram}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\tTelegram\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"{{site.linkedin}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\tBitcoin Talk\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"{{site.reddit}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\tReddit\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"{{site.medium}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\tMedium\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"copyRight\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<p>{{site.copyright}}</p>\n\t\t\t</div>\n\t\t</div>\t\n\t\t</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/layout/header/header.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/layout/header/header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n\t<div class=\"container\">\n\t\t<nav class=\"navbar navbar-expand-lg\">\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t\t<div class=\"logo text-center text-sm-left\">\t\t\t\t\t\t\t\n\t\t\t\t\t<img src=\"assets/images/logo.png\" alt=\"logo\" class=\"logo-ht\" />\t\t\t\t\t\t\t\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</a>\n\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"toggleNavbarCollapsing()\" data-target=\"#collapsibleNavbar\">\n\t\t\t\t<span class=\"navbar-toggler-icon\"><i class=\"fas fa-bars\"></i></span>\n\t\t\t</button>\n\t\t\t<div class=\"collapse navbar-collapse\" [class.collapse]=\"navbarCollapsed\" id=\"collapsibleNavbar\">\n\t\t\t\t<ul class=\"navbar-nav ml-auto headerRight text-center\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link btn-none btnMd mr-2\" routerLink=\"/faq\">\n\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link btn-none btnMd mr-2\" href=\"https://onepool.gitbook.io\" target=\"_blank\">\n\t\t\t\t\t\t\tDocs\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link btn-none btnMd mr-2\" href=\"https://onepool.gitbook.io/1pool-finance/starting-on-user-guide/user-guide\" target=\"_blank\">\n\t\t\t\t\t\t\tUser Guide\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<button class=\"btn btn-primary btnLg\" (click)=\"staticModal.show()\" *ngIf=\"!account && !account_bnb\">\n\t\t\t\t\t\t<span class=\"align-middle mr-2\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/unlock.png\" alt=\"unlock\" />\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"align-middle\">\n\t\t\t\t\t\t\tConnect your wallet \n\t\t\t\t\t\t</span>\t\n\t\t\t\t\t</button>\n\t\t\t\t\t<button  class=\"btn btn-primary btnLg\" *ngIf=\"account || account_bnb\">\n\t\t\t\t\t\t<span class=\"align-middle mr-2\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/unlock.png\" alt=\"unlock\" />\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"align-middle\"  (click)=\"logout()\">\n\t\t\t\t\t\t\tDisconnect your wallet {{(account) ? '(ETH)' : '(BNB)'}}\n\t\t\t\t\t\t</span>\t\n\t\t\t\t\t</button>\n\t\t\t\t\t<a href=\"https://etherscan.io/address/0xa57EE92EFB9464768b7683A6B9fcDc102a255994\" target=\"_blank\" class=\"btn btn-primary btnLg py-3 ml-3 addressbtn\"><span class=\"align-middle\">Contract : 0xa57EE92E... </span></a>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\t\n\t</div>\n</header>\n\n<div class=\"modal fade modalPrimary\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n\t  <div class=\"modal-dialog modal-lg modal-dialog-centered\">\n\t    <div class=\"modal-content\">\n\t      <div class=\"modal-header\">\n\t        <h4 id=\"dialog-static-name\" class=\"modal-title color-gradient\"><span class=\"\">Welcome to 1Pool Finance Login</span></h4>\n\t        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n\t          <span aria-hidden=\"true\">&times;</span>\n\t        </button>\n\t      </div>\n\t     \t<div class=\"modal-body\">\t\t\t\n\t\t\t\t<div class=\"walletLoginBtns text-center\" (click)=\"walletoptions('ETH')\">\n\t\t\t\t\t<button class=\"d-inline-flex flex-wrap align-items-center justify-content-between btn wl_Btns\">\n\t\t\t\t\t\t<div class=\"wl_Btn_left\">\n\t\t\t\t\t\t\t<span class=\"align-middle wl_Btn_icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/meta-mask.png\" alt=\"meta-mask\" />\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"align-middle wl_Btn_text\">\n\t\t\t\t\t\t\t\tMeta Mask\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"wl_Btn_right\">\n\t\t\t\t\t\t\t<span class=\"wl_Btn_arrow\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-chevron-right\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"walletLoginBtns text-center\" (click)=\"walletoptions('BNB')\">\n\t\t\t\t\t<button class=\"d-inline-flex flex-wrap align-items-center justify-content-between btn wl_Btns\">\n\t\t\t\t\t\t<div class=\"wl_Btn_left\">\n\t\t\t\t\t\t\t<span class=\"align-middle wl_Btn_icon\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/binance-smart-chain.png\" alt=\"meta-mask\" />\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"align-middle wl_Btn_text\">\n\t\t\t\t\t\t\t\tBinance Chain Wallet\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"wl_Btn_right\">\n\t\t\t\t\t\t\t<span class=\"wl_Btn_arrow\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-chevron-right\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\t\n\t    </div>\n\t  </div>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/undermaintance/undermaintance.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/undermaintance/undermaintance.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-cnt err-cont\" *ngIf=\"under_main\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-lg-8 err-cnt\">\n        <div class=\"d-flex\">\n          <div class=\"img-cnt mx-auto\">\n            <img src=\"assets/images/under.png\" class=\"img-fluid\">\n          </div>\n        </div>\n        <h3>Website is under construction</h3>      \n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_cms_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cms/faq/faq.component */ "./src/app/pages/cms/faq/faq.component.ts");
/* harmony import */ var _pages_content_farm_farm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/content/farm/farm.component */ "./src/app/pages/content/farm/farm.component.ts");
/* harmony import */ var _pages_content_farm_bnb_farm_bnb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/content/farm-bnb/farm-bnb.component */ "./src/app/pages/content/farm-bnb/farm-bnb.component.ts");
/* harmony import */ var _pages_content_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/content/home/home.component */ "./src/app/pages/content/home/home.component.ts");
/* harmony import */ var _pages_content_stake_stake_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/content/stake/stake.component */ "./src/app/pages/content/stake/stake.component.ts");
/* harmony import */ var _pages_content_ethereumsection_ethereumsection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/content/ethereumsection/ethereumsection.component */ "./src/app/pages/content/ethereumsection/ethereumsection.component.ts");
/* harmony import */ var _pages_content_binancesection_binancesection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/content/binancesection/binancesection.component */ "./src/app/pages/content/binancesection/binancesection.component.ts");
/* harmony import */ var _pages_content_stake_bnb_stake_bnb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/content/stake-bnb/stake-bnb.component */ "./src/app/pages/content/stake-bnb/stake-bnb.component.ts");
/* harmony import */ var _pages_content_transit_transit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/content/transit/transit.component */ "./src/app/pages/content/transit/transit.component.ts");
/* harmony import */ var _pages_content_transit_bnb_transit_bnb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/content/transit-bnb/transit-bnb.component */ "./src/app/pages/content/transit-bnb/transit-bnb.component.ts");
/* harmony import */ var _pages_ipblock_ipblock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/ipblock/ipblock.component */ "./src/app/pages/ipblock/ipblock.component.ts");
/* harmony import */ var _pages_undermaintance_undermaintance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/undermaintance/undermaintance.component */ "./src/app/pages/undermaintance/undermaintance.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
















var routes = [
    { path: '', component: _pages_content_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'faq', component: _pages_cms_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'docs', component: _pages_cms_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'stake', component: _pages_content_stake_stake_component__WEBPACK_IMPORTED_MODULE_7__["StakeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'eth', component: _pages_content_ethereumsection_ethereumsection_component__WEBPACK_IMPORTED_MODULE_8__["EthereumsectionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'bnb', component: _pages_content_binancesection_binancesection_component__WEBPACK_IMPORTED_MODULE_9__["BinancesectionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'farm', component: _pages_content_farm_farm_component__WEBPACK_IMPORTED_MODULE_4__["FarmComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'farm-bnb', component: _pages_content_farm_bnb_farm_bnb_component__WEBPACK_IMPORTED_MODULE_5__["FarmBnbComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'stake-bnb', component: _pages_content_stake_bnb_stake_bnb_component__WEBPACK_IMPORTED_MODULE_10__["StakeBnbComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'transit', component: _pages_content_transit_transit_component__WEBPACK_IMPORTED_MODULE_11__["TransitComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'transit-bnb', component: _pages_content_transit_bnb_transit_bnb_component__WEBPACK_IMPORTED_MODULE_12__["TransitBnbComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], data: { type: 'all' } },
    { path: 'ip_block', component: _pages_ipblock_ipblock_component__WEBPACK_IMPORTED_MODULE_13__["IpblockComponent"] },
    { path: 'under_maintance', component: _pages_undermaintance_undermaintance_component__WEBPACK_IMPORTED_MODULE_14__["UndermaintanceComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(conn, route, toastr) {
        this.conn = conn;
        this.route = route;
        this.toastr = toastr;
        this.title = 'OnePool';
        this.conn.idleLogout();
    }
    AppComponent.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_cms_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cms/faq/faq.component */ "./src/app/pages/cms/faq/faq.component.ts");
/* harmony import */ var _pages_content_farm_farm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/content/farm/farm.component */ "./src/app/pages/content/farm/farm.component.ts");
/* harmony import */ var _pages_content_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/content/home/home.component */ "./src/app/pages/content/home/home.component.ts");
/* harmony import */ var _pages_content_stake_stake_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/content/stake/stake.component */ "./src/app/pages/content/stake/stake.component.ts");
/* harmony import */ var _pages_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/layout/header/header.component */ "./src/app/pages/layout/header/header.component.ts");
/* harmony import */ var _pages_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/layout/footer/footer.component */ "./src/app/pages/layout/footer/footer.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_content_ethereumsection_ethereumsection_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/content/ethereumsection/ethereumsection.component */ "./src/app/pages/content/ethereumsection/ethereumsection.component.ts");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var _pages_content_farm_bnb_farm_bnb_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/content/farm-bnb/farm-bnb.component */ "./src/app/pages/content/farm-bnb/farm-bnb.component.ts");
/* harmony import */ var _pages_content_binancesection_binancesection_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/content/binancesection/binancesection.component */ "./src/app/pages/content/binancesection/binancesection.component.ts");
/* harmony import */ var _pages_content_stake_bnb_stake_bnb_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/content/stake-bnb/stake-bnb.component */ "./src/app/pages/content/stake-bnb/stake-bnb.component.ts");
/* harmony import */ var _pages_content_transit_transit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/content/transit/transit.component */ "./src/app/pages/content/transit/transit.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _pages_content_transit_bnb_transit_bnb_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/content/transit-bnb/transit-bnb.component */ "./src/app/pages/content/transit-bnb/transit-bnb.component.ts");
/* harmony import */ var _pages_ipblock_ipblock_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/ipblock/ipblock.component */ "./src/app/pages/ipblock/ipblock.component.ts");
/* harmony import */ var _pages_undermaintance_undermaintance_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/undermaintance/undermaintance.component */ "./src/app/pages/undermaintance/undermaintance.component.ts");






























function tokenGetter() {
    return localStorage.getItem("account");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_cms_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
                _pages_content_farm_farm_component__WEBPACK_IMPORTED_MODULE_6__["FarmComponent"],
                _pages_content_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_content_stake_stake_component__WEBPACK_IMPORTED_MODULE_8__["StakeComponent"],
                _pages_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _pages_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _pages_content_ethereumsection_ethereumsection_component__WEBPACK_IMPORTED_MODULE_20__["EthereumsectionComponent"],
                _pages_content_farm_bnb_farm_bnb_component__WEBPACK_IMPORTED_MODULE_22__["FarmBnbComponent"],
                _pages_content_binancesection_binancesection_component__WEBPACK_IMPORTED_MODULE_23__["BinancesectionComponent"],
                _pages_content_stake_bnb_stake_bnb_component__WEBPACK_IMPORTED_MODULE_24__["StakeBnbComponent"],
                _pages_content_transit_transit_component__WEBPACK_IMPORTED_MODULE_25__["TransitComponent"],
                _pages_content_transit_bnb_transit_bnb_component__WEBPACK_IMPORTED_MODULE_27__["TransitBnbComponent"],
                _pages_ipblock_ipblock_component__WEBPACK_IMPORTED_MODULE_28__["IpblockComponent"],
                _pages_undermaintance_undermaintance_component__WEBPACK_IMPORTED_MODULE_29__["UndermaintanceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_15__["AccordionModule"].forRoot(),
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__["PopoverModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_26__["BsDropdownModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(conn, route) {
        this.conn = conn;
        this.route = route;
        this.resp = 0;
    }
    AuthGuard.prototype.canActivate = function (actRoute, state) {
        var _this = this;
        var type = actRoute.data['type'];
        if (this.resp == 0) {
            return this.conn.checkMaintain().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                _this.resp = res.success;
                if (res.success == 2) {
                    localStorage.clear();
                    _this.route.navigate(['ip_block']);
                    return false;
                }
                else if (res.success == 3) {
                    localStorage.clear();
                    _this.route.navigate(['under_maintance']);
                    return false;
                }
                if (type == "all") {
                    return true;
                }
                else {
                    return true;
                }
            }));
        }
        else {
            if (this.resp == 2) {
                this.route.navigate(['ip_block']);
                return false;
            }
            else if (this.resp == 3) {
                this.route.navigate(['under_maintance']);
                return false;
            }
            if (type == "all") {
                return true;
            }
            else {
                return true;
            }
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/connection.service.ts":
/*!***************************************!*\
  !*** ./src/app/connection.service.ts ***!
  \***************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _backendconn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backendconn */ "./src/backendconn.js");





var ConnectionService = /** @class */ (function () {
    function ConnectionService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.redirectUrl = _backendconn__WEBPACK_IMPORTED_MODULE_4__["BackendUrl"];
    }
    ConnectionService.prototype.postUrl = function (uri, data) {
        return this.http.post(this.redirectUrl + uri, data);
    };
    ConnectionService.prototype.getUrl = function (uri) {
        return this.http.get(this.redirectUrl + uri);
    };
    ConnectionService.prototype.postRequest = function (uri, data, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('cache-control', 'no-cache')
            .set('content-type', 'application/json')
            .set('Authorization', 'Bearer ' + token);
        return this.http.post(this.redirectUrl + uri, data, { headers: headers });
    };
    ConnectionService.prototype.getRequest = function (uri, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('cache-control', 'no-cache')
            .set('content-type', 'application/json')
            .set('Authorization', 'Bearer ' + token);
        return this.http.get(this.redirectUrl + uri, { headers: headers });
    };
    ConnectionService.prototype.changebackground = function () {
        document.getElementById('loader_new').style.display = 'flex';
        document.getElementById('body').style.display = 'flex';
    };
    ConnectionService.prototype.clearbackground = function () {
        document.getElementById('loader_new').style.display = 'none';
        document.getElementById('body').style.display = 'flex';
    };
    ConnectionService.prototype.checkMaintain = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('cache-control', 'no-cache');
        return this.http.get(this.redirectUrl + 'admin/check_maintain', { headers: headers });
    };
    ConnectionService.prototype.idleLogout = function () {
        var t;
        window.onload = resetTimer;
        window.onmousemove = resetTimer;
        window.onmousedown = resetTimer;
        window.ontouchstart = resetTimer;
        window.onclick = resetTimer;
        window.onkeypress = resetTimer;
        window.addEventListener('scroll', resetTimer, true);
        function yourFunction() {
            localStorage.clear();
            window.location.href = '/';
        }
        function resetTimer() {
            clearTimeout(t);
            t = setTimeout(yourFunction, 900000);
        }
    };
    ConnectionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
    ]; };
    ConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], ConnectionService);
    return ConnectionService;
}());



/***/ }),

/***/ "./src/app/files/bnb_bridge_abi.ts":
/*!*****************************************!*\
  !*** ./src/app/files/bnb_bridge_abi.ts ***!
  \*****************************************/
/*! exports provided: BBAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BBAbi", function() { return BBAbi; });
var BBAbi = [{ "inputs": [{ "internalType": "address", "name": "_onePool", "type": "address" }, { "internalType": "address", "name": "_signer", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "expiryBlock", "type": "uint256" }], "name": "SetExpiryBlock", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "NewSigner", "type": "address" }], "name": "SetSigner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "SetStatus", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "txHash", "type": "bytes32" }], "name": "TransferEthOnePool", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "bytes32", "name": "txs", "type": "bytes32" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "claimOnePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expiryBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_sender", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_blockExpirytime", "type": "uint256" }, { "internalType": "bytes32", "name": "_txHash", "type": "bytes32" }], "name": "message", "outputs": [{ "internalType": "bytes32", "name": "messageHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "msgHash", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_signer", "type": "address" }], "name": "setSigner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_status", "type": "bool" }], "name": "setStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_expiryBlock", "type": "uint256" }], "name": "setexpiryBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "txHash", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_messageHash", "type": "bytes32" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "verifySignature", "outputs": [{ "internalType": "address", "name": "signatureAddress", "type": "address" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddr", "type": "address" }, { "internalType": "address", "name": "receiver", "type": "address" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/contract.ts":
/*!***********************************!*\
  !*** ./src/app/files/contract.ts ***!
  \***********************************/
/*! exports provided: ContractDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDetails", function() { return ContractDetails; });
var ContractDetails = {
    reward_pool_contract: "0xa57EE92EFB9464768b7683A6B9fcDc102a255994",
    onepool_contract: "0xaC4D8b8B0682880DFd20015fB0e5DD9a30fCEbB6",
    onepoolconvert_contract: "0x46c51b62007CaF9ACEeDcDAbcf80509409AB64E1",
    // pool_staking_contract: "0xe2613e068a4f610608aD3b9D2c4f075A9bC41CB2",
    reward_pool_contract_bnb: "0xd127d4214bc10470dE371f411440307ceF9B6517",
    eth_onpool_address: "0xaC4D8b8B0682880DFd20015fB0e5DD9a30fCEbB6",
    bnb_onpool_address: "0xac4d8b8b0682880dfd20015fb0e5dd9a30fcebb6",
    eth_onpool_contract: "0x767Aa29D35E008667540A6c2Dbd37B57F6afAA8e",
    bnb_onpool_contract: "0xb2781215a2E4E1d5f69E2E4D4643E7792dA9d369",
    onepool: "0xaC4D8b8B0682880DFd20015fB0e5DD9a30fCEbB6",
    onepool_staking: "0xe05649B24a3d9387EBCfa9736B8E581Dc220EA4a",
    onepool_bnb: "0xaC4D8b8B0682880DFd20015fB0e5DD9a30fCEbB6",
    onepool_staking_bnb: "0xe05649B24a3d9387EBCfa9736B8E581Dc220EA4a",
};


/***/ }),

/***/ "./src/app/files/eth_bridge_abi.ts":
/*!*****************************************!*\
  !*** ./src/app/files/eth_bridge_abi.ts ***!
  \*****************************************/
/*! exports provided: EBAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBAbi", function() { return EBAbi; });
var EBAbi = [{ "inputs": [{ "internalType": "address", "name": "_onePool", "type": "address" }, { "internalType": "address", "name": "_signer", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "expiryBlock", "type": "uint256" }], "name": "SetExpiryBlock", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "NewSigner", "type": "address" }], "name": "SetSigner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "SetStatus", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "txHash", "type": "bytes32" }], "name": "TransferEthOnePool", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "bytes32", "name": "txs", "type": "bytes32" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "claimOnePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "expiryBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_sender", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_blockExpirytime", "type": "uint256" }, { "internalType": "bytes32", "name": "_txHash", "type": "bytes32" }], "name": "message", "outputs": [{ "internalType": "bytes32", "name": "messageHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "msgHash", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_signer", "type": "address" }], "name": "setSigner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_status", "type": "bool" }], "name": "setStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_expiryBlock", "type": "uint256" }], "name": "setexpiryBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "txHash", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_messageHash", "type": "bytes32" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "verifySignature", "outputs": [{ "internalType": "address", "name": "signatureAddress", "type": "address" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddr", "type": "address" }, { "internalType": "address", "name": "receiver", "type": "address" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/lp_abi.ts":
/*!*********************************!*\
  !*** ./src/app/files/lp_abi.ts ***!
  \*********************************/
/*! exports provided: LPAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LPAbi", function() { return LPAbi; });
var LPAbi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112" }, { "indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112" }], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "price0CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "price1CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sync", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/lp_abi_bnb.ts":
/*!*************************************!*\
  !*** ./src/app/files/lp_abi_bnb.ts ***!
  \*************************************/
/*! exports provided: LPAbi_bnb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LPAbi_bnb", function() { return LPAbi_bnb; });
var LPAbi_bnb = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112" }, { "indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112" }], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "price0CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price1CumulativeLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/pendingpool.ts":
/*!**************************************!*\
  !*** ./src/app/files/pendingpool.ts ***!
  \**************************************/
/*! exports provided: PendingPoolAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPoolAbi", function() { return PendingPoolAbi; });
var PendingPoolAbi = [{ "inputs": [{ "internalType": "contract RewardPool", "name": "_rewardPool", "type": "address" }, { "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_stake", "type": "address" }, { "internalType": "address", "name": "_treasury", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lpId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingonePool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardpool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "debt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/pendingpool_bnb.ts":
/*!******************************************!*\
  !*** ./src/app/files/pendingpool_bnb.ts ***!
  \******************************************/
/*! exports provided: PendingPoolAbi_bnb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPoolAbi_bnb", function() { return PendingPoolAbi_bnb; });
var PendingPoolAbi_bnb = [{ "inputs": [{ "internalType": "contract RewardPool", "name": "_rewardPool", "type": "address" }, { "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "getPoolDetails", "outputs": [{ "internalType": "address", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "getRewardonePool", "outputs": [{ "internalType": "uint256", "name": "_totalReward", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "getyieldReward", "outputs": [{ "internalType": "uint256", "name": "pendinglp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lpId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingonePool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardpool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "debt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/pfac_api.ts":
/*!***********************************!*\
  !*** ./src/app/files/pfac_api.ts ***!
  \***********************************/
/*! exports provided: PfacAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfacAbi", function() { return PfacAbi; });
var PfacAbi = [{ "inputs": [{ "internalType": "contract RewardPool", "name": "_rewardPool", "type": "address" }, { "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_stake", "type": "address" }, { "internalType": "address", "name": "_treasury", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lpId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingonePool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardpool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "debt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/pool_staking_api.ts":
/*!*******************************************!*\
  !*** ./src/app/files/pool_staking_api.ts ***!
  \*******************************************/
/*! exports provided: PoolStakeAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolStakeAbi", function() { return PoolStakeAbi; });
var PoolStakeAbi = [{ "inputs": [{ "internalType": "contract IERC20", "name": "_onePool", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePool", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_share", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/reward_factory_api.ts":
/*!*********************************************!*\
  !*** ./src/app/files/reward_factory_api.ts ***!
  \*********************************************/
/*! exports provided: RewardFactoryAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardFactoryAbi", function() { return RewardFactoryAbi; });
var RewardFactoryAbi = [{ "inputs": [{ "internalType": "contract RewardPool", "name": "_rewardPool", "type": "address" }, { "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_stake", "type": "address" }, { "internalType": "address", "name": "_treasury", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lpId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingonePool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardpool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "debt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/reward_factory_api_bnb.ts":
/*!*************************************************!*\
  !*** ./src/app/files/reward_factory_api_bnb.ts ***!
  \*************************************************/
/*! exports provided: RewardFactoryAbi_bnb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardFactoryAbi_bnb", function() { return RewardFactoryAbi_bnb; });
var RewardFactoryAbi_bnb = [{ "inputs": [{ "internalType": "contract RewardPool", "name": "_rewardPool", "type": "address" }, { "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_stake", "type": "address" }, { "internalType": "address", "name": "_treasury", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lpId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingonePool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardpool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "debt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/reward_pool_api.ts":
/*!******************************************!*\
  !*** ./src/app/files/reward_pool_api.ts ***!
  \******************************************/
/*! exports provided: RewardPoolAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPoolAbi", function() { return RewardPoolAbi; });
var RewardPoolAbi = [{ "inputs": [{ "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_onePoolPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_tresary", "type": "address" }, { "internalType": "address", "name": "_convert", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_lpToken", "type": "address" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lpPoolStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePool", "outputs": [{ "internalType": "contract ONEPOOL", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePoolPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "contract IERC20", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "acconePoolPerShare", "type": "uint256" }, { "internalType": "address", "name": "reawardFactory", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setONEPoolBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/reward_pool_api_bnb.ts":
/*!**********************************************!*\
  !*** ./src/app/files/reward_pool_api_bnb.ts ***!
  \**********************************************/
/*! exports provided: RewardPoolAbi_bnb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPoolAbi_bnb", function() { return RewardPoolAbi_bnb; });
var RewardPoolAbi_bnb = [{ "inputs": [{ "internalType": "contract ONEPOOL", "name": "_onePool", "type": "address" }, { "internalType": "uint256", "name": "_onePoolPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "address", "name": "_masterChef", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_tresary", "type": "address" }, { "internalType": "address", "name": "_convert", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "OnePoolPerBlock", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "stake", "type": "address" }], "name": "SetStake", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newTreasury", "type": "address" }], "name": "SetTreasury", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_lpToken", "type": "address" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }, { "internalType": "uint256", "name": "_lpId", "type": "uint256" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lpPoolStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "masterChef", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePool", "outputs": [{ "internalType": "contract ONEPOOL", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onePoolPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "contract IERC20", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "acconePoolPerShare", "type": "uint256" }, { "internalType": "address", "name": "reawardFactory", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setONEPoolBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_stake", "type": "address" }], "name": "setStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_treasury", "type": "address" }], "name": "setTreasury", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stake", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/files/usdvals.ts":
/*!**********************************!*\
  !*** ./src/app/files/usdvals.ts ***!
  \**********************************/
/*! exports provided: USDvals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USDvals", function() { return USDvals; });
var USDvals = { "op_usd": 100, "uni_usd": 300 };


/***/ }),

/***/ "./src/app/files/vault_api.ts":
/*!************************************!*\
  !*** ./src/app/files/vault_api.ts ***!
  \************************************/
/*! exports provided: VaultAbi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultAbi", function() { return VaultAbi; });
var VaultAbi = [{ "inputs": [{ "internalType": "contract IERC20", "name": "_lpToken", "type": "address" }, { "internalType": "contract IERC20", "name": "_rewardToken", "type": "address" }, { "internalType": "uint256", "name": "_rewardPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndBlock", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "bonusEndBlock", "type": "uint256" }], "name": "StopReward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "bonusEndBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "emergencyRewardWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolInfo", "outputs": [{ "internalType": "contract IERC20", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "acconePoolPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stopReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


/***/ }),

/***/ "./src/app/pages/cms/faq/faq.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/cms/faq/faq.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Ntcy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/cms/faq/faq.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/cms/faq/faq.component.ts ***!
  \************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent(conn) {
        this.conn = conn;
        this.isFirstOpen = true;
        this.oneAtATime = true;
        this.content = false;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        this.conn.getUrl('cms/get_faq').subscribe(function (res) {
            if (res.status == true) {
                _this.faq = res.data.slice().reverse();
                _this.content = true;
            }
        });
    };
    FaqComponent.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }
    ]; };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cms/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/cms/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/binancesection/binancesection.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/content/binancesection/binancesection.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYmluYW5jZXNlY3Rpb24vYmluYW5jZXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/content/binancesection/binancesection.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/content/binancesection/binancesection.component.ts ***!
  \**************************************************************************/
/*! exports provided: BinancesectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinancesectionComponent", function() { return BinancesectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BinancesectionComponent = /** @class */ (function () {
    function BinancesectionComponent() {
    }
    BinancesectionComponent.prototype.ngOnInit = function () {
    };
    BinancesectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-binancesection',
            template: __webpack_require__(/*! raw-loader!./binancesection.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/binancesection/binancesection.component.html"),
            styles: [__webpack_require__(/*! ./binancesection.component.scss */ "./src/app/pages/content/binancesection/binancesection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BinancesectionComponent);
    return BinancesectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/ethereumsection/ethereumsection.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/content/ethereumsection/ethereumsection.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvZXRoZXJldW1zZWN0aW9uL2V0aGVyZXVtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content/ethereumsection/ethereumsection.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/content/ethereumsection/ethereumsection.component.ts ***!
  \****************************************************************************/
/*! exports provided: EthereumsectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthereumsectionComponent", function() { return EthereumsectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EthereumsectionComponent = /** @class */ (function () {
    function EthereumsectionComponent() {
    }
    EthereumsectionComponent.prototype.ngOnInit = function () {
    };
    EthereumsectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ethereumsection',
            template: __webpack_require__(/*! raw-loader!./ethereumsection.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/ethereumsection/ethereumsection.component.html"),
            styles: [__webpack_require__(/*! ./ethereumsection.component.scss */ "./src/app/pages/content/ethereumsection/ethereumsection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EthereumsectionComponent);
    return EthereumsectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/farm-bnb/farm-bnb.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/content/farm-bnb/farm-bnb.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvZmFybS1ibmIvZmFybS1ibmIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/content/farm-bnb/farm-bnb.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/content/farm-bnb/farm-bnb.component.ts ***!
  \**************************************************************/
/*! exports provided: FarmBnbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmBnbComponent", function() { return FarmBnbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _files_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/contract */ "./src/app/files/contract.ts");
/* harmony import */ var _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../files/pool_staking_api */ "./src/app/files/pool_staking_api.ts");
/* harmony import */ var _files_pendingpool_bnb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../files/pendingpool_bnb */ "./src/app/files/pendingpool_bnb.ts");
/* harmony import */ var _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../files/reward_pool_api_bnb */ "./src/app/files/reward_pool_api_bnb.ts");
/* harmony import */ var _files_pfac_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../files/pfac_api */ "./src/app/files/pfac_api.ts");
/* harmony import */ var _files_lp_abi_bnb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../files/lp_abi_bnb */ "./src/app/files/lp_abi_bnb.ts");
/* harmony import */ var _files_vault_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../files/vault_api */ "./src/app/files/vault_api.ts");
/* harmony import */ var _files_reward_factory_api_bnb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../files/reward_factory_api_bnb */ "./src/app/files/reward_factory_api_bnb.ts");
/* harmony import */ var _files_usdvals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../files/usdvals */ "./src/app/files/usdvals.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");















var contract_details = _files_contract__WEBPACK_IMPORTED_MODULE_5__["ContractDetails"];
var poolstakeabi = _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__["PoolStakeAbi"];
var lpAbi_bnb = _files_lp_abi_bnb__WEBPACK_IMPORTED_MODULE_10__["LPAbi_bnb"];
var rewardfactoryAbi_bnb = _files_reward_factory_api_bnb__WEBPACK_IMPORTED_MODULE_12__["RewardFactoryAbi_bnb"];
var vaultabi = _files_vault_api__WEBPACK_IMPORTED_MODULE_11__["VaultAbi"];
var FarmBnbComponent = /** @class */ (function () {
    function FarmBnbComponent(toastr, router, conn) {
        this.toastr = toastr;
        this.router = router;
        this.conn = conn;
        this.stakebutton_show = true;
        this.show_unstake_section = false;
        this.deposit_amount = 0;
        this.available_lp_amount = 0;
        this.uni_perc = 0;
        this.deposit_harv = 0;
        this.currency_select = "";
        this.popupcont = '<div class="popupcontent">' +
            '<div class="poplist"><span>Asset: </span><span><b>WETH</b></span></div>' +
            '<div class="poplist"><span>Vault address: </span><span><b><a>0xFE09...573e <i class="fas fa-external-link-alt"></i></a></b></span></div>' +
            '<div class="poplist"><span>Pool address: </span><span><b><a>0x3DA9...ff8e <i class="fas fa-external-link-alt"></i></a></b></span></div>' +
            '<div class="poplist"><span>fToken: </span><span><b>fWETH</b></span></div>' +
            '<div class="poplist1"><span>APY </span><span><b>7.03%</b></span></div>' +
            '<div class="poplist1"><span>0.37%: Auto harvested </span><span><b>COMP</b></span></div>' +
            '<div class="poplist1"><span>6.66%:</span><span><b>Farm</b> rewards</span></div>' +
            '<div class="poplist3"><span><b>Claim rewards:</b></span></div>' +
            '<div><ol class="numeric-list"><li>Hit "Claim rewards" to claim your <b>FARM</b></li>' +
            '<li>To earn additional interest on your <b>FARM</b>, stake your claimed <b>FARM</b> into the <b>FARM</b> pool. We recommend claiming and re-staking your <b>FARM</b> rewards into the <b>FARM</b> pool periodically (for example, weekly)</li></ol></div>' +
            '</div>';
        this.dtOptions = {};
        this.stakepairHis = [];
        this.stakeLoader = false;
        this.account = localStorage.getItem('account_bnb');
        this.token = localStorage.getItem('1pool-Token_bnb');
        this.satkeAbi = [{ "inputs": [{ "internalType": "address", "name": "_rewardToken", "type": "address" }, { "internalType": "address", "name": "_lpToken", "type": "address" }, { "internalType": "uint256", "name": "_duration", "type": "uint256" }, { "internalType": "address", "name": "_rewardDistribution", "type": "address" }, { "internalType": "address", "name": "_storage", "type": "address" }, { "internalType": "address", "name": "_sushiMasterChef", "type": "address" }, { "internalType": "uint256", "name": "_sushiPoolId", "type": "uint256" }, { "internalType": "address", "name": "_sushiToken", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardDenied", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardPaid", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenQuantity", "type": "uint256" }], "name": "SushiReward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "controller", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "duration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "earned", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastTimeRewardApplicable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastUpdateTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lpToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "notifyRewardAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingSushi", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "periodFinish", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }], "name": "pushReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPerToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPerTokenStored", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "rewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_rewardDistribution", "type": "address" }], "name": "setRewardDistribution", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_store", "type": "address" }], "name": "setStorage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "store", "outputs": [{ "internalType": "contract Storage", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sushiMasterChef", "outputs": [{ "internalType": "contract IMaster", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sushiPoolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sushiToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userRewardPerTokenPaid", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
    }
    FarmBnbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cont_add = contract_details.reward_pool_contract_bnb;
        var token_abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
        setTimeout(function () {
            window.web3 = new window.Web3(window.BinanceChain);
            var contract = new window.web3.eth.Contract(_files_pfac_api__WEBPACK_IMPORTED_MODULE_9__["PfacAbi"], "0xB493dA04D7f6026Fa1A526eF3b630B03ab675C26");
            contract.methods.totalSupply().call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var perc;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    perc = +result / Math.pow(10, 18);
                    this.deposit_harv = +perc * +_files_usdvals__WEBPACK_IMPORTED_MODULE_13__["USDvals"].uni_usd;
                    this.uni_perc = +perc / 200 * 100;
                    return [2 /*return*/];
                });
            }); });
        }, 3000);
        this.uni_usd = _files_usdvals__WEBPACK_IMPORTED_MODULE_13__["USDvals"].uni_usd;
        var key = this;
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        if (!this.account) {
            this.toastr.errorToastr('Connect your wallet', 'Error');
            this.router.navigate(['/']);
            return;
        }
        this.getBalance();
        this.stakehis();
        this.stakepairhis();
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'print'
            ]
        };
    };
    FarmBnbComponent.prototype.getBalance = function () {
        var key = this;
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        window.web3.eth.getBalance(key.account, function (error, balance) {
            key.metabalance = balance / 1.0e18;
        });
    };
    FarmBnbComponent.prototype.stakehis = function () {
        var _this = this;
        this.conn.getRequest('users/stakeHis', this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakeHis = res.result;
                _this.router.navigate(['/farm-bnb']);
            }
        });
    };
    FarmBnbComponent.prototype.get_earned_rewards = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.pendingonePool(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmBnbComponent.prototype.get_earned_rewards_weth = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            window.web3 = new window.Web3(window.BinanceChain);
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.pendingReward(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmBnbComponent.prototype.stakepairhis = function () {
        var _this = this;
        var _self = this;
        setTimeout(function () {
            _this.conn.getRequest('users/pairHis_bnb', _this.token).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var set_val_Upgrade, cont_addr, abi, pabi, rpcontract1, i, token_reward, token_balance, lp_token_bal, upgra, token_reward, token_balance, lp_token_bal, upgra;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(res.status == 1)) return [3 /*break*/, 11];
                            set_val_Upgrade = [];
                            cont_addr = contract_details.reward_pool_contract_bnb;
                            abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                            pabi = _files_pendingpool_bnb__WEBPACK_IMPORTED_MODULE_7__["PendingPoolAbi_bnb"];
                            rpcontract1 = new window.web3.eth.Contract(abi, cont_addr);
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < res.result.length)) return [3 /*break*/, 10];
                            if (!(res.result[i].poolid != '30')) return [3 /*break*/, 5];
                            return [4 /*yield*/, _self.get_earned_rewards(res.result[i].contract_address, pabi, _self.account)];
                        case 2:
                            token_reward = _a.sent();
                            return [4 /*yield*/, _self.lp_token_balance(res.result[i].address, lpAbi_bnb, _self.account)];
                        case 3:
                            token_balance = _a.sent();
                            return [4 /*yield*/, _self.dep_token_balance(res.result[i].poolid)];
                        case 4:
                            lp_token_bal = _a.sent();
                            upgra = { poolid: res.result[i].poolid, symbol: res.result[i].symbol, address: res.result[i].address, contract_address: res.result[i].contract_address, balance: (token_balance.balance > 0) ? token_balance.balance : "0", depo_bal: (lp_token_bal.balance > 0) ? lp_token_bal.balance : "0", earning: (token_reward.balance > 0) ? token_reward.balance : "0" };
                            set_val_Upgrade.push(upgra);
                            return [3 /*break*/, 9];
                        case 5: return [4 /*yield*/, _self.get_earned_rewards_weth(res.result[i].contract_address, vaultabi, _self.account)];
                        case 6:
                            token_reward = _a.sent();
                            return [4 /*yield*/, _self.lp_token_balance(res.result[i].address, lpAbi_bnb, _self.account)];
                        case 7:
                            token_balance = _a.sent();
                            return [4 /*yield*/, _self.dep_token_balance_weth(res.result[i].poolid)];
                        case 8:
                            lp_token_bal = _a.sent();
                            upgra = { poolid: res.result[i].poolid, symbol: res.result[i].symbol, address: res.result[i].address, contract_address: res.result[i].contract_address, balance: (token_balance.balance > 0) ? token_balance.balance : "0", depo_bal: (lp_token_bal.balance > 0) ? lp_token_bal.balance : "0", earning: (token_reward.balance > 0) ? token_reward.balance : "0" };
                            set_val_Upgrade.push(upgra);
                            _a.label = 9;
                        case 9:
                            i++;
                            return [3 /*break*/, 1];
                        case 10:
                            this.stakepairHis = set_val_Upgrade;
                            _a.label = 11;
                        case 11: return [2 /*return*/];
                    }
                });
            }); });
        }, 3000);
    };
    FarmBnbComponent.prototype.dep_token_balance = function (poolid) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var reawardFactory, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            reawardFactory = this.cur_stack_pool_info.reawardFactory;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi_bnb, reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: userInforesult.amount
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FarmBnbComponent.prototype.dep_token_balance_weth = function (poolid) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract, reawardFactory, rfcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        reawardFactory = "0x6Fddb67E4300d50b5F4BA47134C01930b221C31D";
                        rfcontract = new window.web3.eth.Contract(vaultabi, reawardFactory);
                        return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg, _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 2];
                                            _a = {
                                                status: true,
                                                rawbalance: userInforesult.amount
                                            };
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                        case 1:
                                            sucMsg = (_a.balance = _b.sent(),
                                                _a.message = "Got balance",
                                                _a);
                                            resolve(sucMsg);
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FarmBnbComponent.prototype.open_pair = function (paddress) {
    };
    FarmBnbComponent.prototype.stakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount_1, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        if (!(postData.amount > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount_1 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(postData.poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract_1, reawardFactory_1, _self_1;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract_1 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_1 = this.cur_stack_pool_info.reawardFactory;
                                            _self_1 = this;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_1, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(+retAccount.rawbalance < +amount_1)) return [3 /*break*/, 1];
                                                                    _self_1.toastr.errorToastr('Insufficiant Balance12', 'Error');
                                                                    _self_1.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_1;
                                                                    approve_abi = lpAbi_bnb;
                                                                    approve_spender = reawardFactory_1;
                                                                    return [4 /*yield*/, _self_1.approvecall(approve_contract, approve_abi, approve_spender, amount_1).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_1;
                                                                                            factory_abi = rewardfactoryAbi_bnb;
                                                                                            return [4 /*yield*/, _self_1.depositcall(factory_contract, factory_abi, amount_1).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                _self_1.conn.clearbackground();
                                                                                                                obj = {
                                                                                                                    "amount": postData.amount,
                                                                                                                    "poolid": postData.poolid,
                                                                                                                    "useraddress": _self_1.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Deposit",
                                                                                                                    "currency": "OP-SUSHI",
                                                                                                                    "currency_type": "BNB",
                                                                                                                };
                                                                                                                _self_1.conn.postRequest('users/stake', obj, _self_1.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self_1.toastr.successToastr(res.msg, 'success');
                                                                                                                        _self_1.router.navigate(['/farm-bnb']);
                                                                                                                        _self_1.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self_1.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self_1.stakepairhis();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self_1.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                _self_1.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                                    _self_1.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self_1.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self_1.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                            _self_1.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                    _self_1.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.toastr.errorToastr("Please enter valid number", 'Error');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FarmBnbComponent.prototype.reward = function (poolid, depo_ball) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, amount_2, cont_addr, abi, rpcontract, amount_3, cont_addr, abi, rpcontract, lp_contract_2, reawardFactory_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        if (!(depo_ball > 0)) return [3 /*break*/, 5];
                        if (!(poolid != "30")) return [3 /*break*/, 2];
                        this.conn.changebackground();
                        amount_2 = 0;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        window.web3 = new window.Web3(window.BinanceChain);
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract_3, reawardFactory_3;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract_3 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_3 = this.cur_stack_pool_info.reawardFactory;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_3, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(retAccount.rawbalance < amount_2)) return [3 /*break*/, 1];
                                                                    _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                    _self.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_3;
                                                                    approve_abi = lpAbi_bnb;
                                                                    approve_spender = reawardFactory_3;
                                                                    return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_2).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_3;
                                                                                            factory_abi = rewardfactoryAbi_bnb;
                                                                                            return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_2).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                obj = {
                                                                                                                    "amount": 0,
                                                                                                                    "poolid": 0,
                                                                                                                    "useraddress": _self.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Earn",
                                                                                                                    "currency": "OP",
                                                                                                                    "currency_type": "BNB",
                                                                                                                };
                                                                                                                _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                                        _self.conn.clearbackground();
                                                                                                                        _self.router.navigate(['/farm-bnb']);
                                                                                                                        _self.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self.stakepairhis();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                _self.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later1.', 'Error');
                                                                                                    _self.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self.toastr.errorToastr('Something went to wrong. Please try again later2.', 'Error');
                                                                            _self.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later3.', 'Error');
                                                    _self.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.conn.changebackground();
                        amount_3 = 0;
                        cont_addr = "0x6Fddb67E4300d50b5F4BA47134C01930b221C31D";
                        abi = vaultabi;
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        lp_contract_2 = "0xa65351da66f81b822caaef67340b7e1b300a42d8";
                        reawardFactory_2 = "0x6Fddb67E4300d50b5F4BA47134C01930b221C31D";
                        return [4 /*yield*/, this.lp_token_balance(lp_contract_2, lpAbi_bnb, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var approve_contract, approve_abi, approve_spender;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(retAccount.rawbalance < amount_3)) return [3 /*break*/, 1];
                                                _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                _self.conn.clearbackground();
                                                return [3 /*break*/, 3];
                                            case 1:
                                                approve_contract = lp_contract_2;
                                                approve_abi = lpAbi_bnb;
                                                approve_spender = reawardFactory_2;
                                                return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_3).then(function (retApprove) {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                            var factory_contract, factory_abi;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!retApprove.status) return [3 /*break*/, 2];
                                                                        factory_contract = reawardFactory_2;
                                                                        factory_abi = vaultabi;
                                                                        return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_3).then(function (retdeposit) {
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                    var obj;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        if (retApprove.status) {
                                                                                            obj = {
                                                                                                "amount": 0,
                                                                                                "poolid": 0,
                                                                                                "useraddress": _self.account.toString(),
                                                                                                "txid": retdeposit.txid.transactionHash,
                                                                                                "types": "Earn",
                                                                                                "currency": "OP",
                                                                                                "currency_type": "BNB",
                                                                                            };
                                                                                            _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                if (res.status == 1) {
                                                                                                    _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                    _self.conn.clearbackground();
                                                                                                    _self.router.navigate(['/farm-bnb']);
                                                                                                    _self.stakehis();
                                                                                                }
                                                                                                else {
                                                                                                    _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                }
                                                                                            });
                                                                                            _self.stakepairhis();
                                                                                        }
                                                                                        else {
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                _self.conn.clearbackground();
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 3];
                                                                    case 2:
                                                                        _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                        _self.conn.clearbackground();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    }).catch(function (error) {
                                                        _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                        _self.conn.clearbackground();
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            }).catch(function (error) {
                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                _self.conn.clearbackground();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        _self.toastr.errorToastr("Insufficiant balance", 'Error');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FarmBnbComponent.prototype.amountKeyup = function (val, stake) {
    };
    FarmBnbComponent.prototype.lp_token_balance = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.balanceOf(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmBnbComponent.prototype.approvecall = function (cont_address, abi, spender, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            window.web3 = new window.Web3(window.BinanceChain);
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString().toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .approve(spender, amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (approveresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Token is approved",
                                                        txid: approveresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, approveresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: error.message
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmBnbComponent.prototype.depositcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .deposit(amount)
                                                    .send({ from: this.account, gasLimit: window.web3.utils.toHex(525000) })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (depositresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Deposit is successfully completed ",
                                                        txid: depositresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, depositresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmBnbComponent.prototype.withdrawcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .withdraw(amount)
                                                    .send({ from: this.account, gasLimit: window.web3.utils.toHex(525000) })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (withdrawresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "withdraw is successfully completed ",
                                                        txid: withdrawresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, withdrawresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmBnbComponent.prototype.balanceref = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, poolInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var rfcontract, lp_contract;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!poolInforesult) return [3 /*break*/, 2];
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi_bnb, poolInforesult.reawardFactory);
                                            lp_contract = poolInforesult.lpToken;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            self.available_lp_amount = retAccount.balance;
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var reawardFactory, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            reawardFactory = this.cur_stack_pool_info.reawardFactory;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi_bnb, reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = self;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FarmBnbComponent.prototype.unstakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount_4, cont_addr, abi, rpcontract, amount_5, cont_addr, abi, currency_select, lp_contract, reawardFactory_4, _self_2, rfcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        if (!(postData.amount > 0)) return [3 /*break*/, 7];
                        if (!(postData.poolid != "30")) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount_4 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(postData.poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var currency_select, currency_select, currency_select, lp_contract, reawardFactory_5, _self_3, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (this.currentstakedata == 0)
                                                currency_select = "onePool-cake";
                                            else if (this.currentstakedata == 1)
                                                currency_select = "onePool-BNB";
                                            else
                                                currency_select = "onepool-USD";
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_5 = this.cur_stack_pool_info.reawardFactory;
                                            _self_3 = this;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi_bnb, reawardFactory_5);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a, factory_contract, factory_abi;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 4];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (!(userInforesult.amount < +amount_4)) return [3 /*break*/, 2];
                                                                _self_3.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                _self_3.conn.clearbackground();
                                                                return [3 /*break*/, 4];
                                                            case 2:
                                                                factory_contract = reawardFactory_5;
                                                                factory_abi = rewardfactoryAbi_bnb;
                                                                return [4 /*yield*/, _self_3.withdrawcall(factory_contract, factory_abi, amount_4).then(function (retWithdraw) {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                            var obj;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                if (retWithdraw.status) {
                                                                                    _self_3.toastr.successToastr(retWithdraw.message, 'success');
                                                                                    _self_3.conn.clearbackground();
                                                                                    obj = {
                                                                                        "amount": postData.amount,
                                                                                        "poolid": postData.poolid,
                                                                                        "useraddress": _self_3.account.toString(),
                                                                                        "txid": retWithdraw.txid.transactionHash,
                                                                                        "types": "Withdraw",
                                                                                        "currency": currency_select,
                                                                                        "currency_type": "BNB",
                                                                                    };
                                                                                    _self_3.conn.postRequest('users/stake', obj, _self_3.token).subscribe(function (res) {
                                                                                        if (res.status == 1) {
                                                                                            _self_3.router.navigate(['/stake']);
                                                                                            _self_3.stakehis();
                                                                                        }
                                                                                        else {
                                                                                            _self_3.toastr.errorToastr(res.msg, 'Error');
                                                                                        }
                                                                                    });
                                                                                    _self_3.stakepairhis();
                                                                                }
                                                                                else {
                                                                                    _self_3.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                                    _self_3.conn.clearbackground();
                                                                                }
                                                                                return [2 /*return*/];
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        _self_3.toastr.errorToastr(error.message, 'Error');
                                                                        _self_3.conn.clearbackground();
                                                                    })];
                                                            case 3:
                                                                _b.sent();
                                                                _b.label = 4;
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 4:
                        amount_5 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        currency_select = "WBNB";
                        lp_contract = "0xa65351da66f81b822caaef67340b7e1b300a42d8";
                        reawardFactory_4 = "0x6Fddb67E4300d50b5F4BA47134C01930b221C31D";
                        _self_2 = this;
                        rfcontract = new window.web3.eth.Contract(vaultabi, reawardFactory_4);
                        return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a, factory_contract, factory_abi;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 4];
                                            _a = this;
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                        case 1:
                                            _a.deposit_amount = _b.sent();
                                            if (!(userInforesult.amount < +amount_5)) return [3 /*break*/, 2];
                                            _self_2.toastr.errorToastr('Insufficiant Balance', 'Error');
                                            _self_2.conn.clearbackground();
                                            return [3 /*break*/, 4];
                                        case 2:
                                            factory_contract = reawardFactory_4;
                                            factory_abi = vaultabi;
                                            return [4 /*yield*/, _self_2.withdrawcall(factory_contract, vaultabi, amount_5).then(function (retWithdraw) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var obj;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            if (retWithdraw.status) {
                                                                _self_2.toastr.successToastr(retWithdraw.message, 'success');
                                                                _self_2.conn.clearbackground();
                                                                obj = {
                                                                    "amount": postData.amount,
                                                                    "poolid": postData.poolid,
                                                                    "useraddress": _self_2.account.toString(),
                                                                    "txid": retWithdraw.txid.transactionHash,
                                                                    "types": "Withdraw",
                                                                    "currency": currency_select,
                                                                    "currency_type": "BNB",
                                                                };
                                                                _self_2.conn.postRequest('users/stake', obj, _self_2.token).subscribe(function (res) {
                                                                    if (res.status == 1) {
                                                                        _self_2.router.navigate(['/stake']);
                                                                        _self_2.stakehis();
                                                                    }
                                                                    else {
                                                                        _self_2.toastr.errorToastr(res.msg, 'Error');
                                                                    }
                                                                });
                                                                _self_2.stakepairhis();
                                                            }
                                                            else {
                                                                _self_2.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                _self_2.conn.clearbackground();
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_2.toastr.errorToastr(error.message, 'Error');
                                                    _self_2.conn.clearbackground();
                                                })];
                                        case 3:
                                            _b.sent();
                                            _b.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        this.conn.clearbackground();
                        this.toastr.errorToastr("Please enter valid number", 'Error');
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FarmBnbComponent.prototype.stakeall = function (balancc) {
        this.stakeall_value = balancc;
    };
    FarmBnbComponent.ctorParameters = function () { return [
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] }
    ]; };
    FarmBnbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farm-bnb',
            template: __webpack_require__(/*! raw-loader!./farm-bnb.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/farm-bnb/farm-bnb.component.html"),
            styles: [__webpack_require__(/*! ./farm-bnb.component.scss */ "./src/app/pages/content/farm-bnb/farm-bnb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]])
    ], FarmBnbComponent);
    return FarmBnbComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/farm/farm.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/content/farm/farm.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvZmFybS9mYXJtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/content/farm/farm.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/content/farm/farm.component.ts ***!
  \******************************************************/
/*! exports provided: FarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmComponent", function() { return FarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _files_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/contract */ "./src/app/files/contract.ts");
/* harmony import */ var _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../files/pool_staking_api */ "./src/app/files/pool_staking_api.ts");
/* harmony import */ var _files_pendingpool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../files/pendingpool */ "./src/app/files/pendingpool.ts");
/* harmony import */ var _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../files/reward_pool_api */ "./src/app/files/reward_pool_api.ts");
/* harmony import */ var _files_pfac_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../files/pfac_api */ "./src/app/files/pfac_api.ts");
/* harmony import */ var _files_lp_abi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../files/lp_abi */ "./src/app/files/lp_abi.ts");
/* harmony import */ var _files_vault_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../files/vault_api */ "./src/app/files/vault_api.ts");
/* harmony import */ var _files_reward_factory_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../files/reward_factory_api */ "./src/app/files/reward_factory_api.ts");
/* harmony import */ var _files_usdvals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../files/usdvals */ "./src/app/files/usdvals.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");















var contract_details = _files_contract__WEBPACK_IMPORTED_MODULE_5__["ContractDetails"];
var poolstakeabi = _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__["PoolStakeAbi"];
var lpAbi = _files_lp_abi__WEBPACK_IMPORTED_MODULE_10__["LPAbi"];
var rewardfactoryAbi = _files_reward_factory_api__WEBPACK_IMPORTED_MODULE_12__["RewardFactoryAbi"];
var vaultabi = _files_vault_api__WEBPACK_IMPORTED_MODULE_11__["VaultAbi"];
var FarmComponent = /** @class */ (function () {
    function FarmComponent(toastr, router, conn) {
        this.toastr = toastr;
        this.router = router;
        this.conn = conn;
        this.stakebutton_show = true;
        this.show_unstake_section = false;
        this.deposit_amount = 0;
        this.available_lp_amount = 0;
        this.uni_perc = 0;
        this.deposit_harv = 0;
        this.currency_select = "";
        this.popupcont = '<div class="popupcontent">' +
            '<div class="poplist"><span>Asset: </span><span><b>WETH</b></span></div>' +
            '<div class="poplist"><span>Vault address: </span><span><b><a>0xFE09...573e <i class="fas fa-external-link-alt"></i></a></b></span></div>' +
            '<div class="poplist"><span>Pool address: </span><span><b><a>0x3DA9...ff8e <i class="fas fa-external-link-alt"></i></a></b></span></div>' +
            '<div class="poplist"><span>fToken: </span><span><b>fWETH</b></span></div>' +
            '<div class="poplist1"><span>APY </span><span><b>7.03%</b></span></div>' +
            '<div class="poplist1"><span>0.37%: Auto harvested </span><span><b>COMP</b></span></div>' +
            '<div class="poplist1"><span>6.66%:</span><span><b>Farm</b> rewards</span></div>' +
            '<div class="poplist3"><span><b>Claim rewards:</b></span></div>' +
            '<div><ol class="numeric-list"><li>Hit "Claim rewards" to claim your <b>FARM</b></li>' +
            '<li>To earn additional interest on your <b>FARM</b>, stake your claimed <b>FARM</b> into the <b>FARM</b> pool. We recommend claiming and re-staking your <b>FARM</b> rewards into the <b>FARM</b> pool periodically (for example, weekly)</li></ol></div>' +
            '</div>';
        this.dtOptions = {};
        this.stakepairHis = [];
        this.stakeLoader = false;
        this.account = localStorage.getItem('account');
        this.token = localStorage.getItem('1pool-Token');
        this.satkeAbi = [{ "inputs": [{ "internalType": "address", "name": "_rewardToken", "type": "address" }, { "internalType": "address", "name": "_lpToken", "type": "address" }, { "internalType": "uint256", "name": "_duration", "type": "uint256" }, { "internalType": "address", "name": "_rewardDistribution", "type": "address" }, { "internalType": "address", "name": "_storage", "type": "address" }, { "internalType": "address", "name": "_sushiMasterChef", "type": "address" }, { "internalType": "uint256", "name": "_sushiPoolId", "type": "uint256" }, { "internalType": "address", "name": "_sushiToken", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardDenied", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardPaid", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenQuantity", "type": "uint256" }], "name": "SushiReward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "controller", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "duration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "earned", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastTimeRewardApplicable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastUpdateTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lpToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "notifyRewardAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingSushi", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "periodFinish", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "poolId", "type": "uint256" }], "name": "poolDetails", "outputs": [{ "internalType": "uint256", "name": "poolAccPerShare", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }], "name": "pushReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPerToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPerTokenStored", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "rewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_rewardDistribution", "type": "address" }], "name": "setRewardDistribution", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_store", "type": "address" }], "name": "setStorage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "store", "outputs": [{ "internalType": "contract Storage", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sushiMasterChef", "outputs": [{ "internalType": "contract IMaster", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sushiPoolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "sushiToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userRewardPerTokenPaid", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
    }
    FarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cont_add = contract_details.reward_pool_contract;
        var token_abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
        setTimeout(function () {
            var contract = new window.web3.eth.Contract(_files_pfac_api__WEBPACK_IMPORTED_MODULE_9__["PfacAbi"], "0xb23fe963303f541701f2bf580160e35b0c9db417");
            contract.methods.totalSupply().call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var perc;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    perc = +result / Math.pow(10, 18);
                    this.deposit_harv = +perc * +_files_usdvals__WEBPACK_IMPORTED_MODULE_13__["USDvals"].uni_usd;
                    this.uni_perc = +perc / 200 * 100;
                    return [2 /*return*/];
                });
            }); });
        }, 100);
        this.uni_usd = _files_usdvals__WEBPACK_IMPORTED_MODULE_13__["USDvals"].uni_usd;
        var key = this;
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        if (!this.account) {
            this.toastr.errorToastr('Connect your wallet', 'Error');
            this.router.navigate(['/']);
            return;
        }
        this.getBalance();
        this.stakehis();
        this.stakepairhis();
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'print'
            ]
        };
    };
    FarmComponent.prototype.getBalance = function () {
        var key = this;
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        window.web3.eth.getBalance(key.account, function (error, balance) {
            key.metabalance = balance / 1.0e18;
        });
    };
    FarmComponent.prototype.stakehis = function () {
        var _this = this;
        this.conn.getRequest('users/stakeHis', this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakeHis = res.result;
                _this.router.navigate(['/farm']);
            }
        });
    };
    FarmComponent.prototype.get_earned_rewards = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.pendingonePool(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmComponent.prototype.get_earned_rewards_weth = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.pendingReward(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmComponent.prototype.stakepairhis = function () {
        var _this = this;
        var _self = this;
        this.conn.getRequest('users/pairHis', this.token).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var set_val_Upgrade, cont_addr, abi, pabi, rpcontract1, i, token_reward, token_balance, lp_token_bal, upgra, token_reward, token_balance, lp_token_bal, upgra;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(res.status == 1)) return [3 /*break*/, 11];
                        set_val_Upgrade = [];
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        pabi = _files_pendingpool__WEBPACK_IMPORTED_MODULE_7__["PendingPoolAbi"];
                        rpcontract1 = new window.web3.eth.Contract(abi, cont_addr);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < res.result.length)) return [3 /*break*/, 10];
                        if (!(res.result[i].poolid != '30')) return [3 /*break*/, 5];
                        return [4 /*yield*/, _self.get_earned_rewards(res.result[i].contract_address, pabi, _self.account)];
                    case 2:
                        token_reward = _a.sent();
                        return [4 /*yield*/, _self.lp_token_balance(res.result[i].address, lpAbi, _self.account)];
                    case 3:
                        token_balance = _a.sent();
                        return [4 /*yield*/, _self.dep_token_balance(res.result[i].poolid)];
                    case 4:
                        lp_token_bal = _a.sent();
                        upgra = { poolid: res.result[i].poolid, symbol: res.result[i].symbol, contract_address: res.result[i].contract_address, address: res.result[i].address, balance: (token_balance.balance > 0) ? token_balance.balance : "0", depo_bal: (lp_token_bal.balance > 0) ? lp_token_bal.balance : "0", earning: (token_reward.balance > 0) ? token_reward.balance : "0" };
                        set_val_Upgrade.push(upgra);
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, _self.get_earned_rewards_weth(res.result[i].contract_address, vaultabi, _self.account)];
                    case 6:
                        token_reward = _a.sent();
                        return [4 /*yield*/, _self.lp_token_balance(res.result[i].address, lpAbi, _self.account)];
                    case 7:
                        token_balance = _a.sent();
                        return [4 /*yield*/, _self.dep_token_balance_weth(res.result[i].poolid)];
                    case 8:
                        lp_token_bal = _a.sent();
                        upgra = { poolid: res.result[i].poolid, symbol: res.result[i].symbol, address: res.result[i].address, contract_address: res.result[i].contract_address, balance: (token_balance.balance > 0) ? token_balance.balance : "0", depo_bal: (lp_token_bal.balance > 0) ? lp_token_bal.balance : "0", earning: (token_reward.balance > 0) ? token_reward.balance : "0" };
                        set_val_Upgrade.push(upgra);
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10:
                        this.stakepairHis = set_val_Upgrade;
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        }); });
    };
    FarmComponent.prototype.dep_token_balance = function (poolid) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var reawardFactory, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            reawardFactory = this.cur_stack_pool_info.reawardFactory;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: userInforesult.amount
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FarmComponent.prototype.dep_token_balance_weth = function (poolid) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract, reawardFactory, rfcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        reawardFactory = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
                        rfcontract = new window.web3.eth.Contract(vaultabi, reawardFactory);
                        return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg, _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 2];
                                            _a = {
                                                status: true,
                                                rawbalance: userInforesult.amount
                                            };
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                        case 1:
                                            sucMsg = (_a.balance = _b.sent(),
                                                _a.message = "Got balance",
                                                _a);
                                            resolve(sucMsg);
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FarmComponent.prototype.open_pair = function (paddress) {
    };
    FarmComponent.prototype.stakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount_1, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        if (!(postData.amount > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount_1 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(postData.poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract_1, reawardFactory_1, _self_1;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract_1 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_1 = this.cur_stack_pool_info.reawardFactory;
                                            _self_1 = this;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_1, lpAbi, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(retAccount.rawbalance < amount_1)) return [3 /*break*/, 1];
                                                                    _self_1.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                    _self_1.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_1;
                                                                    approve_abi = lpAbi;
                                                                    approve_spender = reawardFactory_1;
                                                                    return [4 /*yield*/, _self_1.approvecall(approve_contract, approve_abi, approve_spender, amount_1).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_1;
                                                                                            factory_abi = rewardfactoryAbi;
                                                                                            return [4 /*yield*/, _self_1.depositcall(factory_contract, factory_abi, amount_1).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                _self_1.conn.clearbackground();
                                                                                                                obj = {
                                                                                                                    "amount": postData.amount,
                                                                                                                    "poolid": postData.poolid,
                                                                                                                    "useraddress": _self_1.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Deposit",
                                                                                                                    "currency": "OP-SUSHI",
                                                                                                                };
                                                                                                                _self_1.conn.postRequest('users/stake', obj, _self_1.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self_1.toastr.successToastr(res.msg, 'success');
                                                                                                                        _self_1.router.navigate(['/farm']);
                                                                                                                        _self_1.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self_1.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self_1.stakepairhis();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self_1.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                _self_1.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                                    _self_1.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self_1.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self_1.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                            _self_1.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                    _self_1.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.toastr.errorToastr("Please enter valid number", 'Error');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FarmComponent.prototype.reward = function (poolid, depo_ball) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, amount_2, cont_addr, abi, rpcontract, amount_3, cont_addr, abi, rpcontract, lp_contract_2, reawardFactory_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        if (!(depo_ball > 0)) return [3 /*break*/, 5];
                        if (!(poolid != "30")) return [3 /*break*/, 2];
                        this.conn.changebackground();
                        amount_2 = 0;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract_3, reawardFactory_3;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract_3 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_3 = this.cur_stack_pool_info.reawardFactory;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_3, lpAbi, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(retAccount.rawbalance < amount_2)) return [3 /*break*/, 1];
                                                                    _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                    _self.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_3;
                                                                    approve_abi = lpAbi;
                                                                    approve_spender = reawardFactory_3;
                                                                    return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_2).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_3;
                                                                                            factory_abi = rewardfactoryAbi;
                                                                                            return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_2).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                obj = {
                                                                                                                    "amount": 0,
                                                                                                                    "poolid": 0,
                                                                                                                    "useraddress": _self.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Earn",
                                                                                                                    "currency": "OP",
                                                                                                                };
                                                                                                                _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                                        _self.conn.clearbackground();
                                                                                                                        _self.router.navigate(['/farm']);
                                                                                                                        _self.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self.stakepairhis();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                _self.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                                    _self.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                            _self.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                    _self.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.conn.changebackground();
                        amount_3 = 0;
                        cont_addr = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
                        abi = vaultabi;
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        lp_contract_2 = "0xc778417e063141139fce010982780140aa0cd5ab";
                        reawardFactory_2 = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
                        return [4 /*yield*/, this.lp_token_balance(lp_contract_2, lpAbi, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var approve_contract, approve_abi, approve_spender;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(retAccount.rawbalance < amount_3)) return [3 /*break*/, 1];
                                                _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                _self.conn.clearbackground();
                                                return [3 /*break*/, 3];
                                            case 1:
                                                approve_contract = lp_contract_2;
                                                approve_abi = lpAbi;
                                                approve_spender = reawardFactory_2;
                                                return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_3).then(function (retApprove) {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                            var factory_contract, factory_abi;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!retApprove.status) return [3 /*break*/, 2];
                                                                        factory_contract = reawardFactory_2;
                                                                        factory_abi = vaultabi;
                                                                        return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_3).then(function (retdeposit) {
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                    var obj;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        if (retApprove.status) {
                                                                                            obj = {
                                                                                                "amount": 0,
                                                                                                "poolid": 0,
                                                                                                "useraddress": _self.account.toString(),
                                                                                                "txid": retdeposit.txid.transactionHash,
                                                                                                "types": "Earn",
                                                                                                "currency": "OP",
                                                                                            };
                                                                                            _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                if (res.status == 1) {
                                                                                                    _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                    _self.conn.clearbackground();
                                                                                                    _self.router.navigate(['/farm']);
                                                                                                    _self.stakehis();
                                                                                                }
                                                                                                else {
                                                                                                    _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                }
                                                                                            });
                                                                                            _self.stakepairhis();
                                                                                        }
                                                                                        else {
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                _self.conn.clearbackground();
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 3];
                                                                    case 2:
                                                                        _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                        _self.conn.clearbackground();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    }).catch(function (error) {
                                                        _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                        _self.conn.clearbackground();
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            }).catch(function (error) {
                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                _self.conn.clearbackground();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        _self.toastr.errorToastr("Insufficiant balance", 'Error');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FarmComponent.prototype.amountKeyup = function (val, stake) {
    };
    FarmComponent.prototype.lp_token_balance = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.balanceOf(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmComponent.prototype.approvecall = function (cont_address, abi, spender, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString().toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .approve(spender, amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (approveresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Token is approved",
                                                        txid: approveresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, approveresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: error.message
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmComponent.prototype.depositcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .deposit(amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (depositresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Deposit is successfully completed ",
                                                        txid: depositresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, depositresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmComponent.prototype.withdrawcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .withdraw(amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (withdrawresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "withdraw is successfully completed ",
                                                        txid: withdrawresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, withdrawresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FarmComponent.prototype.balanceref = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, poolInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var rfcontract, lp_contract;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!poolInforesult) return [3 /*break*/, 2];
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, poolInforesult.reawardFactory);
                                            lp_contract = poolInforesult.lpToken;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            self.available_lp_amount = retAccount.balance;
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var reawardFactory, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            reawardFactory = this.cur_stack_pool_info.reawardFactory;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = self;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FarmComponent.prototype.unstakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount_4, cont_addr, abi, rpcontract, amount_5, cont_addr, abi, currency_select, lp_contract, reawardFactory_4, _self_2, rfcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        if (!(postData.amount > 0)) return [3 /*break*/, 7];
                        if (!(postData.poolid != "30")) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount_4 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(postData.poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var currency_select, currency_select, currency_select, lp_contract, reawardFactory_5, _self_3, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (this.currentstakedata == 0)
                                                currency_select = "eth-onePool";
                                            else if (this.currentstakedata == 1)
                                                currency_select = "eth-sushi";
                                            else
                                                currency_select = "1pool-sushi";
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_5 = this.cur_stack_pool_info.reawardFactory;
                                            _self_3 = this;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory_5);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a, factory_contract, factory_abi;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 4];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (!(userInforesult.amount < +amount_4)) return [3 /*break*/, 2];
                                                                _self_3.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                _self_3.conn.clearbackground();
                                                                return [3 /*break*/, 4];
                                                            case 2:
                                                                factory_contract = reawardFactory_5;
                                                                factory_abi = rewardfactoryAbi;
                                                                return [4 /*yield*/, _self_3.withdrawcall(factory_contract, factory_abi, amount_4).then(function (retWithdraw) {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                            var obj;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                if (retWithdraw.status) {
                                                                                    _self_3.toastr.successToastr(retWithdraw.message, 'success');
                                                                                    _self_3.conn.clearbackground();
                                                                                    obj = {
                                                                                        "amount": postData.amount,
                                                                                        "poolid": postData.poolid,
                                                                                        "useraddress": _self_3.account.toString(),
                                                                                        "txid": retWithdraw.txid.transactionHash,
                                                                                        "types": "Withdraw",
                                                                                        "currency": currency_select,
                                                                                    };
                                                                                    _self_3.conn.postRequest('users/stake', obj, _self_3.token).subscribe(function (res) {
                                                                                        if (res.status == 1) {
                                                                                            _self_3.router.navigate(['/stake']);
                                                                                            _self_3.stakehis();
                                                                                        }
                                                                                        else {
                                                                                            _self_3.toastr.errorToastr(res.msg, 'Error');
                                                                                        }
                                                                                    });
                                                                                    _self_3.stakepairhis();
                                                                                }
                                                                                else {
                                                                                    _self_3.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                                    _self_3.conn.clearbackground();
                                                                                }
                                                                                return [2 /*return*/];
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        _self_3.toastr.errorToastr(error.message, 'Error');
                                                                        _self_3.conn.clearbackground();
                                                                    })];
                                                            case 3:
                                                                _b.sent();
                                                                _b.label = 4;
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 4:
                        amount_5 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        currency_select = "WETH";
                        lp_contract = "0xc778417e063141139fce010982780140aa0cd5ab";
                        reawardFactory_4 = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
                        _self_2 = this;
                        rfcontract = new window.web3.eth.Contract(vaultabi, reawardFactory_4);
                        return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a, factory_contract, factory_abi;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 4];
                                            _a = this;
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                        case 1:
                                            _a.deposit_amount = _b.sent();
                                            if (!(userInforesult.amount < +amount_5)) return [3 /*break*/, 2];
                                            _self_2.toastr.errorToastr('Insufficiant Balance', 'Error');
                                            _self_2.conn.clearbackground();
                                            return [3 /*break*/, 4];
                                        case 2:
                                            factory_contract = reawardFactory_4;
                                            factory_abi = vaultabi;
                                            return [4 /*yield*/, _self_2.withdrawcall(factory_contract, vaultabi, amount_5).then(function (retWithdraw) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var obj;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            if (retWithdraw.status) {
                                                                _self_2.toastr.successToastr(retWithdraw.message, 'success');
                                                                _self_2.conn.clearbackground();
                                                                obj = {
                                                                    "amount": postData.amount,
                                                                    "poolid": postData.poolid,
                                                                    "useraddress": _self_2.account.toString(),
                                                                    "txid": retWithdraw.txid.transactionHash,
                                                                    "types": "Withdraw",
                                                                    "currency": currency_select,
                                                                };
                                                                _self_2.conn.postRequest('users/stake', obj, _self_2.token).subscribe(function (res) {
                                                                    if (res.status == 1) {
                                                                        _self_2.router.navigate(['/stake']);
                                                                        _self_2.stakehis();
                                                                    }
                                                                    else {
                                                                        _self_2.toastr.errorToastr(res.msg, 'Error');
                                                                    }
                                                                });
                                                                _self_2.stakepairhis();
                                                            }
                                                            else {
                                                                _self_2.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                _self_2.conn.clearbackground();
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_2.toastr.errorToastr(error.message, 'Error');
                                                    _self_2.conn.clearbackground();
                                                })];
                                        case 3:
                                            _b.sent();
                                            _b.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        this.conn.clearbackground();
                        this.toastr.errorToastr("Please enter valid number", 'Error');
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FarmComponent.prototype.stakeall = function (balancc) {
        this.stakeall_value = balancc;
    };
    FarmComponent.ctorParameters = function () { return [
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] }
    ]; };
    FarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farm',
            template: __webpack_require__(/*! raw-loader!./farm.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/farm/farm.component.html"),
            styles: [__webpack_require__(/*! ./farm.component.scss */ "./src/app/pages/content/farm/farm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]])
    ], FarmComponent);
    return FarmComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/home/home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/content/home/home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/content/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/content/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(conn, route) {
        this.conn = conn;
        this.route = route;
        this.cms = false;
        this.static = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('forOverlayBottom');
        var data = { "pagehint": "home" };
        this.conn.postUrl('cms/post_cms', data).subscribe(function (res) {
            if (res.status == true) {
                _this.static = res.data;
                _this.cms = true;
            }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/content/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/stake-bnb/stake-bnb.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/content/stake-bnb/stake-bnb.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvc3Rha2UtYm5iL3N0YWtlLWJuYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content/stake-bnb/stake-bnb.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/content/stake-bnb/stake-bnb.component.ts ***!
  \****************************************************************/
/*! exports provided: StakeBnbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeBnbComponent", function() { return StakeBnbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _files_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/contract */ "./src/app/files/contract.ts");
/* harmony import */ var _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../files/pool_staking_api */ "./src/app/files/pool_staking_api.ts");
/* harmony import */ var _files_vault_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../files/vault_api */ "./src/app/files/vault_api.ts");
/* harmony import */ var _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../files/reward_pool_api_bnb */ "./src/app/files/reward_pool_api_bnb.ts");
/* harmony import */ var _files_lp_abi_bnb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../files/lp_abi_bnb */ "./src/app/files/lp_abi_bnb.ts");
/* harmony import */ var _files_reward_factory_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../files/reward_factory_api */ "./src/app/files/reward_factory_api.ts");
/* harmony import */ var _files_reward_factory_api_bnb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../files/reward_factory_api_bnb */ "./src/app/files/reward_factory_api_bnb.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");













var contract_details = _files_contract__WEBPACK_IMPORTED_MODULE_5__["ContractDetails"];
var poolstakeabi = _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__["PoolStakeAbi"];
var lpAbi_bnb = _files_lp_abi_bnb__WEBPACK_IMPORTED_MODULE_9__["LPAbi_bnb"];
var rewardfactoryAbi_bnb = _files_reward_factory_api_bnb__WEBPACK_IMPORTED_MODULE_11__["RewardFactoryAbi_bnb"];
var rewardfactoryAbi = _files_reward_factory_api__WEBPACK_IMPORTED_MODULE_10__["RewardFactoryAbi"];
var vaultabi = _files_vault_api__WEBPACK_IMPORTED_MODULE_7__["VaultAbi"];
var StakeBnbComponent = /** @class */ (function () {
    function StakeBnbComponent(toastr, router, conn) {
        this.toastr = toastr;
        this.router = router;
        this.conn = conn;
        this.dtOptions = {};
        this.stakepairHis = [];
        this.stakeLoader = false;
        this.account = localStorage.getItem('account_bnb');
        this.token = localStorage.getItem('1pool-Token_bnb');
        this.currency_select = "";
        this.rewrd_btn = true;
        this.contractAdd = '';
        this.deposit_amount = 0;
        this.available_lp_amount = 0;
        this.stakebutton_show = true;
        this.show_unstake_section = false;
    }
    StakeBnbComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        if (!this.account) {
            this.toastr.errorToastr('Connect your wallet', 'Error');
            this.router.navigate(['/']);
            return;
        }
        this.getBalance();
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'print',
            ]
        };
        this.stakehis();
        this.stakepairhis();
    };
    StakeBnbComponent.prototype.getBalance = function () {
        var key = this;
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        window.web3.eth.getBalance(key.account, function (error, balance) {
            key.metabalance = balance / 1.0e18;
        });
    };
    StakeBnbComponent.prototype.amountKeyup = function (val, stake) {
    };
    StakeBnbComponent.prototype.stakepair_select = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract, lp_contract, rfcontract_new;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rewrd_btn = false;
                        this.deposit_amount = 0;
                        this.available_lp_amount = 0;
                        self = this;
                        this.currentstakedata = e.target.value;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        window.web3 = new window.Web3(window.BinanceChain);
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        if (!(this.currentstakedata != "30" && this.currentstakedata != "31")) return [3 /*break*/, 2];
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, poolInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var rfcontract, lp_contract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!poolInforesult) return [3 /*break*/, 3];
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, poolInforesult.reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (userInforesult.amount > 0) {
                                                                    this.show_unstake_section = true;
                                                                }
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            lp_contract = poolInforesult.lpToken;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            if (retAccount.status) {
                                                                self.available_lp_amount = retAccount.balance;
                                                                if (retAccount.rawbalance > 0) {
                                                                    self.stakebutton_show = true;
                                                                }
                                                            }
                                                            else {
                                                                alert("Something went to wrong. Please try again later.");
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    alert("Something went to wrong. Please try again later.");
                                                })];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        lp_contract = contract_details.onepool_bnb;
                        return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi_bnb, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        if (retAccount.status) {
                                            self.available_lp_amount = retAccount.balance;
                                            if (retAccount.rawbalance > 0) {
                                                self.stakebutton_show = true;
                                            }
                                        }
                                        else {
                                            alert("Something went to wrong. Please try again later.");
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }).catch(function (error) {
                                alert("Something went to wrong. Please try again later.");
                            })];
                    case 3:
                        _a.sent();
                        rfcontract_new = new window.web3.eth.Contract(lpAbi_bnb, contract_details.onepool_staking_bnb);
                        return [4 /*yield*/, rfcontract_new.methods.balanceOf(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.toString(), 'ether')];
                                        case 1:
                                            _a.deposit_amount = _b.sent();
                                            if (userInforesult.amount > 0) {
                                                this.show_unstake_section = true;
                                            }
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StakeBnbComponent.prototype.stakeApprove = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    StakeBnbComponent.prototype.stakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount, cont_addr, abi, rpcontract, currency_select, lp_contract_1, reawardFactory_1, _self_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        if (!(this.currentstakedata != "30" && this.currentstakedata != "31")) return [3 /*break*/, 3];
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var currency_select, currency_select, currency_select, lp_contract_2, reawardFactory_2, _self_2;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            if (this.currentstakedata == 0)
                                                currency_select = "onePool-cake";
                                            else if (this.currentstakedata == 1)
                                                currency_select = "onePool-BNB";
                                            else
                                                currency_select = "onePool-USD";
                                            this.cur_stack_pool_info = result;
                                            lp_contract_2 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_2 = this.cur_stack_pool_info.reawardFactory;
                                            _self_2 = this;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_2, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(retAccount.rawbalance < amount)) return [3 /*break*/, 1];
                                                                    _self_2.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                    stake.resetForm();
                                                                    _self_2.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_2;
                                                                    approve_abi = lpAbi_bnb;
                                                                    approve_spender = reawardFactory_2;
                                                                    return [4 /*yield*/, _self_2.approvecall(approve_contract, approve_abi, approve_spender, amount).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_2;
                                                                                            factory_abi = rewardfactoryAbi;
                                                                                            return [4 /*yield*/, _self_2.depositcall(factory_contract, factory_abi, amount).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                _self_2.conn.clearbackground();
                                                                                                                obj = {
                                                                                                                    "amount": postData.amount,
                                                                                                                    "poolid": _self_2.currentstakedata,
                                                                                                                    "useraddress": _self_2.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Deposit",
                                                                                                                    "currency": currency_select,
                                                                                                                    "currency_type": "BNB",
                                                                                                                };
                                                                                                                _self_2.conn.postRequest('users/stake', obj, _self_2.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self_2.toastr.successToastr(res.msg, 'success');
                                                                                                                        _self_2.router.navigate(['/stake-bnb']);
                                                                                                                        _self_2.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self_2.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self_2.balanceref();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self_2.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                stake.resetForm();
                                                                                                                _self_2.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self_2.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                                    _self_2.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self_2.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            stake.resetForm();
                                                                                            _self_2.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self_2.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                            _self_2.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_2.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                    _self_2.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        currency_select = "1POOL-Bep";
                        lp_contract_1 = contract_details.onepool_bnb;
                        reawardFactory_1 = contract_details.onepool_staking_bnb;
                        _self_1 = this;
                        return [4 /*yield*/, this.lp_token_balance(lp_contract_1, lpAbi_bnb, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var approve_contract, approve_abi, approve_spender;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(retAccount.rawbalance < amount)) return [3 /*break*/, 1];
                                                _self_1.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                stake.resetForm();
                                                _self_1.conn.clearbackground();
                                                return [3 /*break*/, 3];
                                            case 1:
                                                approve_contract = lp_contract_1;
                                                approve_abi = lpAbi_bnb;
                                                approve_spender = reawardFactory_1;
                                                return [4 /*yield*/, _self_1.approvecall(approve_contract, approve_abi, approve_spender, amount).then(function (retApprove) {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                            var factory_contract, factory_abi;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!retApprove.status) return [3 /*break*/, 2];
                                                                        factory_contract = reawardFactory_1;
                                                                        factory_abi = rewardfactoryAbi;
                                                                        return [4 /*yield*/, _self_1.depositcall(factory_contract, factory_abi, amount).then(function (retdeposit) {
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                    var obj;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        if (retApprove.status) {
                                                                                            _self_1.conn.clearbackground();
                                                                                            obj = {
                                                                                                "amount": postData.amount,
                                                                                                "poolid": 31,
                                                                                                "useraddress": _self_1.account.toString(),
                                                                                                "txid": retdeposit.txid.transactionHash,
                                                                                                "types": "Deposit",
                                                                                                "currency": currency_select,
                                                                                                "currency_type": "BNB",
                                                                                            };
                                                                                            _self_1.conn.postRequest('users/stake', obj, _self_1.token).subscribe(function (res) {
                                                                                                if (res.status == 1) {
                                                                                                    stake.resetForm();
                                                                                                    _self_1.toastr.successToastr(res.msg, 'success');
                                                                                                    _self_1.router.navigate(['/stake-bnb']);
                                                                                                    _self_1.stakehis();
                                                                                                }
                                                                                                else {
                                                                                                    _self_1.toastr.errorToastr(res.msg, 'Error');
                                                                                                }
                                                                                            });
                                                                                            _self_1.balanceref();
                                                                                        }
                                                                                        else {
                                                                                            _self_1.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            stake.resetForm();
                                                                                            _self_1.conn.clearbackground();
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                _self_1.conn.clearbackground();
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 3];
                                                                    case 2:
                                                                        _self_1.toastr.errorToastr(retApprove.message, 'Error');
                                                                        stake.resetForm();
                                                                        _self_1.conn.clearbackground();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    }).catch(function (error) {
                                                        _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                        _self_1.conn.clearbackground();
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            }).catch(function (error) {
                                _self_1.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                _self_1.conn.clearbackground();
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StakeBnbComponent.prototype.balanceref = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        if (!(this.currentstakedata != 30)) return [3 /*break*/, 3];
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, poolInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var rfcontract, lp_contract;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!poolInforesult) return [3 /*break*/, 2];
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, poolInforesult.reawardFactory);
                                            lp_contract = poolInforesult.lpToken;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            self.available_lp_amount = retAccount.balance;
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var reawardFactory, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            reawardFactory = this.cur_stack_pool_info.reawardFactory;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = self;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StakeBnbComponent.prototype.reward = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, depo_ball, poolid, amount_1, cont_addr, abi, rpcontract, amount_2, cont_addr, abi, rpcontract, lp_contract_3, reawardFactory_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        depo_ball = _self.available_lp_amount;
                        poolid = _self.currentstakedata;
                        if (!(depo_ball > 0)) return [3 /*break*/, 5];
                        if (!(poolid != "30" && poolid != "31")) return [3 /*break*/, 2];
                        this.conn.changebackground();
                        amount_1 = 0;
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        window.web3 = new window.Web3(window.BinanceChain);
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract_4, reawardFactory_4;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract_4 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_4 = this.cur_stack_pool_info.reawardFactory;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_4, lpAbi_bnb, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(retAccount.rawbalance < amount_1)) return [3 /*break*/, 1];
                                                                    _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                    _self.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_4;
                                                                    approve_abi = lpAbi_bnb;
                                                                    approve_spender = reawardFactory_4;
                                                                    return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_1).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_4;
                                                                                            factory_abi = rewardfactoryAbi_bnb;
                                                                                            return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_1).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                obj = {
                                                                                                                    "amount": 0,
                                                                                                                    "poolid": 0,
                                                                                                                    "useraddress": _self.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Earn",
                                                                                                                    "currency": "OP",
                                                                                                                    "currency_type": "BNB",
                                                                                                                };
                                                                                                                _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                                        _self.conn.clearbackground();
                                                                                                                        _self.router.navigate(['/farm-bnb']);
                                                                                                                        _self.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self.stakepairhis();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                _self.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later1.', 'Error');
                                                                                                    _self.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self.toastr.errorToastr('Something went to wrong. Please try again later2.', 'Error');
                                                                            _self.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later3.', 'Error');
                                                    _self.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.conn.changebackground();
                        amount_2 = 0;
                        cont_addr = contract_details.onepool_staking_bnb;
                        abi = vaultabi;
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        lp_contract_3 = contract_details.onepool_bnb;
                        reawardFactory_3 = contract_details.onepool_staking_bnb;
                        return [4 /*yield*/, this.lp_token_balance(lp_contract_3, lpAbi_bnb, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var approve_contract, approve_abi, approve_spender;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(retAccount.rawbalance < amount_2)) return [3 /*break*/, 1];
                                                _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                _self.conn.clearbackground();
                                                return [3 /*break*/, 3];
                                            case 1:
                                                approve_contract = lp_contract_3;
                                                approve_abi = lpAbi_bnb;
                                                approve_spender = reawardFactory_3;
                                                return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_2).then(function (retApprove) {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                            var factory_contract, factory_abi;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!retApprove.status) return [3 /*break*/, 2];
                                                                        factory_contract = reawardFactory_3;
                                                                        factory_abi = vaultabi;
                                                                        return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_2).then(function (retdeposit) {
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                    var obj;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        if (retApprove.status) {
                                                                                            obj = {
                                                                                                "amount": 0,
                                                                                                "poolid": 31,
                                                                                                "useraddress": _self.account.toString(),
                                                                                                "txid": retdeposit.txid.transactionHash,
                                                                                                "types": "Earn",
                                                                                                "currency": "OP",
                                                                                                "currency_type": "BNB",
                                                                                            };
                                                                                            _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                if (res.status == 1) {
                                                                                                    _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                    _self.conn.clearbackground();
                                                                                                    _self.router.navigate(['/farm-bnb']);
                                                                                                    _self.stakehis();
                                                                                                }
                                                                                                else {
                                                                                                    _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                }
                                                                                            });
                                                                                            _self.stakepairhis();
                                                                                        }
                                                                                        else {
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                _self.conn.clearbackground();
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 3];
                                                                    case 2:
                                                                        _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                        _self.conn.clearbackground();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    }).catch(function (error) {
                                                        _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                        _self.conn.clearbackground();
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            }).catch(function (error) {
                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                _self.conn.clearbackground();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        _self.toastr.errorToastr("Insufficiant balance", 'Error');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StakeBnbComponent.prototype.unstakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount_3, cont_addr, abi, rpcontract, amount_4, cont_addr, abi, currency_select, lp_contract, reawardFactory_5, _self_3, rfcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        if (!(postData.amount > 0)) return [3 /*break*/, 7];
                        if (!(postData.currency != "30" && postData.currency != "31")) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount_3 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(postData.currency).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var currency_select, currency_select, currency_select, lp_contract, reawardFactory_6, _self_4, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (this.currentstakedata == 0)
                                                currency_select = "onePool-cake";
                                            else if (this.currentstakedata == 1)
                                                currency_select = "onePool-BNB";
                                            else
                                                currency_select = "onepool-USD";
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_6 = this.cur_stack_pool_info.reawardFactory;
                                            _self_4 = this;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi_bnb, reawardFactory_6);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a, factory_contract, factory_abi;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 4];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (!(userInforesult.amount < +amount_3)) return [3 /*break*/, 2];
                                                                _self_4.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                _self_4.conn.clearbackground();
                                                                return [3 /*break*/, 4];
                                                            case 2:
                                                                factory_contract = reawardFactory_6;
                                                                factory_abi = rewardfactoryAbi_bnb;
                                                                return [4 /*yield*/, _self_4.withdrawcall(factory_contract, factory_abi, amount_3).then(function (retWithdraw) {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                            var obj;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                if (retWithdraw.status) {
                                                                                    _self_4.toastr.successToastr(retWithdraw.message, 'success');
                                                                                    _self_4.conn.clearbackground();
                                                                                    obj = {
                                                                                        "amount": postData.amount,
                                                                                        "poolid": postData.currency,
                                                                                        "useraddress": _self_4.account.toString(),
                                                                                        "txid": retWithdraw.txid.transactionHash,
                                                                                        "types": "Withdraw",
                                                                                        "currency": currency_select,
                                                                                        "currency_type": "BNB",
                                                                                    };
                                                                                    _self_4.conn.postRequest('users/stake', obj, _self_4.token).subscribe(function (res) {
                                                                                        if (res.status == 1) {
                                                                                            _self_4.router.navigate(['/stake']);
                                                                                            _self_4.stakehis();
                                                                                        }
                                                                                        else {
                                                                                            _self_4.toastr.errorToastr(res.msg, 'Error');
                                                                                        }
                                                                                    });
                                                                                    _self_4.stakepairhis();
                                                                                }
                                                                                else {
                                                                                    _self_4.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                                    _self_4.conn.clearbackground();
                                                                                }
                                                                                return [2 /*return*/];
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        _self_4.toastr.errorToastr(error.message, 'Error');
                                                                        _self_4.conn.clearbackground();
                                                                    })];
                                                            case 3:
                                                                _b.sent();
                                                                _b.label = 4;
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 4:
                        amount_4 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        currency_select = "1POOL-Bep";
                        lp_contract = contract_details.onepool_bnb;
                        reawardFactory_5 = contract_details.onepool_staking_bnb;
                        _self_3 = this;
                        rfcontract = new window.web3.eth.Contract(lpAbi_bnb, reawardFactory_5);
                        return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a, factory_contract, factory_abi;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 4];
                                            _a = this;
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.toString(), 'ether')];
                                        case 1:
                                            _a.deposit_amount = _b.sent();
                                            if (!(userInforesult.amount < +amount_4)) return [3 /*break*/, 2];
                                            _self_3.toastr.errorToastr('Insufficiant Balance', 'Error');
                                            _self_3.conn.clearbackground();
                                            return [3 /*break*/, 4];
                                        case 2:
                                            factory_contract = reawardFactory_5;
                                            factory_abi = vaultabi;
                                            return [4 /*yield*/, _self_3.withdrawcall(factory_contract, vaultabi, amount_4).then(function (retWithdraw) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var obj;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            if (retWithdraw.status) {
                                                                _self_3.toastr.successToastr(retWithdraw.message, 'success');
                                                                _self_3.conn.clearbackground();
                                                                obj = {
                                                                    "amount": postData.amount,
                                                                    "poolid": postData.currency,
                                                                    "useraddress": _self_3.account.toString(),
                                                                    "txid": retWithdraw.txid.transactionHash,
                                                                    "types": "Withdraw",
                                                                    "currency": currency_select,
                                                                    "currency_type": "BNB",
                                                                };
                                                                _self_3.conn.postRequest('users/stake', obj, _self_3.token).subscribe(function (res) {
                                                                    if (res.status == 1) {
                                                                        _self_3.router.navigate(['/stake']);
                                                                        _self_3.stakehis();
                                                                    }
                                                                    else {
                                                                        _self_3.toastr.errorToastr(res.msg, 'Error');
                                                                    }
                                                                });
                                                                _self_3.stakepairhis();
                                                            }
                                                            else {
                                                                _self_3.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                _self_3.conn.clearbackground();
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_3.toastr.errorToastr(error.message, 'Error');
                                                    _self_3.conn.clearbackground();
                                                })];
                                        case 3:
                                            _b.sent();
                                            _b.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        this.conn.clearbackground();
                        this.toastr.errorToastr("Please enter valid number", 'Error');
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    StakeBnbComponent.prototype.unstakeFun_old = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount = _a.sent();
                        cont_addr = contract_details.reward_pool_contract_bnb;
                        abi = _files_reward_pool_api_bnb__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi_bnb"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract, reawardFactory_7, _self_5, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_7 = this.cur_stack_pool_info.reawardFactory;
                                            _self_5 = this;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory_7);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a, factory_contract, factory_abi;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 4];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (!(userInforesult.amount < +amount)) return [3 /*break*/, 2];
                                                                _self_5.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                stake.resetForm();
                                                                _self_5.conn.clearbackground();
                                                                return [3 /*break*/, 4];
                                                            case 2:
                                                                factory_contract = reawardFactory_7;
                                                                factory_abi = rewardfactoryAbi;
                                                                return [4 /*yield*/, _self_5.withdrawcall(factory_contract, factory_abi, amount).then(function (retWithdraw) {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                            var obj;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                if (retWithdraw.status) {
                                                                                    _self_5.toastr.successToastr(retWithdraw.message, 'success');
                                                                                    stake.resetForm();
                                                                                    _self_5.conn.clearbackground();
                                                                                    obj = {
                                                                                        "amount": postData.amount,
                                                                                        "poolid": _self_5.currentstakedata,
                                                                                        "useraddress": _self_5.account.toString(),
                                                                                        "txid": retWithdraw.txid.transactionHash,
                                                                                        "types": "Unstake",
                                                                                        "currency_type": "BNB",
                                                                                    };
                                                                                    _self_5.conn.postRequest('users/stake', obj, _self_5.token).subscribe(function (res) {
                                                                                        if (res.status == 1) {
                                                                                            _self_5.router.navigate(['/stake-bnb']);
                                                                                            _self_5.stakehis();
                                                                                        }
                                                                                        else {
                                                                                            _self_5.toastr.errorToastr(res.msg, 'Error');
                                                                                        }
                                                                                    });
                                                                                    _self_5.balanceref();
                                                                                }
                                                                                else {
                                                                                    _self_5.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                                    stake.resetForm();
                                                                                    _self_5.conn.clearbackground();
                                                                                }
                                                                                return [2 /*return*/];
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        _self_5.toastr.errorToastr(error.message, 'Error');
                                                                        _self_5.conn.clearbackground();
                                                                    })];
                                                            case 3:
                                                                _b.sent();
                                                                _b.label = 4;
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StakeBnbComponent.prototype.lp_token_balance = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            window.web3 = new window.Web3(window.BinanceChain);
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.balanceOf(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeBnbComponent.prototype.approvecall = function (cont_address, abi, spender, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].chainid.toString().toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .approve(spender, amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (approveresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Token is approved",
                                                        txid: approveresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, approveresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: error.message
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeBnbComponent.prototype.depositcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .deposit(amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (depositresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Deposit is successfully completed ",
                                                        txid: depositresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, depositresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeBnbComponent.prototype.withdrawcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId != _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .withdraw(amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (withdrawresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "withdraw is successfully completed ",
                                                        txid: withdrawresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, withdrawresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeBnbComponent.prototype.stakehis = function () {
        var _this = this;
        this.conn.getRequest('users/stakeHis_bnb', this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakeHis = res.result;
                _this.router.navigate(['/stake-bnb']);
            }
        });
    };
    StakeBnbComponent.prototype.stakepairhis = function () {
        var _this = this;
        this.conn.getRequest('users/pairHis_bnb', this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakepairHis = res.result;
            }
        });
    };
    StakeBnbComponent.ctorParameters = function () { return [
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] }
    ]; };
    StakeBnbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stake-bnb',
            template: __webpack_require__(/*! raw-loader!./stake-bnb.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/stake-bnb/stake-bnb.component.html"),
            styles: [__webpack_require__(/*! ./stake-bnb.component.scss */ "./src/app/pages/content/stake-bnb/stake-bnb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]])
    ], StakeBnbComponent);
    return StakeBnbComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/stake/stake.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/content/stake/stake.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvc3Rha2Uvc3Rha2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/content/stake/stake.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/content/stake/stake.component.ts ***!
  \********************************************************/
/*! exports provided: StakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeComponent", function() { return StakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _files_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/contract */ "./src/app/files/contract.ts");
/* harmony import */ var _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../files/pool_staking_api */ "./src/app/files/pool_staking_api.ts");
/* harmony import */ var _files_vault_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../files/vault_api */ "./src/app/files/vault_api.ts");
/* harmony import */ var _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../files/reward_pool_api */ "./src/app/files/reward_pool_api.ts");
/* harmony import */ var _files_lp_abi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../files/lp_abi */ "./src/app/files/lp_abi.ts");
/* harmony import */ var _files_reward_factory_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../files/reward_factory_api */ "./src/app/files/reward_factory_api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");












var contract_details = _files_contract__WEBPACK_IMPORTED_MODULE_5__["ContractDetails"];
var poolstakeabi = _files_pool_staking_api__WEBPACK_IMPORTED_MODULE_6__["PoolStakeAbi"];
var lpAbi = _files_lp_abi__WEBPACK_IMPORTED_MODULE_9__["LPAbi"];
var rewardfactoryAbi = _files_reward_factory_api__WEBPACK_IMPORTED_MODULE_10__["RewardFactoryAbi"];
var vaultabi = _files_vault_api__WEBPACK_IMPORTED_MODULE_7__["VaultAbi"];
var StakeComponent = /** @class */ (function () {
    function StakeComponent(toastr, router, conn) {
        this.toastr = toastr;
        this.router = router;
        this.conn = conn;
        this.dtOptions = {};
        this.stakepairHis = [];
        this.stakeLoader = false;
        this.account = localStorage.getItem('account');
        this.token = localStorage.getItem('1pool-Token');
        this.currency_select = "";
        this.rewrd_btn = true;
        this.contractAdd = '';
        this.deposit_amount = 0;
        this.available_lp_amount = 0;
        this.stakebutton_show = true;
        this.show_unstake_section = false;
    }
    StakeComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        if (!this.account) {
            this.toastr.errorToastr('Connect your wallet', 'Error');
            this.router.navigate(['/']);
            return;
        }
        this.getBalance();
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'print',
            ]
        };
        this.stakehis();
        this.stakepairhis();
    };
    StakeComponent.prototype.getBalance = function () {
        var key = this;
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        window.web3.eth.getBalance(key.account, function (error, balance) {
            key.metabalance = balance / 1.0e18;
        });
    };
    StakeComponent.prototype.amountKeyup = function (val, stake) {
    };
    StakeComponent.prototype.stakepair_select = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract, lp_contract, rfcontract_new;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rewrd_btn = false;
                        this.deposit_amount = 0;
                        this.available_lp_amount = 0;
                        self = this;
                        this.currentstakedata = e.target.value;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        lp_contract = contract_details.onepool;
                        return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        if (retAccount.status) {
                                            self.available_lp_amount = retAccount.balance;
                                            if (retAccount.rawbalance > 0) {
                                                self.stakebutton_show = true;
                                            }
                                        }
                                        else {
                                            alert("Something went to wrong. Please try again later.");
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            }).catch(function (error) {
                                alert("Something went to wrong. Please try again later.");
                            })];
                    case 1:
                        _a.sent();
                        rfcontract_new = new window.web3.eth.Contract(lpAbi, contract_details.onepool_staking);
                        return [4 /*yield*/, rfcontract_new.methods.balanceOf(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 2];
                                            _a = this;
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.toString(), 'ether')];
                                        case 1:
                                            _a.deposit_amount = _b.sent();
                                            if (userInforesult.amount > 0) {
                                                this.show_unstake_section = true;
                                            }
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StakeComponent.prototype.stakeApprove = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    StakeComponent.prototype.stakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount, cont_addr, abi, rpcontract, currency_select, lp_contract, reawardFactory, _self;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        currency_select = "1POOL";
                        lp_contract = contract_details.onepool;
                        reawardFactory = contract_details.onepool_staking;
                        _self = this;
                        return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var approve_contract, approve_abi, approve_spender;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(retAccount.rawbalance < amount)) return [3 /*break*/, 1];
                                                _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                stake.resetForm();
                                                _self.conn.clearbackground();
                                                return [3 /*break*/, 3];
                                            case 1:
                                                approve_contract = lp_contract;
                                                approve_abi = lpAbi;
                                                approve_spender = reawardFactory;
                                                return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount).then(function (retApprove) {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                            var factory_contract, factory_abi;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!retApprove.status) return [3 /*break*/, 2];
                                                                        factory_contract = reawardFactory;
                                                                        factory_abi = rewardfactoryAbi;
                                                                        return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount).then(function (retdeposit) {
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                    var obj;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        if (retApprove.status) {
                                                                                            _self.conn.clearbackground();
                                                                                            obj = {
                                                                                                "amount": postData.amount,
                                                                                                "poolid": 31,
                                                                                                "useraddress": _self.account.toString(),
                                                                                                "txid": retdeposit.txid.transactionHash,
                                                                                                "types": "Deposit",
                                                                                                "currency": currency_select,
                                                                                            };
                                                                                            _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                if (res.status == 1) {
                                                                                                    stake.resetForm();
                                                                                                    _self.toastr.successToastr(res.msg, 'success');
                                                                                                    _self.router.navigate(['/stake']);
                                                                                                    _self.stakehis();
                                                                                                }
                                                                                                else {
                                                                                                    _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                }
                                                                                            });
                                                                                            _self.balanceref();
                                                                                        }
                                                                                        else {
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            stake.resetForm();
                                                                                            _self.conn.clearbackground();
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                _self.conn.clearbackground();
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 3];
                                                                    case 2:
                                                                        _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                        stake.resetForm();
                                                                        _self.conn.clearbackground();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    }).catch(function (error) {
                                                        _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                        _self.conn.clearbackground();
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            }).catch(function (error) {
                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                _self.conn.clearbackground();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StakeComponent.prototype.balanceref = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        if (!(this.currentstakedata != 30)) return [3 /*break*/, 3];
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, poolInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var rfcontract, lp_contract;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!poolInforesult) return [3 /*break*/, 2];
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, poolInforesult.reawardFactory);
                                            lp_contract = poolInforesult.lpToken;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract, lpAbi, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            self.available_lp_amount = retAccount.balance;
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var reawardFactory, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            reawardFactory = this.cur_stack_pool_info.reawardFactory;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 2];
                                                                _a = self;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                _b.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StakeComponent.prototype.unstakeFun = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount_1, cont_addr, abi, rpcontract, amount_2, cont_addr, abi, currency_select, lp_contract, reawardFactory_1, _self_1, rfcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        if (!(postData.amount > 0)) return [3 /*break*/, 7];
                        if (!(postData.currency != "31")) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount_1 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(postData.currency).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var currency_select, currency_select, currency_select, lp_contract, reawardFactory_2, _self_2, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (this.currentstakedata == 0)
                                                currency_select = "eth-onePool";
                                            else if (this.currentstakedata == 1)
                                                currency_select = "eth-sushi";
                                            else
                                                currency_select = "1pool-sushi";
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_2 = this.cur_stack_pool_info.reawardFactory;
                                            _self_2 = this;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory_2);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a, factory_contract, factory_abi;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 4];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (!(userInforesult.amount < +amount_1)) return [3 /*break*/, 2];
                                                                _self_2.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                _self_2.conn.clearbackground();
                                                                return [3 /*break*/, 4];
                                                            case 2:
                                                                factory_contract = reawardFactory_2;
                                                                factory_abi = rewardfactoryAbi;
                                                                return [4 /*yield*/, _self_2.withdrawcall(factory_contract, factory_abi, amount_1).then(function (retWithdraw) {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                            var obj;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                if (retWithdraw.status) {
                                                                                    _self_2.toastr.successToastr(retWithdraw.message, 'success');
                                                                                    _self_2.conn.clearbackground();
                                                                                    obj = {
                                                                                        "amount": postData.amount,
                                                                                        "poolid": postData.currency,
                                                                                        "useraddress": _self_2.account.toString(),
                                                                                        "txid": retWithdraw.txid.transactionHash,
                                                                                        "types": "Withdraw",
                                                                                        "currency": currency_select,
                                                                                    };
                                                                                    _self_2.conn.postRequest('users/stake', obj, _self_2.token).subscribe(function (res) {
                                                                                        if (res.status == 1) {
                                                                                            _self_2.router.navigate(['/stake']);
                                                                                            _self_2.stakehis();
                                                                                        }
                                                                                        else {
                                                                                            _self_2.toastr.errorToastr(res.msg, 'Error');
                                                                                        }
                                                                                    });
                                                                                    _self_2.stakepairhis();
                                                                                }
                                                                                else {
                                                                                    _self_2.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                                    _self_2.conn.clearbackground();
                                                                                }
                                                                                return [2 /*return*/];
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        _self_2.toastr.errorToastr(error.message, 'Error');
                                                                        _self_2.conn.clearbackground();
                                                                    })];
                                                            case 3:
                                                                _b.sent();
                                                                _b.label = 4;
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 4:
                        amount_2 = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        currency_select = "1POOL";
                        lp_contract = contract_details.onepool;
                        reawardFactory_1 = contract_details.onepool_staking;
                        _self_1 = this;
                        rfcontract = new window.web3.eth.Contract(lpAbi, reawardFactory_1);
                        return [4 /*yield*/, rfcontract.methods.balanceOf(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a, factory_contract, factory_abi;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!userInforesult) return [3 /*break*/, 4];
                                            _a = this;
                                            return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.toString(), 'ether')];
                                        case 1:
                                            _a.deposit_amount = _b.sent();
                                            if (!(userInforesult.amount < +amount_2)) return [3 /*break*/, 2];
                                            _self_1.toastr.errorToastr('Insufficiant Balance', 'Error');
                                            _self_1.conn.clearbackground();
                                            return [3 /*break*/, 4];
                                        case 2:
                                            factory_contract = reawardFactory_1;
                                            factory_abi = rewardfactoryAbi;
                                            return [4 /*yield*/, _self_1.withdrawcall(factory_contract, factory_abi, amount_2).then(function (retWithdraw) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var obj;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            if (retWithdraw.status) {
                                                                _self_1.toastr.successToastr(retWithdraw.message, 'success');
                                                                _self_1.conn.clearbackground();
                                                                obj = {
                                                                    "amount": postData.amount,
                                                                    "poolid": postData.currency,
                                                                    "useraddress": _self_1.account.toString(),
                                                                    "txid": retWithdraw.txid.transactionHash,
                                                                    "types": "Withdraw",
                                                                    "currency": currency_select,
                                                                };
                                                                _self_1.conn.postRequest('users/stake', obj, _self_1.token).subscribe(function (res) {
                                                                    if (res.status == 1) {
                                                                        _self_1.router.navigate(['/stake']);
                                                                        _self_1.stakehis();
                                                                    }
                                                                    else {
                                                                        _self_1.toastr.errorToastr(res.msg, 'Error');
                                                                    }
                                                                });
                                                                _self_1.stakepairhis();
                                                            }
                                                            else {
                                                                _self_1.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                _self_1.conn.clearbackground();
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self_1.toastr.errorToastr(error.message, 'Error');
                                                    _self_1.conn.clearbackground();
                                                })];
                                        case 3:
                                            _b.sent();
                                            _b.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        this.conn.clearbackground();
                        this.toastr.errorToastr("Please enter valid number", 'Error');
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    StakeComponent.prototype.unstakeFun_old = function (stake) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postData, amount, cont_addr, abi, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        postData = stake.value;
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount.toString(), 'ether')];
                    case 1:
                        amount = _a.sent();
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(this.currentstakedata).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract, reawardFactory_3, _self_3, rfcontract;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_3 = this.cur_stack_pool_info.reawardFactory;
                                            _self_3 = this;
                                            rfcontract = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory_3);
                                            return [4 /*yield*/, rfcontract.methods.userInfo(this.account).call(function (err, userInforesult) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var _a, factory_contract, factory_abi;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!userInforesult) return [3 /*break*/, 4];
                                                                _a = this;
                                                                return [4 /*yield*/, window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether')];
                                                            case 1:
                                                                _a.deposit_amount = _b.sent();
                                                                if (!(userInforesult.amount < +amount)) return [3 /*break*/, 2];
                                                                _self_3.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                stake.resetForm();
                                                                _self_3.conn.clearbackground();
                                                                return [3 /*break*/, 4];
                                                            case 2:
                                                                factory_contract = reawardFactory_3;
                                                                factory_abi = rewardfactoryAbi;
                                                                return [4 /*yield*/, _self_3.withdrawcall(factory_contract, factory_abi, amount).then(function (retWithdraw) {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                            var obj;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                if (retWithdraw.status) {
                                                                                    _self_3.toastr.successToastr(retWithdraw.message, 'success');
                                                                                    stake.resetForm();
                                                                                    _self_3.conn.clearbackground();
                                                                                    obj = {
                                                                                        "amount": postData.amount,
                                                                                        "poolid": _self_3.currentstakedata,
                                                                                        "useraddress": _self_3.account.toString(),
                                                                                        "txid": retWithdraw.txid.transactionHash,
                                                                                        "types": "Unstake",
                                                                                    };
                                                                                    _self_3.conn.postRequest('users/stake', obj, _self_3.token).subscribe(function (res) {
                                                                                        if (res.status == 1) {
                                                                                            _self_3.router.navigate(['/stake']);
                                                                                            _self_3.stakehis();
                                                                                        }
                                                                                        else {
                                                                                            _self_3.toastr.errorToastr(res.msg, 'Error');
                                                                                        }
                                                                                    });
                                                                                    _self_3.balanceref();
                                                                                }
                                                                                else {
                                                                                    _self_3.toastr.errorToastr(retWithdraw.message, 'Error');
                                                                                    stake.resetForm();
                                                                                    _self_3.conn.clearbackground();
                                                                                }
                                                                                return [2 /*return*/];
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        _self_3.toastr.errorToastr(error.message, 'Error');
                                                                        _self_3.conn.clearbackground();
                                                                    })];
                                                            case 3:
                                                                _b.sent();
                                                                _b.label = 4;
                                                            case 4: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StakeComponent.prototype.lp_token_balance = function (cont_address, abi, useraddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods.balanceOf(useraddress).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var sucMsg, _a, sucMsg;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!result) return [3 /*break*/, 2];
                                                                _a = {
                                                                    status: true,
                                                                    rawbalance: result
                                                                };
                                                                return [4 /*yield*/, window.web3.utils.fromWei(result.toString(), 'ether')];
                                                            case 1:
                                                                sucMsg = (_a.balance = _b.sent(),
                                                                    _a.message = "Got balance",
                                                                    _a);
                                                                resolve(sucMsg);
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                sucMsg = {
                                                                    status: false,
                                                                    message: "Somthing went to wrong. Please try again later.",
                                                                };
                                                                resolve(sucMsg);
                                                                _b.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeComponent.prototype.approvecall = function (cont_address, abi, spender, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].chainid.toString().toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .approve(spender, amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (approveresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Token is approved",
                                                        txid: approveresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, approveresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: error.message
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeComponent.prototype.depositcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .deposit(amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (depositresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "Deposit is successfully completed ",
                                                        txid: depositresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, depositresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeComponent.prototype.withdrawcall = function (cont_address, abi, amountIN) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cont_add, token_abi, contract, amount, decimals;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            cont_add = cont_address;
                            token_abi = abi;
                            contract = new window.web3.eth.Contract(token_abi, cont_add);
                            amount = amountIN;
                            decimals = 18;
                            window.web3.eth.getChainId(function (err, netId) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sucMsg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(netId == _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].chainid.toString())) return [3 /*break*/, 2];
                                            return [4 /*yield*/, contract.methods
                                                    .withdraw(amount)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (withdrawresult) {
                                                    var sucMsg = {
                                                        status: true,
                                                        message: "withdraw is successfully completed ",
                                                        txid: withdrawresult,
                                                    };
                                                    resolve(sucMsg);
                                                })
                                                    .on("confirmation", function (confirmationNumber, withdrawresult) {
                                                })
                                                    .on("error", function (error) {
                                                    var sucMsg = {
                                                        status: false,
                                                        message: "Transaction is failed"
                                                    };
                                                    resolve(sucMsg);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            sucMsg = {
                                                status: false,
                                                message: "Kindly Change Ropsten Network",
                                            };
                                            resolve(sucMsg);
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    StakeComponent.prototype.stakehis = function () {
        var _this = this;
        this.conn.getRequest('users/stakeHis', this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakeHis = res.result;
                _this.router.navigate(['/stake']);
            }
        });
    };
    StakeComponent.prototype.stakepairhis = function () {
        var _this = this;
        this.conn.getRequest('users/pairHis', this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakepairHis = res.result;
            }
        });
    };
    StakeComponent.prototype.reward = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, depo_ball, poolid, amount_3, cont_addr, abi, rpcontract, amount_4, cont_addr, abi, rpcontract, lp_contract_1, reawardFactory_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        depo_ball = _self.available_lp_amount;
                        poolid = _self.currentstakedata;
                        if (!(depo_ball > 0)) return [3 /*break*/, 5];
                        if (!(poolid != "31")) return [3 /*break*/, 2];
                        this.conn.changebackground();
                        amount_3 = 0;
                        cont_addr = contract_details.reward_pool_contract;
                        abi = _files_reward_pool_api__WEBPACK_IMPORTED_MODULE_8__["RewardPoolAbi"];
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        return [4 /*yield*/, rpcontract.methods.poolInfo(poolid).call(function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var lp_contract_2, reawardFactory_5;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            this.cur_stack_pool_info = result;
                                            lp_contract_2 = this.cur_stack_pool_info.lpToken;
                                            reawardFactory_5 = this.cur_stack_pool_info.reawardFactory;
                                            return [4 /*yield*/, this.lp_token_balance(lp_contract_2, lpAbi, this.account).then(function (retAccount) {
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                        var approve_contract, approve_abi, approve_spender;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(retAccount.rawbalance < amount_3)) return [3 /*break*/, 1];
                                                                    _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                                    _self.conn.clearbackground();
                                                                    return [3 /*break*/, 3];
                                                                case 1:
                                                                    approve_contract = lp_contract_2;
                                                                    approve_abi = lpAbi;
                                                                    approve_spender = reawardFactory_5;
                                                                    return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_3).then(function (retApprove) {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                var factory_contract, factory_abi;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            if (!retApprove.status) return [3 /*break*/, 2];
                                                                                            factory_contract = reawardFactory_5;
                                                                                            factory_abi = rewardfactoryAbi;
                                                                                            return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_3).then(function (retdeposit) {
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                                        var obj;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            if (retApprove.status) {
                                                                                                                obj = {
                                                                                                                    "amount": 0,
                                                                                                                    "poolid": 0,
                                                                                                                    "useraddress": _self.account.toString(),
                                                                                                                    "txid": retdeposit.txid.transactionHash,
                                                                                                                    "types": "Earn",
                                                                                                                    "currency": "OP",
                                                                                                                };
                                                                                                                _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                                    if (res.status == 1) {
                                                                                                                        _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                                        _self.conn.clearbackground();
                                                                                                                        _self.router.navigate(['/farm']);
                                                                                                                        _self.stakehis();
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                                    }
                                                                                                                });
                                                                                                                _self.stakepairhis();
                                                                                                            }
                                                                                                            else {
                                                                                                                _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                                                _self.conn.clearbackground();
                                                                                                            }
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                                    _self.conn.clearbackground();
                                                                                                })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [3 /*break*/, 3];
                                                                                        case 2:
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                            _a.label = 3;
                                                                                        case 3: return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }).catch(function (error) {
                                                                            _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                            _self.conn.clearbackground();
                                                                        })];
                                                                case 2:
                                                                    _a.sent();
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                    _self.conn.clearbackground();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 2];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.conn.changebackground();
                        amount_4 = 0;
                        cont_addr = contract_details.onepool_staking;
                        abi = vaultabi;
                        rpcontract = new window.web3.eth.Contract(abi, cont_addr);
                        lp_contract_1 = contract_details.onepool;
                        reawardFactory_4 = contract_details.onepool_staking;
                        return [4 /*yield*/, this.lp_token_balance(lp_contract_1, lpAbi, this.account).then(function (retAccount) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    var approve_contract, approve_abi, approve_spender;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(retAccount.rawbalance < amount_4)) return [3 /*break*/, 1];
                                                _self.toastr.errorToastr('Insufficiant Balance', 'Error');
                                                _self.conn.clearbackground();
                                                return [3 /*break*/, 3];
                                            case 1:
                                                approve_contract = lp_contract_1;
                                                approve_abi = lpAbi;
                                                approve_spender = reawardFactory_4;
                                                return [4 /*yield*/, _self.approvecall(approve_contract, approve_abi, approve_spender, amount_4).then(function (retApprove) {
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                            var factory_contract, factory_abi;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!retApprove.status) return [3 /*break*/, 2];
                                                                        factory_contract = reawardFactory_4;
                                                                        factory_abi = vaultabi;
                                                                        return [4 /*yield*/, _self.depositcall(factory_contract, factory_abi, amount_4).then(function (retdeposit) {
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                                                                    var obj;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        if (retApprove.status) {
                                                                                            obj = {
                                                                                                "amount": 0,
                                                                                                "poolid": 31,
                                                                                                "useraddress": _self.account.toString(),
                                                                                                "txid": retdeposit.txid.transactionHash,
                                                                                                "types": "Earn",
                                                                                                "currency": "OP",
                                                                                            };
                                                                                            _self.conn.postRequest('users/stake', obj, _self.token).subscribe(function (res) {
                                                                                                if (res.status == 1) {
                                                                                                    _self.toastr.successToastr("Successfully earned", 'success');
                                                                                                    _self.conn.clearbackground();
                                                                                                    _self.router.navigate(['/farm']);
                                                                                                    _self.stakehis();
                                                                                                }
                                                                                                else {
                                                                                                    _self.toastr.errorToastr(res.msg, 'Error');
                                                                                                }
                                                                                            });
                                                                                            _self.stakepairhis();
                                                                                        }
                                                                                        else {
                                                                                            _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                                            _self.conn.clearbackground();
                                                                                        }
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                                                _self.conn.clearbackground();
                                                                            })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 3];
                                                                    case 2:
                                                                        _self.toastr.errorToastr(retApprove.message, 'Error');
                                                                        _self.conn.clearbackground();
                                                                        _a.label = 3;
                                                                    case 3: return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    }).catch(function (error) {
                                                        _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                                        _self.conn.clearbackground();
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            }).catch(function (error) {
                                _self.toastr.errorToastr('Something went to wrong. Please try again later.', 'Error');
                                _self.conn.clearbackground();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        _self.toastr.errorToastr("Insufficiant balance", 'Error');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StakeComponent.ctorParameters = function () { return [
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] }
    ]; };
    StakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stake',
            template: __webpack_require__(/*! raw-loader!./stake.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/stake/stake.component.html"),
            styles: [__webpack_require__(/*! ./stake.component.scss */ "./src/app/pages/content/stake/stake.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]])
    ], StakeComponent);
    return StakeComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/transit-bnb/transit-bnb.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/content/transit-bnb/transit-bnb.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvdHJhbnNpdC1ibmIvdHJhbnNpdC1ibmIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/content/transit-bnb/transit-bnb.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/content/transit-bnb/transit-bnb.component.ts ***!
  \********************************************************************/
/*! exports provided: TransitBnbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitBnbComponent", function() { return TransitBnbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _files_lp_abi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/lp_abi */ "./src/app/files/lp_abi.ts");
/* harmony import */ var _files_eth_bridge_abi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../files/eth_bridge_abi */ "./src/app/files/eth_bridge_abi.ts");
/* harmony import */ var _files_bnb_bridge_abi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../files/bnb_bridge_abi */ "./src/app/files/bnb_bridge_abi.ts");
/* harmony import */ var _files_contract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../files/contract */ "./src/app/files/contract.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");










var lpAbi = _files_lp_abi__WEBPACK_IMPORTED_MODULE_5__["LPAbi"];
var ebAbi = _files_eth_bridge_abi__WEBPACK_IMPORTED_MODULE_6__["EBAbi"];
var bbAbi = _files_bnb_bridge_abi__WEBPACK_IMPORTED_MODULE_7__["BBAbi"];
var contract_details = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"];
var eth_onpool_address = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].eth_onpool_address;
var bnb_onpool_address = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].bnb_onpool_address;
var eth_onpool_contract = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].eth_onpool_contract;
var bnb_onpool_contract = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].bnb_onpool_contract;
var TransitBnbComponent = /** @class */ (function () {
    function TransitBnbComponent(modalService, toastr, router, conn) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.conn = conn;
        this.dtOptions = {};
        this.stakepairHis = [];
        this.stakeLoader = false;
        this.account = localStorage.getItem('account_bnb');
        this.token = localStorage.getItem('1pool-Token_bnb');
        this.currency_select = "";
        this.eth_bal_op = "0";
        this.approve_btn = false;
        this.transit_btn = false;
        this.showDiv = {
            bnbstation: false
        };
    }
    TransitBnbComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TransitBnbComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'print'
            ]
        };
        var _self = this;
        if (!this.account) {
            this.toastr.errorToastr('Connect your wallet', 'Error');
            this.router.navigate(['/']);
            return;
        }
        this.stakehis();
    };
    TransitBnbComponent.prototype.stakehis = function () {
        var _this = this;
        var obj = { "account": this.account };
        this.conn.postRequest('users/history_eth', obj, this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakeHis = res.result;
            }
        });
    };
    TransitBnbComponent.prototype.change_fun = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.web3 = new window.Web3(window.BinanceChain);
                        rpcontract = new window.web3.eth.Contract(lpAbi, bnb_onpool_address);
                        return [4 /*yield*/, rpcontract.methods.balanceOf(this.account).call(function (err, balance) {
                                _this.eth_bal_op = balance / Math.pow(10, 18);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, rpcontract.methods.allowance(this.account, bnb_onpool_contract).call(function (err, allowance) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (allowance > 0) {
                                        this.transit_btn = true;
                                    }
                                    else {
                                        this.approve_btn = true;
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitBnbComponent.prototype.approve_func = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.web3 = new window.Web3(window.BinanceChain);
                        _self = this;
                        this.conn.changebackground();
                        rpcontract = new window.web3.eth.Contract(lpAbi, bnb_onpool_address);
                        return [4 /*yield*/, rpcontract.methods
                                .approve(bnb_onpool_contract, "115792089237316195423570985008687907853269984665640564039457584007913129639935")
                                .send({ from: this.account })
                                .on("transactionHash", function (hash) {
                            })
                                .on("receipt", function (approveresult) {
                                _self.conn.clearbackground();
                                _self.toastr.successToastr("Token is approved", 'success');
                                _self.transit_btn = true;
                                _self.approve_btn = false;
                            })
                                .on("confirmation", function (confirmationNumber, approveresult) {
                            })
                                .on("error", function (error) {
                                _self.conn.clearbackground();
                                _this.toastr.errorToastr(error.message, 'Error');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitBnbComponent.prototype.getbnbpool = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, latest, bnb_contract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        return [4 /*yield*/, BinanceChain.enable()];
                    case 1:
                        _a.sent();
                        window.web3 = new window.Web3(window.BinanceChain);
                        return [4 /*yield*/, window.web3.eth.getBlockNumber()];
                    case 2:
                        latest = _a.sent();
                        bnb_contract = new window.web3.eth.Contract(bbAbi, bnb_onpool_contract);
                        alert(this.account);
                        return [4 /*yield*/, bnb_contract.methods.message(this.account, "100000000000000000", parseFloat(latest) + 60, "postData.txid_").call(function (err, messagehash) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sign, signature;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sign = window.web3.eth.accounts.sign(messagehash, "0x19cc7483de721c62a006a1cdc282e773377082a1ebf974b321433bace374846d");
                                            signature = sign.signature;
                                            return [4 /*yield*/, bnb_contract.methods
                                                    .claimOnePool(parseFloat(latest) + 60, "100000000000000000", "postData.txid_", signature)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (approveresult) {
                                                    _self.conn.clearbackground();
                                                    _self.toastr.successToastr("Token is transfered", 'success');
                                                    _self.transit_btn = true;
                                                })
                                                    .on("confirmation", function (confirmationNumber, approveresult) {
                                                })
                                                    .on("error", function (error) {
                                                    _self.conn.clearbackground();
                                                    _this.toastr.errorToastr(error.message, 'Error');
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    TransitBnbComponent.prototype.balance_ref = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcontract = new window.web3.eth.Contract(lpAbi, bnb_onpool_address);
                        return [4 /*yield*/, rpcontract.methods.balanceOf(this.account).call(function (err, balance) {
                                _this.eth_bal_op = balance / Math.pow(10, 18);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitBnbComponent.prototype.withdraw_bnb = function (eth_op_form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, postData, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                window.web3 = new window.Web3(window.BinanceChain);
                _self = this;
                _self.conn.changebackground();
                postData = eth_op_form.value;
                obj = { "txid": postData.txid_ };
                _self.conn.postRequest('users/getxid', obj, _self.token).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var amount_, _self_1, latest, bnb_contract_1;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                amount_ = res.data.amount * Math.pow(10, 18);
                                if (!(res.status == 1)) return [3 /*break*/, 4];
                                _self_1 = this;
                                return [4 /*yield*/, BinanceChain.enable()];
                            case 1:
                                _a.sent();
                                window.web3 = new window.Web3(window.BinanceChain);
                                return [4 /*yield*/, window.web3.eth.getBlockNumber()];
                            case 2:
                                latest = _a.sent();
                                bnb_contract_1 = new window.web3.eth.Contract(bbAbi, bnb_onpool_contract);
                                return [4 /*yield*/, bnb_contract_1.methods.message(this.account, amount_.toString(), parseFloat(latest) + 60, postData.txid_).call(function (err, messagehash) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var sign, signature;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    sign = window.web3.eth.accounts.sign(messagehash, "0x19cc7483de721c62a006a1cdc282e773377082a1ebf974b321433bace374846d");
                                                    signature = sign.signature;
                                                    return [4 /*yield*/, bnb_contract_1.methods
                                                            .claimOnePool(parseFloat(latest) + 60, amount_.toString(), postData.txid_, signature)
                                                            .send({ from: this.account })
                                                            .on("transactionHash", function (hash) {
                                                        })
                                                            .on("receipt", function (approveresult) {
                                                            var obj = { "transactionid": postData.txid_, status: "completed" };
                                                            _this.conn.postRequest('users/update_bnb', obj, _this.token).subscribe(function (res) {
                                                                _self_1.conn.clearbackground();
                                                                _self_1.toastr.successToastr("Token is transfered", 'success');
                                                                _self_1.transit_btn = true;
                                                                _self_1.balance_ref();
                                                            });
                                                        })
                                                            .on("confirmation", function (confirmationNumber, approveresult) {
                                                        })
                                                            .on("error", function (error) {
                                                            _self_1.conn.clearbackground();
                                                            _this.toastr.errorToastr(error.message, 'Error');
                                                        })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 3:
                                _a.sent();
                                return [2 /*return*/, false];
                            case 4:
                                _self.conn.clearbackground();
                                _self.toastr.errorToastr(res.msg, 'Error');
                                _a.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    TransitBnbComponent.prototype.deposit_ethop = function (eth_op_form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, postData, deposit_amount, opcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.web3 = new window.Web3(window.BinanceChain);
                        this.conn.changebackground();
                        _self = this;
                        postData = eth_op_form.value;
                        if (!(+postData.amount_ > 0)) return [3 /*break*/, 3];
                        if (+this.eth_bal_op < +postData.amount_) {
                            _self.conn.clearbackground();
                            this.toastr.errorToastr("Insufficient balance", 'Error');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount_.toString(), 'ether')];
                    case 1:
                        deposit_amount = _a.sent();
                        opcontract = new window.web3.eth.Contract(ebAbi, bnb_onpool_contract);
                        return [4 /*yield*/, opcontract.methods
                                .deposit(deposit_amount)
                                .send({ from: this.account })
                                .on("transactionHash", function (hash) {
                            })
                                .on("receipt", function (approveresult) {
                                _self.conn.clearbackground();
                                _self.transit_btn = true;
                                var obj = {
                                    "amount": postData.amount_,
                                    "useraddress": _self.account.toString(),
                                    "txid": approveresult.transactionHash,
                                    "types": "Deposit",
                                    "currency": "BNB",
                                };
                                _self.conn.postRequest('users/bnb_bridge', obj, _self.token).subscribe(function (res) {
                                    if (res.status == 1) {
                                        _self.toastr.successToastr(res.msg, 'success');
                                    }
                                    else {
                                        _self.toastr.errorToastr(res.msg, 'Error');
                                    }
                                });
                            })
                                .on("confirmation", function (confirmationNumber, approveresult) {
                            })
                                .on("error", function (error) {
                                _self.conn.clearbackground();
                                _this.toastr.errorToastr(error.message, 'Error');
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _self.conn.clearbackground();
                        this.toastr.errorToastr("Please enter valid amount", 'Error');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransitBnbComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"] }
    ]; };
    TransitBnbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transit-bnb',
            template: __webpack_require__(/*! raw-loader!./transit-bnb.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/transit-bnb/transit-bnb.component.html"),
            styles: [__webpack_require__(/*! ./transit-bnb.component.scss */ "./src/app/pages/content/transit-bnb/transit-bnb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]])
    ], TransitBnbComponent);
    return TransitBnbComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/transit/transit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/content/transit/transit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".token-block input {\r\n    height: 60px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.token-block select {\r\n    background-color: var(--bg-primary);\r\n    color: #fff;\r\n    height: calc(1.8em + 0.75rem + 3px);\r\n    border-radius: 27px;\r\n}\r\n\r\n.token-block option {\r\n    background-color: #fff;\r\n    color: #222;\r\n}\r\n\r\n.token-block .fa {\r\n    background: #503ae7;\r\n    height: 33px;\r\n    width: 42px;\r\n    text-align: center;\r\n    color: #fff;\r\n    border-radius: 16px;\r\n    font-size: 13px;\r\n    line-height: 33px;\r\n}\r\n\r\n.transitblock .dropdown-toggle::after {\r\n    position: absolute;\r\n    right: 8px;\r\n    top: 20px;\r\n}\r\n\r\n.transitblock .btn-link:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.transitblock .btn-group .dropdown-toggle {\r\n    background-color: rgb(16, 16, 18);\r\n    border-color: transparent;\r\n    padding: 10px 18px;\r\n    height: 44px;\r\n}\r\n\r\n.transitblock .bg-dropdown {\r\n    background: #eee;\r\n    border: 1px solid #eee;\r\n    border-radius: 13px;\r\n}\r\n\r\n.transitblock .bg-dropdown img {\r\n    width: 33px;\r\n    min-height: calc(100% - 29px);\r\n    vertical-align: text-top;\r\n}\r\n\r\n.transitblock .btn-group .dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.1rem #503ae7 !important;\r\n}\r\n\r\n.transitblock .btn-group-vertical>.btn:hover,\r\n.transitblock .btn-group .dropdown-toggle:hover {\r\n    background-color: rgb(16, 16, 18);\r\n    color: #fff;\r\n}\r\n\r\n@media only screen and (max-width: 360px) {\r\n    .stk_ip .btn {\r\n        margin-bottom: 15px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .stk_ip .btn {\r\n        margin-bottom: 15px;\r\n        margin-right: 10px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .stk_ip .btn {\r\n        margin-bottom: 15px;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .stk_ip .btn {\r\n        margin-right: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC90cmFuc2l0L3RyYW5zaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC90cmFuc2l0L3RyYW5zaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2tlbi1ibG9jayBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udG9rZW4tYmxvY2sgc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS44ZW0gKyAwLjc1cmVtICsgM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XHJcbn1cclxuXHJcbi50b2tlbi1ibG9jayBvcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4udG9rZW4tYmxvY2sgLmZhIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MDNhZTc7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG59XHJcblxyXG4udHJhbnNpdGJsb2NrIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2l0YmxvY2sgLmJ0bi1saW5rOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50cmFuc2l0YmxvY2sgLmJ0bi1ncm91cCAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTYsIDE4KTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi50cmFuc2l0YmxvY2sgLmJnLWRyb3Bkb3duIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxufVxyXG5cclxuLnRyYW5zaXRibG9jayAuYmctZHJvcGRvd24gaW1nIHtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMjlweCk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuXHJcbi50cmFuc2l0YmxvY2sgLmJ0bi1ncm91cCAuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjNTAzYWU3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50cmFuc2l0YmxvY2sgLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmhvdmVyLFxyXG4udHJhbnNpdGJsb2NrIC5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDE2LCAxOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgLnN0a19pcCAuYnRuIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuc3RrX2lwIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc3RrX2lwIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc3RrX2lwIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/content/transit/transit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/content/transit/transit.component.ts ***!
  \************************************************************/
/*! exports provided: TransitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitComponent", function() { return TransitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _files_lp_abi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/lp_abi */ "./src/app/files/lp_abi.ts");
/* harmony import */ var _files_eth_bridge_abi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../files/eth_bridge_abi */ "./src/app/files/eth_bridge_abi.ts");
/* harmony import */ var _files_bnb_bridge_abi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../files/bnb_bridge_abi */ "./src/app/files/bnb_bridge_abi.ts");
/* harmony import */ var _files_contract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../files/contract */ "./src/app/files/contract.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");










var lpAbi = _files_lp_abi__WEBPACK_IMPORTED_MODULE_5__["LPAbi"];
var ebAbi = _files_eth_bridge_abi__WEBPACK_IMPORTED_MODULE_6__["EBAbi"];
var bbAbi = _files_bnb_bridge_abi__WEBPACK_IMPORTED_MODULE_7__["BBAbi"];
var contract_details = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"];
var eth_onpool_address = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].eth_onpool_address;
var eth_onpool_contract = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].eth_onpool_contract;
var bnb_onpool_contract = _files_contract__WEBPACK_IMPORTED_MODULE_8__["ContractDetails"].bnb_onpool_contract;
var TransitComponent = /** @class */ (function () {
    function TransitComponent(modalService, toastr, router, conn) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.conn = conn;
        this.dtOptions = {};
        this.stakepairHis = [];
        this.stakeLoader = false;
        this.account = localStorage.getItem('account');
        this.token = localStorage.getItem('1pool-Token');
        this.currency_select = "";
        this.eth_bal_op = "0";
        this.approve_btn = false;
        this.transit_btn = false;
        this.showDiv = {
            bnbstation: false
        };
    }
    TransitComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TransitComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('forOverlayBottom');
        if (!this.account) {
            this.toastr.errorToastr('Connect your wallet', 'Error');
            this.router.navigate(['/']);
            return;
        }
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'print'
            ]
        };
        this.stakehis();
    };
    TransitComponent.prototype.stakehis = function () {
        var _this = this;
        var obj = { "account": this.account };
        this.conn.postRequest('users/history_bnb', obj, this.token).subscribe(function (res) {
            if (res.status == 1) {
                _this.stakeHis = res.result;
            }
        });
    };
    TransitComponent.prototype.change_fun = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcontract = new window.web3.eth.Contract(lpAbi, eth_onpool_address);
                        return [4 /*yield*/, rpcontract.methods.balanceOf(this.account).call(function (err, balance) {
                                _this.eth_bal_op = balance / Math.pow(10, 18);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, rpcontract.methods.allowance(this.account, eth_onpool_contract).call(function (err, allowance) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (allowance > 0) {
                                        this.transit_btn = true;
                                    }
                                    else {
                                        this.approve_btn = true;
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitComponent.prototype.approve_func = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        this.conn.changebackground();
                        rpcontract = new window.web3.eth.Contract(lpAbi, eth_onpool_address);
                        return [4 /*yield*/, rpcontract.methods
                                .approve(eth_onpool_contract, "115792089237316195423570985008687907853269984665640564039457584007913129639935")
                                .send({ from: this.account })
                                .on("transactionHash", function (hash) {
                            })
                                .on("receipt", function (approveresult) {
                                _self.conn.clearbackground();
                                _self.toastr.successToastr("Token is approved", 'success');
                                _self.transit_btn = true;
                                _self.approve_btn = false;
                            })
                                .on("confirmation", function (confirmationNumber, approveresult) {
                            })
                                .on("error", function (error) {
                                _self.conn.clearbackground();
                                _this.toastr.errorToastr(error.message, 'Error');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitComponent.prototype.getbnbpool = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, latest, bnb_contract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _self = this;
                        return [4 /*yield*/, BinanceChain.enable()];
                    case 1:
                        _a.sent();
                        window.web3 = new window.Web3(window.BinanceChain);
                        return [4 /*yield*/, window.web3.eth.getBlockNumber()];
                    case 2:
                        latest = _a.sent();
                        bnb_contract = new window.web3.eth.Contract(bbAbi, bnb_onpool_contract);
                        alert(this.account);
                        return [4 /*yield*/, bnb_contract.methods.message(this.account, "100000000000000000", parseFloat(latest) + 60, "postData.txid_").call(function (err, messagehash) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sign, signature;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sign = window.web3.eth.accounts.sign(messagehash, "0x19cc7483de721c62a006a1cdc282e773377082a1ebf974b321433bace374846d");
                                            ;
                                            signature = sign.signature;
                                            return [4 /*yield*/, bnb_contract.methods
                                                    .claimOnePool(parseFloat(latest) + 60, "100000000000000000", "postData.txid_", signature)
                                                    .send({ from: this.account })
                                                    .on("transactionHash", function (hash) {
                                                })
                                                    .on("receipt", function (approveresult) {
                                                    _self.conn.clearbackground();
                                                    _self.toastr.successToastr("Token is transfered", 'success');
                                                    _self.transit_btn = true;
                                                })
                                                    .on("confirmation", function (confirmationNumber, approveresult) {
                                                })
                                                    .on("error", function (error) {
                                                    _self.conn.clearbackground();
                                                    _this.toastr.errorToastr(error.message, 'Error');
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    TransitComponent.prototype.withdraw_bnb = function (eth_op_form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, postData, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                _self = this;
                _self.conn.changebackground();
                postData = eth_op_form.value;
                obj = { "txid": postData.txid_ };
                _self.conn.postRequest('users/getxid', obj, _self.token).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var amount_, _self_1, latest, bnb_contract_1;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                amount_ = res.data.amount * Math.pow(10, 18);
                                if (!(res.status == 1)) return [3 /*break*/, 3];
                                _self_1 = this;
                                return [4 /*yield*/, window.web3.eth.getBlockNumber()];
                            case 1:
                                latest = _a.sent();
                                bnb_contract_1 = new window.web3.eth.Contract(ebAbi, eth_onpool_contract);
                                return [4 /*yield*/, bnb_contract_1.methods.message(this.account, amount_.toString(), parseFloat(latest) + 5, postData.txid_).call(function (err, messagehash) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var sign, signature;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    sign = window.web3.eth.accounts.sign(messagehash, "0xef7012588bb6f2895695559f4ce9a3e24916a1f7b05fed8af6f17e7a743f6819");
                                                    signature = sign.signature;
                                                    return [4 /*yield*/, bnb_contract_1.methods
                                                            .claimOnePool(parseFloat(latest) + 5, amount_.toString(), postData.txid_, signature)
                                                            .send({ from: this.account })
                                                            .on("transactionHash", function (hash) {
                                                        })
                                                            .on("receipt", function (approveresult) {
                                                            var obj = { "transactionid": postData.txid_, status: "completed" };
                                                            _this.conn.postRequest('users/update_bnb', obj, _this.token).subscribe(function (res) {
                                                                _self_1.conn.clearbackground();
                                                                _self_1.toastr.successToastr("Token is transfered", 'success');
                                                                _self_1.transit_btn = true;
                                                                _self_1.balance_ref();
                                                                eth_op_form.resetForm();
                                                            });
                                                        })
                                                            .on("confirmation", function (confirmationNumber, approveresult) {
                                                        })
                                                            .on("error", function (error) {
                                                            _self_1.conn.clearbackground();
                                                            _this.toastr.errorToastr(error.message, 'Error');
                                                        })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 2:
                                _a.sent();
                                return [2 /*return*/, false];
                            case 3:
                                _self.conn.clearbackground();
                                _self.toastr.errorToastr(res.msg, 'Error');
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    TransitComponent.prototype.balance_ref = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rpcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcontract = new window.web3.eth.Contract(lpAbi, eth_onpool_address);
                        return [4 /*yield*/, rpcontract.methods.balanceOf(this.account).call(function (err, balance) {
                                _this.eth_bal_op = balance / Math.pow(10, 18);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitComponent.prototype.deposit_ethop = function (eth_op_form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _self, postData, deposit_amount, opcontract;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conn.changebackground();
                        _self = this;
                        postData = eth_op_form.value;
                        if (!(+postData.amount_ > 0)) return [3 /*break*/, 3];
                        if (+this.eth_bal_op < +postData.amount_) {
                            _self.conn.clearbackground();
                            this.toastr.errorToastr("Insufficient balance", 'Error');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, window.web3.utils.toWei(postData.amount_.toString(), 'ether')];
                    case 1:
                        deposit_amount = _a.sent();
                        opcontract = new window.web3.eth.Contract(ebAbi, eth_onpool_contract);
                        return [4 /*yield*/, opcontract.methods
                                .deposit(deposit_amount)
                                .send({ from: this.account })
                                .on("transactionHash", function (hash) {
                            })
                                .on("receipt", function (approveresult) {
                                _self.conn.clearbackground();
                                _self.transit_btn = true;
                                var obj = {
                                    "amount": postData.amount_,
                                    "useraddress": _self.account.toString(),
                                    "txid": approveresult.transactionHash,
                                    "types": "Deposit",
                                    "currency": "ETH",
                                };
                                _self.conn.postRequest('users/eth_bridge', obj, _self.token).subscribe(function (res) {
                                    if (res.status == 1) {
                                        _self.balance_ref();
                                        eth_op_form.resetForm();
                                        _self.toastr.successToastr(res.msg, 'success');
                                    }
                                    else {
                                        _self.toastr.errorToastr(res.msg, 'Error');
                                    }
                                });
                            })
                                .on("confirmation", function (confirmationNumber, approveresult) {
                            })
                                .on("error", function (error) {
                                _self.conn.clearbackground();
                                _this.toastr.errorToastr(error.message, 'Error');
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.toastr.errorToastr("Please enter valid amount", 'Error');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransitComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"] }
    ]; };
    TransitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transit',
            template: __webpack_require__(/*! raw-loader!./transit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/content/transit/transit.component.html"),
            styles: [__webpack_require__(/*! ./transit.component.css */ "./src/app/pages/content/transit/transit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]])
    ], TransitComponent);
    return TransitComponent;
}());



/***/ }),

/***/ "./src/app/pages/ipblock/ipblock.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/ipblock/ipblock.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lwYmxvY2svaXBibG9jay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ipblock/ipblock.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/ipblock/ipblock.component.ts ***!
  \****************************************************/
/*! exports provided: IpblockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpblockComponent", function() { return IpblockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IpblockComponent = /** @class */ (function () {
    function IpblockComponent(conn, route) {
        this.conn = conn;
        this.route = route;
        this.ip_block = false;
    }
    IpblockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conn.getUrl('admin/check_maintain').subscribe(function (resdata) {
            if (resdata.success == 2) {
                _this.ip_block = true;
            }
            else {
                _this.ip_block = false;
                _this.route.navigate(["/"]);
            }
        });
    };
    IpblockComponent.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    IpblockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ipblock',
            template: __webpack_require__(/*! raw-loader!./ipblock.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ipblock/ipblock.component.html"),
            styles: [__webpack_require__(/*! ./ipblock.component.scss */ "./src/app/pages/ipblock/ipblock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IpblockComponent);
    return IpblockComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/layout/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/layout/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(conn, route, titleService) {
        this.conn = conn;
        this.route = route;
        this.titleService = titleService;
        this.site = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conn.getUrl('cms/get_site').subscribe(function (res) {
            if (res.status == true) {
                _this.site = res.data;
            }
        });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  color: #fff;\n  opacity: 1; }\n\n.header {\n  z-index: 99;\n  position: relative; }\n\n.bannerMenu ul {\n  padding: 0;\n  list-style: none;\n  margin-bottom: 0;\n  position: relative; }\n\n.addressbtn {\n  overflow: hidden;\n  max-width: 210px; }\n\n.logo-ht {\n  height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvb25lcG9vbC9mcm9udC9tYWluLXNyYy9zcmMvYXBwL3BhZ2VzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sV0FBVTtFQUFFLFVBQVMsRUFBQTs7QUFDNUI7RUFBUyxXQUFXO0VBQUcsa0JBQWtCLEVBQUE7O0FBQ3pDO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0EsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdoQjtFQUNDLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3Nle2NvbG9yOiNmZmY7IG9wYWNpdHk6MTt9XG4uaGVhZGVyeyB6LWluZGV4OiA5OTsgIHBvc2l0aW9uOiByZWxhdGl2ZTt9XG4uYmFubmVyTWVudSB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXHRtYXJnaW4tYm90dG9tOiAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGRyZXNzYnRue1xub3ZlcmZsb3c6IGhpZGRlbjtcbm1heC13aWR0aDogMjEwcHg7XG59XG5cbi5sb2dvLWh0IHtcblx0aGVpZ2h0OjYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/layout/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/layout/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../connection.service */ "./src/app/connection.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, toastr, conn) {
        this.router = router;
        this.toastr = toastr;
        this.conn = conn;
        this.navbarCollapsed = true;
        this.account = localStorage.getItem('account');
        this.account_bnb = localStorage.getItem('account_bnb');
    }
    HeaderComponent.prototype.toggleNavbarCollapsing = function () { this.navbarCollapsed = !this.navbarCollapsed; };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.walletoptions = function (cur) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var key, account, defaultAccount_1, failMsg, failMsg;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = this;
                        if (!(cur == "ETH")) return [3 /*break*/, 4];
                        key.conn.changebackground();
                        if (!(typeof window.web3 !== "undefined")) return [3 /*break*/, 2];
                        window.web3 = window.web3.currentProvider;
                        window.web3 = new window.Web3(window.ethereum);
                        return [4 /*yield*/, window.ethereum.enable()];
                    case 1:
                        account = _a.sent();
                        defaultAccount_1 = account;
                        window.web3.eth.getAccounts(function (err, retAccount) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var failMsg, failMsg;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (defaultAccount_1.length > 0) {
                                    window.web3.eth.getBalance(retAccount[0], function (error, balance) {
                                        key.metabalance = balance / 1.0e18;
                                        localStorage.setItem("account", retAccount[0]);
                                        var sucMsg = {
                                            status: true,
                                            message: "Login successfully",
                                            address: retAccount[0]
                                        };
                                        var obj = { "currency": "ETH", "amount": 0 };
                                        var postData = { "key": retAccount[0].toLowerCase(), "wallet": [] };
                                        postData.wallet.push(obj);
                                        key.conn.postUrl('users/createProfile', postData).subscribe(function (res) {
                                            if (res.status == 1) {
                                                localStorage.setItem('1pool-Token', res.token);
                                                key.conn.clearbackground();
                                                key.toastr.successToastr(res.msg, 'success');
                                                window.location.href = "/farm";
                                            }
                                            else {
                                                key.conn.clearbackground();
                                                key.toastr.errorToastr(res.msg, 'Error');
                                            }
                                        });
                                    });
                                }
                                else {
                                    failMsg = {
                                        status: false,
                                        message: "No account found"
                                    };
                                    key.conn.clearbackground();
                                    this.toastr.errorToastr("No account found", 'error');
                                }
                                if (err != null) {
                                    failMsg = {
                                        status: false,
                                        message: "Error retrieving account"
                                    };
                                    key.conn.clearbackground();
                                    this.toastr.errorToastr("Error retrieving account", 'error');
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        failMsg = {
                            status: false,
                            message: "Metamask extension not added on your browser"
                        };
                        key.conn.clearbackground();
                        this.toastr.errorToastr("Metamask extension not added on your browser", 'error');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 7];
                    case 4:
                        if (!(typeof BinanceChain !== "undefined")) return [3 /*break*/, 6];
                        key.conn.changebackground();
                        return [4 /*yield*/, BinanceChain.enable()];
                    case 5:
                        _a.sent();
                        window.web3 = new window.Web3(window.BinanceChain);
                        window.web3.eth.getAccounts(function (err, retAccount) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var failMsg, failMsg;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (retAccount.length > 0) {
                                    window.web3.eth.getBalance(retAccount[0], function (error, balance) {
                                        key.metabalance = balance / 1.0e18;
                                        localStorage.setItem("account_bnb", retAccount[0]);
                                        var sucMsg = {
                                            status: true,
                                            message: "Login successfully",
                                            address: retAccount[0]
                                        };
                                        var obj = { "currency": "BNB", "amount": 0 };
                                        var postData = { "key": retAccount[0].toLowerCase(), "wallet": [] };
                                        postData.wallet.push(obj);
                                        key.conn.postUrl('users/createProfile', postData).subscribe(function (res) {
                                            if (res.status == 1) {
                                                localStorage.setItem('1pool-Token_bnb', res.token);
                                                key.conn.clearbackground();
                                                key.toastr.successToastr(res.msg, 'success');
                                                window.location.href = "/farm-bnb";
                                            }
                                            else {
                                                key.conn.clearbackground();
                                                key.toastr.errorToastr(res.msg, 'Error');
                                            }
                                        });
                                    });
                                }
                                else {
                                    failMsg = {
                                        status: false,
                                        message: "No account found"
                                    };
                                    key.conn.clearbackground();
                                    this.toastr.errorToastr("No account found", 'error');
                                }
                                if (err != null) {
                                    failMsg = {
                                        status: false,
                                        message: "Error retrieving account"
                                    };
                                    key.conn.clearbackground();
                                    this.toastr.errorToastr("Error retrieving account", 'error');
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 7];
                    case 6:
                        failMsg = {
                            status: false,
                            message: "Binance chain wallet not added on your browser"
                        };
                        key.conn.clearbackground();
                        this.toastr.errorToastr("Binance chain wallet not added on your browser", 'error');
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('account');
        localStorage.removeItem('1pool-Token');
        localStorage.removeItem('account_bnb');
        localStorage.removeItem('1pool-Token_bnb');
        this.toastr.successToastr('Logout Successfully', 'success');
        window.location.href = "";
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/undermaintance/undermaintance.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/undermaintance/undermaintance.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuZGVybWFpbnRhbmNlL3VuZGVybWFpbnRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/undermaintance/undermaintance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/undermaintance/undermaintance.component.ts ***!
  \******************************************************************/
/*! exports provided: UndermaintanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndermaintanceComponent", function() { return UndermaintanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UndermaintanceComponent = /** @class */ (function () {
    function UndermaintanceComponent(conn, route) {
        this.conn = conn;
        this.route = route;
        this.under_main = false;
    }
    UndermaintanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conn.getUrl('admin/check_maintain').subscribe(function (resdata) {
            if (resdata.success == 3) {
                _this.under_main = true;
            }
            else {
                _this.under_main = false;
                _this.route.navigate(["/"]);
            }
        });
    };
    UndermaintanceComponent.ctorParameters = function () { return [
        { type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UndermaintanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-undermaintance',
            template: __webpack_require__(/*! raw-loader!./undermaintance.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/undermaintance/undermaintance.component.html"),
            styles: [__webpack_require__(/*! ./undermaintance.component.scss */ "./src/app/pages/undermaintance/undermaintance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UndermaintanceComponent);
    return UndermaintanceComponent;
}());



/***/ }),

/***/ "./src/backendconn.js":
/*!****************************!*\
  !*** ./src/backendconn.js ***!
  \****************************/
/*! exports provided: BackendUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendUrl", function() { return BackendUrl; });
var host = document.location.hostname;
var BackendUrl = 'https://api.1pool.finance/';

var BackendUrl;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    chainid: 1,
    explorer: ""
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/onepool/front/main-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0WVW":function(t,c){},"6xdO":function(t,c,n){"use strict";n.d(c,"a",(function(){return s}));var e=n("fXoL"),o=n("Xa2L");const a=["*"];let s=(()=>{class t{constructor(t){this.changeDetector=t,this.state={wait:!1}}ngOnInit(){void 0===this.isWaiting?this.isFnMode=!0:(this.isFnMode=!1,this.state.wait=this.isWaiting)}ngOnDestroy(){this.changeDetector.detach()}ngOnChanges(){this.isFnMode||(this.state.wait=this.isWaiting)}wait(){this.isFnMode&&(this.state.wait=!0,this.changeDetector.destroyed||this.changeDetector.detectChanges())}show(){this.isFnMode&&(this.state.wait=!1,this.changeDetector.destroyed||this.changeDetector.detectChanges())}}return t.\u0275fac=function(c){return new(c||t)(e.Mb(e.h))},t.\u0275cmp=e.Gb({type:t,selectors:[["ct-table"]],inputs:{isWaiting:"isWaiting"},features:[e.yb],ngContentSelectors:a,decls:12,vars:2,consts:[[1,"ct-table"],[1,"ct-table__body"],[1,"ct-table__wait"]],template:function(t,c){1&t&&(e.jc(),e.Sb(0,"div",0),e.Gc(1,"\n    "),e.Sb(2,"div",1),e.Gc(3,"\n        "),e.ic(4),e.Gc(5,"\n    "),e.Rb(),e.Gc(6,"\n    "),e.Sb(7,"div",2),e.Gc(8,"\n        "),e.Nb(9,"mat-spinner"),e.Gc(10,"\n    "),e.Rb(),e.Gc(11,"\n"),e.Rb()),2&t&&e.Eb("ct-table--wait",c.state.wait)},directives:[o.b],styles:["[_nghost-%COMP%]{display:block;position:relative;margin:0;overflow-y:auto}[_nghost-%COMP%]     .mat-table{width:100%;border-collapse:collapse;background:none}[_nghost-%COMP%]     .mat-header-row{height:auto}[_nghost-%COMP%]     .mat-cell, [_nghost-%COMP%]     .mat-footer-cell, [_nghost-%COMP%]     .mat-header-cell{border-bottom-width:1px;border-bottom-style:solid;border-top-width:1px;border-top-style:solid;padding:9px;font-family:Roboto Condensed,sans-serif;font-size:14.94px;line-height:18px}[_nghost-%COMP%]     .mat-header-cell{white-space:nowrap;font-weight:700;vertical-align:baseline;color:inherit}[_nghost-%COMP%]     .mat-cell{vertical-align:baseline}[_nghost-%COMP%]     .mat-cell:first-child, [_nghost-%COMP%]     .mat-header-cell:first-child{padding-left:9px}[_nghost-%COMP%]     .mat-cell:last-child, [_nghost-%COMP%]     .mat-header-cell:last-child{padding-right:9px}[_nghost-%COMP%]     .mat-row{height:auto}.light-theme[_nghost-%COMP%]     .mat-cell, .light-theme   [_nghost-%COMP%]     .mat-cell, .light-theme[_nghost-%COMP%]     .mat-footer-cell, .light-theme   [_nghost-%COMP%]     .mat-footer-cell, .light-theme[_nghost-%COMP%]     .mat-header-cell, .light-theme   [_nghost-%COMP%]     .mat-header-cell{border-top-color:#f0f0f0;border-bottom-color:#f0f0f0}.dark-theme[_nghost-%COMP%]     .mat-cell, .dark-theme   [_nghost-%COMP%]     .mat-cell, .dark-theme[_nghost-%COMP%]     .mat-footer-cell, .dark-theme   [_nghost-%COMP%]     .mat-footer-cell, .dark-theme[_nghost-%COMP%]     .mat-header-cell, .dark-theme   [_nghost-%COMP%]     .mat-header-cell{border-top-color:#474747;border-bottom-color:#474747}.ct-table[_ngcontent-%COMP%]{position:relative}.ct-table__wait[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:none;align-items:center;justify-content:center;background-color:hsla(0,0%,100%,.1);overflow:hidden}.ct-table--wait[_ngcontent-%COMP%]   .ct-table__body[_ngcontent-%COMP%]{opacity:.5}.ct-table--wait[_ngcontent-%COMP%]   .ct-table__wait[_ngcontent-%COMP%]{display:flex}"]}),t})()},"7ZCX":function(t,c){},EW7x:function(t,c,n){"use strict";var e=n("0WVW");n.o(e,"AccountsService")&&n.d(c,"AccountsService",(function(){return e.AccountsService}));var o=n("tDRe");n.d(c,"AccountsService",(function(){return o.a})),n("7ZCX"),n("mINK"),n("Nh7v"),n("hv4T")},I89L:function(t,c,n){"use strict";n.r(c),n.d(c,"AccountsRoutes",(function(){return St})),n.d(c,"AccountsRoutingModule",(function(){return gt})),n.d(c,"AccountsModule",(function(){return Rt}));var e=n("ofXK"),o=n("3Pt+"),a=n("tyNb"),s=n("sYmb"),i=n("+0xr"),b=n("tDRe"),r=n("FzDw"),l=n("q4ZW"),u=n("J0F4"),d=n("fXoL"),G=n("2ljo"),f=n("1P+h"),h=n("25/r"),m=n("Xc1m"),p=n("Ne1S"),S=n("Kt2f"),g=n("6xdO"),R=n("FMVq"),w=n("V6TR"),M=n("CaYE"),k=n("No2e"),v=n("W7k4"),A=n("xAq4"),C=n("bTqV");function y(t,c){1&t&&(d.Qb(0),d.Gc(1,"\n            "),d.Sb(2,"ct-section-header-row"),d.Gc(3,"\n                "),d.Sb(4,"ct-alert",16),d.Gc(5,"Creating and editing of accounts are disabled, assetMode is 'replicated'.\n                "),d.Rb(),d.Gc(6,"\n            "),d.Rb(),d.Gc(7,"\n        "),d.Pb())}function O(t,c){1&t&&(d.Sb(0,"th",17),d.Gc(1,"ID "),d.Rb())}function x(t,c){if(1&t&&(d.Sb(0,"td",18),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Ic("",t.id," ")}}function _(t,c){1&t&&(d.Sb(0,"th",17),d.Gc(1,"Is enabled "),d.Rb())}function E(t,c){if(1&t&&(d.Sb(0,"td",18),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Ic("",t.enabled?"Yes":"No"," ")}}function I(t,c){1&t&&(d.Sb(0,"th",17),d.Gc(1,"Login "),d.Rb())}function P(t,c){if(1&t&&(d.Sb(0,"td",18),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Ic("",t.username," ")}}function D(t,c){1&t&&(d.Sb(0,"th",17),d.Gc(1,"Public name "),d.Rb())}function L(t,c){if(1&t&&(d.Sb(0,"td",18),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Ic("",t.publicName," ")}}function N(t,c){1&t&&(d.Sb(0,"th",17),d.Gc(1,"Created On "),d.Rb())}function T(t,c){if(1&t&&(d.Sb(0,"td",18),d.Gc(1),d.fc(2,"date"),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Ic("\n                            ",d.hc(2,1,t.createdOn,"HH:mm:ss, MMM\xa0d,\xa0yyyy")," ")}}function F(t,c){1&t&&(d.Sb(0,"th",17),d.Gc(1," "),d.Rb())}const q=function(t){return["/dispatcher/accounts/edit/",t]},j=function(t){return["/dispatcher/accounts/edit-password/",t]};function W(t,c){if(1&t&&(d.Qb(0),d.Gc(1,"\n                                "),d.Sb(2,"ct-flex",19),d.Gc(3,"\n                                    "),d.Sb(4,"ct-flex-item"),d.Gc(5,"\n                                        "),d.Sb(6,"button",20),d.Gc(7,"\n                                            Edit"),d.Rb(),d.Gc(8,"\n                                    "),d.Rb(),d.Gc(9,"\n                                    "),d.Gc(10,"\n                                    "),d.Gc(11,"\n                                    "),d.Sb(12,"ct-flex-item"),d.Gc(13,"\n                                        "),d.Sb(14,"button",20),d.Gc(15,"\n                                            Change Password"),d.Rb(),d.Gc(16,"\n                                    "),d.Rb(),d.Gc(17,"\n                                "),d.Rb(),d.Gc(18,"\n                            "),d.Pb()),2&t){const t=d.ec().$implicit;d.Ab(6),d.kc("routerLink",d.nc(2,q,t.id)),d.Ab(8),d.kc("routerLink",d.nc(4,j,t.id))}}function Q(t,c){if(1&t&&(d.Sb(0,"td",18),d.Gc(1,"\n                            "),d.Ec(2,W,19,6,"ng-container",0),d.Gc(3,"\n                        "),d.Rb()),2&t){const t=d.ec(2);d.Ab(2),d.kc("ngIf",!t.dispatcherAssetModeService.isReplicated(t.accountsResult.assetMode))}}function X(t,c){1&t&&(d.Sb(0,"tr",21),d.Gc(1," "),d.Rb())}function z(t,c){1&t&&(d.Sb(0,"tr",22),d.Gc(1," "),d.Rb())}function B(t,c){if(1&t&&(d.Qb(0),d.Gc(1,"\n                    "),d.Sb(2,"ct-flex-item"),d.Gc(3,"\n                        "),d.Sb(4,"button",23),d.Gc(5,"\n                                Add New Account \n                        "),d.Rb(),d.Gc(6,"\n                    "),d.Rb(),d.Gc(7,"\n                "),d.Pb()),2&t){const t=d.ec(2);d.Ab(4),d.kc("disabled",t.isLoading)}}function V(t,c){if(1&t){const t=d.Tb();d.Sb(0,"ct-section"),d.Gc(1,"\n    "),d.Sb(2,"ct-section-header"),d.Gc(3,"\n        "),d.Sb(4,"ct-section-header-row"),d.Gc(5,"\n            "),d.Sb(6,"ct-heading"),d.Gc(7,"\n                Accounts\n            "),d.Rb(),d.Gc(8,"\n        "),d.Rb(),d.Gc(9,"\n\n        "),d.Ec(10,y,8,0,"ng-container",0),d.Gc(11,"\n    "),d.Rb(),d.Gc(12,"\n\n    "),d.Sb(13,"ct-section-body"),d.Gc(14,"\n        "),d.Sb(15,"ct-section-body-row"),d.Gc(16,"\n            "),d.Sb(17,"ct-table",1),d.Gc(18,"\n                "),d.Sb(19,"table",2),d.Gc(20,"\n                    "),d.Qb(21,3),d.Gc(22,"\n                        "),d.Ec(23,O,2,0,"th",4),d.Gc(24,"\n                        "),d.Ec(25,x,2,1,"td",5),d.Gc(26,"\n                    "),d.Pb(),d.Gc(27,"\n                    "),d.Qb(28,6),d.Gc(29,"\n                        "),d.Ec(30,_,2,0,"th",4),d.Gc(31,"\n                        "),d.Ec(32,E,2,1,"td",5),d.Gc(33,"\n                    "),d.Pb(),d.Gc(34,"\n                    "),d.Qb(35,7),d.Gc(36,"\n                        "),d.Ec(37,I,2,0,"th",4),d.Gc(38,"\n                        "),d.Ec(39,P,2,1,"td",5),d.Gc(40,"\n                    "),d.Pb(),d.Gc(41,"\n                    "),d.Qb(42,8),d.Gc(43,"\n                        "),d.Ec(44,D,2,0,"th",4),d.Gc(45,"\n                        "),d.Ec(46,L,2,1,"td",5),d.Gc(47,"\n                    "),d.Pb(),d.Gc(48,"\n                    "),d.Qb(49,9),d.Gc(50,"\n                        "),d.Ec(51,N,2,0,"th",4),d.Gc(52,"\n                        "),d.Ec(53,T,3,4,"td",5),d.Gc(54,"\n                    "),d.Pb(),d.Gc(55,"\n                    "),d.Qb(56,10),d.Gc(57,"\n                        "),d.Ec(58,F,2,0,"th",4),d.Gc(59,"\n                        "),d.Ec(60,Q,4,1,"td",5),d.Gc(61,"\n                    "),d.Pb(),d.Gc(62,"\n                    "),d.Ec(63,X,2,0,"tr",11),d.Gc(64,"\n                    "),d.Ec(65,z,2,0,"tr",12),d.Gc(66,"\n                "),d.Rb(),d.Gc(67,"\n            "),d.Rb(),d.Gc(68,"\n        "),d.Rb(),d.Gc(69,"\n    "),d.Rb(),d.Gc(70,"\n\n    "),d.Sb(71,"ct-section-footer"),d.Gc(72,"\n        "),d.Sb(73,"ct-section-footer-row"),d.Gc(74,"\n            "),d.Sb(75,"ct-flex",13),d.Gc(76,"\n                "),d.Sb(77,"ct-flex-item"),d.Gc(78,"\n                    "),d.Sb(79,"ct-flex",14),d.Gc(80,"\n                        "),d.Sb(81,"ct-table-pagination",15),d.ac("next",(function(){return d.uc(t),d.ec().nextPage()}))("prev",(function(){return d.uc(t),d.ec().prevPage()})),d.Gc(82,"\n                        "),d.Rb(),d.Gc(83,"\n                    "),d.Rb(),d.Gc(84,"\n                "),d.Rb(),d.Gc(85,"\n\n                "),d.Ec(86,B,8,1,"ng-container",0),d.Gc(87,"\n            "),d.Rb(),d.Gc(88,"\n        "),d.Rb(),d.Gc(89,"\n    "),d.Rb(),d.Gc(90,"\n"),d.Rb()}if(2&t){const t=d.ec();d.Ab(10),d.kc("ngIf",t.dispatcherAssetModeService.isReplicated(t.accountsResult.assetMode)),d.Ab(7),d.kc("isWaiting",t.isLoading),d.Ab(2),d.kc("dataSource",t.dataSource),d.Ab(44),d.kc("matHeaderRowDef",t.columnsToDisplay),d.Ab(2),d.kc("matRowDefColumns",t.columnsToDisplay),d.Ab(16),d.kc("pageableDefault",t.accountsResult.accounts)("globalDisable",t.isLoading),d.Ab(5),d.kc("ngIf",!t.dispatcherAssetModeService.isReplicated(t.accountsResult.assetMode))}}let $=(()=>{class t extends r.a{constructor(t,c,n){super(n),this.accountsService=t,this.dispatcherAssetModeService=c,this.authenticationService=n,this.dataSource=new i.k([]),this.columnsToDisplay=["id","isEnabled","login","publicName","createdOn","bts"]}ngOnInit(){this.updateTable(0)}updateTable(t){this.setIsLoadingStart(),this.accountsService.accounts(t.toString()).subscribe({next:t=>{this.accountsResult=t,this.dataSource=new i.k(this.accountsResult.accounts.content||[])},complete:()=>{this.setIsLoadingEnd()}})}nextPage(){this.updateTable(this.accountsResult.accounts.number+1)}prevPage(){this.updateTable(this.accountsResult.accounts.number-1)}}return t.\u0275fac=function(c){return new(c||t)(d.Mb(b.a),d.Mb(u.a),d.Mb(l.AuthenticationService))},t.\u0275cmp=d.Gb({type:t,selectors:[["accounts-view"]],features:[d.xb],decls:1,vars:1,consts:[[4,"ngIf"],[3,"isWaiting"],["mat-table","",1,"mat-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","isEnabled"],["matColumnDef","login"],["matColumnDef","publicName"],["matColumnDef","createdOn"],["matColumnDef","bts"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["justify-content","space-between"],["justify-content","flex-start","gap","8px"],[3,"pageableDefault","globalDisable","next","prev"],["theme","info"],["mat-header-cell",""],["mat-cell",""],["justify-content","flex-end","gap","9px"],["mat-flat-button","","size","forTableRow","color","primary",3,"routerLink"],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary","wide","wide","routerLink","/dispatcher/accounts/add/",3,"disabled"]],template:function(t,c){1&t&&d.Ec(0,V,91,8,"ct-section",0),2&t&&d.kc("ngIf",c.accountsResult)},directives:[e.m,G.a,f.a,h.a,m.a,p.a,S.a,g.a,i.j,i.c,i.e,i.b,i.g,i.i,R.a,w.a,M.a,k.a,v.a,A.a,i.d,i.a,C.b,a.d,i.f,i.h],pipes:[e.e],styles:[""]}),t})();var H=n("u8e3"),J=n("uB0V"),K=n("I6qf"),U=n("MI58"),Y=n("eWij"),Z=n("kmnG"),tt=n("qFsG");function ct(t,c){if(1&t&&(d.Sb(0,"p"),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Hc(t)}}function nt(t,c){if(1&t&&(d.Sb(0,"ct-section"),d.Gc(1,"\n      "),d.Sb(2,"ct-section-body"),d.Gc(3,"\n        "),d.Sb(4,"ct-section-body-row"),d.Gc(5,"\n          "),d.Sb(6,"p"),d.Gc(7),d.Rb(),d.Gc(8,"\n          "),d.Ec(9,ct,2,1,"p",12),d.Gc(10,"\n        "),d.Rb(),d.Gc(11,"\n      "),d.Rb(),d.Gc(12,"\n    "),d.Rb()),2&t){const t=d.ec();d.Ab(7),d.Ic("STATUS: ",t.response.status,""),d.Ab(2),d.kc("ngForOf",t.response.errorMessages)}}let et=(()=>{class t{constructor(t,c){this.accountsService=t,this.router=c,this.states=H.a,this.currentStates=new Set,this.form=new o.e({username:new o.c("",[o.p.required,o.p.minLength(3)]),password:new o.c("",[o.p.required,o.p.minLength(3)]),password2:new o.c("",[o.p.required,o.p.minLength(3),t=>{const c=this.form;return c?c.value.password===t.value?null:{notSame:!0}:null}]),publicName:new o.c("",[o.p.required,o.p.minLength(3)])})}create(){this.currentStates.add(this.states.wait);const t=this.accountsService.addFormCommit(this.form.value).subscribe(t=>{t.status===J.a.OK&&this.router.navigate(["/dispatcher","accounts"])},()=>{},()=>{this.currentStates.delete(this.states.wait),t.unsubscribe()})}}return t.\u0275fac=function(c){return new(c||t)(d.Mb(b.a),d.Mb(a.c))},t.\u0275cmp=d.Gb({type:t,selectors:[["account-add"]],decls:109,vars:3,consts:[["align-items","baseline"],["size","6"],["novalidate","novalidate",3,"formGroup"],["appearance","outline"],["type","text","matInput","matInput","autocomplete","off","formControlName","username"],["type","password","matInput","matInput","autocomplete","off","formControlName","password"],["type","password","matInput","matInput","autocomplete","off","formControlName","password2"],["type","text","matInput","matInput","autocomplete","off","formControlName","publicName"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button","routerLink","/dispatcher/accounts/"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,c){1&t&&(d.Gc(0,"\n"),d.Sb(1,"ct-cols",0),d.Gc(2,"\n  "),d.Sb(3,"ct-col",1),d.Gc(4,"\n    "),d.Sb(5,"ct-section"),d.Gc(6,"\n      "),d.Sb(7,"ct-section-header"),d.Gc(8,"\n        "),d.Sb(9,"ct-section-header-row"),d.Gc(10,"\n          "),d.Sb(11,"ct-heading"),d.Gc(12,"New Account"),d.Rb(),d.Gc(13,"\n        "),d.Rb(),d.Gc(14,"\n      "),d.Rb(),d.Gc(15,"\n      "),d.Sb(16,"ct-section-body"),d.Gc(17,"\n        "),d.Sb(18,"ct-section-body-row"),d.Gc(19,"\n          "),d.Sb(20,"form",2),d.Gc(21,"\n            "),d.Sb(22,"ct-section-content"),d.Gc(23,"\n              "),d.Sb(24,"mat-form-field",3),d.Gc(25,"\n                "),d.Sb(26,"mat-label"),d.Gc(27,"Username"),d.Rb(),d.Gc(28,"\n                "),d.Nb(29,"input",4),d.Gc(30,"\n                "),d.Sb(31,"mat-hint"),d.Gc(32,"This is a required field."),d.Rb(),d.Gc(33,"\n              "),d.Rb(),d.Gc(34,"\n            "),d.Rb(),d.Gc(35,"\n            "),d.Sb(36,"ct-section-content"),d.Gc(37,"\n              "),d.Sb(38,"mat-form-field",3),d.Gc(39,"\n                "),d.Sb(40,"mat-label"),d.Gc(41,"Password"),d.Rb(),d.Gc(42,"\n                "),d.Nb(43,"input",5),d.Gc(44,"\n                "),d.Sb(45,"mat-hint"),d.Gc(46,"This is a required field."),d.Rb(),d.Gc(47,"\n              "),d.Rb(),d.Gc(48,"\n            "),d.Rb(),d.Gc(49,"\n            "),d.Sb(50,"ct-section-content"),d.Gc(51,"\n              "),d.Sb(52,"mat-form-field",3),d.Gc(53,"\n                "),d.Sb(54,"mat-label"),d.Gc(55,"Password again"),d.Rb(),d.Gc(56,"\n                "),d.Nb(57,"input",6),d.Gc(58,"\n                "),d.Sb(59,"mat-hint"),d.Gc(60,"This is a required field."),d.Rb(),d.Gc(61,"\n              "),d.Rb(),d.Gc(62,"\n            "),d.Rb(),d.Gc(63,"\n            "),d.Sb(64,"ct-section-content"),d.Gc(65,"\n              "),d.Sb(66,"mat-form-field",3),d.Gc(67,"\n                "),d.Sb(68,"mat-label"),d.Gc(69,"Public name"),d.Rb(),d.Gc(70,"\n                "),d.Nb(71,"input",7),d.Gc(72,"\n                "),d.Sb(73,"mat-hint"),d.Gc(74,"This is a required field."),d.Rb(),d.Gc(75,"\n              "),d.Rb(),d.Gc(76,"\n            "),d.Rb(),d.Gc(77,"\n          "),d.Rb(),d.Gc(78,"\n        "),d.Rb(),d.Gc(79,"\n      "),d.Rb(),d.Gc(80,"\n      "),d.Sb(81,"ct-section-footer"),d.Gc(82,"\n        "),d.Sb(83,"ct-section-footer-row"),d.Gc(84,"\n          "),d.Sb(85,"ct-flex",8),d.Gc(86,"\n            "),d.Sb(87,"ct-flex-item"),d.Gc(88,"\n              "),d.Sb(89,"button",9),d.Gc(90,"Cancel"),d.Rb(),d.Gc(91,"\n            "),d.Rb(),d.Gc(92,"\n            "),d.Sb(93,"ct-flex-item"),d.Gc(94,"\n              "),d.Sb(95,"button",10),d.ac("click",(function(){return c.create()})),d.Gc(96,"Create"),d.Rb(),d.Gc(97,"\n            "),d.Rb(),d.Gc(98,"\n          "),d.Rb(),d.Gc(99,"\n        "),d.Rb(),d.Gc(100,"\n      "),d.Rb(),d.Gc(101,"\n    "),d.Rb(),d.Gc(102,"\n  "),d.Rb(),d.Gc(103,"\n  "),d.Sb(104,"ct-col",1),d.Gc(105,"\n    "),d.Ec(106,nt,13,2,"ct-section",11),d.Gc(107,"\n  "),d.Rb(),d.Gc(108,"\n"),d.Rb()),2&t&&(d.Ab(20),d.kc("formGroup",c.form),d.Ab(75),d.kc("disabled",c.currentStates.has(c.states.wait)||c.form.invalid),d.Ab(11),d.kc("ngIf",c.response))},directives:[K.a,U.a,G.a,f.a,h.a,m.a,p.a,S.a,o.q,o.l,o.f,Y.a,Z.b,Z.f,tt.b,o.b,o.k,o.d,Z.e,R.a,w.a,M.a,k.a,C.b,a.d,e.m,e.l],styles:["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})();var ot=n("EW7x"),at=n("bSwM");function st(t,c){if(1&t){const t=d.Tb();d.Sb(0,"ct-section-body-row",6),d.Gc(1,"\n                    "),d.Sb(2,"ct-section-content"),d.Gc(3,"\n                        "),d.Sb(4,"mat-checkbox",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec(2).isManager=c})),d.Gc(5,"Manager"),d.Rb(),d.Gc(6,"\n                    "),d.Rb(),d.Gc(7,"\n                    "),d.Sb(8,"ct-section-content"),d.Gc(9,"\n                        "),d.Sb(10,"mat-checkbox",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec(2).isOperator=c})),d.Gc(11,"Operator"),d.Rb(),d.Gc(12,"\n                    "),d.Rb(),d.Gc(13,"\n                    "),d.Sb(14,"ct-section-content"),d.Gc(15,"\n                        "),d.Sb(16,"mat-checkbox",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec(2).isBilling=c})),d.Gc(17,"Billing"),d.Rb(),d.Gc(18,"\n                    "),d.Rb(),d.Gc(19,"\n                    "),d.Sb(20,"ct-section-content"),d.Gc(21,"\n                        "),d.Sb(22,"mat-checkbox",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec(2).isData=c})),d.Gc(23,"Data"),d.Rb(),d.Gc(24,"\n                    "),d.Rb(),d.Gc(25,"\n                    "),d.Sb(26,"ct-section-content"),d.Gc(27,"\n                        "),d.Sb(28,"mat-checkbox",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec(2).isServerRestAccess=c})),d.Gc(29,"Server Rest Access"),d.Rb(),d.Gc(30,"\n                    "),d.Rb(),d.Gc(31,"\n                    "),d.Sb(32,"ct-section-content"),d.Gc(33,"\n                        "),d.Sb(34,"mat-checkbox",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec(2).isAdmin=c})),d.Gc(35,"Admin"),d.Rb(),d.Gc(36,"\n                    "),d.Rb(),d.Gc(37,"\n                "),d.Rb()}if(2&t){const t=d.ec(2);d.Ab(4),d.kc("ngModel",t.isManager),d.Ab(6),d.kc("ngModel",t.isOperator),d.Ab(6),d.kc("ngModel",t.isBilling),d.Ab(6),d.kc("ngModel",t.isData),d.Ab(6),d.kc("ngModel",t.isServerRestAccess),d.Ab(6),d.kc("ngModel",t.isAdmin)}}function it(t,c){if(1&t){const t=d.Tb();d.Sb(0,"ct-cols"),d.Gc(1,"\n    "),d.Sb(2,"ct-col",1),d.Gc(3,"\n        "),d.Sb(4,"ct-section"),d.Gc(5,"\n            "),d.Sb(6,"ct-section-header"),d.Gc(7,"\n                "),d.Sb(8,"ct-section-header-row"),d.Gc(9,"\n                    "),d.Sb(10,"ct-heading"),d.Gc(11),d.Rb(),d.Gc(12,"\n                "),d.Rb(),d.Gc(13,"\n            "),d.Rb(),d.Gc(14,"\n            "),d.Sb(15,"ct-section-body"),d.Gc(16,"\n                "),d.Ec(17,st,38,6,"ct-section-body-row",2),d.Gc(18,"\n            "),d.Rb(),d.Gc(19,"\n            "),d.Sb(20,"ct-section-footer"),d.Gc(21,"\n                "),d.Sb(22,"ct-section-footer-row"),d.Gc(23,"\n                    "),d.Sb(24,"ct-flex",3),d.Gc(25,"\n                        "),d.Sb(26,"ct-flex-item"),d.Gc(27,"\n                            "),d.Sb(28,"button",4),d.ac("click",(function(){return d.uc(t),d.ec().back()})),d.Gc(29,"Cancel"),d.Rb(),d.Gc(30,"\n                        "),d.Rb(),d.Gc(31,"\n                        "),d.Sb(32,"ct-flex-item"),d.Gc(33,"\n                            "),d.Sb(34,"button",5),d.ac("click",(function(){return d.uc(t),d.ec().save()})),d.Gc(35,"Save"),d.Rb(),d.Gc(36,"\n                        "),d.Rb(),d.Gc(37,"\n                    "),d.Rb(),d.Gc(38,"\n                "),d.Rb(),d.Gc(39,"\n            "),d.Rb(),d.Gc(40,"\n        "),d.Rb(),d.Gc(41,"\n    "),d.Rb(),d.Gc(42,"\n"),d.Rb()}if(2&t){const t=d.ec();d.Ab(11),d.Jc("\n                        Account Role id ",null==t.response.account?null:t.response.account.id,", login ",null==t.response.account?null:t.response.account.username,"\n                    "),d.Ab(6),d.kc("ngIf",t.response)}}let bt=(()=>{class t{constructor(t,c,n){this.router=t,this.route=c,this.accountsService=n,this.isManager=!1,this.isOperator=!1,this.isBilling=!1,this.isData=!1,this.isAdmin=!1,this.isServerRestAccess=!1}ngOnInit(){this.accountsService.getAccount(this.route.snapshot.paramMap.get("accountId")).subscribe(t=>{this.response=t;const c=[];t.account.authorities.forEach(t=>c.push(t.authority)),this.isManager=c.includes(l.Role.ROLE_MANAGER),this.isOperator=c.includes(l.Role.ROLE_OPERATOR),this.isBilling=c.includes(l.Role.ROLE_BILLING),this.isData=c.includes(l.Role.ROLE_DATA),this.isAdmin=c.includes(l.Role.ROLE_ADMIN),this.isServerRestAccess=c.includes(l.Role.ROLE_SERVER_REST_ACCESS)})}save(){const t=[],c=this.route.snapshot.paramMap.get("accountId");this.isAdmin&&t.push(l.Role.ROLE_ADMIN),this.isBilling&&t.push(l.Role.ROLE_BILLING),this.isData&&t.push(l.Role.ROLE_DATA),this.isManager&&t.push(l.Role.ROLE_MANAGER),this.isOperator&&t.push(l.Role.ROLE_OPERATOR),this.isServerRestAccess&&t.push(l.Role.ROLE_SERVER_REST_ACCESS),this.accountsService.roleFormCommit(c,t.join(",")).subscribe(()=>{})}back(){this.router.navigate(["../.."],{relativeTo:this.route})}}return t.\u0275fac=function(c){return new(c||t)(d.Mb(a.c),d.Mb(a.a),d.Mb(ot.AccountsService))},t.\u0275cmp=d.Gb({type:t,selectors:[["account-access"]],decls:1,vars:1,consts:[[4,"ngIf"],["size","6"],["style","font-size:125%;",4,"ngIf"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],[2,"font-size","125%"],[3,"ngModel","ngModelChange"]],template:function(t,c){1&t&&d.Ec(0,it,43,3,"ct-cols",0),2&t&&d.kc("ngIf",c.response)},directives:[e.m,K.a,U.a,G.a,f.a,h.a,m.a,p.a,R.a,w.a,M.a,k.a,C.b,S.a,Y.a,at.a,o.k,o.n],styles:[""]}),t})();function rt(t,c){if(1&t){const t=d.Tb();d.Sb(0,"ct-section-body"),d.Gc(1,"\n                "),d.Sb(2,"ct-section-body-row"),d.Gc(3,"\n                    "),d.Sb(4,"ct-section-content"),d.Gc(5,"\n                        "),d.Sb(6,"mat-form-field",6),d.Gc(7,"\n                            "),d.Sb(8,"mat-label"),d.Gc(9,"Public Name"),d.Rb(),d.Gc(10,"\n                            "),d.Sb(11,"input",7),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec().account.publicName=c})),d.Rb(),d.Gc(12,"\n                        "),d.Rb(),d.Gc(13,"\n                    "),d.Rb(),d.Gc(14,"\n                    "),d.Sb(15,"ct-section-content"),d.Gc(16,"\n                        "),d.Sb(17,"mat-checkbox",8),d.ac("ngModelChange",(function(c){return d.uc(t),d.ec().account.enabled=c})),d.Gc(18,"Is account enabled?"),d.Rb(),d.Gc(19,"\n                    "),d.Rb(),d.Gc(20,"\n                "),d.Rb(),d.Gc(21,"\n            "),d.Rb()}if(2&t){const t=d.ec();d.Ab(11),d.kc("ngModel",t.account.publicName),d.Ab(6),d.kc("ngModel",t.account.enabled)}}function lt(t,c){if(1&t&&(d.Sb(0,"p"),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Hc(t)}}function ut(t,c){if(1&t&&(d.Sb(0,"ct-section"),d.Gc(1,"\n            "),d.Sb(2,"ct-section-body"),d.Gc(3,"\n                "),d.Sb(4,"ct-section-body-row"),d.Gc(5,"\n                    "),d.Sb(6,"p"),d.Gc(7),d.Rb(),d.Gc(8,"\n                    "),d.Ec(9,lt,2,1,"p",9),d.Gc(10,"\n                "),d.Rb(),d.Gc(11,"\n            "),d.Rb(),d.Gc(12,"\n        "),d.Rb()),2&t){const t=d.ec();d.Ab(7),d.Ic("STATUS: ",t.response.status,""),d.Ab(2),d.kc("ngForOf",t.response.errorMessages)}}let dt=(()=>{class t{constructor(t,c,n,e){this.route=t,this.router=c,this.accountsService=n,this.location=e,this.states=H.a,this.currentStates=new Set}ngOnInit(){this.currentStates.add(this.states.firstLoading),this.getAccount()}getAccount(){const t=this.route.snapshot.paramMap.get("id");this.accountsService.getAccount(t).subscribe(t=>{this.account=t.account},()=>{},()=>{this.currentStates.delete(this.states.firstLoading)})}back(){this.location.back()}save(){this.currentStates.add(this.states.wait),this.accountsService.editFormCommit(this.account.id.toString(),this.account.publicName,this.account.enabled).subscribe(t=>{this.router.navigate(["/dispatcher","accounts"])},()=>{},()=>{this.currentStates.delete(this.states.wait)})}}return t.\u0275fac=function(c){return new(c||t)(d.Mb(a.a),d.Mb(a.c),d.Mb(b.a),d.Mb(e.i))},t.\u0275cmp=d.Gb({type:t,selectors:[["account-edit"]],decls:45,vars:5,consts:[["align-items","baseline"],["size","6"],[4,"ngIf"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],["appearance","outline"],["matInput","matInput",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"]],template:function(t,c){1&t&&(d.Sb(0,"ct-cols",0),d.Gc(1,"\n    "),d.Sb(2,"ct-col",1),d.Gc(3,"\n        "),d.Sb(4,"ct-section"),d.Gc(5,"\n            "),d.Sb(6,"ct-section-header"),d.Gc(7,"\n                "),d.Sb(8,"ct-section-header-row"),d.Gc(9,"\n                    "),d.Sb(10,"ct-heading"),d.Gc(11),d.Rb(),d.Gc(12,"\n                "),d.Rb(),d.Gc(13,"\n            "),d.Rb(),d.Gc(14,"\n            "),d.Ec(15,rt,22,2,"ct-section-body",2),d.Gc(16,"\n            "),d.Sb(17,"ct-section-footer"),d.Gc(18,"\n                "),d.Sb(19,"ct-section-footer-row"),d.Gc(20,"\n                    "),d.Sb(21,"ct-flex",3),d.Gc(22,"\n                        "),d.Sb(23,"ct-flex-item"),d.Gc(24,"\n                            "),d.Sb(25,"button",4),d.ac("click",(function(){return c.back()})),d.Gc(26,"Cancel"),d.Rb(),d.Gc(27,"\n                        "),d.Rb(),d.Gc(28,"\n                        "),d.Sb(29,"ct-flex-item"),d.Gc(30,"\n                            "),d.Sb(31,"button",5),d.ac("click",(function(){return c.save()})),d.Gc(32,"Save"),d.Rb(),d.Gc(33,"\n                        "),d.Rb(),d.Gc(34,"\n                    "),d.Rb(),d.Gc(35,"\n                "),d.Rb(),d.Gc(36,"\n            "),d.Rb(),d.Gc(37,"\n        "),d.Rb(),d.Gc(38,"\n    "),d.Rb(),d.Gc(39,"\n    "),d.Sb(40,"ct-col",1),d.Gc(41,"\n        "),d.Ec(42,ut,13,2,"ct-section",2),d.Gc(43,"\n    "),d.Rb(),d.Gc(44,"\n"),d.Rb()),2&t&&(d.Ab(11),d.Jc("Edit Account ",c.account?c.account.username:""," (",c.account?c.account.publicName:"",")\n                    "),d.Ab(4),d.kc("ngIf",!c.currentStates.has(c.states.firstLoading)),d.Ab(16),d.kc("disabled",c.currentStates.has(c.states.wait)),d.Ab(11),d.kc("ngIf",c.response))},directives:[K.a,U.a,G.a,f.a,h.a,m.a,e.m,R.a,w.a,M.a,k.a,C.b,p.a,S.a,Y.a,Z.b,Z.f,tt.b,o.b,o.k,o.n,at.a,e.l],styles:["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})();function Gt(t,c){if(1&t&&(d.Sb(0,"p"),d.Gc(1),d.Rb()),2&t){const t=c.$implicit;d.Ab(1),d.Hc(t)}}function ft(t,c){if(1&t&&(d.Sb(0,"ct-section"),d.Gc(1,"\n      "),d.Sb(2,"ct-section-body"),d.Gc(3,"\n        "),d.Sb(4,"ct-section-body-row"),d.Gc(5,"\n          "),d.Sb(6,"p"),d.Gc(7),d.Rb(),d.Gc(8,"\n          "),d.Ec(9,Gt,2,1,"p",10),d.Gc(10,"\n        "),d.Rb(),d.Gc(11,"\n      "),d.Rb(),d.Gc(12,"\n    "),d.Rb()),2&t){const t=d.ec();d.Ab(7),d.Ic("STATUS: ",t.response.status,""),d.Ab(2),d.kc("ngForOf",t.response.errorMessages)}}let ht=(()=>{class t{constructor(t,c,n,e){this.route=t,this.router=c,this.accountsService=n,this.location=e,this.states=H.a,this.currentStates=new Set,this.form=new o.e({password:new o.c("",[o.p.required,o.p.minLength(3)]),password2:new o.c("",[o.p.required,o.p.minLength(3),t=>{const c=this.form;return c?c.value.password===t.value?null:{notSame:!0}:null}])})}ngOnInit(){this.currentStates.add(this.states.firstLoading),this.getAccount()}back(){this.location.back()}getAccount(){const t=this.route.snapshot.paramMap.get("id");this.accountsService.getAccount(t).subscribe(t=>{this.account=t.account},()=>{},()=>{this.currentStates.delete(this.states.firstLoading)})}save(){this.currentStates.add(this.states.wait),this.accountsService.passwordEditFormCommit(this.account.id.toString(),this.form.value.password,this.form.value.password2).subscribe(t=>{this.router.navigate(["/dispatcher","accounts"])},()=>{},()=>{this.currentStates.delete(this.states.wait)})}}return t.\u0275fac=function(c){return new(c||t)(d.Mb(a.a),d.Mb(a.c),d.Mb(b.a),d.Mb(e.i))},t.\u0275cmp=d.Gb({type:t,selectors:[["account-edit-pass"]],decls:75,vars:5,consts:[["align-items","baseline"],["size","6"],["novalidate","novalidate",3,"formGroup"],["appearance","outline"],["matInput","matInput","type","password","autocomplete","off","formControlName","password"],["matInput","matInput","type","password","autocomplete","off","formControlName","password2"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,c){1&t&&(d.Gc(0,"\n"),d.Sb(1,"ct-cols",0),d.Gc(2,"\n  "),d.Sb(3,"ct-col",1),d.Gc(4,"\n    "),d.Sb(5,"ct-section"),d.Gc(6,"\n      "),d.Sb(7,"ct-section-header"),d.Gc(8,"\n        "),d.Sb(9,"ct-section-header-row"),d.Gc(10,"\n          "),d.Sb(11,"ct-heading"),d.Gc(12),d.Rb(),d.Gc(13,"\n        "),d.Rb(),d.Gc(14,"\n      "),d.Rb(),d.Gc(15,"\n      "),d.Sb(16,"ct-section-body"),d.Gc(17,"\n        "),d.Sb(18,"ct-section-body-row"),d.Gc(19,"\n          "),d.Sb(20,"form",2),d.Gc(21,"\n            "),d.Sb(22,"ct-section-content"),d.Gc(23,"\n              "),d.Sb(24,"mat-form-field",3),d.Gc(25," \n                "),d.Sb(26,"mat-label"),d.Gc(27,"Password"),d.Rb(),d.Gc(28,"\n                "),d.Nb(29,"input",4),d.Gc(30,"\n              "),d.Rb(),d.Gc(31,"\n            "),d.Rb(),d.Gc(32,"\n            "),d.Sb(33,"ct-section-content"),d.Gc(34,"\n              "),d.Sb(35,"mat-form-field",3),d.Gc(36," \n                "),d.Sb(37,"mat-label"),d.Gc(38,"Password again"),d.Rb(),d.Gc(39,"\n                "),d.Nb(40,"input",5),d.Gc(41,"\n              "),d.Rb(),d.Gc(42,"\n            "),d.Rb(),d.Gc(43,"\n          "),d.Rb(),d.Gc(44,"\n        "),d.Rb(),d.Gc(45,"\n      "),d.Rb(),d.Gc(46,"\n      "),d.Sb(47,"ct-section-footer"),d.Gc(48,"\n        "),d.Sb(49,"ct-section-footer-row"),d.Gc(50,"\n          "),d.Sb(51,"ct-flex",6),d.Gc(52,"\n            "),d.Sb(53,"ct-flex-item"),d.Gc(54,"\n              "),d.Sb(55,"button",7),d.ac("click",(function(){return c.back()})),d.Gc(56,"Cancel"),d.Rb(),d.Gc(57,"\n            "),d.Rb(),d.Gc(58,"\n            "),d.Sb(59,"ct-flex-item"),d.Gc(60,"\n              "),d.Sb(61,"button",8),d.ac("click",(function(){return c.save()})),d.Gc(62,"Save"),d.Rb(),d.Gc(63,"\n            "),d.Rb(),d.Gc(64,"\n          "),d.Rb(),d.Gc(65,"\n        "),d.Rb(),d.Gc(66,"\n      "),d.Rb(),d.Gc(67,"\n    "),d.Rb(),d.Gc(68,"\n  "),d.Rb(),d.Gc(69,"\n  "),d.Sb(70,"ct-col",1),d.Gc(71,"\n    "),d.Ec(72,ft,13,2,"ct-section",9),d.Gc(73,"\n  "),d.Rb(),d.Gc(74,"\n"),d.Rb()),2&t&&(d.Ab(12),d.Jc("Edit Account ",c.account?c.account.username:""," (",c.account?c.account.publicName:"",")"),d.Ab(8),d.kc("formGroup",c.form),d.Ab(41),d.kc("disabled",c.currentStates.has(c.states.wait)||c.form.invalid),d.Ab(11),d.kc("ngIf",c.response))},directives:[K.a,U.a,G.a,f.a,h.a,m.a,p.a,S.a,o.q,o.l,o.f,Y.a,Z.b,Z.f,tt.b,o.b,o.k,o.d,R.a,w.a,M.a,k.a,C.b,e.m,e.l],styles:["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})();var mt=n("vCXQ"),pt=n("9kxi");const St=[{path:"",component:$},{path:"add",component:et,data:{backConfig:["../"]}},{path:"access/:accountId",component:bt,data:{backConfig:["../","../"]}},{path:"edit/:id",component:dt,data:{backConfig:["../","../"]}},{path:"edit-password/:id",component:ht,data:{backConfig:["../","../"]}}];let gt=(()=>{class t{}return t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({factory:function(c){return new(c||t)},imports:[[a.g.forChild(St)],a.g]}),t})(),Rt=(()=>{class t{}return t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({factory:function(c){return new(c||t)},imports:[[e.c,gt,pt.a,mt.a,o.g,o.o,s.b.forChild({})]]}),t})()},Nh7v:function(t,c){},W7k4:function(t,c,n){"use strict";n.d(c,"a",(function(){return l}));var e=n("fXoL"),o=n("ofXK"),a=n("CaYE"),s=n("No2e"),i=n("bTqV"),b=n("NFeN");function r(t,c){if(1&t){const t=e.Tb();e.Sb(0,"ct-flex",1),e.Gc(1,"\n    "),e.Sb(2,"ct-flex-item"),e.Gc(3,"\n        "),e.Sb(4,"button",2),e.ac("click",(function(){return e.uc(t),e.ec()._prev()})),e.Gc(5,"\n            "),e.Sb(6,"mat-icon"),e.Gc(7,"arrow_back_ios"),e.Rb(),e.Gc(8,"\n        "),e.Rb(),e.Gc(9,"\n    "),e.Rb(),e.Gc(10,"\n    "),e.Sb(11,"ct-flex-item"),e.Gc(12,"\n        "),e.Sb(13,"button",2),e.ac("click",(function(){return e.uc(t),e.ec()._next()})),e.Gc(14,"\n            "),e.Sb(15,"mat-icon"),e.Gc(16,"arrow_forward_ios"),e.Rb(),e.Gc(17,"\n        "),e.Rb(),e.Gc(18,"\n    "),e.Rb(),e.Gc(19,"\n"),e.Rb()}if(2&t){const t=e.ec();e.Ab(4),e.kc("disabled",t.globalDisable||t.pageableDefault.first),e.Ab(9),e.kc("disabled",t.globalDisable||t.pageableDefault.last)}}let l=(()=>{class t{constructor(){this.next=new e.o,this.prev=new e.o}_next(){this.next.emit()}_prev(){this.prev.emit()}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=e.Gb({type:t,selectors:[["ct-table-pagination"]],inputs:{globalDisable:"globalDisable",pageableDefault:"pageableDefault"},outputs:{next:"next",prev:"prev"},decls:1,vars:1,consts:[["justify-content","flex-start","gap","8px",4,"ngIf"],["justify-content","flex-start","gap","8px"],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,c){1&t&&e.Ec(0,r,20,2,"ct-flex",0),2&t&&e.kc("ngIf",c.pageableDefault)},directives:[o.m,a.a,s.a,i.b,b.a],styles:[""]}),t})()},hv4T:function(t,c){},mINK:function(t,c){}}]);
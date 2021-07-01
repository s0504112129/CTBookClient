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

module.exports = "<app-view></app-view>\n<router-outlet></router-outlet>\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/children/children.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/children/children.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p class=\"piska\">enter the name of your child</p>\n<input type=\"text\" [(ngModel)]=\"child.name\" name=\"namechild\"/><br/>\n<p class=\"piska\">enter the dateBorn of your child</p>\n<input type=\"date\" [(ngModel)]=\"child.dateBorn\" name=\"datechild\"/><br/>\n<p class=\"piska\">enter the tz of your child</p>\n<input type=\"text\" [(ngModel)]=\"child.tz\" name=\"tzchild\"/><br/>\n<button class=\"btn\" (click)=\"add()\">save</button>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p class=\"piska\">enter your first name</p>\n<input type=\"text\" [(ngModel)]=\"detail.firstName\" name=\"firstName\" (blur)=\"chekFirstName()\" required/><br/>\n<p class=\"piska\">enter your last name</p>\n<input type=\"text\" [(ngModel)]=\"detail.lastName\" name=\"lastName\" (blur)=\"chekLastName()\" required/><br/>\n<p class=\"piska\">enter your tz</p>\n<input type=\"text\"[(ngModel)]=\"detail.tzUser\" name=\"tz\" (blur)=\"chekTz()\" required/><br/>\n<p class=\"piska\">enter your dateBorn</p>\n<input type=\"date\" [(ngModel)]=\"detail.Date\" name=\"dateBorn\" required/><br/>\n<p class=\"piska\">enter your min</p>\n<input type=\"text\" [(ngModel)]=\"detail.min\" name=\"min\" required/><br/>\n<p class=\"piska\">enter your HMO</p>\n<input type=\"text\" [(ngModel)]=\"detail.HMO\" name=\"HMO\" required/><br/>\n\n<!-- <button (click)=\"save()\" >save</button><br/> -->\n<button class=\"btn\" (click)=\"addChile()\">to add children</button><br/>\n \n<app-children *ngIf=\"isChild\" (out)=\"add($event)\"></app-children>\n\n<input class=\"sub\" type=\"submit\" (click)=\"addDetail()\" name=\"send\"/>\n<!-- <p routerLink=\"/children\"> to add children click here</p> -->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"piska\">hello {{firstName}} {{lastName}} </p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/view.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"piska\" routerLink=\"/detail\">to details</p> <p class=\"piska\" routerLink=\"/login\">to login</p>\n\n\n\n"

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
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _children_children_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./children/children.component */ "./src/app/children/children.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");







var routes = [
    //  {path:'' , redirectTo:'/view',pathMatch:'full' },
    { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"] },
    { path: 'children', component: _children_children_component__WEBPACK_IMPORTED_MODULE_4__["ChildrenComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'detail', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'review';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _children_children_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./children/children.component */ "./src/app/children/children.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");



 // <-- NgModel lives here







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                _children_children_component__WEBPACK_IMPORTED_MODULE_9__["ChildrenComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/children/children.component.css":
/*!*************************************************!*\
  !*** ./src/app/children/children.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".piska{\r\n    font-size: 20px;\r\n    color:palevioletred;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.btn{\r\n    height: 30px;\r\n    widows: 15px;\r\n    color: palevioletred;\r\n    /* background-color: rgb(187, 228, 241); */\r\n    margin-top: 5px;\r\n    border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGRyZW4vY2hpbGRyZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jaGlsZHJlbi9jaGlsZHJlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpc2the1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6cGFsZXZpb2xldHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5idG57XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWRvd3M6IDE1cHg7XHJcbiAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDIyOCwgMjQxKTsgKi9cclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/children/children.component.ts":
/*!************************************************!*\
  !*** ./src/app/children/children.component.ts ***!
  \************************************************/
/*! exports provided: ChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenComponent", function() { return ChildrenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChildrenComponent = /** @class */ (function () {
    function ChildrenComponent() {
        this.childrenArr = [];
        this.child = { name: '', dateBorn: new Date, tz: '' };
        this.out = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChildrenComponent.prototype.ngOnInit = function () {
    };
    ChildrenComponent.prototype.add = function () {
        console.log(this.child.name);
        //this.childrenArr.push(this.child); 
        this.out.emit({ name: this.child.name, tz: this.child.tz, dateBorn: this.child.dateBorn });
        this.child.dateBorn = new Date;
        this.child.tz = '';
        this.child.name = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChildrenComponent.prototype, "out", void 0);
    ChildrenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-children',
            template: __webpack_require__(/*! raw-loader!./children.component.html */ "./node_modules/raw-loader/index.js!./src/app/children/children.component.html"),
            styles: [__webpack_require__(/*! ./children.component.css */ "./src/app/children/children.component.css")]
        })
    ], ChildrenComponent);
    return ChildrenComponent;
}());



/***/ }),

/***/ "./src/app/details.service.ts":
/*!************************************!*\
  !*** ./src/app/details.service.ts ***!
  \************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsService = /** @class */ (function () {
    function DetailsService(detailsService) {
        this.detailsService = detailsService;
        this.detail = { lastName: " ", firstName: " ", tzUser: " ", Date: new Date, min: " ", HMO: " ", child: [] };
    }
    DetailsService.ctorParameters = function () { return [
        { type: DetailsService }
    ]; };
    DetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DetailsService);
    return DetailsService;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".piska{\r\n    /* width: 150px;\r\n    height: 250px;\r\n    border: 1px black solider; */\r\n    font-size: 20px;\r\n    color:palevioletred;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.btn{\r\n    height: 30px;\r\n    widows: 15px;\r\n    color: palevioletred;\r\n    /* background-color: rgb(187, 228, 241); */\r\n    margin-top: 5px;\r\n    border: none;\r\n}\r\n.sub{\r\n    margin-left: 10px;\r\n    margin-top: 5px;;\r\n    font-size: 20px;\r\n    color:palevioletred;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7Z0NBRTRCO0lBQzVCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpc2the1xyXG4gICAgLyogd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkZXI7ICovXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpwYWxldmlvbGV0cmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmJ0bntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZG93czogMTVweDtcclxuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMjI4LCAyNDEpOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5zdWJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDs7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpwYWxldmlvbGV0cmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/app/details/validation.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(detailService, serviceLogin) {
        this.detailService = detailService;
        this.serviceLogin = serviceLogin;
        this.count = 0;
        this.num = 0;
        this.detail = { lastName: " ", firstName: " ", tzUser: " ", Date: new Date, min: " ", HMO: " ", child: [] };
        this.child = [];
        this.c = { name: "", tz: "", dateBorn: new Date };
        this.masage = "it is not valid";
        this.isChild = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.detail.firstName = this.detailService.detail.firstName;
        this.detail.lastName = this.detailService.detail.lastName;
        this.detail.tzUser = this.detailService.detail.tzUser;
        this.detail.min = this.detailService.detail.min;
        this.detail.HMO = this.detailService.detail.HMO;
        this.detail.child = this.detailService.detail.child;
    };
    DetailsComponent.prototype.addChile = function () {
        this.isChild = true;
    };
    DetailsComponent.prototype.chekTz = function () {
        if (_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationUsers"].validSpelling(this.detail.tzUser) == false)
            // console.log(this.detail.tz)
            alert(this.masage);
        else {
            this.detail.tzUser = this.detail.tzUser;
        }
    };
    DetailsComponent.prototype.add = function (data) {
        this.child.push({ name: data.name, tz: data.tz, dateBorn: data.dateBorn });
        for (var index = 0; index < this.child.length; index++) {
            this.detail.child[index] = this.child[index];
        }
        console.log(this.detail);
        //console.log(this.detail.child);
    };
    DetailsComponent.prototype.chekFirstName = function () {
        if (_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationUsers"].isNotEmpty(this.detail.firstName) == false)
            alert(this.masage);
        else {
            this.detail.firstName = this.detail.firstName;
        }
    };
    DetailsComponent.prototype.chekLastName = function () {
        if (_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationUsers"].isNotEmpty(this.detail.lastName) == false)
            alert(this.masage);
        else {
            this.detail.lastName = this.detail.lastName;
        }
    };
    DetailsComponent.prototype.addDetail = function () {
        this.detailService.detail.firstName = this.detail.firstName;
        this.detailService.detail.lastName = this.detail.lastName;
        this.detailService.detail.tzUser = this.detail.tzUser;
        this.detailService.detail.min = this.detail.min;
        this.detailService.detail.HMO = this.detail.HMO;
        this.detailService.detail.child = this.detail.child;
        this.isChild = false;
        this.serviceLogin.AddUser(this.detail);
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: _details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/details/validation.ts":
/*!***************************************!*\
  !*** ./src/app/details/validation.ts ***!
  \***************************************/
/*! exports provided: ValidationUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationUsers", function() { return ValidationUsers; });
var ValidationUsers = /** @class */ (function () {
    function ValidationUsers() {
    }
    ValidationUsers.validSpelling = function (user) {
        user = String(user).trim();
        console.log(user.length);
        for (var index = 0; index < user.length; index++) {
            if (user[index] < '0' || user[index] > '9')
                return false;
        }
        ;
        if (user.length > 9 || user.length < 9)
            return false;
        return true;
    };
    ValidationUsers.isNotEmpty = function (name) {
        console.log(name.length);
        if (name == '')
            return false;
        return true;
    };
    return ValidationUsers;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.AddUser = function (detail) {
        return this.http.post("http://localhost:18553/api/user", detail).subscribe(function (res) {
            if (!res.IsSuccessful) {
                alert("it is not valid");
            }
            return res;
        });
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".piska{\r\n    font-size: 20px;\r\n    color:palevioletred;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    flex: initial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscURBQXFEO0lBQ3JELGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpc2the1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6cGFsZXZpb2xldHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZmxleDogaW5pdGlhbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(detailService) {
        this.detailService = detailService;
        this.lastName = "";
        this.firstName = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.lastName = this.detailService.detail.lastName;
        this.firstName = this.detailService.detail.firstName;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".piska{\r\n    font-size: 20px;\r\n    color:palevioletred;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    flex: initial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFEQUFxRDtJQUNyRCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlza2F7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpwYWxldmlvbGV0cmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmbGV4OiBpbml0aWFsO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! D:\שושי בהצלחה\למודים\שנה ב\angular\review\review\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
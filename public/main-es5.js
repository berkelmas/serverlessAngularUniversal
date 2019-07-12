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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loginpage/loginpage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loginpage/loginpage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"handleLogin(loginForm)\" #loginForm=\"ngForm\">\n  <input ngModel type=\"text\" name=\"email\" placeholder=\"email adresinizi girin\">\n  <input ngModel name=\"password\" type=\"password\" placeholder=\"şifrenizi girin\">\n  <button type=\"submit\">Giriş Yap</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loginrequiredpage/loginrequiredpage.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loginrequiredpage/loginrequiredpage.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>loginrequiredpage works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mainpage/mainpage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mainpage/mainpage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Merhaba Firebase</h1>\n\n<a *ngIf=\"!loggedInState\" routerLink=\"login\">Giriş Sayfasına Git</a>\n<br>\n<a routerLink=\"register\" *ngIf=\"!loggedInState\">Üye Ol</a>\n<button (click)=\"handleLogout()\" *ngIf=\"loggedInState\">Çıkış Yap</button>\n\n<h2>Makaleler</h2>\n<p>{{ items | json }}</p>\n\n<p>{{loggedInState ? \"Giris basarili\" : \"uye girisi yapilmamis...\"}}</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registerpage/registerpage.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registerpage/registerpage.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"handleRegister(registerForm)\" #registerForm=\"ngForm\">\n  <input ngModel type=\"text\" name=\"email\" placeholder=\"Email Adresinizi Girin\">\n  <input ngModel type=\"text\" name=\"password\" placeholder=\"Lütfen Şifrenizi Belirleyin\">\n  <button type=\"submit\">Üye Ol</button>\n</form>\n"

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
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _loginrequiredpage_loginrequiredpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginrequiredpage/loginrequiredpage.component */ "./src/app/loginrequiredpage/loginrequiredpage.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerpage/registerpage.component */ "./src/app/registerpage/registerpage.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/index.js");








var redirectUnauthorizedToMain = Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["redirectUnauthorizedTo"])(['']);
var redirectLoggedInToMain = Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["redirectLoggedInTo"])(['']);
var routes = [
    { path: '', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__["MainpageComponent"] },
    tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: 'loginrequired', component: _loginrequiredpage_loginrequiredpage_component__WEBPACK_IMPORTED_MODULE_4__["LoginrequiredpageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["canActivate"])(redirectUnauthorizedToMain)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: 'login', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_5__["LoginpageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["canActivate"])(redirectLoggedInToMain)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: 'register', component: _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_6__["RegisterpageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["canActivate"])(redirectLoggedInToMain))
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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authFire, userService) {
        this.authFire = authFire;
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/index.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _loginrequiredpage_loginrequiredpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loginrequiredpage/loginrequiredpage.component */ "./src/app/loginrequiredpage/loginrequiredpage.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registerpage/registerpage.component */ "./src/app/registerpage/registerpage.component.ts");














var firebaseConfig = {
    apiKey: "AIzaSyDSvICw3uJVd45aq-SuZDD6_lgZMxCAkgo",
    authDomain: "angulardeneme-66aba.firebaseapp.com",
    databaseURL: "https://angulardeneme-66aba.firebaseio.com",
    projectId: "angulardeneme-66aba",
    storageBucket: "angulardeneme-66aba.appspot.com",
    messagingSenderId: "236947855033",
    appId: "1:236947855033:web:e87dc7aa9d5c7539"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_10__["MainpageComponent"],
                _loginrequiredpage_loginrequiredpage_component__WEBPACK_IMPORTED_MODULE_11__["LoginrequiredpageComponent"],
                _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_12__["LoginpageComponent"],
                _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__["RegisterpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"]
            ],
            providers: [
                _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lucGFnZS9sb2dpbnBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(authFire, router) {
        this.authFire = authFire;
        this.router = router;
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent.prototype.handleLogin = function (form) {
        var _this = this;
        this.authFire.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
            .then(function (res) { return _this.router.navigate(['']); })
            .catch(function (err) { return console.log(err); });
    };
    LoginpageComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! raw-loader!./loginpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.scss */ "./src/app/loginpage/loginpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/loginrequiredpage/loginrequiredpage.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/loginrequiredpage/loginrequiredpage.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lucmVxdWlyZWRwYWdlL2xvZ2lucmVxdWlyZWRwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/loginrequiredpage/loginrequiredpage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/loginrequiredpage/loginrequiredpage.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginrequiredpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginrequiredpageComponent", function() { return LoginrequiredpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginrequiredpageComponent = /** @class */ (function () {
    function LoginrequiredpageComponent() {
    }
    LoginrequiredpageComponent.prototype.ngOnInit = function () {
    };
    LoginrequiredpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginrequiredpage',
            template: __webpack_require__(/*! raw-loader!./loginrequiredpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/loginrequiredpage/loginrequiredpage.component.html"),
            styles: [__webpack_require__(/*! ./loginrequiredpage.component.scss */ "./src/app/loginrequiredpage/loginrequiredpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginrequiredpageComponent);
    return LoginrequiredpageComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(fireStore, authFire) {
        this.fireStore = fireStore;
        this.authFire = authFire;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fireStore.collection('makaleler').valueChanges()
            .subscribe(function (res) {
            _this.items = res;
            console.log(res);
        });
        this.authFire.authState.subscribe(function (res) { return res ? _this.loggedInState = true : _this.loggedInState = false; });
    };
    MainpageComponent.prototype.handleLogout = function () {
        this.authFire.auth.signOut();
    };
    MainpageComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
    ]; };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.scss */ "./src/app/mainpage/mainpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/registerpage/registerpage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registerpage/registerpage.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycGFnZS9yZWdpc3RlcnBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/registerpage/registerpage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registerpage/registerpage.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent(fireAuth, router) {
        this.fireAuth = fireAuth;
        this.router = router;
    }
    RegisterpageComponent.prototype.ngOnInit = function () {
    };
    RegisterpageComponent.prototype.handleRegister = function (form) {
        var _this = this;
        this.fireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
            .then(function (res) {
            _this.router.navigate(['']);
        })
            .catch(function (err) { return console.log(err); });
    };
    RegisterpageComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registerpage',
            template: __webpack_require__(/*! raw-loader!./registerpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/registerpage/registerpage.component.html"),
            styles: [__webpack_require__(/*! ./registerpage.component.scss */ "./src/app/registerpage/registerpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserService = /** @class */ (function () {
    function UserService() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/berkelmas/Desktop/universalson/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
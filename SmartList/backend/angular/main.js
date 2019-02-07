(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Pipes/HLLPipe.ts":
/*!**********************************!*\
  !*** ./src/app/Pipes/HLLPipe.ts ***!
  \**********************************/
/*! exports provided: HLLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HLLPipe", function() { return HLLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HLLPipe = /** @class */ (function () {
    function HLLPipe() {
    }
    HLLPipe.prototype.transform = function (value) {
        var newStr = "Count Distinct of Checklist's words in Description:" + value + ", (by Checklist's Description)";
        return newStr;
    };
    HLLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'HLLPipe' })
    ], HLLPipe);
    return HLLPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_email_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/email/email.component */ "./src/app/components/email/email.component.ts");
/* harmony import */ var _components_groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/groups/group-create/group-create.component */ "./src/app/components/groups/group-create/group-create.component.ts");
/* harmony import */ var _components_groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/groups/group-list/group-list.component */ "./src/app/components/groups/group-list/group-list.component.ts");
/* harmony import */ var _components_checklists_checklist_create_checklist_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checklists/checklist-create/checklist-create.component */ "./src/app/components/checklists/checklist-create/checklist-create.component.ts");
/* harmony import */ var _components_checklists_checklist_list_checklist_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/checklists/checklist-list/checklist-list.component */ "./src/app/components/checklists/checklist-list/checklist-list.component.ts");
/* harmony import */ var _components_checklistItems_checklist_items_create_checklist_items_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/checklistItems/checklist-items-create/checklist-items-create.component */ "./src/app/components/checklistItems/checklist-items-create/checklist-items-create.component.ts");
/* harmony import */ var _components_checklistItems_checklist_items_list_checklist_items_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checklistItems/checklist-items-list/checklist-items-list.component */ "./src/app/components/checklistItems/checklist-items-list/checklist-items-list.component.ts");
/* harmony import */ var _components_groups_groups_hll_groups_hll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/groups/groups-hll/groups-hll.component */ "./src/app/components/groups/groups-hll/groups-hll.component.ts");
/* harmony import */ var _components_Statistics_Statistics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Statistics/Statistics.component */ "./src/app/components/Statistics/Statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    //{ path: '', redirectTo: 'login-email', pathMatch: 'full' },
    { path: '', component: _components_email_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'login-email', component: _components_email_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"] },
    //Groups
    { path: 'group-create', component: _components_groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_6__["GroupCreateComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'group-edit/:groupId', component: _components_groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_6__["GroupCreateComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'group-list', component: _components_groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_7__["GroupListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'group-hll', component: _components_groups_groups_hll_groups_hll_component__WEBPACK_IMPORTED_MODULE_12__["GroupsHLLComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'Statistics', component: _components_Statistics_Statistics_component__WEBPACK_IMPORTED_MODULE_13__["StatisticsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    //Checklist
    { path: 'checklist-create/:groupId', component: _components_checklists_checklist_create_checklist_create_component__WEBPACK_IMPORTED_MODULE_8__["ChecklistCreateComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'checklist-edit/:checklistId', component: _components_checklists_checklist_create_checklist_create_component__WEBPACK_IMPORTED_MODULE_8__["ChecklistCreateComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'checklist-list/:groupId', component: _components_checklists_checklist_list_checklist_list_component__WEBPACK_IMPORTED_MODULE_9__["ChecklistListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    //ChecklistItems
    { path: 'checklistItem-create/:checklistId', component: _components_checklistItems_checklist_items_create_checklist_items_create_component__WEBPACK_IMPORTED_MODULE_10__["ChecklistItemsCreateComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'checklistItem-edit/:checklistItemId', component: _components_checklistItems_checklist_items_create_checklist_items_create_component__WEBPACK_IMPORTED_MODULE_10__["ChecklistItemsCreateComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'checklistItem-list/:checklistId', component: _components_checklistItems_checklist_items_list_checklist_items_list_component__WEBPACK_IMPORTED_MODULE_11__["ChecklistItemsListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "main {\r\n  width: 80%;\r\n  margin: 1rem auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_email_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/email/email.component */ "./src/app/components/email/email.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/groups/group-create/group-create.component */ "./src/app/components/groups/group-create/group-create.component.ts");
/* harmony import */ var _components_groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/groups/group-list/group-list.component */ "./src/app/components/groups/group-list/group-list.component.ts");
/* harmony import */ var _components_checklists_checklist_create_checklist_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/checklists/checklist-create/checklist-create.component */ "./src/app/components/checklists/checklist-create/checklist-create.component.ts");
/* harmony import */ var _components_checklists_checklist_list_checklist_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/checklists/checklist-list/checklist-list.component */ "./src/app/components/checklists/checklist-list/checklist-list.component.ts");
/* harmony import */ var _components_checklistItems_checklist_items_create_checklist_items_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/checklistItems/checklist-items-create/checklist-items-create.component */ "./src/app/components/checklistItems/checklist-items-create/checklist-items-create.component.ts");
/* harmony import */ var _components_checklistItems_checklist_items_list_checklist_items_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/checklistItems/checklist-items-list/checklist-items-list.component */ "./src/app/components/checklistItems/checklist-items-list/checklist-items-list.component.ts");
/* harmony import */ var _components_groups_groups_hll_groups_hll_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/groups/groups-hll/groups-hll.component */ "./src/app/components/groups/groups-hll/groups-hll.component.ts");
/* harmony import */ var _Pipes_HLLPipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Pipes/HLLPipe */ "./src/app/Pipes/HLLPipe.ts");
/* harmony import */ var _components_Statistics_Statistics_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Statistics/Statistics.component */ "./src/app/components/Statistics/Statistics.component.ts");
/* harmony import */ var _components_shared_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shared/barchart/barchart.component */ "./src/app/components/shared/barchart/barchart.component.ts");
/* harmony import */ var _components_two_ways_bindings_two_ways_bindings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/two-ways-bindings/two-ways-bindings.component */ "./src/app/components/two-ways-bindings/two-ways-bindings.component.ts");
/* harmony import */ var _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/google-places.directive */ "./src/app/directives/google-places.directive.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _directives_d3_chart_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./directives/d3-chart.directive */ "./src/app/directives/d3-chart.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { AuthGuard } from './auth.service';


















//Google Maps API Key= AIzaSyCnqVDFETbVC1F2tK3JN9rRyv0e3S-dIsI
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_email_email_component__WEBPACK_IMPORTED_MODULE_10__["EmailComponent"], _components_groups_group_create_group_create_component__WEBPACK_IMPORTED_MODULE_16__["GroupCreateComponent"], _components_groups_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_17__["GroupListComponent"], _components_checklists_checklist_list_checklist_list_component__WEBPACK_IMPORTED_MODULE_19__["ChecklistListComponent"], _components_checklists_checklist_create_checklist_create_component__WEBPACK_IMPORTED_MODULE_18__["ChecklistCreateComponent"], _components_checklistItems_checklist_items_create_checklist_items_create_component__WEBPACK_IMPORTED_MODULE_20__["ChecklistItemsCreateComponent"], _components_checklistItems_checklist_items_list_checklist_items_list_component__WEBPACK_IMPORTED_MODULE_21__["ChecklistItemsListComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _components_groups_groups_hll_groups_hll_component__WEBPACK_IMPORTED_MODULE_22__["GroupsHLLComponent"],
                _Pipes_HLLPipe__WEBPACK_IMPORTED_MODULE_23__["HLLPipe"],
                _components_Statistics_Statistics_component__WEBPACK_IMPORTED_MODULE_24__["StatisticsComponent"],
                _components_shared_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_25__["BarchartComponent"],
                _components_two_ways_bindings_two_ways_bindings_component__WEBPACK_IMPORTED_MODULE_26__["TwoWaysBindingsComponent"],
                _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_27__["GooglePlacesDirective"],
                _directives_d3_chart_directive__WEBPACK_IMPORTED_MODULE_29__["D3ChartDirective"]
            ],
            imports: [
                _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyCnqVDFETbVC1F2tK3JN9rRyv0e3S",
                    libraries: ["places"]
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase, 'angular-auth-firebase'),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            ],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Statistics/Statistics.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/Statistics/Statistics.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3-chart {\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n  \r\n  .d3-chart .axis path,\r\n  .d3-chart .axis line {\r\n    stroke: #999;\r\n  }\r\n  \r\n  .d3-chart .axis text {\r\n    fill: #999;\r\n  }"

/***/ }),

/***/ "./src/app/components/Statistics/Statistics.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/Statistics/Statistics.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Statistics</h3>\r\n<span>Hyper Log Log Count Distinct:</span>\r\n<br>\r\n<app-groups-hll></app-groups-hll>\r\n<br>\r\n<br>\r\n<h3>Checklists by Group - Bar Chart</h3>\r\n<br>\r\n<!--\r\n<app-barchart *ngIf=\"chartData\" [data]=\"chartData\"></app-barchart>\r\n-->\r\n\r\n<div  D3Chart #chart2  [data]=\"chartData\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/Statistics/Statistics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/Statistics/Statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_groups_hll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/groups-hll.service */ "./src/app/services/groups-hll.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(groupsService) {
        this.groupsService = groupsService;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        /*
        // give everything a chance to get loaded before starting the animation to reduce choppiness
        setTimeout(() => {
          this.generateData();
    
          // change the data periodically
          setInterval(() => this.generateData(), 3000);
        }, 1000);
    */
        this.generateData();
    };
    StatisticsComponent.prototype.generateData = function () {
        var _this = this;
        this.chartData = [];
        this.groupsService.getGroupChecklistsCountTop10().subscribe(function (groupData) {
            var groups = JSON.stringify(groupData);
            //console.log(groupData);
            var arr;
            arr = JSON.parse(groups, function (key, value) {
                if (typeof value === 'string') {
                    return value.toUpperCase();
                }
                return value;
            });
            //console.log(arr);
            _this.chartData = [];
            var item = [];
            for (var i = 0; i < arr.length; i++) {
                item = arr.pop();
                _this.chartData.push([
                    item["title"],
                    item["ChecklistsCount"]
                ]);
            }
        });
        /*
            this.chartData = [];
            for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
              this.chartData.push([
                `Index ${i}`,
                Math.floor(Math.random() * 100)
              ]);
              //console.log(`Index ${i}`);
            }
            */
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Statistics',
            template: __webpack_require__(/*! ./Statistics.component.html */ "./src/app/components/Statistics/Statistics.component.html"),
            styles: [__webpack_require__(/*! ./Statistics.component.css */ "./src/app/components/Statistics/Statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_services_groups_hll_service__WEBPACK_IMPORTED_MODULE_1__["GroupsHLLService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/components/checklistItems/checklist-items-create/checklist-Items-create.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/checklistItems/checklist-items-create/checklist-Items-create.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.header {\r\n    font-style: italic;\r\n    font-weight: bold\r\n}\r\n\r\ndiv.textarea {\r\n    width: 100%;  \r\n  }\r\n\r\ntextarea {\r\n      width: 100%;  \r\n    }\r\n\r\nmat-form-field {\r\n      width: 100%;\r\n    }\r\n\r\ninput.text {\r\n    width: 100%;  \r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/checklistItems/checklist-items-create/checklist-Items-create.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/checklistItems/checklist-items-create/checklist-Items-create.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Checklist Item Info.\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form [formGroup]=\"form\" (submit)=\"onSaveChecklistItems()\" *ngIf=\"!isLoading\">\r\n    <!--\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"checklistId\" [value]=\"checklistId\" placeholder=\"Checklist ID\">\r\n    </mat-form-field> \r\n    -->\r\n    <br>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"ChecklistItems Title\">\r\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a checklistItems title.</mat-error>\r\n    </mat-form-field>\r\n    <br>\r\n    <!--\r\n    <div>\r\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\r\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\r\n    </div>\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    -->\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"4\" formControlName=\"description\" placeholder=\"Item Description\"></textarea>\r\n      <mat-error *ngIf=\"form.get('description').invalid\">Please enter an Item description.</mat-error>\r\n    </mat-form-field>\r\n      <br>\r\n      <input id=\"isDone\" type=\"checkbox\" [checked]='isDone' formControlName=\"isDone\" placeholder=\"Done\" title=\"Done\" value=\"Done?\"> \r\n      <label for=\"isDone\">Done?</label>\r\n\r\n      <!-- <input type=\"checkbox\" [checked]=\"task.isDone\" (click)=\"updateStatus(task)\"> -->\r\n<!--\r\n       <mat-form-field>\r\n        <mat-checkbox id=\"isDone\" formControlName=\"isDone\" (indeterminateChange)=\"OnIndeterminateChange($event)\"\r\n        [(checked)]=\"isDone\" >Done</mat-checkbox>\r\n      </mat-form-field>\r\n-->\r\n      <br>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save ChecklistItems</button>\r\n    <a mat-button routerLink=\"/checklist-edit/{{checklistId}}\" color=\"primary\" routerLinkActive=\"mat-accent\">Go back</a>\r\n\r\n    </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/checklistItems/checklist-items-create/checklist-items-create.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/checklistItems/checklist-items-create/checklist-items-create.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChecklistItemsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistItemsCreateComponent", function() { return ChecklistItemsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_checklistItems_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/checklistItems.service */ "./src/app/services/checklistItems.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistItemsCreateComponent = /** @class */ (function () {
    function ChecklistItemsCreateComponent(checklistItemsService, route, auth //,
    ) {
        this.checklistItemsService = checklistItemsService;
        this.route = route;
        this.auth = auth; //,
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
        this.isDone = false;
    }
    ChecklistItemsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            checklistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {}),
            isDone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null)
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("checklistId")) {
                _this.checklistId = paramMap.get("checklistId");
                _this.form.value.checklistId = _this.checklistId;
            }
            else {
                _this.checklistId = "-1";
            }
            //console.log("this.checklistId" + this.checklistId);
            if (paramMap.has("checklistItemId")) {
                _this.mode = "edit";
                _this.checklistItemId = paramMap.get("checklistItemId");
                _this.isLoading = true;
                _this.checklistItemsService.getChecklistItem(_this.checklistItemId).subscribe(function (checklistItemsData) {
                    _this.isLoading = false;
                    //console.log("checklistItemsData.checklistId" + checklistItemsData.checklistId);
                    //console.log("checklistItemsData.isDone" + checklistItemsData.isDone);
                    //console.log(checklistItemsData)
                    //console.log("checklistItemsData.description" + checklistItemsData.description);
                    _this.checklistItems = {
                        id: checklistItemsData._id,
                        title: checklistItemsData.title,
                        description: (checklistItemsData.description + "" == "undefined" ? "" : checklistItemsData.description + ""),
                        imagePath: "",
                        checklistId: checklistItemsData.checklistId,
                        isDone: (checklistItemsData.isDone == true)
                    };
                    _this.isDone = _this.checklistItems.isDone;
                    if (_this.checklistId == "-1")
                        _this.checklistId = checklistItemsData.checklistId;
                    _this.form.setValue({
                        //id: this.checklistItems.id,
                        title: _this.checklistItems.title,
                        description: _this.checklistItems.description,
                        image: _this.checklistItems.imagePath,
                        checklistId: _this.checklistItems.checklistId,
                        isDone: _this.checklistItems.isDone
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.checklistItemId = null;
                //this.form.value.checklistId   = this.checklistId;
            }
        });
    };
    ChecklistItemsCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ChecklistItemsCreateComponent.prototype.onSaveChecklistItems = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            if (this.form.value.checklistId == null)
                this.form.value.checklistId = this.checklistId;
            //console.log("this.form.value.checklistId " + this.form.value.checklistId );
            //console.log("this.form.value.isDone     " + this.form.value.isDone    + " / (this.form.value.isDone  == true)" + (this.form.value.isDone  == true));
            this.checklistItemsService.addChecklistItems(this.form.value.title, this.form.value.description, null, //this.form.value.image,
            this.form.value.checklistId, (this.form.value.isDone == true));
        }
        else {
            //console.log("this.form.value.checklistId " + this.form.value.checklistId );
            //console.log("this.form.value.isDone     " + this.form.value.isDone     );
            //console.log("this.form.value.title     " + this.form.value.title     );
            //console.log("this.form.value.description     " + this.form.value.description     );
            this.checklistItemsService.updateChecklistItems(this.checklistItemId, this.form.value.title, this.form.value.description, "", //this.form.value.image,
            this.form.value.checklistId, (this.form.value.isDone == true), true);
        }
        this.form.reset();
    };
    ChecklistItemsCreateComponent.prototype.OnIndeterminateChange = function ($event) {
        //console.log($event); 
        this.isDone = $event; //true or false
    };
    ChecklistItemsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checklistItem-create',
            template: __webpack_require__(/*! ./checklist-Items-create.component.html */ "./src/app/components/checklistItems/checklist-items-create/checklist-Items-create.component.html"),
            styles: [__webpack_require__(/*! ./checklist-Items-create.component.css */ "./src/app/components/checklistItems/checklist-items-create/checklist-Items-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checklistItems_service__WEBPACK_IMPORTED_MODULE_3__["ChecklistItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] //,
        ])
    ], ChecklistItemsCreateComponent);
    return ChecklistItemsCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/checklistItems/checklist-items-list/checklist-Items-list.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/checklistItems/checklist-items-list/checklist-Items-list.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  td, th {\r\n    width: 25%;\r\n  }\r\n  \r\n  span.header {\r\n    font-style: italic;\r\n    font-weight: bold\r\n}"

/***/ }),

/***/ "./src/app/components/checklistItems/checklist-items-list/checklist-Items-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/checklistItems/checklist-items-list/checklist-Items-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"header\">Checklist Items</span>\r\n<a mat-button color=\"primary\"  [routerLink]=\"['/checklistItem-create', checklistId]\"routerLinkActive=\"mat-accent\">New Checklist Item</a>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\"  *ngIf=\"checklistItems.length > 0 && !isLoading\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <!--\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\r\n      <td mat-cell *matCellDef=\"let row\"> <a mat-button color=\"primary\" [routerLink]=\"['/checklistItem-edit', row.id]\">{{row.id}}</a>  </td>\r\n    </ng-container>\r\n    -->\r\n    <!-- Checkbox Column -->\r\n  <ng-container matColumnDef=\"select\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n      </mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let row\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"toggle(row)\"\r\n                    [checked]=\"row.isDone\">\r\n      </mat-checkbox>\r\n    </td>\r\n  </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.title}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container matColumnDef=\"isDone\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Done? </th>\r\n      <td mat-cell *matCellDef=\"let row\" > {{(row.isDone==true?'Done':'')}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"EDIT\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header  style=\"width: 15px\"> </th>\r\n      <td mat-cell *matCellDef=\"let row\"  style=\"width: 15px\"> <a mat-button color=\"primary\" [routerLink]=\"['/checklistItem-edit', row.id]\">EDIT</a>  </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"DELETE\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width: 15px\"> </th>\r\n      <td mat-cell *matCellDef=\"let row\"  style=\"width: 15px\"> <button mat-button color=\"warn\" (click)=\"onDelete(row.id)\">DELETE</button>  </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" *ngIf=\"checklistItems.length \"></mat-paginator>\r\n\r\n  <div *ngIf=\"checklistItems.length <= 0 && !isLoading\"> \r\n    <p class=\"info-text mat-body-1\" >No ChecklistItems added yet!</p>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--\r\n<mat-accordion multi=\"true\" *ngIf=\"checklistItems.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let checklistItems of checklistItems\">\r\n    <mat-expansion-panel-header>\r\n      {{ checklistItems.title }}\r\n    </mat-expansion-panel-header>\r\n    <div class=\"checklistItems-image\">\r\n      <img [src]=\"checklistItems.imagePath\" [alt]=\"checklistItems.title\">\r\n    </div>\r\n    <p>{{ checklistItems.content }}</p>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/checklistItem-edit', checklistItems.id]\">EDIT</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(checklistItems.id)\">DELETE</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<mat-paginator [length]=\"totalChecklistItems\" [pageSize]=\"checklistItemsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\r\n  *ngIf=\"checklistItems.length > 0\"></mat-paginator>\r\n\r\n<div *ngIf=\"checklistItems.length <= 0 && !isLoading\"> \r\n  <p class=\"info-text mat-body-1\" >No ChecklistItems added yet!</p>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/components/checklistItems/checklist-items-list/checklist-items-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/checklistItems/checklist-items-list/checklist-items-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChecklistItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistItemsListComponent", function() { return ChecklistItemsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_checklistItems_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/checklistItems.service */ "./src/app/services/checklistItems.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistItemsListComponent = /** @class */ (function () {
    function ChecklistItemsListComponent(checklistItemsService, route) {
        this.checklistItemsService = checklistItemsService;
        this.route = route;
        this.displayedColumns = ['select', 'title', 'description', 'isDone', 'EDIT', 'DELETE'];
        //@Input() ChecklistItemsID:number=-1;
        //@Output() ChecklistItemsId: string;
        this.checklistId = '-1';
        this.checklistItems = [];
        this.isLoading = false;
        this.totalChecklistItems = 0;
        this.checklistItemsPerPage = 10;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ChecklistItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.paramMap.subscribe(function (paramMap) {
            //console.log("paramMap.has(checklistId)" + paramMap.has("checklistId"));
            if (paramMap.has("checklistId")) {
                //          if(this.checklistId=="-1") 
                _this.checklistId = paramMap.get("checklistId");
            }
            //console.log("this.checklistId - list" + this.checklistId);
            _this.checklistItemsService.getChecklistItems(_this.checklistItemsPerPage, _this.currentPage, _this.checklistId);
            _this.checklistItemsSub = _this.checklistItemsService
                .getChecklistItemsUpdateListener()
                .subscribe(function (checklistItemsData) {
                _this.isLoading = false;
                _this.totalChecklistItems = checklistItemsData.checklistItemsCount;
                _this.checklistItems = checklistItemsData.checklistItems;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.checklistItems);
            });
        });
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;            
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ChecklistItemsListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ChecklistItemsListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
            this.dataSource.data.forEach(function (row) {
                _this.selection.select(row);
                row.isDone = false;
                _this.checklistItemsService.updateChecklistItems(row.id, row.title, row.description, row.imagePath, row.checklistId, row.isDone, false);
            });
        }
        else {
            this.dataSource.data.forEach(function (row) {
                _this.selection.select(row);
                row.isDone = true;
                _this.checklistItemsService.updateChecklistItems(row.id, row.title, row.description, row.imagePath, row.checklistId, row.isDone, false);
            });
        }
    };
    ChecklistItemsListComponent.prototype.toggle = function (row) {
        this.selection.toggle(row);
        //console.log("row.isDone" + row.isDone)
        row.isDone = !row.isDone;
        this.checklistItemsService.updateChecklistItems(row.id, row.title, row.description, row.imagePath, row.checklistId, row.isDone, false);
        //console.log("togle " + row.isDone);
    };
    ChecklistItemsListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.checklistItemsPerPage = pageData.pageSize;
        this.checklistItemsService.getChecklistItems(this.checklistItemsPerPage, this.currentPage, this.checklistId);
    };
    ChecklistItemsListComponent.prototype.onDelete = function (checklistItemsId) {
        var _this = this;
        this.isLoading = true;
        this.checklistItemsService.deleteChecklistItems(checklistItemsId).subscribe(function () {
            _this.checklistItemsService.getChecklistItems(_this.checklistItemsPerPage, _this.currentPage, _this.checklistId);
        });
    };
    ChecklistItemsListComponent.prototype.ngOnDestroy = function () {
        this.checklistItemsSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ChecklistItemsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ChecklistItemsListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChecklistItemsListComponent.prototype, "checklistId", void 0);
    ChecklistItemsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-checklistItem-list",
            template: __webpack_require__(/*! ./checklist-Items-list.component.html */ "./src/app/components/checklistItems/checklist-items-list/checklist-Items-list.component.html"),
            styles: [__webpack_require__(/*! ./checklist-Items-list.component.css */ "./src/app/components/checklistItems/checklist-items-list/checklist-Items-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checklistItems_service__WEBPACK_IMPORTED_MODULE_3__["ChecklistItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ChecklistItemsListComponent);
    return ChecklistItemsListComponent;
}());



/***/ }),

/***/ "./src/app/components/checklists/checklist-create/checklist-create.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/checklists/checklist-create/checklist-create.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.textarea {\r\n    width: 100%;  \r\n  }\r\n  \r\n  textarea {\r\n      width: 100%;  \r\n    }\r\n  \r\n  mat-form-field {\r\n      width: 100%;\r\n    }\r\n  \r\n  span.header {\r\n      font-style: italic;\r\n      font-weight: bold\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/checklists/checklist-create/checklist-create.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/checklists/checklist-create/checklist-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Checklist Info.\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form [formGroup]=\"form\" (submit)=\"onSaveChecklist()\" *ngIf=\"!isLoading\">\r\n    <!--\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"group\" [value]=\"groupId\" placeholder=\"Group ID\">\r\n    </mat-form-field> <br>\r\n    -->\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Checklist Title\">\r\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a checklist title.</mat-error>\r\n    </mat-form-field>\r\n    <!--\r\n    <div>\r\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\r\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\r\n    </div>\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    -->\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"4\" formControlName=\"description\" placeholder=\"Checklist Description\"></textarea>\r\n      <mat-error *ngIf=\"form.get('description').invalid\">Please enter a checklist description.</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save Checklist</button>\r\n\r\n    <a mat-button  *ngIf=\"checklistId\" color=\"primary\" [routerLink]=\"['/checklistItem-list', checklistId]\">Checklist Items</a> \r\n    <a mat-button routerLink=\"/group-edit/{{groupId}}\" color=\"primary\" routerLinkActive=\"mat-accent\">Go back</a>\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <app-checklistItem-list  *ngIf=\"checklistId\" checklistId={{checklistId}} >\r\n\r\n    </app-checklistItem-list>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/checklists/checklist-create/checklist-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/checklists/checklist-create/checklist-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChecklistCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistCreateComponent", function() { return ChecklistCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_checklists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/checklists.service */ "./src/app/services/checklists.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistCreateComponent = /** @class */ (function () {
    function ChecklistCreateComponent(checklistsService, route, auth //,
    ) {
        this.checklistsService = checklistsService;
        this.route = route;
        this.auth = auth; //,
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
        this.groupId = "-1";
    }
    ChecklistCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {})
        });
        this.route.paramMap.subscribe(function (paramMap) {
            //In New mode
            if (paramMap.has("groupId")) {
                _this.groupId = paramMap.get("groupId");
                _this.form.value.group = _this.groupId;
            }
            else {
                _this.groupId = "-1";
            }
            //console.log("--this.groupId" + this.groupId);
            //In Edit mode
            if (paramMap.has("checklistId")) {
                _this.mode = "edit";
                _this.checklistId = paramMap.get("checklistId");
                _this.isLoading = true;
                _this.checklistsService.getChecklist(_this.checklistId).subscribe(function (checklistData) {
                    _this.isLoading = false;
                    //console.log("checklistData.group" + checklistData.group)
                    _this.checklist = {
                        id: checklistData._id,
                        title: checklistData.title,
                        description: checklistData.description,
                        imagePath: checklistData.imagePath,
                        group: checklistData.group,
                        checklistItems: null
                    };
                    if (_this.groupId == "-1")
                        _this.groupId = checklistData.group;
                    //console.log("this.groupId" + this.groupId);
                    _this.form.setValue({
                        //id: this.checklist.id,
                        title: _this.checklist.title,
                        description: _this.checklist.description,
                        image: "",
                        group: _this.checklist.group //,
                        //checklistItems: null
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.checklistId = null;
                //this.form.value.group   = this.groupId;
            }
        });
    };
    ChecklistCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ChecklistCreateComponent.prototype.onSaveChecklist = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            if (this.form.value.group == null)
                this.form.value.group = this.groupId;
            //console.log("this.form.value.group " + this.form.value.group );
            this.checklistsService.addChecklist(this.form.value.title, this.form.value.description, null, //this.form.value.image,
            this.form.value.group);
        }
        else {
            if (this.form.value.group == null)
                this.form.value.group = this.groupId;
            //console.log("this.form.value.group " + this.form.value.group );
            this.checklistsService.updateChecklist(this.checklistId, this.form.value.title, this.form.value.description, null, //this.form.value.image,
            this.form.value.group, null);
        }
        this.form.reset();
    };
    ChecklistCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checklist-create',
            template: __webpack_require__(/*! ./checklist-create.component.html */ "./src/app/components/checklists/checklist-create/checklist-create.component.html"),
            styles: [__webpack_require__(/*! ./checklist-create.component.css */ "./src/app/components/checklists/checklist-create/checklist-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checklists_service__WEBPACK_IMPORTED_MODULE_3__["ChecklistsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] //,
        ])
    ], ChecklistCreateComponent);
    return ChecklistCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/checklists/checklist-list/checklist-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/checklists/checklist-list/checklist-list.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.header {\r\n    font-style: italic;\r\n    font-weight: bold\r\n}"

/***/ }),

/***/ "./src/app/components/checklists/checklist-list/checklist-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/checklists/checklist-list/checklist-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"header\">Group Checklists</span>\r\n<a mat-button color=\"primary\"  [routerLink]=\"['/checklist-create', groupId]\"routerLinkActive=\"mat-accent\">New Checklist</a>\r\n<br>\r\n  <input matInput #filterValue  (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Filter by Checklist Title\">\r\n  <br>\r\n  <span>Filter by:</span> \r\n  <input id=\"filterByTitle\" type=\"checkbox\" (change)=\"applyFilterType($event.target.checked, filterValue.value, 'filterByTitle')\" [checked]='filterByTitle' placeholder=\"By Title\" title=\"By Title\" value=\"By Title\"> \r\n  <label for=\"filterByTitle\">By Title</label>\r\n  <input id=\"filterByDesc\" type=\"checkbox\" (change)=\"applyFilterType($event.target.checked, filterValue.value, 'filterByDesc')\" [checked]='filterByDesc' placeholder=\"By Description\" title=\"By Description\" value=\"By Description\"> \r\n  <label for=\"filterByDesc\">By Description</label>\r\n\r\n  <br>\r\n  <br>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion multi=\"true\" *ngIf=\"checklists.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let checklist of checklists\">\r\n    <mat-expansion-panel-header>\r\n      {{ checklist.title }}\r\n    </mat-expansion-panel-header>\r\n    <!--\r\n    <div class=\"checklist-image\">\r\n      <img [src]=\"checklist.imagePath\" [alt]=\"checklist.title\">\r\n    </div>\r\n    -->\r\n    <p>{{ checklist.description }}</p>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/checklist-edit', checklist.id]\">EDIT</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(checklist.id)\">DELETE</button>\r\n      <!--<a mat-button color=\"primary\" [routerLink]=\"['/checklist-list', checklist.id]\">Checklists</a>-->\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<mat-paginator [length]=\"totalChecklists\" [pageSize]=\"checklistsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\r\n  *ngIf=\"checklists.length > 0\"></mat-paginator>\r\n\r\n<div *ngIf=\"checklists.length <= 0 && !isLoading\"> \r\n  <p class=\"info-text mat-body-1\" >No Checklist added yet!</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/checklists/checklist-list/checklist-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/checklists/checklist-list/checklist-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChecklistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistListComponent", function() { return ChecklistListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_checklists_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/checklists.service */ "./src/app/services/checklists.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChecklistListComponent = /** @class */ (function () {
    function ChecklistListComponent(checklistsService, route) {
        this.checklistsService = checklistsService;
        this.route = route;
        //@Input() ChecklistID:number=-1;
        //@Output() ChecklistId: string;
        this.groupId = '-1';
        this.checklists = [];
        this.isLoading = false;
        this.totalChecklists = 0;
        this.checklistsPerPage = 10;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.filterByTitle = true;
        this.filterByDesc = true;
        this.checklistsAll = [];
    }
    ChecklistListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("groupId")) {
                //          if(this.groupId=="-1") 
                _this.groupId = paramMap.get("groupId");
            }
            //console.log("this.groupId - list" + this.groupId);
            _this.checklistsService.getChecklists(_this.checklistsPerPage, _this.currentPage, _this.groupId);
            _this.checklistsSub = _this.checklistsService
                .getChecklistUpdateListener()
                .subscribe(function (checklistData) {
                _this.isLoading = false;
                _this.totalChecklists = checklistData.checklistCount;
                _this.checklists = checklistData.checklists;
                _this.checklistsAll = checklistData.checklists;
            });
        });
    };
    ChecklistListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.checklistsPerPage = pageData.pageSize;
        //this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
        this.applyFilter(this.filterValue);
    };
    ChecklistListComponent.prototype.onDelete = function (checklistId) {
        var _this = this;
        this.isLoading = true;
        this.checklistsService.deleteChecklist(checklistId).subscribe(function () {
            _this.checklistsService.getChecklists(_this.checklistsPerPage, _this.currentPage, _this.groupId);
        });
    };
    ChecklistListComponent.prototype.applyFilter = function (filterValue) {
        ////console.log("filter: " + filterValue);    
        ////console.log(this.filterByTitle);
        ////console.log(this.filterByDesc);
        /*
            if(filterValue=="")
              this.groups = this.groupsAll;
            else
              this.groups = this.groupsAll.filter(
                //this.filter
                  (group: Group) =>
                  (
                    ((this.filterByTitle==true) && group.title.trim().toLowerCase() == filterValue.trim().toLowerCase())
                    ||
                    ((this.filterByDesc==true) && group.description.trim().toLowerCase() == filterValue.trim().toLowerCase())
                    ||
                    ((this.filterByImage==true) && group.imagePath.trim().toLowerCase().indexOf(filterValue.trim().toLowerCase())>0)
                  )
                );
        
        */
        //12. To do an or check with multiple keys use $or
        //db.testdb.find({"$or" : [{"status" : "dropout"}, {"gpa" : {"$lt" : 3.0}}]}, {"name" : 1, "_id" : 0})
        this.filterValue = filterValue;
        var filterarr = [];
        var filter;
        if (filterValue == "")
            this.checklists = this.checklistsAll;
        else {
            if ((this.filterByTitle == true))
                filterarr.push('{"title" : "' + filterValue + '"}');
            if ((this.filterByDesc == true))
                filterarr.push('{"description" : "' + filterValue + '"}');
            //if ((this.filterByImage==true) )
            //filterarr.push('{"imagePath" : "' + filterValue + '"}');
        }
        if (filterarr.length > 0) {
            filter = filterarr.join(",");
            filter = '{"$or" : [' + filter + ']}';
            this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId, filter);
        }
        else
            this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
        //if (this.dataSource.paginator) {
        //  this.dataSource.paginator.firstPage();
        //}
    };
    ChecklistListComponent.prototype.applyFilterType = function (checked, filterValue, type) {
        ////console.log("checked=" + checked);
        ////console.log("filterValue=" + filterValue);
        ////console.log("type=" + type);
        if (type == "filterByTitle")
            this.filterByTitle = checked;
        if (type == "filterByDesc")
            this.filterByDesc = checked;
        //if(type=="filterByImage")
        //this.filterByImage=checked;
        this.filterValue = filterValue;
        this.applyFilter(this.filterValue);
    };
    ChecklistListComponent.prototype.ngOnDestroy = function () {
        this.checklistsSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChecklistListComponent.prototype, "groupId", void 0);
    ChecklistListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-checklist-list",
            template: __webpack_require__(/*! ./checklist-list.component.html */ "./src/app/components/checklists/checklist-list/checklist-list.component.html"),
            styles: [__webpack_require__(/*! ./checklist-list.component.css */ "./src/app/components/checklists/checklist-list/checklist-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checklists_service__WEBPACK_IMPORTED_MODULE_1__["ChecklistsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChecklistListComponent);
    return ChecklistListComponent;
}());



/***/ }),

/***/ "./src/app/components/email/email.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/email/email.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.image-preview {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.image-preview img {\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/email/email.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/email/email.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  \r\n<div class=\"form-container\">\r\n<!--  <a routerLink=\"/login\" id=\"goback\">Go back</a> -->\r\n  <h2>Wellcom!</h2>\r\n\r\n  <span class=\"error\" *ngIf=\"error\" >{{ error }}</span>\r\n\r\n  <form   [formGroup]=\"form\" (submit)=\"onSubmit()\" *ngIf=\"!isLoading\">\r\n\r\n      <mat-form-field>\r\n          <input matInput type=\"text\" formControlName=\"email\" placeholder=\"Email address..\">\r\n          <mat-error *ngIf=\"form.get('email').invalid\">Please enter an Email address.</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"password\" placeholder=\"Password\">\r\n            <mat-error *ngIf=\"form.get('password').invalid\">Please enter a valid password.</mat-error>\r\n        </mat-form-field>\r\n    \r\n        <div class=\"row\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"form.get('password').invalid\" >Log in</button> \r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n        <div class=\"row\">\r\n            <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/email/email.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/email/email.component.ts ***!
  \*****************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

//import { moveIn, fallIn } from '../router.animations';


var EmailComponent = /** @class */ (function () {
    function EmailComponent(af, router) {
        this.af = af;
        this.router = router;
        this.isLoading = false;
        this.state = '';
        this.af.authState.subscribe(function (auth) {
            if (auth) {
                //this.router.navigateByUrl('/groups-list');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        //console.log(this.form.value);
        return new Promise(function (resolve, reject) {
            _this.af.auth.signInWithEmailAndPassword(_this.form.value.email, _this.form.value.password)
                .then(function (success) {
                console.log(success);
                _this.router.navigate(['/group-list']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        });
    };
    EmailComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)] }),
        });
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/components/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/components/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/components/groups/group-create/group-create.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/groups/group-create/group-create.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.textarea {\r\n  width: 100%;  \r\n}\r\n\r\ntextarea {\r\n    width: 100%;  \r\n  }\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n  }\r\n\r\nspan.header {\r\n    font-style: italic;\r\n    font-weight: bold\r\n}"

/***/ }),

/***/ "./src/app/components/groups/group-create/group-create.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/groups/group-create/group-create.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Group Info.\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form [formGroup]=\"form\" (submit)=\"onSaveGroup()\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Group Title\">\r\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a group title.</mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n      <!--<button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button> -->\r\n      <span>Pick Image</span>\r\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\r\n    </div>\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"4\" formControlName=\"description\" placeholder=\"Group Description\"></textarea>\r\n      <mat-error *ngIf=\"form.get('description').invalid\">Please enter a group description.</mat-error>\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save Group</button>\r\n    <a mat-button  *ngIf=\"groupId\" color=\"primary\" [routerLink]=\"['/checklist-list', groupId]\">Checklists</a> \r\n    <button mat-button *ngIf=\"groupId\" color=\"warn\" (click)=\"onDelete(group.id)\">DELETE</button>\r\n    <a mat-button routerLink=\"/group-list\" color=\"primary\" routerLinkActive=\"mat-accent\">Go back</a>\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <app-checklist-list  *ngIf=\"groupId\" groupId={{groupId}} >\r\n\r\n    </app-checklist-list>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/groups/group-create/group-create.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/groups/group-create/group-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: GroupCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateComponent", function() { return GroupCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _validators_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/mime-type.validator */ "./src/app/validators/mime-type.validator.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupCreateComponent = /** @class */ (function () {
    function GroupCreateComponent(groupsService, route, auth, router2) {
        this.groupsService = groupsService;
        this.route = route;
        this.auth = auth;
        this.router2 = router2;
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
        /*      if(this.auth) {
                if(this.auth.isLoggedIn) {
                  return;
                }
              }
              //this.router.navigateByUrl('/login-email');
         */ 
    }
    GroupCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_validators_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("groupId")) {
                _this.mode = "edit";
                _this.groupId = paramMap.get("groupId");
                _this.isLoading = true;
                _this.groupsService.getGroup(_this.groupId).subscribe(function (groupData) {
                    _this.isLoading = false;
                    _this.group = {
                        id: groupData._id,
                        title: groupData.title,
                        description: groupData.description,
                        imagePath: groupData.imagePath
                    };
                    //console.log( this.group);
                    _this.imagePreview = groupData.imagePath;
                    _this.form.setValue({
                        title: _this.group.title,
                        description: _this.group.description,
                        image: _this.group.imagePath
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.groupId = null;
            }
        });
    };
    GroupCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    GroupCreateComponent.prototype.onSaveGroup = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.groupsService.addGroup(this.form.value.title, this.form.value.description, this.form.value.image);
        }
        else {
            this.groupsService.updateGroup(this.groupId, this.form.value.title, this.form.value.description, this.form.value.image);
        }
        this.form.reset();
    };
    GroupCreateComponent.prototype.onDelete = function (groupId) {
        var _this = this;
        this.isLoading = true;
        this.groupsService.deleteGroup(groupId).subscribe(function () {
            //this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
            _this.router2.navigate(['/group-list']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], GroupCreateComponent.prototype, "groupId", void 0);
    GroupCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-group-create",
            template: __webpack_require__(/*! ./group-create.component.html */ "./src/app/components/groups/group-create/group-create.component.html"),
            styles: [__webpack_require__(/*! ./group-create.component.css */ "./src/app/components/groups/group-create/group-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupCreateComponent);
    return GroupCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/groups/group-list/group-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/groups/group-list/group-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.header {\r\n    font-style: italic;\r\n    font-weight: bold\r\n}\r\n\r\n.tax-featured .featured-img {\r\n    position: relative;\r\n}\r\n\r\n.tax-featured a {\r\n    color: #888;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.tax-featured .featured-img img {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.tax-featured .featured-title {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    color: #444;\r\n    line-height: 1.25;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    -webkit-margin-before: 1.33em;\r\n            margin-block-start: 1.33em;\r\n    -webkit-margin-after: 1.33em;\r\n            margin-block-end: 1.33em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n.tax-featured .featured-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 auto;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/groups/group-list/group-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/groups/group-list/group-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"header\">Groups</span>\r\n<br>\r\n<a mat-raised-button color=\"primary\" [routerLink]=\"['/group-create']\"routerLinkActive=\"mat-accent\">New Group</a>\r\n<br>\r\n<two-ways-bindings  [(counter)]=\"GroupsCount\" [groupsPerPage]=\"groupsPerPage\" [currentPage]=\"currentPage\" ></two-ways-bindings>\r\n<!-- <h2>count = {{GroupsCount}}</h2> -->\r\n<br>\r\n  <input matInput #filterValue  (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Filter by:\">\r\n  <br>\r\n  <input id=\"filterByTitle\" type=\"checkbox\" (change)=\"applyFilterType($event.target.checked, filterValue.value, 'filterByTitle')\" [checked]='filterByTitle' placeholder=\"By Title\" title=\"By Title\" value=\"By Title\"> \r\n  <label for=\"filterByTitle\">By Title</label>\r\n  <input id=\"filterByDesc\" type=\"checkbox\" (change)=\"applyFilterType($event.target.checked, filterValue.value, 'filterByDesc')\" [checked]='filterByDesc' placeholder=\"By Description\" title=\"By Description\" value=\"By Description\"> \r\n  <label for=\"filterByDesc\">By Description</label>\r\n  <input id=\"filterByImage\" type=\"checkbox\" (change)=\"applyFilterType($event.target.checked, filterValue.value, 'filterByImage')\" [checked]='filterByImage' placeholder=\"By Image\" title=\"By Image\" value=\"By Image\"> \r\n  <label for=\"filterByImage\">By Image</label>\r\n  <br>\r\n  <br>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n\r\n<mat-grid-list cols=\"5\" rowHeight=\"1:1\">\r\n    <mat-grid-tile *ngFor=\"let group of groups\">   \r\n    <a [routerLink]=\"['/group-edit', group.id]\" >\r\n      <div >\r\n        <img class=\"featured-img\" [src]=\"group.imagePath\" [alt]=\"group.title\" >\r\n      </div>\r\n    </a>\r\n    <mat-grid-tile-footer>\r\n        <div class=\"featured-text\">\r\n          <h4 class=\"featured-title\" >          {{ group.title }}\t\t\t\t\t</h4>\r\n        </div>\r\n      </mat-grid-tile-footer>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n<!--\r\n<mat-accordion multi=\"true\" *ngIf=\"groups.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let group of groups\">\r\n    <mat-expansion-panel-header>\r\n      {{ group.title }}\r\n    </mat-expansion-panel-header>\r\n    <div class=\"group-image\">\r\n      <img [src]=\"group.imagePath\" [alt]=\"group.title\">\r\n    </div>\r\n    <p>{{ group.description }}</p>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/group-edit', group.id]\">EDIT</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(group.id)\">DELETE</button>\r\n      <!- -\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/checklist-list', group.id]\">Check Lists</a>\r\n      - ->\r\n    </mat-action-row>\r\n    <!- -\r\n    <app-checklist-list [groupId]=\"group.id\" >\r\n\r\n    </app-checklist-list>\r\n  - ->\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n-->\r\n<mat-paginator [length]=\"totalGroups\" [pageSize]=\"groupsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\r\n  *ngIf=\"groups.length > 0\"></mat-paginator>\r\n<p class=\"info-text mat-body-1\" *ngIf=\"groups.length <= 0 && !isLoading\">No group added yet!</p>\r\n"

/***/ }),

/***/ "./src/app/components/groups/group-list/group-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/groups/group-list/group-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupListComponent = /** @class */ (function () {
    //  groupsAll: Group[] = [];
    function GroupListComponent(groupsService) {
        this.groupsService = groupsService;
        this.GroupsCount = 1;
        this.groups = [];
        this.isLoading = false;
        this.totalGroups = 0;
        this.groupsPerPage = 10;
        this.currentPage = 1;
        this.pageSizeOptions = [10, 20, 50, 100];
        this.filterByTitle = true;
        this.filterByDesc = true;
        this.filterByImage = true;
        this.groups = [];
    }
    GroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        //this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
        //console.log("ngOnInit");
        //console.log("totalGroups = " + (this.totalGroups + ""));
        //console.log("  groupsPerPage = " + (this.groupsPerPage + ""));
        //console.log("  currentPage = " + (this.currentPage + ""));
        this.groupsSub = this.groupsService
            .getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.isLoading = false;
            _this.totalGroups = groupData.groupCount;
            _this.groups = groupData.groups;
            //        this.groupsAll = groupData.groups;
            //console.log("subscribe");
        });
        this.applyFilter("");
    };
    GroupListComponent.prototype.onChangedPage = function (pageData) {
        //console.log("  onChangedPage");
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.groupsPerPage = pageData.pageSize;
        //this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
        this.applyFilter(this.filterValue);
    };
    GroupListComponent.prototype.onDelete = function (groupId) {
        var _this = this;
        this.isLoading = true;
        this.groupsService.deleteGroup(groupId).subscribe(function () {
            _this.groupsService.getGroups(_this.groupsPerPage, _this.currentPage);
        });
    };
    GroupListComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        var filterarr = [];
        var filter;
        if (filterValue != "") {
            if ((this.filterByTitle == true))
                filterarr.push('{"title" : "' + filterValue + '"}');
            if ((this.filterByDesc == true))
                filterarr.push('{"description" : "' + filterValue + '"}');
            if ((this.filterByImage == true))
                filterarr.push('{"imagePath" : "' + filterValue + '"}');
        }
        //-*/*/*/*/ 
        //When calling to service, and applying filter - the service invoke the 
        //getGroupUpdateListener 
        //and update all local data memebers: 
        //this.groups and this.groupsAll
        if (filterarr.length > 0) {
            filter = filterarr.join(",");
            filter = '{"$or" : [' + filter + ']}';
            this.groupsService.getGroups(this.groupsPerPage, this.currentPage, filter);
        }
        else
            this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
        //if (this.dataSource.paginator) {
        //  this.dataSource.paginator.firstPage();
        //}
    };
    GroupListComponent.prototype.applyFilterType = function (checked, filterValue, type) {
        ////console.log("checked=" + checked);
        ////console.log("filterValue=" + filterValue);
        ////console.log("type=" + type);
        if (type == "filterByTitle")
            this.filterByTitle = checked;
        if (type == "filterByDesc")
            this.filterByDesc = checked;
        if (type == "filterByImage")
            this.filterByImage = checked;
        this.filterValue = filterValue;
        this.applyFilter(this.filterValue);
    };
    GroupListComponent.prototype.ngOnDestroy = function () {
        this.groupsSub.unsubscribe();
        //console.log("ngOnDestroy");
    };
    GroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-group-list",
            template: __webpack_require__(/*! ./group-list.component.html */ "./src/app/components/groups/group-list/group-list.component.html"),
            styles: [__webpack_require__(/*! ./group-list.component.css */ "./src/app/components/groups/group-list/group-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_1__["GroupsService"]])
    ], GroupListComponent);
    return GroupListComponent;
}());



/***/ }),

/***/ "./src/app/components/groups/groups-hll/groups-hll.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/groups/groups-hll/groups-hll.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    width: 100%;\r\n    border-style: none;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/groups/groups-hll/groups-hll.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/groups/groups-hll/groups-hll.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"border-style: none; widows:100%\" >\r\n    <input type='text'  value=\"{{GroupsCount | HLLPipe }}\" />\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/groups/groups-hll/groups-hll.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/groups/groups-hll/groups-hll.component.ts ***!
  \**********************************************************************/
/*! exports provided: GroupsHLLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsHLLComponent", function() { return GroupsHLLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_groups_hll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/groups-hll.service */ "./src/app/services/groups-hll.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsHLLComponent = /** @class */ (function () {
    function GroupsHLLComponent(groupsService) {
        this.groupsService = groupsService;
        this.GroupsCount = 10;
        this.groupsService.getGroupHLL().subscribe(function (groupData) {
            //console.log(groupData);
        });
    }
    GroupsHLLComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupsService.getGroupHLL().subscribe(function (groupData) {
            //console.log(JSON.stringify(groupData) );
            _this.GroupsCount = parseInt(JSON.stringify(groupData));
        });
        //validate hll algorithm by getting all groups broup-by title...
        this.groupsService.getGroupChecklistsCountTop10().subscribe(function (groupData) {
            //console.log(groupData);
            //this.GroupsCount =parseInt(JSON.stringify(groupData) );
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Number)
    ], GroupsHLLComponent.prototype, "GroupsCount", void 0);
    GroupsHLLComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups-hll',
            template: __webpack_require__(/*! ./groups-hll.component.html */ "./src/app/components/groups/groups-hll/groups-hll.component.html"),
            styles: [__webpack_require__(/*! ./groups-hll.component.css */ "./src/app/components/groups/groups-hll/groups-hll.component.css")]
        }),
        __metadata("design:paramtypes", [_services_groups_hll_service__WEBPACK_IMPORTED_MODULE_1__["GroupsHLLService"]])
    ], GroupsHLLComponent);
    return GroupsHLLComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>\r\n    <a routerLink=\"/\">Smart List</a>\r\n  </span>\r\n  <span class=\"spacer\"></span>\r\n  <ul>\r\n    <li>\r\n      <a mat-button routerLink=\"/group-list\" routerLinkActive=\"mat-accent\">Groups</a>\r\n    </li>\r\n  </ul>\r\n    <!--  \r\n      <ul>\r\n      <li>\r\n        <a mat-button routerLink=\"/group-create\" routerLinkActive=\"mat-accent\">New Group</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul>\r\n      <li>\r\n        <a mat-button routerLink=\"/group-hll\" routerLinkActive=\"mat-accent\">Group Count</a>\r\n      </li>\r\n    </ul>\r\n    -->\r\n    <ul>\r\n      <li>\r\n        <a mat-button routerLink=\"/Statistics\" routerLinkActive=\"mat-accent\">Statistics</a>\r\n      </li>\r\n    </ul>\r\n      <ul>\r\n     <li>\r\n        <a mat-button routerLink=\"/\" (submit)=\"onSubmit()\"  >\r\n          <button mat-icon-button (click)=\"logout()\">\r\n              Logout\r\n           </button>\r\n           </a>\r\n      </li>\r\n    </ul>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import "rxjs/add/operator/filter";
//import "rxjs/add/operator/first";


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lock {\r\n    width:40%;\r\n    margin: 1.5em auto 4em auto;\r\n    display:block;\r\n}\r\n\r\n#fb {\r\n    background:#3B5998 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg id%3D%22Layer_1%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 version%3D%221.1%22 viewBox%3D%220 0 512 512%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3A%23fff%3B%7D%0D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M276.1%2C462V343.9h39.7l5.9-46h-45.6v-29.4c0-13.3%2C3.7-22.4%2C22.8-22.4l24.4%2C0v-41.2  c-4.2-0.6-18.7-1.8-35.5-1.8c-35.2%2C0-59.2%2C21.5-59.2%2C60.9v34h-39.8v46h39.8V462H276.1z%22 id%3D%22f%22%2F%3E%3C%2Fsvg%3E\") no-repeat 14px 6px;\r\n    background-size: 47px;\r\n    color:#fff;\r\n}\r\n\r\n#google {\r\n    border: 1px solid #95989A;\r\n    background: #fff  url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3C!DOCTYPE svg  PUBLIC '-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN'  'http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd'%3E%3Csvg enable-background%3D%22new 0 0 400 400%22 height%3D%22400px%22 id%3D%22Layer_1%22 version%3D%221.1%22 viewBox%3D%220 0 400 400%22 width%3D%22400px%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%3E%3Cpath d%3D%22M142.9%2C24.2C97.6%2C39.7%2C59%2C73.6%2C37.5%2C116.5c-7.5%2C14.8-12.9%2C30.5-16.2%2C46.8c-8.2%2C40.4-2.5%2C83.5%2C16.1%2C120.3   c12.1%2C24%2C29.5%2C45.4%2C50.5%2C62.1c19.9%2C15.8%2C43%2C27.6%2C67.6%2C34.1c31%2C8.3%2C64%2C8.1%2C95.2%2C1c28.2-6.5%2C54.9-20%2C76.2-39.6   c22.5-20.7%2C38.6-47.9%2C47.1-77.2c9.3-31.9%2C10.5-66%2C4.7-98.8c-58.3%2C0-116.7%2C0-175%2C0c0%2C24.2%2C0%2C48.4%2C0%2C72.6c33.8%2C0%2C67.6%2C0%2C101.4%2C0   c-3.9%2C23.2-17.7%2C44.4-37.2%2C57.5c-12.3%2C8.3-26.4%2C13.6-41%2C16.2c-14.6%2C2.5-29.8%2C2.8-44.4-0.1c-14.9-3-29-9.2-41.4-17.9   c-19.8-13.9-34.9-34.2-42.6-57.1c-7.9-23.3-8-49.2%2C0-72.4c5.6-16.4%2C14.8-31.5%2C27-43.9c15-15.4%2C34.5-26.4%2C55.6-30.9   c18-3.8%2C37-3.1%2C54.6%2C2.2c15%2C4.5%2C28.8%2C12.8%2C40.1%2C23.6c11.4-11.4%2C22.8-22.8%2C34.2-34.2c6-6.1%2C12.3-12%2C18.1-18.3   c-17.3-16-37.7-28.9-59.9-37.1C228.2%2C10.6%2C183.2%2C10.3%2C142.9%2C24.2z%22 fill%3D%22%23FFFFFF%22%2F%3E%3Cg%3E%3Cpath d%3D%22M142.9%2C24.2c40.2-13.9%2C85.3-13.6%2C125.3%2C1.1c22.2%2C8.2%2C42.5%2C21%2C59.9%2C37.1c-5.8%2C6.3-12.1%2C12.2-18.1%2C18.3    c-11.4%2C11.4-22.8%2C22.8-34.2%2C34.2c-11.3-10.8-25.1-19-40.1-23.6c-17.6-5.3-36.6-6.1-54.6-2.2c-21%2C4.5-40.5%2C15.5-55.6%2C30.9    c-12.2%2C12.3-21.4%2C27.5-27%2C43.9c-20.3-15.8-40.6-31.5-61-47.3C59%2C73.6%2C97.6%2C39.7%2C142.9%2C24.2z%22 fill%3D%22%23EA4335%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M21.4%2C163.2c3.3-16.2%2C8.7-32%2C16.2-46.8c20.3%2C15.8%2C40.6%2C31.5%2C61%2C47.3c-8%2C23.3-8%2C49.2%2C0%2C72.4    c-20.3%2C15.8-40.6%2C31.6-60.9%2C47.3C18.9%2C246.7%2C13.2%2C203.6%2C21.4%2C163.2z%22 fill%3D%22%23FBBC05%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M203.7%2C165.1c58.3%2C0%2C116.7%2C0%2C175%2C0c5.8%2C32.7%2C4.5%2C66.8-4.7%2C98.8c-8.5%2C29.3-24.6%2C56.5-47.1%2C77.2    c-19.7-15.3-39.4-30.6-59.1-45.9c19.5-13.1%2C33.3-34.3%2C37.2-57.5c-33.8%2C0-67.6%2C0-101.4%2C0C203.7%2C213.5%2C203.7%2C189.3%2C203.7%2C165.1z%22 fill%3D%22%234285F4%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M37.5%2C283.5c20.3-15.7%2C40.6-31.5%2C60.9-47.3c7.8%2C22.9%2C22.8%2C43.2%2C42.6%2C57.1c12.4%2C8.7%2C26.6%2C14.9%2C41.4%2C17.9    c14.6%2C3%2C29.7%2C2.6%2C44.4%2C0.1c14.6-2.6%2C28.7-7.9%2C41-16.2c19.7%2C15.3%2C39.4%2C30.6%2C59.1%2C45.9c-21.3%2C19.7-48%2C33.1-76.2%2C39.6    c-31.2%2C7.1-64.2%2C7.3-95.2-1c-24.6-6.5-47.7-18.2-67.6-34.1C67%2C328.9%2C49.6%2C307.5%2C37.5%2C283.5z%22 fill%3D%22%2334A853%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n#email {\r\n    background: #ECECEC  url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg height%3D%22331.46899%22 id%3D%22svg2439%22 version%3D%221.0%22 width%3D%22439.371%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22 xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22 xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22 xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22 xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22 xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs id%3D%22defs2441%22%3E%3Cmarker id%3D%22ArrowEnd%22 markerHeight%3D%223%22 markerUnits%3D%22strokeWidth%22 markerWidth%3D%224%22 orient%3D%22auto%22 refX%3D%220%22 refY%3D%225%22 viewBox%3D%220 0 10 10%22%3E%3Cpath d%3D%22M 0%2C0 L 10%2C5 L 0%2C10 L 0%2C0 z%22 id%3D%22path2444%22%2F%3E%3C%2Fmarker%3E%3Cmarker id%3D%22ArrowStart%22 markerHeight%3D%223%22 markerUnits%3D%22strokeWidth%22 markerWidth%3D%224%22 orient%3D%22auto%22 refX%3D%2210%22 refY%3D%225%22 viewBox%3D%220 0 10 10%22%3E%3Cpath d%3D%22M 10%2C0 L 0%2C5 L 10%2C10 L 10%2C0 z%22 id%3D%22path2447%22%2F%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3Cg id%3D%22g2449%22 transform%3D%22translate(-145.3305%2C-145.3305)%22%3E%3Cpath d%3D%22M 569.374%2C461.472 L 569.374%2C160.658 L 160.658%2C160.658 L 160.658%2C461.472 L 569.374%2C461.472 z%22 id%3D%22path2451%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath id%3D%22path2453%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 164.46%2C164.49 L 340.78%2C343.158 C 353.849%2C356.328 377.63%2C356.172 390.423%2C343.278 L 566.622%2C165.928%22 id%3D%22path2455%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 170.515%2C451.566 L 305.61%2C313.46%22 id%3D%22path2457%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 557.968%2C449.974 L 426.515%2C315.375%22 id%3D%22path2459%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n    #fb {\r\n        background:#3B5998;\r\n    }\r\n\r\n    #google {\r\n        background: #fff;\r\n    }\r\n\r\n    #email {\r\n        background: #ECECEC;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  \r\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\r\n\r\n  <button (click)=\"loginFb()\" id=\"fb\">Login With Facebook</button><br>\r\n  <button (click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\r\n  <button routerLink=\"/login-email\" id=\"email\">Email</button>\r\n\r\n  <!--<a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>-->\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        af.authState.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/tasks');
            }
        });
    }
    /*
      loginFb() {
        this.af.auth.login({
          provider: AuthProviders.Facebook,
          method: AuthMethods.Popup,
        }).then(
            (success) => {
            this.router.navigate(['/tasks']);
          }).catch(
            (err) => {
            this.error = err;
          })
      }
    
      loginGoogle() {
        this.af.auth.login({
          provider: AuthProviders.Google,
          method: AuthMethods.Popup,
        }).then(
            (success) => {
            this.router.navigate(['/tasks']);
          }).catch(
            (err) => {
            this.error = err;
          })
      }
    
    */
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/barchart/barchart.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/shared/barchart/barchart.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/barchart/barchart.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/barchart/barchart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d3-chart\" #chart></div>"

/***/ }),

/***/ "./src/app/components/shared/barchart/barchart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/barchart/barchart.component.ts ***!
  \******************************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v4 */ "./node_modules/d3v4/build/d3.js");
/* harmony import */ var d3v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v4__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as D3 from '../../../../../node_modules/d3';
//import { isBrowser } from 'angular2-universal'; // add this uptop
var BarchartComponent = /** @class */ (function () {
    function BarchartComponent() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.width = 700;
        this.height = 400;
    }
    BarchartComponent.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    };
    BarchartComponent.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.updateChart();
        }
    };
    BarchartComponent.prototype.createChart = function () {
        var element = this.chartContainer.nativeElement;
        //this.width = 700;//element.offsetWidth - this.margin.left - this.margin.right;
        //this.height = 400;// element.offsetHeight - this.margin.top - this.margin.bottom;
        var svg = d3v4__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', this.height + 50);
        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // define X & Y domains
        var xDomain = this.data.map(function (d) { return d[0]; });
        var yDomain = [0, d3v4__WEBPACK_IMPORTED_MODULE_1__["max"](this.data, function (d) { return d[1]; })];
        // create scales
        this.xScale = d3v4__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3v4__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain(yDomain).range([this.height, 0]);
        // bar colors
        this.colors = d3v4__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, this.data.length]).range(['red', 'blue']);
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale));
    };
    BarchartComponent.prototype.updateChart = function () {
        var _this = this;
        // update scales & axis
        this.xScale.domain(this.data.map(function (d) { return d[0]; }));
        this.yScale.domain([0, d3v4__WEBPACK_IMPORTED_MODULE_1__["max"](this.data, function (d) { return d[1]; })]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale));
        this.yAxis.transition().call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale));
        var update = this.chart.selectAll('.bar')
            .data(this.data);
        // remove exiting bars
        update.exit().remove();
        // update existing bars
        this.chart.selectAll('.bar').transition()
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('width', function (d) { return _this.xScale.bandwidth(); })
            .attr('height', function (d) { return (_this.height - _this.yScale(d[1])); })
            .style('fill', function (d, i) { return _this.colors(i); });
        // add new bars
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(0); })
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', function (d, i) { return _this.colors(i); })
            .transition()
            .delay(function (d, i) { return i * 10; })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return (_this.height - _this.yScale(d[1])); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BarchartComponent.prototype, "chartContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BarchartComponent.prototype, "data", void 0);
    BarchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barchart',
            template: __webpack_require__(/*! ./barchart.component.html */ "./src/app/components/shared/barchart/barchart.component.html"),
            styles: [__webpack_require__(/*! ./barchart.component.css */ "./src/app/components/shared/barchart/barchart.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BarchartComponent);
    return BarchartComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.google-place-input {\r\n    width: 50%;\r\n    min-width: 280px;\r\n    height: 2rem; \r\n    font-size: 1.5rem; \r\n    padding: 0.5rem;\r\n}\r\n\r\nagm-map {\r\n    height: 300px;\r\n  }\r\n\r\n* {\r\n    font-family: Lato;\r\n  }\r\n\r\na {\r\n    color: darkblue;\r\n  }"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n\r\n<div class=\"form-container\">\r\n<!--  <a routerLink=\"/login\" id=\"goback\">Go back</a> -->\r\n\r\n<h2>Join now</h2>\r\n<span class=\"error\" *ngIf=\"error\" >{{ error }}</span>\r\n<form   [formGroup]=\"form\" (submit)=\"onSubmit()\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" formControlName=\"email\" placeholder=\"Email address..\">\r\n        <mat-error *ngIf=\"form.get('email').invalid\">Please enter an Email address.</mat-error>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n          <input matInput type=\"text\" formControlName=\"password\" placeholder=\"Password\">\r\n          <mat-error *ngIf=\"form.get('password').invalid\">Please enter a valid password.</mat-error>\r\n      </mat-form-field>\r\n\r\n      <br>\r\n      <mat-form-field>\r\n          <input google-place  (onSelect)=\"setAddress($event)\" matInput type=\"text\" formControlName=\"address\" placeholder=\"Type to search Address...\"     class=\"google-place-input\" >\r\n          <mat-error *ngIf=\"form.get('address').invalid\">Please enter a valid Addreess.</mat-error>\r\n          <!-- Displaying the contents of the address object received from our event emitter -->\r\n            <ul style=\"list-style-type: none;\">\r\n                <li *ngFor=\"let key of addrKeys\">\r\n                <span style=\"font-weight: bold\">{{key}}</span>: <span>{{addr[key]}}</span>\r\n                </li>\r\n            </ul>\r\n\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n          <input matInput type=\"text\" [value]=\"latitude\" formControlName=\"latitude\" placeholder=\"Latitude\">\r\n          <mat-error *ngIf=\"form.get('latitude').invalid\">Please enter a valid latitude.</mat-error>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n          <input matInput type=\"text\" [value]=\"longitude\"  formControlName=\"longitude\" placeholder=\"Longitude\">\r\n          <mat-error *ngIf=\"form.get('longitude').invalid\">Please enter a valid longitude.</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <div class=\"row\">\r\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"form.get('password').invalid\" >Create my account</button> \r\n      </div>\r\n      <div class=\"row\">\r\n          &nbsp;\r\n      </div>\r\n      <!--\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n      </agm-map>\r\n        -->\r\n\r\n      <agm-map \r\n      [latitude]=\"latitude\"\r\n      [longitude]=\"longitude\"\r\n      [zoom]=\"zoom\"\r\n      [disableDefaultUI]=\"false\"\r\n      [zoomControl]=\"false\"\r\n      (mapClick)=\"mapClicked($event)\">\r\n    \r\n      <agm-marker \r\n          *ngFor=\"let m of markers; let i = index\"\r\n          (markerClick)=\"clickedMarker(m.label, i)\"\r\n          [latitude]=\"m.lat\"\r\n          [longitude]=\"m.lng\"\r\n          [label]=\"m.label\"\r\n          [markerDraggable]=\"m.draggable\"\r\n          (dragEnd)=\"markerDragEnd(m, $event)\">\r\n          \r\n        <agm-info-window>\r\n          <strong>InfoWindow content</strong>\r\n        </agm-info-window>\r\n        \r\n      </agm-marker>\r\n      \r\n      <!--\r\n      <agm-circle [latitude]=\"latitude + 0.3\" [longitude]=\"longitude\" \r\n          [radius]=\"5000\"\r\n          [fillColor]=\"'red'\"\r\n          [circleDraggable]=\"true\"\r\n          [editable]=\"true\">\r\n      </agm-circle>\r\n    -->\r\n    </agm-map>\r\n\r\n    </form>\r\n</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

//import { moveIn, fallIn } from '../router.animations';



//import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
//import { MapsAPILoader } from 'angular2-google-maps/core';


var SignupComponent = /** @class */ (function () {
    function SignupComponent(af, router, usersService, zone, __loader) {
        this.af = af;
        this.router = router;
        this.usersService = usersService;
        this.zone = zone;
        this.__loader = __loader;
        this.isLoading = false;
        this.latitude = 31.776615;
        this.longitude = 35.234479;
        this.zoom = 8;
        this.coords = {};
        this.lat = 0;
        this.long = 0;
        this.state = '';
        this.UsersCount = 1;
        this.users = [];
        this.totalUsers = 0;
        this.usersPerPage = 10;
        this.currentPage = 1;
        this.pageSizeOptions = [10, 20, 50, 100];
        this.usersAll = [];
        this.markers = []; /* = [
          {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
          },
          {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
          },
          {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
          }
        ]*/
        this.af.authState.subscribe(function (auth) {
            if (auth) {
                //this.router.navigateByUrl('/groups-list');
            }
        });
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        //console.log(formData.value);
        return new Promise(function (resolve, reject) {
            _this.af.auth.createUserWithEmailAndPassword(_this.form.value.email, _this.form.value.password)
                .then(function (success) {
                console.log(success);
                if (_this.form.invalid) {
                    return;
                }
                _this.isLoading = true;
                //if (this.mode === "create") 
                {
                    _this.usersService.addUser(_this.form.value.email, _this.form.value.password, _this.form.value.address, _this.form.value.longitude, _this.form.value.latitude);
                }
                _this.router.navigate(['/group-list']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)] }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
        //Load all users on GoogleMap
        this.usersService.getUsers(this.usersPerPage, this.currentPage);
        this.usersSub = this.usersService
            .getUserUpdateListener()
            .subscribe(function (userData) {
            _this.isLoading = false;
            _this.totalUsers = userData.userCount;
            _this.users = userData.users;
            _this.usersAll = userData.users;
            for (var i = 0; i < _this.usersAll.length; i++) {
                console.log(_this.usersAll[i].email);
                _this.markers.push({
                    lat: _this.usersAll[i].latitude,
                    lng: _this.usersAll[i].longitude,
                    label: _this.usersAll[i].email,
                    draggable: true
                });
            }
        });
    };
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    SignupComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        console.log(addrObj);
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            console.log(Object.keys(addrObj));
            var strAddress;
            //      strAddress = this.addr[this.addrKeys[0]];
            strAddress = addrObj;
            _this.getGeocoding(strAddress).subscribe(function (x) {
                console.log(x.toString());
                var latitude = x.lat();
                var longitude = x.lng();
                console.log("lat: " + latitude + ", long: " + longitude);
                this.latitude = latitude;
                this.longitude = longitude;
            });
        });
    };
    SignupComponent.prototype.getGeocoding = function (address) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            try {
                //at this point the variable google may be still undefined (google maps scripts still loading)
                //so load all the scripts, then...
                _this.__loader.load().then(function () {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: address }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            var place = results[0].geometry.location;
                            observer.next(place);
                            observer.complete();
                        }
                        else {
                            console.error('Error - ', results, ' & Status - ', status);
                            if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                                observer.error('Address not found!');
                            }
                            else {
                                observer.error(status);
                            }
                            observer.complete();
                        }
                    });
                });
            }
            catch (error) {
                observer.error('error getGeocoding' + error);
                observer.complete();
            }
        });
    };
    SignupComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    SignupComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    SignupComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/two-ways-bindings/two-ways-bindings.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/two-ways-bindings/two-ways-bindings.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/two-ways-bindings/two-ways-bindings.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/two-ways-bindings/two-ways-bindings.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n  <span>Currently count of Groups:</span>  <input (onchange)=\"changed()\" formControlName=\"gCount\" type='text'  id=\"gCount\" [value]=\"GroupsCount\" #gCount style=\"border-style: none\" />\r\n  <!-- {{GroupsCount}} \r\n  <input [(ngModel)]=\"GroupsCount\" />\r\n  -->\r\n  </form>"

/***/ }),

/***/ "./src/app/components/two-ways-bindings/two-ways-bindings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/two-ways-bindings/two-ways-bindings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TwoWaysBindingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWaysBindingsComponent", function() { return TwoWaysBindingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as path from "path"



var SERVER_URL = 'http://localhost:3000';
var TwoWaysBindingsComponent = /** @class */ (function () {
    function TwoWaysBindingsComponent(groupsService, socketService) {
        this.groupsService = groupsService;
        this.socketService = socketService;
        this.GroupsCount = 0;
        this.groupsPerPage = 10;
        this.currentPage = 1;
        this.counterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* this.socketService.getMessages()
       .subscribe((message: string) => {
         //console.log("subscribe");
         this.GroupsCount = parseInt(message);
       });    */
    }
    Object.defineProperty(TwoWaysBindingsComponent.prototype, "counter", {
        get: function () {
            return this.GroupsCount;
        },
        set: function (val) {
            this.GroupsCount = val;
        },
        enumerable: true,
        configurable: true
    });
    TwoWaysBindingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            gCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        //Load default value - current actual count value
        this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
        this.groupsSub = this.groupsService
            .getGroupUpdateListener()
            .subscribe(function (groupData) {
            _this.GroupsCount = groupData.groupCount;
        });
        //register  getMessages events of socket
        this.socketService.getMessages()
            .subscribe(function (message) {
            //console.log("subscribe");
            _this.GroupsCount = parseInt(message);
        });
    };
    TwoWaysBindingsComponent.prototype.ngOnDestroy = function () {
        //console.log("appComponent ngOnDestroy");
        //this.socketService.getMessages().unsubscribe();
        //this.socketService.closeUserSocket();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TwoWaysBindingsComponent.prototype, "socket", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TwoWaysBindingsComponent.prototype, "counterChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TwoWaysBindingsComponent.prototype, "groupsPerPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TwoWaysBindingsComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Number])
    ], TwoWaysBindingsComponent.prototype, "counter", null);
    TwoWaysBindingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'two-ways-bindings',
            template: __webpack_require__(/*! ./two-ways-bindings.component.html */ "./src/app/components/two-ways-bindings/two-ways-bindings.component.html"),
            styles: [__webpack_require__(/*! ./two-ways-bindings.component.css */ "./src/app/components/two-ways-bindings/two-ways-bindings.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"], _app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])
    ], TwoWaysBindingsComponent);
    return TwoWaysBindingsComponent;
}());

/*import { Component,OnInit,Input,Output ,ElementRef,EventEmitter} from '@angular/core';
import * as express from "express";
import * as socketIo from 'socket.io-client';
//import * as path from "path"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { group } from '@angular/animations';
import { GroupsService } from "../../../app/services/groups.service";
import { Group } from "../../../../src/app/Model/group.model";
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'two-ways-bindings',
  templateUrl: './two-ways-bindings.component.html',
  styleUrls: ['./two-ways-bindings.component.css']
})
export class TwoWaysBindingsComponent implements OnInit {
  @Output() socket;
  GroupsCount : number=0;
  form: FormGroup;
  private groupsSub: Subscription;

  @Output() counterChange :  EventEmitter<number>;

  constructor(public groupsService:GroupsService) {
    this.counterChange = new EventEmitter();
  }

  @Input()
  get counter(){
      return this.GroupsCount;
  }
  set counter(val:number){
    this.GroupsCount=val;
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('GroupAdded', (message) => {
            observer.next(message);
        });
    });
}

  sendMsg() {
    //console.log("sending message to server");
    this.socket.emit("message", "HELLO WORLD");
  }

  ngOnInit() {

    this.form = new FormGroup({
      gCount: new FormControl()
   });

   this.groupsService.getGroups(1, 1);
   this.groupsSub = this.groupsService
     .getGroupUpdateListener()
     .subscribe((groupData: {groups: Group[], groupCount: number}) => {
       this.GroupsCount = groupData.groupCount;
     });


      this.socket = socketIo(SERVER_URL);
      this.socket.on('message', function(message: any){
        //console.log("getting message from server: " + message);
      });

    //
    //   this.socket.on('GroupAdded', function(groupsCount: any){
    //     //console.log("Group count: " + groupsCount);
    //     this.GroupsCount = groupsCount+1;

    //     //this.counterChange.emit(this.GroupsCount);

    //     //this.from.("gCount").setValue(groupsCount);
    //     //this.form.value.gCount=groupsCount;
    //     //this.gCount.value=groupsCount;
    //     //this.form = new FormGroup({
    //      // gCount: new FormControl(null, null)
    //      // });
    
    //     //this.form.setValue({
    //     //  gCount: groupsCount
    //     //});
    //   });
    //

   this.getMessages()
   .subscribe((message: string) => {
     this.GroupsCount = parseInt(message);
   });
  }

  ngOnDestroy() {
    //console.log("appComponent ngOnDestroy");
  }
}
*/ 


/***/ }),

/***/ "./src/app/directives/d3-chart.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/d3-chart.directive.ts ***!
  \**************************************************/
/*! exports provided: D3ChartDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ChartDirective", function() { return D3ChartDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3v4 */ "./node_modules/d3v4/build/d3.js");
/* harmony import */ var d3v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3v4__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as D3 from '../../../../../node_modules/d3';
//import { isBrowser } from 'angular2-universal'; // add this uptop
var D3ChartDirective = /** @class */ (function () {
    function D3ChartDirective(elRef) {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.width = 700;
        this.height = 400;
        //elRef will get a reference to the element where
        //the directive is placed
        this.chartContainer = elRef.nativeElement;
    }
    D3ChartDirective.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    };
    D3ChartDirective.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.updateChart();
        }
    };
    D3ChartDirective.prototype.createChart = function () {
        var element = this.chartContainer; //.nativeElement;
        //this.width = 700;//element.offsetWidth - this.margin.left - this.margin.right;
        //this.height = 400;// element.offsetHeight - this.margin.top - this.margin.bottom;
        var svg = d3v4__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', this.height + 50);
        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // define X & Y domains
        var xDomain = this.data.map(function (d) { return d[0]; });
        var yDomain = [0, d3v4__WEBPACK_IMPORTED_MODULE_1__["max"](this.data, function (d) { return d[1]; })];
        // create scales
        this.xScale = d3v4__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3v4__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain(yDomain).range([this.height, 0]);
        // bar colors
        this.colors = d3v4__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, this.data.length]).range(['red', 'blue']);
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale));
    };
    D3ChartDirective.prototype.updateChart = function () {
        var _this = this;
        // update scales & axis
        this.xScale.domain(this.data.map(function (d) { return d[0]; }));
        this.yScale.domain([0, d3v4__WEBPACK_IMPORTED_MODULE_1__["max"](this.data, function (d) { return d[1]; })]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale));
        this.yAxis.transition().call(d3v4__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale));
        var update = this.chart.selectAll('.bar')
            .data(this.data);
        // remove exiting bars
        update.exit().remove();
        // update existing bars
        this.chart.selectAll('.bar').transition()
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('width', function (d) { return _this.xScale.bandwidth(); })
            .attr('height', function (d) { return (_this.height - _this.yScale(d[1])); })
            .style('fill', function (d, i) { return _this.colors(i); });
        // add new bars
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(0); })
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', function (d, i) { return _this.colors(i); })
            .transition()
            .delay(function (d, i) { return i * 10; })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return (_this.height - _this.yScale(d[1])); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], D3ChartDirective.prototype, "data", void 0);
    D3ChartDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[D3Chart]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], D3ChartDirective);
    return D3ChartDirective;
}());



/***/ }),

/***/ "./src/app/directives/google-places.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/google-places.directive.ts ***!
  \*******************************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
import { Directive, ElementRef, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import * as googleMaps from '@google/maps';
import { } from '@types/googlemaps';

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        //console.log("getFormattedAddress");
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            //console.log(place.formatted_address);
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //console.log( autocomplete.getPlace());
            //Emit the new address object for the updated place
            //      this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
            //      this.onSelect.emit(autocomplete.getPlace());
            _this.onSelect.emit(_this.element.value);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// services/auth-guard.service.ts



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/*
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
  }
}
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  private user: Observable<firebase.User>;

    constructor(private auth: AngularFireAuth, private router: Router) {
      this.user = auth.authState;
    }

    canActivate(): Observable<boolean> {
      this.user.pipe(
        map(auth =>{
          if (auth)
            return true ;
          else {
            this.router.navigate(['access-denied'])
          }
        }));
        return ;
      };
  
    }
  
*/



//@Injectable()
var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                //console.log(this.userDetails);
            }
            else {
                _this.userDetails = null;
                //console.log('Not Signin');
            }
        });
    }
    /* signInWithTwitter() {
        return this._firebaseAuth.auth.signInWithPopup(
          new firebase.auth.TwitterAuthProvider()
        )
      }
    signInWithFacebook() {
        return this._firebaseAuth.auth.signInWithPopup(
          new firebase.auth.FacebookAuthProvider()
        )
      }
    signInWithGoogle() {
        return this._firebaseAuth.auth.signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
        )
      } */
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) {
            _this.userDetails = null;
            _this.router.navigate(['/login-email']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/checklistItems.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/checklistItems.service.ts ***!
  \****************************************************/
/*! exports provided: ChecklistItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistItemsService", function() { return ChecklistItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistItemsService = /** @class */ (function () {
    function ChecklistItemsService(http, router) {
        this.http = http;
        this.router = router;
        this.checklistItems = [];
        this.checklistItemsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ChecklistItemsService.prototype.getChecklistItems = function (checklistItemsPerPage, currentPage, checklistId) {
        var _this = this;
        var queryParams = "?pagesize=" + checklistItemsPerPage + "&page=" + currentPage + "&checklistId=" + checklistId;
        //console.log(checklistId);
        this.http
            .get("http://localhost:3000/api/checklistItems" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (checklistItemsData) {
            return {
                checklistItems: checklistItemsData.checklistItems.map(function (checklistItems) {
                    //console.log("checklistItems.isDone" + checklistItems.isDone);
                    return {
                        id: checklistItems._id,
                        title: checklistItems.title,
                        description: checklistItems.description,
                        imagePath: checklistItems.imagePath,
                        checklistId: checklistItems.checklistId,
                        isDone: checklistItems.isDone
                    };
                }),
                maxChecklistItems: checklistItemsData.maxChecklistItems
            };
        }))
            .subscribe(function (transformedChecklistItemsData) {
            _this.checklistItems = transformedChecklistItemsData.checklistItems;
            _this.checklistItemsUpdated.next({
                checklistItems: _this.checklistItems.slice(),
                checklistItemsCount: transformedChecklistItemsData.maxChecklistItems
            });
        });
    };
    ChecklistItemsService.prototype.getChecklistItemsUpdateListener = function () {
        return this.checklistItemsUpdated.asObservable();
    };
    ChecklistItemsService.prototype.getChecklistItem = function (id) {
        return this.http.get("http://localhost:3000/api/checklistItems/" + id);
    };
    ChecklistItemsService.prototype.addChecklistItems = function (title, description, image, checklistId, isDone) {
        var _this = this;
        var checklistItemsData = new FormData();
        checklistItemsData.append("title", title);
        checklistItemsData.append("description", description);
        checklistItemsData.append("image", image, title);
        checklistItemsData.append("checklistId", checklistId);
        checklistItemsData.append("isDone", (isDone == true ? 'true' : 'false'));
        //console.log(checklistId);
        //checklistItemsData.append("checklistItemsItems",checklistItemsItems);
        this.http
            .post("http://localhost:3000/api/checklistItems", checklistItemsData)
            .subscribe(function (responseData) {
            _this.router.navigate(["/checklist-edit/" + checklistId]);
            //this.router.navigate(["/checklistItem-list/" + checklistId]);
        });
    };
    ChecklistItemsService.prototype.updateChecklistItems = function (id, title, description, image, checklistId, isDone, redirectToList) {
        var _this = this;
        if (redirectToList === void 0) { redirectToList = true; }
        var checklistItemsData;
        if (typeof image === "object") {
            checklistItemsData = new FormData();
            checklistItemsData.append("id", id);
            checklistItemsData.append("title", title);
            checklistItemsData.append("description", description);
            checklistItemsData.append("image", image, title);
            checklistItemsData.append("checklistId", checklistId);
            checklistItemsData.append("isDone", (isDone == true ? 'true' : 'false'));
            //checklistItemsData.append("checklistItemsItems",checklistItemsItems);
        }
        else {
            checklistItemsData = {
                id: id,
                title: title,
                description: description,
                imagePath: image,
                checklistId: checklistId,
                isDone: isDone
            };
            //console.log("checklistItemsData.isDone" + checklistItemsData.isDone);
        }
        this.http
            .put("http://localhost:3000/api/checklistItems/" + id, checklistItemsData)
            .subscribe(function (response) {
            if (redirectToList)
                //this.router.navigate(["/checklistItem-list/" + checklistId]);
                _this.router.navigate(["/checklist-edit/" + checklistId]);
        });
    };
    ChecklistItemsService.prototype.deleteChecklistItems = function (checklistItemsId) {
        return this.http
            .delete("http://localhost:3000/api/checklistItems/" + checklistItemsId);
    };
    ChecklistItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChecklistItemsService);
    return ChecklistItemsService;
}());



/***/ }),

/***/ "./src/app/services/checklists.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/checklists.service.ts ***!
  \************************************************/
/*! exports provided: ChecklistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistsService", function() { return ChecklistsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistsService = /** @class */ (function () {
    function ChecklistsService(http, router) {
        this.http = http;
        this.router = router;
        this.checklists = [];
        this.checklistsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ChecklistsService.prototype.getChecklists = function (checklistsPerPage, currentPage, group, filter) {
        var _this = this;
        if (filter === void 0) { filter = ""; }
        var queryParams = "?pagesize=" + checklistsPerPage + "&page=" + currentPage + "&group=" + group + "&filter=" + filter;
        //console.log(filter);
        this.http
            .get("http://localhost:3000/api/checklists" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (checklistData) {
            return {
                checklists: checklistData.checklists.map(function (checklist) {
                    return {
                        id: checklist._id,
                        title: checklist.title,
                        description: checklist.description,
                        imagePath: checklist.imagePath,
                        group: checklist.group
                    };
                }),
                maxChecklists: checklistData.maxChecklists
            };
        }))
            .subscribe(function (transformedChecklistData) {
            _this.checklists = transformedChecklistData.checklists;
            _this.checklistsUpdated.next({
                checklists: _this.checklists.slice(),
                checklistCount: transformedChecklistData.maxChecklists
            });
        });
    };
    ChecklistsService.prototype.getChecklistUpdateListener = function () {
        return this.checklistsUpdated.asObservable();
    };
    ChecklistsService.prototype.getChecklist = function (id) {
        return this.http.get("http://localhost:3000/api/checklists/" + id);
    };
    ChecklistsService.prototype.addChecklist = function (title, description, image, group) {
        var _this = this;
        var checklistData = new FormData();
        checklistData.append("title", title);
        checklistData.append("description", description);
        checklistData.append("image", image, title);
        checklistData.append("group", group);
        //console.log(group);
        //checklistData.append("checklistItems",checklistItems);
        this.http
            .post("http://localhost:3000/api/checklists", checklistData)
            .subscribe(function (responseData) {
            //this.router.navigate(["/checklist-list/" + group]);
            _this.router.navigate(["/group-edit/" + group]);
        });
    };
    ChecklistsService.prototype.updateChecklist = function (id, title, description, image, group, checklistItems) {
        var _this = this;
        var checklistData;
        if (typeof image === "object") {
            checklistData = new FormData();
            checklistData.append("id", id);
            checklistData.append("title", title);
            checklistData.append("description", description);
            checklistData.append("image", image, title);
            checklistData.append("group", group);
            //checklistData.append("checklistItems",checklistItems);
        }
        else {
            checklistData = {
                id: id,
                title: title,
                description: description,
                imagePath: image,
                group: group,
                checklistItems: checklistItems
            };
        }
        this.http
            .put("http://localhost:3000/api/checklists/" + id, checklistData)
            .subscribe(function (response) {
            _this.router.navigate(["/group-edit/" + group]);
            //this.router.navigate(["/checklist-list/" + group]);
        });
    };
    ChecklistsService.prototype.deleteChecklist = function (checklistId) {
        return this.http
            .delete("http://localhost:3000/api/checklists/" + checklistId);
    };
    ChecklistsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChecklistsService);
    return ChecklistsService;
}());



/***/ }),

/***/ "./src/app/services/groups-hll.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/groups-hll.service.ts ***!
  \************************************************/
/*! exports provided: GroupsHLLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsHLLService", function() { return GroupsHLLService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupsHLLService = /** @class */ (function () {
    function GroupsHLLService(http, router) {
        this.http = http;
        this.router = router;
        this.groups = [];
        this.groupsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    GroupsHLLService.prototype.getGroupHLL = function () {
        return this.http.get("http://localhost:3000/api/groupsHLL/");
    };
    GroupsHLLService.prototype.getGroupChecklistsCount = function () {
        return this.http.get("http://localhost:3000/api/groupsChecklists/");
    };
    GroupsHLLService.prototype.getGroupChecklistsCountTop10 = function () {
        return this.http.get("http://localhost:3000/api/groupsChecklists");
    };
    GroupsHLLService.prototype.getGroupChecklistsCountJSON = function () {
        return this.http.get("http://localhost:3000/api/groupsChecklists/");
    };
    GroupsHLLService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GroupsHLLService);
    return GroupsHLLService;
}());



/***/ }),

/***/ "./src/app/services/groups.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/groups.service.ts ***!
  \********************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupsService = /** @class */ (function () {
    function GroupsService(http, router) {
        this.http = http;
        this.router = router;
        this.groups = [];
        this.groupsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    GroupsService.prototype.getGroups = function (groupsPerPage, currentPage, filter) {
        var _this = this;
        if (filter === void 0) { filter = ""; }
        var queryParams = "?pagesize=" + groupsPerPage + "&page=" + currentPage + "&filter=" + filter;
        //console.log("pagesize=${groupsPerPage}" + groupsPerPage);
        this.http
            .get("http://localhost:3000/api/groups" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (groupData) {
            return {
                groups: groupData.groups.map(function (group) {
                    return {
                        title: group.title,
                        description: group.description,
                        id: group._id,
                        imagePath: group.imagePath,
                        checklist: null
                    };
                }),
                maxGroups: groupData.maxGroups
            };
        }))
            .subscribe(function (transformedGroupData) {
            _this.groups = transformedGroupData.groups;
            _this.groupsUpdated.next({
                groups: _this.groups.slice(),
                groupCount: transformedGroupData.maxGroups
            });
        });
    };
    GroupsService.prototype.getGroupUpdateListener = function () {
        return this.groupsUpdated.asObservable();
    };
    GroupsService.prototype.getGroup = function (id) {
        return this.http.get("http://localhost:3000/api/groups/" + id);
    };
    GroupsService.prototype.addGroup = function (title, description, image) {
        var _this = this;
        var groupData = new FormData();
        groupData.append("title", title);
        groupData.append("description", description);
        groupData.append("image", image, title);
        this.http
            .post("http://localhost:3000/api/groups", groupData)
            .subscribe(function (responseData) {
            _this.router.navigate(["/group-list"]);
        });
    };
    GroupsService.prototype.updateGroup = function (id, title, description, image) {
        var _this = this;
        var groupData;
        if (typeof image === "object") {
            groupData = new FormData();
            groupData.append("id", id);
            groupData.append("title", title);
            groupData.append("description", description);
            groupData.append("image", image, title);
        }
        else {
            groupData = {
                id: id,
                title: title,
                description: description,
                imagePath: image
            };
        }
        this.http
            .put("http://localhost:3000/api/groups/" + id, groupData)
            .subscribe(function (response) {
            _this.router.navigate(["/group-list"]);
        });
    };
    GroupsService.prototype.deleteGroup = function (groupId) {
        return this.http
            .delete("http://localhost:3000/api/groups/" + groupId);
    };
    GroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GroupsService);
    return GroupsService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
//import { Message } from '../model/message';
//import { Event } from '../model/event';
import * as socketIo from 'socket.io-client';
const SERVER_URL = 'http://localhost:8080';
@Injectable()
export class SocketService {
  private socket;
  public initSocket(): void {
    SocketService.socket = socketIo(SERVER_URL);
  }
  public send(message: Message): void {
    SocketService.socket.emit('message', message);
  }
  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      SocketService.socket.on('message', (data: Message) => observer.next(data));
      });
  }
  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      SocketService.socket.on(event, () => observer.next());
    });
  }
}*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'http://localhost:3000';
        this.getMessages = function () {
            //console.log("getMessages");
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                SocketService_1.socket.on('GroupAdded', function (message) {
                    observer.next(message);
                });
            });
        };
        if (!SocketService_1.socket)
            SocketService_1.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__(this.url), { transports: ['websocket'] };
    }
    SocketService_1 = SocketService;
    SocketService.prototype.sendMessage = function (message) {
        SocketService_1.socket.emit('GroupAdded', message);
    };
    SocketService.prototype.closeUserSocket = function () {
        // Setup the socket namespace subscription
        if (!SocketService_1.socket) {
            // Initialize user permissions socket
            //SocketService.socket = io(NTC_API_URL + `/user/${SocketService.socket.userID}`, { secure: true });
        }
    };
    SocketService = SocketService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
    var SocketService_1;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UsersService.prototype.getUsers = function (usersPerPage, currentPage, filter) {
        var _this = this;
        if (filter === void 0) { filter = ""; }
        var queryParams = "?pagesize=" + usersPerPage + "&page=" + currentPage + "&filter=" + filter;
        this.http
            .get("http://localhost:3000/api/users" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userData) {
            //console.log(userData);
            return {
                users: userData.users.map(function (user) {
                    //console.log(user);
                    return {
                        email: user.email,
                        address: user.address,
                        longitude: user.location[0],
                        latitude: user.location[1]
                    };
                }),
                maxUsers: userData.maxUsers
            };
        }))
            .subscribe(function (transformedUserData) {
            _this.users = transformedUserData.users;
            _this.usersUpdated.next({
                users: _this.users.slice(),
                userCount: transformedUserData.maxUsers
            });
        });
    };
    UsersService.prototype.getUserUpdateListener = function () {
        return this.usersUpdated.asObservable();
    };
    UsersService.prototype.getUser = function (id) {
        return this.http.get("http://localhost:3000/api/users/" + id);
    };
    UsersService.prototype.addUser = function (email, password, address, longitude, latitude) {
        //console.log("m:" + email + "p:" + password + "ad:" + address+ "long:"+  (longitude+"") + (latitude+""));
        var _this = this;
        var userData = new FormData();
        userData.append("username", email);
        userData.append("password", password);
        userData.append("email", email);
        userData.append("address", address);
        userData.append("longitude", longitude + "");
        userData.append("latitude", latitude + "");
        this.http
            .post("http://localhost:3000/api/users", userData)
            .subscribe(function (responseData) {
            _this.router.navigate(["/group-list"]);
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/validators/mime-type.validator.ts":
/*!***************************************************!*\
  !*** ./src/app/validators/mime-type.validator.ts ***!
  \***************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


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
    production: false,
    firebase: {
        apiKey: "AIzaSyBjgbPR6xJJ1VsP2yRopHw470deVoMD8MY",
        authDomain: "smartlistios-7a38f.firebaseapp.com",
        databaseURL: "https://smartlistios-7a38f.firebaseio.com",
        projectId: "smartlistios-7a38f",
        storageBucket: "smartlistios-7a38f.appspot.com",
        messagingSenderId: "837625752367"
    }
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Angular\SmartListMEAN\smartlist\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
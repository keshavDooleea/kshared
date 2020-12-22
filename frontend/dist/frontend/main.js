(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kdool\Desktop\kshared\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_classes_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/validator */ "XgEU");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stars/stars.component */ "uAVx");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "M8l/");
/* harmony import */ var _notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notes-container/notes-container.component */ "MecD");
/* harmony import */ var _files_container_files_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./files-container/files-container.component */ "jy3j");













function HomeComponent_small_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_small_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your message cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(userService, localStorage, socketService) {
        this.userService = userService;
        this.localStorage = localStorage;
        this.socketService = socketService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscribeToUser();
        this.initialiseEmailForm();
        const token = this.localStorage.getToken();
        this.socketService.emit('enteredHome', token);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    initialiseEmailForm() {
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_classes_validator__WEBPACK_IMPORTED_MODULE_2__["validateEmail"]])),
            emailMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_classes_validator__WEBPACK_IMPORTED_MODULE_2__["validateTextarea"]])),
        });
    }
    onNavbarChanged(showNav) {
        this.showNavbar = showNav;
    }
    showNav() {
        this.showNavbar = true;
    }
    hideNav() {
        this.showNavbar = false;
    }
    toggleDeleteModal() {
        this.hideNav();
        this.showDeleteModal = !this.showDeleteModal;
    }
    toggleFeedbackModal() {
        this.hideNav();
        this.initialiseEmailForm();
        this.emailClass = 'show-email-btn';
        this.showFeedbackModal = !this.showFeedbackModal;
    }
    onModalClicked(event) {
        // click only parent, not children
        if (event.target !== event.currentTarget) {
            return;
        }
        this.showDeleteModal = false;
        this.showFeedbackModal = false;
    }
    onDeleteAccount() {
        const token = this.localStorage.getToken();
        this.socketService.emit('deleteAccount', token);
    }
    sendEmail() {
        if (this.emailForm.invalid) {
            return;
        }
        this.emailClass = 'show-spinner';
        const data = {
            email: this.emailAdd,
            message: this.emailMessage,
            username: this.userService.getUser().user.username,
        };
        this.socketService.emit('sendEmail', data);
    }
    closeResponse() {
        this.emailClass = 'show-email-btn';
    }
    subscribeToUser() {
        this.subscriptions.push(this.userService.getUserObservable().subscribe((user) => {
            if (user) {
                this.user = user.user;
            }
        }));
        this.subscriptions.push(this.socketService
            .listen('emailResponse')
            .subscribe((response) => {
            if (response === '200') {
                this.emailClass = 'show-success-response';
            }
            else {
                this.emailClass = 'show-error-response';
            }
        }));
    }
    get emailAdd() {
        return this.emailForm.get('emailAddress').value;
    }
    get emailMessage() {
        return this.emailForm.get('emailMessage').value;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 91, vars: 13, consts: [[1, "home-container", 3, "ngClass"], [1, "sidebar", 3, "mouseleave"], [1, "sidebar-close"], [1, "fas", "fa-window-close", "icon", 3, "click"], [1, "sidebar-main"], ["src", "assets/RKD_logo.svg", "alt", "rkd-logo"], [1, "sidebar-feedback"], [1, "stars-feedback"], [1, "side-delay"], [1, "stars"], [1, "feedback-action"], [1, "btn", "side-delay-lr", 3, "click"], [1, "sidebar-account"], [1, "acc-date"], [1, "acc-btn"], [1, "main-app"], [3, "showNav", "showNavbarEmitter"], [1, "sidebar-line", 3, "mouseover"], [1, "modal", 3, "ngClass", "mouseover", "click"], [1, "modal-body", "modal-delete-body"], [1, "modal-action"], [1, "btn", "delete-btn", 3, "click"], [1, "btn-icon", "wave-btn-icon"], [1, "btn", 3, "click"], [1, "btn-icon"], [1, "bye-bottom-msg"], [1, "modal-body", "modal-email-body", 3, "formGroup"], [1, "email-header"], [1, "email-body"], [1, "email-options"], ["type", "text", "autocomplete", "off", "placeholder", "Your Email address", "spellcheck", "false", "formControlName", "emailAddress"], [4, "ngIf"], [1, "email-textarea"], ["spellcheck", "false", "placeholder", "Write your message", "formControlName", "emailMessage"], [1, "email-action", 3, "ngClass"], ["type", "submit", 1, "btn", "send-email-btn", 3, "ngClass", "click"], ["src", "assets/loading_gif.gif", "alt", "loading_gif", 1, "spinner"], [1, "email-response", "error-response"], [1, "email-msg"], [1, "email-close"], [1, "email-response", "success-response"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function HomeComponent_Template_div_mouseleave_1_listener() { return ctx.hideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_3_listener() { return ctx.hideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rate application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() { return ctx.toggleFeedbackModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Leave a feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account Created on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_24_listener() { return ctx.toggleDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-navbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showNavbarEmitter", function HomeComponent_Template_app_navbar_showNavbarEmitter_28_listener($event) { return ctx.onNavbarChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-notes-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-files-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_31_listener() { return ctx.showNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_32_listener() { return ctx.hideNav(); })("click", function HomeComponent_Template_div_click_32_listener($event) { return ctx.onModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Are you sure you want to delete your account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sad to see you go.. \uD83D\uDE1E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_40_listener() { return ctx.onDeleteAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Yes, delete!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\uD83D\uDC4B\uD83C\uDFFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_45_listener() { return ctx.toggleDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nope, changed my mind!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\uD83D\uDE03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " If yes, you will be directed to the Login page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_52_listener() { return ctx.hideNav(); })("click", function HomeComponent_Template_div_click_52_listener($event) { return ctx.onModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "Form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Saw a bug?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Love the app?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Have an idea?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Write to me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_small_67_Template, 2, 0, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_small_70_Template, 2, 0, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_72_listener() { return ctx.sendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Send Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_75_listener() { return ctx.toggleFeedbackModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sorry, an error occurred \uD83D\uDE1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_84_listener() { return ctx.closeResponse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "A copy of the mail has been sent to you \uD83D\uDE42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_90_listener() { return ctx.closeResponse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showNavbar ? "show-navbar" : "hide-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 10, ctx.user == null ? null : ctx.user.dateAccCreated, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNav", ctx.showNavbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showDeleteModal ? "show-modal" : "hide-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showFeedbackModal ? "show-modal" : "hide-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailForm.get("emailAddress").hasError("emailError") && ctx.emailForm.get("emailAddress").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailForm.get("emailMessage").hasError("textareaError") && ctx.emailForm.get("emailMessage").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.emailClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.emailForm.invalid ? "disable-btn" : "enable-btn pop-btn");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _stars_stars_component__WEBPACK_IMPORTED_MODULE_7__["StarsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_9__["NotesContainerComponent"], _files_container_files_container_component__WEBPACK_IMPORTED_MODULE_10__["FilesContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.main-app[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s width;\n}\napp-navbar[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 6%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\napp-files-container[_ngcontent-%COMP%], app-notes-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #202225;\n  transition: 0.3s width;\n  border-radius: 0 10px 10px 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  overflow: hidden;\n  width: 15%;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 3%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  transition: 0.4s transform;\n}\n.sidebar-main[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 20%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n.sidebar-feedback[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 32%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.4px;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   app-stars[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px 15px;\n  background-color: #677bc4;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.sidebar-account[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 32%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.4px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #f72f4e;\n  color: white;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay[_ngcontent-%COMP%], .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay-lr[_ngcontent-%COMP%] {\n  transition: 0.8s -webkit-clip-path;\n  transition: 0.8s clip-path;\n  transition: 0.8s clip-path, 0.8s -webkit-clip-path;\n  transition-delay: 0.2s;\n  -webkit-clip-path: inset(0 0 0 0);\n          clip-path: inset(0 0 0 0);\n}\n.hide-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 0;\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n  transform: translateX(-150%);\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay[_ngcontent-%COMP%] {\n  transition: 0.15s -webkit-clip-path;\n  transition: 0.15s clip-path;\n  transition: 0.15s clip-path, 0.15s -webkit-clip-path;\n  transition-delay: 0s;\n  -webkit-clip-path: inset(0 0 0 100%);\n          clip-path: inset(0 0 0 100%);\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay-lr[_ngcontent-%COMP%] {\n  transition: 0.15s -webkit-clip-path;\n  transition: 0.15s clip-path;\n  transition: 0.15s clip-path, 0.15s -webkit-clip-path;\n  transition-delay: 0s;\n  -webkit-clip-path: inset(0 100% 0 0);\n          clip-path: inset(0 100% 0 0);\n}\n.sidebar-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 3px;\n  height: 100%;\n}\n.modal-delete-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-position: right !important;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  letter-spacing: 0.7px;\n  padding-bottom: 20px;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  transform: translateY(5px);\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 20%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  position: relative;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  transition: 0.3s transform, 0.2s opacity;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn.delete-btn[_ngcontent-%COMP%] {\n  background-color: #f72f4e;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.3s top, 0.2s opacity;\n  pointer-events: none;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon.wave-btn-icon[_ngcontent-%COMP%] {\n  animation: none;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  transform: translateY(110%);\n  opacity: 0;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon.wave-btn-icon[_ngcontent-%COMP%] {\n  animation: wave 2s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes wave {\n  0% {\n    transform: translate(-50%, -50%) rotate(20deg);\n  }\n  50% {\n    transform: translate(-50%, -50%) rotate(70deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(20deg);\n  }\n}\n.modal-delete-body[_ngcontent-%COMP%]   .bye-bottom-msg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.8px;\n}\n.modal-email-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  transform-style: preserve-3d;\n  perspective: 500px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: 10px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  color: #72767d;\n  font-weight: bolder;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  letter-spacing: 1px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 15px;\n  transform-style: preserve-3d;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-options[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(54, 57, 63, 0.07);\n  align-self: flex-start;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n  font-size: 17px;\n  border-radius: 5px;\n  align-self: flex-start;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background-color: rgba(54, 57, 63, 0.07);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  resize: none;\n  padding: 7px;\n  color: white;\n  font-size: 17px;\n  white-space: pre-wrap;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background-color: rgba(54, 57, 63, 0.07);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n  background-color: #2e3338;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #202225;\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  color: #ed5269;\n  letter-spacing: 0.8px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 15%;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  position: relative;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .btn.send-email-btn[_ngcontent-%COMP%] {\n  background-color: #677bc4;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 55px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%] {\n  height: 70%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  letter-spacing: 0.4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%]   .email-msg[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%]   .email-close[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response.success-response[_ngcontent-%COMP%] {\n  width: 85%;\n  background-color: #43b581;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response.error-response[_ngcontent-%COMP%] {\n  width: 75%;\n  background-color: #f72f4e;\n  padding: 0 8px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-email-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-email-btn[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-email-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-spinner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-spinner[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .error-response[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .success-response[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .success-response[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .error-response[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media all and (max-width: 960px) {\n  .show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  .email-action[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n  .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media all and (max-width: 780px) {\n  .main-app[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    justify-content: initial;\n    overflow-y: auto;\n  }\n\n  app-navbar[_ngcontent-%COMP%] {\n    height: 6vh;\n  }\n\n  app-notes-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 75vh;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: center;\n    padding-bottom: 0 !important;\n  }\n\n  app-files-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 47vh;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: center;\n  }\n}\n@media all and (max-width: 650px) {\n  .show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n    width: 0%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 35%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 13px 22px;\n    font-size: 15px;\n  }\n}\n@media all and (max-width: 500px) {\n  .modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .modal-delete-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%] {\n    width: 80%;\n    justify-content: space-between;\n  }\n\n  .email-options[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .email-action[_ngcontent-%COMP%] {\n    width: 92% !important;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBc0JSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEdUJFO0VBQ0UsUUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGNBdkJhO0VBd0JiLG1CQWxDUztBQ1liO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTNDUTtBQ29CVjtBRDJCQTtFQUNFLGNBNUNXO0VBNkNYLGVBQUE7RUFDQSxhQUFBO0FDeEJGO0FEMEJFO0VBQ0UsY0FoRFE7QUN3Qlo7QUQ0QkE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDekJGO0FENEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQXpFa0I7RUEwRWxCLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtBQ3pCSjtBRDJCSTtFQUNFLGFBQUE7RUFDQSxnRUFBQTtBQ3pCTjtBRDZCRTtFQUNFLHVCQUFBO0FDM0JKO0FEK0JBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDNUJGO0FEK0JBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0VBQUE7RUF0R0EsYUFBQTtFQUNBLG1CQXNHcUI7RUFyR3JCLG1CQXFHMEI7RUFwRzFCLHVCQW9Ha0M7RUFDbEMseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUMxQkY7QUQ0QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQTFIVztFQTJIWCx3Q0FBQTtFQUNBLHlCQTdIUztFQThIVCwwQkFBQTtFQUNBLG1GQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDMUJKO0FENkJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQzNCSjtBRDZCSTtFQUNFLG1CQUFBO0FDM0JOO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQzdCSjtBRCtCSTtFQUNFLG1CQUFBO0FDN0JOO0FEa0NBO0VBQ0U7SUFDRSxzQkFBQTtFQy9CRjtBQUNGO0FEa0NBO0VBQ0U7SUFDRSxzQkFBQTtFQ2hDRjtBQUNGO0FEbUNBO0VBQ0U7SUFDRSxlQUFBO0VDakNGO0FBQ0Y7QUF6SUE7RURjRSxhQUFBO0VBQ0EsbUJDZDRCO0VEZTVCLG1CQ2ZpQztFRGdCakMsdUJDaEJ5QztFQUN6QyxrQkFBQTtBQThJRjtBQTNJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VET0EsYUFBQTtFQUNBLHNCQ1A0QjtFRFE1QixtQkNSb0M7RURTcEMsdUJDVDRDO0VBQzVDLHNCQUFBO0FBaUpGO0FBOUlBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RURBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNEaUM7RURFakMsOEJDRnlDO0FBb0ozQztBQWpKQTs7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFRFBBLGFBQUE7RUFDQSxtQkNPNEI7RURONUIscUJDTWlDO0VETGpDLHVCQ0syQztFQUMzQyxvQkFBQTtBQXVKRjtBQXBKQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7RURsQkEsYUFBQTtFQUNBLHNCQ2tCNEI7RURqQjVCLG1CQ2lCb0M7RURoQnBDLDhCQ2dCNEM7RUFDNUMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTBKRjtBQXZKQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VEM0JBLGFBQUE7RUFDQSxtQkMyQjRCO0VEMUI1QixtQkMwQmlDO0VEekJqQyx5QkN5QnlDO0VBQ3pDLDBCQUFBO0FBNkpGO0FBMUpBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RURsQ0EsYUFBQTtFQUNBLG1CQ2tDNEI7RURqQzVCLG1CQ2lDaUM7RURoQ2pDLHVCQ2dDeUM7QUFnSzNDO0FBOUpFO0VBQ0UsY0FBQTtBQWdLSjtBQTVKQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJEMURXO0VDMkRYLG1CRDFEYTtFQzJEYix3Q0FBQTtFRC9DQSxhQUFBO0VBQ0Esc0JDK0M0QjtFRDlDNUIsbUJDOENvQztFRDdDcEMsNkJDNkM0QztFQUM1QyxZQUFBO0FBa0tGO0FBaEtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RURyREYsYUFBQTtFQUNBLHNCQ3FEOEI7RURwRDlCLHVCQ29Ec0M7RURuRHRDLDZCQ21Ea0Q7QUFxS3BEO0FBbktJO0VBQ0UsY0Q3REs7RUM4REwsbUJBQUE7RUFDQSxxQkFBQTtBQXFLTjtBQWxLSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBb0tOO0FBbEtNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFvS1I7QUEvSkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFRDNFRixhQUFBO0VBQ0Esc0JDMkU4QjtFRDFFOUIsbUJDMEVzQztFRHpFdEMsdUJDeUU4QztBQW9LaEQ7QUFsS0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkR4Rks7QUM0UFg7QUFsS007RUFDRSxxQkFBQTtBQW9LUjtBQTlKQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJEMUdXO0VDMkdYLG1CRDFHYTtFQzJHYix3Q0FBQTtFRC9GQSxhQUFBO0VBQ0Esc0JDK0Y0QjtFRDlGNUIsbUJDOEZvQztFRDdGcEMsdUJDNkY0QztFQUM1QyxZQUFBO0FBb0tGO0FBbEtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFvS0o7QUFsS0k7RUFDRSxjRDVHSztFQzZHTCxtQkFBQTtFQUNBLHFCQUFBO0FBb0tOO0FBaktJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbUtOO0FBL0pFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUR2SEYsYUFBQTtFQUNBLHNCQ3VIOEI7RUR0SDlCLG1CQ3NIc0M7RURySHRDLHVCQ3FIOEM7QUFvS2hEO0FBbEtJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFvS047QUFsS007RUFDRSxxQkFBQTtBQW9LUjtBQTdKRTtFQUNFLFVBQUE7QUFnS0o7QUE5SkU7RUFDRSxVQUFBO0FBZ0tKO0FBOUpJO0VBQ0UseUJBQUE7QUFnS047QUE3Skk7O0VBRUUsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FBK0pOO0FBekpFO0VBQ0UsV0FBQTtBQTRKSjtBQTFKRTtFQUNFLFFBQUE7QUE0Sko7QUExSkk7RUFDRSw0QkFBQTtBQTRKTjtBQXpKSTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7RUFBQSxvREFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQTJKTjtBQXhKSTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7RUFBQSxvREFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQTBKTjtBQXJKQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXdKRjtBQXJKQTtFRDNMRSxhQUFBO0VBQ0Esc0JDMkw0QjtFRDFMNUIsbUJDMExvQztFRHpMcEMsNkJDeUw0QztFQUM1QyxxQ0FBQTtBQTJKRjtBQXpKRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEak1GLGFBQUE7RUFDQSxzQkNpTThCO0VEaE05QixtQkNnTXNDO0VEL0x0Qyx5QkMrTDhDO0VBQzVDLHFCQUFBO0VBQ0Esb0JBQUE7QUE4Sko7QUE1Skk7RUFDRSxZQUFBO0FBOEpOO0FBM0pJO0VBQ0UsY0QvTUs7RUNnTkwsbUJBQUE7RUFDQSwwQkFBQTtBQTZKTjtBQXpKRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VEbk5GLGFBQUE7RUFDQSxtQkNtTjhCO0VEbE45QixxQkNrTm1DO0VEak5uQyw2QkNpTjZDO0FBOEovQztBQTVKSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBOEpOO0FBNUpNO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQThKUjtBQTNKTTtFQUNFLHlCQUFBO0FBNkpSO0FBMUpNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUE0SlI7QUExSlE7RUFDRSxlQUFBO0FBNEpWO0FBdkpRO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBeUpWO0FBdkpRO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQXlKVjtBQXZKVTtFQUNFLG1FQUFBO0FBeUpaO0FBdkpZO0VBQ0U7SUFDRSw4Q0FBQTtFQXlKZDtFQXZKWTtJQUNFLDhDQUFBO0VBeUpkO0VBdkpZO0lBQ0UsOENBQUE7RUF5SmQ7QUFDRjtBQWpKRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEbFJGLGFBQUE7RUFDQSxzQkNrUjhCO0VEalI5QixtQkNpUnNDO0VEaFJ0Qyx1QkNnUjhDO0VBQzVDLGNEeFJPO0VDeVJQLG1CQUFBO0VBQ0EscUJBQUE7QUFzSko7QUFsSkE7RUQxUkUsYUFBQTtFQUNBLHNCQzBSNEI7RUR6UjVCLG1CQ3lSb0M7RUR4UnBDLDZCQ3dSNEM7RUFDNUMsNEJBQUE7RUFDQSxrQkFBQTtBQXdKRjtBQXRKRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEalNGLGFBQUE7RUFDQSxzQkNpUzhCO0VEaFM5QixtQkNnU3NDO0VEL1J0Qyx1QkMrUjhDO0VBQzVDLGtCQUFBO0FBMkpKO0FBekpJO0VEclNGLGFBQUE7RUFDQSxtQkNxU2dDO0VEcFNoQyxtQkNvU3FDO0VEblNyQyw2QkNtUzZDO0VBQ3pDLG1CQUFBO0FBOEpOO0FBNUpNO0VBQ0UsYUFBQTtFQUNBLGNEL1NHO0VDZ1RILG1CQUFBO0FBOEpSO0FBMUpJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBNEpOO0FBeEpFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUR4VEYsYUFBQTtFQUNBLHNCQ3dUOEI7RUR2VDlCLG1CQ3VUc0M7RUR0VHRDLDZCQ3NUOEM7RUFDNUMsZUFBQTtFQUNBLDRCQUFBO0FBNkpKO0FBM0pJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUQvVEosYUFBQTtFQUNBLHNCQytUZ0M7RUQ5VGhDLG1CQzhUd0M7RUQ3VHhDLDhCQzZUZ0Q7RUFDNUMsd0NBQUE7RUFDQSxzQkFBQTtBQWdLTjtBQTlKTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCRG5WWTtFQ29WWixzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHdDQUFBO0FBZ0tSO0FBNUpJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUE4Sk47QUE1Sk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCRGxXWTtFQ21XWixhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHdDQUFBO0FBOEpSO0FBNUpRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE4SlY7QUEzSlE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTZKVjtBQTFKUTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBNEpWO0FBdkpJO0VBQ0Usc0JBQUE7RUFDQSxjRGhZUztFQ2lZVCxxQkFBQTtBQXlKTjtBQXRKRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RURqWUYsYUFBQTtFQUNBLG1CQ2lZOEI7RURoWTlCLG1CQ2dZbUM7RUQvWG5DLDZCQytYMkM7QUEySjdDO0FBekpJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEySk47QUF6Sk07RUFDRSx5QkRqWkc7QUM0aUJYO0FBdkpJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQXlKTjtBQXRKSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkR2YWM7RUFXbEIsYUFBQTtFQUNBLG1CQzRaZ0M7RUQzWmhDLG1CQzJacUM7RUQxWnJDLHVCQzBaNkM7RUFDekMsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUEySk47QUF6Sk07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFRHBhTixhQUFBO0VBQ0EsbUJDb2FrQztFRG5hbEMsbUJDbWF1QztFRGxhdkMsdUJDa2ErQztBQThKakQ7QUEzSk07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VEM2FOLGFBQUE7RUFDQSxtQkMyYWtDO0VEMWFsQyxtQkMwYXVDO0VEemF2QywyQkN5YStDO0FBZ0tqRDtBQTdKTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQStKUjtBQTVKTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE4SlI7QUF6Sk07RUFDRSxhQUFBO0FBMkpSO0FBekpNOztFQUVFLGFBQUE7QUEySlI7QUF0Sk07O0VBRUUsYUFBQTtBQXdKUjtBQXJKTTtFQUNFLGFBQUE7QUF1SlI7QUFsSk07OztFQUdFLGFBQUE7QUFvSlI7QUFqSk07RUFDRSxhQUFBO0FBbUpSO0FBOUlNOzs7RUFHRSxhQUFBO0FBZ0pSO0FBN0lNO0VBQ0UsYUFBQTtBQStJUjtBQXpJQTtFQUVJO0lBQ0UsVUFBQTtFQTJJSjtFQXpJRTtJQUNFLFVBQUE7RUEySUo7O0VBdklBO0lBQ0UscUJBQUE7RUEwSUY7RUF4SUU7SUFDRSxzQkFBQTtFQTBJSjtBQUNGO0FBdElBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7RUF3SUY7O0VBcklBO0lBQ0UsV0FBQTtFQXdJRjs7RUFySUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJRDFnQkYsYUFBQTtJQUNBLG1CQzBnQjhCO0lEemdCOUIscUJDeWdCbUM7SUR4Z0JuQyx1QkN3Z0I2QztJQUMzQyw0QkFBQTtFQTJJRjs7RUF4SUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJRGpoQkYsYUFBQTtJQUNBLG1CQ2loQjhCO0lEaGhCOUIscUJDZ2hCbUM7SUQvZ0JuQyx1QkMrZ0I2QztFQThJN0M7QUFDRjtBQTNJQTtFQUVJO0lBQ0UsU0FBQTtFQTRJSjtFQTFJRTtJQUNFLFdBQUE7RUE0SUo7RUExSUk7SUFDRSxlQUFBO0VBNElOO0VBeklJO0lBQ0UsY0FBQTtFQTJJTjtFQXZJTTtJQUNFLGVBQUE7RUF5SVI7RUFySUk7SUFDRSxlQUFBO0VBdUlOO0VBcElJO0lBQ0UsZUFBQTtFQXNJTjtFQW5JSTs7SUFFRSxrQkFBQTtJQUNBLGVBQUE7RUFxSU47QUFDRjtBQWhJQTtFQUNFO0lBQ0UsZUFBQTtFQWtJRjs7RUEvSEE7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7RUFrSUY7O0VBL0hBO0lBQ0Usc0JBQUE7RUFrSUY7O0VBL0hBO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0VBa0lGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250YWluZXJzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbi5ob21lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLWFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3Mgd2lkdGg7XG59XG5cbmFwcC1uYXZiYXIge1xuICB3aWR0aDogOTclO1xuICBoZWlnaHQ6IDYlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmFwcC1maWxlcy1jb250YWluZXIsXG5hcHAtbm90ZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI1O1xuICB0cmFuc2l0aW9uOiAwLjNzIHdpZHRoO1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLnNpZGViYXItY2xvc2Uge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB0cmFuc2l0aW9uOiAwLjRzIHRyYW5zZm9ybTtcbn1cblxuLnNpZGViYXItbWFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlYmFyLW1haW4gaW1nIHtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG5cbi5zaWRlYmFyLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAzMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM5M2Y7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuc3RhcnMtZmVlZGJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5zaWRlYmFyLWZlZWRiYWNrIC5zdGFycy1mZWVkYmFjayBzbWFsbCB7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuc3RhcnMtZmVlZGJhY2sgLnN0YXJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xufVxuLnNpZGViYXItZmVlZGJhY2sgLnN0YXJzLWZlZWRiYWNrIC5zdGFycyBhcHAtc3RhcnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNpZGViYXItZmVlZGJhY2sgLmZlZWRiYWNrLWFjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuZmVlZGJhY2stYWN0aW9uIC5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3N2JjNDtcbn1cbi5zaWRlYmFyLWZlZWRiYWNrIC5mZWVkYmFjay1hY3Rpb24gLmJ0biBoNCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnNpZGViYXItYWNjb3VudCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMzIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWRhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG4uc2lkZWJhci1hY2NvdW50IC5hY2MtZGF0ZSBzbWFsbCB7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG4uc2lkZWJhci1hY2NvdW50IC5hY2MtZGF0ZSBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5zaWRlYmFyLWFjY291bnQgLmFjYy1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWJ0biAuYnRuIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjcyZjRlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZWJhci1hY2NvdW50IC5hY2MtYnRuIC5idG4gaDQge1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zaG93LW5hdmJhciAubWFpbi1hcHAge1xuICB3aWR0aDogODUlO1xufVxuLnNob3ctbmF2YmFyIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi5zaG93LW5hdmJhciAuc2lkZWJhciAuc2lkZWJhci1jbG9zZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG4uc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGUtZGVsYXksXG4uc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGUtZGVsYXktbHIge1xuICB0cmFuc2l0aW9uOiAwLjhzIGNsaXAtcGF0aDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcbn1cblxuLmhpZGUtbmF2YmFyIC5tYWluLWFwcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhpZGUtbmF2YmFyIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4uaGlkZS1uYXZiYXIgLnNpZGViYXIgLnNpZGViYXItY2xvc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xufVxuLmhpZGUtbmF2YmFyIC5zaWRlYmFyIC5zaWRlLWRlbGF5IHtcbiAgdHJhbnNpdGlvbjogMC4xNXMgY2xpcC1wYXRoO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAxMDAlKTtcbn1cbi5oaWRlLW5hdmJhciAuc2lkZWJhciAuc2lkZS1kZWxheS1sciB7XG4gIHRyYW5zaXRpb246IDAuMTVzIGNsaXAtcGF0aDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIGNsaXAtcGF0aDogaW5zZXQoMCAxMDAlIDAgMCk7XG59XG5cbi5zaWRlYmFyLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtZGVsZXRlLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IHNwYW4gaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgc3BhbiBwIHtcbiAgY29sb3I6ICM3Mjc2N2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0biBoNCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm0sIDAuMnMgb3BhY2l0eTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0bi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MmY0ZTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0biAuYnRuLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4zcyB0b3AsIDAuMnMgb3BhY2l0eTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG4gLmJ0bi1pY29uLndhdmUtYnRuLWljb24ge1xuICBhbmltYXRpb246IG5vbmU7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG46aG92ZXIgaDQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTEwJSk7XG4gIG9wYWNpdHk6IDA7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG46aG92ZXIgLmJ0bi1pY29uIHtcbiAgdG9wOiA1MCU7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuOmhvdmVyIC5idG4taWNvbi53YXZlLWJ0bi1pY29uIHtcbiAgYW5pbWF0aW9uOiB3YXZlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDcwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjBkZWcpO1xuICB9XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgLmJ5ZS1ib3R0b20tbXNnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICM3Mjc2N2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cblxuLm1vZGFsLWVtYWlsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDUwMHB4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWhlYWRlciBzcGFuIHAge1xuICBtYXJnaW46IDAgNXB4O1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1oZWFkZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1ib2R5IC5lbWFpbC1vcHRpb25zIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NCwgNTcsIDYzLCAwLjA3KTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1ib2R5IC5lbWFpbC1vcHRpb25zIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjUlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDU3LCA2MywgMC4wNyk7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSAuZW1haWwtdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NSU7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSAuZW1haWwtdGV4dGFyZWEgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDU3LCA2MywgMC4wNyk7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSAuZW1haWwtdGV4dGFyZWEgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1ib2R5IC5lbWFpbC10ZXh0YXJlYSB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzMzM4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWJvZHkgLmVtYWlsLXRleHRhcmVhIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIyMjU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSBzbWFsbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiAjZWQ1MjY5O1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIC5idG4ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbiAuYnRuLnNlbmQtZW1haWwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3N2JjNDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24gLnNwaW5uZXIge1xuICB3aWR0aDogNTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24gLmVtYWlsLXJlc3BvbnNlIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbiAuZW1haWwtcmVzcG9uc2UgLmVtYWlsLW1zZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIC5lbWFpbC1yZXNwb25zZSAuZW1haWwtY2xvc2Uge1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIC5lbWFpbC1yZXNwb25zZS5zdWNjZXNzLXJlc3BvbnNlIHtcbiAgd2lkdGg6IDg1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYjU4MTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24gLmVtYWlsLXJlc3BvbnNlLmVycm9yLXJlc3BvbnNlIHtcbiAgd2lkdGg6IDc1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MmY0ZTtcbiAgcGFkZGluZzogMCA4cHg7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctZW1haWwtYnRuIC5idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LWVtYWlsLWJ0biAuZW1haWwtcmVzcG9uc2UsXG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctZW1haWwtYnRuIC5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1zcGlubmVyIC5idG4sXG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctc3Bpbm5lciAuZW1haWwtcmVzcG9uc2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LXNwaW5uZXIgLnNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LXN1Y2Nlc3MtcmVzcG9uc2UgLmJ0bixcbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1zdWNjZXNzLXJlc3BvbnNlIC5lcnJvci1yZXNwb25zZSxcbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1zdWNjZXNzLXJlc3BvbnNlIC5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1zdWNjZXNzLXJlc3BvbnNlIC5zdWNjZXNzLXJlc3BvbnNlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1lcnJvci1yZXNwb25zZSAuYnRuLFxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LWVycm9yLXJlc3BvbnNlIC5zdWNjZXNzLXJlc3BvbnNlLFxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LWVycm9yLXJlc3BvbnNlIC5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1lcnJvci1yZXNwb25zZSAuZXJyb3ItcmVzcG9uc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuc2hvdy1uYXZiYXIgLm1haW4tYXBwIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5zaG93LW5hdmJhciAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5lbWFpbC1hY3Rpb24ge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuICAuZW1haWwtYWN0aW9uIC5lbWFpbC1yZXNwb25zZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLm1haW4tYXBwIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIGFwcC1uYXZiYXIge1xuICAgIGhlaWdodDogNnZoO1xuICB9XG5cbiAgYXBwLW5vdGVzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGFwcC1maWxlcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDd2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuc2hvdy1uYXZiYXIgLm1haW4tYXBwIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgLnNob3ctbmF2YmFyIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGViYXItY2xvc2UgaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIC5zaG93LW5hdmJhciAuc2lkZWJhciAuc2lkZWJhci1tYWluIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzNSU7XG4gIH1cbiAgLnNob3ctbmF2YmFyIC5zaWRlYmFyIC5zaWRlYmFyLWZlZWRiYWNrIC5zdGFycy1mZWVkYmFjayBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIC5zaG93LW5hdmJhciAuc2lkZWJhciAuYWNjLWRhdGUgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuc2hvdy1uYXZiYXIgLnNpZGViYXIgLmFjYy1kYXRlIGgzIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnNob3ctbmF2YmFyIC5zaWRlYmFyIC5mZWVkYmFjay1hY3Rpb24gLmJ0bixcbi5zaG93LW5hdmJhciAuc2lkZWJhciAuYWNjLWJ0biAuYnRuIHtcbiAgICBwYWRkaW5nOiAxM3B4IDIycHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubW9kYWwtZGVsZXRlLWJvZHkgc3BhbiBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLm1vZGFsLWRlbGV0ZS1ib2R5IC5tb2RhbC1hY3Rpb24ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmVtYWlsLW9wdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZW1haWwtYWN0aW9uIHtcbiAgICB3aWR0aDogOTIlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class UserService {
    constructor() {
        this.behaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentUser);
    }
    setUser(newUser) {
        this.currentUser = newUser;
        this.behaviorSubject.next(this.currentUser);
    }
    getUser() {
        return this.currentUser;
    }
    getUserObservable() {
        return this.behaviorSubject.asObservable();
    }
    getToken() {
        return this.currentUser.user.token;
    }
    setCurrentText(newText) {
        this.currentUser.user.currentText = newText;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M8l/":
/*!************************************************************!*\
  !*** ./src/app/components/home/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class NavbarComponent {
    constructor(localStorage, userService, socketService) {
        this.localStorage = localStorage;
        this.userService = userService;
        this.socketService = socketService;
        this.showNavbarEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.subscription = this.userService
            .getUserObservable()
            .subscribe((user) => {
            if (user) {
                this.currentUser = user.user;
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onLogOutClicked() {
        const token = this.localStorage.getToken();
        this.localStorage.clearToken();
        this.socketService.emit('onLogOut', token);
    }
    showNavbar() {
        this.showNavbarEmitter.emit(true);
    }
    hideNavbar() {
        this.showNavbarEmitter.emit(false);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { showNav: "showNav" }, outputs: { showNavbarEmitter: "showNavbarEmitter" }, decls: 10, vars: 2, consts: [[1, "hamburger", 3, "ngClass", "mouseover"], [1, "navbar-item"], ["routerLink", "/", 1, "fas", "fa-sign-out-alt", "icon", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavbarComponent_Template_div_mouseover_0_listener() { return ctx.showNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_9_listener() { return ctx.onLogOutClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showNav ? "hide-hamburger" : "show-hamburger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser == null ? null : ctx.currentUser.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.navbar-item[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\nh3[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: white;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.2rem;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #72767d;\n  margin-right: 2px;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.hamburger[_ngcontent-%COMP%] {\n  z-index: 2;\n  height: 3vh;\n  width: 30px;\n  align-self: flex-end;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  transition: 0.4s transform;\n}\n.hamburger.show-hamburger[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.hamburger.hide-hamburger[_ngcontent-%COMP%] {\n  transform: translateX(-70px);\n}\n.hamburger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -100%;\n  left: -100%;\n  width: 100%;\n  height: 200%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 20%;\n  background-color: #b9bbbe;\n  border-radius: 5px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  width: 80%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 55%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFzQlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkNBQUE7QUNwQko7QUR1QkU7RUFDRSxRQUFBO0FDckJKO0FEd0JFO0VBQ0UsY0F2QmE7RUF3QmIsbUJBbENTO0FDWWI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBM0NRO0FDb0JWO0FEMkJBO0VBQ0UsY0E1Q1c7RUE2Q1gsZUFBQTtFQUNBLGFBQUE7QUN4QkY7QUQwQkU7RUFDRSxjQWhEUTtBQ3dCWjtBRDRCQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN6QkY7QUQ0QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQ0QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBekVrQjtFQTBFbEIsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDJCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0FDekJKO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLGdFQUFBO0FDekJOO0FENkJFO0VBQ0UsdUJBQUE7QUMzQko7QUQrQkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUM1QkY7QURnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtFQXRHQSxhQUFBO0VBQ0EsbUJBc0dxQjtFQXJHckIsbUJBcUcwQjtFQXBHMUIsdUJBb0drQztFQUNsQyx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQzFCRjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBMUhXO0VBMkhYLHdDQUFBO0VBQ0EseUJBN0hTO0VBOEhULDBCQUFBO0VBQ0EsbUZBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUMxQko7QUQ2QkU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDM0JKO0FENkJJO0VBQ0UsbUJBQUE7QUMzQk47QUQrQkU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDN0JKO0FEK0JJO0VBQ0UsbUJBQUE7QUM3Qk47QURrQ0E7RUFDRTtJQUNFLHNCQUFBO0VDL0JGO0FBQ0Y7QURrQ0E7RUFDRTtJQUNFLHNCQUFBO0VDaENGO0FBQ0Y7QURtQ0E7RUFDRTtJQUNFLGVBQUE7RUNqQ0Y7QUFDRjtBQXpJQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFRFlBLGFBQUE7RUFDQSxtQkNaNEI7RURhNUIscUJDYmlDO0VEY2pDLHlCQ2QyQztBQThJN0M7QUEzSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUE4SUY7QUE1SUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUE4SUo7QUExSUE7RUFDRSxpQkFBQTtBQTZJRjtBQTFJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VEWkEsYUFBQTtFQUNBLHNCQ1k0QjtFRFg1Qix1QkNXb0M7RURWcEMsOEJDVWdEO0VBQ2hELDBCQUFBO0FBZ0pGO0FBOUlFO0VBQ0Usd0JBQUE7QUFnSko7QUE3SUU7RUFDRSw0QkFBQTtBQStJSjtBQTVJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE4SUo7QUEzSUU7RUFDRSxXQUFBO0VBQ0EseUJEN0NTO0VDOENULGtCRC9DZ0I7QUM0THBCO0FBM0lJO0VBQ0UsVUFBQTtBQTZJTjtBQTFJSTtFQUNFLFVBQUE7QUE0SU47QUF6SUk7RUFDRSxVQUFBO0FBMklOIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250YWluZXJzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbi5uYXZiYXItaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmgzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmgzIHNwYW4ge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbmkge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogM3ZoO1xuICB3aWR0aDogMzBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IDAuNHMgdHJhbnNmb3JtO1xufVxuLmhhbWJ1cmdlci5zaG93LWhhbWJ1cmdlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5oYW1idXJnZXIuaGlkZS1oYW1idXJnZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTcwcHgpO1xufVxuLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMDAlO1xuICBsZWZ0OiAtMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwJTtcbn1cbi5oYW1idXJnZXIgc3BhbiB7XG4gIGhlaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYmJlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaGFtYnVyZ2VyIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5oYW1idXJnZXIgc3BhbjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogNTUlO1xufVxuLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAzMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }]; }, { showNavbarEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MecD":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/notes-container/notes-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesContainerComponent", function() { return NotesContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notes/notes.service */ "p80N");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-list-container/note-list-container.component */ "wVm/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class NotesContainerComponent {
    constructor(noteService, socketService, userService) {
        this.noteService = noteService;
        this.socketService = socketService;
        this.userService = userService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscribeToSocket();
        this.subscribeToUser();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    saveTextarea() {
        if (!this.textareaValue) {
            return;
        }
        this.noteService.addNote(this.textareaValue);
    }
    onShiftEnter(event) {
        event.target.blur();
        this.saveTextarea();
    }
    onKeyup() {
        this.noteService.saveCurrentText(this.textareaValue);
    }
    clearTextarea() {
        this.textareaValue = '';
        this.noteService.saveCurrentText(this.textareaValue);
    }
    subscribeToSocket() {
        this.subscriptions.push(this.socketService.listen('updatedText').subscribe((data) => {
            this.textareaValue = data;
        }));
    }
    subscribeToUser() {
        this.subscriptions.push(this.userService.getUserObservable().subscribe((user) => {
            if (user) {
                this.textareaValue = user.user.currentText;
            }
        }));
    }
}
NotesContainerComponent.ɵfac = function NotesContainerComponent_Factory(t) { return new (t || NotesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
NotesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesContainerComponent, selectors: [["app-notes-container"]], decls: 6, vars: 4, consts: [[1, "notes-body"], [1, "text-container"], ["spellcheck", "false", 3, "ngModel", "placeholder", "ngModelChange", "keydown.shift.enter", "keyup"], [1, "fas", "fa-times-circle", 3, "ngClass", "click"], [1, "fas", "fa-heart", 3, "ngClass", "click"]], template: function NotesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-note-list-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotesContainerComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.textareaValue = $event; })("keydown.shift.enter", function NotesContainerComponent_Template_textarea_keydown_shift_enter_3_listener($event) { return ctx.onShiftEnter($event); })("keyup", function NotesContainerComponent_Template_textarea_keyup_3_listener() { return ctx.onKeyup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesContainerComponent_Template_i_click_4_listener() { return ctx.clearTextarea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesContainerComponent_Template_i_click_5_listener() { return ctx.saveTextarea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "Quick note\n\nPress Shift + Enter for quick save!\nTip: Your note stays here even without saving!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textareaValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textareaValue ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textareaValue ? "icon" : "disable-icon");
    } }, directives: [_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_4__["NoteListContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.notes-body[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.notes-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  width: 65%;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  background-color: #36393f;\n  border-radius: 10px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #40444b;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  padding: 7px;\n  color: white;\n  font-size: 17px;\n  white-space: pre-wrap;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n  background-color: #2e3338;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #202225;\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 60px;\n  bottom: -50%;\n  font-size: 25px;\n  opacity: 0;\n  transition: 0.35s bottom, 0.2s opacity;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  right: 20px;\n  transition-delay: 0.1s;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  bottom: 15px;\n  opacity: 1;\n}\n@media all and (max-width: 780px) {\n  .notes-body[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  .notes-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 35vh !important;\n  }\n  .notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30vh !important;\n  }\n  .notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    bottom: 15px;\n    opacity: 1;\n    right: 65px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub3Rlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFzQlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkNBQUE7QUNwQko7QUR1QkU7RUFDRSxRQUFBO0FDckJKO0FEd0JFO0VBQ0UsY0F2QmE7RUF3QmIsbUJBbENTO0FDWWI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBM0NRO0FDb0JWO0FEMkJBO0VBQ0UsY0E1Q1c7RUE2Q1gsZUFBQTtFQUNBLGFBQUE7QUN4QkY7QUQwQkU7RUFDRSxjQWhEUTtBQ3dCWjtBRDRCQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN6QkY7QUQ0QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQ0QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBekVrQjtFQTBFbEIsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDJCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0FDekJKO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLGdFQUFBO0FDekJOO0FENkJFO0VBQ0UsdUJBQUE7QUMzQko7QUQrQkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUM1QkY7QURnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtFQXRHQSxhQUFBO0VBQ0EsbUJBc0dxQjtFQXJHckIsbUJBcUcwQjtFQXBHMUIsdUJBb0drQztFQUNsQyx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQzFCRjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBMUhXO0VBMkhYLHdDQUFBO0VBQ0EseUJBN0hTO0VBOEhULDBCQUFBO0VBQ0EsbUZBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUMxQko7QUQ2QkU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDM0JKO0FENkJJO0VBQ0UsbUJBQUE7QUMzQk47QUQrQkU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDN0JKO0FEK0JJO0VBQ0UsbUJBQUE7QUM3Qk47QURrQ0E7RUFDRTtJQUNFLHNCQUFBO0VDL0JGO0FBQ0Y7QURrQ0E7RUFDRTtJQUNFLHNCQUFBO0VDaENGO0FBQ0Y7QURtQ0E7RUFDRTtJQUNFLGVBQUE7RUNqQ0Y7QUFDRjtBQXpJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEWUEsYUFBQTtFQUNBLG1CQ1o0QjtFRGE1QixtQkNiaUM7RURjakMsdUJDZHlDO0FBOEkzQztBQTNJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VETUEsYUFBQTtFQUNBLG1CQ040QjtFRE81QixtQkNQaUM7RURRakMsOEJDUnlDO0FBaUozQztBQS9JRTtFQUNFLFlBQUE7RUFDQSx5QkRaUztFQ2FULG1CRFpXO0VDYVgsd0NBQUE7QUFpSko7QUE5SUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkR0QlM7RUN1QlQsbUJEdEJXO0FDc0tmO0FBOUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJEOUJTO0VDK0JULGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWdKTjtBQTlJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBZ0pSO0FBN0lNO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUErSVI7QUE1SU07RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQThJUjtBQTFJSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBNElOO0FBMUlNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBNElSO0FBdklNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUF5SVI7QUFuSUE7RUFDRTtJQUNFLFlBQUE7SUR0RUYsYUFBQTtJQUNBLHNCQ3NFOEI7SURyRTlCLG1CQ3FFc0M7SURwRXRDLDZCQ29FOEM7RUF5STlDO0VBdklFO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBeUlKO0VBdElFO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBd0lKO0VBdElJO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBd0lOO0FBQ0YiLCJmaWxlIjoibm90ZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuJG1haW5Ca2c6ICMyZjMxMzY7XHJcbiRjb250YWluZXJzOiAjMzYzOTNmO1xyXG4kYm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kc21hbGxCb3JkZXJSYWRpdXM6IDVweDtcclxuJGl0ZW1Ob3JtYWw6ICNiOWJiYmU7XHJcbiRpdGVtSG92ZXI6ICNkY2RkZGU7XHJcbiRtb2RhbEJrZzogIzE4MTkxYztcclxuJGJ0bkNvbG9yOiAjNjc3YmM0O1xyXG4kaW52YWxpZENvbG9yOiAjZWQ1MjY5O1xyXG4kdmFsaWRDb2xvcjogI2FiZThhYjtcclxuJGZhZGVUZXh0OiAjNzI3NjdkO1xyXG4kc2VsZWN0aW9uQ29sb3I6ICM4MTY3YTk7XHJcblxyXG5AbWl4aW4gZGlzcGxheUZsZXgoJGRpciwgJGFsaWduLCAkanVzdGlmeSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXI7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmOm5vdChpKSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6c2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAkc2VsZWN0aW9uQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGFpbmVycztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Ca2c7XHJcbn1cclxuXHJcbi8vIGdsb2JhbFxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaXRlbUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtaWNvbiB7XHJcbiAgY29sb3I6ICNiOWJiYmU7XHJcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmVuYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLy8gbW9kYWxcclxuLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XHJcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRhaW5lcnM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5oaWRlLW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xufVxuLm1vZGFsLnNob3ctbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLnNob3ctbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm90ZXMtYm9keSB7XG4gIHdpZHRoOiA5NyU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubm90ZXMtYm9keSA+ICoge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM5M2Y7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIge1xuICB3aWR0aDogNjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzMzM4O1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIyMjU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIGJvdHRvbTogLTUwJTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjM1cyBib3R0b20sIDAuMnMgb3BhY2l0eTtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciBpOm50aC1jaGlsZCgyKSB7XG4gIHJpZ2h0OiAyMHB4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyOmhvdmVyIGkge1xuICBib3R0b206IDE1cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5ub3Rlcy1ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbiAgLm5vdGVzLWJvZHkgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1dmggIWltcG9ydGFudDtcbiAgfVxuICAubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzB2aCAhaW1wb3J0YW50O1xuICB9XG4gIC5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciBpIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogNjVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes-container',
                templateUrl: './notes-container.component.html',
                styleUrls: ['./notes-container.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/user */ "UxUN");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user/user.service */ "CFL1");







class AppComponent {
    constructor(socketService, localStorage, router, userService) {
        this.socketService = socketService;
        this.localStorage = localStorage;
        this.router = router;
        this.userService = userService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.checkUser();
        this.onLogOut();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    checkUser() {
        const token = this.localStorage.getToken();
        if (token) {
            // this.router.navigateByUrl('/home');
            this.socketService.emit('pageRefresh', token);
            this.subscriptions.push(this.socketService.listen('initialLanding').subscribe((data) => {
                const user = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"](data);
                this.userService.setUser(user);
            }));
        }
        this.subscriptions.push(this.socketService.listen('deletedAccount').subscribe(() => {
            this.localStorage.clearToken();
            this.router.navigateByUrl('/login');
        }));
    }
    onLogOut() {
        this.subscriptions.push(this.socketService.listen('appLogOut').subscribe(() => {
            this.router.navigateByUrl('/login');
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "TAW8":
/*!************************************************!*\
  !*** ./src/app/services/auth/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoginService {
    constructor(localStorage, router) {
        this.localStorage = localStorage;
        this.router = router;
    }
    canActivate(route, state) {
        const token = this.localStorage.getToken();
        // determine if the uder is logged in from this method.
        if (token) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "UxUN":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(newUser) {
        this.currentUser = newUser;
    }
    get user() {
        return this.currentUser;
    }
}


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! canvas-confetti */ "cSmn");
/* harmony import */ var src_app_classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/user */ "UxUN");
/* harmony import */ var src_app_classes_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/validator */ "XgEU");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No symbol or space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Username is taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No symbol or space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.serverResponse.message);
} }
function LoginComponent_small_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.serverResponse.message);
} }
class LoginComponent {
    constructor(socket, userService, localStorage, router, elementRef) {
        this.socket = socket;
        this.userService = userService;
        this.localStorage = localStorage;
        this.router = router;
        this.elementRef = elementRef;
        this.stars = [1, 2, 3, 4, 5];
        this.hidePassword = [true, true, true];
        this.checkUser();
        this.updateGlobalStars();
        this.initialiseRegisterForm();
        this.inialiseLoginForm();
    }
    checkUser() {
        const token = this.localStorage.getToken();
        if (token) {
            this.router.navigate(['/home']);
        }
    }
    initialiseRegisterForm() {
        this.isRegister = false;
        this.serverResponse = {};
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_classes_validator__WEBPACK_IMPORTED_MODULE_4__["validateUsername"]])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_classes_validator__WEBPACK_IMPORTED_MODULE_4__["validatePassword"]])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
        });
    }
    inialiseLoginForm() {
        this.isRegister = false;
        this.serverResponse = {};
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            loginUsername: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_classes_validator__WEBPACK_IMPORTED_MODULE_4__["validateUsername"]])),
            loginPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_classes_validator__WEBPACK_IMPORTED_MODULE_4__["validatePassword"]])),
        });
    }
    updateGlobalStars() {
        this.socket.emit('getGlobalStars', {});
        this.socketSubscription = this.socket
            .listen('avgStars')
            .subscribe((starsAmount) => {
            this.fillStars(starsAmount);
        });
    }
    fillStars(index) {
        this.svgStars.forEach((star, i) => {
            if (i <= index - 1) {
                star.classList.add('light-star');
            }
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.socketSubscription) {
            this.socketSubscription.unsubscribe();
        }
    }
    toggleEyePassword(index) {
        this.hidePassword[index] = !this.hidePassword[index];
    }
    onCancelClicked() {
        this.initialiseRegisterForm();
    }
    onInputKeydown() {
        this.serverResponse = {};
    }
    onRegisterClicked() {
        if (this.registerForm.invalid ||
            this.registerPassword !== this.registerConfirmPassword) {
            return;
        }
        const registerForm = {
            username: this.registerUsername,
            password: this.registerPassword,
        };
        this.socket.emit('newRegistration', registerForm);
        this.socketSubscription = this.socket
            .listen('registrationResponse')
            .subscribe((data) => {
            this.handleRegistrationResponse(data);
        });
    }
    onSignUpClicked() {
        this.isRegister = true;
    }
    onLoginClicked() {
        if (this.loginForm.invalid) {
            return;
        }
        const loginForm = {
            username: this.loginUsername,
            password: this.loginPassword,
        };
        this.socket.emit('newUserLogin', loginForm);
        this.socketSubscription = this.socket
            .listen('newLoginResponse')
            .subscribe((data) => {
            this.handleLoginResponse(data);
        });
    }
    toggleModal() {
        this.shouldShowModal = !this.shouldShowModal;
    }
    onModalClicked(event) {
        // click only parent, not children
        if (event.target !== event.currentTarget) {
            return;
        }
        this.shouldShowModal = false;
    }
    handleRegistrationResponse(data) {
        this.serverResponse = data;
        if (data.status === 200) {
            this.throwConfetti();
            this.showRegisteredMessage = true;
            // hide register - show login
            setTimeout(() => {
                this.isRegister = false;
            }, 500);
            // hide message
            setTimeout(() => {
                this.showRegisteredMessage = false;
                this.initialiseRegisterForm();
            }, 2700);
        }
    }
    handleLoginResponse(data) {
        this.serverResponse = data;
        if (data.status === 200) {
            const currentUser = {
                id: data.id,
                username: data.username,
                token: data.token,
                dateAccCreated: data.dateAccCreated,
                currentText: data.currentText,
                noteList: data.noteList,
                stars: data.stars,
                files: data.files,
            };
            const user = new src_app_classes_user__WEBPACK_IMPORTED_MODULE_3__["User"](currentUser);
            this.userService.setUser(user);
            this.localStorage.saveToken();
            this.router.navigateByUrl('/home');
        }
    }
    throwConfetti() {
        const colors = ['#bb0000', '#ffffff', '#ffff00'];
        canvas_confetti__WEBPACK_IMPORTED_MODULE_2__["create"](undefined, { resize: true })({
            particleCount: 100,
            startVelocity: 55,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors,
        });
        canvas_confetti__WEBPACK_IMPORTED_MODULE_2__["create"](undefined, { resize: true })({
            particleCount: 100,
            angle: 120,
            startVelocity: 55,
            spread: 55,
            origin: { x: 1 },
            colors,
        });
    }
    get loginUsername() {
        return this.loginForm.get('loginUsername').value;
    }
    get loginPassword() {
        return this.loginForm.get('loginPassword').value;
    }
    get registerUsername() {
        return this.registerForm.get('username').value;
    }
    get registerPassword() {
        return this.registerForm.get('password').value;
    }
    get registerConfirmPassword() {
        return this.registerForm.get('confirmPassword').value;
    }
    get svgStars() {
        return this.elementRef.nativeElement.querySelectorAll('.stars-span img');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 110, vars: 40, consts: [[1, "login-body", 3, "ngClass"], [1, "login-header"], [1, "stars-header"], [1, "stars-text"], [1, "stars-container"], ["class", "stars-span", 4, "ngFor", "ngForOf"], [1, "modal-button", "btn", 3, "click"], [1, "fas", "fa-question-circle"], [1, "kshare-title"], [1, "entry-containers"], [1, "register-container"], [1, "main", 3, "formGroup"], [1, "user-input"], [1, "input-parent"], ["type", "text", "placeholder", "Username", "type", "text", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "formControlName", "username", 3, "keydown"], [4, "ngIf"], [1, "fas", "fa-check-circle", "check", "username-check", 3, "ngClass"], ["placeholder", "Password", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "formControlName", "password", 3, "type", "keydown"], [1, "fas", "fa-check-circle", "check", 3, "ngClass"], [1, "fas", "fa-eye", "eye", 3, "click"], [1, "fas", "fa-eye-slash", "eye", 3, "click"], ["placeholder", "Confirm Password", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "formControlName", "confirmPassword", 3, "type"], [1, "actions"], ["type", "submit", 1, "btn", 3, "ngClass", "click"], [1, "btn", 3, "click"], [1, "sidebar"], [1, "login-container"], ["type", "text", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "placeholder", "Username", "formControlName", "loginUsername", 3, "keydown"], ["placeholder", "Password", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "formControlName", "loginPassword", 3, "type", "keydown"], [1, "registration-response", 3, "ngClass"], [1, "modal", 3, "ngClass", "click"], [1, "modal-body"], [3, "click"], [1, "fas", "fa-mobile-alt", "login-design", "login-design-mobile"], [1, "fas", "fa-desktop", "login-design", "login-design-desktop"], [1, "stars-span"], ["src", "assets/star.svg", "alt", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Application Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_8_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "kshared");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Share files between devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "Form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_22_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_small_24_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_small_26_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_29_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginComponent_small_30_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_small_31_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_33_listener() { return ctx.toggleEyePassword(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_34_listener() { return ctx.toggleEyePassword(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginComponent_small_38_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_40_listener() { return ctx.toggleEyePassword(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_41_listener() { return ctx.toggleEyePassword(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_43_listener() { return ctx.onRegisterClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_46_listener() { return ctx.onCancelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "Form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_81_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, LoginComponent_small_82_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, LoginComponent_small_83_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, LoginComponent_small_85_Template, 2, 1, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_88_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, LoginComponent_small_89_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, LoginComponent_small_90_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, LoginComponent_small_92_Template, 2, 1, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_93_listener() { return ctx.toggleEyePassword(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_94_listener() { return ctx.toggleEyePassword(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_96_listener() { return ctx.onLoginClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_99_listener() { return ctx.onSignUpClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Your account has been registered! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_104_listener($event) { return ctx.onModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_106_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isRegister ? "show-register" : "show-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").hasError("symbolError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.get("username").hasError("shortError") || ctx.registerForm.get("username").hasError("symbolError") || ctx.serverResponse.status === 204 ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverResponse.status === 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePassword[0] ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("spaceError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.get("password").hasError("spaceError") || ctx.registerForm.get("password").hasError("shortError") ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidePassword[0] ? "none" : "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidePassword[0] ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePassword[1] ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confirmPassword").value.length > 0 && ctx.registerForm.get("password").value !== ctx.registerForm.get("confirmPassword").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.get("confirmPassword").value.length === 0 || ctx.registerForm.get("password").value !== ctx.registerForm.get("confirmPassword").value ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidePassword[1] ? "none" : "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidePassword[1] ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.invalid || ctx.registerForm.get("password").value !== ctx.registerForm.get("confirmPassword").value ? "disable-btn" : "enable-btn pop-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("loginUsername").hasError("symbolError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("loginUsername").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.get("loginUsername").hasError("shortError") || ctx.loginForm.get("loginUsername").hasError("symbolError") || ctx.serverResponse.status === 205 ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverResponse.status === 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePassword[2] ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("loginPassword").hasError("spaceError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("loginPassword").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.get("loginPassword").hasError("spaceError") || ctx.loginForm.get("loginPassword").hasError("shortError") || ctx.serverResponse.status === 206 ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverResponse.status === 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidePassword[2] ? "none" : "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidePassword[2] ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.invalid ? "disable-btn" : "enable-btn pop-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showRegisteredMessage ? "show-response" : "hide-response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.shouldShowModal ? "show-modal" : "hide-modal");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.login-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 275%;\n}\n.login-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10vh;\n  padding-right: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #72767d;\n  letter-spacing: 1px;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 50%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  align-items: center;\n  justify-items: center;\n  align-self: center;\n  position: relative;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n  filter: grayscale(100%);\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%]   img.light-star[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n}\n.login-header[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n}\n.login-header[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(1turn);\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  letter-spacing: 2px;\n  color: white;\n  text-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::first-letter {\n  color: rosybrown;\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #72767d;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n}\n.entry-containers[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  transform-style: preserve-3d;\n  perspective: 500px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 60vh;\n  background-color: rgba(54, 57, 63, 0.07);\n  transition: 0.7s transform;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  position: relative;\n  transform-style: preserve-3d;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 14%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  text-shadow: 0 0 30px black;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 86%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 50%;\n  position: relative;\n  border-radius: 5px 5px 5px 5px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  border-radius: 5px 5px 5px 5px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);\n  background-color: initial !important;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #abe8ab;\n  transition: 0.3s right, 0.3s opacity;\n  font-size: 1.1rem;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.invalid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.invalid-check[_ngcontent-%COMP%] {\n  right: 15px;\n  opacity: 0;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%] {\n  right: 15px;\n  opacity: 1;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%]    ~ .eye[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%]    ~ .eye[_ngcontent-%COMP%] {\n  right: 21%;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.invalid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.invalid-check[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.valid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.valid-check[_ngcontent-%COMP%] {\n  right: 15px !important;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  color: #abe8ab;\n  transition: 0.6s right cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n  color: #b9bbbe;\n  font-size: 1.3rem;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:hover, .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ed5269;\n  top: 115%;\n  left: 0;\n  letter-spacing: 0.8px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  letter-spacing: 0.5px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1), .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #677bc4;\n}\n.register-container[_ngcontent-%COMP%] {\n  border-radius: 0 10px 10px 0;\n  transform: translateX(-100%);\n}\n.register-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.register-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.login-container[_ngcontent-%COMP%] {\n  border-radius: 10px 0 0 10px;\n}\n.login-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.login-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.show-register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: 15px 0px 35px rgba(0, 0, 0, 0.5);\n}\n.show-register[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  box-shadow: none;\n}\n.show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n  transform: translate(175%, -50%);\n}\n.show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n  transform: translate(-18%, -50%);\n}\n.show-login[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n  box-shadow: none;\n}\n.show-login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: -15px 0px 35px rgba(0, 0, 0, 0.5);\n}\n.show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n  transform: translate(75%, -50%);\n}\n.show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n  transform: translate(-70%, -50%);\n}\n.registration-response[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #abe8ab;\n  padding: 10px 20px;\n  border-radius: 5px;\n  letter-spacing: 0.3s;\n  transition: 0.7s bottom cubic-bezier(0.175, 0.885, 0.32, 1.275), 0.5s opacity;\n}\n.show-response[_ngcontent-%COMP%] {\n  bottom: 5vh;\n  opacity: 1;\n}\n.hide-response[_ngcontent-%COMP%] {\n  bottom: -10vh;\n  opacity: 0;\n}\n.pop-btn[_ngcontent-%COMP%] {\n  animation: pop-out 2s infinite ease-in-out;\n}\n@keyframes pop-out {\n  0% {\n    transform: scale(0.98);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(0.98);\n  }\n}\n.login-design[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  z-index: -1;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 0.25s;\n  font-size: 15rem;\n  color: #68727f;\n}\n.login-design-mobile[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(75%, -50%);\n}\n.login-design-desktop[_ngcontent-%COMP%] {\n  right: 50%;\n  transform: translate(-60%, -50%);\n}\n@media all and (max-width: 1055px) {\n  .show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(115%, -50%);\n  }\n  .show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(0%, -50%);\n  }\n\n  .show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(55%, -50%);\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-30%, -50%);\n  }\n\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media all and (max-width: 825px) {\n  .login-design[_ngcontent-%COMP%] {\n    font-size: 12rem;\n  }\n\n  .kshare-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem !important;\n  }\n  .kshare-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n@media all and (max-width: 750px) {\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) !important;\n    transition: 0.7s left, 0.5s opacity;\n    border-radius: 10px !important;\n    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.5) !important;\n  }\n\n  .show-register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    left: 50%;\n    opacity: 1;\n  }\n  .show-register[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    left: 150%;\n    box-shadow: none;\n    opacity: 0;\n  }\n  .show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(110%, -50%);\n  }\n  .show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-40%, -50%);\n  }\n\n  .show-login[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    left: -100%;\n    box-shadow: none;\n    opacity: 0;\n  }\n  .show-login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    left: 50%;\n    opacity: 1;\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(110%, -50%);\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-40%, -50%);\n  }\n}\n@media all and (max-width: 665px) {\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .stars-header[_ngcontent-%COMP%] {\n    width: 30% !important;\n  }\n}\n@media all and (max-width: 500px) {\n  .login-body[_ngcontent-%COMP%] {\n    background-size: 400%;\n  }\n\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .stars-header[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n  .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: center;\n  }\n  .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .kshare-title[_ngcontent-%COMP%] {\n    top: 125% !important;\n  }\n  .kshare-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n\n  .valid-check[_ngcontent-%COMP%] {\n    right: 15px;\n    opacity: 1;\n  }\n  .valid-check[_ngcontent-%COMP%]    ~ .eye[_ngcontent-%COMP%] {\n    right: 26% !important;\n  }\n\n  .show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%], .show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(90%, -50%);\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%], .show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-25%, -50%);\n  }\n\n  .registration-response[_ngcontent-%COMP%] {\n    width: 70%;\n    padding: 10px 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQXNCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNwQkY7QURzQkU7RUFDRSwyQ0FBQTtBQ3BCSjtBRHVCRTtFQUNFLFFBQUE7QUNyQko7QUR3QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNZYjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNvQlY7QUQyQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtBQ3hCRjtBRDBCRTtFQUNFLGNBaERRO0FDd0JaO0FENEJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3pCRjtBRDRCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF6RWtCO0VBMEVsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDekJGO0FEMkJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUN6Qko7QUQyQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUN6Qk47QUQ2QkU7RUFDRSx1QkFBQTtBQzNCSjtBRCtCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQzVCRjtBRGdDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBdEdBLGFB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Q0EsZUFBQTtJQUNBLGtCQUFBO0VBbUlGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGFpbmVycztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOm5vdChpKSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbn1cbiogOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuKjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICM4MTY3YTk7XG4gIGJhY2tncm91bmQ6ICMzNjM5M2Y7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjMxMzY7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNkY2RkZGU7XG59XG5cbi5kaXNhYmxlLWljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XG59XG5cbi5idG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XG59XG4uYnRuIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuLmJ0biBoNCBpIHtcbiAgbWFyZ2luOiAwIDNweDtcbiAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5idG46YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5kaXNhYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5lbmFibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5tb2RhbCAubW9kYWwtYm9keSB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM5M2Y7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG4ubG9naW4tYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI3NSU7XG59XG5cbi5sb2dpbi1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIgLnN0YXJzLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNSU7XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIgLnN0YXJzLXRleHQgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmxvZ2luLWhlYWRlciAuc3RhcnMtaGVhZGVyIC5zdGFycy1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luLWhlYWRlciAuc3RhcnMtaGVhZGVyIC5zdGFycy1jb250YWluZXIgLnN0YXJzLXNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciAuc3RhcnMtY29udGFpbmVyIC5zdGFycy1zcGFuIGltZyB7XG4gIG1heC13aWR0aDogNjAlO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciAuc3RhcnMtY29udGFpbmVyIC5zdGFycy1zcGFuIGltZy5saWdodC1zdGFyIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufVxuLmxvZ2luLWhlYWRlciAubW9kYWwtYnV0dG9uIHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG59XG4ubG9naW4taGVhZGVyIC5tb2RhbC1idXR0b246aG92ZXIgaSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbn1cbi5sb2dpbi1oZWFkZXIgLmtzaGFyZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1oZWFkZXIgLmtzaGFyZS10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5sb2dpbi1oZWFkZXIgLmtzaGFyZS10aXRsZSBoMjo6Zmlyc3QtbGV0dGVyIHtcbiAgY29sb3I6IHJvc3licm93bjtcbn1cbi5sb2dpbi1oZWFkZXIgLmtzaGFyZS10aXRsZSBwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjNzI3NjdkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudHJ5LWNvbnRhaW5lcnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwZXJzcGVjdGl2ZTogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJlZ2lzdGVyLWNvbnRhaW5lcixcbi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDU3LCA2MywgMC4wNyk7XG4gIHRyYW5zaXRpb246IDAuN3MgdHJhbnNmb3JtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLnNpZGViYXIsXG4ubG9naW4tY29udGFpbmVyIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDE0JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtc2hhZG93OiAwIDAgMzBweCBibGFjaztcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4sXG4ubG9naW4tY29udGFpbmVyIC5tYWluIHtcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCBpbnB1dCxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2ssXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmNoZWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogI2FiZThhYjtcbiAgdHJhbnNpdGlvbjogMC4zcyByaWdodCwgMC4zcyBvcGFjaXR5O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2suaW52YWxpZC1jaGVjayxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2suaW52YWxpZC1jaGVjayB7XG4gIHJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC5jaGVjay52YWxpZC1jaGVjayxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2sudmFsaWQtY2hlY2sge1xuICByaWdodDogMTVweDtcbiAgb3BhY2l0eTogMTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2sudmFsaWQtY2hlY2sgfiAuZXllLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC5jaGVjay52YWxpZC1jaGVjayB+IC5leWUge1xuICByaWdodDogMjElO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC51c2VybmFtZS1jaGVjay5pbnZhbGlkLWNoZWNrLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC51c2VybmFtZS1jaGVjay5pbnZhbGlkLWNoZWNrIHtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAudXNlcm5hbWUtY2hlY2sudmFsaWQtY2hlY2ssXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLnVzZXJuYW1lLWNoZWNrLnZhbGlkLWNoZWNrIHtcbiAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuZXllLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogI2FiZThhYjtcbiAgdHJhbnNpdGlvbjogMC42cyByaWdodCBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC5leWU6aG92ZXIsXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmV5ZTpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IHNtYWxsLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IHNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2VkNTI2OTtcbiAgdG9wOiAxMTUlO1xuICBsZWZ0OiAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5idG4sXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5idG4ge1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmJ0biBoNCxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmJ0biBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5idG46bnRoLWNoaWxkKDEpLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuYnRuOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzdiYzQ7XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAudXNlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG59XG4ubG9naW4tY29udGFpbmVyIC51c2VyLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmFjdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uc2hvdy1yZWdpc3RlciAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBib3gtc2hhZG93OiAxNXB4IDBweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zaG93LXJlZ2lzdGVyIC5sb2dpbi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2hvdy1yZWdpc3RlciAubG9naW4tZGVzaWduLW1vYmlsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE3NSUsIC01MCUpO1xufVxuLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1kZXNrdG9wIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE4JSwgLTUwJSk7XG59XG5cbi5zaG93LWxvZ2luIC5yZWdpc3Rlci1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNob3ctbG9naW4gLmxvZ2luLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgYm94LXNoYWRvdzogLTE1cHggMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NSUsIC01MCUpO1xufVxuLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1kZXNrdG9wIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgLTUwJSk7XG59XG5cbi5yZWdpc3RyYXRpb24tcmVzcG9uc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJlOGFiO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuN3MgYm90dG9tIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSwgMC41cyBvcGFjaXR5O1xufVxuXG4uc2hvdy1yZXNwb25zZSB7XG4gIGJvdHRvbTogNXZoO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGlkZS1yZXNwb25zZSB7XG4gIGJvdHRvbTogLTEwdmg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5wb3AtYnRuIHtcbiAgYW5pbWF0aW9uOiBwb3Atb3V0IDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcC1vdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufVxuLmxvZ2luLWRlc2lnbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IC0xO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcbiAgZm9udC1zaXplOiAxNXJlbTtcbiAgY29sb3I6ICM2ODcyN2Y7XG59XG5cbi5sb2dpbi1kZXNpZ24tbW9iaWxlIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NSUsIC01MCUpO1xufVxuXG4ubG9naW4tZGVzaWduLWRlc2t0b3Age1xuICByaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLCAtNTAlKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTA1NXB4KSB7XG4gIC5zaG93LXJlZ2lzdGVyIC5sb2dpbi1kZXNpZ24tbW9iaWxlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTUlLCAtNTAlKTtcbiAgfVxuICAuc2hvdy1yZWdpc3RlciAubG9naW4tZGVzaWduLWRlc2t0b3Age1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxuXG4gIC5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tbW9iaWxlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1NSUsIC01MCUpO1xuICB9XG4gIC5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgLTUwJSk7XG4gIH1cblxuICAucmVnaXN0ZXItY29udGFpbmVyLFxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLmxvZ2luLWRlc2lnbiB7XG4gICAgZm9udC1zaXplOiAxMnJlbTtcbiAgfVxuXG4gIC5rc2hhcmUtdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5rc2hhcmUtdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGxlZnQsIDAuNXMgb3BhY2l0eTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNob3ctcmVnaXN0ZXIgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgbGVmdDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMTUwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIC01MCUpO1xuICB9XG4gIC5zaG93LXJlZ2lzdGVyIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTUwJSk7XG4gIH1cblxuICAuc2hvdy1sb2dpbiAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIC01MCUpO1xuICB9XG4gIC5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTUwJSk7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY2NXB4KSB7XG4gIC5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnN0YXJzLWhlYWRlciB7XG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubG9naW4tYm9keSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWNvbnRhaW5lcixcbi5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuc3RhcnMtaGVhZGVyIHtcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN0YXJzLWhlYWRlciAuc3RhcnMtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc3RhcnMtaGVhZGVyIC5zdGFycy10ZXh0IGg0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAua3NoYXJlLXRpdGxlIHtcbiAgICB0b3A6IDEyNSUgIWltcG9ydGFudDtcbiAgfVxuICAua3NoYXJlLXRpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnZhbGlkLWNoZWNrIHtcbiAgICByaWdodDogMTVweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC52YWxpZC1jaGVjayB+IC5leWUge1xuICAgIHJpZ2h0OiAyNiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tbW9iaWxlLFxuLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkwJSwgLTUwJSk7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1kZXNrdG9wLFxuLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1kZXNrdG9wIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtNTAlKTtcbiAgfVxuXG4gIC5yZWdpc3RyYXRpb24tcmVzcG9uc2Uge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "Xfvc":
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const STORAGE_KEY = 'kshared-user';
class LocalStorageService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    saveToken() {
        const token = this.userService.getToken();
        localStorage.setItem(STORAGE_KEY, token);
    }
    getToken() {
        return localStorage.getItem(STORAGE_KEY);
    }
    clearToken() {
        localStorage.removeItem(STORAGE_KEY);
        this.router.navigateByUrl('/login');
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "XgEU":
/*!**************************************!*\
  !*** ./src/app/classes/validator.ts ***!
  \**************************************/
/*! exports provided: validateUsername, validatePassword, validateEmail, validateTextarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUsername", function() { return validateUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTextarea", function() { return validateTextarea; });
const MIN_LENGTH = 5;
// no symbol, space, min length = 5
const validateUsername = (control) => {
    if (/[~`!#$%\^&@*+=\-\[\]\\';,._/{}()|\\":<>\?]/g.test(control.value) ||
        control.value.includes(' ')) {
        return { symbolError: true };
    }
    if (control.value.length >= 0 && control.value.length < MIN_LENGTH) {
        return { shortError: true };
    }
    return null;
};
// no space and min length = 5
const validatePassword = (control) => {
    if (control.value.includes(' ')) {
        return { spaceError: true };
    }
    if (control.value.length >= 0 && control.value.length < MIN_LENGTH) {
        return { shortError: true };
    }
    return null;
};
const validateEmail = (control) => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value)) {
        return { emailError: true };
    }
    return null;
};
const validateTextarea = (control) => {
    if (!/\S/.test(control.value)) {
        return { textareaError: true };
    }
    return null;
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/login.service */ "TAW8");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_files_container_files_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/files-container/files-container.component */ "jy3j");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/navbar/navbar.component */ "M8l/");
/* harmony import */ var _components_home_notes_container_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/notes-container/note-list-container/note-list-container.component */ "wVm/");
/* harmony import */ var _components_home_notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/notes-container/notes-container.component */ "MecD");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/stars/stars.component */ "uAVx");
/* harmony import */ var _custom_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom-pipe/safe-url.pipe */ "yRhO");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], useClass: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_home_notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_11__["NotesContainerComponent"],
        _components_home_files_container_files_container_component__WEBPACK_IMPORTED_MODULE_7__["FilesContainerComponent"],
        _components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _components_home_notes_container_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_10__["NoteListContainerComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _custom_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"],
        _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_13__["StarsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_home_notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_11__["NotesContainerComponent"],
                    _components_home_files_container_files_container_component__WEBPACK_IMPORTED_MODULE_7__["FilesContainerComponent"],
                    _components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _components_home_notes_container_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_10__["NoteListContainerComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _custom_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"],
                    _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_13__["StarsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [{ provide: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], useClass: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "iIo4":
/*!*******************************************************!*\
  !*** ./src/app/services/web-socket/socket.service.ts ***!
  \*******************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_declarations_server_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/declarations/server-params */ "r1/V");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "Xfvc");






class SocketService {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.initialiseSocket();
    }
    initialiseSocket() {
        const token = this.localStorage.getToken();
        const query = token ? token : '';
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(src_app_declarations_server_params__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"], { query: `token=${query}` });
    }
    listen(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.socket.on(event, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(event, data) {
        this.socket.emit(event, data);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "jy3j":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/files-container/files-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: FilesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesContainerComponent", function() { return FilesContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_files_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/files/files.service */ "p/XJ");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["fileContainer"];
function FilesContainerComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function FilesContainerComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOCKED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deleteFile(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleLock(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_2_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.toggleLock(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_2_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const file_r8 = ctx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.downloadFile(file_r8, _r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", file_r8.isLocked ? "locked-ui" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", file_r8.isLocked ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !file_r8.isLocked ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.fileService.formatBytes(file_r8.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("download", file_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", file_r8.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r8.name);
} }
function FilesContainerComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilesContainerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilesContainerComponent_div_7_div_2_Template, 13, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilesContainerComponent_div_7_div_3_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.spinners);
} }
function FilesContainerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No files added yet \uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(Max 350mb per file)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FilesContainerComponent {
    constructor(fileService, userService, socketService) {
        this.fileService = fileService;
        this.userService = userService;
        this.socketService = socketService;
        this.spinners = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.shouldStayFixed = false;
        this.subscribeToFile();
        this.subscribeToSpinner();
        this.subscribeToSocket();
        this.subscribeToUser();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    onFileInput(newFiles) {
        this.shouldStayFixed = false;
        this.fileService.postFiles(newFiles);
    }
    deleteFile(index) {
        this.shouldStayFixed = true;
        this.fileService.deleteFile(index);
    }
    clearFiles() {
        this.shouldStayFixed = false;
        this.fileService.clearFiles();
    }
    toggleLock(index) {
        this.shouldStayFixed = true;
        this.fileService.toggleLock(index);
    }
    downloadFile(file, anchorTag) {
        // [href]="file.base64 | safeUrl"
        anchorTag.href = file.amazonUrl;
        setTimeout(() => {
            anchorTag.href = '';
        }, 1);
    }
    subscribeToFile() {
        this.subscriptions.push(this.fileService.getFilesObservable().subscribe((newFiles) => {
            this.files = newFiles;
            if (this.fileContainer && !this.shouldStayFixed) {
                this.fileContainer.nativeElement.scrollLeft = this.fileContainer.nativeElement.scrollWidth;
            }
        }));
    }
    subscribeToSpinner() {
        this.subscriptions.push(this.fileService.getSpinnerObservable().subscribe((newSpinners) => {
            this.spinners = newSpinners;
        }));
    }
    subscribeToSocket() {
        this.subscriptions.push(this.socketService.listen('uploadedFile').subscribe((file) => {
            this.fileService.addCustomFiles(file);
        }));
        // toggling file lock
        this.subscriptions.push(this.socketService.listen('toggledLock').subscribe((file) => {
            this.fileService.updateLockFile(file);
        }));
        // delete single file
        this.subscriptions.push(this.socketService.listen('deleteSingleFile').subscribe((file) => {
            this.fileService.deleteSingleFile(file);
        }));
        // when cleared all files
        this.subscriptions.push(this.socketService.listen('clearedFiles').subscribe(() => {
            this.fileService.clearUnlockedFiles();
        }));
    }
    subscribeToUser() {
        this.subscriptions.push(this.userService.getUserObservable().subscribe((newUser) => {
            if (newUser) {
                this.shouldStayFixed = false;
                this.fileService.setFiles(newUser.user.files);
            }
        }));
    }
}
FilesContainerComponent.ɵfac = function FilesContainerComponent_Factory(t) { return new (t || FilesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_files_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"])); };
FilesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilesContainerComponent, selectors: [["app-files-container"]], viewQuery: function FilesContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileContainer = _t.first);
    } }, decls: 10, vars: 4, consts: [[1, "files-body"], [1, "controls"], [1, "fas", "fa-plus-square", "icon", 3, "click"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "fas", "fa-trash", 3, "ngClass", "click"], ["class", "fas fa-arrow-circle-up icon arrow-up", 4, "ngIf"], ["class", "files-container", 4, "ngIf", "ngIfElse"], ["showEmptyFile", ""], [1, "fas", "fa-arrow-circle-up", "icon", "arrow-up"], [1, "files-container"], ["fileContainer", ""], ["class", "file-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "file-item loading-item", 4, "ngFor", "ngForOf"], [1, "file-item", 3, "ngClass"], [1, "locked-text"], [1, "fas", "fa-times-circle", "icon", "delete-file-icon", 3, "click"], [1, "fas", "fa-lock", "icon", "lock-icon", "is-lock", 3, "click"], [1, "fas", "fa-lock-open", "icon", "lock-icon", 3, "click"], [1, "file-size"], [1, "img-container", 3, "download", "innerHtml", "click"], ["downloadTag", ""], [1, "details-container"], [1, "file-item", "loading-item"], ["src", "assets/loading_gif.gif", "alt", ""], [1, "empty-container"]], template: function FilesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilesContainerComponent_Template_input_change_3_listener($event) { return ctx.onFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_Template_i_click_5_listener() { return ctx.clearFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilesContainerComponent_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilesContainerComponent_div_7_Template, 4, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilesContainerComponent_ng_template_8_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.files.length > 0 ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length > 0)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n* ::-webkit-scrollbar {\n  width: 0;\n}\n*::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon:hover {\n  color: #dcddde;\n}\n.disable-icon {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn h4 {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn h4 i {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn:active {\n  filter: brightness(1.2);\n}\n.disable-btn {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal .modal-body {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal .modal-body {\n  transform: scale(1);\n}\n.modal.hide-modal {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal .modal-body {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body {\n    position: fixed;\n  }\n}\n:host {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n.files-body {\n  width: 97%;\n  height: 90%;\n  background-color: #36393f;\n  border-radius: 10px;\n  position: relative;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .controls {\n  height: 6vh;\n  position: absolute;\n  top: -3vh;\n  right: 20px;\n  border-radius: 5px;\n  border: 1px solid #32353b;\n  background-color: #40444b;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 5;\n}\n.files-body .controls i {\n  font-size: 18px;\n  margin: 0 10px;\n}\n.files-body .controls .arrow-up {\n  position: absolute;\n  left: 20px;\n  margin: 0;\n  animation: move-up-arrow 2s ease-out infinite;\n  color: #72767d;\n  pointer-events: none;\n}\n.files-body .files-container {\n  width: calc(100% - 26px);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n}\n.files-body .files-container::-webkit-scrollbar {\n  height: 0;\n}\n.files-body .files-container .file-item {\n  max-width: 22vw;\n  min-width: 22vw;\n  height: 90%;\n  margin-right: 13px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0 5px;\n  cursor: pointer;\n  transition: 0.2s background-color;\n  transform-origin: top;\n  position: relative;\n  scroll-snap-align: start;\n}\n.files-body .files-container .file-item.locked-ui {\n  background-color: #3b3d44;\n}\n.files-body .files-container .file-item.locked-ui .locked-text {\n  opacity: 1;\n  top: 50%;\n}\n.files-body .files-container .file-item.loading-item {\n  background-color: #2f3136;\n}\n.files-body .files-container .file-item.loading-item img {\n  max-width: 40%;\n}\n.files-body .files-container .file-item:hover {\n  background-color: #2f3136;\n}\n.files-body .files-container .file-item:hover .delete-file-icon {\n  top: 5px;\n  right: 5px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.files-body .files-container .file-item:hover .lock-icon {\n  bottom: 8px;\n  right: 5px;\n  opacity: 0.4;\n  pointer-events: auto;\n}\n.files-body .files-container .file-item:hover .lock-icon.is-lock {\n  opacity: 1;\n}\n.files-body .files-container .file-item:hover .file-size {\n  opacity: 1;\n  top: 50%;\n}\n.files-body .files-container .file-item:hover .img-container .icon {\n  color: #dcddde;\n}\n.files-body .files-container .file-item .delete-file-icon {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  opacity: 0;\n  transition: 0.4s right, 0.4s top, 0.3s opacity;\n  pointer-events: none;\n}\n.files-body .files-container .file-item .lock-icon {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  opacity: 0;\n  transition: 0.4s right, 0.4s bottom, 0.3s opacity;\n  pointer-events: none;\n  transform: scaleX(-1);\n}\n.files-body .files-container .file-item .locked-text {\n  position: absolute;\n  top: 60%;\n  left: -1px;\n  transform: translate(0%, -50%);\n  writing-mode: vertical-lr;\n  font-weight: 900;\n  color: #63676d;\n  opacity: 0;\n  font-size: 20px;\n  transition: 0.3s opacity, 0.6s top;\n  letter-spacing: 1px;\n  cursor: auto;\n}\n.files-body .files-container .file-item .file-size {\n  position: absolute;\n  top: 40%;\n  right: -1px;\n  transform: translate(0%, -50%) rotate(180deg);\n  writing-mode: vertical-lr;\n  font-weight: 900;\n  color: #63676d;\n  opacity: 0;\n  font-size: 20px;\n  transition: 0.3s opacity, 0.6s top;\n  letter-spacing: 1px;\n  cursor: auto;\n}\n.files-body .files-container .file-item .img-container {\n  width: 80%;\n  height: 85%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .files-container .file-item .img-container .img-html {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 5px;\n  z-index: 3;\n}\n.files-body .files-container .file-item .img-container .icon {\n  font-size: 145px;\n  transition: 0.3s color;\n}\n.files-body .files-container .file-item .img-container .other-icon {\n  position: relative;\n}\n.files-body .files-container .file-item .img-container .other-icon::after {\n  content: \"?\";\n  color: #2f3136;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -35%) scale(1.2, 1.1);\n  font-size: 90px;\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n.files-body .files-container .file-item .details-container {\n  width: 80%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .files-container .file-item .details-container p {\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #b9bbbe;\n}\n.files-body .empty-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .empty-container h4 {\n  letter-spacing: 0.7px;\n  color: #72767d;\n}\n.files-body .empty-container p {\n  color: #72767d;\n  letter-spacing: 0.3px;\n}\n@keyframes move-up-arrow {\n  0% {\n    bottom: -120%;\n  }\n  50% {\n    bottom: -90%;\n  }\n  100% {\n    bottom: -120%;\n  }\n}\n@media all and (max-width: 1020px) {\n  .file-item {\n    max-width: 25vw !important;\n    min-width: 25vw !important;\n  }\n}\n@media all and (max-width: 820px) {\n  .file-item {\n    max-width: 30vw !important;\n    min-width: 30vw !important;\n  }\n  .file-item .delete-file-icon {\n    top: 5px !important;\n    right: 5px !important;\n    opacity: 1 !important;\n    pointer-events: auto !important;\n    font-size: 18px;\n  }\n  .file-item .lock-icon {\n    bottom: 8px !important;\n    right: 5px !important;\n    opacity: 0.4 !important;\n    pointer-events: auto !important;\n    font-size: 18px;\n  }\n  .file-item .lock-icon.is-lock {\n    opacity: 1 !important;\n  }\n  .file-item .file-size {\n    opacity: 1 !important;\n    top: 50% !important;\n  }\n  .file-item .img-container .icon {\n    color: #dcddde !important;\n  }\n}\n@media all and (max-width: 650px) {\n  .file-item {\n    max-width: 45vw !important;\n    min-width: 45vw !important;\n  }\n}\n@media all and (max-width: 510px) {\n  .file-item {\n    max-width: 100% !important;\n    min-width: 100% !important;\n  }\n  .file-item .delete-file-icon {\n    top: 17px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxmaWxlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUNDQSw4RkFBQTtBRHFCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNuQkY7QURxQkU7RUFDRSwyQ0FBQTtBQ25CSjtBRHNCRTtFQUNFLFFBQUE7QUNwQko7QUR1QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNhYjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNxQlY7QUQwQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtBQ3ZCRjtBRHlCRTtFQUNFLGNBaERRO0FDeUJaO0FEMkJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3hCRjtBRDJCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3hCRjtBRDJCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF6RWtCO0VBMEVsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDeEJGO0FEMEJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUN4Qko7QUQwQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUN4Qk47QUQ0QkU7RUFDRSx1QkFBQTtBQzFCSjtBRDhCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQzNCRjtBRCtCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RB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QTtFQXFJRjtFQW5JQTtJQUNFLGFBQUE7RUFxSUY7QUFDRjtBQWxJQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSwwQkFBQTtFQW9JRjtBQUNGO0FBaklBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLDBCQUFBO0VBbUlGO0VBaklFO0lBQ0UsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsK0JBQUE7SUFDQSxlQUFBO0VBbUlKO0VBaElFO0lBQ0Usc0JBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0lBQ0EsK0JBQUE7SUFDQSxlQUFBO0VBa0lKO0VBaElJO0lBQ0UscUJBQUE7RUFrSU47RUE5SEU7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VBZ0lKO0VBN0hFO0lBQ0UseUJBQUE7RUErSEo7QUFDRjtBQTNIQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSwwQkFBQTtFQTZIRjtBQUNGO0FBMUhBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLDBCQUFBO0VBNEhGO0VBMUhFO0lBQ0Usb0JBQUE7RUE0SEo7QUFDRiIsImZpbGUiOiJmaWxlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGFpbmVycztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiIGFzIHN0eWxlcztcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDclO1xyXG4gIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChyb3csIGZsZXgtZW5kLCBjZW50ZXIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZmlsZXMtYm9keSB7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdHlsZXMuJGNvbnRhaW5lcnM7XHJcbiAgYm9yZGVyLXJhZGl1czogc3R5bGVzLiRib3JkZXJSYWRpdXM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAuY29udHJvbHMge1xyXG4gICAgaGVpZ2h0OiA2dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zdmg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IHN0eWxlcy4kc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzNTNiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxuICAgIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LXVwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZS11cC1hcnJvdyAycyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICAgICAgY29sb3I6ICM3Mjc2N2Q7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpbGVzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGZsZXgtc3RhcnQpO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLWl0ZW0ge1xyXG4gICAgICBtYXgtd2lkdGg6IDIydnc7XHJcbiAgICAgIG1pbi13aWR0aDogMjJ2dztcclxuICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogc3R5bGVzLiRzbWFsbEJvcmRlclJhZGl1cztcclxuICAgICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KGNvbHVtbiwgY2VudGVyLCBzcGFjZS1ldmVubHkpO1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcblxyXG4gICAgICAmLmxvY2tlZC11aSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2Q0NDtcclxuXHJcbiAgICAgICAgLmxvY2tlZC10ZXh0IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubG9hZGluZy1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xyXG5cclxuICAgICAgICAuZGVsZXRlLWZpbGUtaWNvbiB7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9jay1pY29uIHtcclxuICAgICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cclxuICAgICAgICAgICYuaXMtbG9jayB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsZS1zaXplIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWctY29udGFpbmVyIC5pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBzdHlsZXMuJGl0ZW1Ib3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGUtZmlsZS1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyByaWdodCwgMC40cyB0b3AsIDAuM3Mgb3BhY2l0eTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvY2staWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLThweDtcclxuICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgcmlnaHQsIDAuNHMgYm90dG9tLCAwLjNzIG9wYWNpdHk7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9ja2VkLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDYwJTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICM2MzY3NmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5LCAwLjZzIHRvcDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpbGUtc2l6ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICM2MzY3NmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5LCAwLjZzIHRvcDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAgICAgICAuaW1nLWh0bWwge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHN0eWxlcy4kc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNDVweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3RoZXItaWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIj9cIjtcclxuICAgICAgICAgICAgY29sb3I6ICMyZjMxMzY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTM1JSkgc2NhbGUoMS4yLCAxLjEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGNvbG9yOiBzdHlsZXMuJGl0ZW1Ob3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgICBjb2xvcjogIzcyNzY3ZDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM3Mjc2N2Q7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZS11cC1hcnJvdyB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAtMTIwJTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJvdHRvbTogLTkwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3R0b206IC0xMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XHJcbiAgLmZpbGUtaXRlbSB7XHJcbiAgICBtYXgtd2lkdGg6IDI1dncgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjV2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAuZmlsZS1pdGVtIHtcclxuICAgIG1heC13aWR0aDogMzB2dyAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAzMHZ3ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmRlbGV0ZS1maWxlLWljb24ge1xyXG4gICAgICB0b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2NrLWljb24ge1xyXG4gICAgICBib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDAuNCAhaW1wb3J0YW50O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAmLmlzLWxvY2sge1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLXNpemUge1xyXG4gICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy1jb250YWluZXIgLmljb24ge1xyXG4gICAgICBjb2xvcjogc3R5bGVzLiRpdGVtSG92ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLmZpbGUtaXRlbSB7XHJcbiAgICBtYXgtd2lkdGg6IDQ1dncgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNDV2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAuZmlsZS1pdGVtIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmRlbGV0ZS1maWxlLWljb24ge1xyXG4gICAgICB0b3A6IDE3cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-files-container',
                templateUrl: './files-container.component.html',
                styleUrls: ['./files-container.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_services_files_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }]; }, { fileContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileContainer']
        }] }); })();


/***/ }),

/***/ "p/XJ":
/*!*************************************************!*\
  !*** ./src/app/services/files/files.service.ts ***!
  \*************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_declarations_server_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/declarations/server-params */ "r1/V");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var _web_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web-socket/socket.service */ "iIo4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







const MAX_SIZE = 350;
class FilesService {
    constructor(localStorageService, socketService, http) {
        this.localStorageService = localStorageService;
        this.socketService = socketService;
        this.http = http;
        this.files = [];
        this.spinners = [];
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.fileSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.files);
    }
    getFilesObservable() {
        return this.fileSubscription.asObservable();
    }
    getSpinnerObservable() {
        return this.spinnerSubject.asObservable();
    }
    postFiles(newFiles) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < newFiles.length; i++) {
            this.spinners.push(i);
            this.spinnerSubject.next(this.spinners);
            const mbSize = parseFloat((newFiles[i].size / (1024 * 1024)).toFixed(2));
            if (mbSize <= MAX_SIZE) {
                this.postFile(newFiles.item(i));
            }
        }
    }
    postFile(file) {
        const formData = new FormData();
        formData.append('token', this.localStorageService.getToken());
        formData.append('file', file);
        const headers = {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
        this.http
            .post(`${src_app_declarations_server_params__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]}`, formData, { headers })
            .subscribe((data) => {
            this.spinners.pop();
            this.spinnerSubject.next(this.spinners);
        });
    }
    addCustomFiles(file) {
        if (this.files.includes(file)) {
            return;
        }
        this.files.push(file);
        this.fileSubscription.next(this.files);
    }
    deleteFile(index) {
        if (!this.files[index].isLocked) {
            const data = {
                token: this.localStorageService.getToken(),
                file: this.files[index],
                index,
            };
            this.socketService.emit('deleteSingleFile', data);
            this.fileSubscription.next(this.files);
        }
    }
    clearFiles() {
        const data = {
            token: this.localStorageService.getToken(),
            files: this.files,
        };
        this.socketService.emit('clearFiles', data);
    }
    toggleLock(index) {
        this.files[index].isLocked = !this.files[index].isLocked;
        const data = {
            token: this.localStorageService.getToken(),
            file: this.files[index],
            index,
        };
        this.socketService.emit('lockFile', data);
        this.fileSubscription.next(this.files);
    }
    updateLockFile(file) {
        this.files[file.index].isLocked = file.file.isLocked;
        this.fileSubscription.next(this.files);
    }
    deleteSingleFile(file) {
        this.files.splice(file.index, 1);
        this.fileSubscription.next(this.files);
    }
    clearUnlockedFiles() {
        this.files = this.files.filter((value) => {
            return value.isLocked;
        });
        this.fileSubscription.next(this.files);
    }
    setFiles(files) {
        this.files = files;
        this.fileSubscription.next(this.files);
    }
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}
FilesService.ɵfac = function FilesService_Factory(t) { return new (t || FilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
FilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilesService, factory: FilesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _web_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "p80N":
/*!*************************************************!*\
  !*** ./src/app/services/notes/notes.service.ts ***!
  \*************************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-socket/socket.service */ "iIo4");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "CFL1");




class NotesService {
    constructor(socket, currentUser) {
        this.socket = socket;
        this.currentUser = currentUser;
        this.noteArray = [];
    }
    addNote(newText) {
        const checkIfExists = (note) => note.text === newText;
        // if exists, return to avoid duplicates
        if (this.noteArray.some(checkIfExists)) {
            return;
        }
        this.noteArray.push({
            text: newText,
            date: Date.now(),
            canShow: true,
            welcomeNote: false,
        });
        // sort by most recent first
        this.noteArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        // save to server
        this.saveNote();
    }
    deleteNote(note) {
        const index = this.noteArray.indexOf(note);
        this.noteArray.splice(index, 1);
        // save to server
        this.saveNote();
    }
    saveCurrentText(text) {
        const socketData = {
            text,
            token: this.currentUser.getToken(),
        };
        this.socket.emit('updateText', socketData);
    }
    updateCurrentNote(text) {
        const socketData = {
            text,
            token: this.currentUser.getToken(),
        };
        this.socket.emit('openNote', socketData);
    }
    saveNote() {
        if (this.currentUser) {
            const socketData = {
                token: this.currentUser.getToken(),
                notes: this.noteArray,
            };
            this.socket.emit('saveNoteList', socketData);
        }
    }
    setNotes(newNote) {
        this.noteArray = newNote;
    }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _web_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "r1/V":
/*!***********************************************!*\
  !*** ./src/app/declarations/server-params.ts ***!
  \***********************************************/
/*! exports provided: SERVER_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
const SERVER_URL = 'https://kshared.herokuapp.com/';


/***/ }),

/***/ "uAVx":
/*!*****************************************************!*\
  !*** ./src/app/components/stars/stars.component.ts ***!
  \*****************************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! canvas-confetti */ "cSmn");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function StarsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function StarsComponent_span_1_Template_img_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const index_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onHover(index_r2); })("click", function StarsComponent_span_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const index_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onStarsClicked(index_r2); })("mouseleave", function StarsComponent_span_1_Template_img_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onUnHover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StarsComponent {
    constructor(elementRef, socketService, localStorageService, userService) {
        this.elementRef = elementRef;
        this.socketService = socketService;
        this.localStorageService = localStorageService;
        this.userService = userService;
        this.stars = [1, 2, 3, 4, 5];
        this.subscriptions = [];
        this.getWindowSize();
    }
    ngOnInit() {
        this.subscribeToUser();
        this.subscribeToSocket();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    getWindowSize(event) {
        if (window.innerWidth >= 650) {
            this.confettiAngle = 55;
            this.confettiX = 0.08;
            this.confettiVelocity = 90;
        }
        else {
            this.confettiAngle = 90;
            this.confettiX = 0.5;
            this.confettiVelocity = 50;
        }
    }
    subscribeToUser() {
        this.subscriptions.push(this.userService.getUserObservable().subscribe((newUser) => {
            if (newUser) {
                setTimeout(() => {
                    this.fillStarRating(newUser.user.stars);
                }, 100);
            }
        }));
    }
    subscribeToSocket() {
        this.subscriptions.push(this.socketService.listen('updatedStars').subscribe((newStars) => {
            this.fillStarRating(newStars);
        }));
    }
    onHover(index) {
        this.svgStars.forEach((star, i) => {
            star.classList.remove('hover-star');
            if (i <= index) {
                star.classList.add('hover-star');
            }
        });
    }
    onStarsClicked(index) {
        for (let i = 0; i < this.svgStars.length; i++) {
            this.svgStars[i].classList.remove('hover-star');
            this.svgStars[i].classList.remove('selected-stars');
            if (i <= index) {
                this.svgStars[i].classList.add('selected-stars');
            }
        }
        this.emitStars(index);
        // above average
        if (index >= 3 - 1) {
            this.throwConfetti();
        }
    }
    onUnHover() {
        this.svgStars.forEach((star) => star.classList.remove('hover-star'));
    }
    fillStarRating(starRating) {
        this.svgStars.forEach((star, i) => {
            this.svgStars[i].classList.remove('selected-stars');
            if (i < starRating) {
                this.svgStars[i].classList.add('selected-stars');
            }
        });
    }
    emitStars(index) {
        const data = {
            stars: index + 1,
            token: this.localStorageService.getToken(),
        };
        this.socketService.emit('updateStars', data);
    }
    throwConfetti() {
        canvas_confetti__WEBPACK_IMPORTED_MODULE_1__["create"](undefined, { resize: true })({
            shapes: ['circle', 'circle', 'square'],
            particleCount: 200,
            startVelocity: this.confettiVelocity,
            angle: this.confettiAngle,
            spread: 55,
            ticks: 400,
            origin: {
                x: this.confettiX,
                y: 0.4,
            },
        });
    }
    get svgStars() {
        return this.elementRef.nativeElement.querySelectorAll('.star-span img');
    }
}
StarsComponent.ɵfac = function StarsComponent_Factory(t) { return new (t || StarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
StarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarsComponent, selectors: [["app-stars"]], hostBindings: function StarsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function StarsComponent_resize_HostBindingHandler($event) { return ctx.getWindowSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 1, consts: [[1, "main-star"], ["class", "star-span", 4, "ngFor", "ngForOf"], [1, "star-span"], ["src", "assets/star.svg", "alt", "", 3, "mouseover", "click", "mouseleave"]], template: function StarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarsComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.main-star[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  align-items: flex-start;\n  justify-items: center;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80%;\n  cursor: pointer;\n  filter: grayscale(100%);\n  transition: 0.2s transform ease-out, 0.3s filter;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img.hover-star[_ngcontent-%COMP%] {\n  filter: grayscale(70%);\n  transform: scale(1.15) rotate(45deg);\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img.selected-stars[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n  transform: scale(1.05) rotate(-217deg);\n}\n@media all and (max-width: 650px) {\n  .main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40%;\n  }\n}\n@media all and (max-width: 510px) {\n  .main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdGFycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQXNCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNwQkY7QURzQkU7RUFDRSwyQ0FBQTtBQ3BCSjtBRHVCRTtFQUNFLFFBQUE7QUNyQko7QUR3QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNZYjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNvQlY7QUQyQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtBQ3hCRjtBRDBCRTtFQUNFLGNBaERRO0FDd0JaO0FENEJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3pCRjtBRDRCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF6RWtCO0VBMEVsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDekJGO0FEMkJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUN6Qko7QUQyQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUN6Qk47QUQ2QkU7RUFDRSx1QkFBQTtBQzNCSjtBRCtCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQzVCRjtBRGdDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBdEdBLGFBQUE7RUFDQSxtQkFzR3FCO0VBckdyQixtQkFxRzBCO0VBcEcxQix1QkFvR2tDO0VBQ2xDLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDMUJGO0FENEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkExSFc7RUEySFgsd0NBQUE7RUFDQSx5QkE3SFM7RUE4SFQsMEJBQUE7RUFDQSxtRkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQzFCSjtBRDZCRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUMzQko7QUQ2Qkk7RUFDRSxtQkFBQTtBQzNCTjtBRCtCRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUM3Qko7QUQrQkk7RUFDRSxtQkFBQTtBQzdCTjtBRGtDQTtFQUNFO0lBQ0Usc0JBQUE7RUMvQkY7QUFDRjtBRGtDQTtFQUNFO0lBQ0Usc0JBQUE7RUNoQ0Y7QUFDRjtBRG1DQTtFQUNFO0lBQ0UsZUFBQTtFQ2pDRjtBQUNGO0FBeklBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEscUJBQUE7QUEwSUY7QUF4SUU7RURJQSxhQUFBO0VBQ0EsbUJDSjhCO0VESzlCLG1CQ0xtQztFRE1uQyx1QkNOMkM7QUE2STdDO0FBM0lJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0FBNklOO0FBM0lNO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtBQTZJUjtBQTFJTTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QUE0SVI7QUF0SUE7RUFDRTtJQUNFLGNBQUE7RUF5SUY7QUFDRjtBQXRJQTtFQUNFO0lBQ0UsY0FBQTtFQXdJRjtBQUNGIiwiZmlsZSI6InN0YXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuJG1haW5Ca2c6ICMyZjMxMzY7XHJcbiRjb250YWluZXJzOiAjMzYzOTNmO1xyXG4kYm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kc21hbGxCb3JkZXJSYWRpdXM6IDVweDtcclxuJGl0ZW1Ob3JtYWw6ICNiOWJiYmU7XHJcbiRpdGVtSG92ZXI6ICNkY2RkZGU7XHJcbiRtb2RhbEJrZzogIzE4MTkxYztcclxuJGJ0bkNvbG9yOiAjNjc3YmM0O1xyXG4kaW52YWxpZENvbG9yOiAjZWQ1MjY5O1xyXG4kdmFsaWRDb2xvcjogI2FiZThhYjtcclxuJGZhZGVUZXh0OiAjNzI3NjdkO1xyXG4kc2VsZWN0aW9uQ29sb3I6ICM4MTY3YTk7XHJcblxyXG5AbWl4aW4gZGlzcGxheUZsZXgoJGRpciwgJGFsaWduLCAkanVzdGlmeSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXI7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmOm5vdChpKSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6c2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAkc2VsZWN0aW9uQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGFpbmVycztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Ca2c7XHJcbn1cclxuXHJcbi8vIGdsb2JhbFxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaXRlbUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtaWNvbiB7XHJcbiAgY29sb3I6ICNiOWJiYmU7XHJcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmVuYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLy8gbW9kYWxcclxuLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XHJcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRhaW5lcnM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5oaWRlLW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xufVxuLm1vZGFsLnNob3ctbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLnNob3ctbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuLm1haW4tc3RhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLXN0YXIgLnN0YXItc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW4tc3RhciAuc3Rhci1zcGFuIGltZyB7XG4gIG1heC13aWR0aDogODAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICB0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybSBlYXNlLW91dCwgMC4zcyBmaWx0ZXI7XG59XG4ubWFpbi1zdGFyIC5zdGFyLXNwYW4gaW1nLmhvdmVyLXN0YXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpIHJvdGF0ZSg0NWRlZyk7XG59XG4ubWFpbi1zdGFyIC5zdGFyLXNwYW4gaW1nLnNlbGVjdGVkLXN0YXJzIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSgtMjE3ZGVnKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLm1haW4tc3RhciAuc3Rhci1zcGFuIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XG4gIC5tYWluLXN0YXIgLnN0YXItc3BhbiBpbWcge1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stars',
                templateUrl: './stars.component.html',
                styleUrls: ['./stars.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, { getWindowSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth/login.service */ "TAW8");







const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]] },
    { path: '**', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wVm/":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/home/notes-container/note-list-container/note-list-container.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NoteListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteListContainerComponent", function() { return NoteListContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notes/notes.service */ "p80N");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function NoteListContainerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteListContainerComponent_div_0_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const note_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onNoteClicked(note_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteListContainerComponent_div_0_div_7_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const note_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deleteNote(note_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", note_r4.canShow ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", note_r4.welcomeNote ? "6vh" : "10vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, note_r4.date, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r4.text);
} }
function NoteListContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NoteListContainerComponent_div_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.filterText = $event; })("ngModelChange", function NoteListContainerComponent_div_0_Template_input_ngModelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onFilterChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteListContainerComponent_div_0_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NoteListContainerComponent_div_0_div_7_Template, 9, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.filterText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.noteList);
} }
function NoteListContainerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No notes added yet \uD83E\uDD28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NoteListContainerComponent {
    constructor(noteService, socketService, userService) {
        this.noteService = noteService;
        this.socketService = socketService;
        this.userService = userService;
    }
    ngOnInit() {
        this.subscribeToSocket();
        this.subscribeToUser();
    }
    ngOnDestroy() {
        this.socketSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }
    clearFilter() {
        this.filterText = '';
        this.updateFilteredList();
    }
    onFilterChange() {
        this.updateFilteredList();
    }
    onNoteClicked(note) {
        this.noteService.updateCurrentNote(note.text);
    }
    deleteNote(note) {
        this.noteService.deleteNote(note);
    }
    updateFilteredList() {
        this.noteList.forEach((note) => {
            note.canShow = note.text.includes(this.filterText);
        });
    }
    subscribeToSocket() {
        this.socketSubscription = this.socketService
            .listen('getNotes')
            .subscribe((data) => {
            this.noteList = data;
            this.noteService.setNotes(this.noteList);
        });
    }
    subscribeToUser() {
        this.userSubscription = this.userService
            .getUserObservable()
            .subscribe((user) => {
            var _a;
            if (user) {
                this.noteList = (_a = user.user.noteList) !== null && _a !== void 0 ? _a : [];
                this.noteService.setNotes(this.noteList);
            }
        });
    }
}
NoteListContainerComponent.ɵfac = function NoteListContainerComponent_Factory(t) { return new (t || NoteListContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
NoteListContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteListContainerComponent, selectors: [["app-note-list-container"]], decls: 3, vars: 2, consts: [["class", "list-container", 4, "ngIf", "ngIfElse"], ["emptyList", ""], [1, "list-container"], [1, "filter-container"], [1, "input-container"], ["type", "text", "placeholder", "Seach for note", "spellcheck", "false", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-times-circle", "icon", 3, "click"], [1, "lists"], ["class", "list-item", 3, "display", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "list-item-p", 3, "click"], [1, "date"], [1, "list-control"], [1, "empty-list"]], template: function NoteListContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoteListContainerComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoteListContainerComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.noteList == null ? null : ctx.noteList.length) > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n[_nghost-%COMP%] {\n  width: 32%;\n}\n.list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 70%;\n  background-color: #40444b;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 83%;\n  height: 100%;\n  border-radius: 5px 0 0 5px;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 17%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n  padding: 15px 0;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  width: 92%;\n  padding: 2px 6px;\n  background-color: #2f3136;\n  border-radius: 5px;\n  text-overflow: ellipsis;\n  position: relative;\n  margin: 0 auto;\n  white-space: pre-wrap;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 10px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 100%;\n  transform: translateX(-25%);\n  z-index: -1;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  min-height: 6vh;\n  max-height: 10vh;\n  transition: 0.2s width;\n  cursor: pointer;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 2px;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  font-weight: 900;\n  color: #63676d;\n  font-size: 13px;\n  opacity: 0;\n  transition: 0.3s opacity, 0.4s left;\n  cursor: auto;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: justify;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-control[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 31px;\n  position: absolute;\n  top: 50%;\n  right: -10%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: 0.1s width, 0.4s right, 0.2s opacity;\n  opacity: 0;\n  pointer-events: none;\n  font-size: 19px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-item-p[_ngcontent-%COMP%] {\n  width: 88%;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-item-p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 1;\n  left: -6px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-control[_ngcontent-%COMP%] {\n  width: 10%;\n  right: 4px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.empty-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.7px;\n  color: #72767d;\n}\n@media all and (max-width: 780px) {\n  .date[_ngcontent-%COMP%] {\n    left: -10px !important;\n    opacity: 1 !important;\n  }\n\n  .list-control[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n    width: 7% !important;\n    right: 4px !important;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    height: 95% !important;\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub3RlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBc0JSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEdUJFO0VBQ0UsUUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGNBdkJhO0VBd0JiLG1CQWxDUztBQ1liO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTNDUTtBQ29CVjtBRDJCQTtFQUNFLGNBNUNXO0VBNkNYLGVBQUE7RUFDQSxhQUFBO0FDeEJGO0FEMEJFO0VBQ0UsY0FoRFE7QUN3Qlo7QUQ0QkE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDekJGO0FENEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQXpFa0I7RUEwRWxCLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtBQ3pCSjtBRDJCSTtFQUNFLGFBQUE7RUFDQSxnRUFBQTtBQ3pCTjtBRDZCRTtFQUNFLHVCQUFBO0FDM0JKO0FEK0JBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDNUJGO0FEK0JBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFD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Y0FBQTtBQXdJSjtBQXBJQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxxQkFBQTtFQXVJRjs7RUFySUE7SUFDRSxxQkFBQTtJQUNBLG9CQUFBO0lBQ0EscUJBQUE7RUF3SUY7O0VBdElBO0lBQ0Usc0JBQUE7SUFDQSxlQUFBO0VBeUlGO0FBQ0YiLCJmaWxlIjoibm90ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250YWluZXJzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbjpob3N0IHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5saXN0LWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGlzdC1jb250YWluZXIgLmZpbHRlci1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5maWx0ZXItY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogODMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5maWx0ZXItY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2IHtcbiAgd2lkdGg6IDE3JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NSU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW0ge1xuICB3aWR0aDogOTIlO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIC5saXN0LWl0ZW0tcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgbWF4LWhlaWdodDogMTB2aDtcbiAgdHJhbnNpdGlvbjogMC4ycyB3aWR0aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIC5saXN0LWl0ZW0tcCAuZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjNjM2NzZkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eSwgMC40cyBsZWZ0O1xuICBjdXJzb3I6IGF1dG87XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1wIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW0gLmxpc3QtY29udHJvbCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzIHdpZHRoLCAwLjRzIHJpZ2h0LCAwLjJzIG9wYWNpdHk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06aG92ZXIgLmxpc3QtaXRlbS1wIHtcbiAgd2lkdGg6IDg4JTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMgLmxpc3QtaXRlbTpob3ZlciAubGlzdC1pdGVtLXAgLmRhdGUge1xuICBvcGFjaXR5OiAxO1xuICBsZWZ0OiAtNnB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtOmhvdmVyIC5saXN0LWNvbnRyb2wge1xuICB3aWR0aDogMTAlO1xuICByaWdodDogNHB4O1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmVtcHR5LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5lbXB0eS1saXN0IGg0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xuICBjb2xvcjogIzcyNzY3ZDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLmRhdGUge1xuICAgIGxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxpc3QtY29udHJvbCB7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3JSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIGhlaWdodDogOTUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteListContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-list-container',
                templateUrl: './note-list-container.component.html',
                styleUrls: ['./note-list-container.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "yRhO":
/*!**********************************************!*\
  !*** ./src/app/custom-pipe/safe-url.pipe.ts ***!
  \**********************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafeUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value, prefix = '') {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(prefix + value);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeUrl',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
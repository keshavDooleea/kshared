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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _stars_stars_component__WEBPACK_IMPORTED_MODULE_7__["StarsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_9__["NotesContainerComponent"], _files_container_files_container_component__WEBPACK_IMPORTED_MODULE_10__["FilesContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip.show-bottom[_ngcontent-%COMP%] {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left[_ngcontent-%COMP%] {\n  left: -10%;\n}\n.tooltip.show-bottom[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.main-app[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s width;\n}\napp-navbar[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 6%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\napp-files-container[_ngcontent-%COMP%], app-notes-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #202225;\n  transition: 0.3s width;\n  border-radius: 0 10px 10px 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  overflow: hidden;\n  width: 15%;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 3%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  transition: 0.4s transform;\n}\n.sidebar-main[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 20%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n.sidebar-feedback[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 32%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.4px;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   app-stars[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px 15px;\n  background-color: #677bc4;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.sidebar-account[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 32%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.4px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #f72f4e;\n  color: white;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay[_ngcontent-%COMP%], .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay-lr[_ngcontent-%COMP%] {\n  transition: 0.8s -webkit-clip-path;\n  transition: 0.8s clip-path;\n  transition: 0.8s clip-path, 0.8s -webkit-clip-path;\n  transition-delay: 0.2s;\n  -webkit-clip-path: inset(0 0 0 0);\n          clip-path: inset(0 0 0 0);\n}\n.hide-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 0;\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n  transform: translateX(-150%);\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay[_ngcontent-%COMP%] {\n  transition: 0.15s -webkit-clip-path;\n  transition: 0.15s clip-path;\n  transition: 0.15s clip-path, 0.15s -webkit-clip-path;\n  transition-delay: 0s;\n  -webkit-clip-path: inset(0 0 0 100%);\n          clip-path: inset(0 0 0 100%);\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay-lr[_ngcontent-%COMP%] {\n  transition: 0.15s -webkit-clip-path;\n  transition: 0.15s clip-path;\n  transition: 0.15s clip-path, 0.15s -webkit-clip-path;\n  transition-delay: 0s;\n  -webkit-clip-path: inset(0 100% 0 0);\n          clip-path: inset(0 100% 0 0);\n}\n.sidebar-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 3px;\n  height: 100%;\n}\n.modal-delete-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-position: right !important;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  letter-spacing: 0.7px;\n  padding-bottom: 20px;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  transform: translateY(5px);\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 20%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  position: relative;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  transition: 0.3s transform, 0.2s opacity;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn.delete-btn[_ngcontent-%COMP%] {\n  background-color: #f72f4e;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.3s top, 0.2s opacity;\n  pointer-events: none;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon.wave-btn-icon[_ngcontent-%COMP%] {\n  animation: none;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  transform: translateY(110%);\n  opacity: 0;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon.wave-btn-icon[_ngcontent-%COMP%] {\n  animation: wave 2s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes wave {\n  0% {\n    transform: translate(-50%, -50%) rotate(20deg);\n  }\n  50% {\n    transform: translate(-50%, -50%) rotate(70deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(20deg);\n  }\n}\n.modal-delete-body[_ngcontent-%COMP%]   .bye-bottom-msg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.8px;\n}\n.modal-email-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  transform-style: preserve-3d;\n  perspective: 500px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: 10px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  color: #72767d;\n  font-weight: bolder;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  letter-spacing: 1px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 15px;\n  transform-style: preserve-3d;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-options[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(54, 57, 63, 0.07);\n  align-self: flex-start;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n  font-size: 17px;\n  border-radius: 5px;\n  align-self: flex-start;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background-color: rgba(54, 57, 63, 0.07);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65%;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  resize: none;\n  padding: 7px;\n  color: white;\n  font-size: 17px;\n  white-space: pre-wrap;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background-color: rgba(54, 57, 63, 0.07);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n  background-color: #2e3338;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   .email-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #202225;\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  color: #ed5269;\n  letter-spacing: 0.8px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 15%;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  position: relative;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .btn.send-email-btn[_ngcontent-%COMP%] {\n  background-color: #677bc4;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 55px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%] {\n  height: 70%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  letter-spacing: 0.4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%]   .email-msg[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%]   .email-close[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response.success-response[_ngcontent-%COMP%] {\n  width: 85%;\n  background-color: #43b581;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action[_ngcontent-%COMP%]   .email-response.error-response[_ngcontent-%COMP%] {\n  width: 75%;\n  background-color: #f72f4e;\n  padding: 0 8px;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-email-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-email-btn[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-email-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-spinner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-spinner[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .error-response[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-success-response[_ngcontent-%COMP%]   .success-response[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .success-response[_ngcontent-%COMP%], .modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-email-body[_ngcontent-%COMP%]   .email-action.show-error-response[_ngcontent-%COMP%]   .error-response[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media all and (max-width: 960px) {\n  .show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  .email-action[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n  .email-action[_ngcontent-%COMP%]   .email-response[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media all and (max-width: 780px) {\n  .main-app[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    justify-content: initial;\n    overflow-y: auto;\n  }\n\n  app-navbar[_ngcontent-%COMP%] {\n    height: 6vh;\n  }\n\n  app-notes-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 77vh;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: center;\n    padding-bottom: 0 !important;\n  }\n\n  app-files-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 47vh;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: center;\n  }\n}\n@media all and (max-width: 650px) {\n  .show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n    width: 0%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 35%;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 13px 22px;\n    font-size: 15px;\n  }\n}\n@media all and (max-width: 500px) {\n  .modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .modal-delete-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%] {\n    width: 80%;\n    justify-content: space-between;\n  }\n\n  .email-options[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .email-action[_ngcontent-%COMP%] {\n    width: 92% !important;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBc0JSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEdUJFO0VBQ0UsUUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGNBdkJhO0VBd0JiLG1CQWxDUztBQ1liO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTNDUTtBQ29CVjtBRDJCQTtFQUNFLGNBNUNXO0VBNkNYLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUN4QkY7QUQwQkU7RUFDRSxjQWpEUTtBQ3lCWjtBRDBCSTtFQUNFLHlDQUFBO0FDeEJOO0FEMEJNO0VBQ0Usd0NBQUE7QUN4QlI7QUQ4QkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQXZFa0I7RUF3RWxCLHdDQUFBO0VBQ0EseUJBeEVXO0VBeUVYLGNBN0VRO0VBOEVSLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzNCRjtBRDZCRTtFQUNFLFVBQUE7QUMzQko7QUQ4QkU7RUFDRSxRQUFBO0VBQ0EseUNBQUE7QUM1Qko7QURnQ0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQTdHa0I7RUE4R2xCLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VB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b3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaXRlbUhvdmVyO1xyXG5cclxuICAgIC50b29sdGlwIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcblxyXG4gICAgICAmLnNob3ctYm90dG9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2MCUpIHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTR2aDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSBzY2FsZSgwKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY29sb3I6ICRtYWluQmtnO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgJi5tb3ZlLWxlZnQge1xyXG4gICAgbGVmdDogLTEwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1ib3R0b20ge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJhMzM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5oaWRlLW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNkY2RkZGU7XG59XG4uaWNvbjpob3ZlciAudG9vbHRpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuLmljb246aG92ZXIgLnRvb2x0aXAuc2hvdy1ib3R0b20ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2MCUpIHNjYWxlKDEpO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHZoO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgc2NhbGUoMCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWJiYmU7XG4gIGNvbG9yOiAjMmYzMTM2O1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDIwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4udG9vbHRpcC5tb3ZlLWxlZnQge1xuICBsZWZ0OiAtMTAlO1xufVxuLnRvb2x0aXAuc2hvdy1ib3R0b20ge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG59XG5cbi5kaXNhYmxlLWljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XG59XG5cbi5idG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XG59XG4uYnRuIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuLmJ0biBoNCBpIHtcbiAgbWFyZ2luOiAwIDNweDtcbiAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5idG46YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5kaXNhYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5lbmFibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5tb2RhbCAubW9kYWwtYm9keSB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjJhMzM7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG4uaG9tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1hcHAge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIHdpZHRoO1xufVxuXG5hcHAtbmF2YmFyIHtcbiAgd2lkdGg6IDk3JTtcbiAgaGVpZ2h0OiA2JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5hcHAtZmlsZXMtY29udGFpbmVyLFxuYXBwLW5vdGVzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjIyNTtcbiAgdHJhbnNpdGlvbjogMC4zcyB3aWR0aDtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5zaWRlYmFyLWNsb3NlIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgdHJhbnNpdGlvbjogMC40cyB0cmFuc2Zvcm07XG59XG5cbi5zaWRlYmFyLW1haW4ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lkZWJhci1tYWluIGltZyB7XG4gIG1heC13aWR0aDogNzUlO1xufVxuXG4uc2lkZWJhci1mZWVkYmFjayB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMzIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnNpZGViYXItZmVlZGJhY2sgLnN0YXJzLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuc3RhcnMtZmVlZGJhY2sgc21hbGwge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuLnNpZGViYXItZmVlZGJhY2sgLnN0YXJzLWZlZWRiYWNrIC5zdGFycyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5zaWRlYmFyLWZlZWRiYWNrIC5zdGFycy1mZWVkYmFjayAuc3RhcnMgYXBwLXN0YXJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaWRlYmFyLWZlZWRiYWNrIC5mZWVkYmFjay1hY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGViYXItZmVlZGJhY2sgLmZlZWRiYWNrLWFjdGlvbiAuYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzdiYzQ7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuZmVlZGJhY2stYWN0aW9uIC5idG4gaDQge1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zaWRlYmFyLWFjY291bnQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDMyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zaWRlYmFyLWFjY291bnQgLmFjYy1kYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWRhdGUgc21hbGwge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWRhdGUgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uc2lkZWJhci1hY2NvdW50IC5hY2MtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlYmFyLWFjY291bnQgLmFjYy1idG4gLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MmY0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWJ0biAuYnRuIGg0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc2hvdy1uYXZiYXIgLm1haW4tYXBwIHtcbiAgd2lkdGg6IDg1JTtcbn1cbi5zaG93LW5hdmJhciAuc2lkZWJhciB7XG4gIHdpZHRoOiAxNSU7XG59XG4uc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGViYXItY2xvc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuLnNob3ctbmF2YmFyIC5zaWRlYmFyIC5zaWRlLWRlbGF5LFxuLnNob3ctbmF2YmFyIC5zaWRlYmFyIC5zaWRlLWRlbGF5LWxyIHtcbiAgdHJhbnNpdGlvbjogMC44cyBjbGlwLXBhdGg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMCk7XG59XG5cbi5oaWRlLW5hdmJhciAubWFpbi1hcHAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oaWRlLW5hdmJhciAuc2lkZWJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmhpZGUtbmF2YmFyIC5zaWRlYmFyIC5zaWRlYmFyLWNsb3NlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcbn1cbi5oaWRlLW5hdmJhciAuc2lkZWJhciAuc2lkZS1kZWxheSB7XG4gIHRyYW5zaXRpb246IDAuMTVzIGNsaXAtcGF0aDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMTAwJSk7XG59XG4uaGlkZS1uYXZiYXIgLnNpZGViYXIgLnNpZGUtZGVsYXktbHIge1xuICB0cmFuc2l0aW9uOiAwLjE1cyBjbGlwLXBhdGg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICBjbGlwLXBhdGg6IGluc2V0KDAgMTAwJSAwIDApO1xufVxuXG4uc2lkZWJhci1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWRlbGV0ZS1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBzcGFuIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IHNwYW4gcCB7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG4gaDQge1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtLCAwLjJzIG9wYWNpdHk7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG4uZGVsZXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzJmNGU7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG4gLmJ0bi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgdG9wLCAwLjJzIG9wYWNpdHk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuIC5idG4taWNvbi53YXZlLWJ0bi1pY29uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuOmhvdmVyIGg0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExMCUpO1xuICBvcGFjaXR5OiAwO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuOmhvdmVyIC5idG4taWNvbiB7XG4gIHRvcDogNTAlO1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0bjpob3ZlciAuYnRuLWljb24ud2F2ZS1idG4taWNvbiB7XG4gIGFuaW1hdGlvbjogd2F2ZSAycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5Aa2V5ZnJhbWVzIHdhdmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIwZGVnKTtcbiAgfVxufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IC5ieWUtYm90dG9tLW1zZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG5cbi5tb2RhbC1lbWFpbC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBlcnNwZWN0aXZlOiA1MDBweDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtaGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1oZWFkZXIgc3BhbiBwIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgY29sb3I6ICM3Mjc2N2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtaGVhZGVyIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSAuZW1haWwtb3B0aW9ucyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDU3LCA2MywgMC4wNyk7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSAuZW1haWwtb3B0aW9ucyBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY1JTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCA1NywgNjMsIDAuMDcpO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWJvZHkgLmVtYWlsLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjUlO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWJvZHkgLmVtYWlsLXRleHRhcmVhIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCA1NywgNjMsIDAuMDcpO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWJvZHkgLmVtYWlsLXRleHRhcmVhIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYm9keSAuZW1haWwtdGV4dGFyZWEgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzMzODtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1ib2R5IC5lbWFpbC10ZXh0YXJlYSB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI1O1xuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWJvZHkgc21hbGwge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBjb2xvcjogI2VkNTI2OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbiAuYnRuIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24gLmJ0bi5zZW5kLWVtYWlsLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzdiYzQ7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIC5zcGlubmVyIHtcbiAgd2lkdGg6IDU1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIC5lbWFpbC1yZXNwb25zZSB7XG4gIGhlaWdodDogNzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24gLmVtYWlsLXJlc3BvbnNlIC5lbWFpbC1tc2cge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbiAuZW1haWwtcmVzcG9uc2UgLmVtYWlsLWNsb3NlIHtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbiAuZW1haWwtcmVzcG9uc2Uuc3VjY2Vzcy1yZXNwb25zZSB7XG4gIHdpZHRoOiA4NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2I1ODE7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uIC5lbWFpbC1yZXNwb25zZS5lcnJvci1yZXNwb25zZSB7XG4gIHdpZHRoOiA3NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzJmNGU7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LWVtYWlsLWJ0biAuYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1lbWFpbC1idG4gLmVtYWlsLXJlc3BvbnNlLFxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LWVtYWlsLWJ0biAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctc3Bpbm5lciAuYnRuLFxuLm1vZGFsLWVtYWlsLWJvZHkgLmVtYWlsLWFjdGlvbi5zaG93LXNwaW5uZXIgLmVtYWlsLXJlc3BvbnNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1zcGlubmVyIC5zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1zdWNjZXNzLXJlc3BvbnNlIC5idG4sXG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctc3VjY2Vzcy1yZXNwb25zZSAuZXJyb3ItcmVzcG9uc2UsXG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctc3VjY2Vzcy1yZXNwb25zZSAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctc3VjY2Vzcy1yZXNwb25zZSAuc3VjY2Vzcy1yZXNwb25zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctZXJyb3ItcmVzcG9uc2UgLmJ0bixcbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1lcnJvci1yZXNwb25zZSAuc3VjY2Vzcy1yZXNwb25zZSxcbi5tb2RhbC1lbWFpbC1ib2R5IC5lbWFpbC1hY3Rpb24uc2hvdy1lcnJvci1yZXNwb25zZSAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9kYWwtZW1haWwtYm9keSAuZW1haWwtYWN0aW9uLnNob3ctZXJyb3ItcmVzcG9uc2UgLmVycm9yLXJlc3BvbnNlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLnNob3ctbmF2YmFyIC5tYWluLWFwcCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuc2hvdy1uYXZiYXIgLnNpZGViYXIge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuZW1haWwtYWN0aW9uIHtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmVtYWlsLWFjdGlvbiAuZW1haWwtcmVzcG9uc2Uge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5tYWluLWFwcCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICBhcHAtbmF2YmFyIHtcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgfVxuXG4gIGFwcC1ub3Rlcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzd2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICBhcHAtZmlsZXMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ3dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLnNob3ctbmF2YmFyIC5tYWluLWFwcCB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIC5zaG93LW5hdmJhciAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNob3ctbmF2YmFyIC5zaWRlYmFyIC5zaWRlYmFyLWNsb3NlIGkge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICAuc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGViYXItbWFpbiBpbWcge1xuICAgIG1heC13aWR0aDogMzUlO1xuICB9XG4gIC5zaG93LW5hdmJhciAuc2lkZWJhciAuc2lkZWJhci1mZWVkYmFjayAuc3RhcnMtZmVlZGJhY2sgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuc2hvdy1uYXZiYXIgLnNpZGViYXIgLmFjYy1kYXRlIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbiAgLnNob3ctbmF2YmFyIC5zaWRlYmFyIC5hY2MtZGF0ZSBoMyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIC5zaG93LW5hdmJhciAuc2lkZWJhciAuZmVlZGJhY2stYWN0aW9uIC5idG4sXG4uc2hvdy1uYXZiYXIgLnNpZGViYXIgLmFjYy1idG4gLmJ0biB7XG4gICAgcGFkZGluZzogMTNweCAyMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1vZGFsLWRlbGV0ZS1ib2R5IHNwYW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5tb2RhbC1kZWxldGUtYm9keSAubW9kYWwtYWN0aW9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5lbWFpbC1vcHRpb25zIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmVtYWlsLWFjdGlvbiB7XG4gICAgd2lkdGg6IDkyJSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufSJdfQ== */"] });
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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { showNav: "showNav" }, outputs: { showNavbarEmitter: "showNavbarEmitter" }, decls: 15, vars: 2, consts: [[1, "hamburger", 3, "ngClass", "mouseover"], [1, "navbar-item"], [1, "fas", "fa-info-circle", "icon"], [1, "tooltip", "show-bottom"], ["routerLink", "/", 1, "fas", "fa-sign-out-alt", "icon", 3, "click"], [1, "tooltip", "show-bottom", "move-left"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_12_listener() { return ctx.onLogOutClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showNav ? "hide-hamburger" : "show-hamburger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser == null ? null : ctx.currentUser.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip.show-bottom[_ngcontent-%COMP%] {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left[_ngcontent-%COMP%] {\n  left: -10%;\n}\n.tooltip.show-bottom[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.navbar-item[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\nh3[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: white;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.2rem;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #72767d;\n  margin-right: 2px;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\ni[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 20px;\n}\n.hamburger[_ngcontent-%COMP%] {\n  z-index: 2;\n  height: 3vh;\n  width: 30px;\n  align-self: flex-end;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  transition: 0.4s transform;\n}\n.hamburger.show-hamburger[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.hamburger.hide-hamburger[_ngcontent-%COMP%] {\n  transform: translateX(-70px);\n}\n.hamburger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -100%;\n  left: -100%;\n  width: 100%;\n  height: 200%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 20%;\n  background-color: #b9bbbe;\n  border-radius: 5px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  width: 80%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 55%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFzQlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkNBQUE7QUNwQko7QUR1QkU7RUFDRSxRQUFBO0FDckJKO0FEd0JFO0VBQ0UsY0F2QmE7RUF3QmIsbUJBbENTO0FDWWI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBM0NRO0FDb0JWO0FEMkJBO0VBQ0UsY0E1Q1c7RUE2Q1gsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3hCRjtBRDBCRTtFQUNFLGNBakRRO0FDeUJaO0FEMEJJO0VBQ0UseUNBQUE7QUN4Qk47QUQwQk07RUFDRSx3Q0FBQTtBQ3hCUjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBdkVrQjtFQXdFbEIsd0NBQUE7RUFDQSx5QkF4RVc7RUF5RVgsY0E3RVE7RUE4RVIsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDM0JGO0FENkJFO0VBQ0UsVUFBQTtBQzNCSjtBRDhCRTtFQUNFLFFBQUE7RUFDQSx5Q0FBQTtBQzVCSjtBRGdDQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUM3QkY7QURnQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUM3QkY7QURnQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBN0drQjtFQThHbEIsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQzdCRjtBRCtCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0FDN0JKO0FEK0JJO0VBQ0UsYUFBQTtFQUNBLGdFQUFBO0FDN0JOO0FEaUNFO0VBQ0UsdUJBQUE7QUMvQko7QURtQ0E7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNoQ0Y7QURvQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtFQTFJQSxhQUFBO0VBQ0EsbUJBMElxQjtFQXpJckIsbUJBeUkwQjtFQXhJMUIsdUJBd0lrQztFQUNsQyx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQzlCRjtBRGdDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBOUpXO0VBK0pYLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1GQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDOUJKO0FEaUNFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQy9CSjtBRGlDSTtFQUNFLG1CQUFBO0FDL0JOO0FEbUNFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ2pDSjtBRG1DSTtFQUNFLG1CQUFBO0FDakNOO0FEc0NBO0VBQ0U7SUFDRSxzQkFBQTtFQ25DRjtBQUNGO0FEc0NBO0VBQ0U7SUFDRSxzQkFBQTtFQ3BDRjtBQUNGO0FEdUNBO0VBQ0U7SUFDRSxlQUFBO0VDckNGO0FBQ0Y7QUF6S0E7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RURZQSxhQUFBO0VBQ0EsbUJDWjRCO0VEYTVCLHFCQ2JpQztFRGNqQyx5QkNkMkM7QUE4SzdDO0FBM0tBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0FBOEtGO0FBNUtFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBOEtKO0FBMUtBO0VBQ0UsaUJBQUE7QUE2S0Y7QUEzS0U7RUFDRSxrQkFBQTtBQTZLSjtBQXpLQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VEaEJBLGFBQUE7RUFDQSxzQkNnQjRCO0VEZjVCLHVCQ2VvQztFRGRwQyw4QkNjZ0Q7RUFDaEQsMEJBQUE7QUErS0Y7QUE3S0U7RUFDRSx3QkFBQTtBQStLSjtBQTVLRTtFQUNFLDRCQUFBO0FBOEtKO0FBM0tFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTZLSjtBQTFLRTtFQUNFLFdBQUE7RUFDQSx5QkRqRFM7RUNrRFQsa0JEbkRnQjtBQytOcEI7QUExS0k7RUFDRSxVQUFBO0FBNEtOO0FBektJO0VBQ0UsVUFBQTtBQTJLTjtBQXhLSTtFQUNFLFVBQUE7QUEwS04iLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuJG1haW5Ca2c6ICMyZjMxMzY7XHJcbiRjb250YWluZXJzOiAjMzYzOTNmO1xyXG4kYm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kc21hbGxCb3JkZXJSYWRpdXM6IDVweDtcclxuJGl0ZW1Ob3JtYWw6ICNiOWJiYmU7XHJcbiRpdGVtSG92ZXI6ICNkY2RkZGU7XHJcbiRtb2RhbEJrZzogIzE4MTkxYztcclxuJGJ0bkNvbG9yOiAjNjc3YmM0O1xyXG4kaW52YWxpZENvbG9yOiAjZWQ1MjY5O1xyXG4kdmFsaWRDb2xvcjogI2FiZThhYjtcclxuJGZhZGVUZXh0OiAjNzI3NjdkO1xyXG4kc2VsZWN0aW9uQ29sb3I6ICM4MTY3YTk7XHJcblxyXG5AbWl4aW4gZGlzcGxheUZsZXgoJGRpciwgJGFsaWduLCAkanVzdGlmeSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXI7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmOm5vdChpKSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6c2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAkc2VsZWN0aW9uQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGFpbmVycztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Ca2c7XHJcbn1cclxuXHJcbi8vIGdsb2JhbFxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuXHJcbiAgICAudG9vbHRpcCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG5cclxuICAgICAgJi5zaG93LWJvdHRvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNjAlKSBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC00dmg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgc2NhbGUoMCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGNvbG9yOiAkbWFpbkJrZztcclxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAyMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcblxyXG4gICYubW92ZS1sZWZ0IHtcclxuICAgIGxlZnQ6IC0xMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctYm90dG9tIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTMzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuLmljb246aG92ZXIgLnRvb2x0aXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbn1cbi5pY29uOmhvdmVyIC50b29sdGlwLnNob3ctYm90dG9tIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNjAlKSBzY2FsZSgxKTtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTR2aDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHNjYWxlKDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYmJlO1xuICBjb2xvcjogIzJmMzEzNjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAyMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnRvb2x0aXAubW92ZS1sZWZ0IHtcbiAgbGVmdDogLTEwJTtcbn1cbi50b29sdGlwLnNob3ctYm90dG9tIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTMzO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xufVxuLm1vZGFsLnNob3ctbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLnNob3ctbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuLm5hdmJhci1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuaDMge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaDMgc3BhbiB7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuaSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAzdmg7XG4gIHdpZHRoOiAzMHB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdHJhbnNpdGlvbjogMC40cyB0cmFuc2Zvcm07XG59XG4uaGFtYnVyZ2VyLnNob3ctaGFtYnVyZ2VyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmhhbWJ1cmdlci5oaWRlLWhhbWJ1cmdlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzBweCk7XG59XG4uaGFtYnVyZ2VyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwMCU7XG4gIGxlZnQ6IC0xMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuLmhhbWJ1cmdlciBzcGFuIHtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWJiYmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5oYW1idXJnZXIgc3BhbjpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogODAlO1xufVxuLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA1NSU7XG59XG4uaGFtYnVyZ2VyIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */"] });
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








function NotesContainerComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copied Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotesContainerComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Saved Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotesContainerComponent {
    constructor(noteService, socketService, userService) {
        this.noteService = noteService;
        this.socketService = socketService;
        this.userService = userService;
        this.copiedText = [];
        this.savedText = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscribeToSocket();
        this.subscribeToUser();
        this.subscribeToNoteExistance();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    saveTextarea() {
        if (!this.textareaValue) {
            return;
        }
        this.copiedText = [];
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
        this.copiedText = [];
        this.savedText = [];
        this.textareaValue = '';
        this.noteService.saveCurrentText(this.textareaValue);
    }
    copyToClipboard(noteTextarea) {
        if (!this.textareaValue) {
            return;
        }
        this.savedText = [];
        noteTextarea.select();
        document.execCommand('copy');
        noteTextarea.setSelectionRange(0, 0);
        this.copiedText.push(noteTextarea.value);
        this.hideKeyboard(noteTextarea);
    }
    hideKeyboard(noteTextarea) {
        noteTextarea.setAttribute('readonly', 'readonly');
        noteTextarea.setAttribute('disabled', 'true');
        setTimeout(() => {
            noteTextarea.blur();
            noteTextarea.removeAttribute('readonly');
            noteTextarea.removeAttribute('disabled');
        }, 100);
    }
    subscribeToSocket() {
        this.subscriptions.push(this.socketService.listen('updatedText').subscribe((data) => {
            this.textareaValue = data;
        }));
    }
    subscribeToNoteExistance() {
        this.subscriptions.push(this.noteService.getNoteExistObservable().subscribe((exists) => {
            if (!exists) {
                this.savedText.push(this.textareaValue);
            }
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
NotesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesContainerComponent, selectors: [["app-notes-container"]], decls: 11, vars: 7, consts: [[1, "notes-body"], [1, "text-container"], ["spellcheck", "false", 3, "ngModel", "placeholder", "ngModelChange", "keydown.shift.enter", "keyup"], ["noteTextarea", ""], [1, "textarea-action"], [1, "fas", "fa-heart", "save-icon", 3, "ngClass", "click"], [1, "fas", "fa-copy", "copy-icon", 3, "ngClass", "click"], [1, "fas", "fa-times-circle", "clear-icon", 3, "ngClass", "click"], ["class", "textarea-action-hint copied-text", 4, "ngFor", "ngForOf"], ["class", "textarea-action-hint saved-text", 4, "ngFor", "ngForOf"], [1, "textarea-action-hint", "copied-text"], [1, "textarea-action-hint", "saved-text"]], template: function NotesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-note-list-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotesContainerComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.textareaValue = $event; })("keydown.shift.enter", function NotesContainerComponent_Template_textarea_keydown_shift_enter_3_listener($event) { return ctx.onShiftEnter($event); })("keyup", function NotesContainerComponent_Template_textarea_keyup_3_listener() { return ctx.onKeyup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesContainerComponent_Template_i_click_6_listener() { return ctx.saveTextarea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesContainerComponent_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.copyToClipboard(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesContainerComponent_Template_i_click_8_listener() { return ctx.clearTextarea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NotesContainerComponent_span_9_Template, 3, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NotesContainerComponent_span_10_Template, 3, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "Quick note\n\nPress Shift + Enter for quick save!\nTip: Your note stays here even without saving!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textareaValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textareaValue ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textareaValue ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textareaValue ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.copiedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.savedText);
    } }, directives: [_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_4__["NoteListContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip.show-bottom[_ngcontent-%COMP%] {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left[_ngcontent-%COMP%] {\n  left: -10%;\n}\n.tooltip.show-bottom[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.notes-body[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.notes-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  width: 65%;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  background-color: #36393f;\n  border-radius: 10px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #40444b;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  padding: 7px;\n  color: white;\n  font-size: 17px;\n  white-space: pre-wrap;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n  background-color: #2e3338;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #202225;\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 20px;\n  width: 125px;\n  height: 5vh;\n  display: flex;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 21px;\n  opacity: 0;\n  transform: translateY(9vh);\n  transition: 0.35s transform, 0.2s opacity;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   i.copy-icon[_ngcontent-%COMP%] {\n  transition-delay: 0.1s;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   i.save-icon[_ngcontent-%COMP%] {\n  transition-delay: 0.2s;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   .textarea-action-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 70%;\n  height: 80%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  animation: show-hint 1.5s ease-in forwards;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   .textarea-action-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   .textarea-action-hint.copied-text[_ngcontent-%COMP%] {\n  left: 50%;\n  background-color: #677bc4;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   .textarea-action-hint.saved-text[_ngcontent-%COMP%] {\n  left: 10%;\n  background-color: rosybrown;\n}\n@keyframes show-hint {\n  0% {\n    top: -10%;\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0);\n  }\n  20% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  100% {\n    top: -160%;\n    opacity: 0;\n  }\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:hover   .textarea-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n@media all and (max-width: 780px) {\n  .notes-body[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    padding-bottom: 15px;\n  }\n  .notes-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 35vh !important;\n  }\n  .notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30vh !important;\n    overflow: visible;\n  }\n  .notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%] {\n    width: 155px;\n    height: 6vh;\n    bottom: -3vh;\n    border-radius: 5px;\n    border: 1px solid #32353b;\n    background-color: #40444b;\n    padding: 0 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    z-index: 5;\n  }\n  .notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .textarea-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    transform: translateY(0);\n    opacity: 1;\n    transition-delay: 0s !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub3Rlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFzQlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkNBQUE7QUNwQko7QUR1QkU7RUFDRSxRQUFBO0FDckJKO0FEd0JFO0VBQ0UsY0F2QmE7RUF3QmIsbUJBbENTO0FDWWI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBM0NRO0FDb0JWO0FEMkJBO0VBQ0UsY0E1Q1c7RUE2Q1gsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3hCRjtBRDBCRTtFQUNFLGNBakRRO0FDeUJaO0FEMEJJO0VBQ0UseUNBQUE7QUN4Qk47QUQwQk07RUFDRSx3Q0FBQTtBQ3hCUjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBdkVrQjtFQXdFbEIsd0NBQUE7RUFDQSx5QkF4RVc7RUF5RVgsY0E3RVE7RUE4RVIsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDM0JGO0FENkJFO0VBQ0UsVUFBQTtBQzNCSjtBRDhCRTtFQUNFLFFBQUE7RUFDQSx5Q0FBQTtBQzVCSjtBRGdDQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUM3QkY7QURnQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUM3QkY7QURnQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBN0drQjtFQThHbEIsY0FBQTtF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QSwyQkFBQTtBQThLVjtBQXpLSTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSx5Q0FBQTtFQTJLTjtFQXpLSTtJQUNFLFVBQUE7SUFDQSx5Q0FBQTtFQTJLTjtFQXpLSTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VBMktOO0FBQ0Y7QUF2S007RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUF5S1I7QUFuS0E7RUFDRTtJQUNFLFlBQUE7SUR6SEYsYUFBQTtJQUNBLHNCQ3lIOEI7SUR4SDlCLG1CQ3dIc0M7SUR2SHRDLDZCQ3VIOEM7SUFDNUMsb0JBQUE7RUF5S0Y7RUF2S0U7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RUF5S0o7RUF0S0U7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtFQXdLSjtFQXRLSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCRHRKWTtJQ3VKWix5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLHVDQUFBO0lBQ0EsVUFBQTtFQXdLTjtFQXRLTTtJQUNFLGVBQUE7SUFDQSx3QkFBQTtJQUNBLFVBQUE7SUFDQSwrQkFBQTtFQXdLUjtBQUNGIiwiZmlsZSI6Im5vdGVzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcblxyXG4gICAgLnRvb2x0aXAge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuXHJcbiAgICAgICYuc2hvdy1ib3R0b20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDYwJSkgc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNHZoO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHNjYWxlKDApO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjb2xvcjogJG1haW5Ca2c7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG5cclxuICAmLm1vdmUtbGVmdCB7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LWJvdHRvbSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtaWNvbiB7XHJcbiAgY29sb3I6ICNiOWJiYmU7XHJcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmVuYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLy8gbW9kYWxcclxuLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XHJcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmEzMztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOm5vdChpKSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbn1cbiogOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuKjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICM4MTY3YTk7XG4gIGJhY2tncm91bmQ6ICMzNjM5M2Y7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjMxMzY7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cbi5pY29uOmhvdmVyIC50b29sdGlwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG4uaWNvbjpob3ZlciAudG9vbHRpcC5zaG93LWJvdHRvbSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDYwJSkgc2NhbGUoMSk7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00dmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSBzY2FsZSgwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YmJiZTtcbiAgY29sb3I6ICMyZjMxMzY7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMjA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi50b29sdGlwLm1vdmUtbGVmdCB7XG4gIGxlZnQ6IC0xMCU7XG59XG4udG9vbHRpcC5zaG93LWJvdHRvbSB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmEzMztcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vdGVzLWJvZHkge1xuICB3aWR0aDogOTclO1xuICBoZWlnaHQ6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm5vdGVzLWJvZHkgPiAqIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM5M2Y7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzMzODtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI1O1xuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIC50ZXh0YXJlYS1hY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciAudGV4dGFyZWEtYWN0aW9uIGkge1xuICBmb250LXNpemU6IDIxcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5dmgpO1xuICB0cmFuc2l0aW9uOiAwLjM1cyB0cmFuc2Zvcm0sIDAuMnMgb3BhY2l0eTtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciAudGV4dGFyZWEtYWN0aW9uIGkuY29weS1pY29uIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciAudGV4dGFyZWEtYWN0aW9uIGkuc2F2ZS1pY29uIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciAudGV4dGFyZWEtYWN0aW9uIC50ZXh0YXJlYS1hY3Rpb24taGludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBhbmltYXRpb246IHNob3ctaGludCAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgLnRleHRhcmVhLWFjdGlvbiAudGV4dGFyZWEtYWN0aW9uLWhpbnQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciAudGV4dGFyZWEtYWN0aW9uIC50ZXh0YXJlYS1hY3Rpb24taGludC5jb3BpZWQtdGV4dCB7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3N2JjNDtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciAudGV4dGFyZWEtYWN0aW9uIC50ZXh0YXJlYS1hY3Rpb24taGludC5zYXZlZC10ZXh0IHtcbiAgbGVmdDogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XG59XG5Aa2V5ZnJhbWVzIHNob3ctaGludCB7XG4gIDAlIHtcbiAgICB0b3A6IC0xMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtMTYwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXI6aG92ZXIgLnRleHRhcmVhLWFjdGlvbiBpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAubm90ZXMtYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIC5ub3Rlcy1ib2R5ID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXZoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwdmggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICAubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgLnRleHRhcmVhLWFjdGlvbiB7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIGhlaWdodDogNnZoO1xuICAgIGJvdHRvbTogLTN2aDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyMzUzYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgei1pbmRleDogNTtcbiAgfVxuICAubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgLnRleHRhcmVhLWFjdGlvbiBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 54);
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 181, vars: 40, consts: [[1, "login-body", 3, "ngClass"], [1, "login-header"], [1, "stars-header"], [1, "stars-text"], [1, "stars-container"], ["class", "stars-span", 4, "ngFor", "ngForOf"], [1, "modal-button", "btn", 3, "click"], [1, "fas", "fa-info-circle"], [1, "kshare-title"], [1, "entry-containers"], [1, "register-container"], [1, "main", 3, "formGroup"], [1, "user-input"], [1, "input-parent"], ["type", "text", "placeholder", "Username", "type", "text", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "formControlName", "username", 3, "keydown"], [4, "ngIf"], [1, "fas", "fa-check-circle", "check", "username-check", 3, "ngClass"], ["placeholder", "Password", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "formControlName", "password", 3, "type", "keydown"], [1, "fas", "fa-check-circle", "check", 3, "ngClass"], [1, "fas", "fa-eye", "eye", 3, "click"], [1, "fas", "fa-eye-slash", "eye", 3, "click"], ["placeholder", "Confirm Password", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "formControlName", "confirmPassword", 3, "type"], [1, "actions"], ["type", "submit", 1, "btn", 3, "ngClass", "click"], [1, "btn", 3, "click"], [1, "sidebar"], [1, "login-container"], ["type", "text", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "placeholder", "Username", "formControlName", "loginUsername", 3, "keydown"], ["placeholder", "Password", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "formControlName", "loginPassword", 3, "type", "keydown"], [1, "registration-response", 3, "ngClass"], [1, "modal", 3, "ngClass", "click"], [1, "modal-body", "about-modal-body"], [1, "modal-item"], [1, "modal-title"], [1, "modal-close"], [1, "fas", "fa-window-close", "icon", 3, "click"], [1, "modal-media"], ["src", "assets/modal-home.png", "alt", ""], [1, "modal-subtitle"], ["src", "assets/modal-textarea.png", "alt", ""], [1, "modal-guide"], [1, "guide-item"], [1, "guide-icon"], [1, "fas", "fa-heart"], [1, "guide-text"], [1, "fas", "fa-copy"], [1, "fas", "fa-times-circle"], ["src", "assets/modal-files.png", "alt", ""], [1, "fas", "fa-plus-square"], [1, "fas", "fa-trash"], [1, "fas", "fa-lock"], [1, "fas", "fa-mobile-alt", "login-design", "login-design-mobile"], [1, "fas", "fa-desktop", "login-design", "login-design-desktop"], [1, "stars-span"], ["src", "assets/star.svg", "alt", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "kshared");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Share data between devices");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "What is KShared?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " KShare allows you to share or transfer files and texts straight away across devices! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "And you can see the changes live on your devices!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_115_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Texts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Need to open a link on your phone while you are on your computer? Copy & paste the link here and you got it on other devices! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " You can save your texts and view them as notes until you delete them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Even if you refresh the browser or leave the page, your text remains untouched and is saved on the text zone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " This saves your text as a note on the container to the left! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " This copies your text to the clipboard! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " This clears the textarea zone!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " No need of USB flash drive/pendrive or USB cables to transfer files from one device to another.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Just upload them on KShare and they are instantly ready to be downloaded on another device by clicking upon the file itself! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " You can lock your files so that you don't delete them by mistake! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Use this icon to upload a new file!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "This icon clears all the files which are not locked!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Use this to lock/unlock your files. If locked, you cannot delete the file!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "This icon deletes the current clicked file if the latter is not locked!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 52);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip.show-bottom[_ngcontent-%COMP%] {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left[_ngcontent-%COMP%] {\n  left: -10%;\n}\n.tooltip.show-bottom[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.login-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 275%;\n}\n.login-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10vh;\n  padding-right: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #72767d;\n  letter-spacing: 1px;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 50%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  align-items: center;\n  justify-items: center;\n  align-self: center;\n  position: relative;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n  filter: grayscale(100%);\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%]   img.light-star[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n}\n.login-header[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.login-header[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(1turn);\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  letter-spacing: 2px;\n  color: white;\n  text-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::first-letter {\n  color: rosybrown;\n}\n.login-header[_ngcontent-%COMP%]   .kshare-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #72767d;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n}\n.entry-containers[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  transform-style: preserve-3d;\n  perspective: 500px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 60vh;\n  background-color: rgba(54, 57, 63, 0.07);\n  transition: 0.7s transform;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  position: relative;\n  transform-style: preserve-3d;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 14%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  text-shadow: 0 0 30px black;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 86%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 50%;\n  position: relative;\n  border-radius: 5px 5px 5px 5px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  border-radius: 5px 5px 5px 5px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);\n  background-color: initial !important;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #abe8ab;\n  transition: 0.3s right, 0.3s opacity;\n  font-size: 1.1rem;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.invalid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.invalid-check[_ngcontent-%COMP%] {\n  right: 15px;\n  opacity: 0;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%] {\n  right: 15px;\n  opacity: 1;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%]    ~ .eye[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .check.valid-check[_ngcontent-%COMP%]    ~ .eye[_ngcontent-%COMP%] {\n  right: 21%;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.invalid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.invalid-check[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.valid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .username-check.valid-check[_ngcontent-%COMP%] {\n  right: 15px !important;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  color: #abe8ab;\n  transition: 0.6s right cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n  color: #b9bbbe;\n  font-size: 1.3rem;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:hover, .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ed5269;\n  top: 115%;\n  left: 0;\n  letter-spacing: 0.8px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  letter-spacing: 0.5px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1), .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #677bc4;\n}\n.register-container[_ngcontent-%COMP%] {\n  border-radius: 0 10px 10px 0;\n  transform: translateX(-100%);\n}\n.register-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.register-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.login-container[_ngcontent-%COMP%] {\n  border-radius: 10px 0 0 10px;\n}\n.login-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.login-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.show-register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: 15px 0px 35px rgba(0, 0, 0, 0.5);\n}\n.show-register[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  box-shadow: none;\n}\n.show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n  transform: translate(175%, -50%);\n}\n.show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n  transform: translate(-18%, -50%);\n}\n.show-login[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n  box-shadow: none;\n}\n.show-login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: -15px 0px 35px rgba(0, 0, 0, 0.5);\n}\n.show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n  transform: translate(75%, -50%);\n}\n.show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n  transform: translate(-70%, -50%);\n}\n.registration-response[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #43b581;\n  padding: 10px 20px;\n  border-radius: 5px;\n  letter-spacing: 0.3s;\n  transition: 0.7s bottom cubic-bezier(0.175, 0.885, 0.32, 1.275), 0.5s opacity;\n}\n.show-response[_ngcontent-%COMP%] {\n  bottom: 5vh;\n  opacity: 1;\n}\n.hide-response[_ngcontent-%COMP%] {\n  bottom: -10vh;\n  opacity: 0;\n}\n.pop-btn[_ngcontent-%COMP%] {\n  animation: pop-out 2s infinite ease-in-out;\n}\n@keyframes pop-out {\n  0% {\n    transform: scale(0.98);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(0.98);\n  }\n}\n.login-design[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  z-index: -1;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 0.25s;\n  font-size: 15rem;\n  color: #68727f;\n}\n.login-design-mobile[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(75%, -50%);\n}\n.login-design-desktop[_ngcontent-%COMP%] {\n  right: 50%;\n  transform: translate(-60%, -50%);\n}\n.about-modal-body[_ngcontent-%COMP%] {\n  width: 65vw !important;\n  overflow-y: auto !important;\n  padding: 8px 0 8px 8px;\n}\n.about-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n.about-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n  background-color: #2e3338;\n}\n.about-modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #202225;\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #72767d;\n  letter-spacing: 0.6px;\n  text-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: rgba(255, 255, 255, 0.8);\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]:first-child {\n  display: flex;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]:first-child   .modal-title[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-item[_ngcontent-%COMP%]:first-child   .modal-close[_ngcontent-%COMP%] {\n  width: 5%;\n  height: 100%;\n  padding: 8px 5px 0 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-media[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-guide[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 10%;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 10px;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   .guide-icon[_ngcontent-%COMP%] {\n  width: 5%;\n  color: #b9bbbe;\n}\n.about-modal-body[_ngcontent-%COMP%]   .modal-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   .guide-text[_ngcontent-%COMP%] {\n  width: 95%;\n  color: white;\n}\n@media all and (max-width: 1055px) {\n  .show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(115%, -50%);\n  }\n  .show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(0%, -50%);\n  }\n\n  .show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(55%, -50%);\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-30%, -50%);\n  }\n\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media all and (max-width: 825px) {\n  .login-design[_ngcontent-%COMP%] {\n    font-size: 12rem;\n  }\n\n  .kshare-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem !important;\n  }\n  .kshare-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n\n  .about-modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n  .about-modal-body[_ngcontent-%COMP%]   .modal-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 95% !important;\n  }\n  .about-modal-body[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n    padding: 0 2% !important;\n    font-size: 15px;\n  }\n}\n@media all and (max-width: 750px) {\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) !important;\n    transition: 0.7s left, 0.5s opacity;\n    border-radius: 10px !important;\n    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.5) !important;\n  }\n\n  .show-register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    left: 50%;\n    opacity: 1;\n  }\n  .show-register[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    left: 150%;\n    box-shadow: none;\n    opacity: 0;\n  }\n  .show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(110%, -50%);\n  }\n  .show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-40%, -50%);\n  }\n\n  .show-login[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    left: -100%;\n    box-shadow: none;\n    opacity: 0;\n  }\n  .show-login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    left: 50%;\n    opacity: 1;\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(110%, -50%);\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-40%, -50%);\n  }\n}\n@media all and (max-width: 665px) {\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .stars-header[_ngcontent-%COMP%] {\n    width: 30% !important;\n  }\n\n  .about-modal-body[_ngcontent-%COMP%] {\n    width: 95vw !important;\n  }\n  .about-modal-body[_ngcontent-%COMP%]   .modal-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 98% !important;\n  }\n  .about-modal-body[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n}\n@media all and (max-width: 500px) {\n  .login-body[_ngcontent-%COMP%] {\n    background-size: 400%;\n  }\n\n  .register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .stars-header[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n  .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: center;\n  }\n  .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .kshare-title[_ngcontent-%COMP%] {\n    top: 125% !important;\n  }\n  .kshare-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n\n  .valid-check[_ngcontent-%COMP%] {\n    right: 15px;\n    opacity: 1;\n  }\n  .valid-check[_ngcontent-%COMP%]    ~ .eye[_ngcontent-%COMP%] {\n    right: 26% !important;\n  }\n\n  .show-login[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%], .show-register[_ngcontent-%COMP%]   .login-design-mobile[_ngcontent-%COMP%] {\n    transform: translate(90%, -50%);\n  }\n  .show-login[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%], .show-register[_ngcontent-%COMP%]   .login-design-desktop[_ngcontent-%COMP%] {\n    transform: translate(-25%, -50%);\n  }\n\n  .registration-response[_ngcontent-%COMP%] {\n    width: 70%;\n    padding: 10px 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQXNCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNwQkY7QURzQkU7RUFDRSwyQ0FBQTtBQ3BCSjtBRHVCRTtFQUNFLFFBQUE7QUNyQko7QUR3QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNZYjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNvQlY7QUQyQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDeEJGO0FEMEJFO0VBQ0UsY0FqRFE7QUN5Qlo7QUQwQkk7RUFDRSx5Q0FBQTtBQ3hCTjtBRDBCTTtFQUNFLHdDQUFBO0FDeEJSO0FEOEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF2RWtCO0VBd0VsQix3Q0FBQTtFQUNBLHlCQXhFVztFQXlFWCxjQTdFUTtFQThFUiwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMzQkY7QUQ2QkU7RUFDRSxVQUFBO0FDM0JKO0FEOEJFO0VBQ0UsUUFBQTtFQUNBLHlDQUFBO0FDNUJKO0FEZ0NBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQzdCRjtBRGdDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQzdCRjtBRGdDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkE3R2tCO0VBOEdsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtF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QUNGO0FBaEpBO0VBQ0U7SUFDRSxxQkFBQTtFQWtKRjs7RUEvSUE7O0lBRUUsVUFBQTtFQWtKRjs7RUEvSUE7SUFDRSxxQkFBQTtFQWtKRjtFQWhKRTtJRGprQkYsYUFBQTtJQUNBLG1CQ2lrQmdDO0lEaGtCaEMscUJDZ2tCcUM7SUQvakJyQyx1QkMrakIrQztFQXFKL0M7RUFuSkk7SUFDRSxlQUFBO0VBcUpOOztFQWhKQTtJQUNFLG9CQUFBO0VBbUpGO0VBakpFO0lBQ0UsMEJBQUE7RUFtSko7O0VBL0lBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUFrSkY7RUFoSkU7SUFDRSxxQkFBQTtFQWtKSjs7RUE1SUU7O0lBQ0UsK0JBQUE7RUFnSko7RUE5SUU7O0lBQ0UsZ0NBQUE7RUFpSko7O0VBN0lBO0lBQ0UsVUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQWdKRjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuJG1haW5Ca2c6ICMyZjMxMzY7XHJcbiRjb250YWluZXJzOiAjMzYzOTNmO1xyXG4kYm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kc21hbGxCb3JkZXJSYWRpdXM6IDVweDtcclxuJGl0ZW1Ob3JtYWw6ICNiOWJiYmU7XHJcbiRpdGVtSG92ZXI6ICNkY2RkZGU7XHJcbiRtb2RhbEJrZzogIzE4MTkxYztcclxuJGJ0bkNvbG9yOiAjNjc3YmM0O1xyXG4kaW52YWxpZENvbG9yOiAjZWQ1MjY5O1xyXG4kdmFsaWRDb2xvcjogI2FiZThhYjtcclxuJGZhZGVUZXh0OiAjNzI3NjdkO1xyXG4kc2VsZWN0aW9uQ29sb3I6ICM4MTY3YTk7XHJcblxyXG5AbWl4aW4gZGlzcGxheUZsZXgoJGRpciwgJGFsaWduLCAkanVzdGlmeSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXI7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmOm5vdChpKSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6c2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAkc2VsZWN0aW9uQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGFpbmVycztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Ca2c7XHJcbn1cclxuXHJcbi8vIGdsb2JhbFxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuXHJcbiAgICAudG9vbHRpcCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG5cclxuICAgICAgJi5zaG93LWJvdHRvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNjAlKSBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC00dmg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgc2NhbGUoMCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGNvbG9yOiAkbWFpbkJrZztcclxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAyMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcblxyXG4gICYubW92ZS1sZWZ0IHtcclxuICAgIGxlZnQ6IC0xMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctYm90dG9tIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTMzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuLmljb246aG92ZXIgLnRvb2x0aXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbn1cbi5pY29uOmhvdmVyIC50b29sdGlwLnNob3ctYm90dG9tIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNjAlKSBzY2FsZSgxKTtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTR2aDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHNjYWxlKDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYmJlO1xuICBjb2xvcjogIzJmMzEzNjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAyMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnRvb2x0aXAubW92ZS1sZWZ0IHtcbiAgbGVmdDogLTEwJTtcbn1cbi50b29sdGlwLnNob3ctYm90dG9tIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYTMzO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xufVxuLm1vZGFsLnNob3ctbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLnNob3ctbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xufVxuLm1vZGFsLmhpZGUtbW9kYWwgLm1vZGFsLWJvZHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufVxuLmxvZ2luLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNzUlO1xufVxuXG4ubG9naW4taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luLWhlYWRlciAuc3RhcnMtaGVhZGVyIC5zdGFycy10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUlO1xufVxuLmxvZ2luLWhlYWRlciAuc3RhcnMtaGVhZGVyIC5zdGFycy10ZXh0IGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciAuc3RhcnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciAuc3RhcnMtY29udGFpbmVyIC5zdGFycy1zcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIgLnN0YXJzLWNvbnRhaW5lciAuc3RhcnMtc3BhbiBpbWcge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIgLnN0YXJzLWNvbnRhaW5lciAuc3RhcnMtc3BhbiBpbWcubGlnaHQtc3RhciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcbn1cbi5sb2dpbi1oZWFkZXIgLm1vZGFsLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmxvZ2luLWhlYWRlciAubW9kYWwtYnV0dG9uOmhvdmVyIGkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XG59XG4ubG9naW4taGVhZGVyIC5rc2hhcmUtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4taGVhZGVyIC5rc2hhcmUtdGl0bGUgaDIge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubG9naW4taGVhZGVyIC5rc2hhcmUtdGl0bGUgaDI6OmZpcnN0LWxldHRlciB7XG4gIGNvbG9yOiByb3N5YnJvd247XG59XG4ubG9naW4taGVhZGVyIC5rc2hhcmUtdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbnRyeS1jb250YWluZXJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiA2MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCA1NywgNjMsIDAuMDcpO1xuICB0cmFuc2l0aW9uOiAwLjdzIHRyYW5zZm9ybTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5zaWRlYmFyLFxuLmxvZ2luLWNvbnRhaW5lciAuc2lkZWJhciB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggYmxhY2s7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiB7XG4gIHdpZHRoOiA4NiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQsXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgaW5wdXQsXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmNoZWNrLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC5jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICNhYmU4YWI7XG4gIHRyYW5zaXRpb246IDAuM3MgcmlnaHQsIDAuM3Mgb3BhY2l0eTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmNoZWNrLmludmFsaWQtY2hlY2ssXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmNoZWNrLmludmFsaWQtY2hlY2sge1xuICByaWdodDogMTVweDtcbiAgb3BhY2l0eTogMDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2sudmFsaWQtY2hlY2ssXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmNoZWNrLnZhbGlkLWNoZWNrIHtcbiAgcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDE7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmNoZWNrLnZhbGlkLWNoZWNrIH4gLmV5ZSxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuY2hlY2sudmFsaWQtY2hlY2sgfiAuZXllIHtcbiAgcmlnaHQ6IDIxJTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAudXNlcm5hbWUtY2hlY2suaW52YWxpZC1jaGVjayxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAudXNlcm5hbWUtY2hlY2suaW52YWxpZC1jaGVjayB7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLnVzZXJuYW1lLWNoZWNrLnZhbGlkLWNoZWNrLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC51c2VybmFtZS1jaGVjay52YWxpZC1jaGVjayB7XG4gIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgLmV5ZSxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICNhYmU4YWI7XG4gIHRyYW5zaXRpb246IDAuNnMgcmlnaHQgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCAuZXllOmhvdmVyLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IC5leWU6aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCBzbWFsbCxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCBzbWFsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNlZDUyNjk7XG4gIHRvcDogMTE1JTtcbiAgbGVmdDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuYnRuLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuYnRuIHtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5idG4gaDQsXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5idG4gaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuYnRuOm50aC1jaGlsZCgxKSxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmJ0bjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3YmM0O1xufVxuXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLnVzZXItaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuYWN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xufVxuLmxvZ2luLWNvbnRhaW5lciAudXNlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ubG9naW4tY29udGFpbmVyIC5hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnNob3ctcmVnaXN0ZXIgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgYm94LXNoYWRvdzogMTVweCAwcHggMzVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2hvdy1yZWdpc3RlciAubG9naW4tY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNzUlLCAtNTAlKTtcbn1cbi5zaG93LXJlZ2lzdGVyIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOCUsIC01MCUpO1xufVxuXG4uc2hvdy1sb2dpbiAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaG93LWxvZ2luIC5sb2dpbi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIGJveC1zaGFkb3c6IC0xNXB4IDBweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tbW9iaWxlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNTAlKTtcbn1cbi5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIC01MCUpO1xufVxuXG4ucmVnaXN0cmF0aW9uLXJlc3BvbnNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYjU4MTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjdzIGJvdHRvbSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSksIDAuNXMgb3BhY2l0eTtcbn1cblxuLnNob3ctcmVzcG9uc2Uge1xuICBib3R0b206IDV2aDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhpZGUtcmVzcG9uc2Uge1xuICBib3R0b206IC0xMHZoO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucG9wLWJ0biB7XG4gIGFuaW1hdGlvbjogcG9wLW91dCAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBwb3Atb3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbn1cbi5sb2dpbi1kZXNpZ24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAtMTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XG4gIGZvbnQtc2l6ZTogMTVyZW07XG4gIGNvbG9yOiAjNjg3MjdmO1xufVxuXG4ubG9naW4tZGVzaWduLW1vYmlsZSB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNTAlKTtcbn1cblxuLmxvZ2luLWRlc2lnbi1kZXNrdG9wIHtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTYwJSwgLTUwJSk7XG59XG5cbi5hYm91dC1tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDY1dncgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCA4cHggOHB4O1xufVxuLmFib3V0LW1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cbi5hYm91dC1tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMzMzg7XG59XG4uYWJvdXQtbW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI1O1xuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYm91dC1tb2RhbC1ib2R5IC5tb2RhbC1pdGVtIGgyLFxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLWl0ZW0gaDMge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLWl0ZW0gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLWl0ZW0gcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5hYm91dC1tb2RhbC1ib2R5IC5tb2RhbC1pdGVtIC5tb2RhbC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uYWJvdXQtbW9kYWwtYm9keSAubW9kYWwtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWJvdXQtbW9kYWwtYm9keSAubW9kYWwtaXRlbTpmaXJzdC1jaGlsZCAubW9kYWwtdGl0bGUge1xuICB3aWR0aDogOTUlO1xufVxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLWl0ZW06Zmlyc3QtY2hpbGQgLm1vZGFsLWNsb3NlIHtcbiAgd2lkdGg6IDUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCA1cHggMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLW1lZGlhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYWJvdXQtbW9kYWwtYm9keSAubW9kYWwtbWVkaWEgaW1nIHtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hYm91dC1tb2RhbC1ib2R5IC5tb2RhbC1ndWlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYWJvdXQtbW9kYWwtYm9keSAubW9kYWwtZ3VpZGUgLmd1aWRlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cbi5hYm91dC1tb2RhbC1ib2R5IC5tb2RhbC1ndWlkZSAuZ3VpZGUtaXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYWJvdXQtbW9kYWwtYm9keSAubW9kYWwtZ3VpZGUgLmd1aWRlLWl0ZW0gLmd1aWRlLWljb24ge1xuICB3aWR0aDogNSU7XG4gIGNvbG9yOiAjYjliYmJlO1xufVxuLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLWd1aWRlIC5ndWlkZS1pdGVtIC5ndWlkZS10ZXh0IHtcbiAgd2lkdGg6IDk1JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDU1cHgpIHtcbiAgLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExNSUsIC01MCUpO1xuICB9XG4gIC5zaG93LXJlZ2lzdGVyIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB9XG5cbiAgLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDU1JSwgLTUwJSk7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1kZXNrdG9wIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNTAlKTtcbiAgfVxuXG4gIC5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xuICAubG9naW4tZGVzaWduIHtcbiAgICBmb250LXNpemU6IDEycmVtO1xuICB9XG5cbiAgLmtzaGFyZS10aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmtzaGFyZS10aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuXG4gIC5hYm91dC1tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xuICB9XG4gIC5hYm91dC1tb2RhbC1ib2R5IC5tb2RhbC1tZWRpYSBpbWcge1xuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFib3V0LW1vZGFsLWJvZHkgLmd1aWRlLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgMiUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGxlZnQsIDAuNXMgb3BhY2l0eTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNob3ctcmVnaXN0ZXIgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgbGVmdDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMTUwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIC01MCUpO1xuICB9XG4gIC5zaG93LXJlZ2lzdGVyIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTUwJSk7XG4gIH1cblxuICAuc2hvdy1sb2dpbiAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIC01MCUpO1xuICB9XG4gIC5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tZGVza3RvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTUwJSk7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY2NXB4KSB7XG4gIC5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnN0YXJzLWhlYWRlciB7XG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFib3V0LW1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFib3V0LW1vZGFsLWJvZHkgLm1vZGFsLW1lZGlhIGltZyB7XG4gICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcbiAgfVxuICAuYWJvdXQtbW9kYWwtYm9keSAuZ3VpZGUtaXRlbSBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubG9naW4tYm9keSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWNvbnRhaW5lcixcbi5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuc3RhcnMtaGVhZGVyIHtcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN0YXJzLWhlYWRlciAuc3RhcnMtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc3RhcnMtaGVhZGVyIC5zdGFycy10ZXh0IGg0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAua3NoYXJlLXRpdGxlIHtcbiAgICB0b3A6IDEyNSUgIWltcG9ydGFudDtcbiAgfVxuICAua3NoYXJlLXRpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnZhbGlkLWNoZWNrIHtcbiAgICByaWdodDogMTVweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC52YWxpZC1jaGVjayB+IC5leWUge1xuICAgIHJpZ2h0OiAyNiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaG93LWxvZ2luIC5sb2dpbi1kZXNpZ24tbW9iaWxlLFxuLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1tb2JpbGUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkwJSwgLTUwJSk7XG4gIH1cbiAgLnNob3ctbG9naW4gLmxvZ2luLWRlc2lnbi1kZXNrdG9wLFxuLnNob3ctcmVnaXN0ZXIgLmxvZ2luLWRlc2lnbi1kZXNrdG9wIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtNTAlKTtcbiAgfVxuXG4gIC5yZWdpc3RyYXRpb24tcmVzcG9uc2Uge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"] });
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
function FilesContainerComponent_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function FilesContainerComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOCKED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_11_div_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deleteFile(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_11_div_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleLock(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_11_div_2_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r9 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.toggleLock(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_11_div_2_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const file_r8 = ctx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.downloadFile(file_r8, _r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
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
function FilesContainerComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilesContainerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilesContainerComponent_div_11_div_2_Template, 13, 9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilesContainerComponent_div_11_div_3_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.spinners);
} }
function FilesContainerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No files added yet \uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(Max 200MB per file)");
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
    } }, decls: 14, vars: 4, consts: [[1, "files-body"], [1, "controls"], [1, "fas", "fa-plus-square", "icon", 3, "click"], [1, "tooltip"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "fas", "fa-trash", 3, "ngClass", "click"], [1, "tooltip", "move-left"], ["class", "fas fa-arrow-circle-up icon arrow-up", 4, "ngIf"], ["class", "files-container", 4, "ngIf", "ngIfElse"], ["showEmptyFile", ""], [1, "fas", "fa-arrow-circle-up", "icon", "arrow-up"], [1, "files-container"], ["fileContainer", ""], ["class", "file-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "file-item loading-item", 4, "ngFor", "ngForOf"], [1, "file-item", 3, "ngClass"], [1, "locked-text"], [1, "fas", "fa-times-circle", "icon", "delete-file-icon", 3, "click"], [1, "fas", "fa-lock", "icon", "lock-icon", "is-lock", 3, "click"], [1, "fas", "fa-lock-open", "icon", "lock-icon", 3, "click"], [1, "file-size"], [1, "img-container", 3, "download", "innerHtml", "click"], ["downloadTag", ""], [1, "details-container"], [1, "file-item", "loading-item"], ["src", "assets/loading_gif.gif", "alt", ""], [1, "empty-container"]], template: function FilesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilesContainerComponent_Template_input_change_5_listener($event) { return ctx.onFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_Template_i_click_7_listener() { return ctx.clearFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete unlocked files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilesContainerComponent_i_10_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FilesContainerComponent_div_11_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FilesContainerComponent_ng_template_12_Template, 5, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.files.length > 0 ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length > 0 || ctx.spinners.length > 0)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n* ::-webkit-scrollbar {\n  width: 0;\n}\n*::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon:hover {\n  color: #dcddde;\n}\n.icon:hover .tooltip {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon:hover .tooltip.show-bottom {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left {\n  left: -10%;\n}\n.tooltip.show-bottom {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn h4 {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn h4 i {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn:active {\n  filter: brightness(1.2);\n}\n.disable-btn {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal .modal-body {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal .modal-body {\n  transform: scale(1);\n}\n.modal.hide-modal {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal .modal-body {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body {\n    position: fixed;\n  }\n}\n:host {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n.files-body {\n  width: 97%;\n  height: 90%;\n  background-color: #36393f;\n  border-radius: 10px;\n  position: relative;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .controls {\n  height: 6vh;\n  position: absolute;\n  top: -3vh;\n  right: 20px;\n  border-radius: 5px;\n  border: 1px solid #32353b;\n  background-color: #40444b;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 5;\n}\n.files-body .controls i {\n  font-size: 18px;\n  margin: 0 10px;\n}\n.files-body .controls .arrow-up {\n  position: absolute;\n  left: 20px;\n  margin: 0;\n  animation: move-up-arrow 2s ease-out infinite;\n  color: #72767d;\n  pointer-events: none;\n}\n.files-body .files-container {\n  width: calc(100% - 26px);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n}\n.files-body .files-container::-webkit-scrollbar {\n  height: 0;\n}\n.files-body .files-container .file-item {\n  max-width: 22vw;\n  min-width: 22vw;\n  height: 90%;\n  margin-right: 13px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0 5px;\n  transition: 0.2s background-color;\n  transform-origin: top;\n  position: relative;\n  scroll-snap-align: start;\n}\n.files-body .files-container .file-item.locked-ui {\n  background-color: #3b3d44;\n}\n.files-body .files-container .file-item.locked-ui .locked-text {\n  opacity: 1;\n  top: 50%;\n}\n.files-body .files-container .file-item.locked-ui .delete-file-icon {\n  top: -8px !important;\n  right: -8px !important;\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n.files-body .files-container .file-item.loading-item {\n  background-color: #2f3136;\n}\n.files-body .files-container .file-item.loading-item img {\n  max-width: 40%;\n}\n.files-body .files-container .file-item:hover {\n  background-color: #2f3136;\n}\n.files-body .files-container .file-item:hover .delete-file-icon {\n  top: 5px;\n  right: 5px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.files-body .files-container .file-item:hover .lock-icon {\n  bottom: 8px;\n  right: 5px;\n  opacity: 0.4;\n  pointer-events: auto;\n}\n.files-body .files-container .file-item:hover .lock-icon.is-lock {\n  opacity: 1;\n}\n.files-body .files-container .file-item:hover .file-size {\n  opacity: 1;\n  top: 50%;\n}\n.files-body .files-container .file-item:hover .img-container .icon {\n  color: #dcddde;\n}\n.files-body .files-container .file-item .delete-file-icon {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  opacity: 0;\n  transition: 0.4s right, 0.4s top, 0.3s opacity;\n  pointer-events: none;\n}\n.files-body .files-container .file-item .lock-icon {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  opacity: 0;\n  transition: 0.4s right, 0.4s bottom, 0.3s opacity;\n  pointer-events: none;\n  transform: scaleX(-1);\n}\n.files-body .files-container .file-item .locked-text {\n  position: absolute;\n  top: 60%;\n  left: -1px;\n  transform: translate(0%, -50%);\n  writing-mode: vertical-lr;\n  font-weight: 900;\n  color: #63676d;\n  opacity: 0;\n  font-size: 20px;\n  transition: 0.3s opacity, 0.6s top;\n  letter-spacing: 1px;\n  cursor: auto;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.files-body .files-container .file-item .file-size {\n  position: absolute;\n  top: 40%;\n  right: -1px;\n  transform: translate(0%, -50%) rotate(180deg);\n  writing-mode: vertical-lr;\n  font-weight: 900;\n  color: #63676d;\n  opacity: 0;\n  font-size: 20px;\n  transition: 0.3s opacity, 0.6s top;\n  letter-spacing: 1px;\n  cursor: auto;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.files-body .files-container .file-item .img-container {\n  width: 80%;\n  height: 85%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.files-body .files-container .file-item .img-container .img-html {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 5px;\n  z-index: 3;\n}\n.files-body .files-container .file-item .img-container .icon {\n  font-size: 145px;\n  transition: 0.3s color;\n}\n.files-body .files-container .file-item .img-container .other-icon {\n  position: relative;\n}\n.files-body .files-container .file-item .img-container .other-icon::after {\n  content: \"?\";\n  color: #2f3136;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -35%) scale(1.2, 1.1);\n  font-size: 90px;\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n.files-body .files-container .file-item .details-container {\n  width: 80%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .files-container .file-item .details-container p {\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #b9bbbe;\n}\n.files-body .empty-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .empty-container h4 {\n  letter-spacing: 0.7px;\n  color: #72767d;\n}\n.files-body .empty-container p {\n  color: #72767d;\n  letter-spacing: 0.3px;\n}\n@keyframes move-up-arrow {\n  0% {\n    bottom: -120%;\n  }\n  50% {\n    bottom: -90%;\n  }\n  100% {\n    bottom: -120%;\n  }\n}\n@media all and (max-width: 1020px) {\n  .file-item {\n    max-width: 25vw !important;\n    min-width: 25vw !important;\n  }\n}\n@media all and (max-width: 820px) {\n  .file-item {\n    max-width: 30vw !important;\n    min-width: 30vw !important;\n  }\n  .file-item .delete-file-icon {\n    top: 5px !important;\n    right: 5px !important;\n    opacity: 1 !important;\n    pointer-events: auto !important;\n    font-size: 18px;\n  }\n  .file-item .lock-icon {\n    bottom: 8px !important;\n    right: 5px !important;\n    opacity: 0.4 !important;\n    pointer-events: auto !important;\n    font-size: 18px;\n  }\n  .file-item .lock-icon.is-lock {\n    opacity: 1 !important;\n  }\n  .file-item .file-size {\n    opacity: 1 !important;\n    top: 50% !important;\n  }\n  .file-item .img-container .icon {\n    color: #dcddde !important;\n  }\n}\n@media all and (max-width: 650px) {\n  .file-item {\n    max-width: 45vw !important;\n    min-width: 45vw !important;\n    background-color: #3b3d44 !important;\n  }\n  .file-item.locked-ui {\n    background-color: #2f3136 !important;\n  }\n}\n@media all and (max-width: 510px) {\n  .file-item {\n    max-width: 100% !important;\n    min-width: 100% !important;\n  }\n  .file-item .delete-file-icon {\n    top: 17px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxmaWxlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUNDQSw4RkFBQTtBRHFCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNuQkY7QURxQkU7RUFDRSwyQ0FBQTtBQ25CSjtBRHNCRTtFQUNFLFFBQUE7QUNwQko7QUR1QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNhYjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNxQlY7QUQwQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDdkJGO0FEeUJFO0VBQ0UsY0FqRFE7QUMwQlo7QUR5Qkk7RUFDRSx5Q0FBQTtBQ3ZCTjtBRHlCTTtFQUNFLHdDQUFBO0FDdkJSO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF2RWtCO0VBd0VsQix3Q0FBQTtFQUNBLHlCQXhFVztFQXlFWCxjQTdFUTtFQThFUiwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMxQkY7QUQ0QkU7RUFDRSxVQUFBO0FDMUJKO0FENkJFO0VBQ0UsUUFBQTtFQUNBLHlDQUFBO0FDM0JKO0FEK0JBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQzVCRjtBRCtCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQzVCRjtBRCtCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkE3R2tCO0VB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YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaXRlbUhvdmVyO1xyXG5cclxuICAgIC50b29sdGlwIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcblxyXG4gICAgICAmLnNob3ctYm90dG9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2MCUpIHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTR2aDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSBzY2FsZSgwKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY29sb3I6ICRtYWluQmtnO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgJi5tb3ZlLWxlZnQge1xyXG4gICAgbGVmdDogLTEwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1ib3R0b20ge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJhMzM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5oaWRlLW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG4iLCJAdXNlIFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIiBhcyBzdHlsZXM7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ3JTtcclxuICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgocm93LCBmbGV4LWVuZCwgY2VudGVyKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZpbGVzLWJvZHkge1xyXG4gIHdpZHRoOiA5NyU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc3R5bGVzLiRjb250YWluZXJzO1xyXG4gIGJvcmRlci1yYWRpdXM6IHN0eWxlcy4kYm9yZGVyUmFkaXVzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuXHJcbiAgLmNvbnRyb2xzIHtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3ZoO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiBzdHlsZXMuJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyMzUzYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XHJcbiAgICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdy11cCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBhbmltYXRpb246IG1vdmUtdXAtYXJyb3cgMnMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICAgIGNvbG9yOiAjNzI3NjdkO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWxlcy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2cHgpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBmbGV4LXN0YXJ0KTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1pdGVtIHtcclxuICAgICAgbWF4LXdpZHRoOiAyMnZ3O1xyXG4gICAgICBtaW4td2lkdGg6IDIydnc7XHJcbiAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHN0eWxlcy4kc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgICAgIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgc3BhY2UtZXZlbmx5KTtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuXHJcbiAgICAgICYubG9ja2VkLXVpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZDQ0O1xyXG5cclxuICAgICAgICAubG9ja2VkLXRleHQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlbGV0ZS1maWxlLWljb24ge1xyXG4gICAgICAgICAgdG9wOiAtOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICByaWdodDogLThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubG9hZGluZy1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xyXG5cclxuICAgICAgICAuZGVsZXRlLWZpbGUtaWNvbiB7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9jay1pY29uIHtcclxuICAgICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cclxuICAgICAgICAgICYuaXMtbG9jayB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsZS1zaXplIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWctY29udGFpbmVyIC5pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBzdHlsZXMuJGl0ZW1Ib3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGUtZmlsZS1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyByaWdodCwgMC40cyB0b3AsIDAuM3Mgb3BhY2l0eTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvY2staWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLThweDtcclxuICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgcmlnaHQsIDAuNHMgYm90dG9tLCAwLjNzIG9wYWNpdHk7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9ja2VkLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDYwJTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICM2MzY3NmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5LCAwLjZzIHRvcDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpbGUtc2l6ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICM2MzY3NmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5LCAwLjZzIHRvcDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgLmltZy1odG1sIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBzdHlsZXMuJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTQ1cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm90aGVyLWljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCI/XCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmYzMTM2O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zNSUpIHNjYWxlKDEuMiwgMS4xKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBjb2xvcjogc3R5bGVzLiRpdGVtTm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVtcHR5LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgY2VudGVyKTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgY29sb3I6ICM3Mjc2N2Q7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNzI3NjdkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUtdXAtYXJyb3cge1xyXG4gIDAlIHtcclxuICAgIGJvdHRvbTogLTEyMCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3R0b206IC05MCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAtMTIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gIC5maWxlLWl0ZW0ge1xyXG4gICAgbWF4LXdpZHRoOiAyNXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI1dncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgLmZpbGUtaXRlbSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwdncgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMzB2dyAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5kZWxldGUtZmlsZS1pY29uIHtcclxuICAgICAgdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9jay1pY29uIHtcclxuICAgICAgYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICBvcGFjaXR5OiAwLjQgIWltcG9ydGFudDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgJi5pcy1sb2NrIHtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1zaXplIHtcclxuICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyIC5pY29uIHtcclxuICAgICAgY29sb3I6IHN0eWxlcy4kaXRlbUhvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5maWxlLWl0ZW0ge1xyXG4gICAgbWF4LXdpZHRoOiA0NXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDQ1dncgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNkNDQgIWltcG9ydGFudDtcclxuXHJcbiAgICAmLmxvY2tlZC11aSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjMxMzYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgLmZpbGUtaXRlbSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5kZWxldGUtZmlsZS1pY29uIHtcclxuICAgICAgdG9wOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
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







const MAX_SIZE = 200;
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
            const mbSize = parseFloat((newFiles[i].size / (1024 * 1024)).toFixed(2));
            if (mbSize <= MAX_SIZE) {
                this.spinners.push(i);
                this.spinnerSubject.next(this.spinners);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-socket/socket.service */ "iIo4");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "CFL1");





class NotesService {
    constructor(socket, currentUser) {
        this.socket = socket;
        this.currentUser = currentUser;
        this.noteArray = [];
        this.noteExistsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getNoteExistObservable() {
        return this.noteExistsSubject.asObservable();
    }
    addNote(newText) {
        const checkIfExists = (note) => note.text === newText;
        // if exists, return to avoid duplicates
        if (this.noteArray.some(checkIfExists)) {
            this.noteExistsSubject.next(true);
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
        this.noteExistsSubject.next(false);
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
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip.show-bottom[_ngcontent-%COMP%] {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left[_ngcontent-%COMP%] {\n  left: -10%;\n}\n.tooltip.show-bottom[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.main-star[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  align-items: flex-start;\n  justify-items: center;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80%;\n  cursor: pointer;\n  filter: grayscale(100%);\n  transition: 0.2s transform ease-out, 0.3s filter;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img.hover-star[_ngcontent-%COMP%] {\n  filter: grayscale(70%);\n  transform: scale(1.15) rotate(45deg);\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img.selected-stars[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n  transform: scale(1.05) rotate(-217deg);\n}\n@media all and (max-width: 650px) {\n  .main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40%;\n  }\n}\n@media all and (max-width: 510px) {\n  .main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdGFycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQXNCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNwQkY7QURzQkU7RUFDRSwyQ0FBQTtBQ3BCSjtBRHVCRTtFQUNFLFFBQUE7QUNyQko7QUR3QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNZYjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNvQlY7QUQyQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDeEJGO0FEMEJFO0VBQ0UsY0FqRFE7QUN5Qlo7QUQwQkk7RUFDRSx5Q0FBQTtBQ3hCTjtBRDBCTTtFQUNFLHdDQUFBO0FDeEJSO0FEOEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF2RWtCO0VBd0VsQix3Q0FBQTtFQUNBLHlCQXhFVztFQXlFWCxjQTdFUTtFQThFUiwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMzQkY7QUQ2QkU7RUFDRSxVQUFBO0FDM0JKO0FEOEJFO0VBQ0UsUUFBQTtFQUNBLHlDQUFBO0FDNUJKO0FEZ0NBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQzdCRjtBRGdDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQzdCRjtBRGdDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkE3R2tCO0VBOEdsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDN0JGO0FEK0JFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUM3Qko7QUQrQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUM3Qk47QURpQ0U7RUFDRSx1QkFBQTtBQy9CSjtBRG1DQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ2hDRjtBRG1DQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQ2hDRjtBRG9DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBMUlBLGFBQUE7RUFDQSxtQkEwSXFCO0VBeklyQixtQkF5STBCO0VBeEkxQix1QkF3SWtDO0VBQ2xDLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDOUJGO0FEZ0NFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkE5Slc7RUErSlgsd0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUZBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUM5Qko7QURpQ0U7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDL0JKO0FEaUNJO0VBQ0UsbUJBQUE7QUMvQk47QURtQ0U7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDakNKO0FEbUNJO0VBQ0UsbUJBQUE7QUNqQ047QURzQ0E7RUFDRTtJQUNFLHNCQUFBO0VDbkNGO0FBQ0Y7QURzQ0E7RUFDRTtJQUNFLHNCQUFBO0VDcENGO0FBQ0Y7QUR1Q0E7RUFDRTtJQUNFLGVBQUE7RUNyQ0Y7QUFDRjtBQXpLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUVBLHFCQUFBO0FBMEtGO0FBeEtFO0VESUEsYUFBQTtFQUNBLG1CQ0o4QjtFREs5QixtQkNMbUM7RURNbkMsdUJDTjJDO0FBNks3QztBQTNLSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtBQTZLTjtBQTNLTTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7QUE2S1I7QUExS007RUFDRSxxQkFBQTtFQUNBLHNDQUFBO0FBNEtSO0FBdEtBO0VBQ0U7SUFDRSxjQUFBO0VBeUtGO0FBQ0Y7QUF0S0E7RUFDRTtJQUNFLGNBQUE7RUF3S0Y7QUFDRiIsImZpbGUiOiJzdGFycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcblxyXG4gICAgLnRvb2x0aXAge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuXHJcbiAgICAgICYuc2hvdy1ib3R0b20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDYwJSkgc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNHZoO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHNjYWxlKDApO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjb2xvcjogJG1haW5Ca2c7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG5cclxuICAmLm1vdmUtbGVmdCB7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LWJvdHRvbSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtaWNvbiB7XHJcbiAgY29sb3I6ICNiOWJiYmU7XHJcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmVuYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLy8gbW9kYWxcclxuLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XHJcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmEzMztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDcwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOm5vdChpKSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbn1cbiogOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuKjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICM4MTY3YTk7XG4gIGJhY2tncm91bmQ6ICMzNjM5M2Y7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjMxMzY7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cbi5pY29uOmhvdmVyIC50b29sdGlwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG4uaWNvbjpob3ZlciAudG9vbHRpcC5zaG93LWJvdHRvbSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDYwJSkgc2NhbGUoMSk7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00dmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSBzY2FsZSgwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YmJiZTtcbiAgY29sb3I6ICMyZjMxMzY7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMjA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi50b29sdGlwLm1vdmUtbGVmdCB7XG4gIGxlZnQ6IC0xMCU7XG59XG4udG9vbHRpcC5zaG93LWJvdHRvbSB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmEzMztcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbi5tYWluLXN0YXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1zdGFyIC5zdGFyLXNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYWluLXN0YXIgLnN0YXItc3BhbiBpbWcge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm0gZWFzZS1vdXQsIDAuM3MgZmlsdGVyO1xufVxuLm1haW4tc3RhciAuc3Rhci1zcGFuIGltZy5ob3Zlci1zdGFyIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoNzAlKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KSByb3RhdGUoNDVkZWcpO1xufVxuLm1haW4tc3RhciAuc3Rhci1zcGFuIGltZy5zZWxlY3RlZC1zdGFycyB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGUoLTIxN2RlZyk7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5tYWluLXN0YXIgLnN0YXItc3BhbiBpbWcge1xuICAgIG1heC13aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xuICAubWFpbi1zdGFyIC5zdGFyLXNwYW4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufSJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n.icon[_ngcontent-%COMP%]:hover   .tooltip.show-bottom[_ngcontent-%COMP%] {\n  transform: translate(-50%, 60%) scale(1);\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4vh;\n  left: 50%;\n  transform: translate(-50%, 50%) scale(0);\n  white-space: nowrap;\n  padding: 5px 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #b9bbbe;\n  color: #2f3136;\n  transition: 0.3s transform;\n  pointer-events: none;\n  z-index: 20;\n  font-size: 17px;\n}\n.tooltip.move-left[_ngcontent-%COMP%] {\n  left: -10%;\n}\n.tooltip.show-bottom[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #262a33;\n  transition: 0.3s transform;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 220%;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n@media all and (max-width: 825px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 70vw !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .modal-body[_ngcontent-%COMP%] {\n    width: 90vw !important;\n  }\n}\n@media all and (max-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n[_nghost-%COMP%] {\n  width: 32%;\n}\n.list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 70%;\n  background-color: #40444b;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 83%;\n  height: 100%;\n  border-radius: 5px 0 0 5px;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 17%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n  padding: 15px 0;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  width: 92%;\n  padding: 2px 6px;\n  background-color: #2f3136;\n  border-radius: 5px;\n  text-overflow: ellipsis;\n  position: relative;\n  margin: 0 auto;\n  white-space: pre-wrap;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 10px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 100%;\n  transform: translateX(-25%);\n  z-index: -1;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  min-height: 6vh;\n  max-height: 10vh;\n  transition: 0.2s width;\n  cursor: pointer;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 2px;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  font-weight: 900;\n  color: #63676d;\n  font-size: 13px;\n  opacity: 0;\n  transition: 0.3s opacity, 0.4s left;\n  cursor: auto;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: justify;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-control[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 31px;\n  position: absolute;\n  top: 50%;\n  right: -10%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: 0.1s width, 0.4s right, 0.2s opacity;\n  opacity: 0;\n  pointer-events: none;\n  font-size: 19px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-item-p[_ngcontent-%COMP%] {\n  width: 88%;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-item-p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 1;\n  left: -6px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-control[_ngcontent-%COMP%] {\n  width: 10%;\n  right: 4px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.empty-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.7px;\n  color: #72767d;\n}\n@media all and (max-width: 780px) {\n  .date[_ngcontent-%COMP%] {\n    left: -10px !important;\n    opacity: 1 !important;\n  }\n\n  .list-control[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n    width: 7% !important;\n    right: 4px !important;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    height: 95% !important;\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub3RlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBc0JSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEdUJFO0VBQ0UsUUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGNBdkJhO0VBd0JiLG1CQWxDUztBQ1liO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTNDUTtBQ29CVjtBRDJCQTtFQUNFLGNBNUNXO0VBNkNYLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUN4QkY7QUQwQkU7RUFDRSxjQWpEUTtBQ3lCWjtBRDBCSTtFQUNFLHlDQUFBO0FDeEJOO0FEMEJNO0VBQ0Usd0NBQUE7QUN4QlI7QUQ4QkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQXZFa0I7RUF3RWxCLHdDQUFBO0VBQ0EseUJBeEVXO0VBeUVYLGNBN0VRO0VBOEVSLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzNCRjtBRDZCRTtFQUNFLFVBQUE7QUMzQko7QUQ4QkU7RUFDRSxRQUFBO0VBQ0EseUNBQUE7QUM1Qko7QURnQ0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQTdH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QzRGa0M7RUQzRmxDLG1CQzJGdUM7RUQxRnZDLHVCQzBGK0M7RUFDekMsZ0RBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBNEtSO0FBeEtRO0VBQ0UsVUFBQTtBQTBLVjtBQXhLVTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBMEtaO0FBdktRO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUF5S1Y7QUFsS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFRDFIQSxhQUFBO0VBQ0Esc0JDMEg0QjtFRHpINUIsbUJDeUhvQztFRHhIcEMsdUJDd0g0QztBQXdLOUM7QUF0S0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUF3S0o7QUFwS0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EscUJBQUE7RUF1S0Y7O0VBcktBO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtJQUNBLHFCQUFBO0VBd0tGOztFQXRLQTtJQUNFLHNCQUFBO0lBQ0EsZUFBQTtFQXlLRjtBQUNGIiwiZmlsZSI6Im5vdGUtbGlzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaXRlbUhvdmVyO1xyXG5cclxuICAgIC50b29sdGlwIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcblxyXG4gICAgICAmLnNob3ctYm90dG9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2MCUpIHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTR2aDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSBzY2FsZSgwKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY29sb3I6ICRtYWluQmtnO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgJi5tb3ZlLWxlZnQge1xyXG4gICAgbGVmdDogLTEwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1ib3R0b20ge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJhMzM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDYyODg5L3BhdC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjIwJTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5oaWRlLW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA3MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNkY2RkZGU7XG59XG4uaWNvbjpob3ZlciAudG9vbHRpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuLmljb246aG92ZXIgLnRvb2x0aXAuc2hvdy1ib3R0b20ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2MCUpIHNjYWxlKDEpO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHZoO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgc2NhbGUoMCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWJiYmU7XG4gIGNvbG9yOiAjMmYzMTM2O1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDIwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4udG9vbHRpcC5tb3ZlLWxlZnQge1xuICBsZWZ0OiAtMTAlO1xufVxuLnRvb2x0aXAuc2hvdy1ib3R0b20ge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG59XG5cbi5kaXNhYmxlLWljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XG59XG5cbi5idG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XG59XG4uYnRuIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuLmJ0biBoNCBpIHtcbiAgbWFyZ2luOiAwIDNweDtcbiAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5idG46YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5kaXNhYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5lbmFibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5tb2RhbCAubW9kYWwtYm9keSB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjJhMzM7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQ2Mjg4OS9wYXQuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICB3aWR0aDogNzB2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgd2lkdGg6IDkwdncgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG46aG9zdCB7XG4gIHdpZHRoOiAzMiU7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubGlzdC1jb250YWluZXIgLmZpbHRlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5maWx0ZXItY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDgzJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cbi5saXN0LWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdiB7XG4gIHdpZHRoOiAxNyU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODUlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIHtcbiAgd2lkdGg6IDkyJTtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xuICB6LWluZGV4OiAtMTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMgLmxpc3QtaXRlbSAubGlzdC1pdGVtLXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA2dmg7XG4gIG1heC1oZWlnaHQ6IDEwdmg7XG4gIHRyYW5zaXRpb246IDAuMnMgd2lkdGg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMgLmxpc3QtaXRlbSAubGlzdC1pdGVtLXAgLmRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzYzNjc2ZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHksIDAuNHMgbGVmdDtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIC5saXN0LWl0ZW0tcCBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIC5saXN0LWNvbnRyb2wge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogLTEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcyB3aWR0aCwgMC40cyByaWdodCwgMC4ycyBvcGFjaXR5O1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtOmhvdmVyIC5saXN0LWl0ZW0tcCB7XG4gIHdpZHRoOiA4OCU7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06aG92ZXIgLmxpc3QtaXRlbS1wIC5kYXRlIHtcbiAgb3BhY2l0eTogMTtcbiAgbGVmdDogLTZweDtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMgLmxpc3QtaXRlbTpob3ZlciAubGlzdC1jb250cm9sIHtcbiAgd2lkdGg6IDEwJTtcbiAgcmlnaHQ6IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5lbXB0eS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZW1wdHktbGlzdCBoNCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgY29sb3I6ICM3Mjc2N2Q7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5kYXRlIHtcbiAgICBsZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5saXN0LWNvbnRyb2wge1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNyUgIWltcG9ydGFudDtcbiAgICByaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufSJdfQ== */"] });
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
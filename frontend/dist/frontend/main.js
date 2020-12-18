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
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ "Xfvc");
/* harmony import */ var src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-socket/socket.service */ "iIo4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stars/stars.component */ "uAVx");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "M8l/");
/* harmony import */ var _notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notes-container/notes-container.component */ "MecD");
/* harmony import */ var _files_container_files_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files-container/files-container.component */ "jy3j");











class HomeComponent {
    constructor(userService, localStorage, socketService, router) {
        this.userService = userService;
        this.localStorage = localStorage;
        this.socketService = socketService;
        this.router = router;
    }
    ngOnInit() {
        this.subscribeToUser();
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
        this.socketSubscription.unsubscribe();
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
        this.showDeleteModal = !this.showDeleteModal;
    }
    toggleFeedbackModal() {
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
        this.socketSubscription = this.socketService
            .listen('deletedAccount')
            .subscribe(() => {
            this.localStorage.clearToken();
            console.log('CLEAARED');
            this.router.navigateByUrl('/login');
        });
    }
    subscribeToUser() {
        this.userSubscription = this.userService
            .getUserObservable()
            .subscribe((user) => {
            if (user) {
                this.user = user.user;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 54, vars: 7, consts: [[1, "home-container", 3, "ngClass"], [1, "sidebar", 3, "mouseover", "mouseleave"], [1, "sidebar-main"], [1, "sidebar-feedback"], [1, "stars-feedback"], [1, "side-delay"], [1, "stars"], [1, "feedback-action"], [1, "btn", "side-delay-lr", 3, "click"], [1, "sidebar-account"], [1, "acc-date"], [1, "acc-btn"], [1, "main-app"], [3, "showNavbarEmitter"], [1, "sidebar-line", 3, "mouseover"], [1, "modal", 3, "ngClass", "mouseover", "click"], [1, "modal-body", "modal-delete-body"], [1, "modal-action"], [1, "btn", "delete-btn", 3, "click"], [1, "btn-icon", "wave-btn-icon"], [1, "btn", 3, "click"], [1, "btn-icon"], [1, "bye-bottom-msg"], [1, "modal-body"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_1_listener() { return ctx.showNav(); })("mouseleave", function HomeComponent_Template_div_mouseleave_1_listener() { return ctx.hideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rate application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { return ctx.toggleFeedbackModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Leave a feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account Created on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener() { return ctx.toggleDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-navbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showNavbarEmitter", function HomeComponent_Template_app_navbar_showNavbarEmitter_25_listener($event) { return ctx.onNavbarChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-notes-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-files-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_28_listener() { return ctx.showNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_29_listener() { return ctx.hideNav(); })("click", function HomeComponent_Template_div_click_29_listener($event) { return ctx.onModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Are you sure you want to delete your account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sad to see you go.. \uD83D\uDE1E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_37_listener() { return ctx.onDeleteAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Yes, delete!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uD83D\uDC4B\uD83C\uDFFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_42_listener() { return ctx.toggleDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nope, changed my mind!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\uD83D\uDE03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " If yes, you will be directed to the Login page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_Template_div_mouseover_49_listener() { return ctx.hideNav(); })("click", function HomeComponent_Template_div_click_49_listener($event) { return ctx.onModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " email container ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " saw a bug? love the app? have an idea for a feature? write to me! :D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showNavbar ? "show-navbar" : "hide-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 4, ctx.user == null ? null : ctx.user.dateAccCreated, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showDeleteModal ? "show-modal" : "hide-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showFeedbackModal ? "show-modal" : "hide-modal");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _stars_stars_component__WEBPACK_IMPORTED_MODULE_6__["StarsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_8__["NotesContainerComponent"], _files_container_files_container_component__WEBPACK_IMPORTED_MODULE_9__["FilesContainerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.main-app[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s width;\n}\napp-navbar[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 6%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\napp-files-container[_ngcontent-%COMP%], app-notes-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #202225;\n  transition: 0.3s width;\n  border-radius: 0 10px 10px 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  overflow: hidden;\n  width: 15%;\n}\n.sidebar-main[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 30%;\n}\n.sidebar-feedback[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 30%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.4px;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .stars-feedback[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   app-stars[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px 15px;\n  background-color: #677bc4;\n}\n.sidebar-feedback[_ngcontent-%COMP%]   .feedback-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.sidebar-account[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 30%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.4px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-date[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #f72f4e;\n  color: white;\n}\n.sidebar-account[_ngcontent-%COMP%]   .acc-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.show-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay[_ngcontent-%COMP%], .show-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay-lr[_ngcontent-%COMP%] {\n  transition: 0.8s -webkit-clip-path;\n  transition: 0.8s clip-path;\n  transition: 0.8s clip-path, 0.8s -webkit-clip-path;\n  transition-delay: 0.2s;\n  -webkit-clip-path: inset(0 0 0 0);\n          clip-path: inset(0 0 0 0);\n}\n.hide-navbar[_ngcontent-%COMP%]   .main-app[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 0;\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay[_ngcontent-%COMP%] {\n  transition: 0.15s -webkit-clip-path;\n  transition: 0.15s clip-path;\n  transition: 0.15s clip-path, 0.15s -webkit-clip-path;\n  transition-delay: 0s;\n  -webkit-clip-path: inset(0 0 0 100%);\n          clip-path: inset(0 0 0 100%);\n}\n.hide-navbar[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .side-delay-lr[_ngcontent-%COMP%] {\n  transition: 0.15s -webkit-clip-path;\n  transition: 0.15s clip-path;\n  transition: 0.15s clip-path, 0.15s -webkit-clip-path;\n  transition-delay: 0s;\n  -webkit-clip-path: inset(0 100% 0 0);\n          clip-path: inset(0 100% 0 0);\n}\n.sidebar-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 3px;\n  height: 100%;\n}\n.modal-delete-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  letter-spacing: 0.7px;\n  padding-bottom: 20px;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n.modal-delete-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #72767d;\n  font-weight: bolder;\n  transform: translateY(5px);\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 20%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: space-around;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  position: relative;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  transition: 0.3s transform, 0.2s opacity;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn.delete-btn[_ngcontent-%COMP%] {\n  background-color: #f72f4e;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.3s top, 0.2s opacity;\n  pointer-events: none;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon.wave-btn-icon[_ngcontent-%COMP%] {\n  animation: none;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  transform: translateY(110%);\n  opacity: 0;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal-delete-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon.wave-btn-icon[_ngcontent-%COMP%] {\n  animation: wave 2s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes wave {\n  0% {\n    transform: translate(-50%, -50%) rotate(20deg);\n  }\n  50% {\n    transform: translate(-50%, -50%) rotate(70deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(20deg);\n  }\n}\n.modal-delete-body[_ngcontent-%COMP%]   .bye-bottom-msg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #72767d;\n  font-weight: bolder;\n  letter-spacing: 0.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBc0JSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEdUJFO0VBQ0UsUUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGNBdkJhO0VBd0JiLG1CQWxDUztBQ1liO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTNDUTtBQ29CVjtBRDJCQTtFQUNFLGNBNUNXO0VBNkNYLGVBQUE7RUFDQSxhQUFBO0FDeEJGO0FEMEJFO0VBQ0UsY0FoRFE7QUN3Qlo7QUQ0QkE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDekJGO0FENEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQXpFa0I7RUEwRWxCLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtBQ3pCSjtBRDJCSTtFQUNFLGFBQUE7RUFDQSxnRUFBQTtBQ3pCTjtBRDZCRTtFQUNFLHVCQUFBO0FDM0JKO0FEK0JBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDNUJGO0FEK0JBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0VBQUE7RUF0R0EsYUFBQTtFQUNBLG1CQXNHcUI7RUFyR3JCLG1CQXFHMEI7RUFwRzFCLHVCQW9Ha0M7RUFDbEMseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUMxQkY7QUQ0QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQTFIVztFQTJIWCx3Q0FBQTtFQUNBLHlCQTdIUztFQThIVCwwQkFBQTtBQzFCSjtBRDZCRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUMzQko7QUQ2Qkk7RUFDRSxtQkFBQTtBQzNCTjtBRCtCRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUM3Qko7QUQrQkk7RUFDRSxtQkFBQTtBQzdCTjtBQXJIQTtFRGNFLGFBQUE7RUFDQSxtQkNkNEI7RURlNUIsbUJDZmlDO0VEZ0JqQyx1QkNoQnlDO0VBQ3pDLGtCQUFBO0FBMkhGO0FBeEhBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RURPQSxhQUFBO0VBQ0Esc0JDUDRCO0VEUTVCLG1CQ1JvQztFRFNwQyx1QkNUNEM7RUFDNUMsc0JBQUE7QUE4SEY7QUEzSEE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFREFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQ0RpQztFREVqQyw4QkNGeUM7QUFpSTNDO0FBOUhBOztFQUVFLFdBQUE7RUFDQSxXQUFBO0VEUEEsYUFBQTtFQUNBLG1CQ080QjtFRE41QixxQkNNaUM7RURMakMsdUJDSzJDO0VBQzNDLG9CQUFBO0FBb0lGO0FBaklBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFRGxCQSxhQUFBO0VBQ0Esc0JDa0I0QjtFRGpCNUIsbUJDaUJvQztFRGhCcEMsOEJDZ0I0QztFQUM1QyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBdUlGO0FBcElBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUF1SUY7QUFwSUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRDlDVztFQytDWCxtQkQ5Q2E7RUMrQ2Isd0NBQUE7RURuQ0EsYUFBQTtFQUNBLHNCQ21DNEI7RURsQzVCLG1CQ2tDb0M7RURqQ3BDLDZCQ2lDNEM7RUFDNUMsWUFBQTtBQTBJRjtBQXhJRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEekNGLGFBQUE7RUFDQSxzQkN5QzhCO0VEeEM5Qix1QkN3Q3NDO0VEdkN0Qyw2QkN1Q2tEO0FBNklwRDtBQTNJSTtFQUNFLGNEakRLO0VDa0RMLG1CQUFBO0VBQ0EscUJBQUE7QUE2SU47QUExSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQTRJTjtBQTFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNElSO0FBdklFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUQvREYsYUFBQTtFQUNBLHNCQytEOEI7RUQ5RDlCLG1CQzhEc0M7RUQ3RHRDLHVCQzZEOEM7QUE0SWhEO0FBMUlJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJENUVLO0FDd05YO0FBMUlNO0VBQ0UscUJBQUE7QUE0SVI7QUF0SUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRDlGVztFQytGWCxtQkQ5RmE7RUMrRmIsd0NBQUE7RURuRkEsYUFBQTtFQUNBLHNCQ21GNEI7RURsRjVCLG1CQ2tGb0M7RURqRnBDLHVCQ2lGNEM7RUFDNUMsWUFBQTtBQTRJRjtBQTFJRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBNElKO0FBMUlJO0VBQ0UsY0RoR0s7RUNpR0wsbUJBQUE7RUFDQSxxQkFBQTtBQTRJTjtBQXpJSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQTJJTjtBQXZJRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEM0dGLGFBQUE7RUFDQSxzQkMyRzhCO0VEMUc5QixtQkMwR3NDO0VEekd0Qyx1QkN5RzhDO0FBNEloRDtBQTFJSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBNElOO0FBMUlNO0VBQ0UscUJBQUE7QUE0SVI7QUFySUU7RUFDRSxVQUFBO0FBd0lKO0FBdElFO0VBQ0UsVUFBQTtBQXdJSjtBQXRJSTs7RUFFRSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUF3SU47QUFsSUU7RUFDRSxXQUFBO0FBcUlKO0FBbklFO0VBQ0UsUUFBQTtBQXFJSjtBQW5JSTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7RUFBQSxvREFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQXFJTjtBQWxJSTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7RUFBQSxvREFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQW9JTjtBQS9IQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWtJRjtBQS9IQTtFRHZLRSxhQUFBO0VBQ0Esc0JDdUs0QjtFRHRLNUIsbUJDc0tvQztFRHJLcEMsNkJDcUs0QztBQXFJOUM7QUFuSUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFRDVLRixhQUFBO0VBQ0Esc0JDNEs4QjtFRDNLOUIsbUJDMktzQztFRDFLdEMseUJDMEs4QztFQUM1QyxxQkFBQTtFQUNBLG9CQUFBO0FBd0lKO0FBdElJO0VBQ0UsWUFBQTtBQXdJTjtBQXJJSTtFQUNFLGNEMUxLO0VDMkxMLG1CQUFBO0VBQ0EsMEJBQUE7QUF1SU47QUFuSUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFRDlMRixhQUFBO0VBQ0EsbUJDOEw4QjtFRDdMOUIscUJDNkxtQztFRDVMbkMsNkJDNEw2QztBQXdJL0M7QUF0SUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXdJTjtBQXRJTTtFQUNFLHFCQUFBO0VBQ0Esd0NBQUE7QUF3SVI7QUFySU07RUFDRSx5QkFBQTtBQXVJUjtBQXBJTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBc0lSO0FBcElRO0VBQ0UsZUFBQTtBQXNJVjtBQWpJUTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQW1JVjtBQWpJUTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFtSVY7QUFqSVU7RUFDRSxtRUFBQTtBQW1JWjtBQWpJWTtFQUNFO0lBQ0UsOENBQUE7RUFtSWQ7RUFqSVk7SUFDRSw4Q0FBQTtFQW1JZDtFQWpJWTtJQUNFLDhDQUFBO0VBbUlkO0FBQ0Y7QUEzSEU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFRDdQRixhQUFBO0VBQ0Esc0JDNlA4QjtFRDVQOUIsbUJDNFBzQztFRDNQdEMsdUJDMlA4QztFQUM1QyxjRG5RTztFQ29RUCxtQkFBQTtFQUNBLHFCQUFBO0FBZ0lKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGFpbmVycztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG59XG4ubW9kYWwuc2hvdy1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLWFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3Mgd2lkdGg7XG59XG5cbmFwcC1uYXZiYXIge1xuICB3aWR0aDogOTclO1xuICBoZWlnaHQ6IDYlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmFwcC1maWxlcy1jb250YWluZXIsXG5hcHAtbm90ZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI1O1xuICB0cmFuc2l0aW9uOiAwLjNzIHdpZHRoO1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLnNpZGViYXItbWFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4uc2lkZWJhci1mZWVkYmFjayB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnNpZGViYXItZmVlZGJhY2sgLnN0YXJzLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuc3RhcnMtZmVlZGJhY2sgc21hbGwge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuLnNpZGViYXItZmVlZGJhY2sgLnN0YXJzLWZlZWRiYWNrIC5zdGFycyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5zaWRlYmFyLWZlZWRiYWNrIC5zdGFycy1mZWVkYmFjayAuc3RhcnMgYXBwLXN0YXJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaWRlYmFyLWZlZWRiYWNrIC5mZWVkYmFjay1hY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGViYXItZmVlZGJhY2sgLmZlZWRiYWNrLWFjdGlvbiAuYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzdiYzQ7XG59XG4uc2lkZWJhci1mZWVkYmFjayAuZmVlZGJhY2stYWN0aW9uIC5idG4gaDQge1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zaWRlYmFyLWFjY291bnQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zaWRlYmFyLWFjY291bnQgLmFjYy1kYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWRhdGUgc21hbGwge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWRhdGUgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uc2lkZWJhci1hY2NvdW50IC5hY2MtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlYmFyLWFjY291bnQgLmFjYy1idG4gLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MmY0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpZGViYXItYWNjb3VudCAuYWNjLWJ0biAuYnRuIGg0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc2hvdy1uYXZiYXIgLm1haW4tYXBwIHtcbiAgd2lkdGg6IDg1JTtcbn1cbi5zaG93LW5hdmJhciAuc2lkZWJhciB7XG4gIHdpZHRoOiAxNSU7XG59XG4uc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGUtZGVsYXksXG4uc2hvdy1uYXZiYXIgLnNpZGViYXIgLnNpZGUtZGVsYXktbHIge1xuICB0cmFuc2l0aW9uOiAwLjhzIGNsaXAtcGF0aDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcbn1cblxuLmhpZGUtbmF2YmFyIC5tYWluLWFwcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhpZGUtbmF2YmFyIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4uaGlkZS1uYXZiYXIgLnNpZGViYXIgLnNpZGUtZGVsYXkge1xuICB0cmFuc2l0aW9uOiAwLjE1cyBjbGlwLXBhdGg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDEwMCUpO1xufVxuLmhpZGUtbmF2YmFyIC5zaWRlYmFyIC5zaWRlLWRlbGF5LWxyIHtcbiAgdHJhbnNpdGlvbjogMC4xNXMgY2xpcC1wYXRoO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgY2xpcC1wYXRoOiBpbnNldCgwIDEwMCUgMCAwKTtcbn1cblxuLnNpZGViYXItbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1kZWxldGUtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgc3BhbiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBzcGFuIHAge1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG4ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuIGg0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybSwgMC4ycyBvcGFjaXR5O1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjcyZjRlO1xufVxuLm1vZGFsLWRlbGV0ZS1ib2R5IGRpdiAuYnRuIC5idG4taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRvcCwgMC4ycyBvcGFjaXR5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0biAuYnRuLWljb24ud2F2ZS1idG4taWNvbiB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0bjpob3ZlciBoNCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMTAlKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5tb2RhbC1kZWxldGUtYm9keSBkaXYgLmJ0bjpob3ZlciAuYnRuLWljb24ge1xuICB0b3A6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ubW9kYWwtZGVsZXRlLWJvZHkgZGl2IC5idG46aG92ZXIgLmJ0bi1pY29uLndhdmUtYnRuLWljb24ge1xuICBhbmltYXRpb246IHdhdmUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuQGtleWZyYW1lcyB3YXZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMGRlZyk7XG4gIH1cbn1cbi5tb2RhbC1kZWxldGUtYm9keSAuYnllLWJvdHRvbS1tc2cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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

/***/ "Harg":
/*!*****************************************************************!*\
  !*** ./src/app/services/files/inner-html/inner-html.service.ts ***!
  \*****************************************************************/
/*! exports provided: InnerHtmlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerHtmlService", function() { return InnerHtmlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InnerHtmlService {
    constructor() { }
    getInnerHTML(imageData, fileName) {
        // images
        if (fileName.endsWith('jpeg') ||
            fileName.endsWith('png')
        // fileName.endsWith('svg')
        ) {
            return `<img src="${imageData}" alt="imageBase64" class="img-html"/>`;
        }
        // videos
        if (fileName.endsWith('mp4')) {
            return '<i class="fas fa-file-video icon"></i>';
        }
        // icon
        if (imageData.startsWith('data:image/x-icon;base64,')) {
            return '<i class="fas fa-file-image icon"></i>';
        }
        // pdf
        if (fileName.endsWith('pdf')) {
            return `<i class="fas fa-file-pdf icon"></i>`;
        }
        // txt files
        if (fileName.endsWith('txt') || fileName.endsWith('md')) {
            return `<i class="fas fa-file-alt icon"></i>`;
        }
        // word doc
        if (fileName.endsWith('doc') || fileName.endsWith('docx')) {
            return `<i class="fas fa-file-word icon"></i>`;
        }
        // excel files
        if (fileName.endsWith('xlsx')) {
            return `<i class="fas fa-file-excel icon"></i>`;
        }
        // powerpoint
        if (fileName.endsWith('ppt')) {
            return `<i class="fas fa-file-powerpoint icon"></i>`;
        }
        // audio
        if (fileName.endsWith('mp3')) {
            return `<i class="fas fa-file-audio icon"></i>`;
        }
        // zip files
        if (fileName.endsWith('zip') || fileName.endsWith('rar')) {
            return `<i class="fas fa-file-archive icon"></i>`;
        }
        // code files
        if (fileName.endsWith('ts') ||
            fileName.endsWith('js') ||
            fileName.endsWith('css') ||
            fileName.endsWith('scss') ||
            fileName.endsWith('c++') ||
            fileName.endsWith('html')) {
            return `<i class="fas fa-file-code icon"></i>`;
        }
        // other types
        return `<i class="fas fa-file icon other-icon"></i>`;
    }
}
InnerHtmlService.ɵfac = function InnerHtmlService_Factory(t) { return new (t || InnerHtmlService)(); };
InnerHtmlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InnerHtmlService, factory: InnerHtmlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InnerHtmlService, [{
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { showNavbarEmitter: "showNavbarEmitter" }, decls: 10, vars: 1, consts: [[1, "hamburger", 3, "mouseover"], [1, "navbar-item"], ["routerLink", "/", 1, "fas", "fa-sign-out-alt", "icon", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser == null ? null : ctx.currentUser.username);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n.navbar-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\nh3[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: white;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.2rem;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #72767d;\n  margin-right: 2px;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.hamburger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2vh;\n  left: 1.5%;\n  z-index: 2;\n  height: 3vh;\n  width: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 20%;\n  background-color: #b9bbbe;\n  border-radius: 5px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  height: 21%;\n  width: 80%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 55%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFzQlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkNBQUE7QUNwQko7QUR1QkU7RUFDRSxRQUFBO0FDckJKO0FEd0JFO0VBQ0UsY0F2QmE7RUF3QmIsbUJBbENTO0FDWWI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBM0NRO0FDb0JWO0FEMkJBO0VBQ0UsY0E1Q1c7RUE2Q1gsZUFBQTtFQUNBLGFBQUE7QUN4QkY7QUQwQkU7RUFDRSxjQWhEUTtBQ3dCWjtBRDRCQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN6QkY7QUQ0QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQ0QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBekVrQjtFQTBFbEIsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDJCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0FDekJKO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLGdFQUFBO0FDekJOO0FENkJFO0VBQ0UsdUJBQUE7QUMzQko7QUQrQkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUM1QkY7QURnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtFQXRHQSxhQUFBO0VBQ0EsbUJBc0dxQjtFQXJHckIsbUJBcUcwQjtFQXBHMUIsdUJBb0drQztFQUNsQyx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQzFCRjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBMUhXO0VBMkhYLHdDQUFBO0VBQ0EseUJBN0hTO0VBOEhULDBCQUFBO0FDMUJKO0FENkJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQzNCSjtBRDZCSTtFQUNFLG1CQUFBO0FDM0JOO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQzdCSjtBRCtCSTtFQUNFLG1CQUFBO0FDN0JOO0FBckhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RURZQSxhQUFBO0VBQ0EsbUJDWjRCO0VEYTVCLHFCQ2JpQztFRGNqQyx5QkNkMkM7QUEySDdDO0FBeEhBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0FBMkhGO0FBekhFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBMkhKO0FBdkhBO0VBQ0UsaUJBQUE7QUEwSEY7QUF2SEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VEZEEsYUFBQTtFQUNBLHNCQ2M0QjtFRGI1Qix1QkNhb0M7RURacEMsOEJDWWdEO0FBNkhsRDtBQTNIRTtFQUNFLFdBQUE7RUFDQSx5QkQ3QlM7RUM4QlQsa0JEL0JnQjtBQzRKcEI7QUEzSEk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQTZITjtBQTFISTtFQUNFLFVBQUE7QUE0SE47QUF6SEk7RUFDRSxVQUFBO0FBMkhOIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250YWluZXJzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLm5hdmJhci1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5oMyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5oMyBzcGFuIHtcbiAgY29sb3I6ICM3Mjc2N2Q7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5oYW1idXJnZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnZoO1xuICBsZWZ0OiAxLjUlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDN2aDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGFtYnVyZ2VyIHNwYW4ge1xuICBoZWlnaHQ6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YmJiZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGhlaWdodDogMjElO1xuICB3aWR0aDogODAlO1xufVxuLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA1NSU7XG59XG4uaGFtYnVyZ2VyIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }]; }, { showNavbarEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
    }
    ngOnInit() {
        this.subscribeToSocket();
        this.subscribeToUser();
    }
    ngOnDestroy() {
        this.socketSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
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
        this.socketSubscription = this.socketService
            .listen('updatedText')
            .subscribe((data) => {
            this.textareaValue = data;
        });
    }
    subscribeToUser() {
        this.userSubscription = this.userService
            .getUserObservable()
            .subscribe((user) => {
            if (user) {
                this.textareaValue = user.user.currentText;
            }
        });
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
    } }, directives: [_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_4__["NoteListContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.notes-body[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.notes-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #36393f;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  width: 65%;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  background-color: #36393f;\n  border-radius: 10px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #40444b;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  padding: 7px;\n  color: white;\n  font-size: 17px;\n  white-space: pre-wrap;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n  background-color: #2e3338;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #202225;\n  border: 4px solid transparent;\n  background-clip: padding-box;\n  border-radius: 8px;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 60px;\n  bottom: -50%;\n  font-size: 25px;\n  opacity: 0;\n  transition: 0.35s bottom, 0.2s opacity;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  right: 20px;\n  transition-delay: 0.1s;\n}\n.notes-body[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  bottom: 15px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub3Rlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFzQlI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkNBQUE7QUNwQko7QUR1QkU7RUFDRSxRQUFBO0FDckJKO0FEd0JFO0VBQ0UsY0F2QmE7RUF3QmIsbUJBbENTO0FDWWI7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBM0NRO0FDb0JWO0FEMkJBO0VBQ0UsY0E1Q1c7RUE2Q1gsZUFBQTtFQUNBLGFBQUE7QUN4QkY7QUQwQkU7RUFDRSxjQWhEUTtBQ3dCWjtBRDRCQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN6QkY7QUQ0QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQ0QkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBekVrQjtFQTBFbEIsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDJCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0FDekJKO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLGdFQUFBO0FDekJOO0FENkJFO0VBQ0UsdUJBQUE7QUMzQko7QUQrQkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUM1QkY7QURnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtFQXRHQSxhQUFBO0VBQ0EsbUJBc0dxQjtFQXJHckIsbUJBcUcwQjtFQXBHMUIsdUJBb0drQztFQUNsQyx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQzFCRjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBMUhXO0VBMkhYLHdDQUFBO0VBQ0EseUJBN0hTO0VBOEhULDBCQUFBO0FDMUJKO0FENkJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQzNCSjtBRDZCSTtFQUNFLG1CQUFBO0FDM0JOO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQzdCSjtBRCtCSTtFQUNFLG1CQUFBO0FDN0JOO0FBckhBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RURZQSxhQUFBO0VBQ0EsbUJDWjRCO0VEYTVCLG1CQ2JpQztFRGNqQyx1QkNkeUM7QUEySDNDO0FBeEhBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RURNQSxhQUFBO0VBQ0EsbUJDTjRCO0VETzVCLG1CQ1BpQztFRFFqQyw4QkNSeUM7QUE4SDNDO0FBNUhFO0VBQ0UsWUFBQTtFQUNBLHlCRFpTO0VDYVQsbUJEWlc7RUNhWCx3Q0FBQTtBQThISjtBQTNIRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRHRCUztFQ3VCVCxtQkR0Qlc7QUNtSmY7QUEzSEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkQ5QlM7RUMrQlQsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBNkhOO0FBM0hNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE2SFI7QUExSE07RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTRIUjtBQXpITTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBMkhSO0FBdkhJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUF5SE47QUF2SE07RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUF5SFI7QUFwSE07RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQXNIUiIsImZpbGUiOiJub3Rlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGFpbmVycztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG59XG4ubW9kYWwuc2hvdy1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vdGVzLWJvZHkge1xuICB3aWR0aDogOTclO1xuICBoZWlnaHQ6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm5vdGVzLWJvZHkgPiAqIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM5M2Y7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzMzODtcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI1O1xuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm5vdGVzLWJvZHkgLnRleHQtY29udGFpbmVyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2MHB4O1xuICBib3R0b206IC01MCU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4zNXMgYm90dG9tLCAwLjJzIG9wYWNpdHk7XG59XG4ubm90ZXMtYm9keSAudGV4dC1jb250YWluZXIgaTpudGgtY2hpbGQoMikge1xuICByaWdodDogMjBweDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cbi5ub3Rlcy1ib2R5IC50ZXh0LWNvbnRhaW5lcjpob3ZlciBpIHtcbiAgYm90dG9tOiAxNXB4O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
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
    }
    ngOnInit() {
        this.checkUser();
        this.onLogOut();
    }
    ngOnDestroy() {
        this.socketSubscription.unsubscribe();
    }
    checkUser() {
        const token = this.localStorage.getToken();
        if (token) {
            this.socketService.emit('pageRefresh', token);
            this.socketSubscription = this.socketService
                .listen('initialLanding')
                .subscribe((data) => {
                const user = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"](data);
                this.userService.setUser(user);
            });
        }
    }
    onLogOut() {
        this.socketSubscription = this.socketService
            .listen('appLogOut')
            .subscribe(() => {
            this.router.navigateByUrl('/login');
        });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No symbol or space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Username is taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No symbol or space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.serverResponse.message);
} }
function LoginComponent_small_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No space allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min 5 characters required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_83_Template(rf, ctx) { if (rf & 1) {
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
            };
            const user = new src_app_classes_user__WEBPACK_IMPORTED_MODULE_3__["User"](currentUser);
            console.log(user);
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 97, vars: 25, consts: [[1, "login-body", 3, "ngClass"], [1, "login-header"], [1, "stars-header"], [1, "stars-text"], [1, "stars-container"], ["class", "stars-span", 4, "ngFor", "ngForOf"], [1, "modal-button", "btn", 3, "click"], [1, "fas", "fa-question-circle"], [1, "entry-containers"], [1, "register-container"], [1, "main", 3, "formGroup"], [1, "user-input"], [1, "input-parent"], ["type", "text", "placeholder", "Username", "type", "text", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "formControlName", "username", 3, "keydown"], [4, "ngIf"], [1, "fas", "fa-check-circle", 3, "ngClass"], ["type", "text", "placeholder", "Password", "type", "text", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "formControlName", "password", 3, "keydown"], ["type", "text", "placeholder", "Confirm Password", "type", "text", "autocomplete", "off", "maxlength", "10", "spellcheck", "false", "formControlName", "confirmPassword"], [1, "actions"], ["type", "submit", 1, "btn", 3, "ngClass", "click"], [1, "btn", 3, "click"], [1, "sidebar"], [1, "login-container"], ["type", "text", "autocomplete", "off", "spellcheck", "false", "placeholder", "Username", "formControlName", "loginUsername", 3, "keydown"], ["type", "text", "placeholder", "Password", "type", "text", "autocomplete", "off", "spellcheck", "false", "formControlName", "loginPassword", 3, "keydown"], [1, "registration-response", 3, "ngClass"], [1, "modal", 3, "ngClass", "click"], [1, "modal-body"], [3, "click"], [1, "stars-span"], ["src", "assets/star.svg", "alt", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Why ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "Form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_17_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_small_19_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_small_21_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_24_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_small_25_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_small_26_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_small_31_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_34_listener() { return ctx.onRegisterClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_37_listener() { return ctx.onCancelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "Form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_72_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, LoginComponent_small_73_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, LoginComponent_small_74_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, LoginComponent_small_76_Template, 2, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_Template_input_keydown_79_listener() { return ctx.onInputKeydown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, LoginComponent_small_80_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, LoginComponent_small_81_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, LoginComponent_small_83_Template, 2, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_85_listener() { return ctx.onLoginClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_88_listener() { return ctx.onSignUpClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Your account has been registered! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_93_listener($event) { return ctx.onModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_95_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isRegister ? "show-register" : "show-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").hasError("symbolError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.get("username").hasError("shortError") || ctx.registerForm.get("username").hasError("symbolError") || ctx.serverResponse.status === 204 ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverResponse.status === 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("spaceError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.get("password").hasError("spaceError") || ctx.registerForm.get("password").hasError("shortError") ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confirmPassword").value.length > 0 && ctx.registerForm.get("password").value !== ctx.registerForm.get("confirmPassword").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.registerForm.get("confirmPassword").value.length === 0 || ctx.registerForm.get("password").value !== ctx.registerForm.get("confirmPassword").value ? "invalid-check" : "valid-check");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("loginPassword").hasError("spaceError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("loginPassword").hasError("shortError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.get("loginPassword").hasError("spaceError") || ctx.loginForm.get("loginPassword").hasError("shortError") || ctx.serverResponse.status === 206 ? "invalid-check" : "valid-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverResponse.status === 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.invalid ? "disable-btn" : "enable-btn pop-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showRegisteredMessage ? "show-response" : "hide-response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.shouldShowModal ? "show-modal" : "hide-modal");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n.login-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10vh;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #72767d;\n  letter-spacing: 1px;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 50%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  align-items: center;\n  justify-items: center;\n  align-self: center;\n  position: relative;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n  filter: grayscale(100%);\n}\n.login-header[_ngcontent-%COMP%]   .stars-header[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%]   .stars-span[_ngcontent-%COMP%]   img.light-star[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n}\n.login-header[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.login-header[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(1turn);\n}\n.entry-containers[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.register-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 60vh;\n  background-color: #36393f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.7s transform;\n  -webkit-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 14%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  color: #72767d;\n  font-size: 2rem;\n  font-weight: bolder;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 86%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 50%;\n  position: relative;\n  background-color: #40444b;\n  border-radius: 5px 5px 5px 5px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  border-radius: 5px 5px 5px 5px;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #abe8ab;\n  transition: 0.3s right, 0.3s opacity;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   i.invalid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   i.invalid-check[_ngcontent-%COMP%] {\n  right: -5px;\n  opacity: 0;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   i.valid-check[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   i.valid-check[_ngcontent-%COMP%] {\n  right: 15px;\n  opacity: 1;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .input-parent[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ed5269;\n  top: 115%;\n  left: 0;\n  letter-spacing: 0.8px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.register-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1), .login-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #677bc4;\n}\n.register-container[_ngcontent-%COMP%] {\n  border-radius: 0 10px 10px 0;\n  transform: translateX(-100%);\n}\n.register-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.register-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.login-container[_ngcontent-%COMP%] {\n  border-radius: 10px 0 0 10px;\n}\n.login-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.login-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.show-register[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.show-register[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.show-login[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.show-login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.registration-response[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #abe8ab;\n  padding: 10px 20px;\n  border-radius: 5px;\n  letter-spacing: 0.3s;\n  transition: 0.7s bottom cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.show-response[_ngcontent-%COMP%] {\n  bottom: 5vh;\n}\n.hide-response[_ngcontent-%COMP%] {\n  bottom: -10vh;\n}\n.pop-btn[_ngcontent-%COMP%] {\n  animation: pop-out 2s infinite ease-in-out;\n}\n@keyframes pop-out {\n  0% {\n    transform: scale(0.98);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQXNCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNwQkY7QURzQkU7RUFDRSwyQ0FBQTtBQ3BCSjtBRHVCRTtFQUNFLFFBQUE7QUNyQko7QUR3QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNZYjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNvQlY7QUQyQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtBQ3hCRjtBRDBCRTtFQUNFLGNBaERRO0FDd0JaO0FENEJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3pCRjtBRDRCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF6RWtCO0VBMEVsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDekJGO0FEMkJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUN6Qko7QUQyQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUN6Qk47QUQ2QkU7RUFDRSx1QkFBQTtBQzNCSjtBRCtCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQzVCRjtBRGdDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBdEdBLGFBQUE7RUFDQSxtQkFzR3FCO0VBckdyQixtQkFxRzBCO0VBcEcxQix1QkFvR2tDO0VBQ2xDLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDMUJGO0FENEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkExSFc7RUEySFgsd0NBQUE7RUFDQSx5QkE3SFM7RUE4SFQsMEJBQUE7QUMxQko7QUQ2QkU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDM0JKO0FENkJJO0VBQ0UsbUJBQUE7QUMzQk47QUQrQkU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDN0JKO0FEK0JJO0VBQ0UsbUJBQUE7QUM3Qk47QUFySEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFRFlBLGFBQUE7RUFDQSxzQkNaNEI7RURhNUIsbUJDYm9DO0VEY3BDLHVCQ2Q0QztBQTJIOUM7QUF4SEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VES0EsYUFBQTtFQUNBLG1CQ0w0QjtFRE01QixtQkNOaUM7RURPakMsOEJDUHlDO0FBOEgzQztBQTVIRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VEQUYsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJDRHNDO0VERXRDLHVCQ0Y4QztBQWlJaEQ7QUEvSEk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWlJTjtBQS9ITTtFQUNFLGtCQUFBO0VBQ0EsY0RiRztFQ2NILG1CQUFBO0FBaUlSO0FBN0hJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBK0hOO0FBN0hNO0VEekJKLGFBQUE7RUFDQSxtQkN5QmtDO0VEeEJsQyxtQkN3QnVDO0VEdkJ2Qyx1QkN1QitDO0FBa0lqRDtBQWhJUTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQWtJVjtBQWhJVTtFQUNFLHFCQUFBO0FBa0laO0FBM0hFO0VBQ0UsV0FBQTtBQTZISjtBQTFITTtFQUNFLHdCQUFBO0FBNEhSO0FBdEhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RURyREEsYUFBQTtFQUNBLG1CQ3FENEI7RURwRDVCLG1CQ29EaUM7RURuRGpDLDhCQ21EeUM7QUE0SDNDO0FBekhBOztFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJEMUVXO0VDMkVYLHdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VEaEVBLGFBQUE7RUFDQSxtQkNnRTRCO0VEL0Q1QixtQkMrRGlDO0VEOURqQyx1QkM4RHlDO0FBK0gzQztBQTdIRTs7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFRHJFRixhQUFBO0VBQ0Esc0JDcUU4QjtFRHBFOUIsbUJDb0VzQztFRG5FdEMsNkJDbUU4QztFQUM1QyxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBbUlKO0FBaElFOztFQUNFLFVBQUE7RUFDQSxZQUFBO0VEOUVGLGFBQUE7RUFDQSxzQkM4RThCO0VEN0U5QixtQkM2RXNDO0VENUV0Qyw2QkM0RThDO0FBc0loRDtBQXBJSTs7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQXVJTjtBQXBJTTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUVBLHVDQUFBO0FBc0lSO0FBbklNOztFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0QzR0s7RUM0R0wsb0NBQUE7QUFzSVI7QUFwSVE7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUF1SVY7QUFwSVE7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUF1SVY7QUFuSU07O0VBQ0Usa0JBQUE7RUFDQSxjRDVITztFQzZIUCxTQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0FBc0lSO0FBbElJOztFQUNFLGlCQUFBO0FBcUlOO0FBbklNOztFQUNFLGVBQUE7QUFzSVI7QUFuSU07O0VBQ0UseUJENUlHO0FDa1JYO0FBaElBO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtBQW1JRjtBQWpJRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEakpGLGFBQUE7RUFDQSxtQkNpSjhCO0VEaEo5QixtQkNnSm1DO0VEL0luQyw2QkMrSTJDO0FBc0k3QztBQW5JRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VEdkpGLGFBQUE7RUFDQSxtQkN1SjhCO0VEdEo5QixtQkNzSm1DO0VEckpuQyw2QkNxSjJDO0FBd0k3QztBQXBJQTtFQUNFLDRCQUFBO0FBdUlGO0FBcklFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RURqS0YsYUFBQTtFQUNBLG1CQ2lLOEI7RURoSzlCLG1CQ2dLbUM7RUQvSm5DLDZCQytKMkM7QUEwSTdDO0FBdklFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUR2S0YsYUFBQTtFQUNBLG1CQ3VLOEI7RUR0SzlCLG1CQ3NLbUM7RURyS25DLDZCQ3FLMkM7QUE0STdDO0FBdklFO0VBQ0Usd0JBQUE7QUEwSUo7QUF4SUU7RUFDRSwyQkFBQTtBQTBJSjtBQXJJRTtFQUNFLDRCQUFBO0FBd0lKO0FBdElFO0VBQ0Usd0JBQUE7QUF3SUo7QUFwSUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCRHZNVztFQ3dNWCxrQkFBQTtFQUNBLGtCRC9Na0I7RUNnTmxCLG9CQUFBO0VBQ0EsK0RBQUE7QUF1SUY7QUFwSUE7RUFDRSxXQUFBO0FBdUlGO0FBcElBO0VBQ0UsYUFBQTtBQXVJRjtBQXBJQTtFQUNFLDBDQUFBO0FBdUlGO0FBcElBO0VBQ0U7SUFDRSxzQkFBQTtFQXVJRjtFQXJJQTtJQUNFLHNCQUFBO0VBdUlGO0VBcklBO0lBQ0Usc0JBQUE7RUF1SUY7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250YWluZXJzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLmxvZ2luLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ2luLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIgLnN0YXJzLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNSU7XG59XG4ubG9naW4taGVhZGVyIC5zdGFycy1oZWFkZXIgLnN0YXJzLXRleHQgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzI3NjdkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmxvZ2luLWhlYWRlciAuc3RhcnMtaGVhZGVyIC5zdGFycy1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luLWhlYWRlciAuc3RhcnMtaGVhZGVyIC5zdGFycy1jb250YWluZXIgLnN0YXJzLXNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciAuc3RhcnMtY29udGFpbmVyIC5zdGFycy1zcGFuIGltZyB7XG4gIG1heC13aWR0aDogNjAlO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5sb2dpbi1oZWFkZXIgLnN0YXJzLWhlYWRlciAuc3RhcnMtY29udGFpbmVyIC5zdGFycy1zcGFuIGltZy5saWdodC1zdGFyIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufVxuLmxvZ2luLWhlYWRlciAubW9kYWwtYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4ubG9naW4taGVhZGVyIC5tb2RhbC1idXR0b246aG92ZXIgaSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbn1cblxuLmVudHJ5LWNvbnRhaW5lcnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIsXG4ubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiA2MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjdzIHRyYW5zZm9ybTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuc2lkZWJhcixcbi5sb2dpbi1jb250YWluZXIgLnNpZGViYXIge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBjb2xvcjogIzcyNzY3ZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbixcbi5sb2dpbi1jb250YWluZXIgLm1haW4ge1xuICB3aWR0aDogODYlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50LFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IGlucHV0LFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmlucHV0LXBhcmVudCBpLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjYWJlOGFiO1xuICB0cmFuc2l0aW9uOiAwLjNzIHJpZ2h0LCAwLjNzIG9wYWNpdHk7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgaS5pbnZhbGlkLWNoZWNrLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IGkuaW52YWxpZC1jaGVjayB7XG4gIHJpZ2h0OiAtNXB4O1xuICBvcGFjaXR5OiAwO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IGkudmFsaWQtY2hlY2ssXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5pbnB1dC1wYXJlbnQgaS52YWxpZC1jaGVjayB7XG4gIHJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAxO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IHNtYWxsLFxuLmxvZ2luLWNvbnRhaW5lciAubWFpbiAuaW5wdXQtcGFyZW50IHNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2VkNTI2OTtcbiAgdG9wOiAxMTUlO1xuICBsZWZ0OiAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5tYWluIC5idG4sXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5idG4ge1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmJ0biBoNCxcbi5sb2dpbi1jb250YWluZXIgLm1haW4gLmJ0biBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLm1haW4gLmJ0bjpudGgtY2hpbGQoMSksXG4ubG9naW4tY29udGFpbmVyIC5tYWluIC5idG46bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3N2JjNDtcbn1cblxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC51c2VyLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmFjdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbn1cbi5sb2dpbi1jb250YWluZXIgLnVzZXItaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmxvZ2luLWNvbnRhaW5lciAuYWN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zaG93LXJlZ2lzdGVyIC5yZWdpc3Rlci1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4uc2hvdy1yZWdpc3RlciAubG9naW4tY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2hvdy1sb2dpbiAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbi5zaG93LWxvZ2luIC5sb2dpbi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5yZWdpc3RyYXRpb24tcmVzcG9uc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJlOGFiO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuN3MgYm90dG9tIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLnNob3ctcmVzcG9uc2Uge1xuICBib3R0b206IDV2aDtcbn1cblxuLmhpZGUtcmVzcG9uc2Uge1xuICBib3R0b206IC0xMHZoO1xufVxuXG4ucG9wLWJ0biB7XG4gIGFuaW1hdGlvbjogcG9wLW91dCAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBwb3Atb3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbn0iXX0= */"] });
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
/*! exports provided: validateUsername, validatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUsername", function() { return validateUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/login.service */ "TAW8");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_files_container_files_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/files-container/files-container.component */ "jy3j");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/navbar/navbar.component */ "M8l/");
/* harmony import */ var _components_home_notes_container_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/notes-container/note-list-container/note-list-container.component */ "wVm/");
/* harmony import */ var _components_home_notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/notes-container/notes-container.component */ "MecD");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _custom_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-pipe/safe-url.pipe */ "yRhO");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/stars/stars.component */ "uAVx");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], useClass: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_home_notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_10__["NotesContainerComponent"],
        _components_home_files_container_files_container_component__WEBPACK_IMPORTED_MODULE_6__["FilesContainerComponent"],
        _components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _components_home_notes_container_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_9__["NoteListContainerComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _custom_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_12__["SafeUrlPipe"],
        _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_13__["StarsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_home_notes_container_notes_container_component__WEBPACK_IMPORTED_MODULE_10__["NotesContainerComponent"],
                    _components_home_files_container_files_container_component__WEBPACK_IMPORTED_MODULE_6__["FilesContainerComponent"],
                    _components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _components_home_notes_container_note_list_container_note_list_container_component__WEBPACK_IMPORTED_MODULE_9__["NoteListContainerComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _custom_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_12__["SafeUrlPipe"],
                    _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_13__["StarsComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
                providers: [{ provide: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], useClass: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FilesContainerComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function FilesContainerComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOCKED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r7 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteFile(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r7 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.toggleLock(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_1_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r7 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.toggleLock(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_div_7_div_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const file_r6 = ctx.$implicit; const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.downloadFile(file_r6, _r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", file_r6.isLocked ? "locked-ui" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", file_r6.isLocked ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !file_r6.isLocked ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.fileService.formatBytes(file_r6.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("download", file_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", file_r6.innerHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r6.name);
} }
function FilesContainerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilesContainerComponent_div_7_div_1_Template, 13, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.files);
} }
function FilesContainerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No files added yet \uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FilesContainerComponent {
    constructor(fileService) {
        this.fileService = fileService;
    }
    ngOnInit() {
        this.subscribeToFile();
    }
    ngOnDestroy() {
        this.fileSubscription.unsubscribe();
    }
    onFileInput(newFiles) {
        this.fileService.addFiles(newFiles);
    }
    deleteFile(index) {
        this.fileService.deleteFile(index);
    }
    clearFiles() {
        this.fileService.clearFiles();
    }
    toggleLock(index) {
        this.fileService.toggleLock(index);
    }
    downloadFile(file, anchorTag) {
        // [href]="file.base64 | safeUrl"
        anchorTag.href = file.base64;
        setTimeout(() => {
            anchorTag.href = '';
        }, 200);
    }
    subscribeToFile() {
        this.fileSubscription = this.fileService
            .getFilesObservable()
            .subscribe((newFiles) => {
            this.files = newFiles;
        });
    }
}
FilesContainerComponent.ɵfac = function FilesContainerComponent_Factory(t) { return new (t || FilesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_files_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"])); };
FilesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilesContainerComponent, selectors: [["app-files-container"]], decls: 10, vars: 4, consts: [[1, "files-body"], [1, "controls"], [1, "fas", "fa-plus-square", "icon", 3, "click"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "fas", "fa-trash", 3, "ngClass", "click"], ["class", "fas fa-arrow-circle-up icon arrow-up", 4, "ngIf"], ["class", "files-container", 4, "ngIf", "ngIfElse"], ["showEmptyFile", ""], [1, "fas", "fa-arrow-circle-up", "icon", "arrow-up"], [1, "files-container"], ["class", "file-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "file-item", 3, "ngClass"], [1, "locked-text"], [1, "fas", "fa-times-circle", "icon", "delete-file-icon", 3, "click"], [1, "fas", "fa-lock", "icon", "lock-icon", "is-lock", 3, "click"], [1, "fas", "fa-lock-open", "icon", "lock-icon", 3, "click"], [1, "file-size"], [1, "img-container", 3, "download", "innerHtml", "click"], ["downloadTag", ""], [1, "details-container"], [1, "empty-container"]], template: function FilesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilesContainerComponent_Template_input_change_3_listener($event) { return ctx.onFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesContainerComponent_Template_i_click_5_listener() { return ctx.clearFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilesContainerComponent_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilesContainerComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilesContainerComponent_ng_template_8_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.files.length > 0 ? "icon" : "disable-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length > 0)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n* ::-webkit-scrollbar {\n  width: 0;\n}\n*::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon:hover {\n  color: #dcddde;\n}\n.disable-icon {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn h4 {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn h4 i {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn:active {\n  filter: brightness(1.2);\n}\n.disable-btn {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal .modal-body {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal .modal-body {\n  transform: scale(1);\n}\n.modal.hide-modal {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal .modal-body {\n  transform: scale(0);\n}\n:host {\n  width: 100%;\n  height: 47%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 15px;\n}\n.files-body {\n  width: 97%;\n  height: 90%;\n  background-color: #36393f;\n  border-radius: 10px;\n  position: relative;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .controls {\n  height: 6vh;\n  position: absolute;\n  top: -3vh;\n  right: 20px;\n  border-radius: 5px;\n  border: 1px solid #32353b;\n  background-color: #40444b;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 5;\n}\n.files-body .controls i {\n  font-size: 18px;\n  margin: 0 10px;\n}\n.files-body .controls .arrow-up {\n  position: absolute;\n  left: 20px;\n  margin: 0;\n  animation: move-up-arrow 2s ease-out infinite;\n  color: #72767d;\n  pointer-events: none;\n}\n.files-body .files-container {\n  width: calc(100% - 26px);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-snap-type: x mandatory;\n}\n.files-body .files-container::-webkit-scrollbar {\n  height: 0;\n}\n.files-body .files-container .file-item {\n  max-width: 22vw;\n  min-width: 22vw;\n  height: 90%;\n  margin-left: 13px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0 5px;\n  cursor: pointer;\n  transition: 0.2s background-color;\n  transform-origin: top;\n  position: relative;\n  scroll-snap-align: start;\n}\n.files-body .files-container .file-item.locked-ui {\n  background-color: #3b3d44;\n}\n.files-body .files-container .file-item.locked-ui .locked-text {\n  opacity: 1;\n  top: 50%;\n}\n.files-body .files-container .file-item:active {\n  filter: brightness(1.2);\n}\n.files-body .files-container .file-item:hover {\n  background-color: #2f3136;\n}\n.files-body .files-container .file-item:hover .delete-file-icon {\n  top: 5px;\n  right: 5px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.files-body .files-container .file-item:hover .lock-icon {\n  bottom: 8px;\n  right: 5px;\n  opacity: 0.4;\n  pointer-events: auto;\n}\n.files-body .files-container .file-item:hover .lock-icon.is-lock {\n  opacity: 1;\n}\n.files-body .files-container .file-item:hover .file-size {\n  opacity: 1;\n  top: 50%;\n}\n.files-body .files-container .file-item:hover .img-container .icon {\n  color: #dcddde;\n}\n.files-body .files-container .file-item .delete-file-icon {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  opacity: 0;\n  transition: 0.4s right, 0.4s top, 0.3s opacity;\n  pointer-events: none;\n}\n.files-body .files-container .file-item .lock-icon {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  opacity: 0;\n  transition: 0.4s right, 0.4s bottom, 0.3s opacity;\n  pointer-events: none;\n  transform: scaleX(-1);\n}\n.files-body .files-container .file-item .locked-text {\n  position: absolute;\n  top: 60%;\n  left: -1px;\n  transform: translate(0%, -50%);\n  writing-mode: vertical-lr;\n  font-weight: 900;\n  color: #63676d;\n  opacity: 0;\n  font-size: 20px;\n  transition: 0.3s opacity, 0.6s top;\n  letter-spacing: 1px;\n  cursor: auto;\n}\n.files-body .files-container .file-item .file-size {\n  position: absolute;\n  top: 40%;\n  right: -1px;\n  transform: translate(0%, -50%) rotate(180deg);\n  writing-mode: vertical-lr;\n  font-weight: 900;\n  color: #63676d;\n  opacity: 0;\n  font-size: 20px;\n  transition: 0.3s opacity, 0.6s top;\n  letter-spacing: 1px;\n  cursor: auto;\n}\n.files-body .files-container .file-item .img-container {\n  width: 80%;\n  height: 85%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .files-container .file-item .img-container .img-html {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 5px;\n  z-index: 3;\n}\n.files-body .files-container .file-item .img-container .icon {\n  font-size: 145px;\n  transition: 0.3s color;\n}\n.files-body .files-container .file-item .img-container .other-icon {\n  position: relative;\n}\n.files-body .files-container .file-item .img-container .other-icon::after {\n  content: \"?\";\n  color: #2f3136;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -35%) scale(1.2, 1.1);\n  font-size: 90px;\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n.files-body .files-container .file-item .details-container {\n  width: 80%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .files-container .file-item .details-container p {\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #b9bbbe;\n}\n.files-body .empty-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.files-body .empty-container h4 {\n  letter-spacing: 0.7px;\n  color: #72767d;\n}\n@keyframes move-up-arrow {\n  0% {\n    bottom: -120%;\n  }\n  50% {\n    bottom: -90%;\n  }\n  100% {\n    bottom: -120%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxmaWxlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUNDQSw4RkFBQTtBRHFCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNuQkY7QURxQkU7RUFDRSwyQ0FBQTtBQ25CSjtBRHNCRTtFQUNFLFFBQUE7QUNwQko7QUR1QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNhYjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNxQlY7QUQwQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtBQ3ZCRjtBRHlCRTtFQUNFLGNBaERRO0FDeUJaO0FEMkJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3hCRjtBRDJCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3hCRjtBRDJCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF6RWtCO0VBMEVsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDeEJGO0FEMEJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUN4Qko7QUQwQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUN4Qk47QUQ0QkU7RUFDRSx1QkFBQTtBQzFCSjtBRDhCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQzNCRjtBRCtCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBdEdBLGFBQUE7RUFDQSxtQkFzR3FCO0VBckdyQixtQkFxRzBCO0VBcEcxQix1QkFvR2tDO0VBQ2xDLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDekJGO0FEMkJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkExSFc7RUEySFgsd0NBQUE7RUFDQSx5QkE3SFM7RUE4SFQsMEJBQUE7QUN6Qko7QUQ0QkU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDMUJKO0FENEJJO0VBQ0UsbUJBQUE7QUMxQk47QUQ4QkU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDNUJKO0FEOEJJO0VBQ0UsbUJBQUE7QUM1Qk47QUFySEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFRFdBLGFBQUE7RUFDQSxtQkNYNEI7RURZNUIscUJDWmlDO0VEYWpDLHVCQ2IyQztFQUMzQyxvQkFBQTtBQTJIRjtBQXhIQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJEVlc7RUNXWCxtQkRWYTtFQ1diLGtCQUFBO0VBQ0Esd0NBQUE7RURBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNEaUM7RURFakMsdUJDRnlDO0FBOEgzQztBQTVIRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JEbkJnQjtFQ29CaEIseUJBQUE7RUFDQSx5QkFBQTtFRFZGLGFBQUE7RUFDQSxtQkNVOEI7RURUOUIsbUJDU21DO0VEUm5DLHVCQ1EyQztFQUN6QyxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0FBaUlKO0FBL0hJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFpSU47QUE5SEk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFnSU47QUE1SEU7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RURqQ0YsYUFBQTtFQUNBLG1CQ2lDOEI7RURoQzlCLG1CQ2dDbUM7RUQvQm5DLDJCQytCMkM7RUFDekMsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBaUlKO0FBL0hJO0VBQ0UsU0FBQTtBQWlJTjtBQTlISTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JEM0RjO0VBV2xCLGFBQUE7RUFDQSxzQkNnRGdDO0VEL0NoQyxtQkMrQ3dDO0VEOUN4Qyw2QkM4Q2dEO0VBQzVDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFtSU47QUFqSU07RUFDRSx5QkFBQTtBQW1JUjtBQWpJUTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FBbUlWO0FBL0hNO0VBQ0UsdUJBQUE7QUFpSVI7QUE5SE07RUFDRSx5QkFBQTtBQWdJUjtBQTlIUTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBZ0lWO0FBN0hRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUErSFY7QUE3SFU7RUFDRSxVQUFBO0FBK0haO0FBM0hRO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUE2SFY7QUExSFE7RUFDRSxjRDFHRTtBQ3NPWjtBQXhITTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQTBIUjtBQXZITTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBeUhSO0FBdEhNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBd0hSO0FBckhNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdUhSO0FBcEhNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUR4Sk4sYUFBQTtFQUNBLG1CQ3dKa0M7RUR2SmxDLG1CQ3VKdUM7RUR0SnZDLHVCQ3NKK0M7QUF5SGpEO0FBdkhRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JEektVO0VDMEtWLFVBQUE7QUF5SFY7QUF0SFE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBd0hWO0FBckhRO0VBQ0Usa0JBQUE7QUF1SFY7QUFySFU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQXVIWjtBQWxITTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VEekxOLGFBQUE7RUFDQSxtQkN5TGtDO0VEeExsQyxtQkN3THVDO0VEdkx2Qyx1QkN1TCtDO0FBdUhqRDtBQXJIUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRDNNRztBQ2tVYjtBQWpIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VEek1GLGFBQUE7RUFDQSxzQkN5TThCO0VEeE05QixtQkN3TXNDO0VEdk10Qyx1QkN1TThDO0FBc0hoRDtBQXBISTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQXNITjtBQWpIQTtFQUNFO0lBQ0UsYUFBQTtFQW9IRjtFQWxIQTtJQUNFLFlBQUE7RUFvSEY7RUFsSEE7SUFDRSxhQUFBO0VBb0hGO0FBQ0YiLCJmaWxlIjoiZmlsZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuJG1haW5Ca2c6ICMyZjMxMzY7XHJcbiRjb250YWluZXJzOiAjMzYzOTNmO1xyXG4kYm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kc21hbGxCb3JkZXJSYWRpdXM6IDVweDtcclxuJGl0ZW1Ob3JtYWw6ICNiOWJiYmU7XHJcbiRpdGVtSG92ZXI6ICNkY2RkZGU7XHJcbiRtb2RhbEJrZzogIzE4MTkxYztcclxuJGJ0bkNvbG9yOiAjNjc3YmM0O1xyXG4kaW52YWxpZENvbG9yOiAjZWQ1MjY5O1xyXG4kdmFsaWRDb2xvcjogI2FiZThhYjtcclxuJGZhZGVUZXh0OiAjNzI3NjdkO1xyXG4kc2VsZWN0aW9uQ29sb3I6ICM4MTY3YTk7XHJcblxyXG5AbWl4aW4gZGlzcGxheUZsZXgoJGRpciwgJGFsaWduLCAkanVzdGlmeSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXI7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmOm5vdChpKSB7XHJcbiAgICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6c2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAkc2VsZWN0aW9uQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGFpbmVycztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Ca2c7XHJcbn1cclxuXHJcbi8vIGdsb2JhbFxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRpdGVtTm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaXRlbUhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtaWNvbiB7XHJcbiAgY29sb3I6ICNiOWJiYmU7XHJcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ0NGI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAkc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IDAuMTVzIG9wYWNpdHk7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmVuYWJsZS1idG4ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLy8gbW9kYWxcclxuLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XHJcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRhaW5lcnM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcclxuICB9XHJcblxyXG4gICYuc2hvdy1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5oaWRlLW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiIGFzIHN0eWxlcztcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDclO1xyXG4gIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChyb3csIGZsZXgtZW5kLCBjZW50ZXIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZmlsZXMtYm9keSB7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdHlsZXMuJGNvbnRhaW5lcnM7XHJcbiAgYm9yZGVyLXJhZGl1czogc3R5bGVzLiRib3JkZXJSYWRpdXM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAuY29udHJvbHMge1xyXG4gICAgaGVpZ2h0OiA2dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zdmg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IHN0eWxlcy4kc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzNTNiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxuICAgIEBpbmNsdWRlIHN0eWxlcy5kaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LXVwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZS11cC1hcnJvdyAycyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICAgICAgY29sb3I6ICM3Mjc2N2Q7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpbGVzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGZsZXgtc3RhcnQpO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLWl0ZW0ge1xyXG4gICAgICBtYXgtd2lkdGg6IDIydnc7XHJcbiAgICAgIG1pbi13aWR0aDogMjJ2dztcclxuICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiBzdHlsZXMuJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gICAgICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgoY29sdW1uLCBjZW50ZXIsIHNwYWNlLWV2ZW5seSk7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuXHJcbiAgICAgICYubG9ja2VkLXVpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZDQ0O1xyXG5cclxuICAgICAgICAubG9ja2VkLXRleHQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xyXG5cclxuICAgICAgICAuZGVsZXRlLWZpbGUtaWNvbiB7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9jay1pY29uIHtcclxuICAgICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cclxuICAgICAgICAgICYuaXMtbG9jayB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsZS1zaXplIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWctY29udGFpbmVyIC5pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBzdHlsZXMuJGl0ZW1Ib3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGUtZmlsZS1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyByaWdodCwgMC40cyB0b3AsIDAuM3Mgb3BhY2l0eTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvY2staWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLThweDtcclxuICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgcmlnaHQsIDAuNHMgYm90dG9tLCAwLjNzIG9wYWNpdHk7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9ja2VkLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDYwJTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICM2MzY3NmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5LCAwLjZzIHRvcDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZpbGUtc2l6ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICM2MzY3NmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5LCAwLjZzIHRvcDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAgICAgICAuaW1nLWh0bWwge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHN0eWxlcy4kc21hbGxCb3JkZXJSYWRpdXM7XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNDVweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3RoZXItaWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIj9cIjtcclxuICAgICAgICAgICAgY29sb3I6ICMyZjMxMzY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTM1JSkgc2NhbGUoMS4yLCAxLjEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBAaW5jbHVkZSBzdHlsZXMuZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGNvbG9yOiBzdHlsZXMuJGl0ZW1Ob3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgc3R5bGVzLmRpc3BsYXlGbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgICBjb2xvcjogIzcyNzY3ZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZS11cC1hcnJvdyB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAtMTIwJTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJvdHRvbTogLTkwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3R0b206IC0xMjAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-files-container',
                templateUrl: './files-container.component.html',
                styleUrls: ['./files-container.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_services_files_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"] }]; }, null); })();


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
/* harmony import */ var src_app_services_files_inner_html_inner_html_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/files/inner-html/inner-html.service */ "Harg");




class FilesService {
    constructor(innerHtmlService) {
        this.innerHtmlService = innerHtmlService;
        this.files = [];
        this.fileSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.files);
    }
    getFilesObservable() {
        return this.fileSubscription.asObservable();
    }
    addFiles(newFiles) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < newFiles.length; i++) {
            this.getBase64(newFiles[i])
                .then((imageData) => {
                this.files.push({
                    isLocked: false,
                    base64: imageData,
                    size: newFiles[i].size,
                    name: newFiles[i].name,
                    // date: newFiles[i].lastModified,
                    innerHtml: this.innerHtmlService.getInnerHTML(imageData, newFiles[i].name),
                });
            })
                .catch((error) => console.log(error));
        }
        this.fileSubscription.next(this.files);
    }
    deleteFile(index) {
        if (!this.files[index].isLocked) {
            this.files.splice(index, 1);
            this.fileSubscription.next(this.files);
        }
    }
    clearFiles() {
        this.files = this.files.filter((value) => {
            return value.isLocked;
        });
        this.fileSubscription.next(this.files);
    }
    toggleLock(index) {
        this.files[index].isLocked = !this.files[index].isLocked;
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
FilesService.ɵfac = function FilesService_Factory(t) { return new (t || FilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_files_inner_html_inner_html_service__WEBPACK_IMPORTED_MODULE_2__["InnerHtmlService"])); };
FilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilesService, factory: FilesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: src_app_services_files_inner_html_inner_html_service__WEBPACK_IMPORTED_MODULE_2__["InnerHtmlService"] }]; }, null); })();


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
        console.log(this.noteArray);
        const index = this.noteArray.indexOf(note);
        this.noteArray.splice(index, 1);
        // save to server
        this.saveNote();
    }
    saveCurrentText(text) {
        const socketData = {
            token: this.currentUser.getToken(),
            text,
        };
        this.socket.emit('updateText', socketData);
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
    }
    ngOnInit() {
        this.subscribeToUser();
        this.subscribeToSocket();
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
        this.socketSubscription.unsubscribe();
    }
    subscribeToUser() {
        this.userSubscription = this.userService
            .getUserObservable()
            .subscribe((newUser) => {
            if (newUser) {
                setTimeout(() => {
                    this.fillStarRating(newUser.user.stars);
                }, 100);
            }
        });
    }
    subscribeToSocket() {
        this.socketSubscription = this.socketService
            .listen('updatedStars')
            .subscribe((newStars) => {
            this.fillStarRating(newStars);
        });
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
            startVelocity: 90,
            angle: 55,
            spread: 55,
            ticks: 400,
            origin: {
                x: 0.08,
                y: 0.5,
            },
        });
    }
    get svgStars() {
        return this.elementRef.nativeElement.querySelectorAll('.star-span img');
    }
}
StarsComponent.ɵfac = function StarsComponent_Factory(t) { return new (t || StarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
StarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarsComponent, selectors: [["app-stars"]], decls: 2, vars: 1, consts: [[1, "main-star"], ["class", "star-span", 4, "ngFor", "ngForOf"], [1, "star-span"], ["src", "assets/star.svg", "alt", "", 3, "mouseover", "click", "mouseleave"]], template: function StarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarsComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n.main-star[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 100%;\n  align-items: flex-start;\n  justify-items: center;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80%;\n  cursor: pointer;\n  filter: grayscale(100%);\n  transition: 0.2s transform ease-out, 0.3s filter;\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img.hover-star[_ngcontent-%COMP%] {\n  filter: grayscale(70%);\n  transform: scale(1.15) rotate(45deg);\n}\n.main-star[_ngcontent-%COMP%]   .star-span[_ngcontent-%COMP%]   img.selected-stars[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n  transform: scale(1.05) rotate(-217deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdGFycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQXNCUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNwQkY7QURzQkU7RUFDRSwyQ0FBQTtBQ3BCSjtBRHVCRTtFQUNFLFFBQUE7QUNyQko7QUR3QkU7RUFDRSxjQXZCYTtFQXdCYixtQkFsQ1M7QUNZYjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEzQ1E7QUNvQlY7QUQyQkE7RUFDRSxjQTVDVztFQTZDWCxlQUFBO0VBQ0EsYUFBQTtBQ3hCRjtBRDBCRTtFQUNFLGNBaERRO0FDd0JaO0FENEJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3pCRjtBRDRCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkF6RWtCO0VBMEVsQixjQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FDekJGO0FEMkJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUN6Qko7QUQyQkk7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7QUN6Qk47QUQ2QkU7RUFDRSx1QkFBQTtBQzNCSjtBRCtCQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQzVCRjtBRGdDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdFQUFBO0VBdEdBLGFBQUE7RUFDQSxtQkFzR3FCO0VBckdyQixtQkFxRzBCO0VBcEcxQix1QkFvR2tDO0VBQ2xDLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDMUJGO0FENEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkExSFc7RUEySFgsd0NBQUE7RUFDQSx5QkE3SFM7RUE4SFQsMEJBQUE7QUMxQko7QUQ2QkU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDM0JKO0FENkJJO0VBQ0UsbUJBQUE7QUMzQk47QUQrQkU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDN0JKO0FEK0JJO0VBQ0UsbUJBQUE7QUM3Qk47QUFySEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtBQXVIRjtBQXJIRTtFRElBLGFBQUE7RUFDQSxtQkNKOEI7RURLOUIsbUJDTG1DO0VETW5DLHVCQ04yQztBQTBIN0M7QUF4SEk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7QUEwSE47QUF4SE07RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0FBMEhSO0FBdkhNO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtBQXlIUiIsImZpbGUiOiJzdGFycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRtYWluQmtnOiAjMmYzMTM2O1xyXG4kY29udGFpbmVyczogIzM2MzkzZjtcclxuJGJvcmRlclJhZGl1czogMTBweDtcclxuJHNtYWxsQm9yZGVyUmFkaXVzOiA1cHg7XHJcbiRpdGVtTm9ybWFsOiAjYjliYmJlO1xyXG4kaXRlbUhvdmVyOiAjZGNkZGRlO1xyXG4kbW9kYWxCa2c6ICMxODE5MWM7XHJcbiRidG5Db2xvcjogIzY3N2JjNDtcclxuJGludmFsaWRDb2xvcjogI2VkNTI2OTtcclxuJHZhbGlkQ29sb3I6ICNhYmU4YWI7XHJcbiRmYWRlVGV4dDogIzcyNzY3ZDtcclxuJHNlbGVjdGlvbkNvbG9yOiAjODE2N2E5O1xyXG5cclxuQG1peGluIGRpc3BsYXlGbGV4KCRkaXIsICRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gICY6OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogJHNlbGVjdGlvbkNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRhaW5lcnM7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQmtnO1xyXG59XHJcblxyXG4vLyBnbG9iYWxcclxuLmljb24ge1xyXG4gIGNvbG9yOiAkaXRlbU5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJGl0ZW1Ib3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWljb24ge1xyXG4gIGNvbG9yOiAjYjliYmJlO1xyXG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsQm9yZGVyUmFkaXVzO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODcyN2Y7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5lbmFibGUtYnRuIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vIG1vZGFsXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIG9wYWNpdHksIDAuNXMgY2xpcC1wYXRoO1xyXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250YWluZXJzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XHJcbiAgfVxyXG5cclxuICAmLnNob3ctbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZS1tb2RhbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XHJcblxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpub3QoaSkge1xuICBmb250LWZhbWlseTogXCJCYXJsb3cgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbio6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjODE2N2E5O1xuICBiYWNrZ3JvdW5kOiAjMzYzOTNmO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZGNkZGRlO1xufVxuXG4uZGlzYWJsZS1pY29uIHtcbiAgY29sb3I6ICNiOWJiYmU7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xufVxuXG4uYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBvcGFjaXR5O1xufVxuLmJ0biBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5idG4gaDQgaSB7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uYnRuOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uZGlzYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZW5hYmxlLWJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNmO1xuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5zaG93LW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMwJSBhdCA1MCUgNTAlKTtcbn1cbi5tb2RhbC5oaWRlLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLm1haW4tc3RhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLXN0YXIgLnN0YXItc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW4tc3RhciAuc3Rhci1zcGFuIGltZyB7XG4gIG1heC13aWR0aDogODAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICB0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybSBlYXNlLW91dCwgMC4zcyBmaWx0ZXI7XG59XG4ubWFpbi1zdGFyIC5zdGFyLXNwYW4gaW1nLmhvdmVyLXN0YXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpIHJvdGF0ZSg0NWRlZyk7XG59XG4ubWFpbi1zdGFyIC5zdGFyLXNwYW4gaW1nLnNlbGVjdGVkLXN0YXJzIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSgtMjE3ZGVnKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stars',
                templateUrl: './stars.component.html',
                styleUrls: ['./stars.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_web_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


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
        this.noteService.saveCurrentText(note.text);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%]::selection {\n  color: #8167a9;\n  background: #36393f;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #2f3136;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  cursor: pointer;\n  outline: none;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: #dcddde;\n}\n.disable-icon[_ngcontent-%COMP%] {\n  color: #b9bbbe;\n  opacity: 0.3 !important;\n  cursor: initial;\n}\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0 5px;\n  background-color: #40444b;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  padding: 6px 0;\n  background-color: #68727f;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  transition: 0.15s opacity;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0.3px;\n}\n.btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.btn[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.disable-btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.enable-btn[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transition: 0.4s opacity, 0.5s -webkit-clip-path;\n  transition: 0.4s opacity, 0.5s clip-path;\n  transition: 0.4s opacity, 0.5s clip-path, 0.5s -webkit-clip-path;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 100;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 70vh;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  background-color: #36393f;\n  transition: 0.3s transform;\n}\n.modal.show-modal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n  -webkit-clip-path: circle(100% at 50% 50%);\n          clip-path: circle(100% at 50% 50%);\n}\n.modal.show-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.modal.hide-modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n  -webkit-clip-path: circle(30% at 50% 50%);\n          clip-path: circle(30% at 50% 50%);\n}\n.modal.hide-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n[_nghost-%COMP%] {\n  width: 32%;\n}\n.list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 70%;\n  background-color: #40444b;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 83%;\n  height: 100%;\n  border-radius: 5px 0 0 5px;\n}\n.list-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 17%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n  padding: 15px 0;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  width: 92%;\n  padding: 2px 6px;\n  background-color: #2f3136;\n  border-radius: 5px;\n  text-overflow: ellipsis;\n  position: relative;\n  margin: 0 auto;\n  white-space: pre-wrap;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 10px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:active {\n  filter: brightness(1.2);\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 100%;\n  transform: translateX(-25%);\n  z-index: -1;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  min-height: 6vh;\n  max-height: 10vh;\n  transition: 0.2s width;\n  cursor: pointer;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 2px;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  font-weight: 900;\n  color: #63676d;\n  font-size: 13px;\n  opacity: 0;\n  transition: 0.3s opacity, 0.4s left;\n  cursor: auto;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: justify;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-control[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 31px;\n  position: absolute;\n  top: 50%;\n  right: -10%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: 0.1s width, 0.4s right, 0.2s opacity;\n  opacity: 0;\n  pointer-events: none;\n  font-size: 19px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-item-p[_ngcontent-%COMP%] {\n  width: 88%;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-item-p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 1;\n  left: -6px;\n}\n.list-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   .list-control[_ngcontent-%COMP%] {\n  width: 10%;\n  right: 4px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.empty-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  letter-spacing: 0.7px;\n  color: #72767d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub3RlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBc0JSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ3BCRjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEdUJFO0VBQ0UsUUFBQTtBQ3JCSjtBRHdCRTtFQUNFLGNBdkJhO0VBd0JiLG1CQWxDUztBQ1liO0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTNDUTtBQ29CVjtBRDJCQTtFQUNFLGNBNUNXO0VBNkNYLGVBQUE7RUFDQSxhQUFBO0FDeEJGO0FEMEJFO0VBQ0UsY0FoRFE7QUN3Qlo7QUQ0QkE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDekJGO0FENEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQXpFa0I7RUEwRWxCLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7QUN6QkY7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtBQ3pCSjtBRDJCSTtFQUNFLGFBQUE7RUFDQSxnRUFBQTtBQ3pCTjtBRDZCRTtFQUNFLHVCQUFBO0FDM0JKO0FEK0JBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDNUJGO0FEK0JBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0VBQUE7RUF0R0EsYUFBQTtFQUNBLG1CQXNHcUI7RUFyR3JCLG1CQXFHMEI7RUFwRzFCLHVCQW9Ha0M7RUFDbEMseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUMxQkY7QUQ0QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQTFIVztFQTJIWCx3Q0FBQTtFQUNBLHlCQTdIUztFQThIVCwwQkFBQTtBQzFCSjtBRDZCRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUMzQko7QUQ2Qkk7RUFDRSxtQkFBQTtBQzNCTjtBRCtCRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUM3Qko7QUQrQkk7RUFDRSxtQkFBQTtBQzdCTjtBQXJIQTtFQUNFLFVBQUE7QUF3SEY7QUFySEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXdIRjtBQXRIRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VESUYsYUFBQTtFQUNBLG1CQ0o4QjtFREs5QixtQkNMbUM7RURNbkMsdUJDTjJDO0FBMkg3QztBQXpISTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkRkYztFQVdsQixhQUFBO0VBQ0EsbUJDR2dDO0VERmhDLG1CQ0VxQztFRERyQyx1QkNDNkM7QUE4SC9DO0FBNUhNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQThIUjtBQTNITTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VEZE4sYUFBQTtFQUNBLG1CQ2NrQztFRGJsQyxtQkNhdUM7RURadkMsdUJDWStDO0FBZ0lqRDtBQTNIRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTZISjtBQTNISTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JENUNjO0VDNkNkLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUE0SE47QUExSE07RUFDRSxtQkFBQTtBQTRIUjtBQXpITTtFQUNFLHVCQUFBO0FBMkhSO0FBeEhNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQTBIUjtBQXZITTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUF5SFI7QUF2SFE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBQXlIVjtBQXRIUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXdIVjtBQXBITTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VENUZOLGFBQUE7RUFDQSxtQkM0RmtDO0VEM0ZsQyxtQkMyRnVDO0VEMUZ2Qyx1QkMwRitDO0VBQ3pDLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQXlIUjtBQXJIUTtFQUNFLFVBQUE7QUF1SFY7QUFySFU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQXVIWjtBQXBIUTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBc0hWO0FBL0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUQxSEEsYUFBQTtFQUNBLHNCQzBINEI7RUR6SDVCLG1CQ3lIb0M7RUR4SHBDLHVCQ3dINEM7QUFxSDlDO0FBbkhFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBcUhKIiwiZmlsZSI6Im5vdGUtbGlzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kbWFpbkJrZzogIzJmMzEzNjtcclxuJGNvbnRhaW5lcnM6ICMzNjM5M2Y7XHJcbiRib3JkZXJSYWRpdXM6IDEwcHg7XHJcbiRzbWFsbEJvcmRlclJhZGl1czogNXB4O1xyXG4kaXRlbU5vcm1hbDogI2I5YmJiZTtcclxuJGl0ZW1Ib3ZlcjogI2RjZGRkZTtcclxuJG1vZGFsQmtnOiAjMTgxOTFjO1xyXG4kYnRuQ29sb3I6ICM2NzdiYzQ7XHJcbiRpbnZhbGlkQ29sb3I6ICNlZDUyNjk7XHJcbiR2YWxpZENvbG9yOiAjYWJlOGFiO1xyXG4kZmFkZVRleHQ6ICM3Mjc2N2Q7XHJcbiRzZWxlY3Rpb25Db2xvcjogIzgxNjdhOTtcclxuXHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkZGlyLCAkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICY6bm90KGkpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhcmxvdyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICRzZWxlY3Rpb25Db2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb250YWluZXJzO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkJrZztcclxufVxyXG5cclxuLy8gZ2xvYmFsXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGl0ZW1Ob3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRpdGVtSG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZS1pY29uIHtcclxuICBjb2xvcjogI2I5YmJiZTtcclxuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbEJvcmRlclJhZGl1cztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3MjdmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDFzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZW5hYmxlLWJ0biB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vLyBtb2RhbFxyXG4ubW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBvcGFjaXR5LCAwLjVzIGNsaXAtcGF0aDtcclxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGFpbmVycztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xyXG4gIH1cclxuXHJcbiAgJi5zaG93LW1vZGFsIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwJSBhdCA1MCUgNTAlKTtcclxuXHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmhpZGUtbW9kYWwge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzAlIGF0IDUwJSA1MCUpO1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93IENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xufVxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogIzgxNjdhOTtcbiAgYmFja2dyb3VuZDogIzM2MzkzZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzEzNjtcbn1cblxuLmljb24ge1xuICBjb2xvcjogI2I5YmJiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb246aG92ZXIge1xuICBjb2xvcjogI2RjZGRkZTtcbn1cblxuLmRpc2FibGUtaWNvbiB7XG4gIGNvbG9yOiAjYjliYmJlO1xuICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDQ0Yjtcbn1cblxuLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NzI3ZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogMC4xNXMgb3BhY2l0eTtcbn1cbi5idG4gaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4uYnRuIGg0IGkge1xuICBtYXJnaW46IDAgM3B4O1xuICB0cmFuc2l0aW9uOiAxcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJ0bjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmVuYWJsZS1idG4ge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zaXRpb246IDAuNHMgb3BhY2l0eSwgMC41cyBjbGlwLXBhdGg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZjtcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XG59XG4ubW9kYWwuc2hvdy1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDEwMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuc2hvdy1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzMCUgYXQgNTAlIDUwJSk7XG59XG4ubW9kYWwuaGlkZS1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbjpob3N0IHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5saXN0LWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGlzdC1jb250YWluZXIgLmZpbHRlci1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NDRiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5maWx0ZXItY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogODMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5maWx0ZXItY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2IHtcbiAgd2lkdGg6IDE3JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NSU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW0ge1xuICB3aWR0aDogOTIlO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMTM2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIC5saXN0LWl0ZW0tcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgbWF4LWhlaWdodDogMTB2aDtcbiAgdHJhbnNpdGlvbjogMC4ycyB3aWR0aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtIC5saXN0LWl0ZW0tcCAuZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjNjM2NzZkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eSwgMC40cyBsZWZ0O1xuICBjdXJzb3I6IGF1dG87XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1wIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW0gLmxpc3QtY29udHJvbCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzIHdpZHRoLCAwLjRzIHJpZ2h0LCAwLjJzIG9wYWNpdHk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3RzIC5saXN0LWl0ZW06aG92ZXIgLmxpc3QtaXRlbS1wIHtcbiAgd2lkdGg6IDg4JTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdHMgLmxpc3QtaXRlbTpob3ZlciAubGlzdC1pdGVtLXAgLmRhdGUge1xuICBvcGFjaXR5OiAxO1xuICBsZWZ0OiAtNnB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0cyAubGlzdC1pdGVtOmhvdmVyIC5saXN0LWNvbnRyb2wge1xuICB3aWR0aDogMTAlO1xuICByaWdodDogNHB4O1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmVtcHR5LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5lbXB0eS1saXN0IGg0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xuICBjb2xvcjogIzcyNzY3ZDtcbn0iXX0= */"] });
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+x0C":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-editor/post-editor.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditorComponent", function() { return PostEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder */ "iFvi");
/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css */ "wweU");
/* harmony import */ var src_app_services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase-storage.service */ "GrFz");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


//Map

















const _c0 = ["map"];
function PostEditorComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.percentage, "%");
} }
function PostEditorComponent_div_7_mat_progress_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 23);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.percentage);
} }
function PostEditorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostEditorComponent_div_7_span_2_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostEditorComponent_div_7_mat_progress_bar_3_Template, 1, 1, "mat-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image_loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image_loading);
} }
function PostEditorComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.url_public, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostEditorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostEditorComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search for a location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostEditorComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.isEdit ? "Update" : "Create");
} }
function PostEditorComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There may be a problem with the server. Please try again later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostEditorComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
} }
class PostEditorComponent {
    constructor(_firebaseStorage, _postsService, _snackBar, router, activatedRoute) {
        this._firebaseStorage = _firebaseStorage;
        this._postsService = _postsService;
        this._snackBar = _snackBar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.zoomLevel = 14;
        this.file_message = 'No selected File';
        this.file_name = '';
        this.form_data = new FormData();
        this.url_public = '';
        this.percentage = 0;
        this.isEdit = false;
        this.image_loading = false;
        this.form_loading = false;
        this.invalid_image = false;
        this.invalid_map = false;
        this.systemError = false;
    }
    ngOnInit() {
        this.defineFormGroups();
        this.loadPost();
    }
    ngAfterViewInit() {
        if (!this.isEdit) {
            this.loadMap();
        }
    }
    defineFormGroups() {
        this.newPost = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'image_url': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'lat': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'long': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.form_file = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'newFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    loadPost() {
        this.post_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        // Check if is New or Edit Page
        if (this.post_id) {
            this.isEdit = true;
            this._postsService.getPost(this.post_id).subscribe((post) => {
                this.setPost(post);
                this.loadMap(post);
            });
        }
        else {
            this.isEdit = false;
        }
    }
    setPost(post) {
        this.newPost.get('title').setValue(post === null || post === void 0 ? void 0 : post.title);
        this.newPost.get('content').setValue(post === null || post === void 0 ? void 0 : post.content);
        this.newPost.get('image_url').setValue(post === null || post === void 0 ? void 0 : post.image_url);
        this.map_lat = post === null || post === void 0 ? void 0 : post.lat;
        this.map_long = post === null || post === void 0 ? void 0 : post.long;
        this.url_public = post === null || post === void 0 ? void 0 : post.image_url;
    }
    loadMap(post) {
        if (this.isEdit) {
            this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
                container: this.divMap.nativeElement,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [post === null || post === void 0 ? void 0 : post.long, post === null || post === void 0 ? void 0 : post.lat],
                zoom: this.zoomLevel
            });
            const maker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"]()
                .setLngLat([post === null || post === void 0 ? void 0 : post.long, post === null || post === void 0 ? void 0 : post.lat])
                .addTo(this.map);
        }
        else {
            //Default
            this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
                container: this.divMap.nativeElement,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-3.70379, 40.41678],
                zoom: this.zoomLevel
            });
        }
        var geocoder = new _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default.a({
            accessToken: mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["accessToken"],
            mapboxgl: mapbox_gl__WEBPACK_IMPORTED_MODULE_2__,
        });
        this.map.addControl(geocoder, 'top-left');
        geocoder.on('result', (e) => {
            this.map_long = e.result.geometry.coordinates[0];
            this.map_lat = e.result.geometry.coordinates[1];
            this.invalid_map = false;
        });
    }
    changeFile(event) {
        this.url_public = null;
        this.image_loading = true;
        if (event.target.files.length > 0) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.file_name = event.target.files[i].name;
                this.form_data.delete('newFile');
                this.form_data.append('newFile', event.target.files[i], event.target.files[i].name);
            }
            this.uploadFile();
        }
        else {
            this.image_loading = false;
        }
    }
    //Upload File to Cloud Storage
    uploadFile() {
        let newFile = this.form_data.get('newFile');
        let reference = this._firebaseStorage.referenceCloudStorage(this.file_name);
        let task = this._firebaseStorage.taskCloudStorage(this.file_name, newFile);
        //Cambia el porcentaje
        task.percentageChanges().subscribe((percentage) => {
            this.percentage = Math.round(percentage);
            if (this.percentage == 100) {
                reference.getDownloadURL().subscribe((URL) => {
                    this.url_public = URL;
                    this.image_loading = false;
                    this.invalid_image = false;
                    this.newPost.get('image_url').setValue(URL);
                });
            }
        });
    }
    createPost() {
        this.newPost.get('long').setValue(this.map_long);
        this.newPost.get('lat').setValue(this.map_lat);
        if (this.newPost.valid) {
            this.form_loading = true;
            if (this.isEdit) {
                this._postsService.updatePost(this.newPost.value, this.post_id).subscribe((post) => {
                    this.router.navigate(['/post', post.id]);
                    this._snackBar.open('Post Created', 'Done', {
                        duration: 3000
                    });
                }, (error) => {
                    this.systemError = true;
                });
            }
            {
                this._postsService.createPost(this.newPost.value).subscribe((post) => {
                    this.router.navigate(['/post', post.id]);
                    this._snackBar.open('Post Created', 'Done', {
                        duration: 3000
                    });
                }, (error) => {
                    this.systemError = true;
                });
            }
        }
        {
            this.form_loading = false;
            if (!this.newPost.get('image_url').valid) {
                this.invalid_image = true;
            }
            if (!this.newPost.get('lat').valid || !this.newPost.get('long').valid) {
                this.invalid_map = true;
            }
        }
    }
}
PostEditorComponent.ɵfac = function PostEditorComponent_Factory(t) { return new (t || PostEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
PostEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostEditorComponent, selectors: [["app-post-editor"]], viewQuery: function PostEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, decls: 28, vars: 11, consts: [[3, "activeList"], [1, "editor-container"], [1, "editor-sub-container"], [1, "upload-container"], [3, "formGroup"], ["class", "loading-image-container", 4, "ngIf"], ["class", "upload-image", "alt", "", 3, "src", 4, "ngIf"], [1, "file-container"], ["type", "file", "formControlName", "newFile", 3, "change"], ["class", "systemError", 4, "ngIf"], [1, "post-form", 3, "formGroup", "submit"], ["appearance", "fill"], ["matInput", "", "placeholder", "Buenos Aires", "formControlName", "title", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "Almeria is a Spanish city and municipality, capital of the province of the same name, in the autonomous community of Andalusia.", "formControlName", "content", "required", ""], [1, "map"], ["map", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 4, "ngIf"], ["class", "loading-form-container", 4, "ngIf"], [1, "loading-image-container"], ["src", "./assets/images/upload.svg", "alt", "upload", 1, "upload"], ["class", "percentage", 4, "ngIf"], ["mode", "determinate", "max", "100", 3, "value", 4, "ngIf"], [1, "percentage"], ["mode", "determinate", "max", "100", 3, "value"], ["alt", "", 1, "upload-image", 3, "src"], [1, "systemError"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "loading-form-container"], [3, "diameter"]], template: function PostEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostEditorComponent_div_7_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostEditorComponent_img_8_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostEditorComponent_Template_input_change_10_listener($event) { return ctx.changeFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostEditorComponent_div_11_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PostEditorComponent_Template_form_submit_12_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PostEditorComponent_div_24_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PostEditorComponent_button_25_Template, 2, 1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PostEditorComponent_div_26_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PostEditorComponent_div_27_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeList", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEdit ? "Edit Post" : "New post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form_file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.url_public);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url_public);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid_image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid_map);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.form_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form_loading);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.editor-container[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.editor-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.editor-container[_ngcontent-%COMP%]   .editor-sub-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: 100%;\n}\n\n.editor-container[_ngcontent-%COMP%]   .loading-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-right: 10px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   .loading-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   .loading-image-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   .loading-image-container[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   .loading-image-container[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.editor-container[_ngcontent-%COMP%]   .systemError[_ngcontent-%COMP%] {\n  background: #f25a5a;\n  color: #fff;\n  padding: 10px;\n  margin-top: 5px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 340px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: #fff;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.loading-container[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n@media only screen and (max-width: 900px) {\n  .editor-container[_ngcontent-%COMP%]   .editor-sub-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .editor-container[_ngcontent-%COMP%]   .editor-sub-container[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUVJO0VBQ0ksY0NUSTtBRFNaOztBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFHSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBR1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRFo7O0FBRVk7RUFDSSxVQUFBO0FBQWhCOztBQUVZO0VBQ0ksWUFBQTtBQUFoQjs7QUFFWTtFQUNJLGlCQUFBO0FBQWhCOztBQUlRO0VBQ0ksYUFBQTtBQUZaOztBQUlRO0VBQ0ksbUJBQUE7QUFGWjs7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhSOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU1JO0VBQ0ksZ0JBQUE7QUFKUjs7QUFRQTtFQUVRO0lBQ0ksc0JBQUE7RUFOVjtFQU9VO0lBQ0ksa0JBQUE7RUFMZDtBQUNGIiwiZmlsZSI6InBvc3QtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbmNpcGFsO1xyXG4gICAgfVxyXG4gICAgLmVkaXRvci1zdWItY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3QtZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubG9hZGluZy1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51cGxvYWQtY29udGFpbmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAubG9hZGluZy1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVwbG9hZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBlcmNlbnRhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51cGxvYWQtaW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zeXN0ZW1FcnJvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyNWE1YTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5tYXQtc3Bpbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmVkaXRvci1jb250YWluZXIge1xyXG4gICAgICAgIC5lZGl0b3Itc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC51cGxvYWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkcHJpbmNpcGFsOiAjM2Y1MWI1O1xyXG4kYmFja2dyb3VuZDogI2ViZWRlZjsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-editor',
                templateUrl: './post-editor.component.html',
                styleUrls: ['./post-editor.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseStorageService"] }, { type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { divMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adrii\Documents\Web\Interviews\interview-wefox\src\main.ts */"zUnb");


/***/ }),

/***/ "6XPo":
/*!************************************************!*\
  !*** ./src/app/redux/reducers/post.reducer.ts ***!
  \************************************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post.actions */ "Z5Zt");


const initialState = {
    list: [],
    filterList: []
};
function postReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST"]:
            const posts = [...action.posts];
            posts.sort((a, b) => {
                if (a['updated_at'] < b['updated_at'])
                    return 1;
                if (a['updated_at'] > b['updated_at'])
                    return -1;
                return 0;
            });
            return {
                list: posts,
                filterList: posts
            };
        case _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST"]:
            const postsUpdated = state.list.filter(post => post.id !== action.post_id);
            return Object.assign(Object.assign({}, state), { list: postsUpdated, filterList: postsUpdated });
        case _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["FILTER_POST"]:
            const filterList = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["FilterStringPipe"]().transform(state.list, action.filterText);
            return Object.assign(Object.assign({}, state), { filterList });
    }
}


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
    production: false,
    environment: 'local',
    api: 'http://localhost:3000/api/v1',
    firebase: {
        apiKey: "AIzaSyDpIXkehVmew1BCSLCuqgfzIf-xTtscD9E",
        authDomain: "interview-wefox.firebaseapp.com",
        databaseURL: "https://interview-wefox-default-rtdb.firebaseio.com",
        projectId: "interview-wefox",
        storageBucket: "interview-wefox.appspot.com",
        messagingSenderId: "422604386055",
        appId: "1:422604386055:web:271405aa113aefa0cedfa2"
    },
    mapboxToken: 'pk.eyJ1IjoiYWRyaWljYWJlbGxvIiwiYSI6ImNrcWVqbGU2OTBpdHIyb285NW1kOHA1aWsifQ.xcVV3ZOE2CfG5SqFnYZsKg'
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

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStringPipe", function() { return FilterStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterStringPipe {
    transform(arr, arg) {
        if (arr && typeof arg == 'string') {
            let term = new RegExp(arg.replace(/[aáäå]/gi, '[aáäå]')
                .replace(/[eéë]/gi, '[eéë]')
                .replace(/[iíï]/gi, '[iíï]')
                .replace(/[oóö]/gi, '[oóö]')
                .replace(/[uúü]/gi, '[uúü]'), 'i');
            return arr.filter((element) => {
                return term.test(element.title);
            });
        }
    }
}
FilterStringPipe.ɵfac = function FilterStringPipe_Factory(t) { return new (t || FilterStringPipe)(); };
FilterStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterString", type: FilterStringPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterString',
                pure: false
            }]
    }], null, null); })();


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _posts_container_post_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts-container/post-container.component */ "muuN");





class HomeComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 1, consts: [[3, "activeList"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-container");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeList", false);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _posts_container_post_container_component__WEBPACK_IMPORTED_MODULE_3__["PostContainerComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 250px;\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG5cclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "GrFz":
/*!******************************************************!*\
  !*** ./src/app/services/firebase-storage.service.ts ***!
  \******************************************************/
/*! exports provided: FirebaseStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseStorageService", function() { return FirebaseStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");



class FirebaseStorageService {
    constructor(storage) {
        this.storage = storage;
    }
    //Upload File
    taskCloudStorage(file_name, data) {
        return this.storage.upload(file_name, data);
    }
    //Reference File
    referenceCloudStorage(file_name) {
        return this.storage.ref(file_name);
    }
}
FirebaseStorageService.ɵfac = function FirebaseStorageService_Factory(t) { return new (t || FirebaseStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"])); };
FirebaseStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseStorageService, factory: FirebaseStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post-editor/post-editor.component */ "+x0C");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");







class APP_ROUTING {
}
APP_ROUTING.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: APP_ROUTING });
APP_ROUTING.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function APP_ROUTING_Factory(t) { return new (t || APP_ROUTING)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                },
                {
                    path: 'new',
                    component: _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__["PostEditorComponent"],
                },
                {
                    path: 'edit/:id',
                    component: _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__["PostEditorComponent"],
                    data: { edit: true }
                },
                {
                    path: 'post/:id',
                    component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
                }
            ], {
                useHash: false,
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](APP_ROUTING, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APP_ROUTING, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                        {
                            path: '',
                            component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                        },
                        {
                            path: 'new',
                            component: _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__["PostEditorComponent"],
                        },
                        {
                            path: 'edit/:id',
                            component: _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__["PostEditorComponent"],
                            data: { edit: true }
                        },
                        {
                            path: 'post/:id',
                            component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
                        }
                    ], {
                        useHash: false,
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/redux/actions/post.actions */ "Z5Zt");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-click-outside */ "qew9");














function SearchComponent_mat_card_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_mat_card_8_ng_container_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const post_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.navigatePost(post_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.title);
} }
function SearchComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function SearchComponent_mat_card_8_Template_mat_card_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.close(); })("click", function SearchComponent_mat_card_8_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_mat_card_8_ng_container_1_Template, 4, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", ".search-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
const _c0 = function () { return ["/new"]; };
class SearchComponent {
    constructor(store, _postsService, router) {
        this.store = store;
        this._postsService = _postsService;
        this.router = router;
    }
    ngOnInit() {
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.loadPosts();
        this.activeFilter();
    }
    ngOnDestroy() {
        this.subPost.unsubscribe();
    }
    loadPosts() {
        this.subPost = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('posts')).subscribe((posts) => {
            this.posts = posts === null || posts === void 0 ? void 0 : posts.filterList;
        });
    }
    getPosts() {
        this._postsService.getPosts().subscribe((posts) => {
            const action = new src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["LoadPosts"](posts);
            this.store.dispatch(action);
        });
    }
    navigatePost(post_id) {
        this.listSearch = false;
        this.router.navigate(['post', post_id]);
    }
    search() {
        if (this.activeList) {
            this.listSearch = true;
            this.getPosts();
        }
    }
    close() {
        this.listSearch = false;
    }
    activeFilter() {
        this.searchControl.valueChanges.subscribe(filterText => {
            const filterPost = new src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["FilterPost"](filterText);
            this.store.dispatch(filterPost);
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { activeList: "activeList" }, decls: 9, vars: 4, consts: [[1, "search-container"], [1, "search-new"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "search-input"], ["placeholder", "Search", "type", "text", "spellcheck", "false", 3, "formControl", "focus", "blur", "click"], ["class", "search-list", 3, "exclude", "clickOutside", "click", 4, "ngIf"], [1, "search-list", 3, "exclude", "clickOutside", "click"], [4, "ngFor", "ngForOf"], [1, "item-container", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SearchComponent_Template_input_focus_7_listener() { return true; })("blur", function SearchComponent_Template_input_blur_7_listener() { return false; })("click", function SearchComponent_Template_input_click_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_mat_card_8_Template, 2, 2, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listSearch);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".search-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background: #fff;\n  padding: 5px;\n  position: relative;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.search-container[_ngcontent-%COMP%]   .search-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n}\n.search-container[_ngcontent-%COMP%]   .search-list[_ngcontent-%COMP%] {\n  width: 100%;\n  left: 0;\n  padding: 0;\n  top: 35px;\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  text-align: left;\n  position: absolute;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  z-index: 100;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-top: 1px solid #d3d3d3;\n  border-radius: 4px;\n}\n.search-container[_ngcontent-%COMP%]   .search-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: pointer;\n}\n.search-container[_ngcontent-%COMP%]   .search-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n}\n.search-container[_ngcontent-%COMP%]   .search-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBWUEsa0JBQUE7QUFUUjtBQUZRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFJWjtBQUhZO0VBQ0ksWUFBQTtBQUtoQjtBQUZZO0VBQ0ksWUFBQTtBQUloQjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFFWjtBQURZO0VBQ0ksNkJBQUE7QUFHaEI7QUFEWTtFQUNJLGdCQUFBO0FBR2hCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1uZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLml0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { activeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.title = 'interview-wefox';
    }
    ngOnInit() {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["accessToken"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mapboxToken;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "general-container"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".general-container[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 10px;\n}\n.general-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH0gICAgXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "V+zi":
/*!*************************************************************!*\
  !*** ./src/app/components/post-card/post-card.component.ts ***!
  \*************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/redux/actions/post.actions */ "Z5Zt");
/* harmony import */ var _shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modal-confirm/modal-confirm.component */ "l+ay");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");

//Map













const _c0 = ["map"];
function PostCardComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.post == null ? null : ctx_r0.post.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostCardComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.post == null ? null : ctx_r1.post.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostCardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12, 13);
} }
const _c1 = function (a0) { return { "pointer": a0 }; };
const _c2 = function (a0, a1) { return { "post-info-minature": a0, "post-info-complete": a1 }; };
const _c3 = function (a1) { return ["/post", a1]; };
class PostCardComponent {
    constructor(_postsService, _snackBar, router, store, dialog) {
        this._postsService = _postsService;
        this._snackBar = _snackBar;
        this.router = router;
        this.store = store;
        this.dialog = dialog;
        this.zoomLevel = 14;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loadMap();
    }
    loadMap() {
        var _a, _b, _c, _d;
        if (this.complete) {
            this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
                container: this.divMap.nativeElement,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [(_a = this.post) === null || _a === void 0 ? void 0 : _a.long, (_b = this.post) === null || _b === void 0 ? void 0 : _b.lat],
                zoom: this.zoomLevel
            });
            const maker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"]()
                .setLngLat([(_c = this.post) === null || _c === void 0 ? void 0 : _c.long, (_d = this.post) === null || _d === void 0 ? void 0 : _d.lat])
                .addTo(this.map);
        }
    }
    edit() {
        var _a;
        this.router.navigate(['/edit', (_a = this.post) === null || _a === void 0 ? void 0 : _a.id]);
    }
    delete() {
        this.dialog.open(_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ModalConfirmComponent"], {
            data: {
                title: this.post.title,
            }
        }).afterClosed().subscribe(result => {
            var _a;
            if (result) {
                this._postsService.deletePost((_a = this.post) === null || _a === void 0 ? void 0 : _a.id).subscribe(() => {
                    var _a;
                    const action = new src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__["DeletePost"]((_a = this.post) === null || _a === void 0 ? void 0 : _a.id);
                    this.store.dispatch(action);
                    this._snackBar.open('Post Deleted', 'Done', {
                        duration: 3000
                    });
                    this.router.navigate(['']);
                });
            }
        });
    }
}
PostCardComponent.ɵfac = function PostCardComponent_Factory(t) { return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
PostCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCardComponent, selectors: [["app-post-card"]], viewQuery: function PostCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, inputs: { post: "post", complete: "complete" }, decls: 15, vars: 15, consts: [[1, "post-container", 3, "ngClass"], [1, "actions"], ["matTooltip", "Edit", 3, "click"], ["matTooltip", "Delete", 3, "click"], [3, "ngClass", "routerLink"], ["class", "img-minature", "alt", "City", 3, "src", 4, "ngIf"], ["class", "img-complete", "alt", "City", 3, "src", 4, "ngIf"], [1, "title"], [1, "content"], ["class", "map", 4, "ngIf"], ["alt", "City", 1, "img-minature", 3, "src"], ["alt", "City", 1, "img-complete", 3, "src"], [1, "map"], ["map", ""]], template: function PostCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCardComponent_Template_mat_icon_click_2_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCardComponent_Template_mat_icon_click_4_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostCardComponent_img_7_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostCardComponent_img_8_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostCardComponent_div_14_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, !ctx.complete));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, !ctx.complete, ctx.complete))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.post == null ? null : ctx.post.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.complete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.complete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post == null ? null : ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post == null ? null : ctx.post.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.complete);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.post-container[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background: #fff;\n  padding: 10px;\n  text-align: left;\n  margin: 10px 0;\n}\n.post-container[_ngcontent-%COMP%]   .post-info-minature[_ngcontent-%COMP%] {\n  display: flex;\n}\n.post-container[_ngcontent-%COMP%]   .post-info-complete[_ngcontent-%COMP%] {\n  display: flex;\n}\n.post-container[_ngcontent-%COMP%]   .img-minature[_ngcontent-%COMP%] {\n  width: 220px;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n.post-container[_ngcontent-%COMP%]   .img-complete[_ngcontent-%COMP%] {\n  width: 440px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n.post-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.post-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-size: 16px;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  margin-top: 10px;\n}\n@media only screen and (max-width: 900px) {\n  .post-container[_ngcontent-%COMP%]   .post-info-minature[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .post-container[_ngcontent-%COMP%]   .post-info-complete[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .post-container[_ngcontent-%COMP%]   .img-minature[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 300px;\n    margin-right: 10px;\n    border-radius: 5px;\n  }\n  .post-container[_ngcontent-%COMP%]   .img-complete[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 300px;\n    border-radius: 5px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0LWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtBQUNSO0FBRUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxjQ2xDSTtBRG9DWjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VBQVY7RUFFTTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQUFWO0VBRU07SUFDSSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBQVY7RUFFTTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUFWO0FBQ0YiLCJmaWxlIjoicG9zdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5hY3Rpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnBvc3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIC5wb3N0LWluZm8tbWluYXR1cmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAucG9zdC1pbmZvLWNvbXBsZXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmltZy1taW5hdHVyZSB7XHJcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbXBsZXRlIHtcclxuICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmluY2lwYWw7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLnBvc3QtY29udGFpbmVyIHtcclxuICAgICAgICAucG9zdC1pbmZvLW1pbmF0dXJlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc3QtaW5mby1jb21wbGV0ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctbWluYXR1cmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWNvbXBsZXRlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJHByaW5jaXBhbDogIzNmNTFiNTtcclxuJGJhY2tncm91bmQ6ICNlYmVkZWY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-card',
                templateUrl: './post-card.component.html',
                styleUrls: ['./post-card.component.scss']
            }]
    }], function () { return [{ type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { divMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map']
        }], post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YzH7":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-card/post-card.component */ "V+zi");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function PostComponent_ng_container_1_app_post_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-card", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r2.post)("complete", true);
} }
function PostComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_ng_container_1_app_post_card_1_Template, 1, 2, "app-post-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post);
} }
function PostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 60);
} }
class PostComponent {
    constructor(_postsService, activatedRoute) {
        this._postsService = _postsService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.loadPost();
    }
    loadPost() {
        this.loading = true;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((p) => {
            this.post_id = p['id'];
            return this._postsService.getPost(this.post_id);
        }))
            .subscribe((post) => {
            this.post = post;
            this.loading = false;
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 3, vars: 3, consts: [[3, "activeList"], [4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [3, "post", "complete", 4, "ngIf"], [3, "post", "complete"], [1, "loading-container"], [3, "diameter"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_2_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeList", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__["PostCardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: [".posts-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.loading-container[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7QUFDUiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLm1hdC1zcGlubmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Z5Zt":
/*!***********************************************!*\
  !*** ./src/app/redux/actions/post.actions.ts ***!
  \***********************************************/
/*! exports provided: LOAD_POST, DELETE_POST, FILTER_POST, LoadPosts, DeletePost, FilterPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST", function() { return LOAD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_POST", function() { return FILTER_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPosts", function() { return LoadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPost", function() { return FilterPost; });
const LOAD_POST = '[Post] Load Posts';
const DELETE_POST = '[Post] Delete Post';
const FILTER_POST = '[Post] Filter Post';
class LoadPosts {
    constructor(posts) {
        this.posts = posts;
        this.type = LOAD_POST;
    }
}
class DeletePost {
    constructor(post_id) {
        this.post_id = post_id;
        this.type = DELETE_POST;
    }
}
class FilterPost {
    constructor(filterText) {
        this.filterText = filterText;
        this.type = FILTER_POST;
    }
}


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/post-editor/post-editor.component */ "+x0C");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_posts_container_post_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/posts-container/post-container.component */ "muuN");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/post-card/post-card.component */ "V+zi");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shared/modal-confirm/modal-confirm.component */ "l+ay");
/* harmony import */ var _redux_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./redux/reducers/post.reducer */ "6XPo");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_11__["APP_ROUTING"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                posts: _redux_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_21__["postReducer"]
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
        _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_17__["PostCardComponent"],
        _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_13__["PostEditorComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _components_posts_container_post_container_component__WEBPACK_IMPORTED_MODULE_16__["PostContainerComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__["ModalConfirmComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _app_routes__WEBPACK_IMPORTED_MODULE_11__["APP_ROUTING"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
                    _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_17__["PostCardComponent"],
                    _components_post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_13__["PostEditorComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _components_posts_container_post_container_component__WEBPACK_IMPORTED_MODULE_16__["PostContainerComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__["ModalConfirmComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _app_routes__WEBPACK_IMPORTED_MODULE_11__["APP_ROUTING"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                        posts: _redux_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_21__["postReducer"]
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production
                    })
                ],
                entryComponents: [_components_shared_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__["ModalConfirmComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 2, consts: [["src", "assets/images/map.svg", "alt", "", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["img[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    margin: 15px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PostsService {
    constructor(_http) {
        this._http = _http;
        this.urlPosts = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/posts`;
    }
    getPosts() {
        return this._http.get(`${this.urlPosts}`);
    }
    getPost(idPost) {
        return this._http.get(`${this.urlPosts}/${idPost}`);
    }
    createPost(post) {
        return this._http.post(`${this.urlPosts}`, post);
    }
    deletePost(idPost) {
        return this._http.delete(`${this.urlPosts}/${idPost}`);
    }
    updatePost(post, post_id) {
        return this._http.put(`${this.urlPosts}/${post_id}`, post);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "l+ay":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/modal-confirm/modal-confirm.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModalConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmComponent", function() { return ModalConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class ModalConfirmComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
ModalConfirmComponent.ɵfac = function ModalConfirmComponent_Factory(t) { return new (t || ModalConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ModalConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalConfirmComponent, selectors: [["app-modal-confirm"]], decls: 13, vars: 3, consts: [[1, "header"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-raised-button", "", 3, "mat-dialog-close"]], template: function ModalConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Delete Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Do you want to delete ", ctx.data.title, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\nmat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nmat-dialog-content[_ngcontent-%COMP%]   p.info[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwtY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUVJO0VBQ0ksZ0JBQUE7QUFDUjtBQUFRO0VBQ0ksa0JBQUE7QUFFWjtBQUdBO0VBQ0ksb0NBQUE7QUFBSiIsImZpbGUiOiJtb2RhbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcbn1cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgJi5pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-confirm',
                templateUrl: './modal-confirm.component.html',
                styleUrls: ['./modal-confirm.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "muuN":
/*!************************************************************************!*\
  !*** ./src/app/components/posts-container/post-container.component.ts ***!
  \************************************************************************/
/*! exports provided: PostContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContainerComponent", function() { return PostContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/redux/actions/post.actions */ "Z5Zt");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-card/post-card.component */ "V+zi");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function PostContainerComponent_ng_container_1_app_post_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-card", 5);
} if (rf & 2) {
    const post_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r4);
} }
function PostContainerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostContainerComponent_ng_container_1_app_post_card_1_Template, 1, 1, "app-post-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
function PostContainerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 60);
} }
function PostContainerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There may be a problem with the server. Please try again later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostContainerComponent {
    constructor(_postsService, store) {
        this._postsService = _postsService;
        this.store = store;
        this.loading = false;
        this.systemError = false;
    }
    ngOnInit() {
        this.subscribePosts();
        this.loadPost();
    }
    subscribePosts() {
        this.subPost = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('posts')).subscribe((posts) => {
            this.posts = posts === null || posts === void 0 ? void 0 : posts.filterList;
        });
    }
    loadPost() {
        this.loading = true;
        this._postsService.getPosts().subscribe((posts) => {
            const action = new src_app_redux_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__["LoadPosts"](posts);
            this.store.dispatch(action);
            this.loading = false;
        }, () => {
            this.loading = false;
            this.systemError = true;
        });
    }
}
PostContainerComponent.ɵfac = function PostContainerComponent_Factory(t) { return new (t || PostContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
PostContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostContainerComponent, selectors: [["app-post-container"]], decls: 4, vars: 3, consts: [[1, "post-container"], [4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "systemError", 4, "ngIf"], [3, "post", 4, "ngFor", "ngForOf"], [3, "post"], [1, "loading-container"], [3, "diameter"], [1, "systemError"]], template: function PostContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostContainerComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostContainerComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostContainerComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_5__["PostCardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: [".posts-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.loading-container[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.systemError[_ngcontent-%COMP%] {\n  background: #f25a5a;\n  color: #fff;\n  padding: 30px;\n  margin-top: 5px;\n  text-align: center;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJwb3N0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0cy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5tYXQtc3Bpbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN5c3RlbUVycm9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMjVhNWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-container',
                templateUrl: './post-container.component.html',
                styleUrls: ['./post-container.component.scss']
            }]
    }], function () { return [{ type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


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
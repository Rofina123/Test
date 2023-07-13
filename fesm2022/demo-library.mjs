import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';

class DemoLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CardyLoginComponent {
    constructor() {
        this.loginForm = new FormGroup({
            user: new FormControl(''),
            password: new FormControl('')
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardyLoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: CardyLoginComponent, selector: "lib-cardy-login", ngImport: i0, template: "<div class=\"row\">\n  <div class=\"bg-image\">\n    <div class=\"login\">\n      <div class=\"col-md-12 mb-4\">\n        <div class=\"d-flex justify-content-center flex-column align-items-center\">\n          <img src=\"assets/images/cardinality-logo_text.svg\" class=\"cfaLogoTop logo-img\" width=\"165\" alt=\"GD logo\" />\n          <h5 class=\"my-4\" style=\"color: #146a5d;\">Integrated Eligibility System</h5>\n        </div>\n      </div>\n      <div class=\"col-md-12 login-content\">\n        <form  novalidate [formGroup]=\"loginForm\">\n          <div class=\"clearfix\">\n            <div class=\"form-group\">\n              <label aria-labelledby=\"username\" for=\"username\" class=\"intake-form-labels\">User Name </label>\n              <input\n                class=\"Inputs\"\n                autofocus\n                type=\"mail\"\n                formControlName=\"email\"\n                placeholder=\"Email\"\n                name=\"email\"\n                id=\"username\"\n                tabindex=\"0\"\n                required />\n            </div>\n            <div class=\"form-group no-mar\">\n              <label aria-labelledby=\"password\" for=\"password\" class=\"intake-form-labels w-100\">Password</label>\n              <input\n                class=\"Inputs password\"\n                #showhideinput\n                formControlName=\"password\"\n                type=\"password\"\n                placeholder=\"Password\"\n                name=\"password\"\n                id=\"password\"\n                tabindex=\"0\"\n                required />\n              <i class=\"fa fa-eye\" aria-hidden=\"true\" ></i>\n              <div class=\"text-right\">\n                <a href=\"javascript:void(0)\"  class=\"btn-link forget\">\n                  Forgot Password?</a\n                >\n              </div>\n            </div>\n\n            <div class=\"form-group clearfix mb-30 clsMin-23 pt-10\">\n              <div class=\"checkbox\">\n                <p-checkbox\n                  class=\"checklabelbox\"\n                  name=\"conditions\"\n                  formControlName=\"conditions\"\n                  value=\"yes\"\n                  inputId=\"ch\"\n                  aria-checked=\"false\">\n                </p-checkbox>\n                <label class=\"checklabel\" for=\"ch\"\n                  >I accept the terms conditions</label\n                >\n              </div>\n            </div>\n            <div class=\"clearfix text-center col-md-12 col-12 mt-4\">\n              <button type=\"submit\">Login</button>\n            </div>\n          </div>\n          <br />\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n", styles: ["body{height:100%;overflow:hidden;width:100%!important;box-sizing:border-box;position:relative}label{color:#146a5d}button{background-color:#146a5d;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}.bg-image{position:absolute;inset:0;background:url(assets/images/login_bg.jpg) no-repeat;background-size:cover;width:100%;height:100vh}.login{margin:auto;box-sizing:border-box;box-shadow:0 3px 35px #bfbfbf;padding:30px 10px;background:#fff}.login .h2,.login h2{font-size:20px;color:var(--text-dark);font-weight:700;padding-top:8px}.login .login-content{width:100%;margin:0 auto}.login .login-content h4{font-weight:700;color:#333!important;font-size:26px;margin:10px 0 30px}.login .login-content .btn-login{background-color:var(--btn);padding:10px;border:0}.login .login-content input.form-control{padding:8px 12px 8px 0;background:transparent}.login .mar-btm-40{margin-bottom:40px}.login .mar-btm-20{margin-bottom:20px}.login .form-group{position:relative;padding:0 18px}.login .form-group .fa-eye{position:absolute;right:25px;top:12px;color:var(--primary);font-size:15px;cursor:pointer}.login .form-group input[type=text]+.fa-eye:before{content:\"\\f070\"}.login .form-group .leftIcon{position:absolute;top:12px;left:12px;font-size:15px;color:#666}.login .form-group input{padding:0 10px;color:var(--text-dark)!important;background:var(--bg-light)!important;border:1px solid var(--table-border)!important;border-radius:5px}.login .form-group input:focus{border:1px solid var(--table-border)!important}.login .form-group .password{padding-right:40px}.login .form-control,.login input:focus,.login input:hover{border:1px solid var(--table-border)!important;box-shadow:none}.login .topWarmingContent{width:100%;padding-top:10px}.login .warmingIMg{width:75px;display:block}.login .warningContentP{width:100%;padding-top:10px;padding-right:20px}.login .warningContentP p{font-size:14px;padding:10px 0 0;color:var(--text-dark);line-height:1.6;margin:0}.login .loginBottomSet{padding-top:0}.login .btn-link{font-size:var(--base-font-size);font-weight:500;color:var(--text-dark);text-decoration:none;margin-top:3px;padding:0}.login .LogIn{margin-top:5px}.login .Inputs{outline:none;padding:5px 10px;background-color:var(--bg-light);width:100%;height:36px;margin-bottom:8px;box-shadow:none;border:none}.login .btn-secondary{background-color:var(--btncancel);border:1px solid var(--primary);color:var(--primary);padding:8px 25px}.login .logo-group .logo-title{color:var(--text-dark);font-size:15px}.login .logo-group .logo-subtitle{color:var(--text-dark);font-size:13px;font-weight:400;letter-spacing:1.7px}.login .cfaLogoTop{display:block}.login .cfaLogoLeft{width:100%}.login .checkbox{float:left}.login .checkbox label{color:var(--text-dark);cursor:pointer}.login .clsPowered{position:absolute;bottom:40px;left:0;right:0;margin:0 auto;text-align:center}.login label{font-size:var(--base-font-size);font-weight:500!important}.login .clsMin-23{min-height:23px}.login .clsTopLogo{position:absolute;top:30px;left:0;right:0;margin:0 auto;text-align:center}.login .clsTopLogo h2{font-weight:700;color:#333!important;font-size:26px;margin:20px 0}.login .hero-gallery-inner{display:flex;flex-wrap:wrap}.login .fa-eye:before{content:\"\\f06e\";color:var(--primary);position:absolute;margin-top:27px;margin-left:-24px}.login .forget{font-size:var(--font-12);color:var(--primary);text-decoration:none}.login .checklabel{padding-left:10px;font-size:var(--base-font-size);margin-bottom:0}.login .Cardinality_logo{margin-top:-5px}.login h4#modal-basic-title{font-size:15px}.login .rightLoginSet{background:var(--bg-light)}.login .rightLoginSet .intake-form-labels{color:var(--text-dark)}.powered{position:absolute;bottom:0;left:0;right:0}.powered p,.powered span{color:var(--text-dark)}@media screen and (min-width: 991px) and (max-width: 1024px){.login .rightLoginSet{padding:0!important}}@media screen and (max-width: 1281px){.carousel-item{max-width:65%!important}}.banner-sec{background:rgb(28,92,124);background:linear-gradient(180deg,rgb(28,92,124) 0%,rgb(35,44,50) 100%);background-size:cover;border-radius:0;height:100%}@media screen and (max-width: 767px){.login{width:400px;position:relative;inset:50% 0 0;transform:translateY(-50%)}}@media screen and (min-width: 768px){.login{width:400px;position:absolute;top:50%;right:0;transform:translate(-15%,-50%)}}@media screen and (max-width: 480px){.login{width:90%}}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i2.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardyLoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cardy-login', template: "<div class=\"row\">\n  <div class=\"bg-image\">\n    <div class=\"login\">\n      <div class=\"col-md-12 mb-4\">\n        <div class=\"d-flex justify-content-center flex-column align-items-center\">\n          <img src=\"assets/images/cardinality-logo_text.svg\" class=\"cfaLogoTop logo-img\" width=\"165\" alt=\"GD logo\" />\n          <h5 class=\"my-4\" style=\"color: #146a5d;\">Integrated Eligibility System</h5>\n        </div>\n      </div>\n      <div class=\"col-md-12 login-content\">\n        <form  novalidate [formGroup]=\"loginForm\">\n          <div class=\"clearfix\">\n            <div class=\"form-group\">\n              <label aria-labelledby=\"username\" for=\"username\" class=\"intake-form-labels\">User Name </label>\n              <input\n                class=\"Inputs\"\n                autofocus\n                type=\"mail\"\n                formControlName=\"email\"\n                placeholder=\"Email\"\n                name=\"email\"\n                id=\"username\"\n                tabindex=\"0\"\n                required />\n            </div>\n            <div class=\"form-group no-mar\">\n              <label aria-labelledby=\"password\" for=\"password\" class=\"intake-form-labels w-100\">Password</label>\n              <input\n                class=\"Inputs password\"\n                #showhideinput\n                formControlName=\"password\"\n                type=\"password\"\n                placeholder=\"Password\"\n                name=\"password\"\n                id=\"password\"\n                tabindex=\"0\"\n                required />\n              <i class=\"fa fa-eye\" aria-hidden=\"true\" ></i>\n              <div class=\"text-right\">\n                <a href=\"javascript:void(0)\"  class=\"btn-link forget\">\n                  Forgot Password?</a\n                >\n              </div>\n            </div>\n\n            <div class=\"form-group clearfix mb-30 clsMin-23 pt-10\">\n              <div class=\"checkbox\">\n                <p-checkbox\n                  class=\"checklabelbox\"\n                  name=\"conditions\"\n                  formControlName=\"conditions\"\n                  value=\"yes\"\n                  inputId=\"ch\"\n                  aria-checked=\"false\">\n                </p-checkbox>\n                <label class=\"checklabel\" for=\"ch\"\n                  >I accept the terms conditions</label\n                >\n              </div>\n            </div>\n            <div class=\"clearfix text-center col-md-12 col-12 mt-4\">\n              <button type=\"submit\">Login</button>\n            </div>\n          </div>\n          <br />\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n", styles: ["body{height:100%;overflow:hidden;width:100%!important;box-sizing:border-box;position:relative}label{color:#146a5d}button{background-color:#146a5d;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}.bg-image{position:absolute;inset:0;background:url(assets/images/login_bg.jpg) no-repeat;background-size:cover;width:100%;height:100vh}.login{margin:auto;box-sizing:border-box;box-shadow:0 3px 35px #bfbfbf;padding:30px 10px;background:#fff}.login .h2,.login h2{font-size:20px;color:var(--text-dark);font-weight:700;padding-top:8px}.login .login-content{width:100%;margin:0 auto}.login .login-content h4{font-weight:700;color:#333!important;font-size:26px;margin:10px 0 30px}.login .login-content .btn-login{background-color:var(--btn);padding:10px;border:0}.login .login-content input.form-control{padding:8px 12px 8px 0;background:transparent}.login .mar-btm-40{margin-bottom:40px}.login .mar-btm-20{margin-bottom:20px}.login .form-group{position:relative;padding:0 18px}.login .form-group .fa-eye{position:absolute;right:25px;top:12px;color:var(--primary);font-size:15px;cursor:pointer}.login .form-group input[type=text]+.fa-eye:before{content:\"\\f070\"}.login .form-group .leftIcon{position:absolute;top:12px;left:12px;font-size:15px;color:#666}.login .form-group input{padding:0 10px;color:var(--text-dark)!important;background:var(--bg-light)!important;border:1px solid var(--table-border)!important;border-radius:5px}.login .form-group input:focus{border:1px solid var(--table-border)!important}.login .form-group .password{padding-right:40px}.login .form-control,.login input:focus,.login input:hover{border:1px solid var(--table-border)!important;box-shadow:none}.login .topWarmingContent{width:100%;padding-top:10px}.login .warmingIMg{width:75px;display:block}.login .warningContentP{width:100%;padding-top:10px;padding-right:20px}.login .warningContentP p{font-size:14px;padding:10px 0 0;color:var(--text-dark);line-height:1.6;margin:0}.login .loginBottomSet{padding-top:0}.login .btn-link{font-size:var(--base-font-size);font-weight:500;color:var(--text-dark);text-decoration:none;margin-top:3px;padding:0}.login .LogIn{margin-top:5px}.login .Inputs{outline:none;padding:5px 10px;background-color:var(--bg-light);width:100%;height:36px;margin-bottom:8px;box-shadow:none;border:none}.login .btn-secondary{background-color:var(--btncancel);border:1px solid var(--primary);color:var(--primary);padding:8px 25px}.login .logo-group .logo-title{color:var(--text-dark);font-size:15px}.login .logo-group .logo-subtitle{color:var(--text-dark);font-size:13px;font-weight:400;letter-spacing:1.7px}.login .cfaLogoTop{display:block}.login .cfaLogoLeft{width:100%}.login .checkbox{float:left}.login .checkbox label{color:var(--text-dark);cursor:pointer}.login .clsPowered{position:absolute;bottom:40px;left:0;right:0;margin:0 auto;text-align:center}.login label{font-size:var(--base-font-size);font-weight:500!important}.login .clsMin-23{min-height:23px}.login .clsTopLogo{position:absolute;top:30px;left:0;right:0;margin:0 auto;text-align:center}.login .clsTopLogo h2{font-weight:700;color:#333!important;font-size:26px;margin:20px 0}.login .hero-gallery-inner{display:flex;flex-wrap:wrap}.login .fa-eye:before{content:\"\\f06e\";color:var(--primary);position:absolute;margin-top:27px;margin-left:-24px}.login .forget{font-size:var(--font-12);color:var(--primary);text-decoration:none}.login .checklabel{padding-left:10px;font-size:var(--base-font-size);margin-bottom:0}.login .Cardinality_logo{margin-top:-5px}.login h4#modal-basic-title{font-size:15px}.login .rightLoginSet{background:var(--bg-light)}.login .rightLoginSet .intake-form-labels{color:var(--text-dark)}.powered{position:absolute;bottom:0;left:0;right:0}.powered p,.powered span{color:var(--text-dark)}@media screen and (min-width: 991px) and (max-width: 1024px){.login .rightLoginSet{padding:0!important}}@media screen and (max-width: 1281px){.carousel-item{max-width:65%!important}}.banner-sec{background:rgb(28,92,124);background:linear-gradient(180deg,rgb(28,92,124) 0%,rgb(35,44,50) 100%);background-size:cover;border-radius:0;height:100%}@media screen and (max-width: 767px){.login{width:400px;position:relative;inset:50% 0 0;transform:translateY(-50%)}}@media screen and (min-width: 768px){.login{width:400px;position:absolute;top:50%;right:0;transform:translate(-15%,-50%)}}@media screen and (max-width: 480px){.login{width:90%}}\n"] }]
        }] });

class DemoLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: DemoLibraryComponent, selector: "lib-demo-library", ngImport: i0, template: `
   <lib-cardy-login></lib-cardy-login>
  `, isInline: true, dependencies: [{ kind: "component", type: CardyLoginComponent, selector: "lib-cardy-login" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-demo-library', template: `
   <lib-cardy-login></lib-cardy-login>
  ` }]
        }] });

class DemoLibraryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule, declarations: [DemoLibraryComponent,
            CardyLoginComponent], imports: [FormsModule,
            ReactiveFormsModule,
            CheckboxModule], exports: [DemoLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule, imports: [FormsModule,
            ReactiveFormsModule,
            CheckboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DemoLibraryComponent,
                        CardyLoginComponent
                    ],
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        CheckboxModule
                    ],
                    exports: [
                        DemoLibraryComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of demo-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DemoLibraryComponent, DemoLibraryModule, DemoLibraryService };
//# sourceMappingURL=demo-library.mjs.map

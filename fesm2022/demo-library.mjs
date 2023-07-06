import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    loginUser() {
        console.log(this.loginForm);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardyLoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: CardyLoginComponent, selector: "lib-cardy-login", ngImport: i0, template: "\n<!-- <form #simpleForm=\"ngForm\" (ngSubmit)=\"getValues(simpleForm.value)\" >\n   <input type=\"text\" ngModel name=\"user\" placeholder=\"enter user name\">\n   <br><br>\n   <input type=\"text\" ngModel name=\"age\" placeholder=\"enter user age\">\n   <br><br>\n   <input type=\"text\" ngModel name=\"address\" placeholder=\"enter user address\">\n   <br><br>\n   <button> Get User Values</button>\n  </form> -->\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\" formControlName=\"user\">\n      <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"  placeholder=\"Password\" formControlName=\"password\">\n    </div>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>", styles: ["label{color:#9e0909}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardyLoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cardy-login', template: "\n<!-- <form #simpleForm=\"ngForm\" (ngSubmit)=\"getValues(simpleForm.value)\" >\n   <input type=\"text\" ngModel name=\"user\" placeholder=\"enter user name\">\n   <br><br>\n   <input type=\"text\" ngModel name=\"age\" placeholder=\"enter user age\">\n   <br><br>\n   <input type=\"text\" ngModel name=\"address\" placeholder=\"enter user address\">\n   <br><br>\n   <button> Get User Values</button>\n  </form> -->\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\" formControlName=\"user\">\n      <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"  placeholder=\"Password\" formControlName=\"password\">\n    </div>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>", styles: ["label{color:#9e0909}\n"] }]
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
            ReactiveFormsModule], exports: [DemoLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule, imports: [FormsModule,
            ReactiveFormsModule] }); }
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
                        ReactiveFormsModule
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

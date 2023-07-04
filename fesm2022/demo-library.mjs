import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardyLoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: CardyLoginComponent, selector: "lib-cardy-login", ngImport: i0, template: "<h1>hello-cardyyyyyyy!!!!</h1>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardyLoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cardy-login', template: "<h1>hello-cardyyyyyyy!!!!</h1>\n" }]
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
            CardyLoginComponent], exports: [DemoLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DemoLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DemoLibraryComponent,
                        CardyLoginComponent
                    ],
                    imports: [],
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

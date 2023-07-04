import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CardyLoginComponent {
    loginForm: FormGroup<{
        user: FormControl<string | null>;
        password: FormControl<string | null>;
    }>;
    loginUser(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardyLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardyLoginComponent, "lib-cardy-login", never, {}, {}, never, never, false, never>;
}

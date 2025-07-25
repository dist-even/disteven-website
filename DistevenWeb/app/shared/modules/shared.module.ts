// Angular related dependencies imports should be written here
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third party module imports should be written here
import { NgSelectModule } from '@ng-select/ng-select';

// Our internal application modules and components will be imported here
import { NgxBootstrapModule } from './ngx-bootstrap.module';
import { SpinnerComponent, SearchComponent, EmptyViewComponent } from '../components';
import { CustomDatePipe } from '../pipes';
// import {
//     ConfirmDialogComponent,
//     ConfirmDialogService,
// } from '../components/confirm';

import { MomentModule } from 'ngx-moment';
import { EventEmiterService } from '../services';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        NgxBootstrapModule.forRoot(),
        NgSelectModule,
        MomentModule,
    ],
    declarations: [
        SpinnerComponent,
        CustomDatePipe,
        SearchComponent,
        EmptyViewComponent,
    ],
    exports: [
        CommonModule,
        NgxBootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgSelectModule,
        SpinnerComponent,
        CustomDatePipe,
        SearchComponent,
        EmptyViewComponent,
    ],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                // ConfirmDialogService,
                EventEmiterService
            ],
        };
    }
}
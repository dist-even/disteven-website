import { Injectable } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

import { ConfirmWindowComponent } from '../confirm-window.component';
import { ConfirmWindowSettings } from '../models';

@Injectable({
    providedIn: 'root',
})
export class ConfirmWindowService {

    private confirmModalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    confirm(settings: ConfirmWindowSettings): Observable<any> {
        const initialState = { isConfirmationCheckboxFieldRequired: settings.isConfirmationCheckboxFieldRequired };
        this.confirmModalRef = this.modalService.show(ConfirmWindowComponent, {
            class: 'small-modal', ignoreBackdropClick: true, initialState: initialState,
        });
        this.confirmModalRef.content.confirmWindowSettings = new ConfirmWindowSettings(settings);
        return this.confirmModalRef.content.result;
    }

    getConfirmModalRef(): BsModalRef {
        return this.confirmModalRef;
    }
}

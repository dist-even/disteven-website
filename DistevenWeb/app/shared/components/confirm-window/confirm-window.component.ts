import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmWindowSettings } from './models';

@Component({
  selector: 'disteven-confirm-window',
  templateUrl: './confirm-window.component.html'
})
export class ConfirmWindowComponent implements OnInit {
  public confirmWindowSettings: ConfirmWindowSettings;
  public result: EventEmitter<any> = new EventEmitter();
  public submitted: boolean;
  public isConfirmationCheckboxFieldRequired: boolean;
  public isRequestInProgress: boolean;
  public isConfirmed: boolean = false;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {
  }

  confirm() {
      this.submitted = true;
      if(this.isConfirmationCheckboxFieldRequired && this.isConfirmed) {
        this.result.emit(true);
        this.modalRef.hide();
      } else if(!this.isConfirmationCheckboxFieldRequired) {
        this.result.emit(true);
        this.modalRef.hide();
      }
  }

  cancel() {
      this.result.emit(false);
      this.modalRef.hide();
  }
}

import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { appearAnimation, PromptService } from '../shared';

@Component({
  selector: 'disteven-homepage',
  templateUrl: './home-page.component.html',
  animations: [
    appearAnimation
  ]
})
export class HomePageComponent implements OnInit {
  textCollection: string[] = [
    "Distribute...Money",
    "Calculate...Share",
    "Manage...Expenses",
    "Analyze...Spends",
    "Visualize...Groups",
  ];
  bsModalRef: BsModalRef;
  textToAnimate: string;
  isImageLoaded: boolean = false;
  isShown: boolean = false;

  constructor(
    private modalService: BsModalService,
    private promptService: PromptService,
  ) { }

  ngOnInit(): void {
    let i = 0;
    setInterval(() => {
      this.textToAnimate = this.textCollection[i];
      if (i >= this.textCollection.length-1) {
        i = 0;
      } else {
        i++;
      }
    }, 4000);
  }

  openAlert() {
    this.promptService.info('Work in Progress!')
  }

  openModal(template) {
    this.bsModalRef = this.modalService.show(template, { class: 'vertical-center', ignoreBackdropClick:true});
  }

  setLoadedStatus() {
    this.isImageLoaded = true;
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}

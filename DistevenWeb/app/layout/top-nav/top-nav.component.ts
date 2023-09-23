import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disteven-top-nav',
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {
  isMenuOpen: boolean;

  constructor() { }

  ngOnInit(): void {  }

  handler(value: string) {
    switch (value) {
      case 'onHidden':
        this.isMenuOpen = false;
        break;
      case 'onShown':
        this.isMenuOpen = true;
        break;
      default:
        this.isMenuOpen = false;
        break;
    }
  }

}

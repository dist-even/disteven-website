import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'disteven-top-nav',
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {
  isMenuOpen: boolean;

  constructor(public router: Router) { }

  ngOnInit(): void {     
  }

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

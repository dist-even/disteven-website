import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disteven-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {
  isSupportHovered:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

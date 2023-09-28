import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'disteven-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {
  isSupportHovered:boolean = false;
  pageTitle: string = "About Disteven | Learn more"
  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({name: 'title', content: 'About Disteven | Learn more'});
  }

}

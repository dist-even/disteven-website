import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'disteven-empty-view',
  templateUrl: './empty-view.component.html'
})
export class EmptyViewComponent implements OnInit {
  @Input() emptyMessage: string = 'No data to show';

  constructor() { }

  ngOnInit(): void {
  }

}

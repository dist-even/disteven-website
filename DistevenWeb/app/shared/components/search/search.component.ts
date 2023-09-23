import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SearchService } from '../../services';

@Component({
  selector: 'disteven-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  filteredRecords: any[] = [];
  @Input() placeholder: string = 'Search';
  @Input() records: any[] = [];
  @Input() searchParam: string = '';
  @Output() onSearch = new EventEmitter<any>();


  constructor(private searchService: SearchService) {
    this.searchService.searchVal.subscribe((data: any) => {
      this.searchQuery = data;
    });
  }

  ngOnInit(): void {
    this.filteredRecords = this.records;
  }

  handleSearch(searchQuery: string) {
    this.filteredRecords = this.records.filter((r) => r[this.searchParam].toLowerCase().includes(searchQuery.toLowerCase()))
    this.onSearch.emit(this.filteredRecords);    
  }

}

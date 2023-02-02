import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'st-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  filterName:string='All';

  @Input() title:string;
  @Input('filterList') list:Array<String>;
  @Output('filterChange') filterChange:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.filterChange.emit(this.filterName);
  }

}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'st-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {

  products:Array<any>=new Array;





  contentProjection: TemplateRef<any>;
  @ViewChild('block1', { static: true }) block1: TemplateRef<any>;
  @ViewChild('block2', { static: true }) block2: TemplateRef<any>;
  @ViewChild('block3', { static: true }) block3: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
    this.products.push({'id':1,'name':'Pavan','age':23});
    this.products.unshift({'id':1,'name':'Pavan','age':23});
  }

  cityChange(evnt) {
    console.log(evnt.target.value);
  }

  blockChange(event) {
    switch (event.target.value) {
      case 'block1':
        this.contentProjection = this.block1;
        break;
      case 'block2':
        this.contentProjection = this.block2;
        break;
      case 'block3':
        this.contentProjection = this.block3;
        break;
    }
    console.log(this.contentProjection)
  }
}

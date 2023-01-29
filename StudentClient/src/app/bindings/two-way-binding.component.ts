import { Component, OnInit } from '@angular/core';
import {Product} from '../contracts/interfaces';

@Component({
  selector: 'st-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  product:Product={
    name: '',
    cost: 0,
    type:'',
    available: false
  }

  updatedProduct:Product={
    name: '',
    cost: 0,
    type:'',
    available: false
  }

  constructor() { }

  ngOnInit(): void {
  }


  onClick(){
    console.log(this.product)
    this.updatedProduct={
      name:this.product.name,
      cost:this.product.cost,
      type:this.product.type,
      available:this.product.available
    }
  }

}

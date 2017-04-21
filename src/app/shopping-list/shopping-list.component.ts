import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../storage/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //let a: Ingredient = new Ingredient("title", 5);
  }

}

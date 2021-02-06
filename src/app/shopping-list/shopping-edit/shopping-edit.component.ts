import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  onAddItem() {
    this.slService.addedIngredient({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
  }

  ngOnInit(): void {
  }

}

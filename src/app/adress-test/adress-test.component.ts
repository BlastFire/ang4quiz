import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Customer } from './model/customer.interface';

@Component({
  selector: 'app-adress-test',
  templateUrl: './adress-test.component.html',
  styleUrls: ['./adress-test.component.css']
})
export class AdressTestComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        addresses: this._fb.array([
            this.initAddress(),
        ])
    });
  }

  initAddress() {
      // initialize our address
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
  }

  addAddress() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
      // remove address from the list
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  save(model: Customer) {
    console.log(model);
  }

}

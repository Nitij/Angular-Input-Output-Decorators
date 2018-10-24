import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() id:string;
  @Input() firstName:string;
  @Input() lastName:string;
  @Output() changed = new EventEmitter<object>();

  private editMode:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateEdit(){
    this.editMode = !this.editMode;
  }

  updateFirstName(firstName){
    this.firstName = firstName;
    this.updateName(firstName, this.lastName);
  }

  updateLastName(lastName){
    this.lastName = lastName;
    this.updateName(this.firstName, lastName);
   }

  updateName(firstName, lastName){
    this.changed.emit({Id: this.id, FirstName: firstName, LastName: lastName});
  }
}

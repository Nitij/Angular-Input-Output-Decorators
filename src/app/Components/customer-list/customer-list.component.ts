import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  private customerList:Array<any>;
  constructor() { }

  ngOnInit() {
    this.customerList = [
      {Id:1, FirstName:'John', LastName:'Doe'},
      {Id:2, FirstName:'Steve', LastName:'Smith'},
      {Id:3, FirstName:'Jason', LastName:'Bourne'},
    ];
  }

  updateCustomer(data){
    //call a data service to update the customer information on the server
    console.log(data.Id);
    console.log(data.FirstName);
    console.log(data.LastName);
  }

}

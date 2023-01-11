import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor() {}
  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'Dilka',
        lastName: 'sithari',
        emailId: 'sithari@gmail.com',
      },
      {
        id: 2,
        firstName: 'Kamal',
        lastName: 'Perera',
        emailId: 'kamal@gmail.com',
      },
    ];
  }
}

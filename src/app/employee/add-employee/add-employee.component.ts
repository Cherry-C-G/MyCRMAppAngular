import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/interface/employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    city: '',
    title: '',
    hireDate: new Date(),
    birthDate: new Date(),
    region: 0,
    reportsTo: 0,
    titleOfCourtesy: '',
    photoPath: '',
    address: '',
    regionId: 0,
    postalCode: '',
    country: '',
    phone: '',
    id: 0,
    regionName: '',
    fullName:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  insertEmployee(form: NgForm) {
    console.log(form.value)
  }
  resetPage(form: NgForm) {
    form.reset();

  }
}
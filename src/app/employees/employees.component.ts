import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  employees: Employee[] = []

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees["data"]);
    
  }


  private initForm(): void {
    this.form = this.fb.group({ 
      id: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      name: ['',[Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      avatar: ['', Validators.required]
    });
  }

  addEmployee(): void {

    
    var id = this.form.controls["id"].value;
    var firstName = this.form.controls["name"].value.split(" ")[0]
    var lastName = this.form.controls["name"].value.split(" ")[1]
    var email = this.form.controls["email"].value
    var avatar = this.form.controls["avatar"].value
    
    console.log(firstName)
    console.log(lastName)
    
    var newEmployee = new Employee(id, firstName, lastName, avatar, email)

    this.employees.push(newEmployee);
    

    
  }

  deleteEmployee(employee: Employee): void {
    
    this.employees = this.employees.filter( (e) => e.id !== employee.id)
    
    
  }
}

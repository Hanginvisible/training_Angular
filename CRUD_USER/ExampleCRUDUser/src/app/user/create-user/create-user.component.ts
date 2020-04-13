import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createForm: FormGroup;
  user: User[] = [];

  get Id():FormControl{
    return this.createForm.get('id') as FormControl;
  }
  get UserName(): FormControl {
    return this.createForm.get('userName') as FormControl;
  }
  get FullName(): FormControl {
    return this.createForm.get('fullName') as FormControl;
  }
  get Gender(): FormControl {
    return this.createForm.get('gender') as FormControl;
  }
  get Age(): FormControl {
    return this.createForm.get('age') as FormControl;
  }
  get Email(): FormControl {
    return this.createForm.get('email') as FormControl;
  }
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private toast: ToastrService) {
  }

  agePattern = "^[0-9]*$";
  emailPattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  ngOnInit() {
    this.createForm = this.fb.group({
      id:[''],
      userName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
      fullName: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      gender: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      age: ['',[Validators.required,Validators.pattern(this.agePattern)]],
      email: ['',[Validators.required,Validators.pattern(this.emailPattern)]]
    });
  }
  onSubmit() {
    debugger;
    if (this.createForm.valid) {
      const value = this.createForm.value;
      console.log(value);

      this.http.post('https://localhost:44396/api/user', value, 
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
        s => {
          console.log(s);
          this.toast.success('Success');
        },
        error => {
          console.log(error);
          this.toast.error('Fail');
        }
        
      )
    }
  }
}

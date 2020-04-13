import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  editForm:FormGroup;
  user: User[] =[];
  
  get Id():FormControl{
    return this.editForm.get('id') as FormControl;
  }
  get UserName(): FormControl {
    return this.editForm.get('userName') as FormControl;
  }
  get FullName(): FormControl {
    return this.editForm.get('fullName') as FormControl;
  }
  get Gender(): FormControl {
    return this.editForm.get('gender') as FormControl;
  }
  get Age(): FormControl {
    return this.editForm.get('age') as FormControl;
  }
  get Email(): FormControl {
    return this.editForm.get('email') as FormControl;
  }
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router,private ac: ActivatedRoute,private toast: ToastrService) { }
  agePattern = "^[0-9]*$";
  emailPattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

  ngOnInit() {
    this.editForm = this.fb.group({
      id:[''],
      userName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
      fullName: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      gender: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      age: ['',[Validators.required,Validators.pattern(this.agePattern)]],
      email: ['',[Validators.required,Validators.pattern(this.emailPattern)]]
    });
    debugger
    const Id = this.ac.snapshot.paramMap.get('id');
    this.http.get('https://localhost:44396/api/user/?id=' +Id,{headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
    value =>  {
      console.log(value);
    this.editForm.patchValue(value);
      });
  }
  onSubmit(){
    debugger
    const value = this.editForm.value;
    console.log(this.editForm.valid);
    if (this.editForm.valid) {
      const formdata ={
        ...this.user,
        ...value
      };
     
      console.log(value);
      this.http.put('https://localhost:44396/api/user', formdata, 
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

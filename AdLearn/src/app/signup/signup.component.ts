import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'; 
import {User} from '../shared/user';
import {UserService} from '../services/user.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('sform') signUpFormDirective;
  user : User;
  signUpForm: FormGroup;

  
  constructor(private userService: UserService,
     public dialogRef: MatDialogRef<SignupComponent>,
     private fb: FormBuilder,
    ) { 
        this.createForm();
    }

  ngOnInit() {

  }
  createForm() {
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  

  onSubmit() {
    this.user = this.signUpForm.value;
    console.log('User: ', this.user);
    this.userService.signUp(this.user)
      .subscribe(user => {
        this.user = user;   });
    this.signUpFormDirective.resetForm();
    this.signUpForm.reset({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    });

    this.dialogRef.close();
  }
}

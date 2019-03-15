import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'; 
import {User} from '../shared/user';
import {UserService} from '../services/user.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('lform') loginFormDirective;
  user : User;
  loginForm: FormGroup;

  
  constructor(private userService: UserService,
     public dialogRef: MatDialogRef<LoginComponent>,
     private fb: FormBuilder,
    ) { 
        this.createForm();
    }

  ngOnInit() {

  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  

  onSubmit() {
    this.user = this.loginForm.value;
    console.log('User: ', this.user);
    this.userService.signIn(this.user)
      .subscribe(user => {
        this.user = user;   });
    this.loginFormDirective.resetForm();
    this.loginForm.reset({
      email: '',
      password: ''
    });
    this.dialogRef.close();
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './createAccount.component.html',
  styleUrls: ['./createAccount.component.css']
})
export class CreateAccountComponent implements OnInit {
  CreateForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.CreateForm = this.fb.group({
      nameCreate: ['', Validators.required],
      emailCreate: ['', [Validators.required, Validators.email]],
      passwordCreate: ['', Validators.required],
      passwordConfirmCreate: ['', Validators.required]
    })  
  }

  ngOnInit(): void {
  }

  create(){
    console.log(this.CreateForm);
  }
}

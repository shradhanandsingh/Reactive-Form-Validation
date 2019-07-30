import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.scss']
})
export class FormreactiveComponent implements OnInit {

  registerform: FormGroup;
  submitted: boolean = false;

  constructor(private location: Location, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(){
    return this.registerform.controls;
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if(this.registerform.invalid){
      return;
    }
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerform.value))
  }

  back(){
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  registerForm:any = FormGroup;  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    // send login information to backend for verification
    this.http.post<any>('/api/authenticate', this.registerForm.value)
      .subscribe(data => {
        if (data.success) {
          // handle successful login
        } else {
          // handle failed login
        }
      });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]});
  }
}

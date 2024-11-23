import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials();
  }

  private checkCredentials() {
    const { username, password } = this.loginForm.value;
    // Replace this with your actual authentication logic
    if (username !== 'admin' || password !== 'admin') {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    } else {
      console.log('Form Submitted!', this.loginForm.value);
      // Redirect to dashboard or another page
    }
  }
}
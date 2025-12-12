import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  isLoading = false;
  showPassword = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      // Simulate API call
      setTimeout(() => {
        const { email, password } = this.signinForm.value;
        
        // Demo authentication - in real app, this would call an API
        if (email && password) {
          // Save to localStorage for demo
          localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }));
          this.isLoading = false;
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid email or password';
          this.isLoading = false;
        }
      }, 1000);
    } else {
      this.errorMessage = 'Please fill in all required fields correctly';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToSignUp() {
    // For now, just show a message. You can create a sign-up page later
    alert('Sign up page coming soon!');
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }
}

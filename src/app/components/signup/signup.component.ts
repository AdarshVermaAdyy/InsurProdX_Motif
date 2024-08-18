import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotifModule } from '@ey-xd/ng-motif';
import { MotifFormsModule } from '@ey-xd/ng-motif';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MotifModule, MotifFormsModule, CommonModule,
    ReactiveFormsModule, HttpClientModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent implements OnInit {
  ngOnInit(): void {

  }
  signupForm !: FormGroup;
  constructor(private fb: FormBuilder,
  //  private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  SignupForm() {
    console.log("Signup page");
    this.router.navigate(['login']);

  }
  toggleForm() {
    this.router.navigate(['login']);

  }
}



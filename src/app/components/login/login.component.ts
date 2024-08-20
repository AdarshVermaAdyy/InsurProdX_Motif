import { Component, OnInit } from '@angular/core';
import { MotifModule } from '@ey-xd/ng-motif';
import { MotifFormsModule  } from '@ey-xd/ng-motif';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MotifModule, MotifFormsModule,  CommonModule,
    ReactiveFormsModule, HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  //providers: [AuthService]
})

export class LoginComponent implements OnInit {
 
  form!: FormGroup;
  constructor(private fb: FormBuilder,
   // private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {

  }
  validateForm(): void {
    let data = this.form.value;
    console.log("form value is ... " + JSON.stringify(data));
    // this.userService.login(data);
    let username = data.username;
    let password = data.password;
    console.log("here is username  .. ", username, password);
    if (username === "kshama" && password === "123") {
      sessionStorage.setItem("isLoggedIn", "true");
      this.router.navigate(['dashboard']);
    } else {
      console.log("error in navigate");
      sessionStorage.setItem("isLoggedIn", "false");
    }


  }
  onForgotPassword() {
    console.log("Logging from forgot password")
  }

  toggleForm() {
    this.router.navigate(['signup']);
  }
}

// export class LoginComponent implements OnInit {
//   activeForm : 'login' | 'signup' = 'login';
//   signupForm !:FormGroup;

//   form!: FormGroup;
//   constructor(private fb:FormBuilder,
//     private router:Router
//   ) {
//     this.form = this.fb.group({
//       username : ['', Validators.required],
//       //email : ['', Validators.required],
//       password: ['', [Validators.required,Validators.minLength(3)]]
//      });
//      this.signupForm = this.fb.group({
//       username : ['', Validators.required],
//         email : ['', Validators.required],
//         password: ['', [Validators.required,Validators.minLength(3)]]
//      })


//   }



//   ngOnInit(): void {

//   }
//   validateForm():void{
//     let data = this.form.value;
//     console.log("form value is ... "+  JSON.stringify(data));
//    // this.userService.login(data);
//      let username = data.username;
//      let password = data.password;
//      console.log("here is username  .. ", username, password);
//     if(username === "kshama" && password === "123"){
//      // sessionStorage.setItem("isLoggedIn","true");
//       this.router.navigate(['/dashboard']);
//     }else{
//       console.log("error in navigate");
//      // sessionStorage.setItem("isLoggedIn", "false");
//     }


//   }
//   onForgotPassword(){
//     console.log("Logging from forgot password")
//   }
//   SignupForm(){
//     console.log("Signup page");
//     this.router.navigate(['login']);

//   }
//   toggleForm(form: 'login' | 'signup'){
//     this.activeForm = form;

//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    const loginInfo = this.loginForm.value;
    const user = new User(loginInfo.login, loginInfo.senha);

    this.loginService.login(user).subscribe(() => {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/consulta');
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: err.error
      });
      this.loginForm.reset();
    });
  }
}

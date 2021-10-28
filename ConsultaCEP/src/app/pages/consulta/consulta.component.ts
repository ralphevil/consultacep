import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from 'src/app/services/consultaCep';
import { Cep } from 'src/app/models/cep';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  consultForm: FormGroup;
  address = new Cep();

  constructor(private router: Router, private formBuilder: FormBuilder, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
    this.consultForm = this.formBuilder.group({
      cep: ['', Validators.required]
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    const cep = this.consultForm.value.cep;
    
    this.consultaCepService.consultarCep(cep).subscribe((location: Cep) => {
      this.address = location;
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: err.error
      });
      this.consultForm.reset();
      this.address = new Cep();
    });
  }

  onLogOut(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigateByUrl('/');
  }

  onReset(): void {
    this.consultForm.reset();
    this.address = new Cep();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PRIMARY_OUTLET } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mostra = false;
  validaEnvio = false;
  enviando = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_NewMode', 'template_NewMode', e.target as HTMLFormElement, '3kP5HDtTD1bf80T2h')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.enviando = false;
        this.validaEnvio = true;
        this.mostra = true;
      }, (error) => {
        console.log(error.text);
        this.enviando = false;
        this.validaEnvio = false;
        this.mostra = true;
      });
  }

  form!: FormGroup;
  submitted = false;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  validaFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  telefoneFormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  mensagemFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  checkBoxFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      aceitarTermos: [false, Validators.requiredTrue]
    })
  }

  get f() {return this.form.controls;}

  onSubmit(){

    this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
  }

}

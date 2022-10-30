import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    { id: 1, name:"MAHATMA"},
    { id: 2, name:"OFS"},
  ];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        },
      },
    ],
  };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    nome: [null],
    email: [null],
    telefone: [null],
  });

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
  userData = [
    {
      image: "./assets/team/tooba.jpg",
      name: "Tooba Pervaiz",
      email: "tooba.sheikh1899@gmail.com",
      links: {
        "facebook": "",
        "linkedin": "",
        "twitter": "",
        "instagram": "",
      }
    },
    {
      image: "./assets/team/hafsa.jpg",
      name: "Hafsa Saleem",
      email: "hafsasaleemuet@gmail.com",
      links: {
        "facebook": "",
        "linkedin": "",
        "twitter": "",
        "instagram": "",
      }
    },
    {
      image: "./assets/team/samia.jpg",
      name: "Samia Shoukat",
      email: "samia.shoukat48@gmail.com",
      links: {
        "facebook": "",
        "linkedin": "",
        "twitter": "",
        "instagram": "",
      }
    },
    {
      image: "./assets/team/ahsan.png",
      name: "Ahsan Saleem",
      email: "ahsnasaleem6389@gmail.com",
      links: {
        "facebook": "",
        "linkedin": "",
        "twitter": "",
        "instagram": "",
      }
    },
  ]

  slides = [
    { image: './assets/banner/banner-1.jpg', text: 'heading-1', content: "We provide Best Results Of fMri Images For Brain Diseases." },
    { image: './assets/banner/banner-2.jpg', text: 'heading-2', content: "We provide Best Results Of fMri Images For Brain Diseases." },
    { image: './assets/banner/banner-3.jpg', text: 'heading-3', content: "We provide Best Results Of fMri Images For Brain Diseases." },
  ];
}

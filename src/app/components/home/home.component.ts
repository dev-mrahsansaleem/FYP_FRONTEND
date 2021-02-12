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
  samples = [
    { image: './assets/images/a.jpg', subtitle: 'hhshssh' },
    { image: './assets/images/a.jpg', subtitle: 'hhshssh' },
    { image: './assets/images/a.jpg', subtitle: 'hhshssh' },
    { image: './assets/images/a.jpg', subtitle: 'hhshssh' },
    { image: './assets/images/a.jpg', subtitle: 'hhshssh' },
  ];

  procedure = [
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
    {
      title: 'title 1',
      image: './assets/images/lit.jpg',
      content:
        'Functional Magnetic Resonance Imaging Technology which is used to detect    the brain diseases.User Uses the MRI and fMRI report in our website to    diagnose the defects in the brain.',
    },
  ];

  slides = [
    { image: './assets/images/lit.jpg', text: 'test1' },
    { image: './assets/images/ya.jpg', text: 'test' },
    { image: './assets/images/koo.jpg', text: 'test' },
    { image: './assets/images/koo.jpg', text: 'test' },
  ];
}

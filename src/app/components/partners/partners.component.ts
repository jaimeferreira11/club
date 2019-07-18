import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styles: []
})
export class PartnersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#partner-slider-2').owlCarousel({
      loop: true,
      dots: false,
      nav: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoHeight: true,
      responsiveCla1ss: true,
      responsive: {
          0: {
              items: 2
          },
          540: {
              items: 2,
          },
          720: {
              items: 3,
          },
          992: {
              items: 3,
          },
          1140: {
              items: 4,
          },
      }
  });


  }

}

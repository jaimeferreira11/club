import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styles: []
})
export class TestimoniosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     /* =============================================
            12.0 - Testimonial Slider
        ============================================= */
        $('#testimonial-slider').owlCarousel({
          loop: true,
          dots: false,
          nav: false,
          autoplay: true,
          autoplayHoverPause: true,
          autoHeight: true,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              540: {
                  items: 1,
              },
              720: {
                  items: 1,
              },
              992: {
                  items: 2,
              },
              1140: {
                  items: 2,
              },
          }
      });
  }

}

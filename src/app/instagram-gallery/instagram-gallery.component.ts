import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-instagram-gallery',
  templateUrl: './instagram-gallery.component.html',
  styleUrls: ['./instagram-gallery.component.css']
})
export class InstagramGalleryComponent implements OnInit {

  config: SwiperOptions = {
    pagination: false,
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}

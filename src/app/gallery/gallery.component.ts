import { Component, OnInit } from '@angular/core';

declare const Fancybox: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox="gallery"]', {

    });

    // setTimeout(() => {
    //   Fancybox.bind("[data-fancybox='gallery']", {
    //     Thumbs: {
    //       autoStart: true,
    //       type: "modern",
    //       axis: 'x'
    //     },
    //     Toolbar: {
    //       display: {
    //         right: ['slideshow', 'fullscreen', 'close'],
    //         left: ['thumbs']
    //       }
    //     }
    //   });
    // });


    console.log(Fancybox.version);


    // Fancybox.bind("[data-fancybox='gallery']", {
    //   Thumbs: {
    //     type: "modern",
    //   },
    //   Toolbar: {
    //     display: {
    //       right: ['slideshow', 'fullscreen', 'close']
    //     }
    //   },
    //   autoStart: true,
    //   // Carousel: {
    //   //   transition: "fade",
    //   // },
    //   // // Thumbs: false,
    //   // transitionEffect: "tube",
    //   // animationEffect: "zoom",
    //   // fit: 'contain'
    // });
  }

  images = [
    // { src: 'assets/images/s1.jpg', thumb: 'assets/images/s1.jpg', caption: 'Image 1', type: 'image' },
    // { src: 'assets/images/s2.jpg', thumb: 'assets/images/s2.jpg', caption: 'Image 2', type: 'image' },
    // { src: 'assets/images/s3.jpg', thumb: 'assets/images/s3.jpg', caption: 'Image 3', type: 'image' },
    // { src: 'assets/images/s4.jpg', thumb: 'assets/images/s4.jpg', caption: 'Image 4', type: 'image' },
    // { src: 'assets/images/s5.jpg', thumb: 'assets/images/s5.jpg', caption: 'Image 5', type: 'image' },
    // { src: 'assets/images/s6.jpg', thumb: 'assets/images/s6.jpg', caption: 'Image 5', type: 'image' }
  ]

  showFancyBox() {
    // Fancybox.show(this.images.map(image => ({
    //   src: image.src,
    //   thumb: image.thumb,
    //   caption: image.caption
    // })), {
    // Carousel: {
    // transition: "fade",
    // },
    // Thumbs: false,
    // transitionEffect: "tube",
    // animationEffect: "zoom",
    // fit: "contain",

    // }
    // );


  }


}

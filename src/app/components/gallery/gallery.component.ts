import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    data: Date = new Date();
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[] = [
        {
            small: './assets/img/bg3-s.jpg',
            medium: './assets/img/bg3-s.jpg',
            big: './assets/img/bg3.jpg'
        },
        {
            small: './assets/img/bg5-s.jpg',
            medium: './assets/img/bg5-s.jpg',
            big: './assets/img/bg5.jpg'
        },
        {
            small: './assets/img/bg4-s.jpg',
            medium: './assets/img/bg4-s.jpg',
            big: './assets/img/bg4.jpg'
        },
        {
            small: './assets/img/bg1-s.jpg',
            medium: './assets/img/bg1-s.jpg',
            big: './assets/img/bg1.jpg'
        },
        {
            small: './assets/img/bg2-s.jpg',
            medium: './assets/img/bg2-s.jpg',
            big: './assets/img/bg2.jpg'
        }
    ];

    constructor() {
        this.setGalleryOptions();
    }

    ngOnInit() {}

    private setGalleryOptions(): void {
        this.galleryOptions = [
            {
                width: '1024px',
                height: '800px',
                thumbnailsColumns: 4,
                imageSize: 'contain',
                previewFullscreen: true,
                previewKeyboardNavigation: true,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                previewZoom: true,
                imageSwipe: true,
                thumbnailsSwipe: true,
                previewSwipe: true,
                // imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true,
                imageAnimation: 'slide'
            },
            // max-width 800
            {
                breakpoint: 1462,
                width: '70%',
                height: '800px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '80%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                width: '90%',
                height: '350px',
                imagePercent: 70,
                thumbnailsPercent: 30,
                thumbnailsMargin: 30,
                thumbnailMargin: 10
                // preview: false
            }
        ];
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { BootstrapOptions } from '../../../node_modules/@angular/core/src/application_ref';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  imageUrls = [
    { url: 'assets/img/nav/about.jpg', caption: 'About', isActive: true, transferUrl: 'about' },
    { url: 'assets/img/nav/web-design.jpg', caption: 'Web Design', isActive: false, transferUrl: 'web-design' },
    { url: 'assets/img/nav/photography.jpg', caption: 'Photography', isActive: false, transferUrl: 'photography' },
    { url: 'assets/img/nav/writing.jpg', caption: 'Writing', isActive: false, transferUrl: 'writing' },
    { url: 'assets/img/nav/contact.jpg', caption: 'Contact', isActive: false, transferUrl: 'contact' }
  ];

  slideIndex: number = 0;
  hasInit: Boolean = true;

  constructor(private router: Router) { }

  @ViewChild('slideshow') slideshow: any;


  ngOnInit() {
    setTimeout(() => {
      let activeUrl = window.location.pathname.substr(1);
      this.imageUrls.forEach((section, index) => {
        if (section.transferUrl === activeUrl && !section.isActive) {
          this.imageUrls[0].isActive = false;
          this.hasInit = false;
          this.slideshow.goToSlide(index);
          section.isActive = true;
          this.slideIndex = index;
        }
      });
    }, 1);
  }

  onSlideLeft(slide) {
    this.imageUrls[this.slideIndex].isActive = false;
    if (this.slideIndex === 0) {
      this.slideIndex = 4;
    } else {
      this.slideIndex--;
    }
    this.imageUrls[this.slideIndex].isActive = true;
    this.router.navigate([this.imageUrls[this.slideIndex].transferUrl]);
  }

  onSlideRight(slide) {
    if (!this.hasInit) {
      this.hasInit = true;
    } else {
      this.imageUrls[this.slideIndex].isActive = false;
      if (this.slideIndex === 4) {
        this.slideIndex = 0;
      } else {
        this.slideIndex++;
      }
      this.imageUrls[this.slideIndex].isActive = true;
      this.router.navigate([this.imageUrls[this.slideIndex].transferUrl]);
    }
  }

  displaySectionName(section: string) {
    return section === window.location.pathname.substr(1);
  }

}

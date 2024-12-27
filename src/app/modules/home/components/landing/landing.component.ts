import { Component, HostListener, AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit, OnDestroy{

  private currentIndex = 0;
  private intervalId: any;
  private startX = 0;
  private currentTranslate = 0;
  private isDragging = false;


  constructor() {}

  ngAfterViewInit(): void {
    this.startAutoScroll();
    this.addDragEvents();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  private startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  private stopAutoScroll(): void {
    clearInterval(this.intervalId);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.getItems().length;
    this.updateCarousel();
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.getItems().length) % this.getItems().length;
    this.updateCarousel();
  }

  private updateCarousel(): void {
    const offset = -this.currentIndex * 100; 
    this.getItems().forEach((item) => {
      item.style.transform = `translateX(${offset}%)`;
    });
  }

  private addDragEvents(): void {
    const carousel = document.querySelector('.carousel') as HTMLElement;

    carousel.addEventListener('mousedown', this.startDrag.bind(this));
    carousel.addEventListener('mousemove', this.drag.bind(this));
    carousel.addEventListener('mouseup', this.endDrag.bind(this));
    carousel.addEventListener('mouseleave', this.endDrag.bind(this));

    carousel.addEventListener('touchstart', this.startDrag.bind(this));
    carousel.addEventListener('touchmove', this.drag.bind(this));
    carousel.addEventListener('touchend', this.endDrag.bind(this));
  }

  private startDrag(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isDragging = true;
    this.stopAutoScroll();

    const startX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.startX = startX - this.currentTranslate;
  }

  private drag(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();
    const currentX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const moveX = currentX - this.startX;

    this.currentTranslate = moveX;
    this.getItems().forEach((item) => {
      item.style.transform = `translateX(${moveX}px)`;
    });
  }

  private endDrag(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging) return;

    this.isDragging = false;

    const currentX =
      event instanceof MouseEvent ? event.clientX : event.changedTouches[0].clientX;
    const distance = currentX - this.startX;

    if (Math.abs(distance) > 50) {
      if (distance < 0) {
        this.next();
      } else {
        this.previous();
      }
    } else {
      this.updateCarousel(); 
    }

    this.startAutoScroll(); 
  }

  private getItems(): NodeListOf<HTMLElement> {
    return document.querySelectorAll<HTMLElement>('.fondo');
  }

}

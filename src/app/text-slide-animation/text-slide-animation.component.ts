import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-text-slide-animation',
  templateUrl: './text-slide-animation.component.html',
  animations: [
    trigger('slideEffect', [
      state('start', style({
        color: 'rgba(0,0,0,0)',
        'padding-left':'0%'
      })),
      state('center', style({
        color: 'rgba(0,0,0,1)',
        'padding-left': '30%'
      })),
      transition('start => center', [
        animate('1s')
      ])
    ])
  ],
  styleUrls: ['./text-slide-animation.component.css']

})
export class TextSlideAnimationComponent implements OnInit, AfterViewInit {
  public state = 'start'
  @Input() text: String
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.state = 'center'
    this.cdRef.detectChanges()
  }
}

import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() pUserName: string = "";

  counter: number = 0;

  constructor() {
    // console.log('constructor method is triggered');
    // console.log(this.pUserName);
  }
  
  ngOnInit() {
    // console.log('NgOnInit hook triggered');
    // console.log(this.pUserName);
  }

  ngOnChanges() {
    // console.log('OnChanges Triggered');
  }

  ngDoCheck() {
    // console.log('ngDoCheck triggers');
  }

  incrementCounter() {
    this.counter ++;
  };

  ngAfterContentInit() {
    // console.log('ngAfterContentInit Trigered');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked trigered');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit trigered');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked triggered');
  }

}

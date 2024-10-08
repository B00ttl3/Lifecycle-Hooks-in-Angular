import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit {

  @Input() pUserName: string = "";

  constructor() {
    console.log('constructor method is triggered');
    console.log(this.pUserName);
  }
  
  ngOnInit() {
    console.log('NgOnInit hook triggered');
    console.log(this.pUserName);
  }

  ngOnChanges() {
    console.log('OnChanges Triggered');
  }

}

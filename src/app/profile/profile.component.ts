import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges {

  @Input() pUserName: string = "";

  ngOnChanges() {
    console.log('OnChanges Triggered');
  }

}

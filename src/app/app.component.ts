import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgComponentOutlet, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ProfileComponent } from './profile/profile.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AppNavbar, 
    HeaderComponent, 
    FormsModule, 
    NgIf, 
    NgTemplateOutlet, 
    NgFor, 
    NgSwitch, 
    NgSwitchCase, 
    NgSwitchDefault, 
    PostsListComponent,
    NgComponentOutlet,
    ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically'

  userName: string = "Umair Munir";

  changeUser() {
    this.userName = "Something New";
  }

  constructor (private viewContainer: ViewContainerRef) {

  }

  loadComponent() {
    this.viewContainer.createComponent(ProfileComponent);
  }

  removeComponent() {
    this.viewContainer.remove();
  }

  // loadComponent(){
  //   return PostsListComponent;
  // }

}

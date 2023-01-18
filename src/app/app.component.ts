import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular 10 Spring Boot CRUD Full Stack App';
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',

      home: true,
    },
    {
      title: 'Users',
      icon: 'people-outline',
      url: '/users',
    },
    {
      title: 'Info',
      icon: 'info-outline',
      link: '/info',
    },
    {
      title: 'Contact us',
      icon: 'phone-call-outline',
      link: '/contact-us',
    },
    {
      title: 'Employee List',
      icon: 'person-outline',
      link: '/employees',
    },
    {
      title: 'Add Employee',
      icon: 'person-add-outline',
      link: '/create-employee',
    },
    {
      title: 'Update Employee',
      icon: 'monitor-outline',
      link: '/update-employee',
    },
  ];

  constructor(private readonly sidebarService: NbSidebarService) {}

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}

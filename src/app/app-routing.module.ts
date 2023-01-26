import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UsersComponent } from './users/users.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  { path: 'users', component: UsersComponent },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  // { path: '', redirectTo: 'employees', pathMatch: 'full' },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent,
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent,
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'view-employee-details',
    component: ViewEmployeeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  UsersComponent,
  InfoComponent,
  ContactUsComponent,
  CreateEmployeeComponent,
];

import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { StudentComponent } from '../app/student/student.component';


export const routes: Routes = [
      {
    path: '',
    component: LoginComponent
  },
   {
    path: 'students',
    component: StudentComponent
  }

];

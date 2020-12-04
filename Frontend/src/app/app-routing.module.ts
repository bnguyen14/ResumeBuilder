import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularResumeComponent } from './angularresume/angular-resume/angular-resume.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SavedResumesComponent } from './saved-resumes/saved-resumes.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'app', component: AngularResumeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'resumes', component: SavedResumesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

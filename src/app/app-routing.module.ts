import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'job-info', component: JobInfoComponent },
  { path: 'job-apply', component: JobApplyComponent },
  { path: 'job-create', component: JobCreateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

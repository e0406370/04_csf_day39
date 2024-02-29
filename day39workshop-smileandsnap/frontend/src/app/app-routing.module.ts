import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UploadComponent } from './upload.component';

const routes: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'upload', component: UploadComponent, title: 'Upload' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

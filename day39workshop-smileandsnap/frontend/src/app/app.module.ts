import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload.component';
import { MainComponent } from './main.component';
import { WebcamModule } from 'ngx-webcam';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    MainComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule
  ],

  providers: [PhotoService],
  
  bootstrap: [AppComponent],
})
  
export class AppModule {}
